"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FlipText } from "@/components/ui/FlipText";
import { motion } from "motion/react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ScrollParallax } from "@/components/ui/ScrollParallax";

const Aurora = dynamic(() => import("@/components/Aurora/Aurora"));
const Particles = dynamic(() => import("@/components/ui/Particles"));
const SpotlightCard = dynamic(() => import("@/components/ui/SpotlightCard"));
import Script from "next/script";

export default function ThankYouPage() {
 const fadeUpVariant = {
 hidden: { opacity: 0, y: 30 },
 visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } }
 };

 return (
 <div className="flex flex-col min-h-screen bg-sumac-dark text-white">
 <Header />
 <main className="flex-1 w-full pt-40 md:pt-48 pb-20 relative overflow-hidden">
 <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
 <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }} />
 </div>
 <Particles
 className="absolute inset-0 z-0 opacity-40 pointer-events-none"
 quantity={80}
 ease={80}
 staticity={50}
 />
 <ScrollParallax offset={150} className="absolute top-20 -left-10 w-96 h-96 pointer-events-none z-0">
 <Image src="/images/sumac/image9.webp" alt="" fill sizes="500px" className="object-contain opacity-[0.07] animate-[float_10s_ease-in-out_infinite]" priority aria-hidden="true" />
 </ScrollParallax>
 <ScrollParallax offset={-100} className="absolute bottom-40 -right-20 w-80 h-80 pointer-events-none z-0">
 <Image src="/images/sumac/image3.webp" alt="" fill sizes="320px" className="object-contain opacity-10 scale-x-[-1] animate-[float_12s_ease-in-out_infinite]" aria-hidden="true" />
 </ScrollParallax>

 <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
 <motion.div 
 initial="hidden"
 animate="visible"
 variants={fadeUpVariant}
 className="text-center mb-14"
 >
 {/* Checkmark */}
 <div className="relative mx-auto mb-8 w-fit">
 <motion.div
 initial={{ scale: 0.8, opacity: 0 }}
 animate={{ scale: 2, opacity: 0 }}
 transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
 className="absolute inset-0 rounded-full bg-sumac-brandy/30"
 />
 <motion.div
 initial={{ scale: 0, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
 className="w-16 h-16 relative z-10 rounded-full border border-sumac-brandy/40 bg-[#121c10] flex items-center justify-center shadow-[0_0_30px_rgba(124,255,103,0.15)]"
 >
 <svg className="w-7 h-7 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
 </svg>
 </motion.div>
 </div>

 <h1 className="text-3xl md:text-5xl font-bold font-sans mb-5 tracking-tight">
 <FlipText text="We have your details." delay={0.02} /> <br className="hidden md:block"/>
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sumac-brandy to-[#7cff67]">Let&apos;s get to work.</span>
 </h1>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
 className="w-full bg-white/[0.02] border border-white/[0.06] p-8 md:p-10 rounded-2xl mb-12"
 >
 <div className="text-center mb-8">
 <h2 className="text-xl font-bold font-sans mb-3">The next step is a <span className="text-sumac-brandy">free</span> strategy call.</h2>
 <p className="text-white/40 font-body text-sm">Discuss your goals and see how a custom system can solve your current bottlenecks. No commitment required.</p>
 </div>
 
 {/* Calendly Embed */}
 <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative z-10 p-2 md:p-4">
   <div className="calendly-inline-widget" data-url="https://calendly.com/hello-sumac/free-systems-audit?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
   <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
 </div>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 0.8, delay: 0.6 }}
 className="w-full"
 >
 <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase text-center mb-6">What happens before we speak</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <SpotlightCard className="bg-white/[0.02] p-7 rounded-xl border border-white/[0.04]">
 <div className="text-sumac-brandy/60 font-mono text-sm mb-4">01</div>
 <h4 className="text-base font-bold font-sans mb-2">The Audit</h4>
 <p className="text-white/35 text-sm leading-relaxed font-body">We review your current digital footprint to see where you are losing traction and where AI search optimization can give you an immediate edge.</p>
 </SpotlightCard>
 <SpotlightCard className="bg-white/[0.02] p-7 rounded-xl border border-white/[0.04]">
 <div className="text-sumac-brandy/60 font-mono text-sm mb-4">02</div>
 <h4 className="text-base font-bold font-sans mb-2">The Strategy</h4>
 <p className="text-white/35 text-sm leading-relaxed font-body">We come to the call with a clear idea of the structure, brand requirements, and automation sequences needed to move your business forward.</p>
 </SpotlightCard>
 </div>
 </motion.div>
 </div>
 </main>
 <Footer />
 </div>
 );
}
