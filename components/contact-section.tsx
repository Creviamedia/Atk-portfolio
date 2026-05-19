'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MagneticButton from './magnetic-button';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-border/30">
      <div className="flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Start a Project
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl md:text-8xl lg:text-9xl tracking-tight mb-8"
        >
          LET&apos;S TALK
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed mb-12"
        >
          Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s create something extraordinary together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background rounded-full text-sm tracking-widest uppercase hover:bg-foreground/90 transition-all duration-500"
          >
            Get In Touch
          </MagneticButton>

          <a
            href="mailto:hello@atk.studio"
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-foreground/30 pb-1"
          >
            hello@atk.studio
          </a>
        </motion.div>
      </div>
    </section>
  );
}

