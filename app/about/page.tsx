'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from '@/lib/data';
import MagneticButton from '@/components/magnetic-button';
import VideoShowcase from '@/components/video-showcase';
import ImageCarousel from '@/components/image-carousel';

const credentials = [
  { label: 'Journey started', value: '1999, UK' },
  { label: 'Education', value: 'FDDI (Footwear Design & Development Institute)' },
  { label: 'Showcased at', value: 'Lakmé Fashion Week' },
  { label: 'Featured in', value: 'Trade & fashion press' },
  { label: 'Brands worked with', value: '15+ global & Indian labels' },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const visionRef = useRef(null);
  const visionInView = useInView(visionRef, { once: true, margin: '-100px' });
  const credentialsRef = useRef(null);
  const credentialsInView = useInView(credentialsRef, { once: true, margin: '-100px' });
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-100px' });

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
            Founder & Lead Designer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85]"
          >
            HELLO, I&apos;M ABDUL TAWWAB KHAN.
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section ref={storyRef} className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32 border-t border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">The Journey</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-8 space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground"
          >
            <p className="text-foreground font-medium">
              I am a brand-obsessed footwear design leader who believes every product should tell a story and strengthen a brand&apos;s soul.
            </p>
            <p>
              My journey began in 1999 in the UK under Richard Elliot, where I learned how design emotion and consumer insight shape enduring brand identities. That foundation guided two and a half decades of work across some of the most recognizable names in global fashion footwear.
            </p>
            <p>
              I evolved Red Tape for the Indian market, redefined Lee Cooper&apos;s East London DNA, and created my own brand showcased at Lakmé Fashion Week. Across roles with Original Penguin, Ben Sherman, and others, I have championed design that protects heritage while introducing fresh relevance.
            </p>
            <p>
              As a freelancer, I have contributed to FILA, The Souled Store, Fin Project, and DoubleU — bringing newness to each collaboration with a blend of critical thinking, analytical curiosity, and emotional intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section ref={visionRef} className="bg-secondary/30 py-24 md:py-40 border-y border-border/30">
        <div className="px-6 md:px-12 max-w-[1440px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12"
          >
            Vision Statement
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={visionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <p className="font-heading text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight italic">
              &ldquo;I see design as a strategic engine that drives brand value and business performance. For me, it is a form of storytelling — bringing emotion, relevance, and identity to every product.&rdquo;
            </p>
            <footer className="mt-12 text-muted-foreground text-sm tracking-widest uppercase">
              Abdul Tawwab Khan
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Credentials Snapshot */}
      <section ref={credentialsRef} className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32 border-b border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12"
            >
              Credentials Snapshot
            </motion.p>
            <div className="space-y-8">
              {credentials.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={credentialsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex justify-between border-b border-border/30 pb-4"
                >
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={credentialsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl bg-secondary/50 grayscale hover:grayscale-0 transition-all duration-700"
          >
             <img 
               src="/videos/images/ABDUL 2.jpeg" 
               alt="Abdul Tawwab Khan Credentials" 
               className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               loading="lazy"
             />
          </motion.div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32 border-b border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Sustainability</p>
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight leading-tight">CREATE A SUSTAINABLE FOOTPRINT</h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              The footwear industry has a materials&apos; problem, a waste problem, and an accountability problem. At ATK Designs, we challenge every step of the value chain — not with slogans, but with specific material choices and the manufacturing relationships to back them up.
            </p>
            <p>
              We have deep knowledge of footwear materials — how they behave, how they age, and how they are produced. That knowledge is the foundation of responsible design. We specify recycled materials for insole construction and work with recycled yarn for upper components wherever the brief allows.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
              <div className="space-y-4">
                <h4 className="text-foreground font-heading text-xl tracking-tight">Materials That Mean Something</h4>
                <p className="text-sm">We specify recycled insole materials and recycled yarn components as a baseline, not an upgrade. Every material decision is made with full knowledge of its source and production impact.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-foreground font-heading text-xl tracking-tight">Partners With Real Investment</h4>
                <p className="text-sm">We work with manufacturers who are actively investing in sustainable production technology — not just those who have updated their marketing.</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-foreground font-heading text-xl tracking-tight">Value Chain Accountability</h4>
                <p className="text-sm">Sustainable design is not just about what the product is made of. It is about how it is specified, developed, sampled, and shipped. We stay involved across the full chain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16 text-center"
        >
          Endorsements & Associates
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="bg-secondary/20 p-10 rounded-2xl border border-border/30"
            >
              <p className="text-muted-foreground italic mb-8 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <h4 className="font-heading text-xl tracking-tight">{t.name}</h4>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <VideoShowcase />
      <ImageCarousel />

      {/* CTA */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto text-center border-t border-border/30">
        <h2 className="font-heading text-5xl md:text-7xl tracking-tight mb-8">START THE CONVERSATION</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Whether you are a brand looking for a full design-to-delivery partner or an established label that needs an experienced outside perspective.
        </p>
        <MagneticButton
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background rounded-full text-sm tracking-widest uppercase hover:bg-foreground/90 transition-all duration-500"
        >
          Get In Touch
        </MagneticButton>
      </section>
    </div>
  );
}
