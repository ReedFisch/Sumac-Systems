import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ServiceIcon } from "@/components/services/ServiceIcons";

const localDashboardUrl = "http://127.0.0.1:8080";
const macDownloadUrl = "/downloads/lead-scout-mac-beta.zip";

export const metadata: Metadata = {
  title: "Lead Scout Setup | Sumac Systems",
  description: "Internal Lead Scout setup and launcher for Sumac Systems.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

type Platform = {
  id: string;
  name: string;
  icon: string;
  status: string;
  statusTone: "ready" | "soon" | "limited" | "cloud";
  summary: string;
  action: string;
  detail: string;
};

const platforms: Platform[] = [
  {
    id: "mac",
    name: "Mac",
    icon: "cpu",
    status: "Ready now",
    statusTone: "ready",
    summary: "Install the beta and run searches on your Mac.",
    action: "Get the Mac beta",
    detail: "The only one-click package available today.",
  },
  {
    id: "windows",
    name: "Windows",
    icon: "database",
    status: "Package next",
    statusTone: "soon",
    summary: "The local dashboard needs a Windows build first.",
    action: "See Windows path",
    detail: "No Windows download is published yet.",
  },
  {
    id: "chromeos",
    name: "ChromeOS",
    icon: "code",
    status: "Linux mode",
    statusTone: "limited",
    summary: "Possible through Linux mode, but not a simple install.",
    action: "See ChromeOS path",
    detail: "Best for technical users with Linux enabled.",
  },
  {
    id: "mobile",
    name: "iPhone / Android",
    icon: "phone",
    status: "Cloud later",
    statusTone: "cloud",
    summary: "Read this guide on mobile; run searches on a computer.",
    action: "See mobile path",
    detail: "A hosted version is needed for phone searches.",
  },
];

const macSteps = [
  ["Download", "Download the Mac beta zip."],
  ["Unzip", "Open the zip so the Lead Scout folder appears."],
  ["Install", "Open Install Lead Scout.command and confirm if macOS asks."],
  ["Run", "Leave Terminal open while the local service starts."],
  ["Search", "Use the dashboard at 127.0.0.1:8080."],
];

const statusStyles = {
  ready: "border-emerald-300/20 bg-emerald-300/10 text-emerald-200",
  soon: "border-sumac-brandy/35 bg-sumac-brandy/10 text-orange-200",
  limited: "border-sky-300/20 bg-sky-300/10 text-sky-200",
  cloud: "border-white/15 bg-white/[0.06] text-white/65",
};

function PlatformIcon({ name }: { name: string }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/25 text-sumac-brandy">
      <ServiceIcon name={name} className="h-5 w-5" />
    </span>
  );
}

