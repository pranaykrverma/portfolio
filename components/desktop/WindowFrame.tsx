"use client";

import { motion } from "framer-motion";
import { Maximize2, Minus } from "lucide-react";
import { AppContent } from "@/components/apps/AppContent";
import { TrafficLights } from "@/components/ui/TrafficLights";
import { dockApps } from "@/data/portfolio";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import type { AppId } from "@/types/portfolio";
import { appleSpring } from "@/utils/animations";

export function WindowFrame({ app }: { app: AppId }) {
  const closeWindow = usePortfolioStore((state) => state.closeWindow);
  const glassIntensity = usePortfolioStore((state) => state.settings.glassIntensity);
  const title = dockApps.find((item) => item.id === app)?.title ?? "Portfolio";

  return (
    <motion.section
      drag
      dragMomentum={false}
      dragElastic={0.08}
      initial={{ opacity: 0, scale: 0.86, y: 120, filter: "blur(16px)" }}
      animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.82, y: 170, filter: "blur(18px)" }}
      transition={appleSpring}
      className="desktop-window pointer-events-auto relative h-[min(420px,calc(100vh-150px))] w-[min(520px,calc(100vw-28px))] overflow-hidden rounded-[18px] border border-white/[.06] bg-material shadow-window backdrop-blur-[35px]"
      style={{ backgroundColor: `rgba(28, 29, 35, ${glassIntensity})` }}
    >
      <div className="flex h-[38px] cursor-grab items-center border-b border-white/[.07] bg-white/[.035] px-[14px] active:cursor-grabbing">
        <TrafficLights onClose={closeWindow} />
        <h2 className="ml-[24px] text-[12px] font-bold text-white/52">{title}</h2>
        <div className="ml-auto hidden items-center gap-2 text-white/20 sm:flex">
          <Minus className="h-3 w-3" />
          <Maximize2 className="h-3 w-3" />
        </div>
      </div>
      <div className="h-[calc(100%-38px)]">
        <AppContent app={app} />
      </div>
    </motion.section>
  );
}
