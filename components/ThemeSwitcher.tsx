"use client";

import { useEffect, useRef, useState } from "react";

const THEMES = [
  { id: "mint", name: "Mint", note: "Dark with a mint accent", dot: "#8EE5C0" },
  { id: "violet", name: "Violet", note: "Dark with a violet accent", dot: "#B79CFF" },
  { id: "light", name: "Light", note: "Light green minimalism", dot: "#0F8A5C" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("mint");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "mint");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(id: string) {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem("theme", id);
    } catch {}
    setOpen(false);
  }

  const current = THEMES.find((t) => t.id === theme) ?? THEMES[0];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Choose theme"
        className="flex items-center gap-2 rounded-lg border border-ink/20 px-3 py-1.5 text-ink transition-colors hover:border-brand"
      >
        <span
          className="h-3 w-3 rounded-full"
          style={{ background: current.dot }}
          aria-hidden
        />
        <span className="hidden sm:inline">{current.name}</span>
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-line bg-surface p-2 shadow-xl"
        >
          {THEMES.map((t) => (
            <li key={t.id} role="none">
              <button
                type="button"
                role="menuitem"
                onClick={() => pick(t.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-soft ${
                  t.id === theme ? "bg-soft" : ""
                }`}
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ background: t.dot }}
                  aria-hidden
                />
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-muted">{t.note}</span>
                </span>
                {t.id === theme && (
                  <span className="ml-auto text-xs font-semibold text-brand">
                    Active
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}