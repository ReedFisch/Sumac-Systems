"use client";

import Header from "@/components/layout/Header";
import BackButton from "@/components/ui/BackButton";

import { FlipText } from "@/components/ui/FlipText";
import Script from "next/script";

export default function ThankYouPage() {
 return (
 <div className="flex flex-col min-h-screen bg-sumac-dark text-white">
 <Header />
 <main className="flex-1 w-full pt-32 md:pt-40 pb-20 relative overflow-hidden">
 <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
 <div className="w-full flex justify-start mb-6">
 <BackButton />
 </div>
 <div className="text-center mb-10">
 <h1 className="text-3xl md:text-5xl font-bold font-sans mb-4 tracking-tight">
 <FlipText text="We have your details." delay={0.02} /> <br className="hidden md:block"/>
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-sumac-brandy to-[#7cff67]">Let&apos;s get to work.</span>
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

 <div className="w-full">
 <p className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase text-center mb-6">What happens before we speak</p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 <div className="bg-white/[0.02] p-7 rounded-xl border border-white/[0.04]">
 <div className="text-sumac-brandy/60 font-mono text-sm mb-4">01</div>
 <h4 className="text-base font-bold font-sans mb-2">The Audit</h4>
 <p className="text-white/35 text-sm leading-relaxed font-body">We review your current digital footprint to see where you are losing traction and where AI search optimization can give you an immediate edge.</p>
 </div>
 <div className="bg-white/[0.02] p-7 rounded-xl border border-white/[0.04]">
 <div className="text-sumac-brandy/60 font-mono text-sm mb-4">02</div>
 <h4 className="text-base font-bold font-sans mb-2">The Strategy</h4>
 <p className="text-white/35 text-sm leading-relaxed font-body">We come to the call with a clear idea of the structure, brand requirements, and automation sequences needed to move your business forward.</p>
 </div>
 </div>
 </div>
 </div>
 </main>
 </div>
 );
}
