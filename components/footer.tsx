'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const footerLinks = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Twitter' },
  { href: '#', label: 'Behance' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image 
                src="/videos/images/atk logo@3x.png" 
                alt="ATK Logo" 
                width={330} 
                height={110} 
                className="w-auto h-[60px] md:h-[80px] lg:h-[110px]" 
              />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-md leading-relaxed">
              Footwear Strategy, Design & Brand Building. 25+ years of global experience from concept to consumer.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Social</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 ATK Designs. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            ATK Designs &mdash; Footwear Strategy, Design & Brand Building.
          </p>
        </div>
      </div>
    </footer>
  );
}
