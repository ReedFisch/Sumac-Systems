export const analyticsEvents = {
  bookingClick: "booking_click",
  phoneClick: "phone_click",
  emailClick: "email_click",
  portalClick: "portal_click",
  reportClick: "report_click",
  roiCalculatorClick: "roi_calculator_click",
  serviceClick: "service_click",
  checkoutClick: "checkout_click",
} as const;

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export type AnalyticsEventParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAnalyticsEvent(eventName: AnalyticsEventName | string, params: AnalyticsEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null),
  );

  window.gtag("event", eventName, cleanParams);
}
