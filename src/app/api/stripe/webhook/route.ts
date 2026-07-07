import { NextResponse } from "next/server";
import {
  handleStripeEvent,
  parseStripeEvent,
  verifyStripeWebhookPayload,
} from "@/lib/stripe/webhook";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const payload = await request.text();

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  try {
    verifyStripeWebhookPayload(payload, signature);
    const event = parseStripeEvent(payload);
    const result = await handleStripeEvent(event);

    return NextResponse.json({ received: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to handle Stripe webhook";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
