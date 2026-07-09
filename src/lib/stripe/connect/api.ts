import type Stripe from "stripe";
import { getStripeClient, getStripeWebhookSecret } from "@/lib/stripe/client";

const DEFAULT_CONNECT_APPLICATION_FEE_AMOUNT = 123;
const CONNECT_ACCOUNT_INCLUDE = ["configuration.merchant", "requirements"] as const;

export const CONNECT_REQUIREMENT_EVENT_TYPES = [
  "v2.core.account[requirements].updated",
  "v2.core.account[configuration.merchant].capability_status_updated",
  "v2.core.account[configuration.customer].capability_status_updated",
  "v2.core.account[configuration.recipient].capability_status_updated",
] as const;

export const CONNECT_SUBSCRIPTION_EVENT_TYPES = [
  "customer.subscription.updated",
  "customer.subscription.deleted",
  "payment_method.attached",
  "payment_method.detached",
  "customer.updated",
  "customer.tax_id.created",
  "customer.tax_id.deleted",
  "customer.tax_id.updated",
  "billing_portal.configuration.created",
  "billing_portal.configuration.updated",
  "billing_portal.session.created",
] as const;

export type ConnectedAccountStatus = {
  accountId: string;
  displayName: string | null;
  contactEmail: string | null;
  cardPaymentsStatus: string | null;
  requirementsStatus: string | null;
  readyToProcessPayments: boolean;
  onboardingComplete: boolean;
};

export type StorefrontProduct = {
  id: string;
  name: string;
  description: string | null;
  priceId: string | null;
  unitAmount: number | null;
  currency: string | null;
};

type ThinEventWithHelpers = Stripe.V2.Core.EventNotification & {
  fetchEvent: () => Promise<{ id: string }>;
  fetchRelatedObject: () => Promise<{ id?: string } | null>;
};

function getApplicationFeeAmount() {
  const rawAmount = process.env.STRIPE_CONNECT_APPLICATION_FEE_AMOUNT;

  if (!rawAmount) {
    return DEFAULT_CONNECT_APPLICATION_FEE_AMOUNT;
  }

  const amount = Number(rawAmount);

  if (!Number.isInteger(amount) || amount < 0) {
    throw new Error("STRIPE_CONNECT_APPLICATION_FEE_AMOUNT must be a whole number of cents.");
  }

  return amount;
}

function getSubscriptionPriceId() {
  const priceId = process.env.STRIPE_CONNECT_SUBSCRIPTION_PRICE_ID;

  // Placeholder required in .env:
  // STRIPE_CONNECT_SUBSCRIPTION_PRICE_ID=price_...
  if (!priceId || priceId === "price_your_platform_subscription_price_id") {
    throw new Error(
      "Missing STRIPE_CONNECT_SUBSCRIPTION_PRICE_ID. Add a recurring Price ID for your platform subscription.",
    );
  }

  return priceId;
}

function normalizeCurrency(currency: string) {
  return currency.trim().toLowerCase() || "usd";
}

function toPositiveCents(value: string | number) {
  const amount = typeof value === "number" ? value : Number(value);

  if (!Number.isInteger(amount) || amount <= 0) {
    throw new Error("Amount must be a positive whole number of cents.");
  }

  return amount;
}

function resolvePrice(price: string | Stripe.Price | null | undefined) {
  if (!price) {
    return {
      priceId: null,
      unitAmount: null,
      currency: null,
    };
  }

  if (typeof price === "string") {
    return {
      priceId: price,
      unitAmount: null,
      currency: null,
    };
  }

  return {
    priceId: price.id,
    unitAmount: price.unit_amount,
    currency: price.currency,
  };
}

export async function createConnectedAccount(input: {
  displayName: string;
  contactEmail: string;
}) {
  const stripeClient = getStripeClient();

  if (!input.displayName.trim()) {
    throw new Error("Display name is required to create a connected account.");
  }

  if (!input.contactEmail.trim()) {
    throw new Error("Contact email is required to create a connected account.");
  }

  // Create a V2 Account with the exact fields requested by the blueprint:
  // no top-level `type`, no legacy Express/Standard/Custom account creation.
  const account = await stripeClient.v2.core.accounts.create({
    display_name: input.displayName.trim(),
    contact_email: input.contactEmail.trim(),
    identity: {
      country: "us",
    },
    dashboard: "full",
    defaults: {
      responsibilities: {
        fees_collector: "stripe",
        losses_collector: "stripe",
      },
    },
    configuration: {
      customer: {},
      merchant: {
        capabilities: {
          card_payments: {
            requested: true,
          },
        },
      },
    },
  });

  // TODO: Persist this mapping in your database when auth exists:
  // currentUser.id -> account.id. This demo returns the account ID in the URL
  // so you can test the flow before wiring real users and storage.
  return account;
}

