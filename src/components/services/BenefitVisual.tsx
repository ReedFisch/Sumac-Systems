"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "motion/react";
import { ServiceIcon } from "./ServiceIcons";

export type BenefitType = {
  title: string;
  tagline: string;
  icon: string;
  visualType?: "dashboard" | "code" | "network" | "mobile" | "server";
};

/* ─── 1. Dashboard Graphic (Data & Metrics) ─── */
function DashboardGraphic({ benefit }: { benefit: BenefitType }) {
  let label = "Performance";
  if (benefit.title.includes("Traffic")) label = "Traffic Growth";
  else if (benefit.title.includes("Rankings")) label = "Search Rank";
  else if (benefit.title.includes("Hours Saved")) label = "Weekly Saved";

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = label === "Search Rank" ? 1 : label === "Weekly Saved" ? 15 : 32;
    if (start === end) return;
    
    let totalDuration = 1500;
    let incrementTime = (totalDuration / end);
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [label]);

  const prefix = label === "Traffic Growth" ? "+" : label === "Search Rank" ? "#" : "";
  const suffix = label === "Traffic Growth" ? "%" : label === "Weekly Saved" ? "h" : "";

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-sumac-brandy/10 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[300px] bg-[#222]/80 backdrop-blur-md rounded-2xl border border-white/10 p-5 shadow-2xl z-10"
      >
        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="text-gray-400 text-[10px] uppercase tracking-widest mb-1.5 font-mono">{label}</div>
            <div className="flex items-center gap-3">
              <div className="text-white font-sans text-4xl font-bold tracking-tight">
                {prefix}{count}{suffix}
              </div>
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity }}
                className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] text-green-400 font-mono uppercase tracking-wider"
              >
                Live
              </motion.div>
            </div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-sumac-brandy/20 flex items-center justify-center border border-sumac-brandy/30">
            <ServiceIcon name={benefit.icon} />
          </div>
        </div>

        {/* Animated Line Chart */}
        <div className="relative h-24 w-full border-b border-l border-white/10">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />
            
            {/* The Line */}
            <motion.path
              d="M0 90 Q 20 80, 40 50 T 70 30 T 100 10"
              fill="none"
              stroke="#882F18"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* Gradient Fill under line */}
            <motion.path
              d="M0 90 Q 20 80, 40 50 T 70 30 T 100 10 L 100 100 L 0 100 Z"
              fill="url(#chartGradient)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#882F18" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#882F18" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Pulsing dot at end of line */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.3 }}
            className="absolute top-[10%] right-0 -mr-1.5 -mt-1.5 w-3 h-3 bg-sumac-brandy rounded-full shadow-[0_0_10px_rgba(136,47,24,0.8)]"
          >
            <motion.div 
              animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-sumac-brandy"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── 2. Code Graphic (Custom Development) ─── */
