import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

const servicesContent = {
  'web-design': {
    title: 'Web Design',
    subtitle: 'Fast, clear, and built to convert.',
    content: (
      <>
        <p className="mb-6">
          Most websites are too slow and confusing. We build sites that load instantly and tell people exactly what to do next. We use modern tools so your site does not break when traffic spikes, and we make sure it looks perfect on phones since that is where most people will see it.
        </p>
        <p className="mb-6">
          We do not use bloated templates that take forever to load. Every line of code is written to make your website as fast and lightweight as possible. A faster website means fewer people leaving before the page loads, which directly translates to more leads for your business.
        </p>
        <p>
          We also focus heavily on the user experience. We organize the information so your potential customers can easily find what they are looking for and contact you without any friction.
        </p>
      </>
    )
  },
  'ai-seo': {
    title: 'AI & SEO',
    subtitle: 'Get found where people are actually searching.',
    content: (
      <>
        <p className="mb-6">
          Search is changing. People are using AI tools like ChatGPT to find answers, not just traditional Google searches. We structure your website data so both traditional search engines and new AI tools can easily read and recommend your business.
        </p>
        <p className="mb-6">
          We fix broken links, optimize images, and write clean code so you rank higher naturally. We do a deep technical audit of your existing web presence to find exactly what is holding you back from ranking locally.
        </p>
        <p>
          We also add hidden structured data called schema markup. This speaks directly to search algorithms in their native language, telling them exactly what services you offer and where you are located.
        </p>
      </>
    )
  },
  'brand-kits': {
    title: 'Brand Kits',
    subtitle: 'Look professional everywhere.',
    content: (
      <>
        <p className="mb-6">
          Consistency builds trust. If your logo, colors, and fonts look different on your website, social media, and business cards, people notice. We build a clear visual system for your business.
        </p>
        <p className="mb-6">
          You get exact color codes and typography rules so your brand always looks professional and cohesive. We do not just guess what looks good. We build a mathematical hierarchy for your fonts and spacing so everything feels perfectly balanced.
        </p>
        <p>
          This level of detail makes your business look highly credible, which makes it much easier to charge premium prices for your services.
        </p>
      </>
    )
  },
    'automations': {
    title: 'Automations',
    subtitle: 'Catch the leads you are missing.',
    content: (
      <>
        <p className="mb-6">
          You are busy running your business and might miss a call or email. We set up smart software systems that automatically text people back if you miss their call. 
        </p>
        <p className="mb-6">
          But it doesn't just send a generic message. The automated system can actively answer their questions in real-time and even book appointments directly into your calendar while you are away. An automatic text message letting them know you are taking care of them stops them from calling your competitor next.
        </p>
        <p>
          We also build systems that ask happy customers for Google reviews automatically. A constant stream of 5-star reviews signals to Google that you are the top authority in your area, pushing you higher in local search rankings and making it a no-brainer for new customers to choose you over the competition.
        </p>
      </>
    )
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesContent[resolvedParams.slug as keyof typeof servicesContent];
  
  if (!service) return { title: 'Not Found' };
  
  return {
    title: `${service.title} Services | Sumac Systems`,
    description: service.subtitle,
    openGraph: {
      title: `${service.title} Services | Sumac Systems`,
      description: service.subtitle,
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesContent[resolvedParams.slug as keyof typeof servicesContent];

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-sumac-dark text-white">
      <Header />
      
      <main className="flex-1 pt-40 md:pt-[320px] pb-32 md:pb-64 min-h-[120vh]">
        <div className="max-w-3xl mx-auto px-6 animate-slide-up-fade">
          <BackButton />
          
          <h1 className="text-5xl md:text-7xl font-sans font-bold tracking-tight mb-6">
            {service.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/50 font-body mb-12">
            {service.subtitle}
          </h2>
          
          <div className="prose prose-invert prose-lg font-body text-white/80 max-w-none leading-relaxed">
            {service.content}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
