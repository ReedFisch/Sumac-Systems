import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const localDashboardUrl = "http://127.0.0.1:8080";

export const metadata: Metadata = {
  title: "Lead Scout | Sumac Systems",
  description: "Internal Lead Scout launcher for Sumac Systems.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const signals = [
  {
    label: "Local App",
    value: "Runs on this Mac",
    copy: "Uses the Lead Scout app already installed locally.",
  },
  {
    label: "Dashboard",
    value: "127.0.0.1:8080",
    copy: "Opens the full search, lead cards, map, filters, and CSV tools.",
  },
  {
    label: "Search Mode",
    value: "Internal beta",
    copy: "Built for testing and agency use before public packaging.",
  },
];

const workflow = [
  "Open Lead Scout.app if it is not already running.",
  "Click Open Local Dashboard from this page.",
  "Run a city + trade search, then open leads when the job finishes.",
  "Delete old failed rows when they are just stale test searches.",
];

export default function LeadScoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-sumac-dark text-white">
      <Header />
      <main className="relative flex-1 overflow-hidden pt-[var(--site-header-h)]">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sumac-dark via-sumac-dark/80 to-sumac-dark" />
        </div>

        <div className="absolute right-[-90px] top-24 z-0 hidden h-[420px] w-[420px] opacity-20 md:block">
          <Image
            src="/images/sumac/image2.webp"
            alt=""
            fill
            sizes="420px"
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        <section className="relative z-10 mx-auto grid min-h-[calc(100vh-var(--site-header-h))] w-full max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
          <div>
            <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-5">
              Internal Tool
            </span>
            <h1 className="max-w-3xl text-4xl font-sans font-bold tracking-tight md:text-6xl">
              Lead Scout
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              Open the local Lead Scout dashboard for Sumac Systems lead
              research. Searches run from the local app we already set up, so
              this page is just the internal launcher.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={localDashboardUrl}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-sumac-dark shadow-[0_0_30px_rgba(255,255,255,0.12)] transition hover:scale-[1.02] hover:bg-gray-100 active:scale-[0.98]"
              >
                Open Local Dashboard
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white/65 transition hover:border-white/25 hover:text-white"
              >
                Back to Sumac
              </Link>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-6 text-white/45">
              If the dashboard does not open, start the local Lead Scout app
              first, then come back and press the button again.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-sumac-dark/55 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-6">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Current Target
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">
                  Localhost dashboard
                </h2>
              </div>
              <span className="rounded-full border border-[#7cff67]/20 bg-[#7cff67]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9bff8a]">
                Internal
              </span>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm leading-7 text-white/70">
              <div>URL: {localDashboardUrl}</div>
              <div>Mode: local web dashboard</div>
              <div>Data: local app storage</div>
            </div>

            <div className="mt-5 grid gap-3">
              {signals.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-sumac-brandy">
                      {item.label}
                    </span>
                    <strong className="text-sm text-white/85">{item.value}</strong>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/48">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 border-t border-white/[0.06] bg-sumac-dark/80 px-6 py-14 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-4">
                Workflow
              </span>
              <h2 className="text-3xl font-sans font-bold tracking-tight md:text-5xl">
                Use what already works.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5"
                >
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-sumac-brandy">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-6 text-white/60">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
