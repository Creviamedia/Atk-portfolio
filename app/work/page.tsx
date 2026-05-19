'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects, brands } from '@/lib/data';
import Link from 'next/link';
import VideoShowcase from '@/components/video-showcase';
import ImageCarousel from '@/components/image-carousel';

export default function WorkPage() {
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
            <source src="/videos/images/ATK slideshow 3.mp4" type="video/mp4" />
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
              Portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] text-foreground drop-shadow-sm"
            >
              SELECTED PROJECTS
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32 border-t border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Brand Collaborations */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-24 md:py-40 border-t border-border/30">
        <div className="text-center mb-16 md:mb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Clients & Partners</p>
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight">BRAND COLLABORATIONS</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="text-lg md:text-2xl font-heading tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {brand.toUpperCase()}
            </motion.span>
          ))}
        </div>
      </section>

      <VideoShowcase />
      <ImageCarousel />

      {/* CTA */}
      <section className="py-24 md:py-40 bg-secondary/20 border-t border-border/30 px-6 md:px-12 text-center">
        <h2 className="font-heading text-5xl md:text-7xl tracking-tight mb-8">HAVE A PROJECT?</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Let&apos;s build the next story together. From concept to commercial reality.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background rounded-full text-sm tracking-widest uppercase hover:bg-foreground/90 transition-all duration-500 font-medium"
        >
          Get In Touch
        </Link>
      </section>
    </div>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 * (index % 2) }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-3xl md:text-4xl tracking-tight">{project.category}</h3>
          <span className="text-xs tracking-widest uppercase text-muted-foreground">{project.year}</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] tracking-widest uppercase px-3 py-1 border border-border/50 rounded-full text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
