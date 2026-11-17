"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { insightsData } from "@/data/insights";
import { ArtworkCard } from "@/components/ui/ArtworkCard";
import { fadeUp } from "@/lib/motion";

export const HomeInsightsSection: React.FC = () => {
  // Show first 4 insights on homepage
  const featuredInsights = insightsData.slice(0, 4);

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 border-t border-[#EAE8E2] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black uppercase">
              INSIGHTS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-medium max-w-lg">
              Notes and practical explorations on local-first engineering,
              browser runtimes, and thoughtful tool architecture.
            </p>
          </div>
          <Link
            href="/insights"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-600 hover:text-black uppercase tracking-wider transition-colors"
          >
            <span>All Insights</span>
            <span
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform"
            >
              →
            </span>
          </Link>
        </div>

        {/* 2-Column Card Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredInsights.map((insight, idx) => (
            <motion.div
              key={insight.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
            >
              <Link href={`/insights/${insight.slug}`} className="group block">
                {/* Ink Graphic Container */}
                <ArtworkCard
                  graphic={insight.graphic}
                  className="w-full h-64 sm:h-72 md:h-80"
                />

                {/* Title & Category Line */}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base md:text-lg tracking-tight uppercase text-black group-hover:text-neutral-700 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500 font-medium">
                      {insight.category} · {insight.status}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-xs sm:text-sm font-bold text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all pt-1 shrink-0"
                  >
                    Read post →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
