"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  index: number;
  title: string;
  desc: string;
  items: string[];
}

export function Accordion({ items }: { items: Omit<AccordionItemProps, "index">[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-12 w-full">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const isLast = i === items.length - 1;
        return (
          <div
            key={i}
            className={`overflow-hidden ${isLast ? '' : 'border-b border-white/[0.06]'}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full py-8 md:py-10 flex items-center justify-between group text-left transition-colors hover:bg-white/[0.02] px-4 md:px-6 -mx-4 md:-mx-6 rounded-2xl"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span className={`font-mono text-sm tracking-widest transition-colors duration-500 ${isOpen ? 'text-sumac-brandy' : 'text-white/20 group-hover:text-sumac-brandy/60'}`}>
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <h3 className={`text-2xl md:text-3xl font-sans font-bold tracking-tight transition-all duration-500 ${isOpen ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}>
                  {item.title}
                </h3>
              </div>
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0 ${isOpen ? 'border-sumac-brandy bg-sumac-brandy/10 text-sumac-brandy rotate-45' : 'border-white/10 text-white/30 group-hover:border-white/30 group-hover:text-white'}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pb-10 pl-[4.5rem] md:pl-[6.5rem] pr-4 md:pr-12">
                    <p className="text-white/50 text-lg font-body mb-6 leading-relaxed max-w-3xl">
                      {item.desc}
                    </p>
                    <ul className="space-y-4">
                      {item.items.map((listItem, j) => (
                        <li key={j} className="flex items-start gap-4">
                          <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-sumac-brandy shrink-0" />
                          <span className="text-white/70 text-base leading-relaxed">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
