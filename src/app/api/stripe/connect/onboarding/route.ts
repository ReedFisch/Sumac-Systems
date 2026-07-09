import { getRequestOrigin } from "@/lib/stripe/client";
import { createConnectedAccountOnboardingLink } from "@/lib/stripe/connect/api";
import {
  getFormString,
  redirectOrJson,
  stripeErrorResponse,
} from "@/lib/stripe/connect/http";

export const runtime = "nodejs";

async function createOnboardingResponse(request: Request, accountId: string) {
  const accountLink = await createConnectedAccountOnboardingLink({
    accountId,
    origin: getRequestOrigin(request),
  });

  return redirectOrJson(request, accountLink.url, {
    accountId,
    onboardingUrl: accountLink.url,
  });
}

export async function GET(request: Request) {
  try {
    const accountId = new URL(request.url).searchParams.get("accountId") || "";

    return createOnboardingResponse(request, accountId);
  } catch (error) {
    return stripeErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    return createOnboardingResponse(request, getFormString(formData, "accountId"));
  } catch (error) {
    return stripeErrorResponse(error);
  }
}
