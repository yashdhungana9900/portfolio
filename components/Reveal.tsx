"use client";

import { m } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  as?: "div" | "li";
  delay?: number;
  className?: string;
};

// Fades content up once, the first time it scrolls into view.
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className,
}: RevealProps) {
  const Tag = as === "li" ? m.li : m.div;

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
}
