import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { insightsData } from "@/data/insights";
import { ArtworkCard } from "@/components/ui/ArtworkCard";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes, practical explorations, and architectural observations on local-first web tools, browser IDEs, and developer tooling by Girish Lade.",
};

export default function InsightsPage() {
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
              INSIGHTS
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed max-w-2xl">
              Notes and practical explorations on product design, frontend
              engineering, browser-first software, developer tools,
              privacy-conscious architecture, and AI-assisted product development.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Two-Column Card Grid matching screenshot */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {insightsData.map((item) => (
              <article key={item.slug} className="flex flex-col">
                <Link href={`/insights/${item.slug}`} className="group block">
                  {/* Ink Illustration Card */}
                  <ArtworkCard
                    graphic={item.graphic}
                    className="w-full h-72 sm:h-80 md:h-96"
                  />

                  {/* Title & Category Line */}
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-extrabold text-base sm:text-lg md:text-xl tracking-tight uppercase text-black group-hover:text-neutral-700 transition-colors">
                        {item.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-xs font-semibold text-neutral-500">
                          {item.category}
                        </span>
                        <span className="text-neutral-300">•</span>
                        <span className="text-xs font-medium text-neutral-500">
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <span
                      aria-hidden="true"
                      className="text-xs sm:text-sm font-bold text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all pt-1 shrink-0"
                    >
                      Read post →
                    </span>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.summary}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Signature CTA Section */}
      <CTASection
        headline="WANT TO EXPLORE AN ARCHITECTURE?"
        subheadline="LET'S DISCUSS TECHNICAL IDEAS."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </div>
  );
}
