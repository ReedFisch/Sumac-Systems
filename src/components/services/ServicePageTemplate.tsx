"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ServiceDetail } from "@/data/services";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import { ServiceHeroVisual } from "@/components/services/ServiceHeroVisual";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import Image from "next/image";

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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
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
                  className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 bg-sumac-brandy text-white rounded-full font-semibold text-sm overflow-hidden hover:shadow-[0_0_30px_rgba(136,47,24,0.5)] transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  Book a Strategy Call
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="lg:pl-8"
            >
              <ServiceHeroVisual slug={service.slug} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Definition Section */}
      <section className="py-16 md:py-24 border-b border-white/[0.06] relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sumac-brandy/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <FadeInView>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
                {service.definition.title}
              </h2>
              <p className="text-white/60 font-body text-lg leading-relaxed">
                {service.definition.description}
              </p>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="flex flex-col gap-3">
                {service.definition.examples.map((example, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="px-6 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center shadow-inner hover:border-sumac-brandy/30 hover:bg-white/[0.05] transition-all cursor-default"
                  >
                    <span className="text-sumac-brandy font-bold text-xl mr-4 opacity-50">&ldquo;</span>
                    <span className="text-white/80 font-medium font-body italic text-sm">{example.replace(/"/g, '')}</span>
                    <span className="text-sumac-brandy font-bold text-xl ml-4 opacity-50">&rdquo;</span>
                  </motion.div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* 3. 4-Card Benefits Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
              Your Customers Are Already Searching
            </h2>
            <p className="text-white/55 font-body text-lg md:text-xl leading-relaxed">
              If you aren&apos;t showing up, your competitors are getting the calls.
            </p>
          </FadeInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-sumac-brandy/40 hover:shadow-[0_0_30px_rgba(136,47,24,0.1)] transition-all duration-300 text-center flex flex-col items-center hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-sumac-brandy/10 border border-sumac-brandy/20 flex items-center justify-center text-sumac-brandy mb-6 group-hover:bg-sumac-brandy/20 group-hover:border-sumac-brandy/40 transition-all">
                  <ServiceIcon name={benefit.icon} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-white/60 font-body leading-relaxed text-sm">{benefit.tagline}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Struggles Section */}
      <section className="py-16 md:py-24 bg-[#0a0000] border-y border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-900/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
              {service.struggles.title}
            </h2>
            <p className="text-white/55 font-body text-lg md:text-xl leading-relaxed">
              {service.struggles.subtitle}
            </p>
          </FadeInView>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.struggles.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 rounded-2xl bg-[#180404]/60 border border-red-900/20 hover:border-red-800/40 hover:bg-[#1f0606]/70 transition-all duration-300 flex flex-col gap-4 items-start"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0 group-hover:bg-red-500/25 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-white/55 font-body text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Flow Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
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
                <div className="group bg-white/[0.03] border border-white/[0.08] p-6 rounded-2xl w-full h-full hover:border-sumac-brandy/30 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/55 font-body text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* 7. Features Checklist Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
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
                {service.features.items.map((feature, i) => (
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

      {/* 8. Middle CTA & Proof Section */}
      <section className="py-16 md:py-24 bg-[#0a0000] border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sumac-brandy/[0.03] via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center relative">
          <FadeInView>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-white tracking-tight mb-8 text-balance">
              {service.middleCta.title}
            </h2>
            <p className="text-white/60 font-body text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
              {service.middleCta.subtitle}
            </p>
            <Link
              href={service.middleCta.ctaHref}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-sumac-brandy text-white rounded-full font-bold text-base overflow-hidden hover:shadow-[0_0_40px_rgba(136,47,24,0.4)] transition-all mb-16"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              {service.middleCta.ctaLabel}
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* 9. FAQ Accordion */}
      <section className="py-16 md:py-24 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <FadeInView className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </FadeInView>
          
          <FadeInView delay={0.1}>
            <ServiceFaq faqs={service.faqs} />
          </FadeInView>
        </div>
      </section>

      {/* 10. Related Services */}
      <section className="py-16 md:py-24 border-t border-white/[0.06] bg-[#0e0202]">
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
                    <p className="text-white/50 font-body text-sm mb-6 flex-grow">{s.hero.description.split('.')[0]}.</p>
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

      {/* 11. Bottom CTA */}
      <section className="py-16 md:py-24 bg-[#0a0000] border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sumac-brandy/[0.08] via-transparent to-sumac-brandy/[0.04] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <FadeInView>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-4 text-balance">
              {service.bottomCta.title}
            </h2>
            <p className="text-white/60 font-body text-lg md:text-xl mb-10 max-w-xl mx-auto">{service.bottomCta.description}</p>
            <Link
              href={service.bottomCta.ctaHref}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-sumac-brandy text-white rounded-full font-bold text-lg overflow-hidden hover:shadow-[0_0_40px_rgba(136,47,24,0.5)] transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              {service.bottomCta.ctaLabel}
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
