import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import FallingParticles from "@/components/FallingParticles";
import CursorArrow from "@/components/CursorArrow";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Runs before the page paints, so a saved theme never flashes the default one.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="mint"||t==="violet"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.title, template: "%s | Yashraj Dhungana" },
  description: SITE.description,
  keywords: [
    "Yashraj Dhungana",
    "full-stack developer",
    "software engineer",
    "Python",
    "Django",
    "Flask",
    "Next.js",
    "machine learning",
    "portfolio",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="mint"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <FallingParticles />
        <CursorArrow />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}