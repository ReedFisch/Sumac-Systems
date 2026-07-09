import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  CONNECT_REQUIREMENT_EVENT_TYPES,
  CONNECT_SUBSCRIPTION_EVENT_TYPES,
  retrieveConnectedAccountStatus,
} from "@/lib/stripe/connect/api";

export const dynamic = "force-dynamic";

type StripeConnectPageProps = {
  searchParams: Promise<{
    accountId?: string;
    created?: string;
    onboarding?: string;
    subscription?: string;
    session_id?: string;
  }>;
};

function StatusPill({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${
        active
          ? "bg-[#7cff67]/15 text-[#7cff67] ring-1 ring-[#7cff67]/30"
          : "bg-sumac-brandy/15 text-sumac-brandy ring-1 ring-sumac-brandy/30"
      }`}
    >
      {children}
    </span>
  );
}

export default async function StripeConnectPage({ searchParams }: StripeConnectPageProps) {
  const params = await searchParams;
  const accountId = params.accountId || "";
  const status = accountId ? await retrieveConnectedAccountStatus(accountId).catch((error) => error) : null;
  const statusError = status instanceof Error ? status.message : null;
  const accountStatus = status instanceof Error ? null : status;

  return (
    <div className="flex min-h-screen flex-col bg-sumac-dark text-white">
      <Header />
      <main className="flex-1 px-5 pb-20 pt-[calc(env(safe-area-inset-top,0px)+var(--site-header-h)+2rem)] md:pt-40">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <section className="flex flex-col gap-4 border-b border-white/10 pb-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-sumac-brandy">
              Stripe Connect sample
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Connected account payments
            </h1>
          </section>

          {params.created ? (
            <div className="rounded-lg border border-[#7cff67]/25 bg-[#7cff67]/10 p-4 text-sm text-[#d9ffd4]">
              Connected account created: <span className="font-mono">{accountId}</span>
            </div>
          ) : null}

          {params.subscription ? (
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70">
              Subscription checkout {params.subscription}. Session:{" "}
              <span className="font-mono">{params.session_id || "pending"}</span>
            </div>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
            <section className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <h2 className="mb-4 text-2xl font-bold">Create connected account</h2>
              <form action="/api/stripe/connect/accounts" method="post" className="flex flex-col gap-4">
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Display name
                  <input
                    className="rounded-md border border-white/10 bg-black/25 px-3 py-3 text-white outline-none focus:border-sumac-brandy"
                    name="displayName"
                    placeholder="Example Roofing"
                    required
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-white/70">
                  Contact email
                  <input
                    className="rounded-md border border-white/10 bg-black/25 px-3 py-3 text-white outline-none focus:border-sumac-brandy"
                    name="contactEmail"
                    placeholder="owner@example.com"
                    required
                    type="email"
                  />
                </label>
                <button className="rounded-md bg-sumac-brandy px-4 py-3 text-sm font-bold text-white transition hover:bg-sumac-brandy/85">
                  Create account
                </button>
              </form>
            </section>

            <section className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <h2 className="mb-4 text-2xl font-bold">Account status</h2>
              {accountStatus ? (
                <div className="flex flex-col gap-5">
                  <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                    <div>
                      <p className="text-white/40">Account ID</p>
                      <p className="font-mono text-white">{accountStatus.accountId}</p>
                    </div>
                    <div>
                      <p className="text-white/40">Contact</p>
                      <p>{accountStatus.contactEmail || "Not provided"}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <StatusPill active={accountStatus.readyToProcessPayments}>
                      Card payments: {accountStatus.cardPaymentsStatus || "unknown"}
                    </StatusPill>
                    <StatusPill active={accountStatus.onboardingComplete}>
                      Requirements: {accountStatus.requirementsStatus || "none due"}
                    </StatusPill>
                  </div>
                  <form action="/api/stripe/connect/onboarding" method="post">
                    <input name="accountId" type="hidden" value={accountStatus.accountId} />
                    <button className="w-full rounded-md bg-white px-4 py-3 text-sm font-bold text-sumac-dark transition hover:bg-white/85">
                      Onboard to collect payments
                    </button>
                  </form>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <a
                      className="rounded-md border border-white/10 px-4 py-3 text-center text-sm font-bold text-white/80 transition hover:border-white/30"
                      href={`/stripe-connect/storefront/${accountStatus.accountId}`}
                    >
                      Open storefront
                    </a>
                    <form action="/api/stripe/connect/subscription" method="post">
                      <input name="accountId" type="hidden" value={accountStatus.accountId} />
                      <button className="w-full rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/80 transition hover:border-white/30">
                        Subscribe account
                      </button>
                    </form>
                  </div>
                  <form action="/api/stripe/connect/billing-portal" method="post">
                    <input name="accountId" type="hidden" value={accountStatus.accountId} />
                    <button className="w-full rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/80 transition hover:border-white/30">
                      Manage subscription
                    </button>
                  </form>
                </div>
              ) : (
                <form method="get" className="flex flex-col gap-4">
                  <label className="flex flex-col gap-2 text-sm text-white/70">
                    Connected account ID
                    <input
                      className="rounded-md border border-white/10 bg-black/25 px-3 py-3 font-mono text-white outline-none focus:border-sumac-brandy"
                      name="accountId"
                      placeholder="acct_..."
                      required
                    />
                  </label>
                  <button className="rounded-md bg-white px-4 py-3 text-sm font-bold text-sumac-dark transition hover:bg-white/85">
                    Load status
                  </button>
                  {statusError ? <p className="text-sm text-sumac-brandy">{statusError}</p> : null}
                </form>
              )}
            </section>
          </div>

          {accountStatus ? (
            <section className="rounded-lg border border-white/10 bg-white/[0.035] p-6">
              <h2 className="mb-4 text-2xl font-bold">Create storefront product</h2>
              <form
                action="/api/stripe/connect/products"
                method="post"
                className="grid gap-4 md:grid-cols-[1fr_1fr_140px_100px_auto]"
              >
                <input name="accountId" type="hidden" value={accountStatus.accountId} />
                <input
                  className="rounded-md border border-white/10 bg-black/25 px-3 py-3 text-white outline-none focus:border-sumac-brandy"
                  name="name"
                  placeholder="Service call"
                  required
                />
                <input
                  className="rounded-md border border-white/10 bg-black/25 px-3 py-3 text-white outline-none focus:border-sumac-brandy"
                  name="description"
                  placeholder="Initial diagnostic"
                />
                <input
                  className="rounded-md border border-white/10 bg-black/25 px-3 py-3 text-white outline-none focus:border-sumac-brandy"
                  min="1"
                  name="unitAmount"
                  placeholder="2000"
                  required
                  type="number"
                />
                <input
                  className="rounded-md border border-white/10 bg-black/25 px-3 py-3 text-white outline-none focus:border-sumac-brandy"
                  name="currency"
                  placeholder="usd"
                  defaultValue="usd"
                />
                <button className="rounded-md bg-sumac-brandy px-4 py-3 text-sm font-bold text-white transition hover:bg-sumac-brandy/85">
                  Create
                </button>
              </form>
            </section>
          ) : null}

          <section className="rounded-lg border border-white/10 bg-white/[0.025] p-6 text-sm text-white/55">
            <h2 className="mb-3 text-lg font-bold text-white">Webhook endpoints</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="mb-2 font-mono text-xs text-sumac-brandy">Thin Connect events</p>
                <code className="block break-all rounded-md bg-black/25 p-3">
                  stripe listen --thin-events &apos;{CONNECT_REQUIREMENT_EVENT_TYPES.join(",")}&apos;
                  --forward-thin-to /api/stripe/connect/thin-webhook
                </code>
              </div>
              <div>
                <p className="mb-2 font-mono text-xs text-sumac-brandy">Subscription events</p>
                <code className="block break-all rounded-md bg-black/25 p-3">
                  {CONNECT_SUBSCRIPTION_EVENT_TYPES.join(", ")}
                </code>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
