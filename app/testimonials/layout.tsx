import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | ATK Designs',
  description: 'What industry leaders, global directors, and consultants say about Abdul Tawwab Khan and the creative impact of ATK Designs.',
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
