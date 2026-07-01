"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PORTAL_URL = 'https://portal.sumac.systems/';

const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

function LoginIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
  );
}

const Header = () => {
  const [scrolled, setScrolled] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 md:py-6 flex items-center justify-between md:justify-between relative">
        <Link
          href="/"
          onClick={closeMenu}
          className={`flex items-center group transition-all duration-500 shrink-0 ${scrolled ? 'gap-2 md:gap-4' : 'gap-2 md:gap-6'}`}
        >
          <span className={`block md:hidden font-sans font-bold tracking-[0.12em] leading-tight text-white group-hover:text-sumac-brandy transition-all duration-500 ${scrolled ? 'text-base' : 'text-2xl'}`}>
            SUMAC
          </span>

          <div
            className={`relative overflow-hidden flex items-center justify-center transition-all duration-500 ${
              scrolled ? 'w-10 h-10 md:w-[88px] md:h-[88px]' : 'w-12 h-12 md:w-[220px] md:h-[220px]'
            }`}
          >
            <Image
              src="/images/sumac/image3.webp"
              alt="Sumac Logo"
              fill
              sizes={scrolled ? '(max-width: 768px) 40px, 88px' : '(max-width: 768px) 48px, 220px'}
              className="object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <span className={`block md:hidden font-body tracking-[0.15em] text-white/40 uppercase transition-all duration-500 ${scrolled ? 'text-[9px]' : 'text-xs'}`}>
            SYS<br />TEMS
          </span>

          <div className="hidden md:flex flex-col justify-center items-center transition-all duration-500">
            <span className={`font-sans font-bold tracking-[0.12em] leading-tight text-white group-hover:text-sumac-brandy transition-all duration-500 ${scrolled ? 'text-lg' : 'text-[42px]'}`}>
              SUMAC
            </span>
            <span className={`font-body tracking-[0.2em] text-white/40 uppercase transition-all duration-500 ${scrolled ? 'text-[9px] mt-0' : 'text-sm mt-1'}`}>
              Systems
            </span>
          </div>
        </Link>

        <nav className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? 'gap-8' : 'gap-10'}`}>
          {NAV_LINKS.map((link) => (
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

        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 font-medium tracking-wider uppercase text-white/40 hover:text-white transition-all duration-500 group ${scrolled ? 'text-xs' : 'text-sm'}`}
          >
            <LoginIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            Login
          </a>
          <Link
            href="/thank-you"
            className={`bg-white text-black rounded-full font-bold tracking-wider uppercase hover:bg-white/90 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:-translate-y-px ${scrolled ? 'px-5 py-2 text-xs' : 'px-6 py-2.5 text-sm'}`}
          >
            Book Strategy Call
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-colors"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-black/90 backdrop-blur-xl px-4 pb-6 pt-2">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-4 text-base font-medium tracking-wide text-white/70 border-b border-white/[0.06] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="py-4 flex items-center gap-2 text-base font-medium tracking-wide text-white/70 border-b border-white/[0.06] hover:text-white transition-colors"
            >
              <LoginIcon className="w-4 h-4" />
              Login
            </a>
          </nav>
          <Link
            href="/thank-you"
            onClick={closeMenu}
            className="mt-5 flex w-full items-center justify-center py-3.5 bg-white text-black rounded-full font-bold text-sm tracking-wider uppercase"
          >
            Book Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
