'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '@/lib/data';
import MagneticButton from '@/components/magnetic-button';
import VideoShowcase from '@/components/video-showcase';
import ImageCarousel from '@/components/image-carousel';

export default function TestimonialsPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section ref={heroRef} className="min-h-[60vh] flex items-end px-6 md:px-12 max-w-[1440px] mx-auto pb-16 md:pb-24">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Endorsements
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] uppercase"
          >
            TRUSTED BY INDUSTRY LEADERS.
          </motion.h1>
        </div>
      </section>

      {/* Grid of Testimonials */}
      <section ref={contentRef} className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32 border-t border-border/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-secondary/20 p-10 md:p-16 rounded-3xl border border-border/30 flex flex-col justify-between"
            >
              <div>
                <div className="text-foreground/10 mb-8">
                  <svg width="48" height="36" viewBox="0 0 48 36" fill="currentColor">
                    <path d="M11.5 0C5.2 0 0 5.2 0 11.5v24.5h18.5V11.5H6.2C6.2 8.6 8.6 6.2 11.5 6.2V0zm29 0c-6.3 0-11.5 5.2-11.5 11.5v24.5H48V11.5H34.3c0-2.9 2.4-5.3 5.3-5.3V0z"/>
                  </svg>
                </div>
                <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground italic mb-12">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div>
                <h4 className="font-heading text-2xl tracking-tight uppercase">{t.name}</h4>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands Snap */}
      <section className="py-24 md:py-40 bg-foreground text-background">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase opacity-50 mb-16">Selected Collaborations</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-20 md:gap-y-12">
            {['FILA', 'Lee Cooper', 'Red Tape', 'Ben Sherman', 'The Souled Store', 'BIBA', 'DoubleU'].map((brand) => (
              <span key={brand} className="font-heading text-3xl md:text-5xl opacity-80 hover:opacity-100 transition-opacity cursor-default tracking-tighter">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <VideoShowcase />
      <ImageCarousel />

      {/* CTA */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="font-heading text-5xl md:text-7xl tracking-tight mb-8 uppercase">WORK WITH ATK DESIGNS</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Experience the professional design and development expertise that industry veterans rely on.
        </p>
        <MagneticButton
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background rounded-full text-sm tracking-widest uppercase hover:bg-foreground/90 transition-all duration-500"
        >
          Start a Project
        </MagneticButton>
      </section>
    </div>
  );
}
