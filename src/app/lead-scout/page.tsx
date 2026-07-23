import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Scout Local Beta | Sumac Systems",
  description:
    "Learn how the Lead Scout local beta finds local businesses with missing or weak websites from your own computer.",
};

const steps = [
  {
    title: "Download the local beta",
    copy: "Install Lead Scout like a normal desktop app. No Google API key is needed for the local beta.",
  },
  {
    title: "Open the dashboard",
    copy: "The app starts a private server on your computer and opens the dashboard at 127.0.0.1:8080.",
  },
  {
    title: "Run a search",
    copy: "Pick a trade, city, and radius. Lead Scout searches public Google Maps results from your machine.",
  },
  {
    title: "Filter the best leads",
    copy: "Use filters for no website, bad website, weak Google profile, and high-rating opportunities.",
  },
];

const platformRows = [
  {
    platform: "Mac",
    status: "Best beta target",
    detail:
      "The first downloadable beta will be built for macOS. It runs locally and opens the web dashboard in your browser.",
  },
  {
    platform: "Windows",
    status: "Planned",
    detail:
      "A Windows build can work the same way, but it needs separate packaging and testing before sharing widely.",
  },
  {
    platform: "ChromeOS",
    status: "Limited",
    detail:
      "Works only on Chromebooks that support Linux apps. Standard school-managed or locked-down Chromebooks usually cannot run it.",
  },
  {
    platform: "iPhone / Android",
    status: "View only",
    detail:
      "Phones can read this page, but they cannot run the local scraper app. Mobile use would need a hosted cloud version later.",
  },
];

const benefits = [
  "No server cost for beta searches",
  "Search jobs run from the user's computer",
  "Less cloud-hosting complexity",
  "CSV exports stay local",
  "Good enough for early testers and influencer demos",
];

export default function LeadScoutPage() {
  return (
    <main className="min-h-screen bg-[#090707] text-white">
      <section className="mx-auto grid min-h-[92vh] w-full max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <div>
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#c98d58]">
            Sumac Systems Local Beta
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Lead Scout runs on your computer.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Download the local app, open the browser dashboard, and find local
            businesses with missing or weak websites without paying for a cloud
            scraper server.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#setup"
              className="rounded-md bg-[#c98d58] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#090707] transition hover:bg-[#e2ad75]"
            >
              See Setup
            </a>
            <a
              href="#platforms"
              className="rounded-md border border-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white/65 transition hover:border-white/25 hover:text-white"
            >
              Device Support
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#c98d58]">
            How it opens
          </p>
          <div className="mt-5 rounded-md border border-white/10 bg-black/35 p-4 font-mono text-sm leading-7 text-white/75">
            <div>1. Open Lead Scout.app</div>
            <div>2. Browser opens automatically</div>
            <div>3. Dashboard runs at 127.0.0.1:8080</div>
            <div>4. Results export to CSV</div>
          </div>
          <p className="mt-5 text-sm leading-6 text-white/55">
            The public website is the instruction page. The actual tool runs
            locally on the tester&apos;s device, so beta searches do not depend
            on Vercel or a free cloud server staying awake.
          </p>
        </div>
      </section>

      <section
        id="setup"
        className="border-t border-white/10 bg-[#0e0b0b] px-6 py-16 md:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#c98d58]">
              Setup Tutorial
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              What beta testers will do
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#c98d58]">
                  Step {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#c98d58]">
              Why Local
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Cheaper and faster for beta testing.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/60">
              A cloud version is better later, but a local beta is the fastest
              way to make Lead Scout useful without paying for everyone&apos;s
              browser automation.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/75"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="platforms"
        className="border-t border-white/10 bg-[#0e0b0b] px-6 py-16 md:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#c98d58]">
              Device Support
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Desktop first. Mobile later.
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/60">
              Lead Scout needs to run a desktop process in the background.
              Phones and locked-down Chromebooks cannot do that, so they need a
              hosted cloud version later.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
            {platformRows.map((row) => (
              <div
                key={row.platform}
                className="grid gap-3 border-b border-white/10 bg-white/[0.025] p-5 last:border-b-0 md:grid-cols-[160px_160px_1fr]"
              >
                <strong className="text-white">{row.platform}</strong>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#c98d58]">
                  {row.status}
                </span>
                <p className="text-sm leading-6 text-white/58">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 md:px-8">
        <div className="mx-auto max-w-6xl rounded-lg border border-white/10 bg-white/[0.035] p-6 md:p-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#c98d58]">
            Beta Status
          </p>
          <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
            Download link is coming next.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
            The local dashboard is working internally. The next step is
            packaging it into a clean downloadable app, then putting the Mac
            download link here for beta testers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              disabled
              className="rounded-md bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white/45"
            >
              Mac Download Coming Soon
            </button>
            <Link
              href="/"
              className="rounded-md border border-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white/65 transition hover:border-white/25 hover:text-white"
            >
              Sumac Systems
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
