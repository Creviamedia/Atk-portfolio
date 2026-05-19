import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | ATK Designs',
  description: 'Fully integrated footwear consultancy. Brand Strategy, Footwear Design, Product Development, and Manufacturing Oversight.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
