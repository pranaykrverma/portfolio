import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <h3 className="mb-[11px] text-[11px] font-bold uppercase tracking-[.09em] text-white/30">{children}</h3>;
}
