'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 bg-secondary/10 border-y border-border/30">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center mb-20 md:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Endorsements
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase"
          >
            Recognised by Global Industry Experts
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.15,
                ease: [0.215, 0.61, 0.355, 1] // Classic cubic-bezier for elegant slide
              }}
              whileHover={{ y: -10 }}
              className="group relative p-8 md:p-12 rounded-3xl bg-background/50 border border-border/20 hover:border-foreground/20 hover:shadow-2xl hover:shadow-foreground/5 transition-all duration-500"
            >
              <div className="absolute top-12 right-12 text-foreground/5 pointer-events-none">
                <svg width="64" height="48" viewBox="0 0 64 48" fill="currentColor">
                  <path d="M15.4 0C6.9 0 0 6.9 0 15.4v32.6h24.6V15.4H8.2C8.2 11.4 11.4 8.2 15.4 8.2V0zm38.6 0c-8.5 0-15.4 6.9-15.4 15.4v32.6h24.6V15.4H46.8c0-4 3.2-7.2 7.2-7.2V0z"/>
                </svg>
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-12 italic relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="relative z-10">
                <h4 className="font-heading text-2xl tracking-tight mb-1">{t.name}</h4>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
