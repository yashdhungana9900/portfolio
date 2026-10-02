"use client";

import { m, type Variants } from "framer-motion";

const builds = [
  { name: "Habit Tracker", note: "Daily habits with streaks" },
  { name: "DSA Visualizer", note: "Step-by-step algorithm animations" },
  { name: "This portfolio", note: "Next.js and Tailwind" },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="container-page py-20 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
        <m.div variants={container} initial="hidden" animate="show">
          <m.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm text-muted"
          >
            <span className="h-2 w-2 rounded-full bg-ok" aria-hidden />
            Open to SDE roles, graduating 2027
          </m.p>

          {/* The h1 is NOT animated on purpose: it is the biggest element on
              screen, so hiding it until JS loads would hurt the LCP score. */}
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-7xl">
            Yashraj builds full-stack web apps.
          </h1>

          <m.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Final-year engineering student. I work with Next.js, TypeScript,
            Node.js and PostgreSQL, and I&apos;m looking for a software
            engineer role at a product company.
          </m.p>

          <m.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <m.a
              href="#projects"
              className="btn-primary"
              whileTap={{ scale: 0.97 }}
            >
              See my projects
            </m.a>
            <m.a
              href="/resume.pdf"
              className="btn-outline"
              whileTap={{ scale: 0.97 }}
            >
              Download resume
            </m.a>
          </m.div>
        </m.div>

        <m.aside
          aria-label="Things I've built"
          className="rounded-2xl border border-line bg-white p-6 shadow-[0_1px_0_#D9DFE8]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <h2 className="text-sm font-semibold text-muted">
            What I&apos;ve built
          </h2>
          <ul className="mt-4 divide-y divide-line">
            {builds.map((b) => (
              <li key={b.name}>
                <a
                  href="#projects"
                  className="group flex flex-col py-4 first:pt-0 last:pb-0"
                >
                  <span className="font-display text-lg font-bold transition-colors group-hover:text-brand">
                    {b.name}
                  </span>
                  <span className="text-sm text-muted">{b.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </m.aside>
      </div>
    </section>
  );
}
