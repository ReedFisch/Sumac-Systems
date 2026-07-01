"use client";

import React from "react";
import { motion } from "motion/react";

/* ─── Web Design Visual (Browser Mockup) ─── */
function WebDesignVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sumac-brandy/20 via-transparent to-sumac-brandy/5 rounded-3xl blur-xl" />

      {/* Browser window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-[75%] bg-[#1a1a1a] rounded-xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden z-10"
      >
        {/* Chrome bar */}
        <div className="flex items-center px-3 py-2.5 gap-2 border-b border-white/[0.06] bg-[#222]">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
          <div className="ml-3 flex-1 max-w-[140px] px-3 py-1 text-[9px] font-mono text-white/30 bg-white/[0.04] rounded border border-white/[0.06]">
            yourbusiness.com
          </div>
        </div>
        {/* Content skeleton */}
        <div className="p-4 space-y-3 bg-[#0d0d0d] h-[200px]">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="h-8 w-3/4 bg-white/[0.06] rounded-lg origin-left" />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="h-3 w-full bg-white/[0.04] rounded" />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="h-3 w-5/6 bg-white/[0.04] rounded" />
          <div className="flex gap-2 mt-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }} className="h-8 w-28 bg-sumac-brandy/30 rounded-full" />
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="h-8 w-24 bg-white/[0.06] rounded-full" />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6 }} className="h-16 bg-white/[0.03] rounded-lg border border-white/[0.06]" />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.7 }} className="h-16 bg-white/[0.03] rounded-lg border border-white/[0.06]" />
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.8 }} className="h-16 bg-white/[0.03] rounded-lg border border-white/[0.06]" />
          </div>
        </div>
      </motion.div>

      {/* Performance Score Card */}
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute -right-3 md:-right-6 top-[10%] bg-white rounded-xl p-3 shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-20 font-sans"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center">
            <span className="text-green-500 font-bold text-sm">100</span>
          </div>
          <div>
            <div className="text-gray-900 font-bold text-xs">Performance</div>
            <div className="text-gray-400 text-[10px]">Lighthouse Score</div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Responsive Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute -left-2 md:-left-4 bottom-[15%] bg-white rounded-xl p-3 shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-20 font-sans flex items-center gap-2.5"
      >
        <div className="w-8 h-8 rounded-lg bg-sumac-brandy/10 flex items-center justify-center">
          <svg className="w-4 h-4 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <div className="text-gray-900 font-bold text-xs">Mobile First</div>
          <div className="text-green-500 text-[10px] font-medium">✓ Responsive</div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── AI SEO Visual (SERP Ascending Rank) ─── */
function AiSeoVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex flex-col pt-8 items-center bg-[#f8f9fa] rounded-2xl overflow-hidden shadow-inner border border-black/5">
      
      {/* Fake Search Header */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center px-6 shadow-sm z-20">
         <div className="w-24 h-4 bg-gray-200 rounded-full mr-6" />
         <div className="flex-1 max-w-sm h-8 bg-gray-100 rounded-full border border-gray-200 flex items-center px-4 gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <div className="w-1/2 h-2 bg-gray-300 rounded" />
         </div>
      </div>

      {/* Search Results Container */}
      <div className="relative w-full max-w-sm mt-12 flex flex-col gap-4 px-4 h-full">
         
         {/* Competitor 1 (Pushed Down) */}
         <motion.div 
           initial={{ y: 0 }}
           animate={{ y: 110 }} 
           transition={{ duration: 1.5, delay: 1, type: "spring", stiffness: 60 }}
           className="absolute top-0 left-4 right-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 opacity-60"
         >
           <div className="flex items-center gap-2 mb-2">
             <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px] text-gray-500">2</div>
             <div className="w-32 h-2.5 bg-gray-200 rounded-full" />
           </div>
           <div className="w-48 h-4 bg-gray-300 rounded mb-2" />
           <div className="w-full h-2 bg-gray-100 rounded mb-1" />
           <div className="w-5/6 h-2 bg-gray-100 rounded" />
         </motion.div>

         {/* Competitor 2 (Pushed Down) */}
         <motion.div 
           initial={{ y: 110 }}
           animate={{ y: 220 }} 
           transition={{ duration: 1.5, delay: 1, type: "spring", stiffness: 60 }}
           className="absolute top-0 left-4 right-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 opacity-40"
         >
           <div className="flex items-center gap-2 mb-2">
             <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px] text-gray-500">3</div>
             <div className="w-24 h-2.5 bg-gray-200 rounded-full" />
           </div>
           <div className="w-40 h-4 bg-gray-300 rounded mb-2" />
           <div className="w-full h-2 bg-gray-100 rounded mb-1" />
           <div className="w-4/6 h-2 bg-gray-100 rounded" />
         </motion.div>

         {/* YOUR BUSINESS (Shoots to Top) */}
         <motion.div 
           initial={{ y: 220, scale: 0.95, opacity: 0 }}
           animate={{ y: 0, scale: 1, opacity: 1 }} 
           transition={{ duration: 1.5, delay: 1, type: "spring", stiffness: 60 }}
           className="absolute top-0 left-4 right-4 bg-white p-4 rounded-xl shadow-[0_10px_30px_rgba(34,197,94,0.15)] border-2 border-green-500 z-10"
         >
           <div className="flex justify-between items-start mb-2">
             <div className="flex items-center gap-2">
               <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">1</div>
               <div className="text-[10px] text-green-600 font-bold uppercase tracking-wider">yourbusiness.com</div>
             </div>
             <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}
               className="bg-green-100 text-green-700 text-[9px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1"
             >
               <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
               RANKING
             </motion.div>
           </div>
           <div className="text-lg font-bold text-gray-900 mb-1">Your Local Business Name</div>
           <div className="flex items-center gap-1 mb-2">
             <span className="text-yellow-400 text-[10px]">★★★★★</span>
             <span className="text-gray-500 text-[10px]">5.0 (150+ Reviews)</span>
           </div>
           <div className="text-xs text-gray-600 leading-relaxed">
             The most trusted, highly-rated service provider in your area. Contact us today for a free quote.
           </div>
         </motion.div>

      </div>
    </div>
  );
}

