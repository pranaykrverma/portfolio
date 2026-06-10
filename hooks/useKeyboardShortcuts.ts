"use client";

import { useEffect } from "react";
import { dockApps } from "@/data/portfolio";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function useKeyboardShortcuts() {
  const openApp = usePortfolioStore((state) => state.openApp);
  const toggleCommand = usePortfolioStore((state) => state.toggleCommand);
  const toggleSpotlight = usePortfolioStore((state) => state.toggleSpotlight);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const mod = event.metaKey || event.ctrlKey;

      if (mod && event.key.toLowerCase() === "k") {
        event.preventDefault();
        toggleCommand();
      }

      if (mod && event.key === " ") {
        event.preventDefault();
        toggleSpotlight();
      }

      if (event.key === "Escape") {
        toggleCommand(false);
        toggleSpotlight(false);
      }

      if (mod && /^[1-8]$/.test(event.key)) {
        event.preventDefault();
        openApp(dockApps[Number(event.key) - 1].id);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openApp, toggleCommand, toggleSpotlight]);
}
