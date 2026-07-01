"use client";

import { m } from 'motion/react';
import React from 'react';

interface FlipTextProps {
  text: string;
  className?: string;
  delay?: number;
  /** Above-the-fold hero copy: paint immediately, animate without hiding text. */
  eager?: boolean;
}

export const FlipText: React.FC<FlipTextProps> = ({ text, className = '', delay = 0, eager = false }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: eager ? 1 : 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: eager ? 0.02 : 0.04, delayChildren: eager ? 0 : delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: eager ? 260 : 200,
      },
    },
    hidden: eager
      ? { opacity: 1, rotateX: -18, y: 6 }
      : { opacity: 0, rotateX: -90, y: 10 },
  };

  return (
    <m.span
      style={{ display: 'inline-block', perspective: '1000px' }}
      variants={container}
      initial="hidden"
      animate={eager ? 'visible' : undefined}
      whileInView={eager ? undefined : 'visible'}
      viewport={eager ? undefined : { once: true, margin: '-50px' }}
      className={className}
    >
      {words.map((word, index) => (
        <span style={{ display: 'inline-block', marginRight: '0.25em', whiteSpace: 'nowrap' }} key={index}>
          {word.split('').map((char, charIndex) => (
            <m.span
              variants={child}
              style={{ display: 'inline-block', transformOrigin: '50% 50% -20px' }}
              key={charIndex}
            >
              {char}
            </m.span>
          ))}
        </span>
      ))}
    </m.span>
  );
};
