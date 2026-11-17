import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { TagChip } from "@/components/ui/TagChip";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="w-full flex flex-col">
      {/* 1. Project Hero Header */}
      <section className="w-full pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-14 border-b border-[#EAE8E2] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Breadcrumb / Back Link */}
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black mb-6 transition-colors"
          >
            <span aria-hidden="true" className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span>Back to Work</span>
          </Link>

          {/* Project Category & Status Badge */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-black bg-[#EAE8E2] px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                project.status.includes("Experimental")
                  ? "bg-amber-100 text-amber-900 border border-amber-200"
                  : "bg-neutral-100 text-neutral-600 border border-neutral-200"
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Big Editorial Serif Project Name */}
          <h1
            className="font-editorial text-black tracking-tighter uppercase leading-[0.9] mb-6"
            style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
          >
            {project.name}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed max-w-3xl">
            {project.summary}
          </p>

          {/* Direct External Action Links */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.website && (
              <Button href={project.website} variant="primary" external>
                Visit Website
              </Button>
            )}
            {project.repository && (
              <Button href={project.repository} variant="secondary" external>
                View Repository
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* 2. Project Hero Media Showcase */}
      <section className="w-full py-12 sm:py-16 bg-[#FAF9F6] border-b border-[#EAE8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div
            className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl border border-[#EAE8E2] shadow-sm flex items-center justify-center p-8 relative overflow-hidden"
            style={{ backgroundColor: project.visualTheme.bg }}
          >
            <div className="flex flex-col items-center justify-center text-center text-white/90 select-none">
              <span className="font-editorial text-4xl sm:text-6xl md:text-8xl uppercase tracking-tight text-white drop-shadow-md">
                {project.name}
              </span>
              <span className="mt-3 text-xs sm:text-sm font-extrabold uppercase tracking-widest opacity-80">
                {project.category}
              </span>
            </div>
            {/* Fine grain */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
              style={{
                backgroundImage: `radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)`,
                backgroundSize: "6px 6px",
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. Detailed Specifications & Use Cases */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
            {/* Left Column: Metadata & Role */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-1">
                  ROLE
                </h3>
                <p className="text-sm font-bold text-black">{project.role}</p>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-1">
                  STATUS
                </h3>
                <p className="text-sm font-semibold text-neutral-700">
                  {project.status}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-2">
                  TECHNOLOGY STACK
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <TagChip key={idx} label={t} theme="light" />
                  ))}
                </div>
              </div>

              {project.repository && (
                <div>
                  <h3 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-1">
                    SOURCE REPOSITORY
                  </h3>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-neutral-600 hover:text-black underline break-all"
                  >
                    {project.repository.replace("https://github.com/", "")}
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Overview, Three Use Cases, Challenge */}
            <div className="md:col-span-8 flex flex-col gap-10">
              {/* Overview */}
              <div>
                <h2 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-3">
                  OVERVIEW
                </h2>
                <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                  {project.overview}
                </p>
              </div>

              {/* Three Primary Use Cases */}
              <div className="pt-6 border-t border-[#EAE8E2]">
                <h2 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-6">
                  PRIMARY USE CASES
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {project.useCases.map((uc, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-[#FAF9F6] border border-[#EAE8E2] flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-neutral-400 block mb-2">
                          0{idx + 1}
                        </span>
                        <h4 className="text-sm font-extrabold uppercase tracking-tight text-black mb-2">
                          {uc.title}
                        </h4>
                      </div>
                      <p className="text-xs text-neutral-600 leading-relaxed mt-2">
                        {uc.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Challenge */}
              <div className="pt-6 border-t border-[#EAE8E2]">
                <h2 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest mb-3">
                  ENGINEERING CHALLENGE
                </h2>
                <div className="p-6 rounded-xl bg-[#F5F4EE] border border-[#E6E4DD]">
                  <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Next Project Link */}
              <div className="mt-8 pt-8 border-t border-[#EAE8E2] flex items-center justify-between">
                <Link
                  href="/work"
                  className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
                >
                  ← All Projects
                </Link>

                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group flex flex-col items-end text-right"
                >
                  <span className="text-xs font-mono font-bold text-neutral-400">NEXT PROJECT</span>
                  <span className="text-xs sm:text-sm font-extrabold uppercase text-black group-hover:text-neutral-600 transition-colors">
                    {nextProject.name} →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature CTA */}
      <CTASection
        headline="WANT TO BUILD TOGETHER?"
        subheadline="LET'S CREATE SOMETHING DEPENDABLE."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </article>
  );
}
