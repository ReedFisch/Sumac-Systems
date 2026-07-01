"use client";

import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "motion/react";
import BlurText from "@/components/ui/BlurText/BlurText";
import ShinyText from "@/components/ui/ShinyText/ShinyText";
import TrueFocus from "@/components/ui/TrueFocus/TrueFocus";
import Image from "next/image";
import dynamic from "next/dynamic";

const SpotlightCard = dynamic(() => import("@/components/ui/SpotlightCard"));
const TiltCard = dynamic(() => import("@/components/ui/TiltCard"));
const Particles = dynamic(() => import("@/components/ui/Particles"));
import RevenueCalculator from "@/components/calculator/RevenueCalculator";
import Link from "next/link";
import { useRef } from "react";

import { ScrollParallax } from "@/components/ui/ScrollParallax";
import CurvedLoop from "@/components/ui/CurvedLoop";

import AnimatedContent from "@/components/ui/AnimatedContent";
import CircularText from "@/components/ui/CircularText";
import { Accordion } from "@/components/ui/Accordion";

export default function Home() {
 const { scrollYProgress } = useScroll();
 const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
 const pageRef = useRef<HTMLDivElement>(null);

 const fadeUpVariant = {
 hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
 visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } }
 };

 const staggerContainer = {
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: 0.08,
 delayChildren: 0.1
 }
 }
 };

 const floatVariant = (delay: number = 0, duration: number = 6) => ({
 hidden: { opacity: 0 },
 visible: {
 opacity: 0.35,
 y: [0, -15, 0],
 rotate: [0, 3, -3, 0],
 transition: {
 y: { duration, repeat: Infinity, ease: "easeInOut" as const, delay },
 rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" as const, delay },
 opacity: { duration: 1.2 }
 }
 }
 });

 const services = [
 { 
 title: "Web Design", 
 slug: "web-design",
 desc: "Fast load times, clear structure, and layouts that drive action.",
 bullets: ["Mobile-first, responsive layouts", "Performance-optimized build for lightning-fast load times", "Clean, maintainable code architecture"],
 icon: (
 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
 </svg>
 )
 },
 { 
 title: "AI & SEO", 
 slug: "ai-seo",
 desc: "Visibility where people actually search today, including LLMs and AI Overviews.",
 bullets: ["Comprehensive technical SEO audits and fixes", "Semantic content structuring for AI (ChatGPT)", "Schema markup for rich search results"],
 icon: (
 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
 </svg>
 )
 },
 { 
 title: "Google Business Profile", 
 slug: "google-business-profile",
 desc: "Optimize your Google presence to capture local intent and drive foot traffic.",
 bullets: ["Profile optimization and verification", "Review management strategies", "Local citation building"],
 icon: (
 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
 </svg>
 )
 },
 { 
 title: "Automations", 
 slug: "automations",
 desc: "Catch every lead with instant text follow-ups and automated review requests.",
 bullets: ["Automated SMS follow-up sequences", "Frictionless Google review request workflows", "Seamless CRM lead routing"],
 icon: (
 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
 </svg>
 )
 }
 ];

 return (
 <div ref={pageRef} className="flex flex-col min-h-screen">
 <Header />
 <main className="flex-1 w-full bg-sumac-dark overflow-x-clip">
 <Hero />
 
 {/* Services Section */}
 <section id="services" className="bg-sumac-dark text-white pt-48 pb-28 md:pt-72 md:pb-40 relative overflow-hidden">
 <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
 <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }} />
 </div>
 <Particles
 className="absolute inset-0 z-0 opacity-30 pointer-events-none"
 quantity={80}
 ease={80}
 staticity={50}
 />
 
 {/* Floating Decor */}
 <ScrollParallax offset={200} className="absolute top-40 right-10 w-72 h-72 pointer-events-none z-0">
 <motion.div variants={floatVariant(0, 12)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full h-full relative">
 <Image src="/images/sumac/image6.webp" alt="" fill sizes="288px" className="object-contain opacity-10 animate-[float_10s_ease-in-out_infinite]" aria-hidden="true" />
 </motion.div>
 </ScrollParallax>
 <ScrollParallax offset={-150} className="absolute bottom-40 -left-10 w-56 h-56 pointer-events-none z-0">
 <motion.div variants={floatVariant(2, 10)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full h-full relative">
 <Image src="/images/sumac/image2.webp" alt="" fill sizes="500px" className="object-contain opacity-30 animate-[float_8s_ease-in-out_infinite] scale-x-[-1]" aria-hidden="true" />
 </motion.div>
 </ScrollParallax>

 <motion.div 
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-80px" }}
 variants={staggerContainer}
 className="max-w-6xl mx-auto px-6 w-full relative z-10"
 >
 <div className="text-center mb-20">
 <motion.div variants={fadeUpVariant}>
 <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-4">What We Do</span>
 </motion.div>
 <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white">
 <BlurText text="Core Services" delay={50} animateBy="words" direction="top" className="justify-center" />
 </h2>
 <motion.p variants={fadeUpVariant} className="text-white/40 text-lg font-body max-w-2xl mx-auto mt-6">
 We don't just build digital brochures. We engineer complete systems designed to actually convert traffic into revenue.
 </motion.p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
 {services.map((service, i) => {
 const isWide = i === 0 || i === 3;
 return (
 <motion.div 
 key={i} 
 variants={fadeUpVariant}
 whileHover={{ y: -6 }}
 transition={{ type: "spring", stiffness: 400, damping: 25 }}
 className={isWide ? "md:col-span-7" : "md:col-span-5"}
 >
 <SpotlightCard className="bg-sumac-dark/40 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-2xl p-8 md:p-10 transition-all duration-500 h-full flex flex-col justify-between group">
 {/* Glowing animated orb in the background */}
 <div className="absolute -top-24 -right-24 w-64 h-64 bg-sumac-brandy/10 rounded-full blur-[80px] group-hover:bg-sumac-brandy/20 group-hover:scale-150 transition-all duration-700 ease-in-out pointer-events-none" />
 
 <div>
 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 group-hover:rotate-3 transition-transform duration-500 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]">
 {service.icon}
 </div>
 <h3 className="text-2xl md:text-3xl font-sans font-bold tracking-tight mb-4 group-hover:text-sumac-brandy transition-colors relative z-10">{service.title}</h3>
 <p className="text-white/60 font-body leading-relaxed text-base relative z-10 mb-8 max-w-sm">{service.desc}</p>
 
 <ul className="space-y-3 relative z-10 md:hidden">
 {service.bullets.slice(0, 1).map((bullet, idx) => (
 <li key={idx} className="flex items-start gap-3 text-white/50 text-sm">
 <div className="w-1.5 h-1.5 rounded-full bg-sumac-brandy mt-1.5 shrink-0 shadow-[0_0_8px_var(--color-sumac-brandy)]" />
 <span className="leading-relaxed">{bullet}</span>
 </li>
 ))}
 </ul>
 <ul className="hidden md:block space-y-4 relative z-10">
 {service.bullets.map((bullet, idx) => (
 <li key={idx} className="flex items-start gap-3 text-white/50 text-sm">
 <div className="w-1.5 h-1.5 rounded-full bg-sumac-brandy mt-1.5 shrink-0 shadow-[0_0_8px_var(--color-sumac-brandy)]" />
 <span className="leading-relaxed">{bullet}</span>
 </li>
 ))}
 </ul>
 </div>

 <Link href={`/services/${service.slug}`} className="mt-10 flex items-center gap-2 text-white/55 group-hover:text-white transition-all duration-500 relative z-10 w-fit group/link">
 <span className="text-xs font-bold tracking-wider uppercase">
  Explore {service.title}
 </span>
 <svg className="w-4 h-4 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
 </Link>
 </SpotlightCard>
 </motion.div>
 )})}
 </div>
 </motion.div>
 </section>

 {/* AI Differentiator Section */}
 <section className="bg-gradient-to-b from-sumac-dark via-[#180000] to-sumac-dark text-white py-32 md:py-44 relative overflow-hidden">
 <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
    <Particles className="absolute inset-0" quantity={50} ease={80} staticity={50} />
 </div>
 
 {/* Floating Decor */}
 <ScrollParallax offset={100} className="absolute top-1/2 left-20 w-[400px] h-[400px] pointer-events-none z-0">
 <motion.div variants={floatVariant(1, 14)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full h-full relative">
 <Image src="/images/sumac/image6.webp" alt="" fill sizes="400px" className="object-contain opacity-10 animate-[float_10s_ease-in-out_infinite]" aria-hidden="true" />
 </motion.div>
 </ScrollParallax>

 <motion.div 
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-80px" }}
 variants={fadeUpVariant}
 className="max-w-3xl mx-auto px-6 text-center relative z-10"
 >
 <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-6">Our Approach</span>
 <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-sans mb-8 tracking-tight leading-[1.1]">
 <BlurText text="Most SEO advice is" delay={30} animateBy="words" direction="bottom" className="inline-block md:block" />{" "}
 <span className="italic font-accent text-transparent bg-clip-text bg-gradient-to-r from-white via-sumac-brandy to-[#7cff67]">stuck in 2018.</span>
 </h2>
 <p className="text-lg md:text-xl font-body leading-relaxed text-white/50 max-w-2xl mx-auto">
  We optimize for what actually matters now: structuring your content so it makes sense to humans, search engines, and <span className="text-white font-medium">AI tools like ChatGPT and Perplexity.</span>
  </p>
 </motion.div>
 </section>

 {/* FAQ Section */}
 <section className="bg-[#0a0a0a] text-white py-28 md:py-40 relative overflow-hidden border-y border-white/[0.04]">
 {/* Frosted Background Asset */}
 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
 <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a] z-10" />
 <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10" />
 <div className="w-full max-w-7xl h-[120%] relative opacity-30 mix-blend-screen blur-[12px]">
 <Image 
 src="/images/sumac/image7.webp" 
 alt="" 
 fill 
 sizes="100vw"
 priority
 className="object-cover object-center" 
 aria-hidden="true" 
 />
 </div>
 </div>
 
 <ScrollParallax offset={-150} className="absolute bottom-20 right-0 w-96 h-96 pointer-events-none z-10">
 <motion.div variants={floatVariant(3, 16)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full h-full relative">
 <Image src="/images/sumac/image8.webp" alt="" fill sizes="384px" className="object-contain opacity-15 animate-[float_12s_ease-in-out_infinite] scale-x-[-1] scale-y-[-1]" aria-hidden="true" />
 </motion.div>
 </ScrollParallax>

 <motion.div 
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-80px" }}
 variants={staggerContainer}
 className="max-w-4xl mx-auto px-6 relative z-20"
 >
 <div className="text-center mb-16 md:mb-20">
 <motion.div variants={fadeUpVariant}>
 <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-4">Questions</span>
 </motion.div>
 <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
 <TrueFocus sentence="Frequently Asked" manualMode={false} blurAmount={4} borderColor="#882F18" animationDuration={1.5} pauseBetweenAnimations={1} />
 <span>Questions</span>
 </h2>
 </div>
 
 <motion.div variants={fadeUpVariant}>
 <Accordion 
 items={[
 { 
 title: "How does pricing work?", 
 desc: "There is a one-time build fee, followed by a flat monthly rate. The build fee covers engineering your custom site and systems. After that, your monthly rate takes care of hosting, ongoing SEO, and managing all the automations so you don't have to worry about them.", 
 items: [] 
 },
 { 
 title: "How long does it actually take to launch?", 
 desc: "Usually a few weeks from our first call to launch. We move fast, but we aren't going to rush the build just to hit an arbitrary date. Every site we ship has to be built right.", 
 items: [] 
 },
 { 
 title: "What happens if I want to cancel?", 
 desc: "The site and its connected automations come down at the end of your billing cycle. That being said, we have a strict safeguard: if we ever shut down as a company, you get full ownership of the code and domain. You're never left stranded.", 
 items: [] 
 },
 { 
 title: "Do I have to deal with hosting and updates?", 
 desc: "Nope, that's on us. Hosting, security patches, speed optimization - we handle all of it. You run your business, we keep the site running smoothly.", 
 items: [] 
 }
 ]} 
 />
 </motion.div>
 </motion.div>
 </section>

 {/* About Section */}
 <section id="about" className="bg-sumac-dark text-white py-28 md:py-40 relative overflow-hidden">
 <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
 <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }} />
 </div>
 
 <ScrollParallax offset={150} className="absolute top-40 left-10 w-[350px] h-[350px] pointer-events-none z-0">
 <motion.div variants={floatVariant(0, 16)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full h-full relative">
 <Image src="/images/sumac/image7.webp" alt="" fill sizes="350px" className="object-contain opacity-15 animate-[float_12s_ease-in-out_infinite]" aria-hidden="true" />
 </motion.div>
 </ScrollParallax>
 <ScrollParallax offset={200} className="absolute bottom-20 right-10 w-48 h-48 pointer-events-none z-0 hidden md:block">
 <motion.div variants={floatVariant(2, 12)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full h-full relative">
 <Image src="/images/sumac/image3.webp" alt="" fill sizes="192px" className="object-contain opacity-10 animate-[float_10s_ease-in-out_infinite]" aria-hidden="true" />
 </motion.div>
 </ScrollParallax>

 <motion.div 
 initial="hidden"
 whileInView="visible"
 viewport={{ once: true, margin: "-80px" }}
 variants={staggerContainer}
 className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-20"
 >
 <motion.div variants={fadeUpVariant} className="w-full md:w-5/12">
 <TiltCard rotationIntensity={15} className="w-full">
 <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_20px_80px_rgba(0,0,0,0.4)] group">
 <Image src="/images/founder.webp" alt="Reed" fill sizes="(max-width: 768px) 100vw, 384px" className="object-cover group-hover:scale-[1.03] transition-all duration-700 pointer-events-none select-none" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
 </div>
 </TiltCard>
 </motion.div>
 <motion.div variants={fadeUpVariant} className="w-full md:w-7/12">
 <span className="inline-block text-xs font-mono tracking-[0.2em] text-sumac-brandy uppercase mb-4">About</span>
 <h2 className="text-3xl md:text-5xl font-bold font-sans mb-8 tracking-tight leading-tight">
 <BlurText text="Websites should be" delay={30} animateBy="words" direction="top" className="inline-block mr-2" /> <span className="whitespace-nowrap"><span className="italic font-accent pr-2 text-transparent bg-clip-text bg-gradient-to-r from-sumac-brandy to-[#7cff67]">assets</span>,</span> <BlurText text="not obligations." delay={30} animateBy="words" direction="bottom" className="inline-block ml-2" />
 </h2>
 <div className="space-y-5 text-white/50 font-body text-base leading-relaxed">
  <p>Hey, I'm Reed.</p>
  <p>I'm young, and honestly, I consider that a huge advantage in this industry. I grew up native to the technology that older agencies are just now trying to figure out.</p>
  <p>I run a lean, independent operation. When you hire Sumac Systems, you work directly with me. I don't outsource the development, and I don't rely on bloated templates.</p>
  <div className="pt-5 border-t border-white/[0.06] mt-6">
  <p className="font-accent text-xl text-white/80 italic">&ldquo;I only launch systems and charge for work that I'm genuinely proud of.&rdquo;</p>
  </div>
  </div>
 </motion.div>
 </motion.div>
 </section>

 {/* CurvedLoop Marquee Transition */}
 <section className="bg-sumac-dark overflow-hidden relative z-10 py-7 md:py-8">
 <CurvedLoop 
 marqueeText="✦ STRATEGIC ARCHITECTURE ✦ SEAMLESS AUTOMATION ✦ AI SEARCH OPTIMIZATION ✦ HIGH PERFORMANCE ✦" 
 speed={1} 
 curveAmount={80} 
 />
 </section>

 {/* Revenue Calculator (replaces old contact form) */}
 <RevenueCalculator />

 </main>
 <Footer />
 </div>
 );
}
