"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroMedia: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 1.02]);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#FAF8F5] border border-[#EAE7E0] shadow-sm"
      style={{ aspectRatio: "16 / 8.5", minHeight: "340px", maxHeight: "560px" }}
    >
      <motion.div
        style={{ y, scale }}
        className="w-full h-full relative flex items-center justify-center overflow-hidden"
      >
        {/* Subtle background ambient warmth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FFF7ED] via-[#FEF2F2] to-[#EFF6FF] opacity-90" />

        {/* Tactile 3D Spheres Composition */}
        <svg
          viewBox="0 0 1200 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover select-none pointer-events-none"
        >
          <defs>
            {/* Main Center Peach/Pearl Orb Gradient */}
            <radialGradient
              id="peachSphere"
              cx="45%"
              cy="35%"
              r="65%"
              fx="40%"
              fy="25%"
            >
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#FFE0CC" />
              <stop offset="60%" stopColor="#F9A066" />
              <stop offset="85%" stopColor="#DE6B35" />
              <stop offset="100%" stopColor="#A84318" />
            </radialGradient>

            {/* Periwinkle/Blue Sphere Gradient */}
            <radialGradient
              id="blueSphere"
              cx="40%"
              cy="30%"
              r="70%"
              fx="35%"
              fy="25%"
            >
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="30%" stopColor="#94A3B8" />
              <stop offset="70%" stopColor="#475569" />
              <stop offset="100%" stopColor="#1E293B" />
            </radialGradient>

            {/* Left Warm Yellow Orb Gradient */}
            <radialGradient
              id="yellowSphere"
              cx="45%"
              cy="35%"
              r="65%"
              fx="40%"
              fy="25%"
            >
              <stop offset="0%" stopColor="#FEF9C3" />
              <stop offset="35%" stopColor="#FACC15" />
              <stop offset="75%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </radialGradient>

            {/* Right Coral Pink Orb Gradient */}
            <radialGradient
              id="pinkSphere"
              cx="45%"
              cy="35%"
              r="65%"
              fx="40%"
              fy="25%"
            >
              <stop offset="0%" stopColor="#FFE4E6" />
              <stop offset="40%" stopColor="#FB7185" />
              <stop offset="80%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#9F1239" />
            </radialGradient>

            {/* Soft Shadow Filters */}
            <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow
                dx="0"
                dy="28"
                stdDeviation="36"
                floodColor="#1E293B"
                floodOpacity="0.18"
              />
            </filter>
            <filter id="sphereGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Warm Yellow Orb (Partially visible) */}
          <circle
            cx="140"
            cy="360"
            r="230"
            fill="url(#yellowSphere)"
            filter="url(#softShadow)"
          />

          {/* Right Coral Pink Orb (Partially visible) */}
          <circle
            cx="1080"
            cy="380"
            r="220"
            fill="url(#pinkSphere)"
            filter="url(#softShadow)"
          />

          {/* Large Center Peach/Pearl Sphere */}
          <g filter="url(#softShadow)">
            <circle
              cx="580"
              cy="230"
              r="225"
              fill="url(#peachSphere)"
              filter="url(#sphereGlow)"
            />
            {/* Pearlescent highlight sheen */}
            <ellipse
              cx="540"
              cy="160"
              rx="90"
              ry="45"
              fill="#FFFFFF"
              opacity="0.32"
              transform="rotate(-20 540 160)"
            />
            <circle cx="510" cy="140" r="14" fill="#FFFFFF" opacity="0.6" />
          </g>

          {/* Foreground Bottom Soft Periwinkle Sphere */}
          <g filter="url(#softShadow)">
            <ellipse
              cx="520"
              cy="490"
              rx="310"
              ry="210"
              fill="url(#blueSphere)"
            />
            {/* Top specular reflection curve */}
            <path
              d="M330 400 C420 340 600 340 700 410"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.28"
              filter="blur(3px)"
            />
          </g>
        </svg>

        {/* Fine grain overlay for tactile studio texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0.12) 1px, transparent 0)`,
            backgroundSize: "8px 8px",
          }}
        />
      </motion.div>
    </div>
  );
};
