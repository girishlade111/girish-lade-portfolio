import React from "react";
import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Girish Balaso Lade's personal portfolio website and independent tools.",
};

export default function PrivacyPage() {
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
            PRIVACY POLICY
          </h1>

          {/* Last updated */}
          <p className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-8 pb-4 border-b border-[#EAE8E2]">
            LAST UPDATED ON NOVEMBER 17, 2026
          </p>

          {/* Legal Content with exact heading hierarchy */}
          <div className="flex flex-col gap-8 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            <p className="text-base sm:text-lg text-neutral-900 font-medium">
              This privacy policy explains how this personal portfolio website
              and associated project documentation handle information when you
              browse and interact with it.
            </p>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                INFORMATION WE COLLECT
              </h2>
              <p>
                This portfolio is architected as an informational, static-first
                showcase. We minimize data collection by design and do not
                employ behavioral trackers, persistent third-party advertising
                cookies, or automated profiling scripts.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-black uppercase mb-2">
                BASIC USAGE DATA:
              </h3>
              <p>
                When you visit this website, standard technical request logs
                (such as your IP address, browser type, referral header, and
                timestamp) may be automatically processed by hosting providers
                (such as Vercel) solely to deliver assets securely, prevent
                DDoS attacks, and maintain infrastructure health.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-extrabold tracking-tight text-black uppercase mb-2">
                PERSONAL INFORMATION:
              </h3>
              <p>
                This website does not require registration, passwords, or
                personal account creation. If you choose to contact me via
                email, your email address, name, and the contents of your
                message will be transmitted through your chosen email client
                and retained only to reply to your inquiry.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                HOW WE USE YOUR INFORMATION
              </h2>
              <p className="mb-2">WE USE TECHNICAL DATA TO:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
                <li>Deliver web pages and static assets reliably across regions.</li>
                <li>Ensure website availability, security, and performance.</li>
                <li>Respond directly to collaboration inquiries you voluntarily send.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                SHARING YOUR INFORMATION
              </h2>
              <p>
                Your personal details and correspondence are never sold, rented,
                or traded to third parties. We do not participate in marketing
                syndications or cross-site advertising networks.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                COOKIES
              </h2>
              <p>
                This site does not use invasive tracking or advertising cookies.
                Any local storage utilized is strictly technical (such as
                storing local UI preferences) and remains entirely on your
                browser.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                THIRD-PARTY WEBSITES & EXTERNAL LINKS
              </h2>
              <p>
                This portfolio links to external platforms such as GitHub,
                LinkedIn, CodePen, and deployed LadeStack applications. Each
                external platform maintains its own privacy policies and terms of
                service, which govern interactions on their domains.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                YOUR RIGHTS
              </h2>
              <p className="mb-2">YOU CAN ASK US TO:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-600">
                <li>Provide a copy of any correspondence you sent to us.</li>
                <li>Delete past email communication from our inboxes.</li>
                <li>Clarify any questions regarding data handling on this site.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                KEEPING YOUR INFORMATION SAFE
              </h2>
              <p>
                We use secure modern transport protocols (HTTPS/TLS) to encrypt
                data in transit between your browser and our hosting
                infrastructure.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                CHANGES TO THIS POLICY
              </h2>
              <p>
                We may periodically update this policy to reflect modifications
                in site architecture or hosting arrangements. The date of the
                latest revision is noted at the top of this document.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-black uppercase mb-3">
                CONTACT US
              </h2>
              <p>
                If you have questions or concerns about this privacy policy,
                please write to:{" "}
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
        headline="HAVE A QUESTION ABOUT PRIVACY?"
        subheadline="WE BELIEVE IN TRANSPARENT ARCHITECTURE."
        buttonLabel="Contact Me"
        buttonHref="/contact"
      />
    </div>
  );
}
