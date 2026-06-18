"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";

interface ScrollParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export const ScrollParallax = ({ children, offset = 100, className = "" }: ScrollParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
