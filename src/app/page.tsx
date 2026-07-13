"use client";

import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import { motion } from "motion/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";

const Footer = dynamic(() => import("@/components/layout/Footer"));
const BlurText = dynamic(() => import("@/components/ui/BlurText/BlurText"));
const SpotlightCard = dynamic(() => import("@/components/ui/SpotlightCard"));
const TiltCard = dynamic(() => import("@/components/ui/TiltCard"));
const Particles = dynamic(() => import("@/components/ui/Particles"), { ssr: false });
const RevenueCalculator = dynamic(() => import("@/components/calculator/RevenueCalculator"), { ssr: false });
const ScrollParallax = dynamic(() => import("@/components/ui/ScrollParallax").then(mod => mod.ScrollParallax), { ssr: false });
const CurvedLoop = dynamic(() => import("@/components/ui/CurvedLoop"), { ssr: false });
const Accordion = dynamic(() => import("@/components/ui/Accordion").then(mod => mod.Accordion), { ssr: false });

const HOME_FAQ = [
  {
    title: "How does pricing work?",
    desc: "There is a one-time build fee, followed by a flat monthly rate. The build fee covers your site and systems. The monthly rate covers hosting, ongoing SEO, and automation management.",
    items: [] as string[],
  },
  {
    title: "How long does it actually take to launch?",
    desc: "Usually a few weeks from our first call to launch. We move fast, but we aren't going to rush the build just to hit an arbitrary date. Every site we ship has to be built right.",
    items: [] as string[],
  },
  {
    title: "What happens if I want to cancel?",
    desc: "The site and its connected automations come down at the end of your billing cycle. That being said, we have a strict safeguard: if we ever shut down as a company, you get full ownership of the code and domain. You're never left stranded.",
    items: [] as string[],
  },
  {
    title: "Do I have to deal with hosting and updates?",
    desc: "Nope, that's on us. Hosting, security patches, speed optimization - we handle all of it. You run your business, we keep the site running smoothly.",
    items: [] as string[],
  },
];

