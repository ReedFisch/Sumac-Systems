'use client';

import { useEffect } from 'react';

export default function LoaderDismiss() {
  useEffect(() => {
    const dismissLoader = () => {
      document.getElementById('global-loader')?.classList.add('loader-hidden');
      document.body.classList.remove('loader-active');
    };

    const timer = window.setTimeout(dismissLoader, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
