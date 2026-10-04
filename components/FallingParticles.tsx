"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; r: number; vx: number; vy: number; a: number };

function brandRgb() {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue("--brand")
    .trim();
  return (v || "142 229 192").split(" ").join(",");
}

export default function FallingParticles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let particles: Particle[] = [];
    let fill = `rgb(${brandRgb()})`;

    const make = (anywhere: boolean): Particle => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : -10,
      r: 0.8 + Math.random() * 1.8,
      vx: (Math.random() - 0.5) * 0.2,
      vy: 0.15 + Math.random() * 0.45,
      a: 0.25 + Math.random() * 0.45,
    });

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const count = w < 640 ? 24 : 55;
      particles = Array.from({ length: count }, () => make(true));
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = fill;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y > h + 10) Object.assign(p, make(false));
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(tick);
    };

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 200);
    };

    // Follow the theme picker: recolor when data-theme changes.
    const observer = new MutationObserver(() => {
      fill = `rgb(${brandRgb()})`;
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Start after the page has loaded so it never competes with the first paint.
    const startTimer = window.setTimeout(() => {
      resize();
      raf = requestAnimationFrame(tick);
      window.addEventListener("resize", onResize);
      document.addEventListener("visibilitychange", onVisibility);
    }, 1500);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(resizeTimer);
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}