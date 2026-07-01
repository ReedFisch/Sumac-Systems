"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import dynamic from 'next/dynamic';

const MagneticButton = dynamic(() => import('../ui/MagneticButton'));
import { FlipText } from '../ui/FlipText';

const Hero = () => {
 const containerRef = useRef<HTMLDivElement>(null);
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start start", "end start"]
 });

 const rotateX = useTransform(scrollYProgress, [0, 1], [0, 25]);
 const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
 const opacityScroll = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

 return (
 <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center pt-[180px] md:pt-[280px] pb-8 overflow-visible bg-sumac-dark">
 {/* Background Aurora */}
 <div className="absolute inset-0 z-0 opacity-30">
 <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }} />
 <div className="absolute inset-0 bg-gradient-to-b from-sumac-dark/60 via-transparent to-sumac-dark pointer-events-none" />
 </div>

 {/* Subtle noise texture overlay */}
 <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />

 {/* Floating Branches — slowed down for premium feel */}
 <motion.div 
 className="absolute top-0 -left-4 z-0 opacity-25 w-[200px] h-[200px] md:w-[280px] md:h-[280px] pointer-events-none"
 animate={{ y: [0, -20, 0], x: [0, 8, 0], rotate: [0, 4, 0] }}
 transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
 >
 <Image src="/images/sumac/image2.webp" alt="" fill sizes="280px" className="object-contain" aria-hidden="true" priority />
 </motion.div>
 <motion.div 
 className="absolute bottom-10 -right-10 z-0 opacity-30 w-[260px] h-[260px] pointer-events-none hidden md:block"
 animate={{ y: [0, 25, 0], x: [0, -8, 0], rotate: [0, -3, 0] }}
 transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
 >
 <Image src="/images/sumac/image4.webp" alt="" fill sizes="260px" className="object-contain scale-x-[-1]" aria-hidden="true" />
 </motion.div>
 <motion.div 
 className="absolute top-[20%] right-4 md:right-16 z-0 opacity-40 w-[300px] h-[300px] md:w-[450px] md:h-[450px] md:-right-20 pointer-events-none"
 animate={{ y: [0, -15, 0], x: [0, -12, 0], rotate: [0, 10, 0] }}
 transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
 >
 <Image src="/images/sumac/image7.webp" alt="" fill sizes="450px" className="object-contain scale-x-[-1]" aria-hidden="true" />
 </motion.div>
 <motion.div 
 className="absolute top-[55%] -left-10 z-0 opacity-25 w-[450px] h-[450px] md:-left-20 pointer-events-none hidden md:block"
 animate={{ y: [0, -30, 0], rotate: [0, -6, 0] }}
 transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
 >
 <Image src="/images/sumac/image8.webp" alt="" fill sizes="450px" className="object-contain rotate-45" aria-hidden="true" />
 </motion.div>
 <motion.div 
 className="absolute bottom-16 left-[10%] md:left-[22%] z-0 opacity-30 w-[250px] h-[250px] md:w-[350px] md:h-[350px] md:left-[10%] pointer-events-none"
 animate={{ y: [0, 18, 0], x: [0, 10, 0], rotate: [0, -10, 0] }}
 transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
 >
 <Image src="/images/sumac/image9.webp" alt="" fill sizes="350px" className="object-contain scale-x-[-1]" aria-hidden="true" />
 </motion.div>

  {/* Top Text Content */}
 <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center flex-1">


 <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-sans font-bold text-white tracking-tight leading-[1.05] mb-8 text-balance">
 <FlipText text="We build websites and the" delay={0.08} /> <span className="font-accent italic text-transparent bg-clip-text bg-gradient-to-r from-sumac-brandy via-[#7cff67] to-sumac-slate pr-2">systems</span> <FlipText text="around them" delay={0.08} />
 </h1>



 <motion.div
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
 className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 pb-32 md:pb-0 pointer-events-auto"
 >
 <MagneticButton>
 <a
 href="/thank-you"
 className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-wide overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] transition-all duration-500"
 >
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sumac-brandy/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
 Book a Free Strategy Call
 </a>
 </MagneticButton>
 <a
 href="/#contact"
 className="hidden md:inline-flex px-8 py-4 bg-transparent text-white/70 border border-white/15 rounded-full font-medium text-base tracking-wide hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 items-center justify-center"
 >
 Calculate my ROI
 </a>
 </motion.div>
 </div>

 {/* Computer Frame Mockup */}
 <motion.div
 initial={{ opacity: 0, y: 80 }}
 animate={{ opacity: 1, y: 0 }}
 style={{ opacity: opacityScroll }}
 transition={{ 
 opacity: { duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] },
 y: { duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }
 }}
 className="relative z-20 w-[88%] max-w-5xl mx-auto mt-16 -mb-24 md:-mb-48 pointer-events-none"
 >
  {/* Glow behind mockup */}
  <div className="absolute -inset-8 bg-gradient-to-t from-sumac-brandy/10 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none" />

  {/* Floating Chips (Mockup Level) */}
  {/* Lead Card (Top Left) */}
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.0, delay: 1.2, type: "spring", stiffness: 80, damping: 15 }}
    className="absolute -left-4 md:-left-12 top-[10%] md:top-[15%] bg-white rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)] w-[260px] flex gap-4 items-center z-40 font-sans pointer-events-auto hidden md:flex border border-white/10"
  >
    <div className="w-10 h-10 rounded-full bg-sumac-brandy/10 flex items-center justify-center shrink-0">
      <svg className="w-5 h-5 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
    <div>
      <div className="text-gray-900 font-bold text-[14px]">New Estimate Request</div>
      <div className="text-gray-500 text-xs mt-0.5">Just now via Website</div>
    </div>
  </motion.div>

  {/* Maps Ranking Card (Right) */}
  <motion.div
    initial={{ opacity: 0, x: 40, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1.0, delay: 1.5, type: "spring", stiffness: 80, damping: 15 }}
    className="absolute -right-4 md:-right-12 top-[40%] md:top-[35%] bg-white rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-[280px] gap-4 items-center z-40 font-sans pointer-events-auto hidden md:flex border border-white/10"
  >
    <div className="w-12 h-12 rounded-full bg-sumac-brandy/10 flex items-center justify-center shrink-0">
      <svg className="w-6 h-6 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
    <div>
      <div className="text-gray-900 font-bold text-[15px]">#1 on Google Maps</div>
      <div className="text-gray-500 text-xs mt-0.5">Local Search Result</div>
      <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
        <div className="h-full bg-sumac-brandy w-[85%] rounded-full" />
      </div>
    </div>
  </motion.div>

  {/* Review Card (Left) */}
  <motion.div
    initial={{ opacity: 0, x: -40, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1.0, delay: 1.8, type: "spring", stiffness: 80, damping: 15 }}
    className="absolute -left-4 md:-left-8 bottom-[15%] md:bottom-[20%] bg-white rounded-2xl p-5 shadow-[0_30px_60px_rgba(0,0,0,0.4)] w-[280px] z-40 pointer-events-auto hidden md:block border border-white/10"
  >
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <div className="text-gray-900 font-bold text-[15px] mb-1">"Highly recommend!"</div>
    <div className="text-gray-500 text-xs">New 5-star review received</div>
  </motion.div>
  
  {/* Browser Chrome */}
 <div className="relative w-full bg-[#1a1a1a] rounded-xl border border-white/[0.08] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
 <div className="flex items-center px-4 py-3 gap-2 border-b border-white/[0.06] bg-[#222]">
 <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
 <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
 <div className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
 <div className="ml-4 flex-1 max-w-xs px-4 py-1.5 text-[11px] font-mono text-white/30 bg-white/[0.04] rounded-md border border-white/[0.06]">
 sumacwebdesign.com/dashboard
 </div>
 </div>
 <div className="relative aspect-[16/9] bg-black">
 <Image
 src="/images/titan-roofing.webp"
 alt="Titan Roofing Preview"
 fill
 className="object-cover object-top opacity-90"
 priority
 />
 </div>
 </div>
 </motion.div>
 </section>
 );
};

export default Hero;
