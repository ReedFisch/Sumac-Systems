import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type LeadScoutInvitePageProps = {
  params: Promise<{
    invite: string;
  }>;
};

const fallbackInvite = "sumac-lead-scout-beta";

export const metadata: Metadata = {
  title: "Lead Scout Beta | Sumac Systems",
  description: "Private Lead Scout beta access for invited Sumac Systems users.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default async function LeadScoutInvitePage({
  params,
}: LeadScoutInvitePageProps) {
  const { invite } = await params;
  const expectedInvite = process.env.LEAD_SCOUT_INVITE_SLUG || fallbackInvite;

  if (invite !== expectedInvite) {
    notFound();
  }

  const appUrl = process.env.LEAD_SCOUT_APP_URL;

  return (
    <main className="min-h-screen bg-[#090707] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#c98d58]">
            Sumac Systems Private Beta
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Lead Scout
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            Find local businesses with no website, weak websites, bad Google
            profiles, and high-rating opportunities worth pitching.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["Search", "Pick a trade, city, and radius."],
            ["Audit", "Flag no-site, broken, weak, and outdated websites."],
            ["Close", "Prioritize high-rating businesses with clear website gaps."],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
            >
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/55">{copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          {appUrl ? (
            <a
              href={appUrl}
              className="rounded-md bg-[#c98d58] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#090707] transition hover:bg-[#e2ad75]"
              rel="noreferrer"
            >
              Open Lead Scout
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="rounded-md bg-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white/45"
            >
              App URL not configured
            </button>
          )}
          <Link
            href="/"
            className="rounded-md border border-white/10 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white/65 transition hover:border-white/25 hover:text-white"
          >
            Sumac Systems
          </Link>
        </div>
      </section>
    </main>
  );
}
