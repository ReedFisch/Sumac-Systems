import React from "react";
import Image from "next/image";

export function ServiceHeroVisual({ slug }: { slug: string }) {
  // A generic placeholder or stylized graphic for the service hero
  return (
    <div className="relative w-full aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden bg-sumac-dark/40 border border-sumac-brandy/20 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-sumac-brandy/10 to-transparent" />
      <div className="relative z-10 w-32 h-32 rounded-full bg-sumac-brandy/20 blur-2xl animate-pulse" />
      <div className="relative z-20 w-16 h-16 rounded-xl bg-sumac-brandy/30 border border-sumac-brandy/50 flex items-center justify-center text-sumac-brandy backdrop-blur-md">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
    </div>
  );
}
