import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | ATK Designs',
  description: 'Reach us for footwear design, brand strategy, and manufacturing consultancy.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
