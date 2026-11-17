import React from "react";
import { HomeHero } from "@/components/home/HomeHero";
import { Marquee } from "@/components/ui/Marquee";
import { HomeWorkSection } from "@/components/home/HomeWorkSection";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";
import { HomeInsightsSection } from "@/components/home/HomeInsightsSection";
import { CTASection } from "@/components/ui/CTASection";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <HomeHero />

      {/* 2. Technology Marquee Strip */}
      <Marquee items={siteConfig.technologies} speed={40} />

      {/* 3. Work Section (Asymmetric project grid) */}
      <HomeWorkSection />

      {/* 4. Full-Width Black Services Section */}
      <HomeServicesSection />

      {/* 5. Insights Section (2-column editorial cards with ink graphics) */}
      <HomeInsightsSection />

      {/* 6. Signature Warm Yellow Gradient CTA */}
      <CTASection
        headline="LET'S BUILD SOMETHING USEFUL."
        subheadline="GOOD TOOLS START WITH REAL PROBLEMS."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </div>
  );
}
