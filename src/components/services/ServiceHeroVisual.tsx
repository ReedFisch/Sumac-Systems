"use client";

import React from "react";
import { motion } from "motion/react";

/* ─── Web Design Visual ─── */
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
        className="relative w-[85%] bg-[#1a1a1a] rounded-xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden z-10"
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
        <div className="p-4 space-y-3 bg-[#0d0d0d]">
          <div className="h-8 w-3/4 bg-white/[0.06] rounded-lg" />
          <div className="h-3 w-full bg-white/[0.04] rounded" />
          <div className="h-3 w-5/6 bg-white/[0.04] rounded" />
          <div className="flex gap-2 mt-4">
            <div className="h-8 w-28 bg-sumac-brandy/30 rounded-full" />
            <div className="h-8 w-24 bg-white/[0.06] rounded-full" />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="h-16 bg-white/[0.03] rounded-lg border border-white/[0.06]" />
            <div className="h-16 bg-white/[0.03] rounded-lg border border-white/[0.06]" />
            <div className="h-16 bg-white/[0.03] rounded-lg border border-white/[0.06]" />
          </div>
        </div>
      </motion.div>

      {/* Performance Score Card */}
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100, damping: 18 }}
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
        transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 100, damping: 18 }}
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

/* ─── AI SEO Visual ─── */
function AiSeoVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-sumac-brandy/15 via-transparent to-transparent rounded-3xl blur-xl" />

      {/* Search bar container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-[88%] z-10"
      >
        {/* Google-style search box */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div className="text-gray-800 text-sm font-medium">roofer near me</div>
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-0.5 h-5 bg-sumac-brandy"
            />
          </div>

          {/* Search results */}
          <div className="space-y-3 border-t border-gray-100 pt-3">
            {/* #1 Result (highlighted) */}
            <div className="flex items-start gap-3 bg-green-50 rounded-lg p-2.5 border border-green-200/60">
              <div className="w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">1</div>
              <div>
                <div className="text-sm font-bold text-gray-900">Your Business Name</div>
                <div className="text-[10px] text-green-600 font-medium">yourbusiness.com</div>
                <div className="text-[10px] text-gray-500 mt-0.5">★★★★★ 4.9 (87 reviews)</div>
              </div>
            </div>
            {/* Dimmed competitors */}
            <div className="flex items-start gap-3 opacity-40 p-2.5">
              <div className="w-5 h-5 rounded-full bg-gray-300 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">2</div>
              <div>
                <div className="text-xs text-gray-500">competitor-a.com</div>
                <div className="text-[10px] text-gray-400">★★★★ 4.2</div>
              </div>
            </div>
            <div className="flex items-start gap-3 opacity-25 p-2.5">
              <div className="w-5 h-5 rounded-full bg-gray-300 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">3</div>
              <div>
                <div className="text-xs text-gray-500">competitor-b.com</div>
                <div className="text-[10px] text-gray-400">★★★ 3.8</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* #1 Ranking floating tag */}
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute -right-2 md:-right-5 top-[8%] bg-white rounded-xl p-3 shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-20 font-sans flex items-center gap-2"
      >
        <div className="w-9 h-9 rounded-full bg-sumac-brandy/10 flex items-center justify-center">
          <svg className="w-5 h-5 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div>
          <div className="text-gray-900 font-bold text-xs">#1 Ranking</div>
          <div className="text-green-500 text-[10px] font-medium">↑ 14 positions</div>
        </div>
      </motion.div>

      {/* Organic traffic chip */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.3, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute -left-2 md:-left-5 bottom-[10%] bg-white rounded-xl p-3 shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-20 font-sans"
      >
        <div className="text-gray-900 font-bold text-xs mb-1">Organic Traffic</div>
        <div className="flex items-end gap-1 h-8">
          {[20, 30, 25, 45, 55, 50, 70, 85].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.5, delay: 1.5 + i * 0.08 }}
              className="w-2.5 bg-sumac-brandy/70 rounded-sm"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Google Business Profile Visual ─── */
function GbpVisual() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-sumac-brandy/15 via-transparent to-transparent rounded-3xl blur-xl" />

      {/* Map mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-[85%] bg-[#1e1e1e] rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden z-10"
      >
        {/* Map background with grid */}
        <div className="relative aspect-[4/3] bg-[#1a1a2e]">
          {/* Stylized map grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          {/* "Streets" */}
          <div className="absolute top-[40%] left-0 right-0 h-[2px] bg-white/10" />
          <div className="absolute top-0 bottom-0 left-[35%] w-[2px] bg-white/10" />
          <div className="absolute top-0 bottom-0 left-[65%] w-[2px] bg-white/10" />
          <div className="absolute top-[70%] left-0 right-0 h-[2px] bg-white/10" />

          {/* Your pin (prominent) */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 200, damping: 15 }}
            className="absolute top-[30%] left-[45%] -translate-x-1/2 z-20"
          >
            <div className="relative">
              <svg className="w-10 h-14 text-sumac-brandy drop-shadow-lg" viewBox="0 0 24 32" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
              </svg>
              {/* Pulse ring */}
              <motion.div
                animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sumac-brandy"
              />
            </div>
          </motion.div>

          {/* Dimmed competitor pins */}
          <div className="absolute top-[55%] left-[25%] w-3 h-3 rounded-full bg-gray-500/40 border border-gray-500/60" />
          <div className="absolute top-[20%] left-[70%] w-3 h-3 rounded-full bg-gray-500/40 border border-gray-500/60" />
          <div className="absolute top-[65%] left-[60%] w-3 h-3 rounded-full bg-gray-500/40 border border-gray-500/60" />
        </div>
      </motion.div>

      {/* 5-star review card */}
      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute -right-2 md:-right-5 top-[8%] bg-white rounded-xl p-3 shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-20 font-sans"
      >
        <div className="flex gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="text-gray-900 font-bold text-xs">5.0 (124 reviews)</div>
        <div className="text-green-500 text-[10px] font-medium mt-0.5">Verified Business</div>
      </motion.div>

      {/* Open Now badge */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.3, type: "spring", stiffness: 100, damping: 18 }}
        className="absolute -left-2 md:-left-5 bottom-[12%] bg-white rounded-xl p-3 shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-20 font-sans flex items-center gap-2.5"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
        <div>
          <div className="text-gray-900 font-bold text-xs">Open Now</div>
          <div className="text-gray-400 text-[10px]">Closes 6:00 PM</div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Automations Visual ─── */
