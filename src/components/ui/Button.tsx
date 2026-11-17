"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark";
  showArrow?: boolean;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const MotionLink = motion.create(Link);

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  showArrow = true,
  className = "",
  external = false,
  type = "button",
  disabled = false,
}) => {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2 rounded-full font-bold text-xs md:text-sm tracking-tight transition-all duration-200 outline-none select-none cursor-pointer focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2";

  const variantClasses = {
    primary:
      "bg-[#FFCE00] hover:bg-[#E5BA00] active:bg-[#CCA600] text-black px-5 py-2.5 md:px-6 md:py-2.5 shadow-none",
    secondary:
      "bg-transparent hover:bg-black/5 active:bg-black/10 text-black border border-black/20 hover:border-black/50 px-5 py-2.5 md:px-6 md:py-2.5",
    dark:
      "bg-white hover:bg-neutral-200 active:bg-neutral-300 text-black px-5 py-2.5 md:px-6 md:py-2.5",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      )}
    </>
  );

  if (href) {
    if (external || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <motion.a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          whileTap={{ scale: 0.98 }}
          className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <MotionLink
        href={href}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {content}
    </motion.button>
  );
};
