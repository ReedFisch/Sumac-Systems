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
      {/* 1. Hero */}
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

      {/* 2. Definition Section */}
      <section className="py-16 md:py-24 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
                {service.definition.title}
              </h2>
              <p className="text-white/60 font-body text-lg leading-relaxed">
                {service.definition.description}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {service.definition.examples.map((example, i) => (
                <div key={i} className="px-6 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center shadow-inner">
                  <span className="text-sumac-brandy font-bold text-xl mr-4">"</span>
                  <span className="text-white/80 font-medium font-body italic">{example.replace(/"/g, '')}</span>
                  <span className="text-sumac-brandy font-bold text-xl ml-4">"</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. 4-Card Benefits Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
              Your Customers Are Already Searching
            </h2>
            <p className="text-white/55 font-body text-lg md:text-xl leading-relaxed">
              If you aren't showing up, your competitors are getting the calls.
            </p>
          </div>
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

      {/* 4. Struggles Section (Red 'X' Cards) */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.struggles.items.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#2A0808]/40 border border-[#802020]/40 flex flex-col gap-4 items-start shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-white/60 font-body text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Flow Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
              {service.process.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block z-0" />
            
            {service.process.steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-sumac-brandy border-4 border-sumac-dark flex items-center justify-center text-white font-bold text-lg mb-6 shadow-xl">
                  {i + 1}
                </div>
                <div className="bg-white/[0.03] border border-white/[0.08] p-6 rounded-2xl w-full h-full">
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 font-body text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries Section */}
      <section className="py-16 md:py-24 bg-[#1f0a05] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
            {service.industries.title}
          </h2>
          <p className="text-white/55 font-body text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            {service.industries.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {service.industries.items.map((industry, i) => (
              <div key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-sumac-brandy hover:border-sumac-brandy transition-colors cursor-default shadow-lg">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Features Checklist Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
              {service.features.title}
            </h2>
          </div>
          
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
              {service.features.items.map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90 font-medium text-lg">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Middle CTA & Proof Section */}
      <section className="py-16 md:py-24 bg-sumac-slate border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-tight mb-8 text-balance">
            {service.middleCta.title}
          </h2>
          <p className="text-white/60 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            {service.middleCta.subtitle}
          </p>
          <Link
            href={service.middleCta.ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-sumac-brandy text-white rounded-full font-bold text-base hover:bg-[#a3401f] transition-all shadow-[0_0_30px_rgba(136,47,24,0.35)] mb-16"
          >
            {service.middleCta.ctaLabel}
          </Link>
          
          {service.middleCta.image && (
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black">
              <Image 
                src={service.middleCta.image}
                alt="Results"
                width={1200}
                height={600}
                className="w-full h-auto opacity-80"
              />
            </div>
          )}
        </div>
      </section>

      {/* 9. FAQ Accordion */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]">
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

      {/* 10. Related Services */}
      <section className="py-16 md:py-24 border-t border-white/[0.06] bg-[#1a0505]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
              Related Services
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <Link key={i} href={`/services/${s.slug}`} className="block group">
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-sumac-brandy/50 transition-all h-full flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sumac-brandy transition-colors">{s.title}</h3>
                  <p className="text-white/50 font-body text-sm mb-6 flex-grow">{s.hero.description}</p>
                  <div className="flex items-center text-sumac-brandy font-medium text-sm">
                    Learn More 
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Bottom CTA */}
      <section className="py-16 md:py-24 bg-sumac-brandy border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-4 text-balance">
            {service.bottomCta.title}
          </h2>
          <p className="text-white/80 font-body text-lg md:text-xl mb-10 max-w-xl mx-auto">{service.bottomCta.description}</p>
          <Link
            href={service.bottomCta.ctaHref}
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-sumac-brandy rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all"
          >
            {service.bottomCta.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
