"use client";

import { m } from 'motion/react';
import React from 'react';

interface FlipTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const FlipText: React.FC<FlipTextProps> = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
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
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      rotateX: -90,
      y: 10,
    },
  };

  return (
    <m.span
      style={{ display: 'inline-block', perspective: '1000px' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
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
