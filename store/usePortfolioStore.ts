"use client";

import { create } from "zustand";
import type { AccentColor, AppId, SettingsState, ThemeMode, WallpaperVariant } from "@/types/portfolio";

interface PortfolioStore {
  activeApp: AppId;
  previousApp: AppId | null;
  isSpotlightOpen: boolean;
  isCommandOpen: boolean;
  notification: string | null;
  settings: SettingsState;
  openApp: (app: AppId) => void;
  closeWindow: () => void;
  toggleSpotlight: (open?: boolean) => void;
  toggleCommand: (open?: boolean) => void;
  notify: (message: string | null) => void;
  setTheme: (theme: ThemeMode) => void;
  setAccent: (accent: AccentColor) => void;
  setWallpaper: (wallpaper: WallpaperVariant) => void;
  setAnimationSpeed: (animationSpeed: number) => void;
  setGlassIntensity: (glassIntensity: number) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  activeApp: "about",
  previousApp: null,
  isSpotlightOpen: false,
  isCommandOpen: false,
  notification: null,
  settings: {
    theme: "dark",
    accent: "blue",
    wallpaper: "sonoma",
    animationSpeed: 1,
    glassIntensity: 0.88,
  },
  openApp: (app) => set((state) => ({ previousApp: state.activeApp, activeApp: app, isCommandOpen: false, isSpotlightOpen: false })),
  closeWindow: () => set({ activeApp: "about" }),
  toggleSpotlight: (open) => set((state) => ({ isSpotlightOpen: open ?? !state.isSpotlightOpen })),
  toggleCommand: (open) => set((state) => ({ isCommandOpen: open ?? !state.isCommandOpen })),
  notify: (message) => set({ notification: message }),
  setTheme: (theme) => set((state) => ({ settings: { ...state.settings, theme } })),
  setAccent: (accent) => set((state) => ({ settings: { ...state.settings, accent } })),
  setWallpaper: (wallpaper) => set((state) => ({ settings: { ...state.settings, wallpaper } })),
  setAnimationSpeed: (animationSpeed) => set((state) => ({ settings: { ...state.settings, animationSpeed } })),
  setGlassIntensity: (glassIntensity) => set((state) => ({ settings: { ...state.settings, glassIntensity } })),
}));
