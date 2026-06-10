"use client";

import { motion } from "framer-motion";

const lights = [
  { label: "Close", color: "#FF5F57" },
  { label: "Minimize", color: "#FEBC2E" },
  { label: "Zoom", color: "#28C840" },
];

export function TrafficLights({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex items-center gap-[11px]" aria-label="Window controls">
      {lights.map((light, index) => (
        <motion.button
          key={light.label}
          type="button"
          aria-label={light.label}
          onClick={index === 0 ? onClose : undefined}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="h-[13px] w-[13px] rounded-full shadow-[inset_0_-1px_rgba(0,0,0,.28),inset_0_1px_rgba(255,255,255,.35)]"
          style={{ backgroundColor: light.color }}
        />
      ))}
    </div>
  );
}
