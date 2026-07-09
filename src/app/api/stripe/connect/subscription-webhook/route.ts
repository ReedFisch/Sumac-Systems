import { NextResponse } from "next/server";
import { handleConnectSubscriptionEvent } from "@/lib/stripe/connect/api";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const payload = await request.text();

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  try {
    const result = await handleConnectSubscriptionEvent(payload, signature);

    return NextResponse.json({ received: true, ...result });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to handle Connect subscription webhook";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
