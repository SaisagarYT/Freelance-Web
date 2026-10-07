"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    contactElem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#080B22] text-white flex flex-col relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Detachable Fixed Island Dock Navbar */}
      <Navbar onContactClick={scrollToContact} />

      {/* ============================================================ */}
      {/* FULL-SCREEN ARCHITECTURAL BLUE/MIDNIGHT HERO SECTION          */}
      {/* Exact replica of the reference design, full screen canvas     */}
      {/* ============================================================ */}
      <section
        className="w-full min-h-screen h-screen relative flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-20 py-6 sm:py-10 select-none overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 95% 90% at 50% 0%, #151D5A 0%, #0D123D 42%, #080B22 100%)",
        }}
      >
        {/* Full-Screen Vertical Architectural Column Grid Dividers (10 Columns) */}
        <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-full border-r border-white/[0.07] last:border-r-0"
            />
          ))}
        </div>

        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute -top-40 left-1/4 w-[650px] h-[450px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

        {/* TOP BAR / HEADER ROW (with clearance for fixed Island Dock Navbar) */}
        <div className="relative z-10 w-full pt-14 sm:pt-16 md:pt-18 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-roboto-condensed font-black tracking-wider text-lg sm:text-2xl text-white uppercase">
              KAIZEN_
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] sm:text-xs text-indigo-200/70 uppercase tracking-widest font-semibold">
              HI-END DEVELOPMENT
            </span>
          </div>

          {/* Navigation Links (Matching reference) */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <Link href="/#capabilities" className="hover:text-white transition-colors">
              CAPABILITIES
            </Link>
            <Link href="/#architects" className="hover:text-white transition-colors">
              ARCHITECTS
            </Link>
            <Link href="/#methodology" className="hover:text-white transition-colors">
              METHODOLOGY
            </Link>
          </div>

          {/* Right CTA Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={scrollToContact}
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-roboto-condensed font-bold text-xs tracking-wider uppercase bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors backdrop-blur-md cursor-pointer"
            >
              START PROJECT
            </button>
            <button
              onClick={scrollToContact}
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full font-roboto-condensed font-bold text-xs tracking-wider uppercase bg-[#10B981] hover:bg-[#059669] text-white transition-colors shadow-sm cursor-pointer"
            >
              LOGIN
            </button>
          </div>
        </div>

        {/* MAIN HERO CONTENT AREA */}
        <div className="relative z-10 my-auto py-6 flex flex-col justify-center">
          {/* Monumental Headline */}
          <h1 className="font-roboto-condensed font-black tracking-tight text-white text-5xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[124px] leading-[0.92] uppercase">
            FROM<br />
            IDEA TO FINISHED<br />
            PRODUCT_
          </h1>

          {/* Bottom-Right Positioned Monospace Subtext */}
          <div className="w-full flex justify-end pt-4 sm:pt-6 md:pt-8 pr-2 sm:pr-6">
            <p className="font-mono text-xs sm:text-sm md:text-base text-indigo-100/80 leading-relaxed max-w-[290px] sm:max-w-[360px] md:max-w-[400px]">
              We start work immediately and you&apos;ll have weekly check-ins.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR: Crosshair & Social Handles */}
        <div className="relative z-10 w-full flex items-end justify-between pb-2 sm:pb-4">
          <div className="flex items-center gap-6 text-indigo-200/70 font-mono text-xs sm:text-sm font-semibold">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              in
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              f
            </a>
          </div>

          {/* Architectural Crosshair Marker */}
          <div className="text-indigo-400/80">
            <Plus className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: CURATED PRODUCTION PORTFOLIO ARCHIVE              */}
      {/* Real flagship projects built with this exact architectural rig */}
      {/* ============================================================ */}
      <section className="w-full bg-[#080B22] border-t border-indigo-500/20 py-16 sm:py-24 px-4 sm:px-8 lg:px-14">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-indigo-500/20">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>INDEXED WORKS & SYSTEMS</span>
              </div>
              <h2 className="font-roboto-condensed font-black text-3xl sm:text-5xl tracking-tight text-white uppercase">
                ENGINEERED FOR COMPOUNDING SCALE
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-indigo-200/70 max-w-md">
              Full-stack SaaS applications, fluid interactive systems, and production platforms built for speed, resiliency, and conversion.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="group p-6 sm:p-8 rounded-2xl bg-[#0C1033] border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs text-indigo-300/60">
                    <span>{`SYS_${String(idx + 1).padStart(2, "0")}`}</span>
                    <span className="text-[#10B981] font-semibold">{project.metric}</span>
                  </div>

                  <h3 className="font-roboto-condensed font-black text-2xl text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-indigo-100/70 leading-relaxed font-roboto-condensed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-indigo-500/20">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-mono text-[11px] text-slate-400">
                      {project.category}
                    </span>
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-roboto-condensed text-white group-hover:text-[#10B981] transition-colors cursor-pointer"
                    >
                      <span>Inquire Specs</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onContactClick={scrollToContact} />
    </main>
  );
}

