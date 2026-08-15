import { Variants } from 'motion/react';

// Staggered Container Variant for sections and grid parents
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

// Slightly slower stagger for dense grids (skills, certifications)
export const staggerGrid: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Smooth slide-up + fade entrance
export const itemFadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 35, 
    filter: 'blur(6px)' 
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Pop and scale entrance for badges and featured items
export const itemPop: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.88,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Slide in from left
export const itemSlideLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Slide in from right
export const itemSlideRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30,
    filter: 'blur(4px)'
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
