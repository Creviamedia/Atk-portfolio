'use client';

import { brands } from '@/lib/data';

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 md:py-24 border-y border-border/30 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="mx-8 md:mx-12 text-2xl md:text-4xl font-heading tracking-[0.2em] text-muted-foreground/40 select-none"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