// Portfolio Project Data
const PROJECTS = [
  {
    id: "quantum-telemetry",
    title: "Quantum Real-Time Telemetry",
    category: "ENTERPRISE SAAS",
    metric: "99.98% ACCURACY",
    description:
      "Engineered an event streaming telemetry platform handling 250k daily active sessions with sub-20ms query latency on multi-region edge clusters.",
    stack: ["Next.js 16", "TypeScript", "ClickHouse", "Tailwind CSS", "Redis"],
  },
  {
    id: "aura-kinetic",
    title: "Aura Kinetic Luxury Commerce",
    category: "HEADLESS STOREFRONT",
    metric: "+140% CONVERSION",
    description:
      "A headless retail experience featuring 60FPS fluid physics, instant optimistic cart state sync, and interactive 3D WebGL asset previews.",
    stack: ["Next.js 16", "Framer Motion", "Stripe API", "Prisma", "PostgreSQL"],
  },
  {
    id: "sentinel-vault",
    title: "Sentinel Autonomous CI/CD Vault",
    category: "DEV TOOLS & INFRA",
    metric: "4.2X PIPELINE VELOCITY",
    description:
      "Cloud management dashboard with zero-trust role-based governance, automated rollback triggers, and comprehensive pipeline visualization.",
    stack: ["React 19", "Go Microservices", "Docker", "GraphQL", "TimescaleDB"],
  },
  {
    id: "hyperion-ai",
    title: "Hyperion Cognitive Workspace",
    category: "AI ENGINE & WORKFLOWS",
    metric: "12M+ TOKENS / DAY",
    description:
      "Multi-agent AI orchestration interface with streaming token response curves, local vector database indexing, and canvas node graphs.",
    stack: ["Next.js 16", "Python FastAPI", "Weaviate", "Tailwind CSS", "WebSockets"],
  },
  {
    id: "vortex-mesh",
    title: "Vortex High-Frequency Exchange",
    category: "FINTECH INFRASTRUCTURE",
    metric: "8MS SETTLEMENT",
    description:
      "Algorithmic trading monitoring terminal built with custom canvas rendering for real-time order book depth charts and risk limit throttles.",
    stack: ["TypeScript", "Rust WASM", "WebGL 2.0", "Redis Streams", "Apache Kafka"],
  },
  {
    id: "prism-design-system",
    title: "Prism Multi-Brand Design Core",
    category: "ACCESSIBILITY & TOKENS",
    metric: "100/100 LIGHTHOUSE",
    description:
      "Comprehensive design token engine and headless component architecture deployed across 14 enterprise micro-frontends with automated visual regression.",
    stack: ["React 19", "Storybook", "Tailwind CSS", "Radix UI", "Jest"],
  },
];
