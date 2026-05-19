'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/data';

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6"
      >
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Selected Work</p>
          <h2 className="font-heading text-5xl md:text-7xl tracking-tight">SELECTED PROJECTS</h2>
        </div>
        <Link
          href="/work"
          className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors border-b border-foreground/30 pb-1 self-start md:self-auto"
        >
          View All
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.slice(0, 4).map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 * i }}
          >
            <Link href={`/work/${project.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
