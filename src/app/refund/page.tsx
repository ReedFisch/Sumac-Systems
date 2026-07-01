import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RefundPage() {
  return (
    <div className="flex flex-col min-h-screen bg-sumac-dark text-white">
      <Header />
      <main className="flex-1 w-full pt-[280px] pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">Refund and Cancellation Policy</h1>
          <p className="text-white/50 mb-12">Last updated: June 17, 2026</p>

          <div className="space-y-8 font-body text-white/80 leading-relaxed">
            <p>This policy explains how billing, cancellations, and refunds work for all Reed Fisch d/b/a Sumac Systems services.</p>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Subscription Billing</h2>
              <p>Reed Fisch d/b/a Sumac Systems operates on a recurring subscription model. Your monthly fee covers website hosting, active SEO management, third-party automation software, and technical support. Your subscription will automatically renew according to your selected billing cycle until you cancel.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">How to Cancel</h2>
              <p>You may cancel your subscription at any time by emailing us at hello@sumac.systems. Please include your name, business name, and a clear request to terminate services. To ensure a smooth offboarding process, we require a 30-day notice for all cancellations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">What Happens When You Cancel</h2>
              <p>When you cancel, your subscription and all connected services will remain active until the end of your current paid billing period. After that date:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Your website will be taken offline and hosting will be discontinued.</li>
                <li>All automated workflows, including SMS lead follow-ups and Google review requests, will be disabled.</li>
                <li>As outlined in our Terms of Service, Reed Fisch d/b/a Sumac Systems does not provide downloadable website files or migrate sites to other hosts upon standard cancellation. Continued access to the website and its automated systems requires an active subscription.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Refund Policy</h2>
              <p>Because our work involves immediate labor, server allocation, and third-party software configuration, subscription charges are strictly non-refundable. Each payment covers the service period for which it was charged. We do not provide refunds for:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Prior or completed billing periods.</li>
                <li>Partial or unused portions of a current billing period.</li>
                <li>Subscription downgrades or canceled add-on features.</li>
              </ul>
              <p className="mt-4">If you are experiencing an issue with your website or our service, please contact us directly. We prefer to solve the technical problem and keep your systems running smoothly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">New Project Exception</h2>
              <p>If you are a new client, you may request a full cancellation and refund within three (3) business days of your initial payment, provided that no actual design work or technical setup has started. To qualify for this one-time exception:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>You must email hello@sumac.systems within three business days of the initial charge.</li>
                <li>We must not have commenced any design iterations, SEO audits, or automation builds.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
