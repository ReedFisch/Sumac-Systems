"use client";

import React from "react";
import { motion } from "motion/react";
import { ServiceIcon } from "./ServiceIcons";

type BenefitType = {
  title: string;
  tagline: string;
  icon: string;
  visualType?: "dashboard" | "code" | "network" | "mobile";
};

/* ─── Base Dashboard Graphic ─── */
function DashboardGraphic({ benefit }: { benefit: BenefitType }) {
  // Determine dynamic text based on title
  let metric = "100";
  let label = "Performance";
  if (benefit.title.includes("Traffic")) {
    metric = "+32%";
    label = "Traffic Growth";
  } else if (benefit.title.includes("Rankings")) {
    metric = "#1";
    label = "Search Rank";
  } else if (benefit.title.includes("Hours Saved")) {
    metric = "15h";
    label = "Weekly Saved";
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-sumac-brandy/10 via-transparent to-transparent opacity-50" />
      
      {/* Chart Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[280px] bg-[#222] rounded-xl border border-white/10 p-4 shadow-xl z-10"
      >
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1 font-mono">{label}</div>
            <div className="text-white font-sans text-3xl font-bold">{metric}</div>
          </div>
          <div className="w-8 h-8 rounded-full bg-sumac-brandy/20 flex items-center justify-center">
            <ServiceIcon name={benefit.icon} />
          </div>
        </div>

        {/* Bar chart animation */}
        <div className="flex items-end gap-2 h-20 border-b border-white/10 pb-2">
          {[40, 50, 45, 60, 80, 95].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 bg-gradient-to-t from-sumac-brandy/80 to-sumac-brandy/40 rounded-sm"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Base Code Graphic ─── */
function CodeGraphic({ benefit }: { benefit: BenefitType }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 bg-[#111] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sumac-brandy/10 via-transparent to-transparent opacity-60" />
       
       <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
         className="w-full max-w-[320px] bg-[#1e1e1e] rounded-xl border border-white/10 shadow-2xl z-10 overflow-hidden"
       >
         {/* Window controls */}
         <div className="flex gap-2 px-4 py-3 bg-[#252525] border-b border-white/10">
           <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
           <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
         </div>
         
         <div className="p-4 font-mono text-[10px] leading-relaxed text-gray-400">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-purple-400">const</span> <span className="text-blue-400">feature</span> = <span className="text-yellow-300">"{benefit.title}"</span>;
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2"
            >
              <span className="text-purple-400">function</span> <span className="text-blue-300">init</span>() {"{"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pl-4 mt-1"
            >
              <span className="text-gray-500">// {benefit.tagline}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pl-4 mt-1"
            >
              <span className="text-blue-300">deploy</span>(<span className="text-blue-400">feature</span>, <span className="text-orange-300">true</span>);
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-1"
            >
              {"}"}
            </motion.div>
         </div>
       </motion.div>
    </div>
  );
}

/* ─── Base Network Graphic ─── */
function NetworkGraphic({ benefit }: { benefit: BenefitType }) {
  const nodes = [
    { x: "20%", y: "30%" },
    { x: "50%", y: "20%" },
    { x: "80%", y: "40%" },
    { x: "30%", y: "70%" },
    { x: "65%", y: "65%" },
  ];

  return (
    <div className="relative w-full h-full p-8 bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-sumac-brandy/5 to-transparent" />
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full z-0 opacity-40">
        <motion.line x1="20%" y1="30%" x2="50%" y2="20%" stroke="#882F18" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
        <motion.line x1="50%" y1="20%" x2="80%" y2="40%" stroke="#882F18" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true }} />
        <motion.line x1="20%" y1="30%" x2="30%" y2="70%" stroke="#882F18" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} viewport={{ once: true }} />
        <motion.line x1="30%" y1="70%" x2="65%" y2="65%" stroke="#882F18" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} viewport={{ once: true }} />
        <motion.line x1="50%" y1="20%" x2="65%" y2="65%" stroke="#882F18" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} viewport={{ once: true }} />
      </svg>

      {/* Nodes */}
      {nodes.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 -ml-6 -mt-6 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center z-10 shadow-lg"
          style={{ left: pos.x, top: pos.y }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: i * 0.15 }}
        >
          {i === 1 ? (
             <ServiceIcon name={benefit.icon} />
          ) : (
            <div className="w-2.5 h-2.5 rounded-full bg-sumac-brandy/60" />
          )}
        </motion.div>
      ))}

      {/* Pulse effect on main node */}
      <motion.div
        className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full bg-sumac-brandy/20 z-0"
        style={{ left: nodes[1].x, top: nodes[1].y }}
        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
}

/* ─── Base Mobile Graphic ─── */
function MobileGraphic({ benefit }: { benefit: BenefitType }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 bg-[#151515] rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-sumac-brandy/10 via-transparent to-transparent opacity-60" />

      {/* Phone Mockup */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative w-[180px] h-[340px] bg-[#0d0d0d] rounded-[2rem] border-4 border-[#2a2a2a] shadow-2xl z-10 overflow-hidden"
      >
        {/* Dynamic Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#2a2a2a] rounded-b-xl z-20" />
        
        <div className="mt-12 px-4 space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/5"
          >
            <div className="w-8 h-8 rounded-full bg-sumac-brandy/20 flex items-center justify-center shrink-0">
               <ServiceIcon name={benefit.icon} />
            </div>
            <div>
              <div className="text-[10px] text-white/50 mb-0.5 font-mono uppercase">New Alert</div>
              <div className="text-xs text-white font-bold leading-tight">{benefit.title}</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="w-full aspect-square bg-[#1a1a1a] rounded-2xl border border-white/5 flex items-center justify-center"
          >
             <div className="text-sumac-brandy/40 flex flex-col items-center gap-2">
                <svg className="w-10 h-10 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <div className="text-[10px] font-mono tracking-widest uppercase">Active</div>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}


/* ─── Main Export Component ─── */
export function BenefitVisual({ benefit }: { benefit: BenefitType }) {
  // If no visualType is provided, fallback to Dashboard
  const type = benefit.visualType || "dashboard";

  switch (type) {
    case "dashboard":
      return <DashboardGraphic benefit={benefit} />;
    case "code":
      return <CodeGraphic benefit={benefit} />;
    case "network":
      return <NetworkGraphic benefit={benefit} />;
    case "mobile":
      return <MobileGraphic benefit={benefit} />;
    default:
      return <DashboardGraphic benefit={benefit} />;
  }
}
