import React from 'react';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { services } from '@/data/services';
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);
  
  if (!service) return { title: 'Not Found' };
  
  return {
    title: `${service.title} Services | Sumac Systems`,
    description: service.hero.description,
    openGraph: {
      title: `${service.title} Services | Sumac Systems`,
      description: service.hero.description,
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-sumac-dark">
      <Header />
      
      <main className="flex-1 animate-slide-up-fade">
        <ServicePageTemplate service={service} />
      </main>
      
      <Footer />
    </div>
  );
}
