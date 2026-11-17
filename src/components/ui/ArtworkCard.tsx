"use client";

import React from "react";
import { motion } from "framer-motion";

interface ArtworkCardProps {
  graphic:
    | "vase-flowers"
    | "coral-branch"
    | "abstract-loop"
    | "single-bloom"
    | "botanical-foliage"
    | "geometric-organic";
  className?: string;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  graphic,
  className = "w-full h-64 sm:h-72 md:h-80",
}) => {
  return (
    <div
      className={`relative rounded-xl md:rounded-2xl bg-[#F4F3F0] flex items-center justify-center overflow-hidden border border-[#EAE8E2] group ${className}`}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center p-8"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {graphic === "vase-flowers" && (
          <svg
            viewBox="0 0 200 240"
            className="w-36 h-48 md:w-44 md:h-56 text-black fill-current drop-shadow-sm"
          >
            {/* Minimalist Ink Vase */}
            <path
              d="M86 160 C80 180 75 220 75 230 C75 235 125 235 125 230 C125 220 120 180 114 160 Z"
              fill="#000"
            />
            {/* Center stem & flower */}
            <path
              d="M100 160 Q98 120 100 70"
              stroke="#000"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M100 68 C85 65 80 50 100 40 C120 50 115 65 100 68 Z"
              fill="#000"
            />
            <path
              d="M88 56 C70 48 70 30 88 40 C95 48 90 54 88 56 Z"
              fill="#000"
            />
            <path
              d="M112 56 C130 48 130 30 112 40 C105 48 110 54 112 56 Z"
              fill="#000"
            />
            {/* Left stem & leaves */}
            <path
              d="M96 160 Q80 110 65 85"
              stroke="#000"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M65 85 C52 75 50 60 68 62 C78 72 72 82 65 85 Z"
              fill="#000"
            />
            <path
              d="M78 115 C66 110 65 98 78 102 C84 108 82 114 78 115 Z"
              fill="#000"
            />
            {/* Right stem & bloom */}
            <path
              d="M104 160 Q120 120 135 90"
              stroke="#000"
              strokeWidth="4.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M135 90 C150 80 152 65 135 68 C122 75 128 86 135 90 Z"
              fill="#000"
            />
            <path
              d="M118 125 C132 120 135 110 120 112 C114 118 116 123 118 125 Z"
              fill="#000"
            />
          </svg>
        )}

        {graphic === "coral-branch" && (
          <svg
            viewBox="0 0 200 240"
            className="w-36 h-48 md:w-44 md:h-56 text-black fill-current drop-shadow-sm"
          >
            {/* Organic Coral Tree / Branch */}
            <path
              d="M96 230 L104 230 C104 190 108 160 112 140 C116 120 125 100 138 80 C145 70 148 55 142 42 C135 32 122 35 122 48 C122 65 110 95 102 115 C96 90 98 60 102 38 C104 22 92 15 85 24 C78 35 80 60 84 90 C78 100 68 115 58 130 C48 145 40 160 38 180 C36 190 46 195 52 188 C60 178 68 155 76 138 C80 160 84 195 96 230 Z"
              fill="#000"
            />
            {/* Side coral tendrils */}
            <path
              d="M118 135 C132 125 152 110 160 90 C165 80 155 70 148 76 C138 85 128 105 116 120 Z"
              fill="#000"
            />
            <path
              d="M74 130 C60 115 48 95 44 75 C40 65 52 55 58 64 C64 78 72 98 80 118 Z"
              fill="#000"
            />
            <path
              d="M125 75 C138 65 145 50 140 40 C132 35 125 45 124 55 Z"
              fill="#000"
            />
          </svg>
        )}

        {graphic === "abstract-loop" && (
          <svg
            viewBox="0 0 200 240"
            className="w-36 h-48 md:w-44 md:h-56 text-black fill-none stroke-current drop-shadow-sm"
          >
            {/* Bold Brush Stroke Ribbon Knot */}
            <path
              d="M60 140 C35 100 50 50 95 55 C140 60 165 110 135 155 C110 190 60 185 55 145 C50 105 110 75 145 100 C175 125 160 175 115 185 C75 195 45 150 70 115 C90 85 140 85 150 120"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {graphic === "single-bloom" && (
          <svg
            viewBox="0 0 200 240"
            className="w-36 h-48 md:w-44 md:h-56 text-black fill-none stroke-current drop-shadow-sm"
          >
            {/* Slender Organic Stem */}
            <path
              d="M102 120 Q105 170 102 230"
              strokeWidth="6"
              strokeLinecap="round"
            />
            {/* Leaf */}
            <path
              d="M102 170 Q130 165 140 185 Q115 190 102 178"
              strokeWidth="4"
              fill="#000"
            />
            {/* Petals */}
            <path
              d="M95 105 C75 115 60 90 70 70 C80 50 100 70 95 105 Z"
              strokeWidth="4.5"
              fill="none"
            />
            <path
              d="M100 68 C88 45 112 30 128 45 C140 60 118 78 100 68 Z"
              strokeWidth="4.5"
              fill="none"
            />
            <path
              d="M125 80 C150 75 160 100 145 115 C130 130 115 100 125 80 Z"
              strokeWidth="4.5"
              fill="none"
            />
            <path
              d="M105 108 C120 128 95 145 80 130 C70 118 90 98 105 108 Z"
              strokeWidth="4.5"
              fill="none"
            />
          </svg>
        )}

        {graphic === "botanical-foliage" && (
          <svg
            viewBox="0 0 200 240"
            className="w-36 h-48 md:w-44 md:h-56 text-black fill-current drop-shadow-sm"
          >
            {/* Graceful branch */}
            <path
              d="M70 230 Q90 150 130 30"
              stroke="#000"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Paired elliptical brush leaves */}
            <path d="M125 40 C140 25 155 35 145 50 C135 60 125 48 125 40 Z" />
            <path d="M110 65 C95 50 85 60 92 75 C100 85 112 75 110 65 Z" />
            <path d="M115 90 C135 80 148 95 138 108 C125 118 115 102 115 90 Z" />
            <path d="M100 125 C82 110 75 125 82 138 C90 148 102 138 100 125 Z" />
            <path d="M95 155 C115 145 128 160 118 175 C108 185 95 170 95 155 Z" />
          </svg>
        )}

        {graphic === "geometric-organic" && (
          <svg
            viewBox="0 0 200 240"
            className="w-36 h-48 md:w-44 md:h-56 text-black fill-none stroke-current drop-shadow-sm"
          >
            {/* Intersecting organic contours */}
            <ellipse
              cx="100"
              cy="100"
              rx="55"
              ry="75"
              strokeWidth="5"
              transform="rotate(-20 100 100)"
            />
            <circle cx="100" cy="120" r="45" strokeWidth="4" />
            <path
              d="M80 60 Q120 140 90 200"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="115" cy="85" r="10" fill="#000" />
          </svg>
        )}
      </motion.div>
    </div>
  );
};
