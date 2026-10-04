import Image from "next/image";
import Reveal from "./Reveal";
import { SITE_URL } from "@/lib/site";

type Project = {
  title: string;
  description: string;
  stack: string[];
  image?: string; // e.g. "/projects/habit-tracker.webp" (file in public/projects)
  code?: string; // GitHub URL
  live?: string; // deployed URL
};

// Only add code/live when the link really works. Empty = button is hidden.
const projects: Project[] = [
  {
    title: "Smart Campus Systems",
    description:
      "Developed a Django-based campus management platform with student authentication, complaint submission, category-based issue tracking, and administrative management. Implemented relational data models using Django ORM for users, complaints, notifications, status tracking, and timestamps, with Django Admin for centralized administration.",
    stack: ["Python", "Django", "JavaScript", "SQL"],
    image: "/projects/smart-campus.webp",
    // code: "https://github.com/yashdhungana9900/YOUR-REPO",
    // live: "https://YOUR-APP-URL",
  },
 
  {
    title: "Portfolio",
    description:
      "This site. Built with the Next.js App Router, typed components and Tailwind CSS, scoring 99 on PageSpeed Insights (mobile).",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    code: "https://github.com/yashdhungana9900/portfolio",
    live: "https://portfolio-two-pi-s00523mp6l.vercel.app",
    image: "/projects/portfolio.webp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-line">
      <div className="container-page py-20">
        <h2 className="section-title">
          Featured <span className="text-brand">Projects</span>
        </h2>

        <ul className="mt-10 grid gap-8">
          {projects.map((p) => (
            <Reveal
              as="li"
              key={p.title}
              className="overflow-hidden rounded-2xl border border-line bg-surface md:grid md:grid-cols-[1.1fr_1fr]"
            >
              <div className="relative aspect-[16/10] bg-soft">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center font-display text-7xl font-extrabold text-brand/40">
                    {p.title[0]}
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <h3 className="text-2xl font-bold sm:text-3xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {p.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-line px-3 py-1 text-sm text-ink"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                {(p.code || p.live) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.code && (
                      <a
                        href={p.code}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline"
                      >
                        Code
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                      >
                        View live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}