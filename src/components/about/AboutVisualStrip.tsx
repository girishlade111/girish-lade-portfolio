"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutVisualStrip: React.FC = () => {
  const cards = [
    {
      title: "Tactile Design",
      bg: "bg-[#EAE4DC]",
      accent: "#B89F82",
      content: (
        <svg viewBox="0 0 200 240" className="w-full h-full object-contain p-4">
          <ellipse cx="100" cy="90" rx="50" ry="38" fill="#F4EDE4" />
          <ellipse cx="65" cy="140" rx="42" ry="32" fill="#E2D4C5" />
          <ellipse cx="135" cy="150" rx="46" ry="35" fill="#C5B099" />
        </svg>
      ),
    },
    {
      title: "Code Studio",
      bg: "bg-[#252830]",
      accent: "#4A5263",
      content: (
        <svg viewBox="0 0 200 240" className="w-full h-full object-contain p-4">
          <rect x="25" y="35" width="150" height="170" rx="16" fill="#1A1C22" />
          <circle cx="45" cy="55" r="5" fill="#EF4444" />
          <circle cx="62" cy="55" r="5" fill="#F59E0B" />
          <circle cx="79" cy="55" r="5" fill="#10B981" />
          <line x1="45" y1="85" x2="110" y2="85" stroke="#FFCE00" strokeWidth="4" strokeLinecap="round" />
          <line x1="45" y1="105" x2="155" y2="105" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <line x1="45" y1="125" x2="135" y2="125" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
          <line x1="45" y1="145" x2="90" y2="145" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
        </svg>
      ),
    },
    {
      title: "Local-First Documents",
      bg: "bg-[#DFE7E2]",
      accent: "#A6BAAE",
      content: (
        <svg viewBox="0 0 200 240" className="w-full h-full object-contain p-4">
          <rect x="35" y="35" width="130" height="170" rx="14" fill="#FFFFFF" />
          <rect x="55" y="65" width="90" height="12" rx="6" fill="#D1DDD5" />
          <rect x="55" y="90" width="70" height="8" rx="4" fill="#E2ECE6" />
          <rect x="55" y="110" width="90" height="8" rx="4" fill="#E2ECE6" />
          <rect x="55" y="130" width="60" height="8" rx="4" fill="#E2ECE6" />
          <circle cx="100" cy="170" r="16" fill="#4A5D4E" />
          <path d="M94 170 L98 174 L106 166" stroke="#FFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      title: "Physical Prototyping",
      bg: "bg-[#F0EBE1]",
      accent: "#D6C7B2",
      content: (
        <svg viewBox="0 0 200 240" className="w-full h-full object-contain p-4">
          <circle cx="100" cy="120" r="65" stroke="#A8977F" strokeWidth="8" fill="none" strokeDasharray="12 8" />
          <circle cx="100" cy="120" r="30" fill="#CBB89F" />
          <line x1="100" y1="40" x2="100" y2="200" stroke="#8C7960" strokeWidth="3" />
          <line x1="20" y1="120" x2="180" y2="120" stroke="#8C7960" strokeWidth="3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 no-scrollbar">
      <div className="flex items-center gap-4 sm:gap-6 min-w-max px-4 sm:px-0">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={`w-56 sm:w-64 md:w-72 h-64 sm:h-76 md:h-84 rounded-2xl ${card.bg} border border-[#EAE8E2] overflow-hidden flex flex-col justify-between p-4 shadow-xs select-none`}
          >
            <div className="flex-1 w-full flex items-center justify-center">
              {card.content}
            </div>
            <div className="pt-2 border-t border-black/5 flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-black/70">
                {card.title}
              </span>
              <span className="text-xs font-mono text-black/40">
                0{idx + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
