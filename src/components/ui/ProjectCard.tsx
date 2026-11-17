"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  aspectOverride?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  aspectOverride,
  className = "",
}) => {
  // Determine aspect ratio class
  const aspectClass =
    aspectOverride ||
    (project.visualTheme.aspect === "tall"
      ? "aspect-[4/5] sm:aspect-[3/4]"
      : project.visualTheme.aspect === "wide"
      ? "aspect-[16/9] sm:aspect-[21/9]"
      : "aspect-[16/10] sm:aspect-[4/3]");

  return (
    <Link href={`/work/${project.slug}`} className={`group block ${className}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col"
      >
        {/* Card Media Container */}
        <div
          className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden border border-[#EAE7E0] shadow-xs transition-shadow duration-300 group-hover:shadow-md flex items-center justify-center`}
          style={{ backgroundColor: project.visualTheme.bg }}
        >
          {/* Tactile Stylized Graphic Representation matching screenshot aesthetics */}
          <div className="absolute inset-0 flex items-center justify-center p-6 select-none overflow-hidden">
            {project.slug === "ladestack" && (
              <svg
                viewBox="0 0 500 340"
                className="w-full h-full object-contain filter drop-shadow-lg"
              >
                <defs>
                  <linearGradient id="lsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C4B5D4" />
                    <stop offset="60%" stopColor="#8A779C" />
                    <stop offset="100%" stopColor="#554266" />
                  </linearGradient>
                </defs>
                <rect
                  x="60"
                  y="40"
                  width="380"
                  height="260"
                  rx="48"
                  fill="url(#lsGrad)"
                />
                <circle cx="150" cy="130" r="45" fill="#FFFFFF" opacity="0.25" />
                <rect
                  x="220"
                  y="110"
                  width="180"
                  height="20"
                  rx="10"
                  fill="#FFFFFF"
                  opacity="0.3"
                />
                <rect
                  x="220"
                  y="145"
                  width="140"
                  height="16"
                  rx="8"
                  fill="#FFFFFF"
                  opacity="0.2"
                />
                <path
                  d="M100 240 C180 200 320 280 400 220"
                  stroke="#FFFFFF"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.3"
                  fill="none"
                />
              </svg>
            )}

            {project.slug === "gb-coder" && (
              <svg
                viewBox="0 0 400 500"
                className="w-full h-full object-contain filter drop-shadow-xl"
              >
                <defs>
                  <linearGradient id="gbGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                    <stop offset="0%" stopColor="#94B3BE" />
                    <stop offset="50%" stopColor="#556F7A" />
                    <stop offset="100%" stopColor="#2A3C44" />
                  </linearGradient>
                </defs>
                {/* Sleek rounded handheld / device form */}
                <rect
                  x="70"
                  y="40"
                  width="260"
                  height="420"
                  rx="64"
                  fill="url(#gbGrad)"
                />
                <rect
                  x="100"
                  y="80"
                  width="200"
                  height="260"
                  rx="24"
                  fill="#1E293B"
                  opacity="0.4"
                />
                <circle cx="200" cy="395" r="24" fill="#FFFFFF" opacity="0.25" />
                {/* Code-like lines inside screen */}
                <line
                  x1="120"
                  y1="120"
                  x2="200"
                  y2="120"
                  stroke="#FFCE00"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <line
                  x1="120"
                  y1="150"
                  x2="260"
                  y2="150"
                  stroke="#FFFFFF"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <line
                  x1="120"
                  y1="180"
                  x2="240"
                  y2="180"
                  stroke="#FFFFFF"
                  strokeWidth="5"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            )}

            {project.slug === "ls-pdf" && (
              <svg
                viewBox="0 0 800 360"
                className="w-full h-full object-contain filter drop-shadow-md"
              >
                <defs>
                  <linearGradient id="pdfGrad" x1="0%" y1="0%" x2="100%" y2="50%">
                    <stop offset="0%" stopColor="#F5F4EE" />
                    <stop offset="50%" stopColor="#E2E0D5" />
                    <stop offset="100%" stopColor="#BFBBAE" />
                  </linearGradient>
                </defs>
                {/* Wide sleek rounded slab */}
                <rect
                  x="60"
                  y="30"
                  width="680"
                  height="300"
                  rx="50"
                  fill="url(#pdfGrad)"
                />
                <rect
                  x="110"
                  y="70"
                  width="580"
                  height="220"
                  rx="30"
                  fill="#FFFFFF"
                  opacity="0.75"
                />
                {/* Clean document icons & grid */}
                <rect
                  x="160"
                  y="110"
                  width="120"
                  height="140"
                  rx="16"
                  fill="#EAE8E0"
                />
                <rect
                  x="340"
                  y="110"
                  width="120"
                  height="140"
                  rx="16"
                  fill="#EAE8E0"
                />
                <rect
                  x="520"
                  y="110"
                  width="120"
                  height="140"
                  rx="16"
                  fill="#EAE8E0"
                />
              </svg>
            )}

            {project.slug === "md2pdf" && (
              <svg
                viewBox="0 0 500 340"
                className="w-full h-full object-contain filter drop-shadow-lg"
              >
                <defs>
                  <linearGradient id="mdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EAD7BD" />
                    <stop offset="60%" stopColor="#C4A47C" />
                    <stop offset="100%" stopColor="#8C6A43" />
                  </linearGradient>
                </defs>
                <circle cx="250" cy="170" r="130" fill="url(#mdGrad)" />
                <path
                  d="M190 130 L220 210 L250 150 L280 210 L310 130"
                  stroke="#FFFFFF"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            )}

            {project.slug === "bharat-land-converter" && (
              <svg
                viewBox="0 0 500 340"
                className="w-full h-full object-contain filter drop-shadow-xl"
              >
                <defs>
                  <linearGradient id="landGrad" x1="10%" y1="0%" x2="90%" y2="100%">
                    <stop offset="0%" stopColor="#7E9683" />
                    <stop offset="50%" stopColor="#4A5D4E" />
                    <stop offset="100%" stopColor="#253528" />
                  </linearGradient>
                </defs>
                {/* Tactile curved headphone / organic form */}
                <path
                  d="M130 250 C120 120 380 120 370 250"
                  stroke="url(#landGrad)"
                  strokeWidth="48"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="130" cy="240" r="54" fill="#364539" />
                <circle cx="370" cy="240" r="54" fill="#364539" />
              </svg>
            )}

            {project.slug !== "ladestack" &&
              project.slug !== "gb-coder" &&
              project.slug !== "ls-pdf" &&
              project.slug !== "md2pdf" &&
              project.slug !== "bharat-land-converter" && (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-white/80">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <span className="font-extrabold text-2xl text-white">
                      {project.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase opacity-75">
                    {project.category}
                  </span>
                </div>
              )}
          </div>

          {/* Subtle noise grain */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)`,
              backgroundSize: "6px 6px",
            }}
          />
        </div>

        {/* Card Title & Link Line below Image */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between">
          <h3 className="font-extrabold text-sm sm:text-base md:text-lg tracking-tight text-black uppercase group-hover:text-neutral-700 transition-colors">
            {project.name}
          </h3>
          <span
            aria-hidden="true"
            className="text-xs sm:text-sm font-bold text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all"
          >
            ↗
          </span>
        </div>

        {/* Short summary */}
        <p className="mt-1 text-xs sm:text-sm text-neutral-600 line-clamp-2 font-normal leading-relaxed">
          {project.summary}
        </p>
      </motion.div>
    </Link>
  );
};
