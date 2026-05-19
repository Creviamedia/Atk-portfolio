import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | ATK Designs',
  description: 'Selected projects across global and Indian footwear brands. From concept sketches to factory floor.',
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
