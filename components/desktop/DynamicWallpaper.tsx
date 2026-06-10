"use client";

import { ThreeAurora } from "@/components/desktop/ThreeAurora";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { cn } from "@/utils/cn";

const variants = {
  sonoma: "from-[#071a37] via-[#061f2a] to-[#05080b]",
  midnight: "from-[#0a1125] via-[#07151f] to-[#070709]",
  aurora: "from-[#14245d] via-[#042b27] to-[#140713]",
};

export function DynamicWallpaper() {
  const wallpaper = usePortfolioStore((state) => state.settings.wallpaper);

  return (
    <div className={cn("fixed inset-0 overflow-hidden bg-gradient-to-br", variants[wallpaper])}>
      <div className="absolute inset-[-6%] animate-wallpaper bg-[radial-gradient(circle_at_33%_25%,rgba(54,99,198,.58),transparent_34%),radial-gradient(circle_at_78%_74%,rgba(25,119,79,.38),transparent_32%),radial-gradient(circle_at_90%_92%,rgba(135,20,94,.22),transparent_25%),linear-gradient(135deg,#16306b_0%,#062b30_48%,#030706_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_47%,rgba(18,50,91,.48),transparent_34%)]" />
      <div className="absolute inset-0 bg-black/10" />
      <ThreeAurora />
    </div>
  );
}
