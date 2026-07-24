import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ServiceIcon } from "@/components/services/ServiceIcons";

const localDashboardUrl = "http://127.0.0.1:8080";
const downloads = {
  mac: "/downloads/lead-scout-mac-beta.zip",
  windows: "/downloads/lead-scout-windows-beta.zip",
  linux: "/downloads/lead-scout-linux-beta.zip",
};

export const metadata: Metadata = {
  title: "Lead Scout Setup | Sumac Systems",
  description: "Internal Lead Scout setup and launcher for Sumac Systems.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

const platforms = [
  {
    id: "mac",
    name: "Mac",
    icon: "cpu",
    download: downloads.mac,
    button: "Download Mac",
    command: "Double-click Install Lead Scout.command",
    terminalCommands: [],
    steps: ["Get", "Unzip", "Open"],
    note: "No Terminal needed. If macOS asks, right-click the installer and choose Open.",
  },
  {
    id: "windows",
    name: "Windows",
    icon: "database",
    download: downloads.windows,
    button: "Download Windows",
    command: "Double-click Start Lead Scout.bat",
    terminalCommands: [],
    steps: ["Get", "Unzip", "Start"],
    note: "No Terminal needed. For Windows 10/11 on Intel or AMD. Windows may ask you to confirm the beta.",
  },
  {
    id: "linux",
    name: "Linux + ChromeOS",
    icon: "code",
    download: downloads.linux,
    button: "Download Linux + ChromeOS",
    command: "Open Terminal in the unzipped folder",
    terminalCommands: ["chmod +x start-lead-scout.sh", "chmod +x stop-lead-scout.sh", "./start-lead-scout.sh"],
    steps: ["Get", "Unzip", "Run"],
    note: "ChromeOS needs Linux development mode. Intel/AMD only. Run the commands in order.",
  },
];

function SetupGraphic({ labels }: { labels: string[] }) {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      {labels.map((label, index) => (
        <div key={label} className="flex min-w-0 flex-1 items-center gap-2">
          <div className={`flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/[0.1] bg-black/25 px-2 py-2 ${index === 0 ? "animate-pulse motion-reduce:animate-none" : ""}`}>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sumac-brandy/35 bg-sumac-brandy/25 text-[11px] font-bold text-orange-100">
              {index + 1}
            </span>
            <span className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.06em] text-white/70">{label}</span>
          </div>
          {index < labels.length - 1 ? (
            <span className="shrink-0 text-lg font-bold text-sumac-brandy motion-reduce:animate-none animate-[bounce_1.4s_ease-in-out_infinite]" aria-hidden="true">
              →
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function PlatformCard({ platform }: { platform: (typeof platforms)[number] }) {
  return (
    <article id={platform.id} className="group relative min-w-0 scroll-mt-24 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.065] to-white/[0.015] p-5 text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sumac-brandy/35 hover:shadow-[0_0_40px_rgba(136,47,24,0.12)] sm:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sumac-brandy/55 to-transparent opacity-70" aria-hidden="true" />
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-sumac-brandy/25 bg-sumac-brandy/10 text-orange-100 shadow-[0_0_20px_rgba(136,47,24,0.12)]">
            <ServiceIcon name={platform.icon} className="h-5 w-5" />
          </span>
          <h3 className="text-2xl font-bold tracking-tight">{platform.name}</h3>
        </div>
        <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-200">Ready</span>
      </div>

      <div className="mt-6 rounded-xl border border-white/[0.07] bg-black/15 p-2">
        <SetupGraphic labels={platform.steps} />
      </div>

      <p className="mt-6 text-sm font-semibold leading-6 text-white/90">{platform.command}</p>
      {platform.terminalCommands.length > 0 ? (
        <div className="mt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-orange-200">Run in Terminal, in order</p>
          <div className="mt-2 space-y-2">
            {platform.terminalCommands.map((command, index) => (
              <div key={command} className="flex min-w-0 items-center gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] text-[10px] font-bold text-white/70">{index + 1}</span>
                <code className="min-w-0 flex-1 select-all overflow-x-auto whitespace-nowrap rounded-lg border border-white/[0.1] bg-[#0b0000] px-3 py-2 font-mono text-[11px] leading-5 text-orange-100">{command}</code>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <p className="mt-2 min-h-10 text-xs leading-5 text-white/60">{platform.note}</p>
      <a href={platform.download} download className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-sumac-brandy/30 bg-sumac-brandy px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_24px_rgba(136,47,24,0.2)] transition hover:bg-[#a64022] hover:shadow-[0_10px_28px_rgba(136,47,24,0.32)]">
        <ServiceIcon name="database" className="h-4 w-4" />
        {platform.button}
      </a>
    </article>
  );
}

export default function LeadScoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-sumac-dark text-white">
      <Header />
      <main className="flex-1 pt-[var(--site-header-h)]">
        <div className="pointer-events-none fixed left-0 top-0 z-40 h-[100px] w-full border-b border-white/[0.06] bg-sumac-dark/95 backdrop-blur-xl" aria-hidden="true" />
        <section className="relative overflow-hidden border-b border-sumac-brandy/15 px-5 py-14 sm:px-6 md:px-8 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_12%_20%,rgba(136,47,24,0.18),transparent_68%),radial-gradient(ellipse_45%_45%_at_92%_80%,rgba(71,21,12,0.18),transparent_72%)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-orange-200">Internal beta</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Get Lead Scout running.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
              Pick your computer, download the file, and start the app.
            </p>

            <div className="mt-10 max-w-3xl rounded-2xl border border-white/[0.1] bg-gradient-to-br from-white/[0.075] to-white/[0.02] p-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-md sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">Three steps</p>
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.55)] motion-reduce:animate-none" aria-hidden="true" />
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Choose your computer", "Download the package", "Start Lead Scout"].map((label, index) => (
                  <div key={label} className="flex items-center gap-3 border-t border-white/[0.1] pt-3 sm:block sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sumac-brandy/35 bg-sumac-brandy/25 text-xs font-bold text-orange-100">{index + 1}</span>
                    <p className="text-sm font-bold leading-5 sm:mt-3">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#180000]/35 px-5 py-14 text-white sm:px-6 md:px-8 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_88%_22%,rgba(136,47,24,0.12),transparent_70%)]" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-orange-200">Choose one</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">What computer are you using?</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/70">Use the matching card. The instructions are different for each operating system.</p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {platforms.map((platform) => (
                <PlatformCard key={platform.id} platform={platform} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/[0.08] bg-white/[0.02] px-5 py-12 sm:px-6 md:px-8">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Already installed?</h2>
              <p className="mt-2 text-sm leading-6 text-white/75">Open the dashboard on the same computer where Lead Scout is running.</p>
            </div>
            <a href={localDashboardUrl} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.08] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:border-sumac-brandy/35 hover:bg-sumac-brandy/20">
              <ServiceIcon name="zap" className="h-4 w-4" />
              Open dashboard
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
