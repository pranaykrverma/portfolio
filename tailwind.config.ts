import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./store/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        appleBlue: "#0A84FF",
        graphite: "#1f2026",
        graphiteLight: "#2a2b31",
        sidebar: "rgba(22, 23, 29, 0.72)",
        material: "rgba(28, 29, 35, 0.88)",
      },
      boxShadow: {
        window:
          "0 34px 90px rgba(0,0,0,.36), 0 14px 42px rgba(0,0,0,.24), inset 0 1px rgba(255,255,255,.08)",
        dock: "0 22px 70px rgba(0,0,0,.34), inset 0 1px rgba(255,255,255,.12)",
        card: "0 16px 46px rgba(0,0,0,.22), inset 0 1px rgba(255,255,255,.06)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Inter",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["SF Mono", "ui-monospace", "Menlo", "Consolas", "monospace"],
      },
      keyframes: {
        wallpaper: {
          "0%, 100%": { transform: "translate3d(-1.5%, -1%, 0) scale(1.02)" },
          "50%": { transform: "translate3d(1.5%, 1%, 0) scale(1.05)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: ".55" },
          "50%": { opacity: ".86" },
        },
      },
      animation: {
        wallpaper: "wallpaper 18s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
