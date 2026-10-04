const links = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="container-page flex h-16 items-center justify-between"
      >
        <a href="#top" className="font-display text-xl font-bold">
          Yashraj Dhungana
        </a>

        <ul className="flex items-center gap-6 text-sm font-medium text-muted sm:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-brand">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="rounded-lg border border-ink/20 px-3 py-1.5 text-ink transition-colors hover:border-brand hover:bg-surface hover:text-brand"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}