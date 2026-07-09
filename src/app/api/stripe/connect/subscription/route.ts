import { getRequestOrigin } from "@/lib/stripe/client";
import { createPlatformSubscriptionCheckoutSession } from "@/lib/stripe/connect/api";
import {
  getFormString,
  redirectOrJson,
  stripeErrorResponse,
} from "@/lib/stripe/connect/http";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const session = await createPlatformSubscriptionCheckoutSession({
      accountId: getFormString(formData, "accountId"),
      origin: getRequestOrigin(request),
    });

    return redirectOrJson(request, session.url || "", {
      checkoutUrl: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    return stripeErrorResponse(error);
  }
}
