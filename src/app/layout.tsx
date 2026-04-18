import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Y. Nandha Kumar Reddy | AI & Full Stack Developer",
  description:
    "Portfolio of Y. Nandha Kumar Reddy — AI & Full Stack Developer building intelligent systems, scalable SaaS platforms, and data-driven applications.",
  keywords: [
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "Python",
    "Portfolio",
    "Nandha Kumar Reddy",
  ],
  authors: [{ name: "Y. Nandha Kumar Reddy" }],
  openGraph: {
    title: "Y. Nandha Kumar Reddy | AI & Full Stack Developer",
    description:
      "Building intelligent systems & scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-[var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
