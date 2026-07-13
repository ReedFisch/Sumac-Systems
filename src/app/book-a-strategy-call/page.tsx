"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import { CalendlyInlineWidget } from "@/components/scheduling/CalendlyWidget";

export default function BookStrategyCallPage() {
  return (
    <div className="flex flex-col min-h-screen bg-sumac-dark text-white">
      <Header />
      <main className="flex-1 w-full pt-[calc(env(safe-area-inset-top,0px)+var(--site-header-h)+1.5rem)] md:pt-56 pb-16 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 relative z-10 flex flex-col">
          <div className="mb-6">
            <BackButton />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold font-sans mb-3 tracking-tight text-balance">
              Pick a time to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sumac-brandy to-[#7cff67]">talk strategy</span>
            </h1>
            <p className="text-white/50 font-body text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Choose a slot 1-2 business days out. We&apos;ll review your business before the call so we can talk specifics.
            </p>
          </div>

          <div className="w-full bg-white/[0.02] border border-white/[0.06] p-4 md:p-8 rounded-2xl">
            <div className="w-full bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden p-2 md:p-4">
              <CalendlyInlineWidget />
            </div>
          </div>

          <div className="w-full mt-12 md:mt-16">
            <h2 className="text-xs md:text-sm font-mono tracking-[0.2em] text-sumac-brandy uppercase text-center mb-6 font-bold">Before we speak</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/[0.04] p-6 md:p-8 rounded-2xl border border-white/10">
                <p className="text-sumac-brandy font-mono text-[10px] font-bold mb-3 tracking-widest">STEP 01</p>
                <h3 className="text-lg font-bold font-sans mb-2 text-white">The Audit</h3>
                <p className="text-white/55 text-sm leading-relaxed font-body">We review your current digital footprint and where you are losing traction.</p>
              </div>
              <div className="bg-white/[0.04] p-6 md:p-8 rounded-2xl border border-white/10">
                <p className="text-[#7cff67] font-mono text-[10px] font-bold mb-3 tracking-widest">STEP 02</p>
                <h3 className="text-lg font-bold font-sans mb-2 text-white">The Strategy</h3>
                <p className="text-white/55 text-sm leading-relaxed font-body">We come prepared with a clear plan for your site, search visibility, and automations.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
