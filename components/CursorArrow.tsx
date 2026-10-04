"use client";

import { useEffect, useRef } from "react";

export default function CursorArrow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseOnly = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const el = ref.current;
    if (!mouseOnly || reduced || !el) return;

    const root = document.documentElement;

    const onMove = (e: PointerEvent) => {
      // The arrow tip sits at 3,3 inside the SVG, so shift it to land exactly on the pointer.
      el.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
      el.style.opacity = "1";
      root.classList.add("custom-cursor");
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      root.removeEventListener("mouseleave", onLeave);
      root.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] opacity-0"
      style={{ willChange: "transform" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="rgb(var(--brand))">
        <path d="M3 3l17 7-7 3-3 7z" />
      </svg>
    </div>
  );
}