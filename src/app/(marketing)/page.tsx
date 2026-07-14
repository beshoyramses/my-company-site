import Hero from "@/components/sections/HeroSection";
import ServicesList from "@/components/sections/ServicesList";
import CTABanner from "@/components/sections/CTABanner";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <ServicesList />
      <CTABanner />
    </>
  );
}
