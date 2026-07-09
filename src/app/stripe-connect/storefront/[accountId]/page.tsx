import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  listConnectedAccountProducts,
  type StorefrontProduct,
} from "@/lib/stripe/connect/api";

export const dynamic = "force-dynamic";

type StorefrontPageProps = {
  params: Promise<{
    accountId: string;
  }>;
  searchParams: Promise<{
    product_created?: string;
    checkout?: string;
  }>;
};

function formatMoney(unitAmount: number | null, currency: string | null) {
  if (unitAmount === null || !currency) {
    return "Price unavailable";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(unitAmount / 100);
}

export default async function StorefrontPage({ params, searchParams }: StorefrontPageProps) {
  const { accountId } = await params;
  const query = await searchParams;
  const productsResult = await listConnectedAccountProducts(accountId).catch((error) => error);
  const products: StorefrontProduct[] = productsResult instanceof Error ? [] : productsResult;
  const error = productsResult instanceof Error ? productsResult.message : null;

  // Demo shortcut: the connected account ID is used directly in the URL.
  // Production apps should route by an internal seller slug and look up the
  // Stripe account ID server-side so customers never depend on acct_ IDs.
  return (
    <div className="flex min-h-screen flex-col bg-sumac-dark text-white">
      <Header />
      <main className="flex-1 px-5 pb-20 pt-[calc(env(safe-area-inset-top,0px)+var(--site-header-h)+2rem)] md:pt-40">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <section className="flex flex-col gap-4 border-b border-white/10 pb-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-sumac-brandy">
              Storefront
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Sample products</h1>
            <p className="font-mono text-sm text-white/45">{accountId}</p>
          </section>

          {query.product_created ? (
            <div className="rounded-lg border border-[#7cff67]/25 bg-[#7cff67]/10 p-4 text-sm text-[#d9ffd4]">
              Product created: <span className="font-mono">{query.product_created}</span>
            </div>
          ) : null}

          {query.checkout ? (
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-white/70">
              Checkout {query.checkout}.
            </div>
          ) : null}

          {error ? (
            <div className="rounded-lg border border-sumac-brandy/30 bg-sumac-brandy/10 p-4 text-sm text-sumac-brandy">
              {error}
            </div>
          ) : null}

          <div className="grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <article
                className="flex min-h-56 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.035] p-6"
                key={product.id}
              >
                <div>
                  <p className="mb-2 font-mono text-xs text-white/35">{product.id}</p>
                  <h2 className="text-2xl font-bold">{product.name}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {product.description || "No description provided."}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-xl font-bold">
                    {formatMoney(product.unitAmount, product.currency)}
                  </p>
                  <form action="/api/stripe/connect/checkout" method="post">
                    <input name="accountId" type="hidden" value={accountId} />
                    <input name="priceId" type="hidden" value={product.priceId || ""} />
                    <button
                      className="rounded-md bg-sumac-brandy px-4 py-3 text-sm font-bold text-white transition hover:bg-sumac-brandy/85 disabled:cursor-not-allowed disabled:opacity-40"
                      disabled={!product.priceId}
                    >
                      Buy
                    </button>
                  </form>
                </div>
              </article>
            ))}
          </div>

          {!error && products.length === 0 ? (
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 text-center text-white/55">
              No active products yet.
            </div>
          ) : null}

          <a
            className="w-fit rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/80 transition hover:border-white/30"
            href={`/stripe-connect?accountId=${accountId}`}
          >
            Back to Connect dashboard
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
