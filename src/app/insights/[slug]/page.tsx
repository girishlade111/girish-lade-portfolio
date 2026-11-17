import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insightsData } from "@/data/insights";
import { ArtworkCard } from "@/components/ui/ArtworkCard";
import { CTASection } from "@/components/ui/CTASection";

interface InsightDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insightsData.find((i) => i.slug === slug);
  if (!insight) return { title: "Insight Not Found" };

  return {
    title: insight.title,
    description: insight.summary,
  };
}

export default async function InsightDetailPage({
  params,
}: InsightDetailPageProps) {
  const { slug } = await params;
  const insight = insightsData.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  const currentIndex = insightsData.findIndex((i) => i.slug === slug);
  const nextInsight = insightsData[(currentIndex + 1) % insightsData.length];

  return (
    <article className="w-full flex flex-col">
      {/* Header & Title Area */}
      <section className="w-full pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-14 border-b border-[#EAE8E2] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <Link
            href="/insights"
            className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black mb-6 transition-colors"
          >
            <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>Back to Insights</span>
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#997A00] bg-[#FFF8CC] px-2.5 py-1 rounded-full">
              {insight.category}
            </span>
            <span className="text-xs font-semibold text-neutral-400">
              {insight.status}
            </span>
          </div>

          <h1
            className="font-editorial text-black tracking-tighter uppercase leading-[0.95] mb-6"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            {insight.title}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-neutral-700 font-medium leading-relaxed">
            {insight.summary}
          </p>
        </div>
      </section>

      {/* Main Content & Art Area */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Centered Ink Art Container */}
          <div className="mb-12">
            <ArtworkCard
              graphic={insight.graphic}
              className="w-full h-72 sm:h-84 md:h-96"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F7F3] border border-[#EAE8E2] mb-12">
            <h3 className="text-xs font-extrabold tracking-widest uppercase text-black mb-4">
              ARCHITECTURAL TAKEAWAYS
            </h3>
            <ul className="space-y-3">
              {insight.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                  <span className="text-[#FFCE00] font-extrabold text-sm leading-none pt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Body Paragraphs */}
          <div className="prose prose-neutral max-w-none flex flex-col gap-6 text-sm sm:text-base md:text-lg text-neutral-800 leading-relaxed font-normal">
            {insight.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Next Article Route Link */}
          <div className="mt-16 pt-10 border-t border-[#EAE8E2] flex items-center justify-between">
            <Link
              href="/insights"
              className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
            >
              ← All Insights
            </Link>

            <Link
              href={`/insights/${nextInsight.slug}`}
              className="group flex flex-col items-end text-right"
            >
              <span className="text-xs font-mono font-bold text-neutral-400">NEXT INSIGHT</span>
              <span className="text-xs sm:text-sm font-extrabold uppercase text-black group-hover:text-neutral-600 transition-colors">
                {nextInsight.title} →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Signature CTA */}
      <CTASection
        headline="WANT TO COLLABORATE?"
        subheadline="LET'S BUILD DEPENDABLE TOOLS."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </article>
  );
}
