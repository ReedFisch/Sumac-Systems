import { getStripeClient } from "@/lib/stripe/client";

const CHECKOUT_PRODUCT_NAME = "Example Product";
const CHECKOUT_CURRENCY = "usd";
const CHECKOUT_UNIT_AMOUNT = 2000;

export type CreateCheckoutSessionInput = {
  origin: string;
  clientReferenceId?: string;
};

export type CreateCheckoutSessionResult = {
  checkoutUrl: string;
  sessionId: string;
  priceId: string;
  createdProductId?: string;
};

function resolveDefaultPriceId(defaultPrice: string | { id: string } | null | undefined) {
  if (typeof defaultPrice === "string") {
    return defaultPrice;
  }

  if (defaultPrice?.id) {
    return defaultPrice.id;
  }

  throw new Error("Stripe product was created without a default price");
}

export async function createOneTimeCheckoutProduct() {
  const stripeClient = getStripeClient();

  // Create the sample product and default price through the Stripe SDK client.
  // In production, create products/prices once in Dashboard or setup code and
  // store the reusable price ID in STRIPE_ONE_TIME_PRICE_ID.
  const product = await stripeClient.products.create({
    name: CHECKOUT_PRODUCT_NAME,
    default_price_data: {
      currency: CHECKOUT_CURRENCY,
      unit_amount: CHECKOUT_UNIT_AMOUNT,
    },
    metadata: {
      source: "sumac_client_portal",
      payment_type: "one_time",
    },
  });

  return {
    productId: product.id,
    priceId: resolveDefaultPriceId(product.default_price),
  };
}

async function getCheckoutPrice() {
  if (process.env.STRIPE_ONE_TIME_PRICE_ID) {
    return {
      priceId: process.env.STRIPE_ONE_TIME_PRICE_ID,
      productId: undefined,
    };
  }

  const product = await createOneTimeCheckoutProduct();

  return {
    priceId: product.priceId,
    productId: product.productId,
  };
}

export async function createOneTimeCheckoutSession({
  origin,
  clientReferenceId,
}: CreateCheckoutSessionInput): Promise<CreateCheckoutSessionResult> {
  const stripeClient = getStripeClient();
  const { priceId, productId } = await getCheckoutPrice();
  const successUrl = `${origin}/thank-you?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/thank-you?checkout=cancelled`;

  const session = await stripeClient.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    client_reference_id: clientReferenceId,
    metadata: {
      source: "sumac_client_portal",
      price_id: priceId,
      created_product_id: productId || "",
    },
  });

  if (!session.url) {
    throw new Error("Stripe did not return a Checkout Session URL");
  }

  return {
    checkoutUrl: session.url,
    sessionId: session.id,
    priceId,
    createdProductId: productId,
  };
}
