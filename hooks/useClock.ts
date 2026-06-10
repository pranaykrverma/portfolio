"use client";

import { useEffect, useState } from "react";

export function useClock() {
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setDate(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return {
    time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    date: date.toLocaleDateString([], { day: "2-digit", month: "2-digit", year: "numeric" }),
  };
}
