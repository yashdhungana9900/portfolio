import Reveal from "./Reveal";

type Project = {
  title: string;
  description: string;
  stack: string[];
  code?: string; // GitHub URL
  live?: string; // deployed URL
};

// Edit this list. Make "stack" match what you actually used.
const projects: Project[] = [
  {
    title: "Habit Tracker",
    description:
      "Create habits, check them off daily, and watch your streak grow. Streaks reset when a day is missed.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    code: "https://github.com/your-username/habit-tracker",
    live: "https://your-habit-tracker.vercel.app",
  },
  {
    title: "DSA Visualizer",
    description:
      "Watch sorting and searching algorithms run step by step, with speed control so you can follow each comparison.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    code: "https://github.com/your-username/dsa-visualizer",
    live: "https://your-dsa-visualizer.vercel.app",
  },
  {
    title: "Portfolio",
    description:
      "This site. Built with the Next.js App Router, typed components and Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    code: "https://github.com/your-username/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="container-page py-20">
        <h2 className="section-title">Projects</h2>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {projects.map((p) => (
            <Reveal
              as="li"
              key={p.title}
              className="grid gap-4 py-8 md:grid-cols-[1fr_1.6fr_auto] md:gap-10"
            >
              <h3 className="text-2xl font-bold">{p.title}</h3>

              <div>
                <p className="leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-soft px-2.5 py-1 text-xs font-medium text-brand"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-5 text-sm font-semibold md:flex-col md:gap-2 md:text-right">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand underline-offset-4 hover:underline"
                  >
                    Live demo
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink underline-offset-4 hover:underline"
                  >
                    Source code
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
