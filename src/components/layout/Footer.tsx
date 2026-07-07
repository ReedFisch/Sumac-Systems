import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
 return (
 <footer className="relative pt-12 md:pt-20 pb-8 overflow-hidden">
 {/* Animated Dots Strip */}
 <div className="absolute top-0 left-0 w-full h-[120px] overflow-hidden pointer-events-none opacity-40 mix-blend-screen z-10" aria-hidden="true">
 <div 
 className="absolute left-0 top-1/2 w-[200%] h-[70px] opacity-75 animate-[footerDotsMove_18s_linear_infinite]"
 style={{
 backgroundImage: 'radial-gradient(circle, rgb(255 255 255 / 0.55) 1.5px, transparent 2px), radial-gradient(circle, rgb(255 255 255 / 0.35) 1px, transparent 1.5px), radial-gradient(circle, rgb(255 255 255 / 0.45) 1.2px, transparent 1.8px)',
 backgroundPosition: '0 8px, 24px 22px, 48px 14px',
 backgroundSize: '72px 38px, 110px 44px, 160px 52px',
 }}
 />
 </div>

 <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
 <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('/images/sumac/image12-blurred.webp')" }} />
 {/* Top gradient to seamlessly blend the footer into the site's sumac-dark background */}
 <div className="absolute inset-0 bg-gradient-to-b from-sumac-dark via-sumac-dark/60 to-transparent h-[250px]" />
 </div>

 <div className="absolute right-0 bottom-0 pointer-events-none w-[300px] md:w-[500px] lg:w-[700px] md:translate-x-1/3 md:translate-y-1/3 aspect-square translate-x-1/4 translate-y-1/4 z-10 animate-[float_8s_ease-in-out_infinite] opacity-25">
 <Image
 src="/images/sumac/image2.webp"
 alt="Decorative Sumac Branch"
 fill
 sizes="(max-width: 768px) 300px, 700px"
 className="object-contain"
 />
 </div>

 <div className="max-w-6xl mx-auto px-6 relative z-20">
 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-16 md:items-end">
 {/* Brand column */}
 <div className="col-span-1 md:col-span-5">
 <Link href="/" className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6 group">
 <div className="relative w-[80px] h-[80px] md:w-[140px] md:h-[140px] overflow-hidden flex items-center justify-center">
 <Image 
 src="/images/sumac/image3.webp" 
 alt="Sumac Logo"
 fill
 sizes="(max-width: 768px) 80px, 140px"
 className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
 />
 </div>
 <div className="flex flex-col justify-center">
 <span className="font-sans font-bold text-3xl md:text-4xl tracking-[0.12em] leading-tight text-white group-hover:text-sumac-brandy transition-colors duration-300">SUMAC</span>
 <span className="font-body text-sm tracking-[0.2em] text-white/60 uppercase mt-2">Systems</span>
 </div>
 </Link>
 <p className="text-white/50 text-sm max-w-xs font-body leading-relaxed">
 High-performance websites and automated marketing systems for businesses that want to grow.
 </p>
 <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mt-5 md:mt-6">
 <a href="tel:+15185514125" data-analytics-event="phone_click" data-analytics-location="footer" data-analytics-label="Footer phone" className="text-white/50 hover:text-white transition-colors text-xs font-mono tracking-wider">(518) 551-4125</a>
 <span className="hidden sm:inline text-white/30">·</span>
 <a href="mailto:hello@sumac.systems" data-analytics-event="email_click" data-analytics-location="footer" data-analytics-label="Footer email" className="text-white/50 hover:text-white transition-colors text-xs font-mono tracking-wider break-all">hello@sumac.systems</a>
 </div>
 </div>
 
 <div className="col-span-1 md:col-span-6 md:col-start-7 grid grid-cols-2 gap-6 md:gap-8 md:items-end">
 {/* Services column */}
 <div>
 <h4 className="text-white/70 font-sans font-semibold mb-5 uppercase tracking-[0.2em] text-[10px]">Services</h4>
 <ul className="space-y-3">
 {[
 { label: 'Web Design', href: '/services/web-design' },
 { label: 'AI & SEO', href: '/services/ai-seo' },
 { label: 'Google Business Profile', href: '/services/google-business-profile' },
 { label: 'Automations', href: '/services/automations' }
 ].map((item) => (
 <li key={item.label}>
 <Link href={item.href} data-analytics-event="service_click" data-analytics-location="footer_services" data-analytics-label={item.label} className="text-white/50 hover:text-white transition-colors text-sm font-body">{item.label}</Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Company column */}
 <div>
 <h4 className="text-white/70 font-sans font-semibold mb-5 uppercase tracking-[0.2em] text-[10px]">Company</h4>
 <ul className="space-y-3">
 {[
 { label: 'Work with Reed', href: '/#about' },
 { label: 'Client Portal', href: '/client-portal' },
 { label: 'Contact', href: '/#contact' },
 { label: 'Terms', href: '/terms' },
 { label: 'Privacy', href: '/privacy' },
 { label: 'Refund Policy', href: '/refund' },
 ].map((item) => (
 <li key={item.label}>
 <Link href={item.href} data-analytics-event={item.label === 'Client Portal' ? 'portal_click' : 'navigation_click'} data-analytics-location="footer_company" data-analytics-label={item.label} className="text-white/50 hover:text-white transition-colors text-sm font-body">{item.label}</Link>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>

 {/* Bottom bar */}
 <div className="border-t border-white/[0.04] pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
 <p className="text-white/40 text-[10px] uppercase tracking-widest font-mono">
 designed and built by Sumac Systems
 </p>
 </div>
 </div>
 </footer>
 );
};

export default Footer;
