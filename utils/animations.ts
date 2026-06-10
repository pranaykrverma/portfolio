import type { Transition } from "framer-motion";

export const appleSpring: Transition = {
  type: "spring",
  stiffness: 410,
  damping: 34,
  mass: 0.9,
};

export const softSpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 28,
  mass: 1,
};

export const fadeThrough = {
  initial: { opacity: 0, scale: 0.982, y: 10, filter: "blur(8px)" },
  animate: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.985, y: -8, filter: "blur(8px)" },
};
