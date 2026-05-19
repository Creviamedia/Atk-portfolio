'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
}

export default function RevealText({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <Tag ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}