export default function Home() {
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
 desc: "Fast pages, clear structure, and a path to contact you.",
 icon: (
 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
 </svg>
 )
 },
 { 
 title: "AI & SEO", 
 slug: "ai-seo",
 desc: "Visibility across Google, local results, and AI answers.",
 icon: (
 <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
 </svg>
 )
 },
 { 
 title: "Google Business Profile", 
 slug: "google-business-profile",
 desc: "A profile that helps nearby customers find and call you.",
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
 desc: "Fast follow-up and fewer leads lost to manual work.",
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
 <section id="services" className="bg-sumac-dark text-white pt-8 pb-16 md:pt-72 md:pb-40 relative overflow-hidden">
 <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
 <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }} />
 </div>
 <Particles
 className="absolute inset-0 z-0 opacity-30 pointer-events-none hidden md:block"
 quantity={80}
 ease={80}
 staticity={50}
 />
 
 {/* Floating Decor */}
 <ScrollParallax offset={200} className="absolute top-40 right-10 w-72 h-72 pointer-events-none z-0 hidden md:block">
 <motion.div variants={floatVariant(0, 12)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full h-full relative">
 <Image src="/images/sumac/image6.webp" alt="" fill sizes="288px" className="object-contain opacity-10 animate-[float_10s_ease-in-out_infinite]" aria-hidden="true" />
 </motion.div>
 </ScrollParallax>
 <ScrollParallax offset={-150} className="absolute bottom-40 -left-10 w-56 h-56 pointer-events-none z-0 hidden md:block">
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
 <div className="text-center mb-10 md:mb-16">
 <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-white">
 <BlurText text="Services" delay={50} animateBy="words" direction="top" className="justify-center" />
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
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
 <SpotlightCard className="bg-sumac-dark/40 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-2xl p-6 md:p-10 transition-all duration-500 h-full flex flex-col justify-between group">
 <div className="absolute -top-24 -right-24 w-64 h-64 bg-sumac-brandy/10 rounded-full blur-[80px] group-hover:bg-sumac-brandy/20 group-hover:scale-150 transition-all duration-700 ease-in-out pointer-events-none hidden md:block" />
 
 <div>
 <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-5 md:mb-8 relative z-10 group-hover:-translate-y-2 group-hover:rotate-3 transition-transform duration-500 text-white shadow-[0_0_15px_rgba(255,255,255,0.05)]">
 {service.icon}
 </div>
 <h3 className="text-xl md:text-2xl font-sans font-semibold tracking-tight mb-2 md:mb-4 group-hover:text-sumac-brandy transition-colors relative z-10">{service.title}</h3>
 <p className="text-white/60 font-body leading-relaxed text-sm md:text-base relative z-10 mb-0 md:mb-8 max-w-sm">{service.desc}</p>
 
 </div>

 <Link href={`/services/${service.slug}`} className="mt-5 md:mt-10 flex items-center gap-2 text-white/55 group-hover:text-white transition-all duration-500 relative z-10 w-fit group/link">
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
 <section className="hidden md:block bg-gradient-to-b from-sumac-dark via-[#180000] to-sumac-dark text-white py-16 md:py-44 relative overflow-hidden">
 <div className="absolute inset-0 z-0 opacity-20 pointer-events-none hidden md:block">
    <Particles className="absolute inset-0" quantity={50} ease={80} staticity={50} />
 </div>
 
 {/* Floating Decor */}
 <ScrollParallax offset={100} className="absolute top-1/2 left-20 w-[400px] h-[400px] pointer-events-none z-0 hidden md:block">
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
 <h2 className="text-3xl md:text-5xl font-semibold font-sans mb-4 md:mb-6 tracking-tight leading-[1.1]">
 <BlurText text="Search has changed." delay={30} animateBy="words" direction="bottom" className="inline-block" />
 </h2>
 <p className="text-base md:text-lg font-body leading-relaxed text-white/50 max-w-xl mx-auto">
  We make your services legible to customers, search engines, and AI answers.
  </p>
 </motion.div>
 </section>

 {/* FAQ Section */}
 <section className="bg-sumac-dark text-white py-16 md:py-40 relative overflow-hidden">
 {/* Frosted Background Asset */}
 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center hidden md:flex">
 <div className="absolute inset-0 bg-gradient-to-b from-sumac-dark via-sumac-dark/60 to-sumac-dark z-10" />
 <div className="absolute inset-0 bg-gradient-to-r from-sumac-dark via-transparent to-sumac-dark z-10" />
 <div className="w-full max-w-7xl h-[120%] relative opacity-30 mix-blend-screen blur-[12px]">
 <Image 
 src="/images/sumac/image7.webp" 
 alt="" 
 fill 
 sizes="(max-width: 768px) 100vw, 1280px"
 className="object-cover object-center" 
 aria-hidden="true" 
 />
 </div>
 </div>
 
 <ScrollParallax offset={-150} className="absolute bottom-20 right-0 w-96 h-96 pointer-events-none z-10 hidden md:block">
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
 <div className="text-center mb-10 md:mb-14">
 <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-white">
 Questions
 </h2>
 </div>
 
 <motion.div variants={fadeUpVariant}>
 <Accordion items={HOME_FAQ} />
 </motion.div>
 </motion.div>
 </section>

 {/* About Section */}
 <section id="about" className="bg-sumac-dark text-white pt-10 pb-16 md:pt-16 md:pb-40 relative overflow-x-clip scroll-mt-[calc(var(--site-header-h)+0.5rem)]">
 <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
 <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }} />
 </div>
 
 <ScrollParallax offset={150} className="absolute top-40 left-10 w-[350px] h-[350px] pointer-events-none z-0 hidden md:block">
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
 className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20"
 >
 <motion.div
 initial={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
 animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
 className="w-full max-w-[300px] md:max-w-none mx-auto md:w-5/12 mb-2 md:mb-0 shrink-0"
 >
 <TiltCard rotationIntensity={15} className="w-full">
 <div className="relative aspect-[4/5] max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/[0.06] shadow-[0_20px_80px_rgba(0,0,0,0.4)] group">
 <Image src="/images/founder.webp" alt="Reed Fisch, founder of Sumac Systems" fill sizes="(max-width: 768px) 100vw, 384px" className="object-cover group-hover:scale-[1.03] transition-all duration-700 pointer-events-none select-none" />
 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
 </div>
 </TiltCard>
 </motion.div>
 <motion.div variants={fadeUpVariant} className="w-full md:w-7/12">
 <h2 className="text-3xl md:text-4xl font-semibold font-sans mb-6 tracking-tight leading-tight text-balance">
 <BlurText text="Websites should be" delay={30} animateBy="words" direction="top" className="inline" />{' '}
 <span className="italic font-accent text-transparent bg-clip-text bg-gradient-to-r from-sumac-brandy to-[#7cff67]">assets</span>,{' '}
 <BlurText text="not obligations." delay={30} animateBy="words" direction="bottom" className="inline" />
 </h2>
 <div className="space-y-4 md:space-y-5 text-white/50 font-body text-base leading-relaxed">
  <p>Hey, I&apos;m Reed. I run a lean, independent operation. When you hire Sumac Systems, you work directly with me.</p>
  <p>I&apos;m young, and honestly, I consider that a huge advantage in this industry. I grew up native to the technology that older agencies are just now trying to figure out.</p>
  <p>I don&apos;t outsource the development, and I don&apos;t rely on bloated templates.</p>
  <div className="pt-4 md:pt-5 border-t border-white/[0.06] mt-4 md:mt-6">
  <p className="font-accent text-lg md:text-xl text-white/80 italic">&ldquo;I only launch systems and charge for work that I&apos;m genuinely proud of.&rdquo;</p>
  </div>
  </div>
 </motion.div>
 </motion.div>
 </section>

 {/* CurvedLoop Marquee Transition */}
 <section className="bg-sumac-dark overflow-hidden relative z-10 py-5 md:py-8">
 <CurvedLoop 
 marqueeText="WEB DESIGN ✦ LOCAL SEARCH ✦ AUTOMATIONS ✦"
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
