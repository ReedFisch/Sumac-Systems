"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

export const CALENDLY_EVENT_URL =
  "https://calendly.com/sumac-systems/free-systems-audit?hide_event_type_details=1&hide_gdpr_banner=1";

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_STYLESHEET_HREF = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_ORIGINS = ["https://assets.calendly.com", "https://calendly.com"];

type CalendlyApi = {
  initInlineWidget?: (options: {
    url: string;
    parentElement: HTMLElement;
    prefill?: Record<string, unknown>;
    utm?: Record<string, unknown>;
  }) => void;
  initPopupWidget?: (options: { url: string }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

let calendlyScriptPromise: Promise<void> | null = null;

function ensureCalendlyResourceHints() {
  if (typeof document === "undefined") return;

  CALENDLY_ORIGINS.forEach((origin) => {
    if (document.querySelector(`link[rel="preconnect"][href="${origin}"]`)) {
      return;
    }

    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = origin;
    document.head.appendChild(preconnect);
  });
}

function ensureCalendlyStylesheet() {
  if (typeof document === "undefined") return;

  ensureCalendlyResourceHints();

  const existingStylesheet = document.querySelector(
    `link[href="${CALENDLY_STYLESHEET_HREF}"]`,
  );

  if (existingStylesheet) return;

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = CALENDLY_STYLESHEET_HREF;
  stylesheet.dataset.calendlyWidget = "stylesheet";
  document.head.appendChild(stylesheet);
}

function loadCalendlyScript() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  ensureCalendlyResourceHints();

  if (window.Calendly) {
    return Promise.resolve();
  }

  if (calendlyScriptPromise) {
    return calendlyScriptPromise;
  }

  const existingScript = document.querySelector<HTMLScriptElement>(
    `script[src="${CALENDLY_SCRIPT_SRC}"]`,
  );

  calendlyScriptPromise = new Promise((resolve, reject) => {
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", reject, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.dataset.calendlyWidget = "script";
    script.addEventListener(
      "load",
      () => {
        script.dataset.calendlyLoaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener(
      "error",
      (event) => {
        calendlyScriptPromise = null;
        reject(event);
      },
      { once: true },
    );
    document.body.appendChild(script);
  });

  return calendlyScriptPromise;
}

function warmCalendly() {
  ensureCalendlyStylesheet();
  void loadCalendlyScript();
}

type CalendlyPopupLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  url?: string;
  fallbackHref?: string;
};

export function CalendlyPopupLink({
  children,
  url = CALENDLY_EVENT_URL,
  fallbackHref = "/thank-you",
  onClick,
  onFocus,
  onPointerEnter,
  ...props
}: CalendlyPopupLinkProps) {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const scheduleWarmup = () => warmCalendly();
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (idleWindow.requestIdleCallback && idleWindow.cancelIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(scheduleWarmup, { timeout: 3500 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timeoutId = globalThis.setTimeout(scheduleWarmup, 2500);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);

      if (event.defaultPrevented) return;

      event.preventDefault();
      setIsOpening(true);

      try {
        ensureCalendlyStylesheet();
        await loadCalendlyScript();
        window.Calendly?.initPopupWidget?.({ url });
      } catch {
        window.location.assign(fallbackHref);
      } finally {
        setIsOpening(false);
      }
    },
    [fallbackHref, onClick, url],
  );

  return (
    <a
      {...props}
      href={fallbackHref}
      onClick={handleClick}
      onFocus={(event) => {
        onFocus?.(event);
        warmCalendly();
      }}
      onPointerEnter={(event) => {
        onPointerEnter?.(event);
        warmCalendly();
      }}
      aria-busy={isOpening || undefined}
    >
      {children}
    </a>
  );
}

type CalendlyInlineWidgetProps = {
  url?: string;
  className?: string;
};

export function CalendlyInlineWidget({ url = CALENDLY_EVENT_URL, className }: CalendlyInlineWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const parentElement = widgetRef.current;

    if (!parentElement) return;

    parentElement.innerHTML = "";
    setIsLoaded(false);
    setHasError(false);
    ensureCalendlyStylesheet();

    const observer = new MutationObserver(() => {
      if (parentElement.querySelector("iframe")) {
        setIsLoaded(true);
        observer.disconnect();
      }
    });

    observer.observe(parentElement, { childList: true, subtree: true });

    loadCalendlyScript()
      .then(() => {
        if (cancelled) return;

        if (!window.Calendly?.initInlineWidget) {
          throw new Error("Calendly widget API unavailable");
        }

        window.Calendly.initInlineWidget({
          url,
          parentElement,
        });
      })
      .catch(() => {
        if (!cancelled) {
          setHasError(true);
          setIsLoaded(true);
        }
      });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [url]);

  return (
    <div className={`relative min-h-[620px] md:min-h-[700px] ${className ?? ""}`}>
      {!isLoaded ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white text-sumac-dark">
          <div className="h-10 w-10 rounded-full border-4 border-sumac-brandy/25 border-t-sumac-brandy animate-spin" />
          <p className="text-sm font-semibold tracking-wide">Loading available times...</p>
        </div>
      ) : null}
      <div ref={widgetRef} className="h-[min(700px,75vh)] min-h-[620px] w-full" />
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white p-8 text-center text-sumac-dark">
          <p className="max-w-sm text-base font-semibold">
            The scheduler did not load in this browser.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sumac-brandy px-6 py-3 text-sm font-bold text-white"
          >
            Open Calendly
          </a>
        </div>
      ) : null}
    </div>
  );
}
