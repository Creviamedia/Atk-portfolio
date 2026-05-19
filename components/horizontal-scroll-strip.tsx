'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { pillars } from '@/lib/data';

export default function HorizontalScrollStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-24 md:py-32 overflow-hidden border-y border-border/30 bg-secondary/20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * i }}
              className="relative"
            >
              <span className="font-heading text-6xl md:text-8xl text-foreground/5 absolute -top-8 -left-4">
                {pillar.number}
              </span>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-3xl tracking-tight mb-6 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
