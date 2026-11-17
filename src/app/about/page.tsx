import React from "react";
import type { Metadata } from "next";
import { aboutData } from "@/data/about";
import { siteConfig } from "@/data/site";
import { Marquee } from "@/components/ui/Marquee";
import { AboutVisualStrip } from "@/components/about/AboutVisualStrip";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Girish Balaso Lade, an engineer by education and software product builder creating browser-first tools and LadeStack.",
};

export default function AboutPage() {
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
              {aboutData.heroTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed max-w-3xl">
              {aboutData.heroSubtitle}
            </p>
          </div>

          {/* Horizontal Visual Strip */}
          <div className="mt-12 sm:mt-16">
            <AboutVisualStrip />
          </div>
        </div>
      </section>

      {/* 2. Mission Section (Split Layout matching screenshot) */}
      <section className="w-full py-16 sm:py-20 md:py-24 border-b border-[#EAE8E2] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
            {/* Left Label */}
            <div className="md:col-span-4">
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-black">
                {aboutData.missionLabel}
              </span>
            </div>

            {/* Right Story Copy */}
            <div className="md:col-span-8 flex flex-col gap-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black uppercase">
                {aboutData.missionHeading}
              </h2>
              {aboutData.missionParagraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base md:text-lg text-neutral-700 leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technology Marquee */}
      <Marquee items={siteConfig.technologies} speed={36} />

      {/* 4. What I Work Across (Replacing Meet The Team, 3x2 Grid) */}
      <section className="w-full py-20 sm:py-24 md:py-28 border-b border-[#EAE8E2] bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black uppercase">
              WHAT I WORK ACROSS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-medium max-w-md">
              Core technical focus areas spanning interface craftsmanship,
              browser engineering, and practical tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {aboutData.focusAreas.map((area, idx) => (
              <div
                key={area.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE8E2] shadow-xs flex flex-col justify-between hover:border-black/30 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                      {area.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-black uppercase mb-3">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Values (Full-Width Black Section matching screenshot) */}
      <section className="w-full bg-black text-white py-20 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-12 sm:mb-16 pb-8 border-b border-neutral-800">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
              CORE VALUES
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-medium max-w-md">
              Principles that guide architecture, design decisions, and how I
              build software.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-neutral-850">
            {aboutData.coreValues.map((val) => (
              <div
                key={val.number}
                className="py-8 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="md:col-span-5 flex items-baseline gap-4 sm:gap-6">
                  <span className="text-sm font-mono font-bold text-neutral-500">
                    {val.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-white">
                    {val.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How I Build (White Section, 2x2 Grid matching screenshot) */}
      <section className="w-full py-20 sm:py-24 md:py-28 bg-white border-b border-[#EAE8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black uppercase">
              HOW I BUILD
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-medium max-w-md">
              A disciplined process moving from constraint analysis to
              dependable implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {aboutData.howIBuild.map((step) => (
              <div
                key={step.number}
                className="p-8 rounded-2xl bg-[#F9F8F5] border border-[#EAE8E2] flex flex-col justify-between"
              >
                <span className="text-xs font-mono font-bold text-neutral-400 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Signature CTA Section */}
      <CTASection
        headline="HAVE A CHALLENGE FOR ME?"
        subheadline="I ENJOY SOLVING HARD PROBLEMS."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </div>
  );
}
