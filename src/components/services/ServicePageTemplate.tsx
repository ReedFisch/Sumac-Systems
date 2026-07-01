"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import type { ServiceDetail } from "@/data/services";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import { ServiceFaq } from "@/components/services/ServiceFaq";

const ServiceHeroVisual = dynamic(
  () => import("@/components/services/ServiceHeroVisual").then((m) => ({ default: m.ServiceHeroVisual })),
  { ssr: false }
);
const BenefitVisual = dynamic(
  () => import("@/components/services/BenefitVisual").then((m) => ({ default: m.BenefitVisual })),
  { ssr: false }
);
const BuiltToConvertGraphic = dynamic(
  () => import("@/components/services/BuiltToConvertGraphic").then((m) => ({ default: m.BuiltToConvertGraphic })),
  { ssr: false }
);

function FadeInView({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ServicePageTemplate({ service }: { service: ServiceDetail }) {
  const related = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-sumac-dark">
      {/* 1. Hero — full viewport */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center border-b border-sumac-brandy/15 overflow-hidden pt-[calc(env(safe-area-inset-top,0px)+var(--site-header-h))]">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 30%, rgba(136, 47, 24, 0.18) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 85% 60%, rgba(71, 21, 12, 0.12) 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 md:py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-sumac-brandy uppercase mb-4 md:mb-6">
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
                  className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-sumac-brandy text-white rounded-full font-semibold text-sm overflow-hidden hover:shadow-[0_0_30px_rgba(136,47,24,0.5)] transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="md:hidden">Book a Strategy Call</span>
                  <span className="hidden md:inline">Book a Strategy Call</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block lg:pl-8"
            >
              <ServiceHeroVisual slug={service.slug} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Benefits — mobile list */}
      <section className="py-10 md:hidden border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-sans font-bold text-white tracking-tight mb-6">What you get</h2>
          <div className="space-y-4">
            {service.benefits.slice(0, 3).map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-sumac-brandy/10 border border-sumac-brandy/20 flex items-center justify-center text-sumac-brandy shrink-0">
                  <ServiceIcon name={benefit.icon} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{benefit.title}</h3>
                  <p className="text-white/50 font-body text-sm leading-relaxed">{benefit.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits Zig-Zag Section — desktop */}
      <section className="hidden md:block py-16 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <FadeInView className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight">
              Engineered For Results
            </h2>
          </FadeInView>
          <div className="space-y-20 md:space-y-32">
            {service.benefits.slice(0, 3).map((benefit, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`flex flex-col gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 w-full relative">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
                    >
                      <BenefitVisual benefit={benefit as any} />
                      <div className="absolute inset-0 bg-gradient-to-tr from-sumac-dark/40 to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                  <div className="flex-1 w-full space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                      <div className="w-14 h-14 rounded-full bg-sumac-brandy/10 border border-sumac-brandy/20 flex items-center justify-center text-sumac-brandy mb-8 shadow-inner">
                        <ServiceIcon name={benefit.icon} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-sans text-white mb-4 tracking-tight">{benefit.title}</h3>
                      <p className="text-white/55 font-body text-base leading-relaxed">{benefit.tagline}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Struggles Section */}
      <section className="hidden md:block py-16 md:py-28 relative overflow-hidden border-y border-white/[0.04]">
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-cover bg-center" style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sumac-brandy/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
          <FadeInView className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-3">Sound Familiar?</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold text-white tracking-tight text-balance max-w-2xl mx-auto mb-4">
              {service.struggles.title}
            </h2>
            <p className="text-white/45 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              {service.struggles.subtitle}
            </p>
          </FadeInView>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {service.struggles.items.slice(0, 4).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl p-6 md:p-7 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-sm border border-white/[0.08] hover:border-sumac-brandy/30 hover:shadow-[0_0_40px_rgba(136,47,24,0.08)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-sumac-brandy/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-sumac-brandy/50 via-sumac-brandy/20 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-sumac-brandy/10 border border-sumac-brandy/20 flex items-center justify-center shrink-0 group-hover:bg-sumac-brandy/20 group-hover:border-sumac-brandy/40 transition-colors duration-300">
                    <span className="font-mono text-[11px] font-bold tracking-widest text-sumac-brandy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-base md:text-lg font-semibold text-white tracking-tight group-hover:text-sumac-brandy transition-colors duration-300">{item.title}</h3>
                    <p className="text-white/45 font-body text-sm leading-relaxed mt-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process — mobile */}
      <section className="py-10 md:hidden border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-sans font-bold text-white tracking-tight mb-6">{service.process.title}</h2>
          <ol className="space-y-4">
            {service.process.steps.map((step, i) => (
              <li key={i} className="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="w-8 h-8 rounded-full bg-sumac-brandy/20 border border-sumac-brandy/30 flex items-center justify-center text-sumac-brandy font-mono text-xs shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Process Flow Section — desktop */}
      <section className="hidden md:block py-16 md:py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sumac-brandy/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
              {service.process.title}
            </h2>
          </FadeInView>
          
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-sumac-brandy/20 to-transparent hidden md:block z-0" />
            
            {service.process.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-sumac-brandy border-4 border-sumac-dark flex items-center justify-center text-white font-bold text-lg mb-6 shadow-[0_0_20px_rgba(136,47,24,0.3)]">
                  {i + 1}
                </div>
                <div className="group bg-white/[0.03] border border-white/[0.08] p-5 md:p-6 rounded-2xl w-full h-full hover:border-sumac-brandy/30 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/45 font-body text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 7. Features Checklist Section */}
      <section className="hidden md:block py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-sumac-brandy/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
              {service.features.title}
            </h2>
          </FadeInView>
          
          <FadeInView delay={0.1}>
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:border-white/[0.12] transition-colors duration-500">
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                {service.features.items.slice(0, 4).map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90 font-medium text-lg">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* 8. FAQ Accordion */}
      <section className="py-10 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <FadeInView className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-sans font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </FadeInView>
          
          <FadeInView delay={0.1}>
            <ServiceFaq faqs={service.faqs} />
          </FadeInView>
        </div>
      </section>

      {/* 9. Middle CTA & Proof Section */}
      <section className="py-10 md:py-24 bg-[#0a0000] border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sumac-brandy/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
          <FadeInView>
            <h2 className="text-2xl md:text-5xl font-sans font-bold text-white tracking-tight mb-3 md:mb-6 text-balance">
              {service.middleCta.title}
            </h2>
            <p className="text-white/50 font-body text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto hidden md:block">
              {service.middleCta.subtitle}
            </p>
            <Link
              href={service.middleCta.ctaHref}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-sumac-brandy text-white rounded-full font-bold text-base overflow-hidden hover:shadow-[0_0_40px_rgba(136,47,24,0.4)] transition-all md:mb-16"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              {service.middleCta.ctaLabel}
            </Link>
            <FadeInView delay={0.2} className="hidden md:flex relative w-full aspect-[21/9] rounded-2xl border border-white/10 mt-8 items-center justify-center p-8">
              <BuiltToConvertGraphic slug={service.slug} />
            </FadeInView>
          </FadeInView>
        </div>
      </section>

      {/* 10. Related Services */}
      <section className="hidden md:block py-16 md:py-24 border-t border-white/[0.06] bg-[#0e0202]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight">
              Related Services
            </h2>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/services/${s.slug}`} className="block group h-full">
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-sumac-brandy/40 hover:shadow-[0_0_30px_rgba(136,47,24,0.1)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sumac-brandy transition-colors">{s.title}</h3>
                    <p className="text-white/50 font-body text-sm leading-relaxed mb-6 flex-grow">{s.definition.description}</p>
                    <div className="flex items-center text-sumac-brandy font-medium text-sm">
                      Learn More 
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
