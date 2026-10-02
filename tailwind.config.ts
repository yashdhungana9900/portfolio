import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4F6FA",   // page background
        ink: "#0E1A2B",     // text + dark section
        muted: "#5B6779",   // secondary text
        line: "#D9DFE8",    // borders
        brand: "#2B50F5",   // links, buttons
        soft: "#E4EAFF",    // light brand tint
        ok: "#0F9F6E",      // "open to work" dot
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;