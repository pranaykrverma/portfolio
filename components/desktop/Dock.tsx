"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { dockApps } from "@/data/portfolio";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { appleSpring } from "@/utils/animations";
import { cn } from "@/utils/cn";

export function Dock() {
  const activeApp = usePortfolioStore((state) => state.activeApp);
  const openApp = usePortfolioStore((state) => state.openApp);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ opacity: 0, x: "-50%", y: 60, scale: 0.95 }}
      animate={{ opacity: 1, x: "-50%", y: 0, scale: 1 }}
      transition={{ ...appleSpring, delay: 0.15 }}
      className="fixed bottom-[24px] left-1/2 z-40 flex h-[70px] w-[min(435px,calc(100vw-12px))] -translate-x-1/2 items-center justify-center gap-[4px] rounded-[22px] border border-emerald-200/[.13] bg-[#050a0f]/50 px-[6px] shadow-dock backdrop-blur-[40px]"
      aria-label="Application dock"
    >
      {dockApps.map((app, index) => {
        const distance = hovered === null ? 9 : Math.abs(hovered - index);
        const scale = distance === 0 ? 1.16 : distance === 1 ? 1.06 : 1;
        const y = distance === 0 ? -7 : distance === 1 ? -3 : 0;
        const Icon = app.icon;

        return (
          <motion.button
            key={app.id}
            type="button"
            onClick={() => openApp(app.id)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            animate={{ scale, y }}
            whileTap={{ scale: scale * 0.92 }}
            transition={appleSpring}
            className="group relative grid h-[40px] w-[40px] shrink-0 place-items-center md:h-[47px] md:w-[47px]"
            aria-label={`Open ${app.title}`}
          >
            <span className="pointer-events-none absolute -top-[34px] scale-95 rounded-[8px] bg-[#2d2735] px-3 py-1.5 text-[11px] font-bold text-white opacity-0 shadow-lg transition duration-150 group-hover:scale-100 group-hover:opacity-100">
              {app.title}
              <span className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#2d2735]" />
            </span>

            <span
              className={cn(
                "grid h-[40px] w-[40px] place-items-center rounded-[10px] bg-gradient-to-br shadow-[0_8px_20px_rgba(0,0,0,.28),inset_0_1px_rgba(255,255,255,.35)] md:h-[47px] md:w-[47px]",
                app.gradient
              )}
            >
              <Icon
                className={cn(
                  "h-[22px] w-[22px] text-white drop-shadow-sm md:h-[27px] md:w-[27px]",
                  app.glyphColor
                )}
                strokeWidth={2.45}
              />
            </span>

            {activeApp === app.id ? (
              <span className="absolute -bottom-[10px] h-[4px] w-[4px] rounded-full bg-white/70" />
            ) : null}
          </motion.button>
        );
      })}
    </motion.nav>
  );
} 