'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MagneticButton from './magnetic-button';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/website video home hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text stays readable */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"
        aria-hidden="true"
      />

      <div className="relative z-10 text-left px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        {/* Sub-headline / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl lg:text-[5rem] leading-[1] tracking-tight mb-6"
        >
          ATK Designs, Craft Footwear designed for YOU.
        </motion.p>



        {/* Hero Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 md:mt-12 text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed"
        >
          We are a footwear design consultancy built on 25+ years of global brand experience.
          From concept to commercially loved product, we help brands build identity, drive sales,
          and create design that resonates.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-6"
        >
          <MagneticButton
            href="/work"
            className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full text-sm tracking-widest uppercase hover:bg-foreground/90 transition-all duration-500"
          >
            Explore Our Work
          </MagneticButton>

          <MagneticButton
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 rounded-full text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Get In Touch
            <span className="w-1.5 h-1.5 rounded-full bg-foreground group-hover:bg-background transition-colors" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-foreground/30"
        />
      </motion.div>
    </section>
  );
}