export async function retrieveConnectedAccountStatus(accountId: string): Promise<ConnectedAccountStatus> {
  const stripeClient = getStripeClient();

  if (!accountId) {
    throw new Error("Missing connected account ID.");
  }

  // Pull live status directly from Stripe each time for the demo. In production
  // you can cache display fields, but keep requirements/capability status fresh
  // using webhooks plus an on-demand retrieve like this.
  const account = await stripeClient.v2.core.accounts.retrieve(accountId, {
    include: [...CONNECT_ACCOUNT_INCLUDE],
  });

  const cardPaymentsStatus =
    account.configuration?.merchant?.capabilities?.card_payments?.status ?? null;
  const requirementsStatus = account.requirements?.summary?.minimum_deadline?.status ?? null;

  return {
    accountId: account.id,
    displayName: account.display_name ?? null,
    contactEmail: account.contact_email ?? null,
    cardPaymentsStatus,
    requirementsStatus,
    readyToProcessPayments: cardPaymentsStatus === "active",
    onboardingComplete: requirementsStatus !== "currently_due" && requirementsStatus !== "past_due",
  };
}

export async function createConnectedAccountOnboardingLink(input: {
  accountId: string;
  origin: string;
}) {
  const stripeClient = getStripeClient();
  const dashboardUrl = `${input.origin}/stripe-connect?accountId=${encodeURIComponent(input.accountId)}`;

  // Account Links are single use. If Stripe redirects to refresh_url, this route
  // creates a brand-new link instead of trying to reuse an expired one.
  return stripeClient.v2.core.accountLinks.create({
    account: input.accountId,
    use_case: {
      type: "account_onboarding",
      account_onboarding: {
        configurations: ["merchant", "customer"],
        refresh_url: `${input.origin}/api/stripe/connect/onboarding?accountId=${encodeURIComponent(input.accountId)}`,
        return_url: `${dashboardUrl}&onboarding=returned`,
      },
    },
  });
}

export async function createConnectedAccountProduct(input: {
  accountId: string;
  name: string;
  description?: string;
  unitAmount: string | number;
  currency: string;
}) {
  const stripeClient = getStripeClient();

  if (!input.accountId) {
    throw new Error("Missing connected account ID.");
  }

  if (!input.name.trim()) {
    throw new Error("Product name is required.");
  }

  // Passing stripeAccount sends the Stripe-Account header, so the Product and
  // Price are created on the connected account instead of on the platform.
  return stripeClient.products.create(
    {
      name: input.name.trim(),
      description: input.description?.trim() || undefined,
      default_price_data: {
        unit_amount: toPositiveCents(input.unitAmount),
        currency: normalizeCurrency(input.currency),
      },
    },
    {
      stripeAccount: input.accountId,
    },
  );
}

export async function listConnectedAccountProducts(accountId: string): Promise<StorefrontProduct[]> {
  const stripeClient = getStripeClient();

  if (!accountId) {
    throw new Error("Missing connected account ID.");
  }

  // The connected account header is also required when reading products, or the
  // platform account would be queried instead of the seller's account.
  const products = await stripeClient.products.list(
    {
      limit: 20,
      active: true,
      expand: ["data.default_price"],
    },
    {
      stripeAccount: accountId,
    },
  );

  return products.data.map((product) => {
    const price = resolvePrice(product.default_price);

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      priceId: price.priceId,
      unitAmount: price.unitAmount,
      currency: price.currency,
    };
  });
}

export async function createDirectChargeCheckoutSession(input: {
  accountId: string;
  priceId: string;
  origin: string;
}) {
  const stripeClient = getStripeClient();

  if (!input.accountId) {
    throw new Error("Missing connected account ID.");
  }

  if (!input.priceId) {
    throw new Error("Missing price ID.");
  }

  // This is a Direct Charge because the Checkout Session is created with the
  // connected account header. The application fee lets the platform monetize
  // the transaction while the connected account remains the merchant.
  const session = await stripeClient.checkout.sessions.create(
    {
      line_items: [
        {
          price: input.priceId,
          quantity: 1,
        },
      ],
      payment_intent_data: {
        application_fee_amount: getApplicationFeeAmount(),
      },
      mode: "payment",
      success_url: `${input.origin}/stripe-connect/success?session_id={CHECKOUT_SESSION_ID}&accountId=${encodeURIComponent(input.accountId)}`,
      cancel_url: `${input.origin}/stripe-connect/storefront/${encodeURIComponent(input.accountId)}?checkout=cancelled`,
    },
    {
      stripeAccount: input.accountId,
    },
  );

  if (!session.url) {
    throw new Error("Stripe did not return a Checkout Session URL.");
  }

  return session;
}

