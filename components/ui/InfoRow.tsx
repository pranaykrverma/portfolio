import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function InfoRow({
  label,
  value,
  children,
  className,
}: {
  label: string;
  value?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-[13px] border border-white/[.07] bg-white/[.045] p-3 shadow-card", className)}>
      <p className="text-[10px] font-bold uppercase tracking-[.08em] text-white/32">{label}</p>
      {value ? <p className="mt-1 text-[13px] font-semibold text-white/90">{value}</p> : null}
      {children}
    </div>
  );
}
