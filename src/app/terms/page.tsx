import React from "react";
import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing the use of Girish Balaso Lade's personal portfolio website.",
};

export default function TermsPage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Header & Narrow Legal Column */}
      <section className="w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Large Serif Title matching screenshot */}
          <h1
            className="font-editorial text-black tracking-tighter uppercase leading-[0.9] mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 7.5rem)" }}
          >
            TERMS &<br />
            CONDITIONS
          </h1>

          {/* Last updated */}
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-8 pb-4 border-b border-[#EAE8E2]">
            LAST UPDATED ON NOVEMBER 17, 2026
          </p>

          {/* Legal Content with exact heading hierarchy */}
          <div className="flex flex-col gap-8 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            <p className="text-base sm:text-lg text-neutral-900 font-medium">
              These terms govern your access to and use of Girish Balaso Lade&apos;s
              personal developer and product-designer portfolio website. By
              visiting this site, you agree to these terms.
            </p>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                ABOUT THIS WEBSITE
              </h2>
              <p>
                This website is a personal portfolio and technical showcase
                highlighting independent software projects, developer tools,
                design artifacts, and engineering writings by Girish Lade. It is
                provided for informational and professional review purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                PORTFOLIO CONTENT & ACCURACY
              </h2>
              <p>
                I make every reasonable effort to describe project architectures,
                technologies, and capabilities truthfully. However, software
                projects evolve rapidly, and specifications, live URLs, or
                repository links may change over time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                PROJECT STATUS & PROVISIONAL WORK
              </h2>
              <p>
                Certain projects and experiments listed on this site (such as
                LadeStack Drive or conceptual prototypes) are explicitly labeled
                as experimental or pending verification. These descriptions
                reflect research explorations rather than binding commercial
                service commitments.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                LINKS TO OTHER WEBSITES
              </h2>
              <p>
                This portfolio contains links to external websites, including
                GitHub, LinkedIn, live application domains, and third-party
                services. I have no control over the content, security, or
                operational uptime of third-party platforms and accept no
                liability for their practices.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                INTELLECTUAL PROPERTY
              </h2>
              <p>
                All original design systems, editorial text, custom graphics,
                and portfolio layout structures are the intellectual property of
                Girish Balaso Lade, unless otherwise credited to open-source
                libraries or standard licenses. Open-source repositories linked
                from this portfolio are governed by their respective repository
                licenses.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                NO WARRANTY & LIMITATION OF LIABILITY
              </h2>
              <p>
                This website and its demonstrative projects are provided &quot;as
                is&quot; without warranties of any kind, whether express or
                implied. In no event shall Girish Lade be liable for any direct,
                indirect, incidental, or consequential damages resulting from
                your use of this website or reliance on its content.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                CHANGES TO THESE TERMS
              </h2>
              <p>
                These terms may be revised periodically. Any updates will be
                reflected by updating the &quot;Last updated&quot; date at the top
                of this page.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                CONTACT
              </h2>
              <p>
                For questions regarding these terms, please contact:{" "}
                <a
                  href="mailto:admin@ladestack.in"
                  className="font-bold text-black underline"
                >
                  admin@ladestack.in
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature CTA */}
      <CTASection
        headline="HAVE A QUESTION OR PROPOSAL?"
        subheadline="LET'S DISCUSS IT OPENLY."
        buttonLabel="Get in touch"
        buttonHref="/contact"
      />
    </div>
  );
}
