export default function Footer() {
  return (
    <footer className="bg-ink text-sm text-white/60">
      <div className="container-page flex flex-col gap-2 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Yashraj</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
