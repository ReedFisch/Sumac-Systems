import Link from "next/link";
import { motion } from "motion/react";
import type { ServiceDetail } from "@/data/services";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import { ServiceHeroVisual } from "@/components/services/ServiceHeroVisual";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import Image from "next/image";

export function ServicePageTemplate({ service }: { service: ServiceDetail }) {
  const related = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="page-canvas bg-sumac-dark">
      {/* Hero */}
      <section className="relative border-b border-sumac-brandy/15 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(136, 47, 24, 0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 85% 60%, rgba(71, 21, 12, 0.12) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-[180px] md:pt-[280px] pb-16 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-sumac-brandy uppercase mb-6">
                {service.title}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-sans font-bold text-white tracking-tight leading-[1.1] text-balance">
                {service.hero.headline}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-sumac-brandy to-[#a3401f] font-accent italic pr-2 pb-1.5">
                  {service.hero.headlineAccent}
                </span>
              </h1>
              <p className="mt-6 md:mt-8 text-white/55 font-body text-base md:text-lg leading-relaxed max-w-lg">
                {service.hero.description}
              </p>
              
              <div className="mt-8 md:mt-12 flex flex-wrap gap-4">
                <Link
                  href={service.bottomCta.ctaHref}
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-sumac-brandy text-white rounded-full font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(136,47,24,0.35)]"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <ServiceHeroVisual slug={service.slug} />
            </div>
          </div>
        </div>
      </section>

      {/* 4-Card Benefits Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] hover:border-sumac-brandy/30 transition-all text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-sumac-brandy/10 border border-sumac-brandy/20 flex items-center justify-center text-sumac-brandy mb-6">
                  <ServiceIcon name={benefit.icon} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/60 font-body leading-relaxed text-sm">{benefit.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struggles Section (Red 'X' Cards) */}
      <section className="py-16 md:py-24 bg-sumac-slate border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
              {service.struggles.title}
            </h2>
            <p className="text-white/55 font-body text-lg md:text-xl leading-relaxed">
              {service.struggles.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {service.struggles.items.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#2A0808]/40 border border-[#802020]/40 flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/55 font-body text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle CTA & Proof Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-tight mb-8 text-balance">
            {service.middleCta.title}
          </h2>
          <p className="text-white/60 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            {service.middleCta.subtitle}
          </p>
          <Link
            href={service.middleCta.ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2563EB] text-white rounded-full font-bold text-base hover:bg-blue-600 transition-all shadow-[0_0_30px_rgba(37,99,235,0.35)] mb-16"
          >
            {service.middleCta.ctaLabel}
          </Link>
          
          {service.middleCta.image && (
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image 
                src={service.middleCta.image}
                alt="Results"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-sumac-slate border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden divide-y divide-white/[0.06]">
            <ServiceFaq faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-[#1f0a05] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight mb-4">
            {service.bottomCta.title}
          </h2>
          <p className="text-white/55 font-body text-base md:text-lg mb-8">{service.bottomCta.description}</p>
          <Link
            href={service.bottomCta.ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-sumac-brandy text-white rounded-full font-semibold text-sm md:text-base hover:brightness-110 transition-all shadow-[0_0_30px_rgba(136,47,24,0.35)]"
          >
            {service.bottomCta.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
