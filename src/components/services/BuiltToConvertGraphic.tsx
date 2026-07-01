"use client";

import React from "react";
import { motion } from "motion/react";
import { ServiceIcon } from "./ServiceIcons";

function FlowGraphic({
  step1,
  step2,
  step3,
}: {
  step1: { icon: React.ReactNode; label: string };
  step2: { icon: React.ReactNode; title: string; subtitle: React.ReactNode };
  step3: { icon: React.ReactNode; label: string; badgeText: string; badgeColor: string };
}) {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center bg-[#0a0a0a] overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sumac-brandy/15 via-transparent to-transparent opacity-80" />

      {/* Abstract Conversion Funnel / Data Flow */}
      <div className="relative w-full max-w-lg z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4 md:px-0">
        
        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center gap-3 w-full md:w-auto"
        >
          <div className="relative w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-lg">
            <div className="text-white/40 w-8 h-8">{step1.icon}</div>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-sumac-brandy rounded-full"
              animate={{ scale: [1, 2], opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">{step1.label}</span>
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

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative w-full md:w-auto"
        >
          <div className="bg-[#111] border border-sumac-brandy/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(136,47,24,0.15)] flex flex-col items-center">
            <div className="w-12 h-12 bg-sumac-brandy/10 rounded-xl flex items-center justify-center mb-3 border border-sumac-brandy/20">
              <div className="text-sumac-brandy w-6 h-6">{step2.icon}</div>
            </div>
            <div className="text-white font-bold text-sm mb-1 whitespace-nowrap">{step2.title}</div>
            <div className="flex gap-1">{step2.subtitle}</div>
          </div>
          <motion.div className="absolute -top-4 -right-4 w-2 h-2 bg-white/20 rounded-full" animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.div className="absolute -bottom-2 -left-3 w-1.5 h-1.5 bg-sumac-brandy/50 rounded-full" animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
        </motion.div>

        {/* Arrow 2 */}
        <div className="hidden md:flex relative flex-1 items-center justify-center min-w-[60px]">
          <div className="w-full h-[2px] bg-white/5 rounded-full" />
          <motion.div
            className={`absolute left-0 w-2 h-2 rounded-full ${step3.badgeColor.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`}
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
            style={{ color: step3.badgeColor === 'text-green-500' ? '#22c55e' : step3.badgeColor === 'text-blue-500' ? '#3b82f6' : '#882F18' }}
          />
        </div>

        {/* Step 3 */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
          className="flex flex-col items-center gap-3 w-full md:w-auto"
        >
          <div className={`relative w-16 h-16 rounded-2xl ${step3.badgeColor.replace('text-', 'bg-')}/10 border ${step3.badgeColor.replace('text-', 'border-')}/20 flex items-center justify-center shadow-lg`}>
            <div className={`${step3.badgeColor} w-8 h-8`}>{step3.icon}</div>
            <motion.div
              className={`absolute -top-2 -right-2 ${step3.badgeColor.replace('text-', 'bg-')} text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full`}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 1, bounce: 0.6 }}
            >
              {step3.badgeText}
            </motion.div>
          </div>
          <span className={`text-[10px] font-mono uppercase tracking-widest ${step3.badgeColor}/70`}>{step3.label}</span>
        </motion.div>
      </div>
    </div>
  );
}

const StarRating = () => (
  <>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </>
);

export function BuiltToConvertGraphic({ slug }: { slug: string }) {
  if (slug === "google-business-profile") {
    return (
      <FlowGraphic
        step1={{
          icon: <ServiceIcon name="map-pin" />,
          label: "Map Search",
        }}
        step2={{
          icon: <ServiceIcon name="star" />,
          title: "Optimized Profile",
          subtitle: <StarRating />,
        }}
        step3={{
          icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
          label: "Phone Call",
          badgeText: "+1",
          badgeColor: "text-green-500",
        }}
      />
    );
  }

  if (slug === "ai-seo") {
    return (
      <FlowGraphic
        step1={{
          icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
          label: "Google Search",
        }}
        step2={{
          icon: <ServiceIcon name="bar-chart" />,
          title: "Targeted SEO",
          subtitle: <span className="text-[9px] text-white/50 uppercase tracking-widest font-mono">Rank Climbing</span>,
        }}
        step3={{
          icon: <ServiceIcon name="users" />,
          label: "New Customer",
          badgeText: "NEW",
          badgeColor: "text-blue-500",
        }}
      />
    );
  }

  if (slug === "automations") {
    return (
      <FlowGraphic
        step1={{
          icon: <ServiceIcon name="users" />,
          label: "New Lead",
        }}
        step2={{
          icon: <ServiceIcon name="database" />,
          title: "CRM Sync",
          subtitle: <span className="text-[9px] text-white/50 uppercase tracking-widest font-mono">Automated</span>,
        }}
        step3={{
          icon: <ServiceIcon name="message-square" />,
          label: "Auto-Reply",
          badgeText: "SENT",
          badgeColor: "text-sumac-brandy",
        }}
      />
    );
  }

  // Default: Web Design
  return (
    <FlowGraphic
      step1={{
        icon: <ServiceIcon name="users" />,
        label: "Local Traffic",
      }}
      step2={{
        icon: <ServiceIcon name="zap" />,
        title: "Built to Convert",
        subtitle: <StarRating />,
      }}
      step3={{
        icon: <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
        label: "New Lead",
        badgeText: "+1",
        badgeColor: "text-green-500",
      }}
    />
  );
}
