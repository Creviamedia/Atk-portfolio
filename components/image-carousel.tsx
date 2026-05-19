'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const slides = [
  {
    image: '/videos/images/close-up-of-a-male-shoemaker-cutting-leather-texti-2026-03-18-20-40-52-utc.jpg.jpeg',
    title: 'Precision Cutting',
    category: 'Craftsmanship',
  },
  {
    image: '/videos/images/DSC01918.jpg',
    title: 'Design Detail',
    category: 'Product Focus',
  },
  {
    image: '/videos/images/crafting-leather-goods-in-artisan-workshop-setting-2026-01-08-07-28-49-utc.jpg.jpeg',
    title: 'Artisan Workshop',
    category: 'Material & Form',
  },
  {
    image: '/videos/images/DSC01919.jpg',
    title: 'Texture & Finish',
    category: 'Material Study',
  },
  {
    image: '/videos/images/footprint-evidence-with-rulers-and-arrow-2026-03-19-22-07-18-utc.jpg.jpeg',
    title: 'Last & Measurement',
    category: 'Technical Design',
  },
  {
    image: '/videos/images/DSC01930.jpg',
    title: 'Silhouette Work',
    category: 'Ideation',
  },
  {
    image: '/videos/images/male-artisan-carefully-punching-piece-of-leather-a-2026-03-24-04-24-39-utc.jpg.jpeg',
    title: 'Hand Punching',
    category: 'Construction',
  },
  {
    image: '/videos/images/DSC01956.jpg',
    title: 'Technical Drawing',
    category: 'Development',
  },
  {
    image: '/videos/images/shoemaker-designing-the-shape-of-a-new-shoe-2026-03-12-22-35-32-utc.jpg.jpeg',
    title: 'Shaping the Concept',
    category: 'Design Process',
  },
  {
    image: '/videos/images/DSC01967.jpg',
    title: 'Model Preview',
    category: 'Prototyping',
  },
  {
    image: '/videos/images/tailor-cobbler-hold-different-rolls-natural-brown-2026-01-08-23-31-40-utc.jpg.jpeg',
    title: 'Material Selection',
    category: 'Sourcing',
  },
  {
    image: '/videos/images/DSC01937.jpg',
    title: 'Assembly Line',
    category: 'Production',
  },
  {
    image: '/videos/images/tools-and-materials-for-shoe-making-on-worktable-2026-03-11-07-03-57-utc.jpg.jpeg',
    title: 'The Studio',
    category: 'Tools & Materials',
  },
  {
    image: '/videos/images/DSC01971.jpg',
    title: 'Final QC',
    category: 'Quality Control',
  },
];

export default function ImageCarousel() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 md:py-40 border-y border-border/30 overflow-hidden">
      {/* All hover effects via pure CSS — no React state, no re-renders */}
      <style>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        .carousel-track-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .carousel-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          will-change: transform;
        }

        .carousel-track.left {
          animation: scroll-left 60s linear infinite;
        }

        .carousel-track.right {
          animation: scroll-right 60s linear infinite;
        }

        /* Pause on hover — pure CSS, zero JS */
        .carousel-track:hover {
          animation-play-state: paused;
        }

        .carousel-card {
          position: relative;
          flex-shrink: 0;
          width: 420px;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 0.75rem;
          cursor: pointer;
          isolation: isolate;
        }

        .carousel-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(100%);
          transform: scale(1.06) translateZ(0);
          will-change: filter, transform;
          /* Butter-smooth cubic-bezier — fast in, slow out */
          transition:
            filter 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .carousel-card:hover img {
          filter: grayscale(0%);
          transform: scale(1) translateZ(0);
        }

        .carousel-card .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 0.75rem;
          transition: background 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
        }

        .carousel-card:hover .card-overlay {
          background: rgba(0, 0, 0, 0.05);
        }

        .carousel-card .card-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.25rem;
          opacity: 0;
          transform: translateY(6px) translateZ(0);
          pointer-events: none;
          transition:
            opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
            transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .carousel-card:hover .card-label {
          opacity: 1;
          transform: translateY(0) translateZ(0);
        }
      `}</style>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 max-w-[1440px] mx-auto mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      >
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Behind the Scenes
          </p>
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight leading-none">
            THE CRAFT IN MOTION
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed md:text-right">
          A glimpse into our design process — from studio sketches to finished product.
        </p>
      </motion.div>

      {/* Scrolling tracks */}
      <div className="relative carousel-track-container">
        {/* Track 1: Moving Left */}
        <div className="carousel-track left">
          {slides.map((slide, i) => (
            <div key={`a1-${i}`} className="carousel-card">
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <div className="card-overlay" />
              <div className="card-label">
                <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '4px' }}>
                  {slide.category}
                </p>
                <p style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.02em' }}>
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {slides.map((slide, i) => (
            <div key={`b1-${i}`} className="carousel-card">
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <div className="card-overlay" />
              <div className="card-label">
                <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '4px' }}>
                  {slide.category}
                </p>
                <p style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.02em' }}>
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Track 2: Moving Right */}
        <div className="carousel-track right">
          {[...slides].reverse().map((slide, i) => (
            <div key={`a2-${i}`} className="carousel-card">
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <div className="card-overlay" />
              <div className="card-label">
                <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '4px' }}>
                  {slide.category}
                </p>
                <p style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.02em' }}>
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[...slides].reverse().map((slide, i) => (
            <div key={`b2-${i}`} className="carousel-card">
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <div className="card-overlay" />
              <div className="card-label">
                <p style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '4px' }}>
                  {slide.category}
                </p>
                <p style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.4rem', color: '#fff', letterSpacing: '-0.02em' }}>
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
