'use client';

import Link from 'next/link';
import MagneticButton from '@/components/magnetic-button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-heading text-[10rem] md:text-[16rem] leading-none tracking-tight text-foreground/5">
          404
        </h1>
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2 -mt-8">
          Page not found
        </p>
        <p className="text-sm text-muted-foreground/60 mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <MagneticButton
          href="/"
          className="inline-flex items-center gap-3 px-8 py-4 border border-foreground/20 rounded-full text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-500"
        >
          Back Home
        </MagneticButton>
      </div>
    </div>
  );
}
