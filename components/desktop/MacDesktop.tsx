"use client";

import gsap from "gsap";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ContextMenu } from "@/components/desktop/ContextMenu";
import { Dock } from "@/components/desktop/Dock";
import { DynamicWallpaper } from "@/components/desktop/DynamicWallpaper";
import { MenuBar } from "@/components/desktop/MenuBar";
import { NotificationToast } from "@/components/desktop/NotificationToast";
import { CommandPalette, Spotlight } from "@/components/desktop/SearchOverlays";
import { WindowFrame } from "@/components/desktop/WindowFrame";
import { useContextMenu } from "@/hooks/useContextMenu";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function MacDesktop() {
  const activeApp = usePortfolioStore((state) => state.activeApp);
  const theme = usePortfolioStore((state) => state.settings.theme);
  const { point, open, close } = useContextMenu();

  useKeyboardShortcuts();
  useLenisScroll();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  useEffect(() => {
    gsap.fromTo(
      ".desktop-window",
      { boxShadow: "0 20px 40px rgba(0,0,0,.22)" },
      { boxShadow: "0 34px 90px rgba(0,0,0,.36), 0 14px 42px rgba(0,0,0,.24), inset 0 1px rgba(255,255,255,.08)", duration: 0.55, ease: "power3.out" },
    );
  }, [activeApp]);

  return (
    <main onContextMenu={open} className="relative min-h-dvh overflow-hidden text-white selection:bg-appleBlue/40">
      <DynamicWallpaper />
      <MenuBar />
      <div className="relative z-10 flex min-h-dvh items-start justify-center px-3 pb-[112px] pt-[calc(28px+8vh)] sm:pt-[calc(28px+8vh)]">
        <AnimatePresence mode="wait">
          <WindowFrame key={activeApp} app={activeApp} />
        </AnimatePresence>
      </div>
      <Dock />
      <Spotlight />
      <CommandPalette />
      <NotificationToast />
      <ContextMenu point={point} onClose={close} />
    </main>
  );
}
