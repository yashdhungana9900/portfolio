import Reveal from "./Reveal";

const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
  { group: "Backend", items: ["Django", "Flask", "PostgreSQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML and CSS"] },
  { group: "ML and data", items: ["scikit-learn", "Pandas", "NumPy"] },
  { group: "Core CS", items: ["Data structures", "Algorithms", "OOP", "Databases"] },
  { group: "Tools", items: ["Git and GitHub", "VS Code", "Vercel"] },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="section-title">
            About <span className="text-brand">me</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            I&apos;m a 4th-year engineering student who likes turning an idea
            into a working web app. I care about clean code, clear UI and
            understanding how things work underneath, which is why I spend
            time on data structures and algorithms alongside projects.
          </p>
        </div>

        <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal
              key={s.group}
              delay={i * 0.07}
              className="border-t border-line pt-4"
            >
              <dt className="font-display text-lg font-bold">{s.group}</dt>
              <dd className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-soft px-3 py-1 text-sm font-medium text-brand"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}