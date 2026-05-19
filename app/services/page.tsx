'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '@/lib/data';
import MagneticButton from '@/components/magnetic-button';
import VideoShowcase from '@/components/video-showcase';
import ImageCarousel from '@/components/image-carousel';

export default function ServicesPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

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
            <source src="/videos/images/ATK slideshow 2.mp4" type="video/mp4" />
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
              Capabilities
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] text-foreground drop-shadow-sm"
            >
              End-to-End Footwear. Concept to Consumer.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 text-foreground/90 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-sm font-medium"
            >
              We offer a fully integrated consultancy model — or individual service engagements, depending on where you need support. Every service is led directly by Abdul Tawwab Khan, not delegated to a junior team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32 border-t border-border/30">
        <div className="space-y-32 md:space-y-48">
          {services.map((service, i) => (
            <ServiceBlock key={service.title} service={service} index={i} />
          ))}
        </div>
      </section>

      <VideoShowcase />
      <ImageCarousel />

      {/* CTA */}
      <section className="py-24 md:py-40 bg-secondary/30 border-y border-border/30 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="font-heading text-5xl md:text-7xl tracking-tight mb-8">READY TO START?</h2>
          <p className="text-muted-foreground text-sm max-w-md mb-10 leading-relaxed">
            Let&apos;s talk about your project and how we can bring your vision to life.
          </p>
          <MagneticButton
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background rounded-full text-sm tracking-widest uppercase hover:bg-foreground/90 transition-all duration-500"
          >
            Start the Conversation
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}

function ServiceBlock({ service, index }: { service: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
      <div className="md:col-span-5">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-8xl md:text-[12rem] leading-none text-foreground/5 block mb-8"
        >
          {service.number}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6"
        >
          {service.title.split(' — ')[1]}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg leading-relaxed"
        >
          {service.description}
        </motion.p>
      </div>

      <div className="md:col-span-7 pt-0 md:pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xs tracking-[0.3em] uppercase text-foreground mb-6 pb-2 border-b border-foreground/10">Scope</h4>
            <ul className="space-y-3">
              {service.features.map((feature: string) => (
                <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-foreground/30" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xs tracking-[0.3em] uppercase text-foreground mb-6 pb-2 border-b border-foreground/10">Deliverables</h4>
            <ul className="space-y-3">
              {service.deliverables.map((item: string) => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-foreground/30" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
