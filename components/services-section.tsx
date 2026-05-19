'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '@/lib/data';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 md:mb-24"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">What We Do</p>
        <h2 className="font-heading text-5xl md:text-7xl tracking-tight">OUR SERVICES</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 * i }}
            className="group relative border border-border/30 rounded-lg p-8 md:p-10 hover:border-foreground/20 transition-all duration-500 hover:bg-secondary/50"
          >
            <span className="font-heading text-6xl md:text-8xl text-foreground/5 absolute top-4 right-6">
              {service.number}
            </span>

            <div className="relative z-10">
              <h3 className="font-heading text-3xl md:text-4xl tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs tracking-widest uppercase text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-500"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 rounded-b-lg" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
