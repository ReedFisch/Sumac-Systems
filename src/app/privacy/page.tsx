import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-sumac-dark text-white">
      <Header />
      <main className="flex-1 w-full pt-[280px] pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4">Privacy Policy</h1>
          <p className="text-white/50 mb-12">Last updated: June 17, 2026</p>

          <div className="space-y-8 font-body text-white/80 leading-relaxed">
            <p>This Privacy Policy explains how Reed Fisch d/b/a Sumac Systems ("we," "us," or "our") collects, uses, and protects your information when you visit our website or engage our services.</p>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Information We Collect</h2>
              <p>We collect information that you voluntarily provide to us, as well as data collected automatically when you use our website.</p>
              
              <h3 className="text-xl font-bold mt-6 mb-2 text-white">Information you provide directly:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Name and contact details (email address, phone number)</li>
                <li>Business name and operational details</li>
                <li>Billing information (processed securely through third-party providers)</li>
                <li>Account credentials needed to manage your domain or hosting</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-2 text-white">Information collected automatically:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Device and browser information</li>
                <li>IP addresses and location data</li>
                <li>Website usage metrics (pages visited, links clicked)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">How We Use Your Information</h2>
              <p>We do not sell, rent, or trade your personal information. We use the data we collect strictly to run our business and provide your services. This includes:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Designing, building, and managing your website.</li>
                <li>Setting up and testing automated SMS and email workflows.</li>
                <li>Processing payments and managing your subscription.</li>
                <li>Communicating with you about your project, updates, or support needs.</li>
                <li>Marketing our services to you or creating targeted advertising campaigns.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Third-Party Services and Integrations</h2>
              <p>We use trusted third-party platforms to operate Reed Fisch d/b/a Sumac Systems. These providers have their own privacy policies regarding how they handle your data, these include but are not limited to.</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Stripe:</strong> We use Stripe to process all subscription and project payments. We do not store your full credit card information on our servers.</li>
                <li><strong>Calendly:</strong> We use Calendly to book are calls, through Calendly we are able to plan meetings without direct interaction with potential clients.</li>
                <li><strong>Analytics and Advertising:</strong> We use Google Analytics to track site performance. We may also use platforms like Meta (Facebook and Instagram) to run advertising campaigns and generate leads.</li>
                <li><strong>Automation Platforms:</strong> We use third-party software to build and route your automated email and SMS workflows.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">SMS and Text Messaging Data</h2>
              <p>If you opt into receiving text messages from us, or if we set up text automations for your business, your mobile phone number will be kept strictly confidential. We will not share or sell your phone number or SMS consent data to any third parties or affiliates for their own marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold font-sans text-white mb-4">Portfolio and Social Media Use</h2>
              <p>We are proud of the work we do. We frequently share screenshots, live links, and case studies of completed client websites on our own website and across our social media channels. We will only share public-facing information and design assets. We will never publicly share your private business metrics, passwords, or internal customer data.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
