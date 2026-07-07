"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const PORTAL_URL = process.env.NEXT_PUBLIC_CLIENT_PORTAL_URL || '/client-portal';
const IS_PORTAL_EXTERNAL = PORTAL_URL.startsWith('http');

const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

const SECTION_HASHES = new Set(['#services', '#about', '#contact']);

function LoginIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
  );
}

function BackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState('');

  const isServicePage = pathname.startsWith('/services/');
  const isHomeSection = pathname === '/' && SECTION_HASHES.has(hash);
  const showMobileBack = isServicePage || isHomeSection;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('popstate', syncHash);
    return () => {
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('popstate', syncHash);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleMobileBack = useCallback(() => {
    closeMenu();
    if (isServicePage) {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push('/#services');
      }
      return;
    }
    if (isHomeSection) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      router.replace('/', { scroll: false });
      setHash('');
    }
  }, [isHomeSection, isServicePage, router]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)] ${
        menuOpen
          ? 'max-md:bg-black max-md:backdrop-blur-none border-b border-white/[0.06]'
          : scrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-b border-transparent'
      } ${
        scrolled && menuOpen
          ? 'md:bg-black/70 md:backdrop-blur-xl md:shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : ''
      }`}
    >
      <div className={`max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-4 transition-all duration-500 ${scrolled ? 'h-[72px] md:h-[100px]' : 'h-[100px] md:h-[150px]'}`}>
        {showMobileBack ? (
          <button
            type="button"
            onClick={handleMobileBack}
            className="md:hidden inline-flex items-center gap-1.5 shrink-0 -ml-1 pl-1 pr-2.5 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-white/80 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-colors"
            aria-label="Go back"
          >
            <BackIcon className="w-4 h-4" />
            <span className="text-[11px] font-medium tracking-[0.14em] uppercase">Back</span>
          </button>
        ) : null}

        {showMobileBack ? (
          <span className="md:hidden flex-1 text-center text-[11px] font-medium tracking-[0.18em] uppercase text-white/45 truncate px-2 pointer-events-none">
            {isServicePage ? 'Services' : hash === '#about' ? 'About' : hash === '#contact' ? 'Contact' : 'Services'}
          </span>
        ) : null}

        <Link
          href="/"
          onClick={closeMenu}
          className={`flex items-center group shrink-0 min-w-0 gap-3 md:gap-4 ${showMobileBack ? 'hidden md:flex' : ''}`}
        >
          <div className={`relative shrink-0 transition-all duration-500 ${scrolled ? 'w-10 h-10 md:w-14 md:h-14' : 'w-16 h-16 md:w-[96px] md:h-[96px]'}`}>
            <Image
              src="/images/sumac/image3.webp"
              alt="Sumac Logo"
              fill
              sizes="56px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className={`font-sans font-bold tracking-[0.1em] text-white leading-none group-hover:text-sumac-brandy transition-all duration-500 ${scrolled ? 'text-base md:text-xl' : 'text-2xl md:text-4xl'}`}>
              SUMAC
            </span>
            <span className={`font-body tracking-[0.14em] text-white/40 uppercase mt-0.5 md:mt-1 transition-all duration-500 ${scrolled ? 'text-[10px] md:text-xs' : 'text-xs md:text-base'}`}>
              Systems
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-analytics-event="navigation_click"
              data-analytics-location="desktop_header"
              data-analytics-label={link.label}
              className={`relative font-medium tracking-wider uppercase text-white/50 hover:text-white transition-all duration-500 whitespace-nowrap group ${scrolled ? 'text-xs md:text-sm' : 'text-sm md:text-lg'}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-sumac-brandy group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5 shrink-0">
          <a
            href={PORTAL_URL}
            target={IS_PORTAL_EXTERNAL ? "_blank" : undefined}
            rel={IS_PORTAL_EXTERNAL ? "noopener noreferrer" : undefined}
            data-analytics-event="portal_click"
            data-analytics-location="desktop_header"
            data-analytics-label="Login"
            className={`flex items-center gap-2 text-white/50 hover:text-white transition-all duration-500 font-mono tracking-widest uppercase ${scrolled ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'}`}
          >
            <LoginIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            Login
          </a>
          <Link
            href="/thank-you"
            data-analytics-event="booking_click"
            data-analytics-location="desktop_header"
            data-analytics-label="Book Strategy Call"
            className={`inline-flex items-center justify-center font-bold tracking-wider uppercase text-sumac-dark bg-white rounded-full hover:bg-gray-100 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 ${scrolled ? 'px-5 py-2.5 md:px-7 md:py-3 text-[10px] md:text-xs' : 'px-6 py-3 md:px-10 md:py-4 text-xs md:text-sm'}`}
          >
            Book Strategy Call
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-colors -mr-1"
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
        <div className="md:hidden border-t border-white/[0.06] bg-black px-5 pb-8 pt-3">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                data-analytics-event="navigation_click"
                data-analytics-location="mobile_menu"
                data-analytics-label={link.label}
                className="py-4 text-base font-medium tracking-wide text-white/70 border-b border-white/[0.06] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PORTAL_URL}
              target={IS_PORTAL_EXTERNAL ? "_blank" : undefined}
              rel={IS_PORTAL_EXTERNAL ? "noopener noreferrer" : undefined}
              onClick={closeMenu}
              data-analytics-event="portal_click"
              data-analytics-location="mobile_menu"
              data-analytics-label="Login"
              className="py-4 flex items-center gap-2.5 text-base font-medium tracking-wide text-white/70 border-b border-white/[0.06] hover:text-white transition-colors"
            >
              <LoginIcon className="w-4 h-4" />
              Login
            </a>
          </nav>
          <Link
            href="/thank-you"
            onClick={closeMenu}
            data-analytics-event="booking_click"
            data-analytics-location="mobile_menu"
            data-analytics-label="Book Strategy Call"
            className="mt-6 flex w-full items-center justify-center py-4 bg-white text-black rounded-full font-bold text-sm tracking-wider uppercase"
          >
            Book Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
