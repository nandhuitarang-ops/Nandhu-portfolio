import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
