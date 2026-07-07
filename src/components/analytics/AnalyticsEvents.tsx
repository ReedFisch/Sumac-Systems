"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackAnalyticsEvent } from "@/lib/analytics/events";

function AnalyticsRouteTracker() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId || typeof window.gtag !== "function") {
      return;
    }

    const queryString = searchParams.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
    });
  }, [measurementId, pathname, searchParams]);

  useEffect(() => {
    function handleTrackedClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const trackedElement = target.closest<HTMLElement>("[data-analytics-event]");

      if (!trackedElement) {
        return;
      }

      trackAnalyticsEvent(trackedElement.dataset.analyticsEvent || "site_click", {
        link_text: trackedElement.textContent?.trim().replace(/\s+/g, " ").slice(0, 120),
        link_url:
          trackedElement instanceof HTMLAnchorElement ? trackedElement.href : trackedElement.dataset.analyticsUrl,
        location: trackedElement.dataset.analyticsLocation,
        label: trackedElement.dataset.analyticsLabel,
        service: trackedElement.dataset.analyticsService,
      });
    }

    document.addEventListener("click", handleTrackedClick);
    return () => document.removeEventListener("click", handleTrackedClick);
  }, []);

  return null;
}

export default function AnalyticsEvents() {
  return (
    <Suspense fallback={null}>
      <AnalyticsRouteTracker />
    </Suspense>
  );
}
