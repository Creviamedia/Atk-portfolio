import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability | ATK Designs',
  description: 'Our commitment to responsible footwear design, ethical sourcing, and creating a sustainable footprint across the value chain.',
};

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
