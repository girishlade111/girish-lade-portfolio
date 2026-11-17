import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Girish Balaso Lade, founder of LadeStack and full-stack developer in Pune, India.",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <section className="w-full pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 border-b border-[#EAE8E2] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h1
              className="font-editorial text-black tracking-tighter uppercase leading-[0.9] mb-6 sm:mb-8"
              style={{ fontSize: "clamp(3.5rem, 11vw, 11rem)" }}
            >
              LET&apos;S TALK
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed max-w-2xl">
              Have an idea, improvement, collaboration, or technical question?
              I&apos;m interested in connecting with people building better
              developer and productivity experiences.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Direct Channels & Social Matrix */}
      <section className="w-full py-16 sm:py-20 md:py-24 bg-white border-b border-[#EAE8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Left Column: Direct Contact & Location */}
            <div className="md:col-span-6 flex flex-col gap-10">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                  PRIMARY EMAIL
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black hover:text-[#997A00] transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
                <p className="mt-2 text-xs sm:text-sm text-neutral-500">
                  Direct communication for collaboration, project proposals, or
                  questions.
                </p>
                <div className="mt-6">
                  <Button
                    href={`mailto:${siteConfig.email}?subject=Collaboration%20Inquiry%20via%20Portfolio`}
                    variant="primary"
                    external
                  >
                    Open Mail Client
                  </Button>
                </div>
              </div>

              <div className="pt-8 border-t border-[#EAE8E2]">
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-2">
                  BASE LOCATION
                </span>
                <p className="text-lg font-bold text-black">
                  {siteConfig.location}
                </p>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  Available for remote software engineering, product design, and
                  tool collaboration.
                </p>
              </div>
            </div>

            {/* Right Column: Profiles & Verified Platforms */}
            <div className="md:col-span-6 flex flex-col">
              <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest block mb-6">
                ONLINE PROFILES & ECOSYSTEM
              </span>

              <div className="flex flex-col divide-y divide-[#EAE8E2] border-y border-[#EAE8E2]">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-5 flex items-center justify-between hover:bg-[#FAF9F6] px-4 -mx-4 rounded-lg transition-colors"
                >
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-black uppercase tracking-tight">
                      GitHub
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono">
                      @girishlade111
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all"
                  >
                    ↗
                  </span>
                </a>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-5 flex items-center justify-between hover:bg-[#FAF9F6] px-4 -mx-4 rounded-lg transition-colors"
                >
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-black uppercase tracking-tight">
                      LinkedIn
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Girish Lade — Professional Network
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all"
                  >
                    ↗
                  </span>
                </a>

                <a
                  href={siteConfig.socials.brand}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-5 flex items-center justify-between hover:bg-[#FAF9F6] px-4 -mx-4 rounded-lg transition-colors"
                >
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-black uppercase tracking-tight">
                      LadeStack
                    </h3>
                    <p className="text-xs text-neutral-500">
                      ladestack.in — Official Brand Platform
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all"
                  >
                    ↗
                  </span>
                </a>

                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-5 flex items-center justify-between hover:bg-[#FAF9F6] px-4 -mx-4 rounded-lg transition-colors"
                >
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-black uppercase tracking-tight">
                      Instagram
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono">
                      @girish_lade_
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all"
                  >
                    ↗
                  </span>
                </a>

                <a
                  href={siteConfig.socials.codepen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group py-5 flex items-center justify-between hover:bg-[#FAF9F6] px-4 -mx-4 rounded-lg transition-colors"
                >
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-black uppercase tracking-tight">
                      CodePen
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Frontend Experiments & Prototyping
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature CTA */}
      <CTASection
        headline="GOOD TOOLS START WITH REAL PROBLEMS."
        subheadline="LET'S SOLVE ONE TOGETHER."
        buttonLabel="Send Email"
        buttonHref={`mailto:${siteConfig.email}`}
      />
    </div>
  );
}
