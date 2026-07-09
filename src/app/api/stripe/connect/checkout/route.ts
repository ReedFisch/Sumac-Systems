import { getRequestOrigin } from "@/lib/stripe/client";
import { createDirectChargeCheckoutSession } from "@/lib/stripe/connect/api";
import {
  getFormString,
  redirectOrJson,
  stripeErrorResponse,
} from "@/lib/stripe/connect/http";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const session = await createDirectChargeCheckoutSession({
      accountId: getFormString(formData, "accountId"),
      priceId: getFormString(formData, "priceId"),
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