function CodeGraphic({ benefit }: { benefit: BenefitType }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 rounded-2xl overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sumac-brandy/10 via-transparent to-transparent opacity-60" />
       
       <div className="w-full max-w-[380px] grid grid-cols-2 gap-4 z-10">
         {/* Code Editor */}
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
         >
           <div className="flex gap-1.5 px-3 py-2.5 bg-[#252525] border-b border-white/10">
             <div className="w-2 h-2 rounded-full bg-red-500/80" />
             <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
             <div className="w-2 h-2 rounded-full bg-green-500/80" />
           </div>
           <div className="p-3 font-mono text-[8px] leading-relaxed text-gray-400">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <span className="text-purple-400">import</span> {"{"} UI {"}"} <span className="text-purple-400">from</span> <span className="text-yellow-300">'@sumac'</span>;
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-2">
                <span className="text-purple-400">export default function</span> <span className="text-blue-300">Site</span>() {"{"}
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="pl-3 mt-1 text-gray-500">
                // {benefit.title}
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} className="pl-3 mt-1">
                <span className="text-purple-400">return</span> (
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.0 }} className="pl-6 mt-1">
                &lt;<span className="text-blue-400">UI.Header</span> /&gt;
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2 }} className="pl-6 mt-1">
                &lt;<span className="text-blue-400">UI.Hero</span> /&gt;
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }} className="pl-6 mt-1">
                &lt;<span className="text-blue-400">UI.Grid</span> /&gt;
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.6 }} className="pl-3 mt-1">
                );
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.8 }} className="mt-1">
                {"}"}
              </motion.div>
           </div>
         </motion.div>

         {/* Visual Output */}
         <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="bg-white rounded-xl border border-white/20 p-2 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex flex-col gap-2"
         >
            {/* Header */}
            <motion.div 
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 1.0, duration: 0.4 }}
              className="h-3 w-full bg-gray-200 rounded-sm origin-left" 
            />
            {/* Hero */}
            <motion.div 
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: 1.2, duration: 0.5 }}
              className="h-16 w-full bg-gradient-to-br from-sumac-brandy/20 to-sumac-brandy/5 rounded-md origin-top flex items-center justify-center"
            >
              <div className="w-10 h-2 bg-sumac-brandy/30 rounded-full" />
            </motion.div>
            {/* Grid */}
            <div className="grid grid-cols-2 gap-2 flex-1">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.4 }} className="bg-gray-100 rounded-md h-full" />
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.5 }} className="bg-gray-100 rounded-md h-full" />
            </div>
         </motion.div>
       </div>
    </div>
  );
}

