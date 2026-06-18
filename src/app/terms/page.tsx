import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-sumac-dark text-white">
      <Header />
      <main className="flex-1 w-full pt-[280px] pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">Terms of Service</h1>
          <p className="text-white/50 mb-12">Last updated: June 17, 2026</p>

          <div className="space-y-8 font-body text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Agreement to Terms</h2>
              <p>By working with us or using our services, you agree to these Terms of Service. If you do not agree, please do not use our services.</p>
              <p className="mt-4">"Reed Fisch d/b/a Sumac Systems," "we," "us," or "our" refers to the business and its operators. "You" or "Client" refers to the business or individual engaging us for website design, automation, and marketing services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Services Provided</h2>
              <p>Reed Fisch d/b/a Sumac Systems provides custom website design, development, and ongoing marketing services. Depending on your project scope, this may include:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Custom website design and performance-optimized development</li>
                <li>SEO and AI search optimization</li>
                <li>Custom brand kit creation</li>
                <li>Setup of automated SMS follow-ups and Google review requests</li>
                <li>Ongoing SEO management and technical support</li>
              </ul>
              <p className="mt-4">Specific deliverables will be outlined in your individual project proposal or ongoing service agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Client Responsibilities</h2>
              <p>To keep the project moving forward, you agree to:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Supply necessary content, images, and brand materials in a timely manner.</li>
                <li>Provide any required access credentials for domain registrars, existing hosting, or third-party platforms.</li>
                <li>Review and approve designs within a reasonable timeframe.</li>
                <li>Ensure all content you provide does not infringe on third-party copyrights or trademarks.</li>
                <li>Use the website, automations, and services in compliance with all applicable local, state, and federal laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Timelines and Revisions</h2>
              <p>We aim to deliver your initial website build within the timeframe specified in your proposal. Actual launch dates depend heavily on how quickly you provide content and feedback.</p>
              <p className="mt-4">Your project includes a reasonable number of revision rounds as defined in your proposal. Major scope changes or additional features requested after the initial agreement may require a separate estimate and timeline adjustment. Your website will not go live until you provide written approval.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Payments and Subscription</h2>
              <p>Reed Fisch d/b/a Sumac Systems operates on a recurring subscription model. Your monthly fee covers the design, development, hosting, and ongoing management of your website and its connected systems. By subscribing, you authorize us to charge your payment method on a recurring basis.</p>
              <p className="mt-4">You may cancel your subscription at any time with a 30-day written notice. Upon cancellation, your website will remain live until the end of your current billing period. After that, hosting and access will be discontinued. Because our service is an ongoing package, we do not provide downloadable website files or migrate websites to other hosts upon standard cancellation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Ownership and Licenses</h2>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Your Content:</strong> You retain full ownership of all text, images, logos, and materials you provide to us. You grant Reed Fisch d/b/a Sumac Systems a license to use these materials to build and manage your project.</li>
                <li><strong>The Website Build:</strong> Reed Fisch d/b/a Sumac Systems retains full ownership of the custom website design, code, frameworks, and automation workflows. Your active subscription grants you an exclusive license to use the website and its systems to run your business.</li>
                <li><strong>Business Continuity Safeguard:</strong> We know your website is critical to your operations. If Reed Fisch d/b/a Sumac Systems ever permanently ceases operations, this agreement automatically shifts. We will transfer full ownership of the website code, assets, and your custom domain directly to you at no additional cost. You will never be left without your website.</li>
                <li><strong>Portfolio Rights:</strong> We are proud of the systems we build. We reserve the right to use your website as an example of our work. This includes displaying screenshots, case studies, and live links to your site on the Sumac Systems website and across our social media channels.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">No Guarantees</h2>
              <p>We build high-performance systems designed to move your business forward. However, digital landscapes change constantly. Reed Fisch d/b/a Sumac Systems does not guarantee:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Specific search engine rankings or inclusion in AI-generated search overviews like ChatGPT or Google AI Overviews.</li>
                <li>A specific volume of inbound leads, sales, or conversions.</li>
                <li>100% uninterrupted operation of third-party automation tools or hosting providers.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
