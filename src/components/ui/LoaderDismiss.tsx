'use client';

import { useEffect } from 'react';
import { useFastScroll } from '@/hooks/useFastScroll';

export default function LoaderDismiss() {
  useFastScroll();
  
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const dismissLoader = () => {
      document.getElementById('global-loader')?.classList.add('loader-hidden');
      document.body.classList.remove('loader-active');
      
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    const timer = window.setTimeout(dismissLoader, 600);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
