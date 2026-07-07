"use client";

import { useState } from "react";
import { trackAnalyticsEvent } from "@/lib/analytics/events";

type CheckoutButtonProps = {
  clientReferenceId?: string;
};

export default function CheckoutButton({ clientReferenceId }: CheckoutButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function startCheckout() {
    trackAnalyticsEvent("checkout_click", {
      location: "client_portal",
      label: "Pay test invoice",
      client_reference_id: clientReferenceId,
    });

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientReferenceId }),
      });

      const payload = (await response.json()) as {
        checkoutUrl?: string;
        error?: string;
      };

      if (!response.ok || !payload.checkoutUrl) {
        throw new Error(payload.error || "Unable to start checkout");
      }

      window.location.assign(payload.checkoutUrl);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to start checkout");
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={startCheckout}
        disabled={status === "loading"}
        className="flex w-full items-center justify-between rounded-[8px] bg-white px-3 py-2.5 text-left text-xs font-bold text-sumac-dark disabled:cursor-not-allowed disabled:opacity-65"
      >
        <span>{status === "loading" ? "Opening checkout..." : "Pay test invoice"}</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
      {status === "error" ? (
        <p className="rounded-[8px] border border-red-400/20 bg-red-400/10 px-3 py-2 text-xs leading-relaxed text-red-100">
          {message}
        </p>
      ) : null}
    </div>
  );
}