export default function LeadScoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-sumac-dark text-white">
      <Header />
      <main className="relative flex-1 overflow-hidden pt-[var(--site-header-h)]">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }}
          />
          <div className="absolute inset-0 bg-[#120000]/80" />
        </div>

        <section className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-12 sm:px-6 md:px-8 md:pb-16 md:pt-20">
          <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-sumac-brandy">
                <span className="h-px w-8 bg-sumac-brandy" />
                Internal beta access
              </div>
              <h1 className="max-w-xl text-4xl font-sans font-bold tracking-[-0.03em] sm:text-5xl md:text-6xl">
                Lead Scout, set up for your device.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
                Choose your operating system below. The website is the guide;
                the search dashboard runs on the computer that installs it.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium uppercase tracking-[0.14em] text-white/45">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Local search
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sumac-brandy" />
                  Internal beta
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-300" />
                  No code required
                </span>
              </div>
            </div>

            <div className="relative min-h-[250px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0b0b0b]/80 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.38)] sm:p-7">
              <div className="absolute right-0 top-0 h-44 w-44 opacity-20">
                <Image src="/images/sumac/image2.webp" alt="" fill sizes="176px" className="object-contain" aria-hidden="true" />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-white/45">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Local workspace
                  </div>
                  <span className="text-xs text-white/35">Lead Scout</span>
                </div>
                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[
                    ["01", "Choose", "device"],
                    ["02", "Install", "locally"],
                    ["03", "Find", "leads"],
                  ].map(([number, title, detail]) => (
                    <div key={number} className="border-l border-white/10 pl-3">
                      <span className="font-mono text-[10px] text-sumac-brandy">{number}</span>
                      <p className="mt-3 text-sm font-semibold text-white/85">{title}</p>
                      <p className="mt-1 text-xs text-white/40">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-sumac-brandy" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">Ready when installed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-sumac-brandy">01 / Pick a route</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">What are you using?</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-white/40 sm:block">Every card tells you the fastest realistic next step.</p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform) => (
              <a
                key={platform.id}
                href={`#${platform.id}`}
                className="group flex min-h-[220px] flex-col rounded-2xl border border-white/10 bg-black/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-3">
                  <PlatformIcon name={platform.icon} />
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${statusStyles[platform.statusTone]}`}>
                    {platform.status}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold tracking-tight">{platform.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{platform.summary}</p>
                <span className="mt-auto pt-5 text-xs font-bold uppercase tracking-[0.14em] text-white/45 transition group-hover:text-sumac-brandy">
                  {platform.action} <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section id="mac" className="relative z-10 scroll-mt-24 border-y border-white/[0.08] bg-[#1a0703]/70 px-5 py-14 sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-sumac-brandy">
                <span className="h-px w-8 bg-sumac-brandy" />
                Mac / available now
              </div>
              <h2 className="mt-5 max-w-lg text-3xl font-bold tracking-tight md:text-5xl">The fastest path to your first search.</h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 md:text-base">
                This package does the setup for you. You do not need GitHub,
                Go, npm, or a code editor.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href={macDownloadUrl} download className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-sumac-dark shadow-[0_0_30px_rgba(255,255,255,0.1)] transition hover:bg-gray-100">
                  <ServiceIcon name="database" className="h-4 w-4" />
                  Download Mac beta
                </a>
                <a href={localDashboardUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white/75 transition hover:border-white/30 hover:text-white">
                  <ServiceIcon name="zap" className="h-4 w-4" />
                  Open local dashboard
                </a>
              </div>
              <p className="mt-4 text-xs leading-5 text-white/35">Use the second button after installation. It opens on the same computer.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0b0b0b]/75 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.3)] sm:p-6">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">Mac setup</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-200">5 minutes</span>
              </div>
              <div className="grid gap-2">
                {macSteps.map(([label, detail], index) => (
                  <div key={label} className="grid grid-cols-[32px_74px_1fr] items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3 sm:grid-cols-[38px_88px_1fr] sm:px-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sumac-brandy/20 font-mono text-[10px] font-bold text-sumac-brandy">0{index + 1}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.1em] text-white/75">{label}</span>
                    <span className="text-xs leading-5 text-white/45">{detail}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3 rounded-xl border border-sumac-brandy/20 bg-sumac-brandy/[0.08] p-4">
                <ServiceIcon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-sumac-brandy" />
                <p className="text-xs leading-5 text-white/55"><strong className="text-white/80">Terminal is expected.</strong> It starts the local service. Leave it open while Lead Scout is running.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="windows" className="relative z-10 border-b border-white/[0.08] px-5 py-14 sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-sumac-brandy">02 / Other computers</p>
                <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight md:text-5xl">Clear answers for every screen.</h2>
              </div>
              <div className="hidden rounded-xl border border-white/10 bg-white/[0.03] p-3 text-white/50 sm:block"><ServiceIcon name="target" className="h-5 w-5" /></div>
            </div>

            <div className="mt-9 grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                <div className="flex items-center justify-between"><PlatformIcon name="database" /><span className="text-xs font-mono text-white/35">WINDOWS</span></div>
                <h3 className="mt-6 text-xl font-bold">Use the Windows build when it is packaged.</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">There is no Windows download in this beta yet. The app needs a Windows binary and installer before this becomes a simple click-to-run path.</p>
                <div className="mt-6 border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-[0.12em] text-sumac-brandy">Next: Windows package</div>
              </div>
              <div id="chromeos" className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                <div className="flex items-center justify-between"><PlatformIcon name="code" /><span className="text-xs font-mono text-white/35">CHROMEOS</span></div>
                <h3 className="mt-6 text-xl font-bold">Linux mode is the advanced route.</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">A Chromebook may run Lead Scout through its Linux development environment, but this beta has no Chromebook installer. It is not a normal Chrome extension.</p>
                <div className="mt-6 border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-[0.12em] text-sumac-brandy">Next: Linux build</div>
              </div>
              <div id="mobile" className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                <div className="flex items-center justify-between"><PlatformIcon name="phone" /><span className="text-xs font-mono text-white/35">MOBILE</span></div>
                <h3 className="mt-6 text-xl font-bold">Use your phone as the control screen later.</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">You can open this guide from iPhone or Android, but the current scraper runs locally and cannot stay running inside a mobile browser.</p>
                <div className="mt-6 border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-[0.12em] text-sumac-brandy">Next: hosted cloud version</div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 px-5 py-14 sm:px-6 md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-sumac-brandy">03 / The simple version</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">The page explains. Your device runs.</h2>
            </div>
            <div className="grid gap-2 sm:grid-cols-4">
              {["Pick your OS", "Install locally", "Open dashboard", "Find leads"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 border-t border-white/10 py-4 sm:block sm:border-l sm:border-t-0 sm:pl-4">
                  <span className="font-mono text-xs text-sumac-brandy">0{index + 1}</span>
                  <p className="text-sm font-semibold text-white/75 sm:mt-4">{item}</p>
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
