import React from "react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center bg-white">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-400 mb-2">
          ERROR 404
        </span>

        <h1
          className="font-editorial text-black tracking-tighter uppercase leading-[0.88] mb-6"
          style={{ fontSize: "clamp(4.5rem, 14vw, 12rem)" }}
        >
          NOT FOUND
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-medium leading-relaxed max-w-md mb-10">
          This page doesn&apos;t seem to be part of the build. The route may have
          moved or been renamed.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="primary">
            Back Home
          </Button>
          <Button href="/work" variant="secondary">
            View Work
          </Button>
        </div>
      </div>
    </div>
  );
}