function AutomationsVisual() {
  const nodes = [
    { label: "New Lead", x: "8%", y: "20%", icon: "user" },
    { label: "CRM Saved", x: "38%", y: "10%", icon: "database" },
    { label: "Auto SMS", x: "68%", y: "20%", icon: "message" },
    { label: "Review Ask", x: "38%", y: "65%", icon: "star" },
  ];

  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-sumac-brandy/15 via-transparent to-transparent rounded-3xl blur-xl" />

      <div className="relative w-[90%] h-full z-10">
        {/* Connection lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 300">
          {/* Lines between nodes */}
          <motion.line
            x1="65" y1="75" x2="180" y2="50"
            stroke="rgba(136, 47, 24, 0.4)" strokeWidth="2" strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          <motion.line
            x1="200" y1="50" x2="310" y2="75"
            stroke="rgba(136, 47, 24, 0.4)" strokeWidth="2" strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          />
          <motion.line
            x1="310" y1="95" x2="200" y2="210"
            stroke="rgba(136, 47, 24, 0.4)" strokeWidth="2" strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          />
          <motion.line
            x1="180" y1="210" x2="65" y2="95"
            stroke="rgba(136, 47, 24, 0.4)" strokeWidth="2" strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          />

          {/* Animated data dots traveling along paths */}
          <motion.circle r="3" fill="#882F18"
            animate={{ cx: [65, 180], cy: [75, 50], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2, repeatDelay: 1 }}
          />
          <motion.circle r="3" fill="#882F18"
            animate={{ cx: [200, 310], cy: [50, 75], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2.5, repeatDelay: 1 }}
          />
          <motion.circle r="3" fill="#882F18"
            animate={{ cx: [310, 200], cy: [95, 210], opacity: [1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 3, repeatDelay: 1 }}
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.2, type: "spring", stiffness: 150, damping: 15 }}
            className="absolute z-10"
            style={{ left: node.x, top: node.y }}
          >
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/[0.12] rounded-2xl p-4 flex flex-col items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:border-sumac-brandy/40 transition-colors min-w-[90px]">
              <div className="w-10 h-10 rounded-full bg-sumac-brandy/15 border border-sumac-brandy/30 flex items-center justify-center">
                {node.icon === "user" && (
                  <svg className="w-5 h-5 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
                {node.icon === "database" && (
                  <svg className="w-5 h-5 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                )}
                {node.icon === "message" && (
                  <svg className="w-5 h-5 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                )}
                {node.icon === "star" && (
                  <svg className="w-5 h-5 text-sumac-brandy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )}
              </div>
              <span className="text-white/80 text-[11px] font-medium whitespace-nowrap">{node.label}</span>
            </div>
          </motion.div>
        ))}

        {/* "Automated" status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="absolute bottom-[5%] right-[5%] bg-white rounded-xl p-3 shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-20 font-sans flex items-center gap-2"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <div className="text-gray-900 font-bold text-xs">All Systems Active</div>
        </motion.div>
      </div>
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
