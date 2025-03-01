import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimateXProps {
  children: ReactNode;
  animation?:
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "zoom-in"
    | "zoom-in-left"
    | "zoom-in-right"
    | "zoom-out"
    | "flip-x"
    | "flip-y"
    | "flip"
    | "rotate"
    | "rotate-in"
    | "rotate-out"
    | "bounce"
    | "flash"
    | "pulse"
    | "rubberBand"
    | "shakeX"
    | "shakeY"
    | "headShake"
    | "swing"
    | "tada"
    | "wobble"
    | "jello"
    | "heartBeat"
    | "slide-in-left"
    | "slide-in-right"
    | "slide-in-up"
    | "slide-in-down"
    | "slide-out-left"
    | "slide-out-right"
    | "slide-out-up"
    | "slide-out-down"
    | "back-in-down"
    | "back-in-up"
    | "back-in-left"
    | "back-in-right"
    | "back-out-down"
    | "back-out-up"
    | "back-out-left"
    | "back-out-right"
    | "hinge"
    | "jackInTheBox"
    | "rollIn"
    | "rollOut";
  duration?: number; // Animation duration
  once?: boolean; // Trigger animation only once
  delay?: number; // Delay before animation starts
  amount?: number; // Percentage of the element visible to trigger animation
}

// Predefined animation variants
const animationVariants = {
  // Basic Fading
  "fade-up": { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
  "fade-down": {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },

  // Zooming
  "zoom-in": {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  "zoom-out": {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
  },
  "zoom-in-left": {
    hidden: { opacity: 0, scale: 0.8, x: -50 },
    visible: { opacity: 1, scale: 1, x: 0 },
  },
  "zoom-in-right": {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0 },
  },

  // Flippers
  "flip-x": {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 },
  },
  "flip-y": {
    hidden: { opacity: 0, rotateY: -90 },
    visible: { opacity: 1, rotateY: 0 },
  },
  flip: {
    hidden: { opacity: 0, rotateY: -180 },
    visible: { opacity: 1, rotateY: 0 },
  },

  // Rotating
  rotate: {
    hidden: { opacity: 0, rotate: -180 },
    visible: { opacity: 1, rotate: 0 },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -90 },
    visible: { opacity: 1, rotate: 0 },
  },
  "rotate-out": {
    hidden: { opacity: 1, rotate: 0 },
    visible: { opacity: 0, rotate: 90 },
  },

  // Attention Seekers
  bounce: { hidden: { y: 0 }, visible: { y: [0, -30, 0] } },
  flash: { hidden: { opacity: 1 }, visible: { opacity: [1, 0, 1] } },
  pulse: { hidden: { scale: 1 }, visible: { scale: [1, 1.1, 1] } },
  rubberBand: {
    hidden: { scaleX: 1 },
    visible: { scaleX: [1, 1.25, 0.75, 1] },
  },
  shakeX: { hidden: { x: 0 }, visible: { x: [0, -10, 10, -10, 0] } },
  shakeY: { hidden: { y: 0 }, visible: { y: [0, -10, 10, -10, 0] } },
  headShake: {
    hidden: { x: 0, rotateZ: 0 },
    visible: { x: [0, -10, 10, -10, 0], rotateZ: [0, -10, 10, -10, 0] },
  },
  swing: { hidden: { rotateZ: 0 }, visible: { rotateZ: [0, 15, -15, 0] } },
  tada: {
    hidden: { scale: 1 },
    visible: { scale: [1, 1.1, 1], rotateZ: [0, 3, -3, 0] },
  },
  wobble: {
    hidden: { x: 0 },
    visible: { x: [0, -10, 10, -10, 0], rotateZ: [0, -3, 3, -3, 0] },
  },
  jello: { hidden: { scaleX: 1 }, visible: { scaleX: [1, 1.25, 0.75, 1] } },
  heartBeat: { hidden: { scale: 1 }, visible: { scale: [1, 1.3, 1] } },

  // Sliding
  "slide-in-left": { hidden: { x: -300 }, visible: { x: 0 } },
  "slide-in-right": { hidden: { x: 300 }, visible: { x: 0 } },
  "slide-in-up": { hidden: { y: 300 }, visible: { y: 0 } },
  "slide-in-down": { hidden: { y: -300 }, visible: { y: 0 } },
  "slide-out-left": { hidden: { x: 0 }, visible: { x: -300 } },
  "slide-out-right": { hidden: { x: 0 }, visible: { x: 300 } },
  "slide-out-up": { hidden: { y: 0 }, visible: { y: -300 } },
  "slide-out-down": { hidden: { y: 0 }, visible: { y: 300 } },

  // Back Entrances
  "back-in-down": {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: 0 },
  },
  "back-in-up": {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
  },
  "back-in-left": {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  },
  "back-in-right": {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
  },

  // Back Exits
  "back-out-down": {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: 300 },
  },
  "back-out-up": {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 0, y: -300 },
  },
  "back-out-left": {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 0, x: -300 },
  },
  "back-out-right": {
    hidden: { opacity: 1, x: 0 },
    visible: { opacity: 0, x: 300 },
  },

  // Specials
  hinge: {
    hidden: { opacity: 1, rotateZ: 0 },
    visible: { opacity: 0, rotateZ: 90, y: 300 },
  },
  jackInTheBox: {
    hidden: { scale: 0, rotate: -30 },
    visible: { scale: 1, rotate: 0 },
  },
  rollIn: { hidden: { x: -300, rotate: -120 }, visible: { x: 0, rotate: 0 } },
  rollOut: { hidden: { x: 0, rotate: 0 }, visible: { x: 300, rotate: 120 } },
};

export const AnimateX = ({
  children,
  animation = "fade-up", // Default animation
  duration = 0.75, // Default duration
  once = false,
  delay = 0, // Default delay
  amount = 0.2, // Trigger animation when 20% of the element is visible
}: AnimateXProps) => {
  const variant = animationVariants[animation] || animationVariants["fade-up"];

  if (!variant) {
    console.warn(
      `Unsupported animation type "${animation}", defaulting to "fade-up".`,
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount, once }}
      transition={{ duration, delay }}
      variants={variant}
    >
      {children}
    </motion.div>
  );
};
