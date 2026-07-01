"use client";

import Header from "@/components/layout/Header";
import BackButton from "@/components/ui/BackButton";

import { FlipText } from "@/components/ui/FlipText";
import Script from "next/script";

export default function ThankYouPage() {
 return (
 <div className="flex flex-col min-h-screen bg-sumac-dark text-white">
 <Header />
 <main className="flex-1 w-full pt-40 md:pt-56 pb-20 relative overflow-hidden">
 <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
 <div className="w-full flex justify-start mb-6">
 <BackButton />
 </div>
 <div className="text-center mb-10">
 <h1 className="text-4xl md:text-6xl font-bold font-sans mb-4 tracking-tight">
 <FlipText text="Free Strategy Call." delay={0.02} /> <br className="hidden md:block"/>
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sumac-brandy to-[#7cff67]">Let&apos;s automate your growth.</span>
 </h1>
 </div>

 <div className="w-full bg-white/[0.02] border border-white/[0.06] p-6 md:p-8 rounded-2xl mb-12">
 <div className="text-center mb-8">
 <h2 className="text-xl font-bold font-sans mb-3">The next step is a <span className="text-sumac-brandy">free</span> strategy call.</h2>
 <p className="text-white/40 font-body text-sm">Discuss your goals and see how a custom system can solve your current bottlenecks. No commitment required.</p>
 </div>
 
 {/* Calendly Embed */}
 <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative z-10 p-2 md:p-4">
   <div className="calendly-inline-widget" data-url="https://calendly.com/hello-sumac/free-systems-audit?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
   <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
 </div>
 </div>

 <div className="w-full mt-16">
 <h3 className="text-sm md:text-base font-mono tracking-[0.2em] text-sumac-brandy uppercase text-center mb-10 font-bold">What happens before we speak</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-white/[0.04] p-8 md:p-10 rounded-2xl border border-white/10 hover:border-sumac-brandy/30 transition-all duration-500 shadow-2xl relative overflow-hidden group">
 <div className="absolute top-0 right-0 pt-4 pr-6 text-white/[0.03] font-mono text-8xl font-bold group-hover:text-sumac-brandy/10 transition-colors duration-500 pointer-events-none select-none">01</div>
 <div className="text-sumac-brandy font-mono text-base font-bold mb-4 relative z-10 tracking-widest">STEP 01</div>
 <h4 className="text-xl md:text-2xl font-bold font-sans mb-3 text-white relative z-10">The Audit</h4>
 <p className="text-white/60 text-base leading-relaxed font-body relative z-10">We review your current digital footprint to see where you are losing traction and where AI search optimization can give you an immediate edge.</p>
 </div>
 <div className="bg-white/[0.04] p-8 md:p-10 rounded-2xl border border-white/10 hover:border-[#7cff67]/30 transition-all duration-500 shadow-2xl relative overflow-hidden group">
 <div className="absolute top-0 right-0 pt-4 pr-6 text-white/[0.03] font-mono text-8xl font-bold group-hover:text-[#7cff67]/10 transition-colors duration-500 pointer-events-none select-none">02</div>
 <div className="text-[#7cff67] font-mono text-base font-bold mb-4 relative z-10 tracking-widest">STEP 02</div>
 <h4 className="text-xl md:text-2xl font-bold font-sans mb-3 text-white relative z-10">The Strategy</h4>
 <p className="text-white/60 text-base leading-relaxed font-body relative z-10">We come to the call with a clear idea of the structure, brand requirements, and automation sequences needed to move your business forward.</p>
 </div>
 </div>
 </div>
 </div>
 </main>
 </div>
 );
}
