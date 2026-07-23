import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const localDashboardUrl = "http://127.0.0.1:8080";
const macDownloadUrl = "/downloads/lead-scout-mac-beta.zip";

export const metadata: Metadata = {
  title: "Lead Scout Setup | Sumac Systems",
  description: "Internal Lead Scout setup and launcher for Sumac Systems.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const osCards = [
  {
    id: "mac",
    name: "Mac",
    status: "Works now",
    badge: "macOS",
    copy: "Download, unzip, install, then open the local dashboard.",
  },
  {
    id: "windows",
    name: "Windows",
    status: "Needs build",
    badge: "WIN",
    copy: "The app can support Windows later, but there is no Windows package yet.",
  },
  {
    id: "chromeos",
    name: "ChromeOS",
    status: "Limited",
    badge: "CrOS",
    copy: "Only possible on Chromebooks with Linux apps enabled. Not ready as a simple download.",
  },
  {
    id: "mobile",
    name: "iOS / Android",
    status: "Not local",
    badge: "MOB",
    copy: "Phones cannot run the local scraper app. Mobile needs a hosted cloud version.",
  },
];

const macSteps = [
  "Download the Mac beta zip.",
  "Unzip the folder.",
  "Open Install Lead Scout.command.",
  "If macOS blocks it, right-click the installer, choose Open, then confirm.",
  "When Terminal opens, leave it alone until the browser opens.",
  "Use the dashboard at 127.0.0.1:8080.",
];

const supportRows = [
  {
    platform: "Mac",
    result: "Available now",
    detail: "Current download works for macOS and runs the app locally.",
  },
  {
    platform: "Windows",
    result: "Not packaged yet",
    detail: "Needs a Windows build, installer, and testing before it is one-click usable.",
  },
  {
    platform: "ChromeOS",
    result: "Linux-only later",
    detail: "Could work through ChromeOS Linux mode, but not as a normal Chromebook app yet.",
  },
  {
    platform: "iOS / Android",
    result: "Needs cloud version",
    detail: "Mobile browsers cannot run the local background scraper. They need a hosted server.",
  },
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
          <div className="absolute inset-0 bg-gradient-to-b from-sumac-dark via-sumac-dark/85 to-sumac-dark" />
        </div>

        <div className="absolute right-[-80px] top-24 z-0 hidden h-[360px] w-[360px] opacity-20 md:block">
          <Image
            src="/images/sumac/image2.webp"
            alt=""
            fill
            sizes="360px"
            className="object-contain"
            aria-hidden="true"
          />
        </div>

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-14 md:px-8 md:py-20">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-5">
              Internal Tool Setup
            </span>
            <h1 className="text-4xl font-sans font-bold tracking-tight md:text-6xl">
              Choose your device first.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              Lead Scout is a local app. The Sumac page gives instructions and
              a launcher, but the actual search dashboard runs on the computer
              that installs Lead Scout.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {osCards.map((os) => (
              <a
                key={os.id}
                href={`#${os.id}`}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25 font-mono text-[11px] font-bold tracking-[0.14em] text-sumac-brandy">
                    {os.badge}
                  </div>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                    {os.status}
                  </span>
                </div>
                <h2 className="mt-5 text-xl font-bold tracking-tight text-white">
                  {os.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {os.copy}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section
          id="mac"
          className="relative z-10 border-t border-white/[0.06] bg-[#180000]/45 px-6 py-14 md:px-8"
        >
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-4">
                Mac Setup
              </span>
              <h2 className="text-3xl font-sans font-bold tracking-tight md:text-5xl">
                Download. Install. Open dashboard.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/55 md:text-base">
                No GitHub, no code clone, no Go install, no npm. The zip is the
                packaged app for internal Mac use.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={macDownloadUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-sumac-dark shadow-[0_0_30px_rgba(255,255,255,0.12)] transition hover:scale-[1.02] hover:bg-gray-100 active:scale-[0.98]"
                >
                  Download Mac Beta
                </a>
                <a
                  href={localDashboardUrl}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white/70 transition hover:border-white/25 hover:text-white"
                >
                  Open Local Dashboard
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-sumac-dark/55 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-md md:p-6">
              <div className="grid gap-3">
                {macSteps.map((step, index) => (
                  <div
                    key={step}
                    className="grid grid-cols-[40px_1fr] gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sumac-brandy/20 font-mono text-xs font-bold text-sumac-brandy">
                      {index + 1}
                    </div>
                    <p className="self-center text-sm leading-6 text-white/65">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-t border-white/[0.06] px-6 py-14 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-4">
                What Terminal Means
              </span>
              <h2 className="text-3xl font-sans font-bold tracking-tight md:text-5xl">
                A small setup window is normal.
              </h2>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-sm leading-7 text-white/68 md:p-6">
              <div>$ installing Lead Scout local service</div>
              <div>$ starting dashboard at 127.0.0.1:8080</div>
              <div>$ opening browser</div>
              <p className="mt-5 font-body text-sm leading-7 text-white/52">
                The installer uses Terminal because this internal beta starts a
                background service on the Mac. When it finishes, the browser
                opens. After install, normal use is just the dashboard button.
              </p>
            </div>
          </div>
        </section>

        <section
          id="windows"
          className="relative z-10 border-t border-white/[0.06] bg-sumac-dark/80 px-6 py-14 md:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-4">
              Other Devices
            </span>
            <h2 className="text-3xl font-sans font-bold tracking-tight md:text-5xl">
              What works today
            </h2>

            <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.08]">
              {supportRows.map((row) => (
                <div
                  key={row.platform}
                  id={row.platform === "ChromeOS" ? "chromeos" : row.platform === "iOS / Android" ? "mobile" : undefined}
                  className="grid gap-3 border-b border-white/[0.07] bg-white/[0.025] p-5 last:border-b-0 md:grid-cols-[160px_190px_1fr]"
                >
                  <strong className="text-white">{row.platform}</strong>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-sumac-brandy">
                    {row.result}
                  </span>
                  <p className="text-sm leading-6 text-white/55">
                    {row.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 border-t border-white/[0.06] px-6 py-14 md:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-4">
                How It Works
              </span>
              <h2 className="text-3xl font-sans font-bold tracking-tight md:text-5xl">
                The website is not the scraper.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/55">
                Vercel hosts this instruction page and the zip. The downloaded
                app runs the dashboard and searches locally on the Mac.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              {["Download", "Install", "Localhost", "Leads"].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25 font-mono text-xs font-bold text-sumac-brandy">
                    {index + 1}
                  </div>
                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-white/70">
                    {item}
                  </p>
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