/* ─── 3. Network Graphic (SEO & Automations) ─── */
function NetworkGraphic({ benefit }: { benefit: BenefitType }) {
  const nodes = [
    { x: "20%", y: "30%" },
    { x: "50%", y: "50%" }, // Center Node
    { x: "80%", y: "40%" },
    { x: "30%", y: "70%" },
    { x: "70%", y: "75%" },
  ];

  return (
    <div className="relative w-full h-full p-8 bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sumac-brandy/10 via-transparent to-transparent opacity-80" />
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full z-0">
        <motion.line x1="20%" y1="30%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
        <motion.line x1="80%" y1="40%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} />
        <motion.line x1="30%" y1="70%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }} />
        <motion.line x1="70%" y1="75%" x2="50%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }} />
        
        {/* Animated Data Packets traveling to center node */}
        <motion.circle r="3" fill="#882F18" filter="drop-shadow(0 0 4px #882F18)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 56 96 L 140 160" />
        </motion.circle>
        <motion.circle r="3" fill="#882F18" filter="drop-shadow(0 0 4px #882F18)">
          <animateMotion dur="2.5s" repeatCount="indefinite" begin="1s" path="M 224 128 L 140 160" />
        </motion.circle>
        <motion.circle r="3" fill="#882F18" filter="drop-shadow(0 0 4px #882F18)">
          <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.5s" path="M 84 224 L 140 160" />
        </motion.circle>
      </svg>

      {/* Nodes */}
      {nodes.map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${i === 1 ? 'w-14 h-14 -ml-7 -mt-7 bg-[#1a1a1a] border border-sumac-brandy/50 shadow-[0_0_20px_rgba(136,47,24,0.3)]' : 'w-8 h-8 -ml-4 -mt-4 bg-[#111] border border-white/10'} rounded-full flex items-center justify-center z-10`}
          style={{ left: pos.x, top: pos.y }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: i * 0.15 }}
        >
          {i === 1 ? (
             <div className="text-sumac-brandy group-hover:scale-110 transition-transform">
               <ServiceIcon name={benefit.icon} />
             </div>
          ) : (
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          )}
        </motion.div>
      ))}
      
      {/* Radar Sweep Effect on Center Node */}
      <motion.div
        className="absolute w-24 h-24 -ml-12 -mt-12 rounded-full border border-sumac-brandy/30 z-0 pointer-events-none"
        style={{ left: nodes[1].x, top: nodes[1].y }}
        animate={{ scale: [1, 3], opacity: [1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
    </div>
  );
}

/* ─── 4. Mobile Graphic (GBP & Instant Response) ─── */
function MobileGraphic({ benefit }: { benefit: BenefitType }) {
  const isMap = benefit.icon === "map-pin";
  const isPhone = benefit.icon === "phone";

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-sumac-brandy/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Phone Mockup */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative w-[180px] h-[340px] bg-[#0d0d0d] rounded-[2rem] border-4 border-[#2a2a2a] shadow-2xl z-10 overflow-hidden flex flex-col scale-[1.25] lg:scale-[1.45] origin-center"
      >
        {/* Dynamic Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#2a2a2a] rounded-b-xl z-30" />
        
        {isMap ? (
          // Map Interface
          <div className="flex-1 relative bg-[#1c2227]">
            {/* Fake Map Background */}
            <div className="absolute inset-0 opacity-20">
               <div className="w-full h-0.5 bg-white/20 absolute top-1/4" />
               <div className="w-full h-0.5 bg-white/20 absolute top-2/4" />
               <div className="h-full w-0.5 bg-white/20 absolute left-1/3" />
               <div className="h-full w-0.5 bg-white/20 absolute left-2/3" />
            </div>
            
            {/* Dropping Pin */}
            <motion.div 
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.6, delay: 0.5 }}
              className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-full z-20 flex flex-col items-center"
            >
              <div className="px-2 py-1 bg-white text-[#1c2227] text-[8px] font-bold rounded shadow-lg whitespace-nowrap mb-1">
                {benefit.title}
              </div>
              <div className="text-sumac-brandy drop-shadow-md">
                <ServiceIcon name="map-pin" />
              </div>
              {/* Ripple */}
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                className="w-4 h-1 bg-sumac-brandy/50 rounded-[100%] absolute -bottom-1"
              />
            </motion.div>
            
            {/* Bottom Sheet */}
            <motion.div 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.8 }}
              className="absolute bottom-0 w-full bg-[#111] p-3 rounded-t-xl border-t border-white/10"
            >
               <div className="w-8 h-1 bg-white/20 rounded-full mx-auto mb-2" />
               <div className="h-2 w-3/4 bg-white/80 rounded mb-2" />
               <div className="h-2 w-1/2 bg-white/40 rounded mb-3" />
               <div className="flex gap-2">
                 <div className="h-6 flex-1 bg-sumac-brandy rounded-md" />
                 <div className="h-6 flex-1 bg-white/10 rounded-md" />
               </div>
            </motion.div>
          </div>
        ) : isPhone ? (
          // Direct Call Interface
          <div className="flex-1 bg-white p-3 pt-8 flex flex-col gap-3 relative overflow-hidden">
            {/* Fake Search Bar */}
            <div className="h-7 bg-gray-100 rounded-full flex items-center px-3 gap-2 w-full shadow-inner border border-gray-200">
              <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <div className="h-1.5 w-16 bg-gray-300 rounded" />
            </div>

            {/* GBP Listing Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-3 shadow-sm flex flex-col gap-2 mt-1">
              <div className="h-2 w-24 bg-gray-800 rounded" />
              <div className="flex items-center gap-1">
                <span className="text-[8px] font-bold text-gray-800">5.0</span>
                <div className="flex gap-0.5">
                   {[1,2,3,4,5].map(i => (
                     <svg key={i} className="w-2 h-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   ))}
                </div>
                <span className="text-[7px] text-gray-500">(142)</span>
              </div>
              <div className="h-1 w-20 bg-gray-300 rounded" />
              <div className="h-1 w-32 bg-gray-200 rounded" />

              {/* Call Button Grid */}
              <div className="grid grid-cols-3 gap-2 mt-2">
                 <motion.div
                   animate={{ scale: [1, 1, 0.9, 1, 1], backgroundColor: ["#22c55e", "#22c55e", "#16a34a", "#22c55e", "#22c55e"] }}
                   transition={{ duration: 6, times: [0, 0.2, 0.25, 0.3, 1], repeat: Infinity }}
                   className="col-span-3 bg-green-500 text-white rounded-full py-2 flex items-center justify-center gap-1.5 font-bold text-[9px] shadow-sm relative overflow-hidden"
                 >
                   <motion.div 
                     animate={{ x: ["-100%", "200%", "200%"] }} 
                     transition={{ duration: 6, times: [0, 0.15, 1], repeat: Infinity }}
                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full"
                   />
                   <ServiceIcon name="phone" className="w-2.5 h-2.5" />
                   Call Now
                 </motion.div>
                 <div className="bg-gray-100 rounded-full py-1.5 flex justify-center"><div className="h-1 w-4 bg-gray-300 rounded" /></div>
                 <div className="bg-gray-100 rounded-full py-1.5 flex justify-center"><div className="h-1 w-4 bg-gray-300 rounded" /></div>
                 <div className="bg-gray-100 rounded-full py-1.5 flex justify-center"><div className="h-1 w-4 bg-gray-300 rounded" /></div>
              </div>
            </div>

            {/* Incoming Call Screen (slides up) */}
            <motion.div
               animate={{ y: ["100%", "100%", "0%", "0%", "100%"] }}
               transition={{ duration: 6, times: [0, 0.3, 0.4, 0.9, 1], repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-x-0 bottom-0 top-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-50 pt-4"
            >
               <div className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mb-3 text-gray-400">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
               </div>
               <div className="text-[12px] font-bold text-white mb-0.5 tracking-tight">New Customer</div>
               <div className="text-[9px] text-green-400 mb-8 font-mono">Calling... 0:01</div>
               
               <div className="flex gap-6 mt-4">
                 <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 10 8 18 18 18h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.516l2.257-1.13a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" /></svg>
                 </div>
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px #22c55e", "0 0 20px #22c55e", "0 0 0px #22c55e"] }} 
                   transition={{ duration: 1.5, repeat: Infinity }}
                   className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white"
                 >
                   <ServiceIcon name="phone" className="w-4 h-4" />
                 </motion.div>
               </div>
            </motion.div>
          </div>
        ) : (
          // Chat / Notification Interface
          <div className="flex-1 bg-[#111] p-3 pt-12 flex flex-col gap-3 relative">
             <div className="text-[10px] text-center text-white/40 font-mono mb-2">Today</div>
             
             {/* Push Notification (Drops in from notch) */}
             <motion.div
                animate={{ y: [-60, -30, -30, -60], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 7, times: [0, 0.07, 0.9, 1], repeat: Infinity, ease: "easeOut" }}
                className="absolute top-12 left-1/2 -translate-x-1/2 w-[85%] bg-[#222]/90 backdrop-blur-md rounded-lg p-2 border border-white/10 shadow-xl flex items-center gap-2 z-40"
             >
                <div className="w-5 h-5 bg-green-500/20 rounded flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                </div>
                <div className="flex-1">
                  <div className="text-[8px] font-bold text-white mb-0.5">Missed Call</div>
                  <div className="text-[7px] text-white/50">(555) 123-4567</div>
                </div>
             </motion.div>

             {/* Incoming Message */}
             <motion.div 
               animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.9, 0.9, 1, 1, 0.9] }}
               transition={{ duration: 7, times: [0, 0.2, 0.25, 0.9, 1], repeat: Infinity, ease: "backOut" }}
               className="bg-[#222] p-2.5 rounded-2xl rounded-tl-sm self-start max-w-[85%] border border-white/5 mt-4 origin-bottom-left"
             >
               <div className="h-1.5 w-16 bg-white/60 rounded mb-1.5" />
               <div className="h-1.5 w-24 bg-white/40 rounded" />
             </motion.div>

             {/* Typing Indicator */}
             <motion.div 
               animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [0.9, 0.9, 1, 1, 0.9, 0.9] }}
               transition={{ duration: 7, times: [0, 0.35, 0.4, 0.55, 0.6, 1], repeat: Infinity, ease: "backOut" }}
               className="bg-sumac-brandy/20 p-2.5 rounded-2xl rounded-tr-sm self-end max-w-[40%] flex items-center gap-1 origin-bottom-right"
             >
               <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-sumac-brandy rounded-full" />
               <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-sumac-brandy rounded-full" />
               <motion.div animate={{ y: [0, -2, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-sumac-brandy rounded-full" />
             </motion.div>
             
             {/* Outgoing Automated Reply */}
             <motion.div 
               animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.9, 0.9, 1, 1, 0.9] }}
               transition={{ duration: 7, times: [0, 0.58, 0.63, 0.9, 1], repeat: Infinity, ease: "backOut" }}
               className="bg-sumac-brandy p-2.5 rounded-2xl rounded-tr-sm self-end max-w-[85%] shadow-lg -mt-10 origin-bottom-right"
             >
               <div className="h-1.5 w-20 bg-white rounded mb-1.5" />
               <div className="h-1.5 w-16 bg-white/80 rounded" />
               <div className="absolute -left-5 top-1/2 -translate-y-1/2 text-white/40">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
               </div>
             </motion.div>
             
             {/* Badge */}
             <motion.div
               animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, 10] }}
               transition={{ duration: 7, times: [0, 0.65, 0.7, 0.9, 1], repeat: Infinity, ease: "easeOut" }}
               className="mt-auto mx-auto bg-white/10 px-3 py-1.5 rounded-full flex items-center justify-center gap-1.5 border border-white/10"
             >
               <svg className="w-2.5 h-2.5 text-sumac-brandy mt-[0.5px]" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
               </svg>
               <span className="text-[8px] uppercase tracking-widest text-white/80 font-mono leading-none pt-px">Auto-Reply Sent</span>
             </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

/* ─── 5. Server Graphic (Managed Hosting) ─── */
function ServerGraphic({ benefit }: { benefit: BenefitType }) {
  const logs = [
    "[SYS] Firewall rules updated",
    "[SEC] Blocked 14 malicious IPs",
    "[OPT] Assets cached to CDN",
    "[SYS] DB backup completed",
    "[SEC] SSL certificate renewed",
    "[OPT] Core web vitals pass"
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 bg-[#0a0f12] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full max-w-[320px] z-10 flex flex-col gap-4"
      >
        {/* Top Rack - Status */}
        <div className="bg-[#151a1e] border border-white/10 rounded-xl p-4 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded bg-[#0a0f12] border border-white/5 flex items-center justify-center overflow-hidden">
               {/* Spinning fan */}
               <motion.div 
                 animate={{ rotate: 360 }} 
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 flex items-center justify-center text-gray-500 opacity-30"
               >
                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5l-10 14M22 12H2M19 17L5 7"/></svg>
               </motion.div>
               <div className="relative text-green-500 w-5 h-5">
                 <ServiceIcon name="shield" />
               </div>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-0.5">Status</div>
              <div className="text-sm text-green-400 font-medium">Fully Managed</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
             <div className="flex gap-1.5">
               <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }} className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
               <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
               <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }} className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
             </div>
             <div className="flex gap-1.5">
               <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_#3b82f6]" />
               <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
               <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             </div>
          </div>
        </div>

        {/* Bottom Rack - Live Logs */}
        <div className="bg-[#151a1e] border border-white/10 rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden relative h-28">
           <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#151a1e] to-transparent z-10" />
           <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#151a1e] to-transparent z-10" />
           
           <motion.div
             animate={{ y: ["0%", "-50%"] }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             className="flex flex-col gap-2 font-mono text-[9px] text-green-500/70 absolute top-4 left-4 right-4"
           >
             {/* Double the logs for seamless looping */}
             {[...logs, ...logs].map((log, i) => (
               <div key={i} className="flex gap-2">
                 <span className="text-gray-600">[{new Date().toISOString().split('T')[1].substring(0,8)}]</span>
                 <span className={log.includes('SEC') ? 'text-red-400' : log.includes('OPT') ? 'text-blue-400' : ''}>{log}</span>
               </div>
             ))}
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── 6. Orbit Graphic (Reputation & Stars) ─── */
function OrbitGraphic({ benefit }: { benefit: BenefitType }) {
  return (
    <div className="relative w-full h-full p-8 bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent opacity-80" />
      
      {/* Center Star */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: 0.2 }}
        className="relative z-10 w-16 h-16 bg-[#1a1a1a] rounded-full border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.2)] flex items-center justify-center text-yellow-500"
      >
        <div className="w-8 h-8"><ServiceIcon name="star" /></div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-yellow-500/20 blur-md -z-10"
        />
      </motion.div>

      {/* Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div className="absolute w-40 h-40 rounded-full border border-yellow-500/10" />
        <motion.div className="absolute w-64 h-64 rounded-full border border-yellow-500/10" />
      </div>

      {/* Orbiting Planets (Reviews) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Orbit 1 */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-40 h-40 rounded-full"
        >
          <motion.div 
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-yellow-500/30 text-yellow-500 text-[8px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1"
          >
            5.0 <ServiceIcon name="star" />
          </motion.div>
        </motion.div>

        {/* Orbit 2 */}
        <motion.div 
          animate={{ rotate: -360 }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 rounded-full"
        >
          <motion.div 
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}
            className="absolute top-1/4 -right-4 bg-[#1a1a1a] border border-yellow-500/30 text-yellow-500 text-[8px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1"
          >
            5.0 <ServiceIcon name="star" />
          </motion.div>
          <motion.div 
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.1 }}
            className="absolute bottom-1/4 -left-4 bg-[#1a1a1a] border border-yellow-500/30 text-yellow-500 text-[8px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1"
          >
            5.0 <ServiceIcon name="star" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── 7. Target Graphic (Radar & SEO) ─── */
function TargetGraphic({ benefit }: { benefit: BenefitType }) {
  return (
    <div className="relative w-full h-full p-8 bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-80" />
      
      {/* Radar Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-24 h-24 rounded-full border border-blue-500/20" />
        <div className="absolute w-48 h-48 rounded-full border border-blue-500/20" />
        <div className="absolute w-72 h-72 rounded-full border border-blue-500/20" />
        {/* Crosshairs */}
        <div className="absolute w-full h-px bg-blue-500/10" />
        <div className="absolute h-full w-px bg-blue-500/10" />
      </div>

      {/* Radar Sweep */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full origin-center"
          style={{ background: 'conic-gradient(from 0deg, transparent 70%, rgba(59, 130, 246, 0.4) 100%)', borderRadius: '50%' }}
        />
      </div>

      {/* Center Target */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", delay: 0.2 }}
        className="relative z-10 w-12 h-12 bg-[#1a1a1a] rounded-full border border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center text-blue-500"
      >
        <div className="w-6 h-6"><ServiceIcon name="target" /></div>
      </motion.div>

      {/* Blips */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1.5] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          className="absolute -top-12 left-12 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" 
        />
        <motion.div 
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1.5] }} transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
          className="absolute top-16 right-16 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" 
        />
        <motion.div 
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 1.5] }} transition={{ duration: 4, repeat: Infinity, delay: 2.8 }}
          className="absolute -bottom-16 -left-8 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" 
        />
      </div>
    </div>
  );
}

/* ─── 8. Funnel Graphic (Conversion) ─── */
function FunnelGraphic({ benefit }: { benefit: BenefitType }) {
  return (
    <div className="relative w-full h-full p-8 rounded-2xl overflow-hidden group flex flex-col justify-center gap-6">
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-transparent opacity-60" />
      
      {/* Funnel Container */}
      <div className="relative w-full max-w-[280px] mx-auto flex flex-col gap-3">
        {/* Top Level - Traffic */}
        <div className="w-full bg-[#1c1c1c] border border-white/10 p-3 rounded-xl flex items-center justify-between relative z-30">
          <div className="flex items-center gap-3">
            <div className="text-gray-400 w-5 h-5"><ServiceIcon name="users" /></div>
            <div className="text-xs font-bold text-white">Local Traffic</div>
          </div>
          <div className="text-sm font-mono text-white/50">2,450</div>
          {/* Animated Particles flowing down */}
          <motion.div animate={{ y: [0, 40, 40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -bottom-4 left-1/4 w-1.5 h-1.5 bg-green-500/50 rounded-full" />
          <motion.div animate={{ y: [0, 40, 40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="absolute -bottom-4 left-1/2 w-1.5 h-1.5 bg-green-500/50 rounded-full" />
          <motion.div animate={{ y: [0, 40, 40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1.2 }} className="absolute -bottom-4 right-1/4 w-1.5 h-1.5 bg-green-500/50 rounded-full" />
        </div>

        {/* Middle Level - Optimized Site */}
        <div className="w-[85%] mx-auto bg-[#1a1a1a] border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.1)] p-3 rounded-xl flex items-center justify-between relative z-20">
          <div className="flex items-center gap-3">
            <div className="text-green-500 w-5 h-5"><ServiceIcon name="zap" /></div>
            <div className="text-xs font-bold text-white">Optimized Site</div>
          </div>
          <div className="text-xs font-bold text-green-400">14.2% CVR</div>
          {/* Animated Particles flowing down */}
          <motion.div animate={{ y: [0, 40, 40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="absolute -bottom-4 left-1/3 w-1.5 h-1.5 bg-green-500 rounded-full" />
          <motion.div animate={{ y: [0, 40, 40], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} className="absolute -bottom-4 right-1/3 w-1.5 h-1.5 bg-green-500 rounded-full" />
        </div>

        {/* Bottom Level - Leads */}
        <div className="w-[70%] mx-auto bg-green-500/10 border border-green-500 p-4 rounded-xl flex items-center justify-between relative z-10 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
          <div className="flex items-center gap-3">
            <div className="text-green-500 w-5 h-5"><ServiceIcon name="target" /></div>
            <div className="text-sm font-bold text-white">New Leads</div>
          </div>
          <div className="flex items-center gap-2">
             <div className="text-lg font-bold text-green-400 font-mono tracking-tight">348</div>
             <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-green-500 rounded-full" />
          </div>
        </div>
      </div>
      
    </div>
  );
}

/* ─── 9. Organic Traffic Graphic ─── */
function OrganicTrafficGraphic({ benefit }: { benefit: BenefitType }) {
  const gradientId = React.useId();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const values = [58, 50, 42, 32, 24, 14];
  const chartW = 252;
  const chartH = 72;
  const padX = 6;
  const step = (chartW - padX * 2) / (values.length - 1);

  const points = values.map((y, i) => ({
    x: padX + i * step,
    y,
  }));

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`)
    .join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x.toFixed(1)} ${chartH} L ${points[0].x.toFixed(1)} ${chartH} Z`;
  const last = points[points.length - 1];

  return (
    <div className="relative w-full h-full p-6 md:p-8 rounded-2xl overflow-hidden flex flex-col gap-5">
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className="text-gray-500 text-xs uppercase tracking-widest font-mono mb-1.5">Organic Visitors</div>
          <div className="text-white text-3xl md:text-4xl font-bold tracking-tight">12.4k</div>
        </div>
        <div className="bg-green-500/10 text-green-400 text-xs font-semibold px-2.5 py-1.5 rounded-md border border-green-500/20 flex items-center gap-1 shrink-0">
          <ServiceIcon name="trending-up" className="w-3.5 h-3.5" /> +24%
        </div>
      </div>

      <div className="relative flex-1 min-h-[148px] flex flex-col justify-end">
        <svg
          viewBox={`0 0 ${chartW} ${chartH + 4}`}
          className="w-full h-[120px] md:h-[132px]"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[18, 36, 54].map((y) => (
            <line
              key={y}
              x1={padX}
              y1={y}
              x2={chartW - padX}
              y2={y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          <motion.path
            d={areaPath}
            fill={`url(#${gradientId})`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          />

          <motion.path
            d={linePath}
            fill="none"
            stroke="#4ade80"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          />

          <motion.circle
            cx={last.x}
            cy={last.y}
            r="3.5"
            fill="#4ade80"
            stroke="#121212"
            strokeWidth="1.5"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5 }}
          />
        </svg>

        <div className="flex justify-between mt-3 px-0.5">
          {months.map((month, i) => (
            <span
              key={month}
              className={`text-[10px] md:text-xs font-mono uppercase tracking-wider ${
                i === months.length - 1 ? "text-green-400 font-semibold" : "text-gray-500"
              }`}
            >
              {month}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── 10. AI Graphic (Recommendations) ─── */
function AiGraphic({ benefit }: { benefit: BenefitType }) {
  return (
    <div className="relative w-full h-full p-6 bg-[#0a0f12] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl group flex flex-col justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-60" />
      
      {/* AI Chat Window */}
      <div className="w-full max-w-[300px] mx-auto bg-[#1a1f24] rounded-xl border border-white/10 overflow-hidden shadow-2xl relative z-10">
        
        {/* Header */}
        <div className="bg-[#111518] px-3 py-2 border-b border-white/5 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
          <div className="mx-auto text-[9px] text-gray-400 font-mono">AI Search Overview</div>
        </div>

        {/* Chat Body */}
        <div className="p-4 flex flex-col gap-4">
          {/* User Prompt */}
          <div className="flex gap-2 items-start self-end max-w-[85%]">
            <div className="bg-[#2a3036] p-2.5 rounded-lg rounded-tr-sm text-[9px] text-white/80 leading-relaxed">
              Who is the best local contractor near me?
            </div>
          </div>

          {/* AI Response */}
          <div className="flex gap-2 items-start">
            <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/30">
              <ServiceIcon name="cpu" />
            </div>
            <div className="bg-blue-500/10 p-3 rounded-lg rounded-tl-sm text-[9px] text-white/90 leading-relaxed border border-blue-500/20 flex-1">
              Based on top reviews, location, and a fully optimized profile, I highly recommend <strong className="text-blue-400 font-bold">Your Business</strong> for this job.
              
              <div className="mt-3 flex gap-2">
                <div className="px-2 py-1 bg-[#111518] rounded text-[8px] text-gray-400 flex items-center gap-1 border border-white/5"><ServiceIcon name="star" /> 5.0 Rating</div>
                <div className="px-2 py-1 bg-[#111518] rounded text-[8px] text-gray-400 flex items-center gap-1 border border-white/5"><ServiceIcon name="map-pin" /> 1.2 mi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Export Component ─── */
export function BenefitVisual({ benefit }: { benefit: BenefitType }) {
  const type = benefit.visualType || "dashboard";

  switch (type) {
    case "dashboard": 
      if (benefit.icon === "bar-chart") return <OrganicTrafficGraphic benefit={benefit} />;
      if (benefit.icon === "target" && benefit.title.includes("Convert")) return <FunnelGraphic benefit={benefit} />;
      return <DashboardGraphic benefit={benefit} />;
    case "code": 
      if (benefit.icon === "cpu") return <AiGraphic benefit={benefit} />;
      return <CodeGraphic benefit={benefit} />;
    case "network": 
      if (benefit.icon === "star") return <OrbitGraphic benefit={benefit} />;
      if (benefit.icon === "target") return <TargetGraphic benefit={benefit} />;
      return <NetworkGraphic benefit={benefit} />;
    case "mobile": return <MobileGraphic benefit={benefit} />;
    case "server": return <ServerGraphic benefit={benefit} />;
    default: return <DashboardGraphic benefit={benefit} />;
  }
}
