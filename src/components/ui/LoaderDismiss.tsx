'use client';

import { useEffect } from 'react';

export default function LoaderDismiss() {
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

    const timer = window.setTimeout(dismissLoader, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
