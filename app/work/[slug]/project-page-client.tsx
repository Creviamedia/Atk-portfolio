'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import type { Project } from '@/lib/data';
import { projects } from '@/lib/data';
import MagneticButton from '@/components/magnetic-button';

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const descRef = useRef(null);
  const descInView = useInView(descRef, { once: true, margin: '-100px' });

  const moreProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Image */}
      <section ref={heroRef} className="relative">
        <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={heroInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 max-w-[1440px] mx-auto pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] tracking-widest uppercase px-3 py-1 border border-foreground/20 rounded-full text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-6 mt-4">
              <span className="text-xs tracking-widest uppercase text-muted-foreground">{project.category}</span>
              <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section ref={descRef} className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32 border-b border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Overview</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* More Projects */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">More Work</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {moreProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-heading text-xl tracking-tight group-hover:text-muted-foreground transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{p.category}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto text-center border-t border-border/30">
        <h2 className="font-heading text-4xl md:text-6xl tracking-tight mb-8">LIKE WHAT YOU SEE?</h2>
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
