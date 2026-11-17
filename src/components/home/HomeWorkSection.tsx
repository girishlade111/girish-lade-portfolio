"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { fadeUp } from "@/lib/motion";

export const HomeWorkSection: React.FC = () => {
  const ladestack = projectsData.find((p) => p.slug === "ladestack")!;
  const gbCoder = projectsData.find((p) => p.slug === "gb-coder")!;
  const lsPdf = projectsData.find((p) => p.slug === "ls-pdf")!;
  const md2pdf = projectsData.find((p) => p.slug === "md2pdf")!;
  const bharatLand = projectsData.find(
    (p) => p.slug === "bharat-land-converter"
  )!;

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 border-t border-[#EAE8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black uppercase">
            WORK
          </h2>
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-600 hover:text-black uppercase tracking-wider transition-colors"
          >
            <span>All Projects</span>
            <span
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform"
            >
              →
            </span>
          </Link>
        </div>

        {/* Asymmetrical Screenshot Grid Layout */}
        <div className="flex flex-col gap-10 sm:gap-14 md:gap-18">
          {/* Row 1: Left Medium Card + Right Tall Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end"
          >
            <div className="md:col-span-7">
              <ProjectCard project={ladestack} aspectOverride="aspect-[16/11]" />
            </div>
            <div className="md:col-span-5">
              <ProjectCard project={gbCoder} aspectOverride="aspect-[4/5]" />
            </div>
          </motion.div>

          {/* Row 2: Full-Width Center Panoramic Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeUp}
            className="w-full"
          >
            <ProjectCard project={lsPdf} aspectOverride="aspect-[16/8] sm:aspect-[21/9]" />
          </motion.div>

          {/* Row 3: Left Card + Right Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "100px" }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start"
          >
            <div className="md:col-span-5">
              <ProjectCard project={md2pdf} aspectOverride="aspect-[4/3]" />
            </div>
            <div className="md:col-span-7">
              <ProjectCard
                project={bharatLand}
                aspectOverride="aspect-[16/11]"
              />
            </div>
          </motion.div>
        </div>

        {/* Link to all projects */}
        <div className="mt-14 sm:mt-18 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 hover:border-black text-xs sm:text-sm font-bold uppercase tracking-wider text-black transition-all"
          >
            <span>Explore All 8+ Projects</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
