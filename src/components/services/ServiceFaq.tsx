"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ServiceFaq({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`rounded-2xl border transition-all duration-500 ${
              isOpen
                ? "bg-white/[0.04] border-sumac-brandy/30 shadow-[0_0_30px_rgba(136,47,24,0.08)]"
                : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.03]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left cursor-pointer"
            >
              <div className="flex items-center gap-4 md:gap-5 min-w-0">
                <span
                  className={`font-mono text-[11px] tracking-[0.15em] shrink-0 transition-colors duration-300 ${
                    isOpen ? "text-sumac-brandy" : "text-white/20"
                  }`}
                >
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <h3
                  className={`text-base md:text-lg font-semibold tracking-tight transition-colors duration-300 ${
                    isOpen ? "text-white" : "text-white/60"
                  }`}
                >
                  {faq.question}
                </h3>
              </div>
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${
                  isOpen
                    ? "border-sumac-brandy/50 bg-sumac-brandy/15 text-sumac-brandy rotate-45"
                    : "border-white/10 text-white/25"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[3.25rem] md:pl-[4.25rem]">
                    <p className="text-white/50 font-body text-[15px] md:text-base leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
