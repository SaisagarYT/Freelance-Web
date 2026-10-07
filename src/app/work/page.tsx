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
    <main className="min-h-screen bg-[#F7F5FC] text-slate-900 flex flex-col relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Detachable Fixed Island Dock Navbar */}
      <Navbar onContactClick={scrollToContact} />

      {/* ============================================================ */}
      {/* FULL-SCREEN ARCHITECTURAL VIOLETISH-WHITE GRID HERO SECTION  */}
      {/* Exact replica of the reference design on a violetish-white   */}
      {/* architectural grid canvas with zero dark gradient colors     */}
      {/* ============================================================ */}
      <section
        className="w-full min-h-screen h-screen relative flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-20 py-6 sm:py-10 select-none overflow-hidden"
        style={{
          backgroundColor: "#F7F5FC",
          backgroundImage: `
            linear-gradient(to right, rgba(147, 51, 234, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      >
        {/* Full-Screen Vertical Architectural Column Grid Dividers (10 Columns) */}
        <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-full border-r border-[#E2DCF0]/80 last:border-r-0"
            />
          ))}
        </div>

        {/* TOP ARCHITECTURAL METADATA ROW (with clearance for fixed floating Navbar) */}
        <div className="relative z-10 w-full pt-18 sm:pt-22 md:pt-24 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-roboto-condensed font-black tracking-wider text-base sm:text-xl text-slate-950 uppercase">
              KAIZEN_
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] sm:text-[11px] text-purple-800/80 uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-purple-100/60 border border-purple-200/50">
              HI-END DEVELOPMENT
            </span>
          </div>

          {/* Right Status Specification */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="hidden sm:inline">INDEXED PRODUCTION ARCHIVE</span>
            <span className="sm:hidden">ARCHIVE</span>
            <span className="text-slate-400">// 2026</span>
          </div>
        </div>

        {/* MAIN HERO CONTENT AREA */}
        <div className="relative z-10 my-auto py-6 flex flex-col justify-center">
          {/* Monumental Headline */}
          <h1 className="font-roboto-condensed font-black tracking-tight text-slate-950 text-5xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[124px] leading-[0.92] uppercase">
            FROM<br />
            IDEA TO FINISHED<br />
            PRODUCT<span className="text-purple-600 animate-pulse">_</span>
          </h1>

          {/* Bottom-Right Positioned Monospace Subtext */}
          <div className="w-full flex justify-end pt-4 sm:pt-6 md:pt-8 pr-2 sm:pr-6">
            <p className="font-mono text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-[290px] sm:max-w-[360px] md:max-w-[400px]">
              We start work immediately and you&apos;ll have weekly check-ins.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR: Crosshair & Social Handles */}
        <div className="relative z-10 w-full flex items-end justify-between pb-2 sm:pb-4">
          <div className="flex items-center gap-6 text-slate-500 font-mono text-xs sm:text-sm font-semibold">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-950 transition-colors"
            >
              in
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-950 transition-colors"
            >
              f
            </a>
          </div>

          {/* Architectural Crosshair Marker */}
          <div className="text-purple-400">
            <Plus className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: CURATED PRODUCTION PORTFOLIO ARCHIVE              */}
      {/* Real flagship projects built with this exact architectural rig */}
      {/* ============================================================ */}
      <section
        className="w-full bg-[#F7F5FC] border-t border-[#E2DCF0] py-16 sm:py-24 px-4 sm:px-8 lg:px-14 relative"
        style={{
          backgroundColor: "#F7F5FC",
          backgroundImage: `
            linear-gradient(to right, rgba(147, 51, 234, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DCF0]">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>INDEXED WORKS & SYSTEMS</span>
              </div>
              <h2 className="font-roboto-condensed font-black text-3xl sm:text-5xl tracking-tight text-slate-950 uppercase">
                ENGINEERED FOR COMPOUNDING SCALE
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-slate-600 max-w-md">
              Full-stack SaaS applications, fluid interactive systems, and production platforms built for speed, resiliency, and conversion.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#E2DCF0] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1 shadow-[0_4px_20px_rgba(124,58,237,0.03)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.08)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs text-purple-700/70">
                    <span>{`SYS_${String(idx + 1).padStart(2, "0")}`}</span>
                    <span className="text-[#10B981] font-semibold">{project.metric}</span>
                  </div>

                  <h3 className="font-roboto-condensed font-black text-2xl text-slate-900 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-roboto-condensed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-purple-50/70 border border-purple-100 text-[11px] font-mono text-purple-900 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <button
                      onClick={scrollToContact}
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-roboto-condensed text-slate-900 group-hover:text-purple-700 transition-colors cursor-pointer"
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
