"use client";

import React from "react";
import { motion } from "framer-motion";

export const StudioUnderline: React.FC<{ className?: string }> = ({
  className = "w-44 md:w-64 lg:w-80",
}) => {
  return (
    <svg
      viewBox="0 0 280 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#FFCE00] overflow-visible ${className}`}
    >
      <motion.path
        d="M4 14 C45 6 95 18 140 10 C185 2 235 16 276 9"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
};

export const StudioAccentTicks: React.FC<{ className?: string }> = ({
  className = "w-10 h-10 md:w-14 md:h-14",
}) => {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#FFCE00] ${className}`}
    >
      <motion.g
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <path
          d="M14 42 L24 14"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M28 40 L38 10"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M42 44 L50 18"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
};
