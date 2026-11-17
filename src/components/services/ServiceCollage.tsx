"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceCollageProps {
  id: string;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const ServiceCollage: React.FC<ServiceCollageProps> = ({
  id,
  palette,
}) => {
  return (
    <div className="w-full grid grid-cols-12 gap-3 sm:gap-4 mb-6 sm:mb-8 select-none">
      {/* Large Left Card */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="col-span-8 aspect-[16/11] rounded-2xl overflow-hidden border border-[#EAE8E2] flex items-center justify-center p-6 relative"
        style={{ backgroundColor: palette.primary }}
      >
        {id === "design" && (
          <svg viewBox="0 0 320 220" className="w-full h-full object-contain filter drop-shadow-md">
            <rect x="40" y="30" width="240" height="160" rx="36" fill="#A595B5" />
            <rect x="80" y="70" width="160" height="80" rx="20" fill="#FFFFFF" opacity="0.25" />
          </svg>
        )}
        {id === "development" && (
          <svg viewBox="0 0 320 220" className="w-full h-full object-contain filter drop-shadow-md">
            <rect x="30" y="30" width="260" height="160" rx="30" fill="#EAE8E0" />
            <rect x="60" y="60" width="200" height="100" rx="16" fill="#FFFFFF" opacity="0.8" />
            <circle cx="90" cy="90" r="12" fill="#556F7A" />
            <line x1="120" y1="90" x2="220" y2="90" stroke="#556F7A" strokeWidth="6" strokeLinecap="round" />
            <line x1="90" y1="120" x2="190" y2="120" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
          </svg>
        )}
        {id === "product-ai" && (
          <svg viewBox="0 0 320 220" className="w-full h-full object-contain filter drop-shadow-md">
            <circle cx="160" cy="110" r="70" fill="#E8C7A5" />
            <rect x="130" y="50" width="60" height="120" rx="24" fill="#C29D78" />
          </svg>
        )}
        {/* Tactile stipple grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: "6px 6px",
          }}
        />
      </motion.div>

      {/* Two Stacked Right Cards */}
      <div className="col-span-4 flex flex-col gap-3 sm:gap-4">
        {/* Top Right Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#EAE8E2] flex items-center justify-center p-3 relative"
          style={{ backgroundColor: palette.secondary }}
        >
          <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-white/40" />
          </div>
        </motion.div>

        {/* Bottom Right Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#EAE8E2] flex items-center justify-center p-3 relative"
          style={{ backgroundColor: palette.accent }}
        >
          <div className="w-14 h-14 rounded-full border-4 border-white/25 flex items-center justify-center" />
        </motion.div>
      </div>
    </div>
  );
};
