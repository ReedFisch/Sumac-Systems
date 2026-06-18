'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import React, { ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  rotationIntensity?: number;
}

export default function TiltCard({ children, className = '', rotationIntensity = 15 }: TiltCardProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [0, 1], [rotationIntensity, -rotationIntensity]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-rotationIntensity, rotationIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
