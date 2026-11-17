"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import { TagChip } from "@/components/ui/TagChip";
import { fadeUp } from "@/lib/motion";

export const HomeServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-20 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 sm:pb-12 border-b border-neutral-800">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
              SERVICES
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-medium max-w-md">
              How I turn technical concepts and product ideas into dependable,
              human-centered software.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-neutral-400 hover:text-white uppercase tracking-wider transition-colors"
          >
            <span>View Services</span>
            <span
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform"
            >
              →
            </span>
          </Link>
        </div>

        {/* Numbered Service Rows matching screenshot layout */}
        <div className="flex flex-col divide-y divide-neutral-850">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "100px" }}
              variants={fadeUp}
              className="py-10 sm:py-14 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              {/* Number & Service Name */}
              <div className="md:col-span-5 flex items-baseline gap-4 sm:gap-6">
                <span className="text-sm sm:text-base font-bold text-neutral-500 font-mono">
                  {service.number}
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-white">
                  {service.title}
                </h3>
              </div>

              {/* Description & Chips */}
              <div className="md:col-span-7 flex flex-col gap-5">
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Pill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.tags.map((tag, idx) => (
                    <TagChip key={idx} label={tag} theme="dark" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
