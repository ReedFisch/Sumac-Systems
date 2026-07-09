import { getRequestOrigin } from "@/lib/stripe/client";
import { createConnectedAccountProduct } from "@/lib/stripe/connect/api";
import {
  getFormString,
  redirectOrJson,
  stripeErrorResponse,
} from "@/lib/stripe/connect/http";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const accountId = getFormString(formData, "accountId");
    const product = await createConnectedAccountProduct({
      accountId,
      name: getFormString(formData, "name"),
      description: getFormString(formData, "description"),
      unitAmount: getFormString(formData, "unitAmount"),
      currency: getFormString(formData, "currency") || "usd",
    });
    const storefrontUrl = `${getRequestOrigin(request)}/stripe-connect/storefront/${encodeURIComponent(accountId)}?product_created=${encodeURIComponent(product.id)}`;

    return redirectOrJson(request, storefrontUrl, {
      accountId,
      productId: product.id,
      storefrontUrl,
    });
  } catch (error) {
    return stripeErrorResponse(error);
  }
}
