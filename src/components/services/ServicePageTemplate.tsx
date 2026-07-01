"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { ServiceDetail } from "@/data/services";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/services/ServiceIcons";
import { ServiceHeroVisual } from "@/components/services/ServiceHeroVisual";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { BenefitVisual } from "@/components/services/BenefitVisual";
import { BuiltToConvertGraphic } from "@/components/services/BuiltToConvertGraphic";
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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-[calc(var(--site-header-h)+2rem)] md:pt-[280px] pb-12 md:pb-24">
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
                  <span className="md:hidden">Book a Call</span>
                  <span className="hidden md:inline">Book a Strategy Call</span>
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
              <div className="relative">
                {/* Decorative background blur */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-sumac-brandy/5 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="grid grid-cols-1 gap-4 relative z-10">
                  {service.definition.examples.map((example, i) => {
                    let mainText = example.replace(/"/g, '');
                    let subText = '';
                    
                    if (mainText.includes(' - ')) {
                      const parts = mainText.split(' - ');
                      mainText = parts[0];
                      subText = parts[1];
                    } else if (mainText.includes(' → ')) {
                      const parts = mainText.split(' → ');
                      mainText = parts[0];
                      subText = parts[1];
                    }

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                        className={`p-5 rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 shadow-2xl flex items-start gap-4 hover:border-sumac-brandy/30 hover:bg-white/[0.04] transition-colors group ${i % 2 !== 0 ? 'md:ml-12' : 'md:mr-12'}`}
                      >
                         <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center shrink-0 border border-white/5 mt-0.5 group-hover:border-sumac-brandy/30 transition-colors">
                           <div className="w-1.5 h-1.5 rounded-full bg-sumac-brandy/70 group-hover:bg-sumac-brandy group-hover:shadow-[0_0_8px_rgba(136,47,24,0.8)] transition-all" />
                         </div>
                         <div>
                           <p className="text-white/90 font-medium font-sans text-[15px] leading-snug">{mainText}</p>
                           {subText && (
                             <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mt-2">{subText}</p>
                           )}
                         </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* 3. Benefits Zig-Zag Section */}
      <section className="py-16 md:py-32 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <FadeInView className="text-center mb-20 md:mb-32">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white tracking-tight mb-6">
              Engineered For Results
            </h2>
            <p className="text-white/55 font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Everything we build is designed with one goal: turning local searchers into booked jobs for your business.
            </p>
          </FadeInView>
          <div className="space-y-24 md:space-y-40">
            {service.benefits.map((benefit, i) => {
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
                      <h3 className="text-3xl md:text-4xl font-bold font-sans text-white mb-6 tracking-tight">{benefit.title}</h3>
                      <p className="text-white/60 font-body text-lg leading-relaxed">{benefit.tagline}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3.5 Credibility Banner */}
      <section className="py-20 md:py-28 border-y border-sumac-brandy/20 bg-[#120a06] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-sumac-brandy/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
           <FadeInView className="text-center mb-16 md:mb-20">
            <h2 className="text-sm md:text-base uppercase tracking-[0.2em] font-mono font-bold text-sumac-brandy">The Numbers Speak For Themselves</h2>
           </FadeInView>
           
           <div className="grid md:grid-cols-3 gap-12 md:gap-16 text-center">
             <FadeInView delay={0.1} className="flex flex-col items-center group">
               <span className="text-6xl md:text-8xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-tighter mb-6 group-hover:scale-110 transition-transform duration-500">75%</span>
               <h4 className="text-white font-bold text-xl mb-3">Credibility Judged by Design</h4>
               <p className="text-white/80 text-base leading-relaxed mb-6">Users judge a business&apos;s credibility directly based on their website design and speed.</p>
               <a href="https://exhibits.stanford.edu/fogg/catalog/yg466vx0159" target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:text-sumac-brandy transition-colors uppercase tracking-widest font-mono border-b border-white/20 hover:border-sumac-brandy/50 pb-0.5 inline-block">— Stanford Research</a>
             </FadeInView>
             
             <FadeInView delay={0.2} className="flex flex-col items-center group">
               <span className="text-6xl md:text-8xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-tighter mb-6 group-hover:scale-110 transition-transform duration-500">27%</span>
               <h4 className="text-white font-bold text-xl mb-3">Clicks Go to Rank #1</h4>
               <p className="text-white/80 text-base leading-relaxed mb-6">The #1 organic result in Google captures over a quarter of all local search traffic.</p>
               <a href="https://backlinko.com/google-ctr-stats" target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:text-sumac-brandy transition-colors uppercase tracking-widest font-mono border-b border-white/20 hover:border-sumac-brandy/50 pb-0.5 inline-block">— Backlinko SEO Study</a>
             </FadeInView>
             
             <FadeInView delay={0.3} className="flex flex-col items-center group">
               <span className="text-6xl md:text-8xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 tracking-tighter mb-6 group-hover:scale-110 transition-transform duration-500">5m</span>
               <h4 className="text-white font-bold text-xl mb-3">The Golden Window</h4>
               <p className="text-white/80 text-base leading-relaxed mb-6">Waiting longer than 5 minutes to reply to a lead drops contact rates by 10x.</p>
               <a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer" className="text-xs text-white/70 hover:text-sumac-brandy transition-colors uppercase tracking-widest font-mono border-b border-white/20 hover:border-sumac-brandy/50 pb-0.5 inline-block">— Harvard Business Review</a>
             </FadeInView>
           </div>
        </div>
      </section>

      {/* 4. Struggles Section */}
      <section className="py-16 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sumac-brandy/[0.04] rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-10 relative">
          <FadeInView className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-3">Sound Familiar?</span>
            <h2 className="text-2xl md:text-4xl font-sans font-bold text-white tracking-tight mb-4 text-balance max-w-2xl mx-auto">
              {service.struggles.title}
            </h2>
            <p className="text-white/45 font-body text-base md:text-lg leading-relaxed max-w-lg mx-auto">
              {service.struggles.subtitle}
            </p>
          </FadeInView>
          
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {service.struggles.items.slice(0, 4).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group relative rounded-2xl p-6 md:p-7 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-white/12 hover:bg-white/[0.05] transition-all duration-400"
              >
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-sumac-brandy/8 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <span className="font-mono text-[11px] tracking-widest text-sumac-brandy/50 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2 tracking-tight">{item.title}</h3>
                <p className="text-white/45 font-body text-sm leading-relaxed">{item.description}</p>
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
            <FadeInView delay={0.2} className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl border border-white/10 mt-4 md:mt-8 flex items-center justify-center p-0 md:p-8">
              <BuiltToConvertGraphic />
            </FadeInView>
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
