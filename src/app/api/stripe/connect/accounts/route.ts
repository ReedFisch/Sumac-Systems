import { NextResponse } from "next/server";
import { getRequestOrigin } from "@/lib/stripe/client";
import {
  createConnectedAccount,
  retrieveConnectedAccountStatus,
} from "@/lib/stripe/connect/api";
import {
  getFormString,
  redirectOrJson,
  stripeErrorResponse,
} from "@/lib/stripe/connect/http";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const accountId = new URL(request.url).searchParams.get("accountId") || "";
    const status = await retrieveConnectedAccountStatus(accountId);

    return NextResponse.json(status);
  } catch (error) {
    return stripeErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const account = await createConnectedAccount({
      displayName: getFormString(formData, "displayName"),
      contactEmail: getFormString(formData, "contactEmail"),
    });
    const dashboardUrl = `${getRequestOrigin(request)}/stripe-connect?accountId=${encodeURIComponent(account.id)}&created=1`;

    return redirectOrJson(request, dashboardUrl, {
      accountId: account.id,
      dashboardUrl,
    });
  } catch (error) {
    return stripeErrorResponse(error);
  }
}
