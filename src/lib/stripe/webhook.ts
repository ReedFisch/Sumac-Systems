import { createHmac, timingSafeEqual } from "node:crypto";

const WEBHOOK_TOLERANCE_SECONDS = 300;

type StripeCheckoutSessionCompleted = {
  id: string;
  object: "checkout.session";
  client_reference_id?: string | null;
  customer?: string | null;
  payment_intent?: string | null;
  payment_status?: string | null;
  status?: string | null;
  amount_total?: number | null;
  currency?: string | null;
  metadata?: Record<string, string>;
};

type StripeEvent = {
  id: string;
  type: string;
  data: {
    object: unknown;
  };
};

function getWebhookSecret() {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    throw new Error("Missing STRIPE_WEBHOOK_SECRET");
  }

  return webhookSecret;
}

function parseStripeSignature(signature: string) {
  return signature.split(",").reduce<{ timestamp?: string; signatures: string[] }>(
    (parsed, pair) => {
      const [key, value] = pair.split("=");

      if (key === "t") {
        parsed.timestamp = value;
      }

      if (key === "v1" && value) {
        parsed.signatures.push(value);
      }

      return parsed;
    },
    { signatures: [] },
  );
}

function timingSafeHexEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left, "hex");
  const rightBuffer = Buffer.from(right, "hex");

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export function verifyStripeWebhookPayload(payload: string, signatureHeader: string) {
  const { timestamp, signatures } = parseStripeSignature(signatureHeader);

  if (!timestamp || signatures.length === 0) {
    throw new Error("Invalid Stripe signature header");
  }

  const timestampSeconds = Number(timestamp);

  if (!Number.isFinite(timestampSeconds)) {
    throw new Error("Invalid Stripe signature timestamp");
  }

  const ageSeconds = Math.abs(Date.now() / 1000 - timestampSeconds);

  if (ageSeconds > WEBHOOK_TOLERANCE_SECONDS) {
    throw new Error("Stripe webhook timestamp is outside the tolerance window");
  }

  const signedPayload = `${timestamp}.${payload}`;
  const expectedSignature = createHmac("sha256", getWebhookSecret())
    .update(signedPayload, "utf8")
    .digest("hex");

  const isValid = signatures.some((signature) => timingSafeHexEqual(signature, expectedSignature));

  if (!isValid) {
    throw new Error("Invalid Stripe webhook signature");
  }
}

export function parseStripeEvent(payload: string) {
  return JSON.parse(payload) as StripeEvent;
}

export async function recordCompletedCheckoutSession(session: StripeCheckoutSessionCompleted) {
  return {
    sessionId: session.id,
    clientReferenceId: session.client_reference_id ?? null,
    customerId: session.customer ?? null,
    paymentIntentId: session.payment_intent ?? null,
    paymentStatus: session.payment_status ?? null,
    status: session.status ?? null,
    amountTotal: session.amount_total ?? null,
    currency: session.currency ?? null,
    priceId: session.metadata?.price_id ?? null,
    createdProductId: session.metadata?.created_product_id ?? null,
  };
}

export async function handleStripeEvent(event: StripeEvent) {
  if (event.type !== "checkout.session.completed") {
    return {
      handled: false,
      eventType: event.type,
    };
  }

  const session = event.data.object as StripeCheckoutSessionCompleted;
  const checkoutSession = await recordCompletedCheckoutSession(session);

  return {
    handled: true,
    eventType: event.type,
    checkoutSession,
  };
}
