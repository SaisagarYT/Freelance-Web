"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Sparkles,
  Zap,
  ShieldCheck,
  Terminal,
  Database,
  Cloud,
} from "lucide-react";

export const MarqueeSection = () => {
  const stackItems = [
    {
      name: "Next.js 15",
      category: "Full-Stack React",
      icon: <Globe className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "TypeScript",
      category: "Type-Safe Engineering",
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "Tailwind CSS",
      category: "Design Systems",
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "Framer Motion",
      category: "60 FPS Kinetics",
      icon: <Zap className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "GSAP & Anime",
      category: "Complex Timelines",
      icon: <Layers className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "PostgreSQL",
      category: "Relational DB",
      icon: <Database className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "Node.js & Python",
      category: "Microservices",
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "AWS & Vercel",
      category: "Edge Cloud Infrastructure",
      icon: <Cloud className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "Stripe Engine",
      category: "Global Payments",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      name: "Docker & CI/CD",
      category: "DevOps Pipeline",
      icon: <Terminal className="w-5 h-5 text-blue-600" />,
    },
  ];

  return (
    <section id="tech-stack" className="relative w-full bg-white py-16 sm:py-20 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-8">
        <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 mb-2">
          Battle-Tested Foundations
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Delivering enterprise performance with modern architectural tools
        </h2>
        <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
          From fluid client-side physics to sub-millisecond edge compute, engineered with zero compromises.
        </p>
      </div>

      <div className="relative w-full">
        {/* Infinite Moving Cards from Aceternity UI */}
        <InfiniteMovingCards items={stackItems} direction="left" speed="normal" />
      </div>
    </section>
  );
};
