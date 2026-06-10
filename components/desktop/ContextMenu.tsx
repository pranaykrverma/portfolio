"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Copy, Download, Mail, RefreshCcw } from "lucide-react";
import { useEffect } from "react";
import type { ContextPoint } from "@/hooks/useContextMenu";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function ContextMenu({ point, onClose }: { point: ContextPoint | null; onClose: () => void }) {
  const notify = usePortfolioStore((state) => state.notify);

  useEffect(() => {
    if (!point) return;
    const close = () => onClose();
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [point, onClose]);

  const items = [
    { label: "Copy portfolio link", icon: Copy },
    { label: "Download resume", icon: Download },
    { label: "Open contact card", icon: Mail },
    { label: "Refresh desktop", icon: RefreshCcw },
  ];

  return (
    <AnimatePresence>
      {point ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -4 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -4 }}
          className="fixed z-[80] w-[218px] rounded-[13px] border border-white/[.08] bg-[#2a2b30]/86 p-1 shadow-window backdrop-blur-[30px]"
          style={{ left: point.x, top: point.y }}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  notify(item.label);
                  onClose();
                }}
                className="flex h-9 w-full items-center gap-3 rounded-[9px] px-3 text-[13px] font-semibold text-white/78 hover:bg-appleBlue hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
