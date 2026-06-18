"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2.5, bounce: 0, ease: "easeInOut" as const },
        opacity: { duration: 0.5 }
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-sumac-dark text-white">
      <Header />
      <main className="flex-1 w-full flex items-center justify-center relative overflow-hidden pt-[280px] pb-10">
        {/* SVG Drawing Background Animation */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <motion.svg
            width="800"
            height="800"
            viewBox="0 0 800 800"
            initial="hidden"
            animate="visible"
            className="w-full max-w-[800px] h-auto"
          >
            {/* Abstract geometric branch structure representing architecture */}
            <motion.path
              d="M400,800 L400,500 L250,300 L250,150"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="2"
              variants={draw}
            />
            <motion.path
              d="M400,500 L550,350 L550,200 L650,100"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="2"
              variants={draw}
            />
            <motion.path
              d="M325,400 L200,450 L100,350"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="2"
              variants={draw}
            />
            <motion.path
              d="M475,425 L600,475 L700,400"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="2"
              variants={draw}
            />
          </motion.svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-6xl font-sans font-bold mb-6 tracking-tight">
              404 Error
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 font-body max-w-2xl leading-relaxed mb-12 mx-auto">
              Our server encountered an unexpected disconnect. We build resilient systems, which means our team is already tracking this error to reinforce the architecture and bring things back online.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
              <button 
                onClick={() => window.location.reload()}
                className="px-8 py-4 bg-white text-black rounded-sm font-bold text-lg tracking-wide hover:bg-white/90 transition-colors shadow-lg"
              >
                Refresh Page
              </button>
              <a 
                href="mailto:hello@sumac-systems.com"
                className="px-8 py-4 border border-white/30 text-white rounded-sm font-bold text-lg tracking-wide hover:bg-white/10 transition-colors text-center"
              >
                Email hello@sumac-systems.com
              </a>
            </div>

            <div className="max-w-xl p-6 bg-white/5 border border-white/10 rounded-sm mx-auto text-left">
              <p className="text-sm text-white/50 font-mono leading-relaxed text-center">
                <span className="text-white/80 font-bold">Help us patch this faster:</span> If you have a moment, please attach a quick screenshot of this error to your email. Seeing exactly what broke helps us diagnose the root cause immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
