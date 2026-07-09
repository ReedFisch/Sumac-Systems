import Stripe from "stripe";

let cachedStripeClient: Stripe | null = null;

export function getStripeSecretKey() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  // Placeholder required in .env:
  // STRIPE_SECRET_KEY=sk_test_...
  if (!secretKey || secretKey === "sk_test_your_secret_key") {
    throw new Error(
      "Missing STRIPE_SECRET_KEY. Add your Stripe secret key from the Stripe Dashboard to your environment.",
    );
  }

  return secretKey;
}

export function getStripeClient() {
  if (!cachedStripeClient) {
    // Do not pin an API version here. Stripe's SDK uses the default version
    // bundled with the installed package, matching the blueprint requirement.
    cachedStripeClient = new Stripe(getStripeSecretKey());
  }

  return cachedStripeClient;
}

export function getRequestOrigin(request: Request) {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;

  if (configuredOrigin) {
    return configuredOrigin.replace(/\/$/, "");
  }

  return new URL(request.url).origin;
}

export function getStripeWebhookSecret(envName: string) {
  const secret = process.env[envName];

  // Placeholder required in .env:
  // STRIPE_WEBHOOK_SECRET=whsec_...
  if (!secret || secret.startsWith("whsec_your_")) {
    throw new Error(`Missing ${envName}. Add the webhook signing secret from the Stripe Dashboard.`);
  }

  return secret;
}
