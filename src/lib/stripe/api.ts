const STRIPE_API_BASE = "https://api.stripe.com";
const CHECKOUT_PRODUCT_NAME = "Example Product";
const CHECKOUT_CURRENCY = "usd";
const CHECKOUT_UNIT_AMOUNT = 2000;

type StripeProduct = {
  id: string;
  default_price: string | { id: string } | null;
};

type StripeCheckoutSession = {
  id: string;
  url: string | null;
};

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

function getStripeSecretKey() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  return secretKey;
}

function appendStripeParams(params: URLSearchParams, values: Record<string, string | number | undefined>) {
  Object.entries(values).forEach(([key, value]) => {
    if (value !== undefined) {
      params.append(key, String(value));
    }
  });
}

async function stripeRequest<T>(path: string, values: Record<string, string | number | undefined>) {
  const body = new URLSearchParams();
  appendStripeParams(body, values);

  const response = await fetch(`${STRIPE_API_BASE}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getStripeSecretKey()}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  const payload = await response.json();

  if (!response.ok) {
    const message =
      typeof payload?.error?.message === "string"
        ? payload.error.message
        : "Stripe request failed";
    throw new Error(message);
  }

  return payload as T;
}

function resolveDefaultPriceId(product: StripeProduct) {
  if (typeof product.default_price === "string") {
    return product.default_price;
  }

  if (product.default_price?.id) {
    return product.default_price.id;
  }

  throw new Error("Stripe product was created without a default price");
}

export async function createOneTimeCheckoutProduct() {
  const product = await stripeRequest<StripeProduct>("/v1/products", {
    name: CHECKOUT_PRODUCT_NAME,
    "default_price_data[currency]": CHECKOUT_CURRENCY,
    "default_price_data[unit_amount]": CHECKOUT_UNIT_AMOUNT,
    "metadata[source]": "sumac_client_portal",
    "metadata[payment_type]": "one_time",
  });

  return {
    productId: product.id,
    priceId: resolveDefaultPriceId(product),
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
  const { priceId, productId } = await getCheckoutPrice();
  const successUrl = `${origin}/client-portal?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/client-portal?checkout=cancelled`;

  const session = await stripeRequest<StripeCheckoutSession>("/v1/checkout/sessions", {
    "line_items[0][price]": priceId,
    "line_items[0][quantity]": 1,
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    client_reference_id: clientReferenceId,
    "metadata[source]": "sumac_client_portal",
    "metadata[price_id]": priceId,
    "metadata[created_product_id]": productId,
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
