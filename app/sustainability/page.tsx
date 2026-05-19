'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MagneticButton from '@/components/magnetic-button';
import VideoShowcase from '@/components/video-showcase';
import ImageCarousel from '@/components/image-carousel';

export default function SustainabilityPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const approachRef = useRef(null);
  const approachInView = useInView(approachRef, { once: true, margin: '-100px' });
  const materialsRef = useRef(null);
  const materialsInView = useInView(materialsRef, { once: true, margin: '-100px' });

  return (
    <div className="">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-end pt-32 pb-16 md:pb-24 w-full">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/videos/images/ATK slideshow.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.3em] uppercase text-foreground/80 mb-4 font-medium"
            >
              Our Responsibility
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] uppercase text-foreground drop-shadow-sm"
            >
              CREATE A SUSTAINABLE FOOTPRINT.
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section ref={approachRef} className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32 border-t border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">The Philosophy</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-8 space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground"
          >
            <p className="text-foreground font-medium">
              The footwear industry has a materials problem, a waste problem, and an accountability problem. At ATK Designs, we challenge every step of the value chain — not with slogans, but with specific material choices and manufacturing relationships.
            </p>
            <p>
              Sustainable design is not just about what the product is made of. It is about how it is specified, developed, sampled, and shipped. We stay involved across the full chain, ensuring that the environmental impact is minimized without compromising on quality or style.
            </p>
            <p>
              We believe that true sustainability comes from creating products that last — both in terms of physical durability and timeless design. By reducing the need for constant replacement, we reduce the overall environmental footprint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pillars of Sustainability */}
      <section ref={materialsRef} className="bg-secondary/20 py-24 md:py-40 border-y border-border/30">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={materialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="font-heading text-4xl text-foreground/20">01</span>
              <h3 className="font-heading text-2xl tracking-tight uppercase">Responsible Sourcing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We specify recycled insole materials and recycled yarn components as a baseline. Every material decision is made with full knowledge of its source and production impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={materialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <span className="font-heading text-4xl text-foreground/20">02</span>
              <h3 className="font-heading text-2xl tracking-tight uppercase">Ethical Manufacturing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work with manufacturers who are actively investing in sustainable production technology and ethical labor practices — not just those who have updated their marketing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={materialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <span className="font-heading text-4xl text-foreground/20">03</span>
              <h3 className="font-heading text-2xl tracking-tight uppercase">Durability & Longevity</h3>
              <p className="text-muted-foreground leading-relaxed">
                We design footwear to be commercially grounded and physically enduring. A product that lasts longer is inherently more sustainable than one that needs frequent replacement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoShowcase />
      <ImageCarousel />

      {/* CTA */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto text-center">
        <h2 className="font-heading text-5xl md:text-7xl tracking-tight mb-8 uppercase">LET&apos;S BUILD A BETTER FUTURE</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Join us in redefining the footwear industry through responsible design and ethical manufacturing.
        </p>
        <MagneticButton
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background rounded-full text-sm tracking-widest uppercase hover:bg-foreground/90 transition-all duration-500"
        >
          Partner With Us
        </MagneticButton>
      </section>
    </div>
  );
}
