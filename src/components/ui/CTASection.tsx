"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { fadeUp } from "@/lib/motion";

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  headline = "LET'S BUILD SOMETHING USEFUL.",
  subheadline = "GOOD TOOLS START WITH REAL PROBLEMS.",
  buttonLabel = "Let's Talk",
  buttonHref = "/contact",
}) => {
  return (
    <section className="relative w-full overflow-hidden border-t border-[#EAE8E2]">
      {/* Signature warm yellow radial/linear gradient background */}
      <div
        className="w-full py-24 sm:py-28 md:py-36 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center relative"
        style={{
          background:
            "linear-gradient(180deg, #FFE873 0%, #FFF3A8 45%, #FFFDF2 100%)",
        }}
      >
        <motion.div
          className="max-w-4xl mx-auto flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "100px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-black leading-[1.05] uppercase">
            {headline}{" "}
            <span className="text-[#8A8470] block sm:inline mt-1 sm:mt-0">
              {subheadline}
            </span>
          </h2>

          <div className="mt-8 sm:mt-10 md:mt-12">
            <Button
              href={buttonHref}
              variant="primary"
              className="!bg-[#FFCE00] hover:!bg-[#E5BA00] !text-black !px-7 !py-3.5 !text-sm md:!text-base shadow-sm"
            >
              {buttonLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
