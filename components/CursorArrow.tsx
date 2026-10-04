"use client";

import { useEffect, useRef } from "react";

export default function CursorArrow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mouseOnly = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (!mouseOnly || reduced || !el) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;
    let shown = false;

    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      if (Math.abs(x - cx) > 0.1 || Math.abs(y - cy) > 0.1) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        cx = x;
        cy = y;
        shown = true;
        el.style.opacity = "1";
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      shown = false;
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] opacity-0 transition-opacity duration-200"
      style={{ willChange: "transform" }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        className="ml-3 mt-3"
        fill="rgb(var(--brand))"
      >
        <path d="M3 3l17 7-7 3-3 7z" />
      </svg>
    </div>
  );
}