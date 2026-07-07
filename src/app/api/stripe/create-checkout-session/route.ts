import { NextResponse } from "next/server";
import { createOneTimeCheckoutSession } from "@/lib/stripe/api";

export const runtime = "nodejs";

function getRequestOrigin(request: Request) {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;

  if (configuredOrigin) {
    return configuredOrigin.replace(/\/$/, "");
  }

  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      clientReferenceId?: string;
    };

    const session = await createOneTimeCheckoutSession({
      origin: getRequestOrigin(request),
      clientReferenceId: body.clientReferenceId,
    });

    return NextResponse.json(session);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create Checkout Session";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
