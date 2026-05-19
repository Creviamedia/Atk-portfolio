'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MagneticButton from './magnetic-button';

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-border/30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary grayscale hover:grayscale-0 transition-all duration-700"
          >
            <img 
              src="/videos/images/ABDUL .jpeg" 
              alt="Abdul Tawwab Khan" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        </div>

        <div className="md:col-span-7 order-1 md:order-2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            The Visionary
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.85] mb-8 uppercase"
          >
            ABDUL TAWWAB <br /> KHAN
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6 text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            <p>
              Lead Designer with 25+ years of global experience. From heritage UK labels to India&apos;s biggest fashion brands, I bridge the gap between creative storytelling and commercial reality.
            </p>
            <p className="text-sm md:text-base opacity-70">
              My work is rooted in the belief that design is a strategic engine for brand value. Every decision — from material selection to manufacturing oversight — is made to strengthen your brand&apos;s soul.
            </p>
            <div className="pt-8">
              <MagneticButton href="/about">
                Read Full Story
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
