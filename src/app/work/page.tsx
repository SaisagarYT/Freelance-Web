"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function WorkPage() {
  const [activeCard, setActiveCard] = useState<"dark" | "light">("dark");
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    contactElem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#07091B] text-white flex flex-col relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Detachable Fixed Island Dock Navbar */}
      <Navbar onContactClick={scrollToContact} />

      {/* Top spacer for fixed navbar balance */}
      <div className="w-full h-16 sm:h-20" />

      {/* ============================================================ */}
      {/* HERO STAGE: DUAL ARCHITECTURAL OVERLAPPING SCREEN COMPOSITION */}
      {/* Exact replica of the reference design with website CSS & fonts */}
      {/* ============================================================ */}
      <section className="w-full relative px-3 sm:px-6 lg:px-10 py-6 sm:py-10 lg:py-14 flex items-center justify-center">
        <div className="w-full max-w-[1360px] relative min-h-[580px] sm:min-h-[680px] lg:min-h-[760px] flex items-center justify-center">
          
          {/* ========================================================== */}
          {/* CARD B: WHITE ARCHITECTURAL SCREEN (Upper Right Overlap)   */}
          {/* ========================================================== */}
          <motion.div
            layout
            onClick={() => setActiveCard("light")}
            animate={{
              zIndex: activeCard === "light" ? 30 : 10,
              scale: activeCard === "light" ? 1.02 : 0.94,
              opacity: activeCard === "light" ? 1 : 0.88,
              y: activeCard === "light" ? 0 : -35,
              x: activeCard === "light" ? 0 : 40,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className={`absolute top-0 sm:top-2 right-0 sm:right-4 w-[92%] sm:w-[84%] lg:w-[76%] aspect-[16/10] sm:aspect-[16/9.4] rounded-2xl sm:rounded-3xl bg-white text-slate-900 border border-slate-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden cursor-pointer select-none flex flex-col justify-between p-5 sm:p-8 lg:p-12`}
          >
            {/* Vertical Architectural Column Grid Dividers (10 Columns) */}
            <div className="absolute inset-0 grid grid-cols-8 sm:grid-cols-10 pointer-events-none">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-full border-r border-slate-100/80 last:border-r-0"
                />
              ))}
            </div>

            {/* TOP BAR / HEADER ROW */}
            <div className="relative z-10 w-full flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-roboto-condensed font-black tracking-wider text-base sm:text-xl text-slate-950 uppercase">
                  KAIZEN_
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  HI-END DEVELOPMENT
                </span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  HOME
                </Link>
                <Link href="/#methodology" className="hover:text-slate-900 transition-colors">
                  HOW IT WORKS
                </Link>
                <Link href="/#showcase" className="hover:text-slate-900 transition-colors">
                  SUCCESS STORIES
                </Link>
              </div>

              {/* Right CTA Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToContact();
                  }}
                  className="px-3.5 py-1.5 rounded-full font-roboto-condensed font-bold text-[11px] sm:text-xs tracking-wider uppercase border border-slate-300 hover:border-slate-400 text-slate-800 transition-colors"
                >
                  START PROJECT
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToContact();
                  }}
                  className="px-3.5 py-1.5 rounded-full font-roboto-condensed font-bold text-[11px] sm:text-xs tracking-wider uppercase bg-[#10B981] hover:bg-[#059669] text-white transition-colors shadow-xs"
                >
                  LOGIN
                </button>
              </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="relative z-10 my-auto pt-6 sm:pt-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* Massive Headline */}
              <h2 className="font-roboto-condensed font-black tracking-tight text-slate-950 text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.92] uppercase">
                HIRE<br />
                THE BEST<br />
                TEAM_
              </h2>

              {/* Top-Right Subtext */}
              <div className="max-w-[240px] md:pt-2">
                <p className="font-mono text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  Powerful core and flexible teams of developers all around the world.
                </p>
              </div>
            </div>

            {/* BOTTOM BAR: Crosshair & Social Handles */}
            <div className="relative z-10 w-full flex items-end justify-between pt-4">
              <div className="flex items-center gap-4 text-slate-400 font-mono text-xs font-semibold">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-800 transition-colors"
                >
                  in
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-800 transition-colors"
                >
                  f
                </a>
              </div>

              {/* Architectural Crosshair Marker */}
              <div className="text-slate-300">
                <Plus className="w-5 h-5 stroke-[1.5]" />
              </div>
            </div>
          </motion.div>

          {/* ========================================================== */}
          {/* CARD A: SIGNATURE MIDNIGHT SCREEN (Primary Foreground)     */}
          {/* ========================================================== */}
          <motion.div
            layout
            onClick={() => setActiveCard("dark")}
            animate={{
              zIndex: activeCard === "dark" ? 30 : 10,
              scale: activeCard === "dark" ? 1 : 0.94,
              opacity: activeCard === "dark" ? 1 : 0.88,
              y: activeCard === "dark" ? 0 : 35,
              x: activeCard === "dark" ? 0 : -35,
            }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className={`relative w-full lg:w-[88%] aspect-[16/10] sm:aspect-[16/9.2] rounded-2xl sm:rounded-3xl text-white border border-indigo-400/25 shadow-[0_30px_90px_-20px_rgba(41,72,255,0.35)] overflow-hidden cursor-pointer select-none flex flex-col justify-between p-5 sm:p-8 lg:p-12`}
            style={{
              background:
                "radial-gradient(ellipse 95% 90% at 50% 0%, #151D5A 0%, #0D123D 40%, #080B22 100%)",
            }}
          >
            {/* Vertical Architectural Column Grid Dividers (10 Columns) */}
            <div className="absolute inset-0 grid grid-cols-8 sm:grid-cols-10 pointer-events-none">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="h-full border-r border-white/[0.07] last:border-r-0"
                />
              ))}
            </div>

            {/* Subtle Ambient Radial Highlight */}
            <div
              className="absolute -top-32 left-1/4 w-[500px] h-[350px] bg-indigo-500/15 rounded-full blur-[80px] pointer-events-none"
            />

            {/* TOP BAR / HEADER ROW */}
            <div className="relative z-10 w-full flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-roboto-condensed font-black tracking-wider text-base sm:text-2xl text-white uppercase">
                  KAIZEN_
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] text-indigo-200/70 uppercase tracking-widest font-semibold">
                  HI-END DEVELOPMENT
                </span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
                <Link href="/" className="hover:text-white transition-colors">
                  HOME
                </Link>
                <Link href="/#capabilities" className="hover:text-white transition-colors">
                  CAPABILITIES
                </Link>
                <Link href="/#architects" className="hover:text-white transition-colors">
                  ARCHITECTS
                </Link>
              </div>

              {/* Right CTA Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToContact();
                  }}
                  className="px-3.5 sm:px-4 py-1.5 rounded-full font-roboto-condensed font-bold text-[11px] sm:text-xs tracking-wider uppercase bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors backdrop-blur-md"
                >
                  START PROJECT
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToContact();
                  }}
                  className="px-3.5 sm:px-4 py-1.5 rounded-full font-roboto-condensed font-bold text-[11px] sm:text-xs tracking-wider uppercase bg-[#10B981] hover:bg-[#059669] text-white transition-colors shadow-sm"
                >
                  LOGIN
                </button>
              </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="relative z-10 my-auto pt-4 sm:pt-8 flex flex-col justify-center">
              {/* Massive Monumental Headline */}
              <h1 className="font-roboto-condensed font-black tracking-tight text-white text-4xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[96px] leading-[0.92] uppercase">
                FROM<br />
                IDEA TO FINISHED<br />
                PRODUCT_
              </h1>

              {/* Bottom Right Positioned Monospace Subtext */}
              <div className="w-full flex justify-end pt-3 sm:pt-5">
                <p className="font-mono text-xs sm:text-sm text-indigo-100/80 leading-relaxed max-w-[280px] sm:max-w-[320px]">
                  We start work immediately and you&apos;ll have weekly check-ins.
                </p>
              </div>
            </div>

            {/* BOTTOM BAR: Crosshair & Social Handles */}
            <div className="relative z-10 w-full flex items-end justify-between pt-2">
              <div className="flex items-center gap-5 text-indigo-200/60 font-mono text-xs font-semibold">
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
              <div className="text-indigo-400/70">
                <Plus className="w-6 h-6 stroke-[1.5]" />
              </div>
            </div>
          </motion.div>
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
                      className="inline-flex items-center gap-1.5 text-xs font-bold font-roboto-condensed text-white group-hover:text-[#10B981] transition-colors"
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
