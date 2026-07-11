import Hero from '@/components/sections/HeroSection';
import ServicesList from '@/components/sections/ServicesList';
import CTABanner from '@/components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesList />
      <CTABanner />
    </>
  );
}