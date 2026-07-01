"use client";

import React from "react";
import { motion } from "motion/react";

export function BuiltToConvertGraphic() {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sumac-brandy/15 via-transparent to-transparent opacity-80" />
      
      {/* Abstract Conversion Funnel / Data Flow */}
      <div className="relative w-full max-w-lg z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4 md:px-0">
        
        {/* Step 1: Traffic / Visitors */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center gap-3 w-full md:w-auto"
        >
          <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <motion.div 
               className="absolute -top-1 -right-1 w-3 h-3 bg-sumac-brandy rounded-full"
               animate={{ scale: [1, 2], opacity: [1, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Local Traffic</span>
        </motion.div>

        {/* Arrow 1 */}
        <div className="hidden md:flex relative flex-1 items-center justify-center min-w-[60px]">
          <div className="w-full h-[2px] bg-white/5 rounded-full" />
          <motion.div
            className="absolute left-0 w-2 h-2 rounded-full bg-sumac-brandy shadow-[0_0_10px_#882F18]"
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Step 2: High-Performance System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative w-full md:w-auto"
        >
          <div className="bg-[#111] border border-sumac-brandy/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(136,47,24,0.15)] flex flex-col items-center">
             <div className="w-12 h-12 bg-sumac-brandy/10 rounded-xl flex items-center justify-center mb-3 border border-sumac-brandy/20">
               <svg className="w-6 h-6 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
             </div>
             <div className="text-white font-bold text-sm mb-1">Built to Convert</div>
             <div className="flex gap-1">
               {[1,2,3,4,5].map(i => (
                 <svg key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               ))}
             </div>
          </div>
          
          {/* Animated particles floating around the system */}
          <motion.div className="absolute -top-4 -right-4 w-2 h-2 bg-white/20 rounded-full" animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.div className="absolute -bottom-2 -left-3 w-1.5 h-1.5 bg-sumac-brandy/50 rounded-full" animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
        </motion.div>

        {/* Arrow 2 */}
        <div className="hidden md:flex relative flex-1 items-center justify-center min-w-[60px]">
          <div className="w-full h-[2px] bg-white/5 rounded-full" />
          <motion.div
            className="absolute left-0 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
          />
        </div>

        {/* Step 3: New Leads / Revenue */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center gap-3 w-full md:w-auto"
        >
          <div className="relative w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.15)]">
            <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <motion.div 
               className="absolute -top-2 -right-2 bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full"
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{ type: "spring", delay: 1, bounce: 0.6 }}
            >
              +1
            </motion.div>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-green-500/70">New Lead</span>
        </motion.div>

      </div>
    </div>
  );
}
