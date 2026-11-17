"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-[#EAE8E2] overflow-hidden pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* 4-Column Footer Navigation with hairlines */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 pb-16 md:pb-24">
          {siteConfig.footerColumns.map((col, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-xs font-extrabold tracking-widest uppercase text-black mb-4 pb-2 border-b border-[#EAE8E2]">
                {col.title}
              </h3>
              <ul className="flex flex-col">
                {col.links.map((link, linkIdx) => (
                  <li
                    key={linkIdx}
                    className="border-b border-[#F2F0EB] last:border-b-0 py-2.5"
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm text-neutral-600 hover:text-black transition-colors font-medium inline-block"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xs md:text-sm text-neutral-600 hover:text-black transition-colors font-medium inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Gigantic Signature Editorial Serif Wordmark */}
        <div className="w-full border-t border-[#EAE8E2] pt-8 md:pt-14 select-none overflow-hidden">
          <h1
            className="font-editorial text-center tracking-tighter text-black uppercase leading-[0.82] w-full"
            style={{
              fontSize: "clamp(3.8rem, 13.8vw, 15rem)",
            }}
          >
            GIRISH LADE
          </h1>
        </div>
      </div>
    </footer>
  );
};
