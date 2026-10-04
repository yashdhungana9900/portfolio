import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper text-sm text-muted">
      <div className="container-page flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <div className="flex gap-5">
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-brand"
          >
            GitHub
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-brand"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}