export async function createPlatformSubscriptionCheckoutSession(input: {
  accountId: string;
  origin: string;
}) {
  const stripeClient = getStripeClient();

  if (!input.accountId) {
    throw new Error("Missing connected account ID.");
  }

  // This subscription is created at the platform level. With V2 Accounts, the
  // connected account ID can also act as the customer account for Billing.
  const session = await stripeClient.checkout.sessions.create({
    customer_account: input.accountId,
    mode: "subscription",
    line_items: [
      {
        price: getSubscriptionPriceId(),
        quantity: 1,
      },
    ],
    success_url: `${input.origin}/stripe-connect?accountId=${encodeURIComponent(input.accountId)}&subscription=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${input.origin}/stripe-connect?accountId=${encodeURIComponent(input.accountId)}&subscription=cancelled`,
  });

  if (!session.url) {
    throw new Error("Stripe did not return a subscription Checkout Session URL.");
  }

  return session;
}

export async function createPlatformBillingPortalSession(input: {
  accountId: string;
  origin: string;
}) {
  const stripeClient = getStripeClient();

  if (!input.accountId) {
    throw new Error("Missing connected account ID.");
  }

  const session = await stripeClient.billingPortal.sessions.create({
    customer_account: input.accountId,
    return_url: `${input.origin}/stripe-connect?accountId=${encodeURIComponent(input.accountId)}`,
  });

  return session;
}

export async function handleThinConnectEvent(payload: string, signature: string) {
  const stripeClient = getStripeClient();
  const webhookSecret = getStripeWebhookSecret("STRIPE_CONNECT_THIN_WEBHOOK_SECRET");

  // Thin events contain a lightweight notification. parseEventNotification
  // verifies the signature, parses the event notification, and gives us helper
  // methods to fetch the full V2 event and related account.
  const eventNotification = stripeClient.parseEventNotification(
    payload,
    signature,
    webhookSecret,
  ) as ThinEventWithHelpers;
  const fullEvent = await eventNotification.fetchEvent();
  const relatedAccount = await eventNotification.fetchRelatedObject();

  switch (eventNotification.type) {
    case "v2.core.account[requirements].updated":
    case "v2.core.account[configuration.merchant].capability_status_updated":
    case "v2.core.account[configuration.customer].capability_status_updated":
    case "v2.core.account[configuration.recipient].capability_status_updated":
      // TODO: Persist updated requirement/capability status for
      // relatedAccount.id in your database and prompt the user to return to
      // onboarding if Stripe reports currently_due or past_due requirements.
      return {
        handled: true,
        eventType: eventNotification.type,
        eventId: fullEvent.id,
        accountId: relatedAccount?.id ?? null,
      };
    default:
      return {
        handled: false,
        eventType: eventNotification.type,
        eventId: fullEvent.id,
      };
  }
}

export async function handleConnectSubscriptionEvent(payload: string, signature: string) {
  const stripeClient = getStripeClient();
  const webhookSecret = getStripeWebhookSecret("STRIPE_CONNECT_SUBSCRIPTION_WEBHOOK_SECRET");
  const event = stripeClient.webhooks.constructEvent(payload, signature, webhookSecret);

  switch (event.type) {
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;

      // TODO: Store subscription.status, cancel_at_period_end, quantity, and
      // subscription.items.data[0].price.id for subscription.customer_account.
      // Do not use a legacy customer ID for V2 Accounts; the account ID has the
      // acct_ shape and is available as customer_account.
      return {
        handled: true,
        eventType: event.type,
        accountId: subscription.customer_account ?? null,
        subscriptionId: subscription.id,
        status: subscription.status,
      };
    }
    case "payment_method.attached":
    case "payment_method.detached":
    case "customer.updated":
    case "customer.tax_id.created":
    case "customer.tax_id.deleted":
    case "customer.tax_id.updated":
    case "billing_portal.configuration.created":
    case "billing_portal.configuration.updated":
    case "billing_portal.session.created":
      // TODO: Store billing-profile updates or audit logs as needed. These
      // events should update billing records only, never login credentials.
      return {
        handled: true,
        eventType: event.type,
      };
    default:
      return {
        handled: false,
        eventType: event.type,
      };
  }
}
