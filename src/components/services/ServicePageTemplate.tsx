import Link from "next/link";
import { motion } from "motion/react";
import type { ServiceDetail } from "@/data/services";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import { ServiceHeroVisual } from "@/components/services/ServiceHeroVisual";
import { ServiceFaq } from "@/components/services/ServiceFaq";

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
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 pt-[calc(var(--site-header-h-hero)+2.5rem)] md:pt-[calc(var(--site-header-h-hero)+3.5rem)] pb-16 md:pb-24">
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

      {/* Approach */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
              {service.approach.title}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {service.approach.items.map((item, i) => (
              <div key={i} className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-sumac-brandy font-mono text-xs mb-4">0{i+1}</div>
                <p className="text-white/80 font-medium text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-black/40 border-y border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight mb-6">
                Why this matters.
              </h2>
              <p className="text-white/55 font-body text-base md:text-lg leading-relaxed">
                Our focus is always on delivering measurable value and a tangible return on your investment.
              </p>
            </div>
            <div className="space-y-8">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 md:gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-sumac-brandy/15 border border-sumac-brandy/25 flex items-center justify-center shrink-0 text-sumac-brandy mt-1">
                    <ServiceIcon name={benefit.icon} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/60 font-body leading-relaxed">{benefit.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/55">Common questions about this service.</p>
          </div>
          <ServiceFaq slug={service.slug} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <h2 className="text-2xl font-bold text-white mb-10">Other Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.slice(0, 3).map((rel) => (
              <Link href={`/services/${rel.slug}`} key={rel.slug} className="group block p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-sumac-brandy/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-sumac-brandy/10 flex items-center justify-center text-sumac-brandy mb-4">
                  <ServiceIcon name={rel.benefits[0]?.icon ?? "sparkles"} />
                </div>
                <h3 className="font-sans font-bold text-white text-lg mb-2 group-hover:text-sumac-brandy transition-colors">
                  {rel.title}
                </h3>
                <p className="text-white/45 font-body text-sm leading-relaxed mb-4">{rel.hero.description.slice(0, 80)}...</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-sumac-brandy group-hover:gap-2.5 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-[#1f0a05]">
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
