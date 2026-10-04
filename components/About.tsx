import Image from "next/image";
import Reveal from "./Reveal";

// Put your photo in public/ (for example public/me.webp), then set this to "/me.webp".
const PHOTO = "" as string;

const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL"] },
  { group: "Backend", items: ["Django", "PostgreSQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML and CSS"] },
  { group: "Core CS", items: ["Data structures", "Algorithms", "OOP", "Databases"] },
  { group: "Tools", items: ["Git and GitHub", "VS Code", "Vercel"] },
];

const stats = [
  { icon: "💻", value: "5+", label: "Projects built" },
  { icon: "🧠", value: "300+", label: "DSA problems solved" },
  { icon: "📚", value: "24/7", label: "Learning mode" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-surface">
      <div
        className={`container-page grid items-center gap-12 py-20 ${
          PHOTO ? "lg:grid-cols-[1.5fr_1fr]" : ""
        }`}
      >
        <div>
          <h2 className="section-title">
            About <span className="text-brand">me</span>
          </h2>

          <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
            Full-Stack Developer
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            I&apos;m a final-year engineering student who builds full-stack web
            apps with Python, Django and Next.js. I like turning an idea into a
            working product, and I practice data structures and algorithms
            regularly to keep my problem-solving sharp.
          </p>

          <h3 className="mt-10 text-xl font-bold">Core skills</h3>
          <dl className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {skills.map((s, i) => (
              <Reveal
                key={s.group}
                delay={i * 0.06}
                className="border-t border-line pt-4"
              >
                <dt className="font-display text-base font-bold">{s.group}</dt>
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

          <ul className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <Reveal
                as="li"
                key={s.label}
                delay={i * 0.08}
                className="rounded-xl border border-line bg-paper p-4 text-center sm:p-5"
              >
                <div className="text-2xl" aria-hidden>
                  {s.icon}
                </div>
                <div className="mt-2 font-display text-2xl font-extrabold text-brand sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted sm:text-sm">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {PHOTO && (
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-line">
            <Image
              src={PHOTO}
              alt="Yashraj Dhungana"
              fill
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}