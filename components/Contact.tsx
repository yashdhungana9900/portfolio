const EMAIL = "your-email@example.com"; // change this

const links = [
  { label: "GitHub", href: "https://github.com/yashdhungana9900" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yashdhungana/" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-ink text-white">
      <div className="container-page py-24">
        <h2 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-6xl">
          Hiring for a software role? Let&apos;s talk.
        </h2>

        <p className="mt-5 max-w-lg text-lg text-white/70">
          I reply to every email, usually within a day.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${EMAIL}`}
            className="btn bg-white text-ink hover:bg-soft"
          >
            Email me
          </a>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
