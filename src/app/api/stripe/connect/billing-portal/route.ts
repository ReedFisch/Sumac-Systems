import { getRequestOrigin } from "@/lib/stripe/client";
import { createPlatformBillingPortalSession } from "@/lib/stripe/connect/api";
import {
  getFormString,
  redirectOrJson,
  stripeErrorResponse,
} from "@/lib/stripe/connect/http";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const session = await createPlatformBillingPortalSession({
      accountId: getFormString(formData, "accountId"),
      origin: getRequestOrigin(request),
    });

    return redirectOrJson(request, session.url, {
      portalUrl: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    return stripeErrorResponse(error);
  }
}
