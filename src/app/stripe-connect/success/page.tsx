import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
    accountId?: string;
  }>;
};

export default async function StripeConnectSuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;

  return (
    <div className="flex min-h-screen flex-col bg-sumac-dark text-white">
      <Header />
      <main className="flex flex-1 items-center px-5 py-32">
        <section className="mx-auto w-full max-w-2xl rounded-lg border border-white/10 bg-white/[0.035] p-8 text-center">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#7cff67]">
            Payment complete
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Thanks for your purchase</h1>
          <p className="mt-4 text-sm text-white/55">
            Session: <span className="font-mono">{params.session_id || "pending"}</span>
          </p>
          {params.accountId ? (
            <a
              className="mt-8 inline-flex rounded-md border border-white/10 px-4 py-3 text-sm font-bold text-white/80 transition hover:border-white/30"
              href={`/stripe-connect/storefront/${params.accountId}`}
            >
              Return to storefront
            </a>
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}
