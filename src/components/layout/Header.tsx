"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
 const [scrolled, setScrolled] = useState(true);

 useEffect(() => {
 const handleScroll = () => {
 setScrolled(window.scrollY > 20);
 };
 
 // Initial check immediately after mount so it transitions from true -> false
 handleScroll();

 window.addEventListener('scroll', handleScroll, { passive: true });
 return () => {
 window.removeEventListener('scroll', handleScroll);
 };
 }, []);

 return (
 <header 
 className={`fixed top-0 w-full z-50 transition-all duration-500 ${
 scrolled 
 ? 'bg-black/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
 : 'bg-transparent border-b border-transparent'
 }`}
 >
 <div className="max-w-6xl mx-auto px-6 py-4 md:py-6 flex items-center justify-center md:justify-between">
 {/* Logo */}
 <Link href="/" className={`flex items-center justify-center group transition-all duration-500 ${scrolled ? 'gap-2 md:gap-4' : 'gap-3 md:gap-6'}`}>
 {/* Mobile-only left text */}
 <span className={`block md:hidden font-sans font-bold tracking-[0.12em] leading-tight text-white group-hover:text-sumac-brandy transition-all duration-500 ${scrolled ? 'text-[16px]' : 'text-2xl'}`}>
 SUMAC
 </span>

 <div className={`relative overflow-hidden flex items-center justify-center transition-all duration-500 ${scrolled ? 'w-[48px] h-[48px] md:w-[88px] md:h-[88px]' : 'w-[80px] h-[80px] md:w-[220px] md:h-[220px]'}`}>
 <Image 
 src="/images/sumac/image3.webp" 
 alt="Sumac Logo" 
 fill
 sizes={scrolled ? "(max-width: 768px) 48px, 88px" : "(max-width: 768px) 80px, 220px"}
 className="object-contain group-hover:scale-110 transition-transform duration-500"
 />
 </div>

 {/* Mobile-only right text */}
 <span className={`block md:hidden font-body tracking-[0.15em] text-white/40 uppercase transition-all duration-500 ${scrolled ? 'text-[9px]' : 'text-xs'} text-left`}>
 SYS<br/>TEMS
 </span>

 {/* Desktop-only stacked text */}
 <div className="hidden md:flex flex-col justify-center items-center transition-all duration-500">
 <span className={`font-sans font-bold tracking-[0.12em] leading-tight text-white group-hover:text-sumac-brandy transition-all duration-500 ${scrolled ? 'text-lg' : 'text-[42px]'}`}>SUMAC</span>
 <span className={`font-body tracking-[0.2em] text-white/40 uppercase transition-all duration-500 ${scrolled ? 'text-[9px] mt-0' : 'text-sm mt-1'}`}>Systems</span>
 </div>
 </Link>

 {/* Navigation */}
 <nav className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? 'gap-8' : 'gap-10'}`}>
 {[
 { label: 'Services', href: '/#services' },
 { label: 'About', href: '/#about' },
 { label: 'Contact', href: '/#contact' },
 ].map((link) => (
 <Link 
 key={link.href}
 href={link.href} 
 className={`relative font-medium tracking-wider uppercase text-white/40 hover:text-white transition-all duration-500 group ${scrolled ? 'text-xs' : 'text-base'}`}
 >
 {link.label}
 <span className="absolute -bottom-1 left-0 w-0 h-px bg-sumac-brandy group-hover:w-full transition-all duration-300" />
 </Link>
 ))}
 </nav>

 {/* CTA */}
 <div className="hidden md:flex items-center gap-4">
 <Link 
 href="/#contact" 
 className={`bg-white text-black rounded-full font-bold tracking-wider uppercase hover:bg-white/90 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:-translate-y-px ${scrolled ? 'px-5 py-2 text-xs' : 'px-6 py-2.5 text-sm'}`}
 >
 Free Systems Audit
 </Link>
 </div>
 </div>
 </header>
 );
};

export default Header;
