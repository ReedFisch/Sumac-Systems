"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import BlurText from "@/components/ui/BlurText/BlurText";
import "./revenue-calculator.css";

/* ── Types ── */
interface FormData {
  firstName: string;
  trade: string;
  monthlyEnquiries: number;
  avgJobValue: number;
  answerRate: number;
  closeRate: number;
  hasWebsite: boolean | null;
  isTopRanked: boolean | null;
}

const TRADES = [
  "Plumbing",
  "HVAC",
  "Roofing",
  "Landscaping",
  "Electrical",
  "General Contracting",
  "Painting",
  "Pest Control",
  "Cleaning Services",
  "Pool Services",
  "Fencing",
  "Pressure Washing",
  "Concrete / Masonry",
  "Tree Service",
  "Other",
];

const USD = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);

/* ── Animated counter ── */
function AnimatedNumber({ value, className }: { value: number; className?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = React.useRef<number | null>(null);

  React.useEffect(() => {
    const start = display;
    const diff = value - start;
    const duration = 800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) ref.current = requestAnimationFrame(tick);
    };

    ref.current = requestAnimationFrame(tick);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return <span className={className}>{USD(display)}</span>;
}

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════ */
export default function RevenueCalculator() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    firstName: "",
    trade: "",
    monthlyEnquiries: 85,
    avgJobValue: 2800,
    answerRate: 50,
    closeRate: 20,
    hasWebsite: null,
    isTopRanked: null,
  });

  const update = useCallback(
    <K extends keyof FormData>(key: K, value: FormData[K]) =>
      setData((prev) => ({ ...prev, [key]: value })),
    []
  );

  /* ── Calculations ── */
  const calcs = useMemo(() => {
    const { monthlyEnquiries, answerRate, closeRate, avgJobValue } = data;
    const missedPerMonth = monthlyEnquiries * (1 - answerRate / 100);
    const missedJobsPerMonth = missedPerMonth * (closeRate / 100);
    const annualLoss = missedJobsPerMonth * avgJobValue * 12;

    // Missed-call recovery: assume 60% of missed calls get recovered with automation
    const callRecoveryAnnual = missedPerMonth * 0.6 * (closeRate / 100) * avgJobValue * 12;

    // Website tightening: 12% more booked jobs from a properly built site
    const websiteBoostAnnual = monthlyEnquiries * (answerRate / 100) * (closeRate / 100) * avgJobValue * 0.12 * 12;

    // Local Search & AI Optimization: Rank top 3 to capture the 27.6% of traffic that goes to the #1 spot
    const seoBoostAnnual = monthlyEnquiries * 0.276 * (answerRate / 100) * (closeRate / 100) * avgJobValue * 12;

    const totalRecoverable = callRecoveryAnnual + websiteBoostAnnual + seoBoostAnnual;
    const threeYearLoss = annualLoss * 3;

    return {
      missedPerMonth: Math.round(missedPerMonth),
      annualLoss: Math.round(annualLoss),
      callRecoveryAnnual: Math.round(callRecoveryAnnual),
      websiteBoostAnnual: Math.round(websiteBoostAnnual),
      seoBoostAnnual: Math.round(seoBoostAnnual),
      totalRecoverable: Math.round(totalRecoverable),
      threeYearLoss: Math.round(threeYearLoss),
    };
  }, [data]);

  /* ── Step validation ── */
  const canProceedStep1 = data.firstName.trim() !== "" && data.trade !== "";
  const canProceedStep2 = data.hasWebsite !== null && data.isTopRanked !== null;

  /* ── Transition config ── */
  const stepVariants = {
    initial: { opacity: 0, y: 30, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
    exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.25 } },
  };

  return (
    <section id="contact" className="py-28 md:py-40 relative bg-sumac-dark overflow-hidden">
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 mb-12 relative z-10">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`calc-progress-dot ${s === step ? "active" : ""} ${s < step ? "done" : ""}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 w-full">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <StepOne data={data} update={update} onContinue={() => setStep(2)} canProceed={canProceedStep1} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="step2" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <StepTwo data={data} update={update} onContinue={() => setStep(3)} onBack={() => setStep(1)} canProceed={canProceedStep2} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="step3" variants={stepVariants} initial="initial" animate="animate" exit="exit">
              <StepThree data={data} calcs={calcs} onBack={() => setStep(2)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════
   STEP 1 — DATA ENTRY
   ════════════════════════════════════════════════════════ */
function StepOne({
  data,
  update,
  onContinue,
  canProceed,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  onContinue: () => void;
  canProceed: boolean;
}) {
  return (
    <div>
      <div className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-white leading-[1.1] mb-4">
        <BlurText text="Find the revenue your setup leaves behind." delay={40} animateBy="words" direction="bottom" />
      </div>
      <p className="text-white/40 font-body text-lg mb-10">
        Use a few real numbers to estimate what missed calls and weak visibility may be costing you.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">What&apos;s your first name?</label>
          <input
            id="firstName"
            type="text"
            value={data.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="e.g. Marcus"
            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:border-sumac-brandy/50 focus:ring-1 focus:ring-sumac-brandy/30 transition-all placeholder:text-white/50"
          />
        </div>

        <div>
          <label htmlFor="trade" className="block text-sm font-semibold text-white mb-2">Your industry / trade</label>
          <select
            id="trade"
            value={data.trade}
            onChange={(e) => update("trade", e.target.value)}
            className="calc-select w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:border-sumac-brandy/50 focus:ring-1 focus:ring-sumac-brandy/30 transition-all"
          >
            <option value="" disabled className="bg-[#1a1a1a]">
              Select your trade
            </option>
            {TRADES.map((t) => (
              <option key={t} value={t} className="bg-[#1a1a1a]">
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="monthlyEnquiries" className="block text-sm font-semibold text-white mb-2">Roughly how many new enquiries do you get a month?</label>
          <input
            id="monthlyEnquiries"
            type="number"
            value={data.monthlyEnquiries || ""}
            onChange={(e) => update("monthlyEnquiries", e.target.value === "" ? 0 : Number(e.target.value))}
            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:border-sumac-brandy/50 focus:ring-1 focus:ring-sumac-brandy/30 transition-all"
          />
        </div>

        <div>
          <label htmlFor="avgJobValue" className="block text-sm font-semibold text-white mb-2">What is an average job worth to you? ($)</label>
          <input
            id="avgJobValue"
            type="number"
            value={data.avgJobValue || ""}
            onChange={(e) => update("avgJobValue", e.target.value === "" ? 0 : Number(e.target.value))}
            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:border-sumac-brandy/50 focus:ring-1 focus:ring-sumac-brandy/30 transition-all"
          />
        </div>
      </div>

      <button
        onClick={onContinue}
        disabled={!canProceed}
        className="mt-10 w-full py-4 bg-white text-black font-bold text-base tracking-wider rounded-full hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none"
      >
        Continue →
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   STEP 2 — REALITY CHECK
   ════════════════════════════════════════════════════════ */
function StepTwo({
  data,
  update,
  onContinue,
  onBack,
  canProceed,
}: {
  data: FormData;
  update: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  onContinue: () => void;
  onBack: () => void;
  canProceed: boolean;
}) {
  const sliderBg = (value: number) =>
    `linear-gradient(to right, #882F18 0%, #882F18 ${value}%, rgba(255,255,255,0.1) ${value}%, rgba(255,255,255,0.1) 100%)`;

  return (
    <div>
      <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-white leading-[1.1] mb-2">
        Your current numbers
      </h2>
      <p className="text-white/40 font-body text-base mb-10">
        Estimates are fine. Use your usual month as the baseline.
      </p>

      {/* Answer rate slider */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-white mb-1">What percentage of calls do you usually answer?</p>
        <p className="text-sumac-brandy font-bold text-lg mb-3">You answer {data.answerRate}% of calls</p>
        <input
          id="answerRate"
          aria-label="Percentage of calls answered"
          type="range"
          min={10}
          max={100}
          value={data.answerRate}
          onChange={(e) => update("answerRate", Number(e.target.value))}
          className="calc-slider"
          style={{ background: sliderBg(data.answerRate) }}
        />
        <div className="flex justify-between text-xs text-white/50 mt-2">
          <span>Miss most</span>
          <span>Catch all</span>
        </div>
      </div>

      {/* Close rate slider */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-white mb-1">How often does a quote turn into a booked job?</p>
        <p className="text-sumac-brandy font-bold text-lg mb-3">You close {data.closeRate}% of quotes</p>
        <input
          id="closeRate"
          aria-label="Quote close rate"
          type="range"
          min={5}
          max={100}
          value={data.closeRate}
          onChange={(e) => update("closeRate", Number(e.target.value))}
          className="calc-slider"
          style={{ background: sliderBg(data.closeRate) }}
        />
        <div className="flex justify-between text-xs text-white/50 mt-2">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Has website */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-white mb-3">Do you have a modern, professional website?</p>
        <div className="flex gap-3">
          <button
            onClick={() => update("hasWebsite", true)}
            className={`calc-toggle ${data.hasWebsite === true ? "active" : ""}`}
          >
            Yes
          </button>
          <button
            onClick={() => update("hasWebsite", false)}
            className={`calc-toggle ${data.hasWebsite === false ? "active" : ""}`}
          >
            No
          </button>
        </div>
      </div>

      {/* Is top ranked */}
      <div className="mb-8">
        <p className="text-sm font-semibold text-white mb-3">Are you currently ranking in the top 3 on Google and ChatGPT for local searches?</p>
        <div className="flex gap-3">
          <button
            onClick={() => update("isTopRanked", true)}
            className={`calc-toggle ${data.isTopRanked === true ? "active" : ""}`}
          >
            Yes
          </button>
          <button
            onClick={() => update("isTopRanked", false)}
            className={`calc-toggle ${data.isTopRanked === false ? "active" : ""}`}
          >
            No
          </button>
        </div>
      </div>

      <button
        onClick={onContinue}
        disabled={!canProceed}
        className="mt-4 w-full py-4 bg-white text-black font-bold text-base tracking-wider rounded-full hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none"
      >
        Calculate my lost revenue →
      </button>

      <button
        onClick={onBack}
        className="mt-4 w-full py-3 text-white/45 text-sm hover:text-white/70 transition-colors"
      >
        ← Back
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   STEP 3 — THE REPORT
   ════════════════════════════════════════════════════════ */
function StepThree({
  data,
  calcs,
  onBack,
}: {
  data: FormData;
  calcs: {
    missedPerMonth: number;
    annualLoss: number;
    callRecoveryAnnual: number;
    websiteBoostAnnual: number;
    seoBoostAnnual: number;
    totalRecoverable: number;
    threeYearLoss: number;
  };
  onBack: () => void;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <span className="inline-block text-xs font-mono tracking-[0.2em] text-white/30 uppercase mb-4">
        {data.firstName}&apos;s Revenue Report
      </span>
      <h2 className="text-3xl md:text-5xl font-sans font-semibold tracking-tight text-white leading-[1.1] mb-2">
        <span className="capitalize">{data.firstName}</span>, here is the estimate.
      </h2>
      <p className="text-white/40 font-body text-sm mb-6">
        Based on roughly {calcs.missedPerMonth} missed leads each month.
      </p>

      {/* Big loss number */}
      <div className="mb-3">
        <AnimatedNumber
          value={calcs.annualLoss}
          className="text-5xl md:text-7xl font-sans font-bold text-[#e65a5a] tracking-tight calc-big-number inline-block"
        />
      </div>
      <p className="text-white/50 font-body text-base mb-2">
        lost to competitors <span className="text-white font-semibold">every year</span>
      </p>
      <p className="text-white/25 font-mono text-xs mb-10">
        {data.monthlyEnquiries} enquiries × {100 - data.answerRate}% missed × {data.closeRate}% close rate × {USD(data.avgJobValue)} per job
      </p>

      {/* Warning callout */}
      {data.isTopRanked === false && (
        <div className="calc-warning mb-8">
          <span className="text-[#FFB400] text-lg mt-0.5">⚠</span>
          <p className="text-white/60 text-sm font-body leading-relaxed">
            You&apos;re not ranking in the top 3 on Google. That leaves a sizable share of high-intent local searches to competitors.
          </p>
        </div>
      )}

      {/* Breakdown cards */}
      <div className="space-y-4 mb-12">
        {/* Missed-call recovery */}
        <div className="calc-report-card">
          <div className="flex items-start gap-4">
            <div className="calc-report-card-icon bg-[#a1c468]/20 text-[#a1c468] mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
            </div>
            <div>
              <p className="text-white font-semibold text-base mb-1">Missed-call follow-up</p>
              <p className="text-white/50 font-body text-base leading-relaxed">
                An automated text can respond while the customer is still looking for help. Estimated annual opportunity: <span className="text-white font-semibold">{USD(calcs.callRecoveryAnnual)}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Website as the hub */}
        <div className="calc-report-card">
          <div className="flex items-start gap-4">
            <div className="calc-report-card-icon bg-[#a1c468]/20 text-[#a1c468] mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div>
              <p className="text-white font-semibold text-base mb-1">Website conversion</p>
              <p className="text-white/50 font-body text-base leading-relaxed">
                {data.hasWebsite
                  ? "Your site should answer the right questions and make it easy to get in touch."
                  : "When customers cannot find a clear site, it is harder to earn their trust."
                }{" "}
                Estimated annual opportunity: <span className="text-white font-semibold">{USD(calcs.websiteBoostAnnual)}</span>
              </p>
            </div>
          </div>
        </div>

        {/* SEO visibility */}
        <div className="calc-report-card">
          <div className="flex items-start gap-4">
            <div className="calc-report-card-icon bg-[#a1c468]/20 text-[#a1c468] mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>
            </div>
            <div>
              <p className="text-white font-semibold text-base mb-1">AI & SEO Visibility</p>
              <p className="text-white/50 font-body text-base leading-relaxed">
                Higher local visibility puts your business in front of more people ready to hire. Estimated annual opportunity: <span className="text-white font-semibold">{USD(calcs.seoBoostAnnual)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery block */}
      <div className="calc-recovery-block mb-6">
        <p className="text-xs font-mono tracking-[0.2em] text-[#a1c468] uppercase mb-3">
          Estimated annual opportunity
        </p>
        <AnimatedNumber
          value={calcs.totalRecoverable}
          className="text-4xl md:text-6xl font-sans font-bold text-[#a1c468] tracking-tight inline-block"
        />
        <p className="text-white/40 font-body text-sm mt-3">
          across missed-call follow-up, website conversion, and search visibility
        </p>
      </div>

      {/* 3-year loss block */}
      <div className="calc-loss-block mb-12">
        <p className="text-xs font-mono tracking-[0.2em] text-white/25 uppercase mb-3">
          If nothing changes over 3 years
        </p>
        <AnimatedNumber
          value={calcs.threeYearLoss}
          className="text-4xl md:text-6xl font-sans font-bold text-[#e65a5a] tracking-tight inline-block"
        />
        <p className="text-white/30 font-body text-sm mt-3">
          based on the numbers above
        </p>
      </div>

      {/* Final CTA */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-sans font-semibold text-white tracking-tight leading-snug mb-3">
          See what is worth fixing first.
        </h3>
        <p className="text-white/40 font-body text-sm mb-8">
          Book a free audit and we&apos;ll walk through the highest-impact fixes for your business.
        </p>
        <a
          href="https://www.sumac.systems/thank-you"
          data-analytics-event="booking_click"
          data-analytics-location="roi_calculator_results"
          data-analytics-label="Book my free systems audit"
          className="inline-block w-full py-4 bg-sumac-brandy text-white font-bold text-base tracking-wider rounded-full hover:brightness-110 transition-all shadow-[0_0_30px_rgba(136,47,24,0.35)] hover:shadow-[0_0_50px_rgba(136,47,24,0.5)] text-center"
        >
          Book my free systems audit →
        </a>
      </div>

      <button
        onClick={onBack}
        className="w-full py-3 text-white/30 text-sm hover:text-white/50 transition-colors"
      >
        ← Back
      </button>
    </div>
  );
}
