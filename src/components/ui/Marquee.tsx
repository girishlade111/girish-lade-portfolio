"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  speed = 35,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate list to achieve seamless infinite loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  if (shouldReduceMotion) {
    return (
      <div
        className={`w-full overflow-x-auto py-5 border-y border-[#EAE8E2] flex items-center justify-center gap-8 ${className}`}
      >
        {items.map((item, idx) => (
          <span
            key={idx}
            className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-neutral-800 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`w-full overflow-hidden py-4 sm:py-5 border-y border-[#EAE8E2] bg-white relative flex select-none ${className}`}
    >
      {/* Edge gradient fades for seamless blend */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-10 sm:gap-14 shrink-0"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-10 sm:gap-14">
            <span className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-neutral-800 hover:text-black transition-colors whitespace-nowrap">
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-neutral-300"
              aria-hidden="true"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
