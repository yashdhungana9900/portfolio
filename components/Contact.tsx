import { SITE } from "@/lib/site";

const EMAIL = "yashdhungana9900@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="container-page py-24">
        <h2 className="max-w-2xl text-4xl font-extrabold leading-tight sm:text-6xl">
          Hiring for a software role?{" "}
          <span className="text-brand">Let&apos;s talk.</span>
        </h2>

        <p className="mt-5 max-w-lg text-lg text-muted">
          I reply to every email, usually within a day.
        </p>

        <p className="mt-6 select-all text-xl font-semibold">{EMAIL}</p>

        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${EMAIL}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Email me
          </a>
          <a href={`mailto:${EMAIL}`} className="btn-outline">
            Open in mail app
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}