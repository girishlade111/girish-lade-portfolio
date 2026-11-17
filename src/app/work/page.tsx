import React from "react";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected developer utilities, browser-native IDEs, PDF tools, and web applications created by Girish Lade.",
};

export default function WorkPage() {
  const publicProjects = projectsData.filter(
    (p) => p.status === "Public / Documented Product"
  );
  const experimentalProjects = projectsData.filter(
    (p) => p.status === "Experimental / Verification Pending"
  );

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
              WORK
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed max-w-2xl">
              Selected products and experiments across developer tools, document
              workflows, browser-native software, UI/UX, and practical web
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Public / Documented Products */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-white border-b border-[#EAE8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-10 sm:mb-14 pb-4 border-b border-[#EAE8E2] flex items-baseline justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">
                GROUP A
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-black uppercase">
                PUBLIC & DOCUMENTED PRODUCTS
              </h2>
            </div>
            <span className="text-xs font-semibold text-neutral-500 hidden sm:inline">
              {publicProjects.length} Verified Entries
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-14">
            {publicProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                aspectOverride="aspect-[16/10]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Experimental / Verification Pending Section */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mb-10 sm:mb-14 pb-4 border-b border-[#EAE8E2]">
            <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">
              GROUP B
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-black uppercase">
              EXPERIMENTAL & PROVISIONAL WORK
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600">
              Active engineering explorations where capabilities are under ongoing verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
            {experimentalProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                aspectOverride="aspect-[16/10]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Signature CTA */}
      <CTASection
        headline="HAVE A PROJECT TO DISCUSS?"
        subheadline="LET'S BUILD DEPENDABLE SOFTWARE."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </div>
  );
}
