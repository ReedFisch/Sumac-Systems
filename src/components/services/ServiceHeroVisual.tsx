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

/* ─── Google Business Profile Visual (Minimal Map UI) ─── */
function GbpVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex flex-col items-center justify-center bg-[#181820] overflow-hidden rounded-2xl border border-white/[0.08]">
      {/* Sleek Dark Map Background */}
      <div className="absolute inset-0 z-0">
         {/* Subtle radial gradient */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(136,47,24,0.15),_transparent)]" />
         
         {/* Stylized Roads (SVG) */}
         <svg className="w-full h-full opacity-30" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
            <path d="M 0 120 C 150 140, 250 80, 400 100" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 120 0 C 140 150, 100 250, 150 300" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 0 180 L 400 220" fill="none" stroke="#ffffff" strokeWidth="4" opacity="0.5" />
            <path d="M 280 0 L 220 300" fill="none" stroke="#ffffff" strokeWidth="4" opacity="0.5" />
            
            {/* Minimalist buildings/blocks */}
            <rect x="50" y="50" width="30" height="30" rx="4" fill="rgba(255,255,255,0.05)" />
            <rect x="300" y="80" width="45" height="25" rx="4" fill="rgba(255,255,255,0.05)" />
            <rect x="80" y="220" width="40" height="40" rx="4" fill="rgba(255,255,255,0.05)" />
            <rect x="320" y="240" width="25" height="25" rx="4" fill="rgba(255,255,255,0.05)" />
         </svg>
      </div>

      {/* Main Drop Pin */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.5 }}
        className="relative z-20 flex flex-col items-center"
      >
        {/* Tooltip/Title */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
           className="bg-white text-gray-900 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg mb-2"
        >
          Your Local Business
        </motion.div>
        
        {/* Pin Icon */}
        <div className="relative">
           <svg className="w-12 h-16 text-sumac-brandy drop-shadow-[0_10px_15px_rgba(136,47,24,0.6)]" viewBox="0 0 24 32" fill="currentColor">
             <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
           </svg>
           {/* Center dot in pin */}
           <div className="absolute top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-inner" />
        </div>

        {/* Ground Ripple */}
        <motion.div 
          animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
          className="w-12 h-3 bg-sumac-brandy rounded-[100%] blur-sm -mt-2"
        />
      </motion.div>

      {/* Floating UI Elements */}
      
      {/* 5-Star Reviews Card */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100 }}
        className="absolute right-4 md:right-8 top-[30%] bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-white/20 z-30"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
          </div>
          <span className="text-gray-900 font-bold text-xs">5.0</span>
        </div>
        <div className="text-gray-500 text-[9px] mb-2">150+ Google Reviews</div>
        {/* Fake review skeleton */}
        <div className="space-y-1">
           <div className="w-20 h-1.5 bg-gray-200 rounded-full" />
           <div className="w-16 h-1.5 bg-gray-200 rounded-full" />
        </div>
      </motion.div>

      {/* Traffic/Views Card */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5, type: "spring", stiffness: 100 }}
        className="absolute left-4 md:left-8 bottom-[25%] bg-[#222]/90 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-white/10 z-30"
      >
        <div className="text-white/60 text-[9px] uppercase tracking-wider font-mono mb-1.5">Profile Views</div>
        <div className="flex items-end gap-2">
           <div className="text-white font-bold text-lg leading-none">+342%</div>
           <svg className="w-4 h-4 text-green-500 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        </div>
      </motion.div>

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
