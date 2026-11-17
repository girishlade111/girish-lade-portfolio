import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServiceCollage } from "@/components/services/ServiceCollage";
import { TagChip } from "@/components/ui/TagChip";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design, frontend engineering, developer tooling, and product implementation by Girish Lade.",
};

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <section className="w-full pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 border-b border-[#EAE8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h1
              className="font-editorial text-black tracking-tighter uppercase leading-[0.9] mb-6 sm:mb-8"
              style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)" }}
            >
              SERVICES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed max-w-2xl">
              Design, engineering, product thinking, and technical
              implementation for useful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Services Stack matching screenshot */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col divide-y divide-[#EAE8E2]">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="py-16 sm:py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
              >
                {/* Left Column: Big Bold Service Title */}
                <div className="md:col-span-4">
                  <div className="sticky top-24">
                    <span className="text-xs font-mono font-bold text-neutral-400 block mb-2">
                      {service.number}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black uppercase">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Column: 3-Image Collage + Description + Chips */}
                <div className="md:col-span-8 flex flex-col">
                  {/* Image Collage */}
                  <ServiceCollage
                    id={service.id}
                    palette={service.palette}
                  />

                  {/* Description Paragraph */}
                  <p className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed font-normal mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 pt-4 border-t border-[#F2F0EB]">
                    {service.capabilities.map((cap, capIdx) => (
                      <div key={capIdx} className="flex flex-col">
                        <h4 className="text-xs font-extrabold uppercase tracking-tight text-black mb-1">
                          {cap.name}
                        </h4>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technology / Method Tag Chips */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#F2F0EB]">
                    {service.tags.map((tag, tagIdx) => (
                      <TagChip key={tagIdx} label={tag} theme="light" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Signature Warm Yellow Gradient CTA */}
      <CTASection
        headline="HAVE A PROJECT IN MIND?"
        subheadline="LET'S CRAFT SOMETHING REMARKABLE."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </div>
  );
}
