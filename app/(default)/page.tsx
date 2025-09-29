export const metadata = {
  title: "ArkAngel - Real work. Real data. Real AI.",
  description: "ArkAngel captures real world expertise with consent, turning it into the missing dataset that powers the next generation of AI. Free copilot for professionals. Privacy first by design.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
