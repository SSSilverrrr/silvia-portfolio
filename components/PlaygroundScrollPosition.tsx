"use client";

import { useLayoutEffect } from "react";

export function PlaygroundScrollPosition() {
  useLayoutEffect(() => {
    if (window.location.hash) return;

    window.history.scrollRestoration = "manual";
    const resetToTop = () => {
      if (!window.location.hash) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    resetToTop();
    const frame = window.requestAnimationFrame(resetToTop);
    const shortReset = window.setTimeout(resetToTop, 120);
    const finalReset = window.setTimeout(resetToTop, 500);
    window.addEventListener("pageshow", resetToTop);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(shortReset);
      window.clearTimeout(finalReset);
      window.removeEventListener("pageshow", resetToTop);
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return null;
}
