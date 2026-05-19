'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const videos = [
  { src: '/videos/images/ATK slideshow 2.mp4', title: 'Concept' },
  { src: '/videos/images/ATK slideshow 3.mp4', title: 'Design' },
  { src: '/videos/images/ATK slideshow.mp4', title: 'Production' }
];

export default function VideoShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-40 border-y border-border/30 bg-background">
      <div className="px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-6xl tracking-tight uppercase"
          >
            OUR PROCESS IN MOTION
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-secondary group"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="font-heading text-2xl tracking-tight text-white">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
