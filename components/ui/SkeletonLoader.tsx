"use client";

import { motion } from "framer-motion";

export function SkeletonLoader() {
  return (
    <div className="space-y-4 p-8">
      {[0, 1, 2, 3].map((item) => (
        <motion.div
          key={item}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.35, 0.72, 0.35] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: item * 0.1 }}
          className="h-14 rounded-[16px] bg-white/[.07]"
        />
      ))}
    </div>
  );
}
