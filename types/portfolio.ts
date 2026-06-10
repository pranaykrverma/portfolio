import type { LucideIcon } from "lucide-react";

export type AppId =
  | "about"
  | "education"
  | "projects"
  | "skills"
  | "resume"
  | "contact"
  | "terminal"
  | "settings";

export type ThemeMode = "dark" | "light";
export type AccentColor = "blue" | "purple" | "green" | "pink";
export type WallpaperVariant = "sonoma" | "midnight" | "aurora";

export interface DockApp {
  id: AppId;
  title: string;
  icon: LucideIcon;
  gradient: string;
  glyphColor?: string;
}

export interface ContactRow {
  title: string;
  value: string;
  href: string;
  initials: string;
}

export interface EducationEntry {
  university: string;
  degree: string;
  timeline: string;
  coursework: string[];
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
  category: "Systems" | "AI" | "Web" | "Cloud";
}

export interface ExperienceEntry {
  role: string;
  company: string;
  timeline: string;
  summary: string;
}

export interface PortfolioProfile {
  name: string;
  initials: string;
  role: string;
  location: string;
  bio: string;
  skills: string[];
}

export interface SettingsState {
  theme: ThemeMode;
  accent: AccentColor;
  wallpaper: WallpaperVariant;
  animationSpeed: number;
  glassIntensity: number;
}
