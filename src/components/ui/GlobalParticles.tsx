'use client';

import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('./Particles'), { ssr: false });

export default function GlobalParticles() {
  return (
    <Particles
      className="fixed inset-0 pointer-events-none -z-10"
      quantity={60}
      ease={80}
    />
  );
}
