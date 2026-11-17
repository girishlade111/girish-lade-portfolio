"use client";

import { Variants, Transition } from "framer-motion";

// Editorial easing curve - smooth deceleration, confident stop
export const editorialEase = [0.22, 1, 0.36, 1] as const;
export const gentleEase = [0.16, 1, 0.3, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.7,
  ease: editorialEase,
};

export const quickTransition: Transition = {
  duration: 0.35,
  ease: editorialEase,
};

// Fade up reveal - restrained translation to prevent mobile clipping
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: editorialEase,
    },
  },
};

// Fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: editorialEase,
    },
  },
};

// Word / Hero line reveal
export const heroReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: editorialEase,
    },
  },
};

// Stagger parent container
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Stagger child item
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: editorialEase,
    },
  },
};

// Image mask reveal
export const imageReveal: Variants = {
  hidden: {
    scale: 1.02,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: editorialEase,
    },
  },
};
