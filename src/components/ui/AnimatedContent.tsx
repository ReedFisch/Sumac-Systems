"use client";
import { m } from 'motion/react';
import { ReactNode } from 'react';

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: any;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  className?: string;
  [key: string]: any;
}

const AnimatedContent = ({
  children,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = [0.22, 1, 0.36, 1],
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className = '',
  ...props
}: AnimatedContentProps) => {
  const yOffset = direction === 'vertical' ? (reverse ? -distance : distance) : 0;
  const xOffset = direction === 'horizontal' ? (reverse ? -distance : distance) : 0;

  return (
    <m.div
      initial={{ opacity: animateOpacity ? initialOpacity : 1, y: yOffset, x: xOffset, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration, delay, ease }}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
};

export default AnimatedContent;
