"use client";

import { useCallback, useState, type MouseEvent } from "react";

export interface ContextPoint {
  x: number;
  y: number;
}

export function useContextMenu() {
  const [point, setPoint] = useState<ContextPoint | null>(null);

  const open = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setPoint({ x: event.clientX, y: event.clientY });
  }, []);

  const close = useCallback(() => setPoint(null), []);

  return { point, open, close };
}
