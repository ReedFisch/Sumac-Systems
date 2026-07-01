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
 href="#contact"
 className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-wide overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] transition-all duration-500"
 >
 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sumac-brandy/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
 Book My Free Systems Audit
 </a>
 </MagneticButton>
 <a
 href="#what-we-do"
 className="hidden md:inline-flex px-8 py-4 bg-transparent text-white/70 border border-white/15 rounded-full font-medium text-base tracking-wide hover:text-white hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 items-center justify-center"
 >
 View Our Services
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
 
 {/* Notification Popup (Right) */}
 <motion.div
 initial={{ opacity: 0, x: 40, scale: 0.95 }}
 whileInView={{ opacity: 1, x: 0, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100, damping: 20 }}
 className="absolute -right-4 md:-right-20 top-[15%] w-72 bg-[#f4f4f4]/95 rounded-3xl shadow-2xl p-3.5 border border-white/50 backdrop-blur-md z-30 font-sans pointer-events-auto hidden md:block"
 >
 <div className="flex flex-col gap-1.5">
 <div className="flex items-center justify-between text-[11px] text-[#8e8e93] px-1">
 <div className="flex items-center gap-1.5">
 <div className="w-4 h-4 bg-[#34c759] rounded-md flex items-center justify-center">
 <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.43 3.43 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clipRule="evenodd" /></svg>
 </div>
 <span className="uppercase tracking-wider font-semibold">MESSAGES</span>
 </div>
 <span>3m ago</span>
 </div>
 <div className="text-center mt-1">
 <div className="font-bold text-[#0a2342] text-[15px] tracking-tight">TITAN ROOFING</div>
 <div className="text-[#8e8e93] text-xs font-semibold">Missed Call Back Automation</div>
 </div>
 <div className="text-center text-[#1c1c1e] text-[14px] leading-tight font-medium px-2 pb-1 mt-0.5">
 Sorry we missed you, I can help answer any questions or book an appointment!
 </div>
 </div>
 </motion.div>

 {/* Text Message Bubble (Left) */}
 <motion.div
 initial={{ opacity: 0, x: -40, scale: 0.95 }}
 whileInView={{ opacity: 1, x: 0, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100, damping: 20 }}
 className="absolute -left-4 md:-left-20 bottom-[25%] bg-[#6b6b6d]/95 backdrop-blur-md text-white px-4 py-3 rounded-[1.25rem] rounded-bl-sm shadow-2xl max-w-[280px] text-[15px] leading-snug font-sans z-30 pointer-events-auto hidden md:block border border-white/10"
 >
 Hey, I hope we did a good job. Do you have a few minutes to give us feedback
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
