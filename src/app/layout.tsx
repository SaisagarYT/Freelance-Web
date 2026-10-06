import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAIZEN SOLVES — Engineering High-Performance Web Apps & Digital Products",
  description: "Crafting high-performance web applications, fluid interactive systems, and SaaS-grade digital experiences.",
  keywords: ["Freelance Web Developer", "Creative Technologist", "Next.js", "React", "Full Stack Engineer", "UI/UX Designer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased font-roboto-condensed selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
