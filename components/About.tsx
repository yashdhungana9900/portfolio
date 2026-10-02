import Reveal from "./Reveal";

const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "HTML and CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Python"] },
  { group: "Core CS", items: ["Data structures", "Algorithms", "OOP", "Databases"] },
  { group: "Tools", items: ["Git and GitHub", "VS Code", "Vercel"] },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-white">
      <div className="container-page grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="section-title">About</h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            I&apos;m a 4th-year engineering student who likes turning an idea
            into a working web app. I care about clean code, clear UI and
            understanding how things work underneath, which is why I spend
            time on data structures and algorithms alongside projects.
          </p>
        </div>

        <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.07} className="border-t border-line pt-4">
              <dt className="font-display text-lg font-bold">{s.group}</dt>
              <dd className="mt-2 text-muted">{s.items.join(", ")}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
