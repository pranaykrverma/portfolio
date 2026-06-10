"use client";

import { Apple, BatteryMedium, Search, Wifi } from "lucide-react";
import { useClock } from "@/hooks/useClock";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export function MenuBar() {
  const clock = useClock();
  const toggleSpotlight = usePortfolioStore((state) => state.toggleSpotlight);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[28px] items-center justify-between border-b border-white/[.06] bg-[#050a14]/75 px-[22px] text-white/88 backdrop-blur-[30px]">
      <div className="flex h-full items-center gap-[12px] text-[14px] font-semibold">
        <Apple className="h-[17px] w-[17px] fill-current" strokeWidth={2.4} />
        <span className="text-[14px] leading-none text-white/85">Portfolio</span>
      </div>
      <div className="flex h-full items-center gap-[15px] text-[14px] font-semibold tabular-nums text-white/86">
        <button type="button" onClick={() => toggleSpotlight(true)} aria-label="Open Spotlight">
          <Search className="h-[15px] w-[15px]" />
        </button>
        <Wifi className="h-[15px] w-[15px]" />
        <BatteryMedium className="h-[22px] w-[22px]" />
        <span>{clock.time}</span>
      </div>
    </header>
  );
}
