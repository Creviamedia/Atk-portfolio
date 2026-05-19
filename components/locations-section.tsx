'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { locations } from '@/lib/data';

export default function LocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-border/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Global Presence</p>
        <h2 className="font-heading text-5xl md:text-7xl tracking-tight">OUR LOCATIONS</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.city}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="group"
          >
            <h3 className="font-heading text-4xl md:text-5xl tracking-tight group-hover:text-muted-foreground transition-colors duration-300">
              {loc.city}
            </h3>
            <p className="text-xs tracking-widest text-muted-foreground/60 mt-3 font-mono">
              {loc.coordinates}
            </p>
            <div className="w-8 h-[1px] bg-foreground/20 mt-4 group-hover:w-16 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
