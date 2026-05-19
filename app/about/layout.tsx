import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | ATK Designs',
  description: 'Abdul Tawwab Khan is a brand-obsessed footwear design leader with 25+ years of global experience.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
