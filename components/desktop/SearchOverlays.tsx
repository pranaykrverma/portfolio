"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Command, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { dockApps } from "@/data/portfolio";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { appleSpring } from "@/utils/animations";
import { searchPortfolio } from "@/utils/search";
import { cn } from "@/utils/cn";

export function Spotlight() {
  const open = usePortfolioStore((state) => state.isSpotlightOpen);
  const toggle = usePortfolioStore((state) => state.toggleSpotlight);
  const openApp = usePortfolioStore((state) => state.openApp);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const results = useMemo(() => searchPortfolio(query), [query]);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[70] bg-black/10 backdrop-blur-[2px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => toggle(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -16 }}
            transition={appleSpring}
            className="mx-auto mt-[90px] w-[min(720px,calc(100vw-28px))] overflow-hidden rounded-[22px] border border-white/[.10] bg-[#24252b]/88 shadow-window backdrop-blur-[38px]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-[70px] items-center gap-4 border-b border-white/[.07] px-6">
              <Search className="h-6 w-6 text-white/38" />
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} className="flex-1 bg-transparent text-[25px] font-semibold text-white outline-none placeholder:text-white/25" placeholder="Search" />
            </div>
            <ResultList results={results} onPick={openApp} />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function CommandPalette() {
  const open = usePortfolioStore((state) => state.isCommandOpen);
  const toggle = usePortfolioStore((state) => state.toggleCommand);
  const openApp = usePortfolioStore((state) => state.openApp);
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchPortfolio(query), [query]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[72] bg-black/25 backdrop-blur-[3px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => toggle(false)}>
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={appleSpring}
            className="mx-auto mt-[15vh] w-[min(620px,calc(100vw-30px))] overflow-hidden rounded-[18px] border border-white/[.10] bg-[#202126]/92 shadow-window backdrop-blur-[36px]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-[58px] items-center gap-3 border-b border-white/[.07] px-5">
              <Command className="h-5 w-5 text-white/40" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} autoFocus className="flex-1 bg-transparent text-[18px] font-semibold text-white outline-none placeholder:text-white/25" placeholder="Open app or search portfolio" />
              <kbd className="rounded-md bg-white/[.08] px-2 py-1 text-[12px] font-bold text-white/38">esc</kbd>
            </div>
            <ResultList results={results} onPick={openApp} compact />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function ResultList({
  results,
  onPick,
  compact,
}: {
  results: ReturnType<typeof searchPortfolio>;
  onPick: (app: (typeof dockApps)[number]["id"]) => void;
  compact?: boolean;
}) {
  return (
    <div className={cn("native-scroll max-h-[360px] overflow-y-auto p-2", compact && "max-h-[330px]")}>
      {results.map((result) => {
        const app = dockApps.find((item) => item.id === result.app);
        const Icon = app?.icon ?? Search;
        return (
          <button key={result.id} type="button" onClick={() => onPick(result.app)} className="flex w-full items-center gap-3 rounded-[12px] px-4 py-3 text-left hover:bg-white/[.07]">
            <span className={cn("grid h-10 w-10 place-items-center rounded-[10px] bg-gradient-to-br", app?.gradient ?? "from-blue-500 to-cyan-400")}>
              <Icon className="h-5 w-5 text-white" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-bold text-white/86">{result.title}</span>
              <span className="block truncate text-[13px] font-semibold text-white/34">{result.subtitle}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
