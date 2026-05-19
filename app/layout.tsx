import './globals.css';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import GrainOverlay from '@/components/grain-overlay';
import SmoothScroll from '@/components/smooth-scroll';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://atk-designs.com'),
  title: 'ATK Designs | Footwear Strategy, Design & Brand Building',
  description:
    'A footwear design consultancy built on 25+ years of global brand experience. From concept to commercially loved product, we help brands build identity, drive sales, and create design that resonates.',
  keywords: ['footwear design', 'shoe design', 'brand strategy', 'product development', 'Abdul Tawwab Khan', 'footwear consultancy'],
  openGraph: {
    title: 'ATK Designs | Footwear Strategy, Design & Brand Building',
    description: 'A footwear design consultancy built on 25+ years of global brand experience.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ATK Designs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATK Designs | Footwear Strategy, Design & Brand Building',
    description: 'A footwear design consultancy built on 25+ years of global brand experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} dark`}>
      <body className="font-body antialiased">
        <SmoothScroll>
          <GrainOverlay />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
