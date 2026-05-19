'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-28 md:h-32">
            <Link href="/" className="flex items-center">
              <Image
                src="/videos/images/atk logo@3x.png"
                alt="ATK Logo"
                width={270}
                height={90}
                className="w-auto h-12 md:h-16 lg:h-20" priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4">
                <span
                  className={`absolute left-0 w-full h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
                    }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                  className={`absolute left-0 w-full h-[1.5px] bg-foreground transition-all duration-300 ${mobileOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-[22px] tracking-wider hover:text-muted-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
