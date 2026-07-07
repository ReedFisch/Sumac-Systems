import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  activityItems,
  clientMetrics,
  dataMap,
  launchChecklist,
  portalSections,
} from "@/data/clientPortal";
import CheckoutButton from "@/components/stripe/CheckoutButton";

export const metadata: Metadata = {
  title: "Client Portal Preview | Sumac Systems",
  description:
    "A working preview of the Sumac client portal structure for reporting, booking, billing, support, and launch resources.",
  robots: {
    index: false,
    follow: false,
  },
};

const lookerReportUrl = process.env.NEXT_PUBLIC_LOOKER_STUDIO_REPORT_URL;
const assemblyPortalUrl = process.env.NEXT_PUBLIC_ASSEMBLY_PORTAL_URL;
const stripePortalUrl = process.env.NEXT_PUBLIC_STRIPE_PORTAL_URL;

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 6.364 6.364l-1.768 1.768a4.5 4.5 0 0 1-6.364 0M10.81 15.312a4.5 4.5 0 0 1-6.364-6.364L6.214 7.18a4.5 4.5 0 0 1 6.364 0" />
    </svg>
  );
}

function statusClass(status: string) {
  if (status === "Ready" || status === "Ready to build") {
    return "border-[#7cff67]/25 bg-[#7cff67]/10 text-[#b8ffad]";
  }

  if (status === "Bank gated") {
    return "border-[#ffd36a]/25 bg-[#ffd36a]/10 text-[#ffe0a1]";
  }

  return "border-white/15 bg-white/[0.04] text-white/65";
}

type ClientPortalPageProps = {
  searchParams?: Promise<{
    checkout?: string;
    session_id?: string;
  }>;
};

