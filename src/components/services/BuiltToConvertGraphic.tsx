"use client";

import React from "react";
import { motion } from "motion/react";
import { ServiceIcon } from "./ServiceIcons";

/* ─── 1. Google Business Profile Graphic ─── */
function GbpMiddleGraphic() {
  return (
    <div className="relative w-full h-full min-h-[350px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/15 via-transparent to-transparent opacity-80" />
      
      <div className="relative w-full max-w-2xl z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-0 mt-8 md:mt-0">
        
        {/* Phone Mockup Showing Map */}
        <motion.div
          initial={{ y: 50, opacity: 0, rotate: -5 }}
          whileInView={{ y: 0, opacity: 1, rotate: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative w-48 h-64 bg-[#111] rounded-2xl border-4 border-gray-800 shadow-2xl overflow-hidden shadow-[0_20px_50px_rgba(34,197,94,0.15)] flex-shrink-0"
        >
          {/* Map Header */}
          <div className="bg-gray-800 p-3 pt-6 rounded-b-xl mb-2 relative">
             <div className="h-2 w-16 bg-gray-600 rounded mb-2" />
             <div className="flex gap-1">
               {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />)}
             </div>
             <motion.div 
               animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}
               className="absolute -bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-[#111]"
             >
               <div className="w-3 h-3"><ServiceIcon name="phone" /></div>
             </motion.div>
          </div>
          
          {/* Map Area */}
          <div className="relative flex-1 bg-[#1a2327]">
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
             
             {/* Map Pins */}
             <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="absolute top-8 left-8 text-gray-500 w-4 h-4"><ServiceIcon name="map-pin" /></motion.div>
             <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="absolute bottom-12 right-12 text-gray-500 w-4 h-4"><ServiceIcon name="map-pin" /></motion.div>
             
             {/* Main Pin */}
             <motion.div 
               initial={{ y: -50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ type: "spring", delay: 1 }} viewport={{ once: true }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 w-8 h-8 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
             >
               <ServiceIcon name="map-pin" />
             </motion.div>
          </div>
        </motion.div>

        {/* Callouts */}
        <div className="flex flex-col gap-6 relative z-20 w-full md:w-auto">
          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="bg-[#111] p-4 rounded-xl border border-white/10 flex items-center gap-4 max-w-xs">
            <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><ServiceIcon name="target" /></div>
            <div>
              <div className="text-white font-bold text-sm">Dominate Local Maps</div>
              <div className="text-white/50 text-[10px] mt-1">Show up first when customers search nearby.</div>
            </div>
          </motion.div>

          <motion.div initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="bg-[#111] p-4 rounded-xl border border-white/10 flex items-center gap-4 max-w-xs md:-ml-8">
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center shrink-0"><ServiceIcon name="star" /></div>
            <div>
              <div className="text-white font-bold text-sm">Build Instant Trust</div>
              <div className="text-white/50 text-[10px] mt-1">Stand out with a fully optimized, 5-star profile.</div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

/* ─── 2. AI SEO Graphic ─── */
function SeoMiddleGraphic() {
  return (
    <div className="relative w-full h-full min-h-[350px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent opacity-80" />
      
      <div className="relative w-full max-w-3xl z-10 flex flex-col items-center justify-center px-4 md:px-8 h-full py-12">
        
        {/* Search Results Ascending */}
        <div className="w-full max-w-xl flex flex-col gap-3 relative h-[280px]">
           
           {/* Result 3 (Competitor) */}
           <motion.div 
             animate={{ y: [0, 80, 80, 0], opacity: [0.6, 0.2, 0.2, 0.6] }} 
             transition={{ duration: 6, times: [0, 0.2, 0.8, 1], repeat: Infinity, ease: "easeInOut" }} 
             className="absolute top-0 w-full bg-[#151515] rounded-lg p-4 border border-white/10 blur-[1px]"
           >
             <div className="w-1/3 h-2 bg-blue-500/70 rounded mb-2" />
             <div className="w-5/6 h-3 bg-white/60 rounded mb-2" />
             <div className="w-3/4 h-2 bg-white/30 rounded" />
           </motion.div>

           {/* Result 2 (Competitor) */}
           <motion.div 
             animate={{ y: [80, 160, 160, 80], opacity: [0.3, 0, 0, 0.3] }} 
             transition={{ duration: 6, times: [0, 0.2, 0.8, 1], repeat: Infinity, ease: "easeInOut" }} 
             className="absolute top-0 w-full bg-[#111] rounded-lg p-4 border border-white/5 blur-[2px]"
           >
             <div className="w-1/4 h-2 bg-blue-500/50 rounded mb-2" />
             <div className="w-3/4 h-3 bg-white/40 rounded mb-2" />
             <div className="w-2/3 h-2 bg-white/20 rounded" />
           </motion.div>

           {/* Result 1 (Our Client - Climbs to top) */}
           <motion.div 
             animate={{ y: [160, 0, 0, 160], scale: [0.95, 1.02, 1.02, 0.95], borderColor: ["rgba(59,130,246,0)", "rgba(59,130,246,0.3)", "rgba(59,130,246,0.3)", "rgba(59,130,246,0)"], boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 30px rgba(59,130,246,0.15)", "0 0 30px rgba(59,130,246,0.15)", "0 0 0px rgba(59,130,246,0)"] }} 
             transition={{ duration: 6, times: [0, 0.3, 0.7, 1], repeat: Infinity, ease: "backOut" }} 
             className="absolute top-0 w-full bg-[#1a1a1a] rounded-xl p-5 border shadow-xl z-10"
           >
             <motion.div 
               animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 6, times: [0, 0.3, 0.7, 1], repeat: Infinity }}
               className="absolute -top-3 -right-3 bg-blue-500 text-white font-bold text-[10px] px-3 py-1 rounded-full shadow-lg"
             >
               #1 RANKING
             </motion.div>
             <div className="flex items-center gap-2 mb-3">
               <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500"><div className="w-3 h-3"><ServiceIcon name="zap" /></div></div>
               <div className="w-1/4 h-2 bg-blue-400 rounded" />
             </div>
             <div className="w-full h-4 bg-white rounded mb-3" />
             <div className="w-5/6 h-2 bg-white/50 rounded mb-1.5" />
             <div className="w-4/6 h-2 bg-white/50 rounded" />
           </motion.div>
        </div>

      </div>
    </div>
  );
}

/* ─── 3. Automations Graphic ─── */
function AutomationsMiddleGraphic() {
  return (
    <div className="relative w-full h-full min-h-[350px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent opacity-80" />
      
      <div className="relative w-full max-w-2xl z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4 md:px-12 py-12">
        
        {/* Node 1: Lead */}
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring" }} viewport={{ once: true }} className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-[#111] border border-white/20 rounded-xl flex items-center justify-center text-white/50 relative">
            <div className="w-6 h-6"><ServiceIcon name="user" /></div>
            <motion.div animate={{ scale: [1, 1.5], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-white/20 rounded-xl -z-10" />
          </div>
          <span className="text-[10px] text-white/50 uppercase tracking-widest font-mono">New Lead</span>
        </motion.div>

        {/* Lines & Data Packets */}
        <div className="hidden md:block absolute left-[12%] right-[12%] top-[40%] h-px bg-white/10 z-0">
           {/* Top Branch */}
           <motion.div className="absolute w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_#a855f7]" animate={{ left: ["0%", "50%", "100%"], top: ["0px", "0px", "-40px"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
           {/* Bottom Branch */}
           <motion.div className="absolute w-2 h-2 bg-sumac-brandy rounded-full shadow-[0_0_10px_#882F18]" animate={{ left: ["0%", "50%", "100%"], top: ["0px", "0px", "40px"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }} />
        </div>

        {/* Center Node: CRM */}
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", delay: 0.3 }} viewport={{ once: true }} className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-16 h-16 bg-[#1a1a1a] border border-purple-500/50 rounded-2xl flex items-center justify-center text-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <div className="w-7 h-7"><ServiceIcon name="database" /></div>
          </div>
          <span className="text-[10px] text-purple-400 uppercase tracking-widest font-mono font-bold">Auto-Sync</span>
        </motion.div>

        {/* Right Nodes: Actions */}
        <div className="flex flex-col gap-6 relative z-10">
          <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="flex items-center gap-3 bg-[#111] border border-white/10 px-4 py-3 rounded-xl transform md:-translate-y-4">
            <div className="text-purple-400"><div className="w-5 h-5"><ServiceIcon name="message-square" /></div></div>
            <div className="text-[11px] font-bold text-white uppercase tracking-wider">Send SMS</div>
          </motion.div>

          <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }} className="flex items-center gap-3 bg-[#111] border border-white/10 px-4 py-3 rounded-xl transform md:translate-y-4">
            <div className="text-sumac-brandy"><div className="w-5 h-5"><ServiceIcon name="zap" /></div></div>
            <div className="text-[11px] font-bold text-white uppercase tracking-wider">Notify Team</div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

/* ─── 4. Web Design Graphic ─── */
function WebDesignMiddleGraphic() {
  return (
    <div className="relative w-full h-full min-h-[350px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sumac-brandy/15 via-transparent to-transparent opacity-80" />
      
      {/* Abstract Conversion Funnel / Data Flow */}
      <div className="relative w-full max-w-lg z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4 md:px-0 py-12">
        
        {/* Step 1 */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, type: "spring", stiffness: 100 }} className="flex flex-col items-center gap-3 w-full md:w-auto">
          <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-lg">
            <div className="text-white/40 w-8 h-8 flex items-center justify-center"><ServiceIcon name="users" /></div>
            <motion.div className="absolute -top-1 -right-1 w-3 h-3 bg-sumac-brandy rounded-full" animate={{ scale: [1, 2], opacity: [1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Local Traffic</span>
        </motion.div>

        {/* Arrow 1 */}
        <div className="hidden md:flex relative flex-1 items-center justify-center min-w-[60px]">
          <div className="w-full h-[2px] bg-white/5 rounded-full" />
          <motion.div className="absolute left-0 w-2 h-2 rounded-full bg-sumac-brandy shadow-[0_0_10px_#882F18]" animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {/* Step 2 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }} className="relative w-full md:w-auto">
          <div className="bg-[#111] border border-sumac-brandy/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(136,47,24,0.15)] flex flex-col items-center">
            <div className="w-12 h-12 bg-sumac-brandy/10 rounded-xl flex items-center justify-center mb-3 border border-sumac-brandy/20">
              <div className="text-sumac-brandy w-6 h-6 flex items-center justify-center"><ServiceIcon name="zap" /></div>
            </div>
            <div className="text-white font-bold text-sm mb-1 whitespace-nowrap">Built to Convert</div>
            <div className="flex gap-1">
               {[1, 2, 3, 4, 5].map((i) => <svg key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
          </div>
        </motion.div>

        {/* Arrow 2 */}
        <div className="hidden md:flex relative flex-1 items-center justify-center min-w-[60px]">
          <div className="w-full h-[2px] bg-white/5 rounded-full" />
          <motion.div className={`absolute left-0 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]`} animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }} />
        </div>

        {/* Step 3 */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }} className="flex flex-col items-center gap-3 w-full md:w-auto">
          <div className={`relative w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center shadow-lg`}>
            <div className={`text-green-500 w-8 h-8 flex items-center justify-center`}><ServiceIcon name="target" /></div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1, bounce: 0.6 }} className={`absolute -top-2 -right-2 bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full`}>
              +1
            </motion.div>
          </div>
          <span className={`text-[10px] font-mono uppercase tracking-widest text-green-500/70`}>New Lead</span>
        </motion.div>
      </div>
    </div>
  );
}

export function BuiltToConvertGraphic({ slug }: { slug: string }) {
  if (slug === "google-business-profile") return <GbpMiddleGraphic />;
  if (slug === "ai-seo") return <SeoMiddleGraphic />;
  if (slug === "automations") return <AutomationsMiddleGraphic />;
  return <WebDesignMiddleGraphic />;
}
