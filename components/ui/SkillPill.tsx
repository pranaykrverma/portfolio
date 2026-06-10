"use client";

import { motion } from "framer-motion";
import { appleSpring } from "@/utils/animations";

export function SkillPill({ skill }: { skill: string }) {
  return (
    <motion.span
      layout
      whileHover={{ scale: 1.045, boxShadow: "0 0 18px rgba(10,132,255,.22)" }}
      transition={appleSpring}
      className="inline-flex h-[25px] items-center rounded-full border border-appleBlue/45 bg-appleBlue/[.10] px-[12px] text-[11px] font-medium leading-none text-appleBlue"
    >
      {skill}
    </motion.span>
  );
}