export default async function ClientPortalPage({ searchParams }: ClientPortalPageProps) {
  const resolvedSearchParams = await searchParams;
  const checkoutStatus = resolvedSearchParams?.checkout;
  const checkoutSessionId = resolvedSearchParams?.session_id;

  return (
    <div className="flex min-h-screen flex-col bg-sumac-dark text-white">
      <Header />
      <main className="flex-1 animate-slide-up-fade overflow-hidden">
        <section className="relative min-h-[92svh] pt-[calc(env(safe-area-inset-top,0px)+var(--site-header-h)+2rem)] pb-14 md:pt-48 md:pb-24">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <Image
              src="/images/dashboard-ui.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(18,0,0,0.78),rgba(18,0,0,0.96)_68%,#120000)]" />

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
              <div>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65">
                  Assembly portal MVP
                </span>
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white text-balance md:text-6xl">
                  A client backend you can sell before every integration is live.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/62 md:text-lg">
                  This is the exact portal structure to recreate in Assembly: report proof, booking access,
                  billing links, support, and simple launch resources.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {assemblyPortalUrl ? (
                    <a
                      href={assemblyPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-event="portal_click"
                      data-analytics-location="client_portal_hero"
                      data-analytics-label="Open Assembly"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-sumac-dark hover:bg-white/90"
                    >
                      Open Assembly
                      <ArrowIcon />
                    </a>
                  ) : (
                    <Link
                      href="#assembly-structure"
                      data-analytics-event="portal_click"
                      data-analytics-location="client_portal_hero"
                      data-analytics-label="Build Structure"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-sumac-dark hover:bg-white/90"
                    >
                      Build Structure
                      <ArrowIcon />
                    </Link>
                  )}
                  <Link
                    href="#looker-report"
                    data-analytics-event="report_click"
                    data-analytics-location="client_portal_hero"
                    data-analytics-label="Report Slot"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white/75 hover:border-white/30 hover:text-white"
                  >
                    Report Slot
                    <LinkIcon />
                  </Link>
                </div>
                {checkoutStatus ? (
                  <div
                    className={`mt-5 rounded-[8px] border px-4 py-3 text-sm leading-relaxed ${
                      checkoutStatus === "success"
                        ? "border-[#7cff67]/25 bg-[#7cff67]/10 text-[#d8ffd2]"
                        : "border-[#ffd36a]/25 bg-[#ffd36a]/10 text-[#ffe7b8]"
                    }`}
                  >
                    {checkoutStatus === "success"
                      ? `Payment completed${checkoutSessionId ? ` for session ${checkoutSessionId}` : ""}.`
                      : "Checkout was cancelled. No payment was taken."}
                  </div>
                ) : null}
              </div>

              <div className="overflow-hidden rounded-[8px] border border-white/10 bg-black/45 shadow-[0_28px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex gap-1.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffd36a]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#7cff67]" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/35">
                    client.sumac.systems
                  </span>
                </div>

                <div className="grid min-h-[440px] md:grid-cols-[180px_1fr]">
                  <aside className="border-b border-white/10 bg-white/[0.025] p-4 md:border-b-0 md:border-r">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="relative h-9 w-9 shrink-0">
                        <Image src="/images/sumac/image3.webp" alt="Sumac" fill sizes="36px" className="object-contain" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Titan Roofing</p>
                        <p className="text-[10px] text-white/40">Demo client</p>
                      </div>
                    </div>
                    <nav className="grid grid-cols-2 gap-2 md:grid-cols-1">
                      {portalSections.map((section, index) => (
                        <a
                          key={section.title}
                          href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`}
                          className={`rounded-[8px] px-3 py-2 text-xs font-medium transition-colors ${
                            index === 0
                              ? "bg-white text-sumac-dark"
                              : "text-white/55 hover:bg-white/[0.06] hover:text-white"
                          }`}
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </aside>

                  <div className="p-4 md:p-6">
                    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-sumac-brandy">Monthly overview</p>
                        <h2 className="mt-1 text-2xl font-bold tracking-tight">Performance Snapshot</h2>
                      </div>
                      <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/45">
                        Demo data
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                      {clientMetrics.map((metric) => (
                        <article key={metric.label} className="rounded-[8px] border border-white/10 bg-white/[0.035] p-3">
                          <p className="text-[10px] uppercase tracking-[0.14em] text-white/38">{metric.label}</p>
                          <div className="mt-3 flex items-end justify-between gap-2">
                            <strong className="text-xl tracking-tight">{metric.value}</strong>
                            <span className="text-xs font-bold text-[#7cff67]">{metric.change}</span>
                          </div>
                          <p className="mt-2 text-[10px] text-white/32">{metric.source}</p>
                        </article>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
                      <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
                        <div className="mb-4 flex items-center justify-between gap-3">
                          <h3 className="text-sm font-bold">Recent activity</h3>
                          <span className="text-[10px] uppercase tracking-[0.16em] text-[#7cff67]">Live feed</span>
                        </div>
                        <div className="space-y-3">
                          {activityItems.slice(0, 3).map((item) => (
                            <div key={item.title} className="grid grid-cols-[auto_1fr] gap-3">
                              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#7cff67]/10 text-[#7cff67]">
                                <CheckIcon />
                              </span>
                              <div>
                                <div className="flex items-center justify-between gap-3">
                                  <p className="text-sm font-semibold text-white/85">{item.title}</p>
                                  <p className="text-[10px] text-white/35">{item.time}</p>
                                </div>
                                <p className="mt-1 text-xs leading-relaxed text-white/45">{item.detail}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-4">
                        <h3 className="text-sm font-bold">Client actions</h3>
                        <div className="mt-4 space-y-2">
                        <Link href="/thank-you" data-analytics-event="booking_click" data-analytics-location="client_portal_actions" data-analytics-label="Book a check-in" className="flex items-center justify-between rounded-[8px] bg-white px-3 py-2.5 text-xs font-bold text-sumac-dark">
                          Book a check-in <ArrowIcon />
                        </Link>
                          <CheckoutButton clientReferenceId="sumac-client-portal-demo" />
                          {stripePortalUrl ? (
                            <a href={stripePortalUrl} target="_blank" rel="noopener noreferrer" data-analytics-event="checkout_click" data-analytics-location="client_portal_actions" data-analytics-label="Billing portal" className="flex items-center justify-between rounded-[8px] border border-white/10 px-3 py-2.5 text-xs font-bold text-white/70 hover:text-white">
                              Billing portal <ArrowIcon />
                            </a>
                          ) : (
                            <span className="flex items-center justify-between rounded-[8px] border border-[#ffd36a]/20 bg-[#ffd36a]/10 px-3 py-2.5 text-xs font-bold text-[#ffe0a1]">
                              Customer portal after Stripe
                            </span>
                          )}
                          <a href="mailto:hello@sumac.systems" data-analytics-event="email_click" data-analytics-location="client_portal_actions" data-analytics-label="Request support" className="flex items-center justify-between rounded-[8px] border border-white/10 px-3 py-2.5 text-xs font-bold text-white/70 hover:text-white">
                            Request support <ArrowIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="assembly-structure" className="bg-sumac-dark py-14 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
            <div className="mb-8 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-sumac-brandy">Assembly structure</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Six pages, no fluff.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {portalSections.map((section) => (
                <article id={section.title.toLowerCase().replaceAll(" ", "-")} key={section.title} className="rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
                  <h3 className="text-lg font-bold">{section.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/52">{section.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="looker-report" className="bg-[#0b0000] py-14 md:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-sumac-brandy">Looker Studio</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">Report shell first, live data second.</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/58 md:text-base">
                The portal is useful even before Stripe and Twilio are finished. Build the report sections now,
                connect GA4 and Sheets next, then replace the placeholder with the secure Looker embed URL.
              </p>
              <div className="mt-6 grid gap-3">
                {dataMap.map((row) => (
                  <div key={row.surface} className="grid grid-cols-[1fr_auto] gap-3 border-b border-white/10 pb-3 text-sm">
                    <span className="text-white/78">{row.surface}</span>
                    <span className="text-right text-white/42">{row.system}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.035]">
              <div className="border-b border-white/10 px-5 py-4">
                <h3 className="text-sm font-bold">Embedded performance report</h3>
              </div>
              {lookerReportUrl ? (
                <iframe
                  src={lookerReportUrl}
                  title="Client performance report"
                  className="h-[460px] w-full bg-white"
                  loading="lazy"
                />
              ) : (
                <div className="flex min-h-[460px] flex-col items-center justify-center px-6 text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sumac-brandy">
                    <LinkIcon />
                  </div>
                  <h3 className="text-xl font-bold">Waiting for the Looker embed link</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/48">
                    Add `NEXT_PUBLIC_LOOKER_STUDIO_REPORT_URL` when the report shell is ready. Until then,
                    Assembly can use this same area as a secure report link.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="bg-sumac-dark py-14 md:py-24">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-sumac-brandy">Launch checklist</span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">What to finish before Monday.</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/58 md:text-base">
                Stripe can stay gated. The portal should still feel real: reporting, booking, support, resources,
                and clear billing status.
              </p>
            </div>

            <div className="grid gap-3">
              {launchChecklist.map((item) => (
                <article key={item.title} className="grid gap-4 rounded-[8px] border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">{item.detail}</p>
                  </div>
                  <span className={`w-fit rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] ${statusClass(item.status)}`}>
                    {item.status}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
