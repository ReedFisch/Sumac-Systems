'use client';

import { useEffect } from 'react';

export function useFastScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      const isHashLink = href.startsWith('#') || href.startsWith('/#');
      if (!isHashLink) return;

      const hash = href.substring(href.indexOf('#'));
      const element = document.getElementById(hash.substring(1));
      
      if (!element) return;

      e.preventDefault();
      
      // Update URL without scrolling
      window.history.pushState(null, '', href);

      // Fast scroll animation
      const startY = window.scrollY;
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      const difference = targetY - startY;
      const duration = 300; // Fast 300ms scroll
      const startTime = performance.now();

      function step(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        window.scrollTo(0, startY + difference * easeOut);
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }
      
      requestAnimationFrame(step);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
}
