import HeroSection from '@/components/hero-section';
import BrandsMarquee from '@/components/brands-marquee';
import HorizontalScrollStrip from '@/components/horizontal-scroll-strip';
import ImageCarousel from '@/components/image-carousel';
import WorkSection from '@/components/work-section';
import TeamSection from '@/components/team-section';
import TestimonialsSection from '@/components/testimonials-section';
import VideoShowcase from '@/components/video-showcase';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandsMarquee />
      <HorizontalScrollStrip />
      <ImageCarousel />
      <WorkSection />
      <TeamSection />
      <TestimonialsSection />
      <VideoShowcase />
      <ContactSection />
    </>
  );
}