/* ─── Google Business Profile Visual (Isometric Grid) ─── */
function GbpVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-[#111] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sumac-brandy/20 via-transparent to-transparent" />
      
      {/* Isometric Container */}
      <div className="relative w-full h-full perspective-[1000px] flex items-center justify-center">
        <motion.div 
          initial={{ rotateX: 60, rotateZ: -45, scale: 0.8 }}
          animate={{ rotateX: 60, rotateZ: -45, scale: 1.2 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 40 }}
          className="relative w-[300px] h-[300px] bg-[#1a1a24] border border-white/10 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] transform-style-3d"
        >
          {/* Map Grid Surface */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          {/* Roads */}
          <div className="absolute top-[40%] w-full h-[15px] bg-[#222] border-y border-white/5 flex items-center justify-between overflow-hidden">
             <div className="w-full border-t border-dashed border-yellow-500/30" />
          </div>
          <div className="absolute left-[60%] h-full w-[15px] bg-[#222] border-x border-white/5 flex flex-col items-center justify-between overflow-hidden">
             <div className="h-full border-l border-dashed border-yellow-500/30" />
          </div>
          
          {/* Competitor Buildings (Small Blocks) */}
          <div className="absolute top-[20%] left-[20%] w-[30px] h-[30px] bg-white/5 border-t border-l border-white/10 rounded-sm shadow-xl" style={{ transform: "translateZ(10px)" }} />
          <div className="absolute top-[70%] left-[30%] w-[40px] h-[40px] bg-white/5 border-t border-l border-white/10 rounded-sm shadow-xl" style={{ transform: "translateZ(15px)" }} />
          <div className="absolute top-[30%] left-[80%] w-[25px] h-[25px] bg-white/5 border-t border-l border-white/10 rounded-sm shadow-xl" style={{ transform: "translateZ(8px)" }} />

          {/* Your Business Dominance */}
          <motion.div 
            initial={{ z: 200, opacity: 0 }}
            animate={{ z: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.6 }}
            className="absolute top-[35%] left-[55%] transform-style-3d"
          >
            {/* The Drop Pin (Stands upright despite isometric floor) */}
            <div className="relative" style={{ transform: "rotateZ(45deg) rotateX(-60deg) translateY(-20px)" }}>
               <svg className="w-16 h-20 text-sumac-brandy drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" viewBox="0 0 24 32" fill="currentColor">
                 <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
               </svg>
               {/* Ground Ripple */}
               <motion.div 
                 animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                 transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                 className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-8 h-3 bg-sumac-brandy rounded-[100%] blur-sm"
                 style={{ transform: "rotateX(60deg)" }} // Flatten ripple to floor
               />

               {/* Exploding Review Cards */}
               {[
                 { x: -60, y: -40, rotate: -15, delay: 1.5 },
                 { x: 60, y: -20, rotate: 10, delay: 1.7 },
                 { x: -40, y: 40, rotate: -5, delay: 1.9 },
               ].map((pos, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                   animate={{ opacity: 1, x: pos.x, y: pos.y, scale: 1, rotate: pos.rotate }}
                   transition={{ duration: 0.6, delay: pos.delay, type: "spring", stiffness: 100 }}
                   className="absolute top-1/2 left-1/2 w-28 bg-white rounded-lg p-2 shadow-2xl border border-gray-100 flex flex-col items-center gap-1 z-20"
                 >
                   <div className="flex gap-0.5 text-yellow-400">★★★★★</div>
                   <div className="w-16 h-1.5 bg-gray-200 rounded-full" />
                 </motion.div>
               ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Automations Visual (Orbiting Nodes) ─── */
function AutomationsVisual() {
  const nodes = [
    { label: "New Lead", angle: 0, icon: "user", color: "bg-blue-500" },
    { label: "CRM Sync", angle: 120, icon: "database", color: "bg-purple-500" },
    { label: "Auto SMS", angle: 240, icon: "message", color: "bg-green-500" },
  ];

  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-[#0d0d0d] rounded-2xl overflow-hidden border border-white/[0.08]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sumac-brandy/20 via-transparent to-transparent opacity-80" />
      
      {/* Central Hub */}
      <motion.div 
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5, duration: 1 }}
        className="relative z-20 w-24 h-24 bg-sumac-brandy/20 border border-sumac-brandy/40 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(136,47,24,0.3)] backdrop-blur-md"
      >
        <svg className="w-10 h-10 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        {/* Pulsing rings */}
        <motion.div animate={{ scale: [1, 2], opacity: [0.5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-3xl border border-sumac-brandy" />
        <motion.div animate={{ scale: [1, 2.5], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute inset-0 rounded-3xl border border-sumac-brandy" />
      </motion.div>

      {/* Orbit Track */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-white/5 border-dashed" />
      <div className="absolute w-[180px] h-[180px] rounded-full border border-white/5 border-dashed" />

      {/* Orbiting Nodes */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] z-10"
      >
        {nodes.map((node, i) => {
          const r = 140; // radius
          const x = Math.cos((node.angle * Math.PI) / 180) * r;
          const y = Math.sin((node.angle * Math.PI) / 180) * r;

          return (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="absolute top-1/2 left-1/2 flex flex-col items-center gap-2"
              style={{ x, y, marginLeft: -32, marginTop: -32 }}
            >
               {/* Anti-rotate to keep nodes upright */}
               <motion.div 
                 animate={{ rotate: -360 }} 
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="flex flex-col items-center"
               >
                 <div className={`w-14 h-14 ${node.color}/10 border border-${node.color.split('-')[1]}-500/30 rounded-2xl flex items-center justify-center backdrop-blur-md shadow-xl`}>
                   {node.icon === "user" && <svg className={`w-6 h-6 text-${node.color.split('-')[1]}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
                   {node.icon === "database" && <svg className={`w-6 h-6 text-${node.color.split('-')[1]}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>}
                   {node.icon === "message" && <svg className={`w-6 h-6 text-${node.color.split('-')[1]}-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                 </div>
                 <div className="text-white/80 text-[10px] uppercase tracking-wider font-bold mt-2 bg-[#111] px-2 py-1 rounded border border-white/10">{node.label}</div>
               </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Streaming Data Dots */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <defs>
          <filter id="glow"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <motion.circle r="3" fill="#882F18" filter="url(#glow)" animate={{ cx: [150, 200, 250], cy: [150, 200, 150], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
      </svg>
    </div>
  );
}

/* ─── Main Export ─── */
export function ServiceHeroVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "web-design":
      return <WebDesignVisual />;
    case "ai-seo":
      return <AiSeoVisual />;
    case "google-business-profile":
      return <GbpVisual />;
    case "automations":
      return <AutomationsVisual />;
    default:
      return <WebDesignVisual />;
  }
}
