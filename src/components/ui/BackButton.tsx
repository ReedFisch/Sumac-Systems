import Link from 'next/link';
import React from 'react';

export default function BackButton() {
  return (
    <Link 
      href="/#services" 
      className="inline-flex items-center gap-2 text-sumac-brandy hover:text-white transition-colors text-sm font-mono tracking-wider uppercase mb-12 relative z-40"
    >
      <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
      Back
    </Link>
  );
}
