import { NextResponse } from "next/server";

export function getFormString(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value : "";
}

export function wantsJson(request: Request) {
  return request.headers.get("accept")?.includes("application/json") ?? false;
}

export function redirectOrJson(request: Request, url: string, payload: Record<string, unknown>) {
  if (wantsJson(request)) {
    return NextResponse.json(payload);
  }

  return NextResponse.redirect(url, { status: 303 });
}

export function stripeErrorResponse(error: unknown) {
  const message = error instanceof Error ? error.message : "Stripe Connect request failed";

  return NextResponse.json({ error: message }, { status: 500 });
}
