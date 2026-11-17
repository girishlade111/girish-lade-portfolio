"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroMedia } from "./HeroMedia";
import { StudioUnderline, StudioAccentTicks } from "@/components/ui/StudioAccents";
import { fadeUp } from "@/lib/motion";

export const HomeHero: React.FC = () => {
  return (
    <section className="w-full pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Massive Serif Editorial Wordmark Hero */}
        <div className="relative w-full mb-6 sm:mb-8 md:mb-12">
          {/* Top right yellow accent ticks */}
          <div className="absolute -top-3 right-2 sm:-top-5 sm:right-8 md:-top-7 md:right-16 z-10 pointer-events-none">
            <StudioAccentTicks />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center"
          >
            <h1
              className="font-editorial text-black tracking-tighter uppercase leading-[0.88] select-none text-center"
              style={{
                fontSize: "clamp(3.8rem, 14vw, 15.5rem)",
              }}
            >
              GIRISH LADE
            </h1>

            {/* Warm yellow fluid scribble underline */}
            <div className="mt-1 sm:mt-2 -ml-8 sm:-ml-16 md:-ml-24">
              <StudioUnderline />
            </div>
          </motion.div>
        </div>

        {/* Hero Media Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full mb-12 sm:mb-16 md:mb-24"
        >
          <HeroMedia />
        </motion.div>

        {/* Who I Am / Intro Split Section matching screenshot layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pt-6 sm:pt-10 border-t border-[#EAE8E2]"
        >
          {/* Left Column Label */}
          <div className="md:col-span-4">
            <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-black">
              WHO I AM
            </span>
          </div>

          {/* Right Column Editorial Copy */}
          <div className="md:col-span-8 flex flex-col gap-5 sm:gap-6">
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-medium leading-snug md:leading-normal">
              Engineer by training. Builder by choice. I started with a
              Mechanical Engineering foundation and followed my curiosity into
              web development, product design, and AI-assisted software
              engineering.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
              Today, I build browser-native tools, design user-friendly
              interfaces, and experiment with ideas that make technical work
              easier for more people. Through LadeStack, I explore how
              local-first architectures and clean design make software
              dependable and accessible.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-tight uppercase text-black hover:text-neutral-600 transition-colors"
              >
                <span>Read more</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
