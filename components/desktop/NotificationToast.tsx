"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function NotificationToast() {
  const notification = usePortfolioStore((state) => state.notification);
  const notify = usePortfolioStore((state) => state.notify);

  useEffect(() => {
    if (!notification) return;
    const timer = window.setTimeout(() => notify(null), 2200);
    return () => window.clearTimeout(timer);
  }, [notification, notify]);

  return (
    <AnimatePresence>
      {notification ? (
        <motion.div
          initial={{ opacity: 0, y: -18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -14, scale: 0.98 }}
          className="fixed right-5 top-12 z-[75] flex h-[64px] min-w-[280px] items-center gap-3 rounded-[18px] border border-white/[.10] bg-[#26272d]/88 px-4 text-[14px] font-bold text-white shadow-window backdrop-blur-[32px]"
        >
          <CheckCircle2 className="h-6 w-6 text-appleBlue" />
          {notification}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
