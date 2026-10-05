"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ChevronUp, ChevronDown, ExternalLink } from "lucide-react";

interface BlankProject {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  color: string;
  accent: string;
  tags: string[];
  description: string;
}

export const RadialProjectsSection = ({
  onContactClick,
}: {
  onContactClick?: () => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 8 Curated Projects matching the KIZEN SOLVES Website Theme
  const projects: BlankProject[] = [
    {
      id: "project-01",
      number: "01",
      title: "AURORA ARCHITECTURE",
      category: "Full-Stack Enterprise Cloud",
      year: "2026",
      color: "#0F172A", // Deep Dark Slate
      accent: "#6366F1", // Electric Indigo
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS"],
      description:
        "High-performance cloud architecture engineered for sub-second query latency, global multi-region state synchronization, and enterprise-grade reliability.",
    },
    {
      id: "project-02",
      number: "02",
      title: "KINETIC TELEMETRY",
      category: "Real-Time Telemetry Engine",
      year: "2026",
      color: "#12184B", // Hero Deep Navy
      accent: "#4338CA", // Royal Indigo
      tags: ["WebSocket", "ClickHouse", "Redis Cluster", "Kafka", "Data Pipeline"],
      description:
        "Industrial-grade telemetry ingestion pipeline handling high-frequency data streams with real-time vector indexing and sub-2ms query processing.",
    },
    {
      id: "project-03",
      number: "03",
      title: "SYNAPSE AI MESH",
      category: "Autonomous Systems",
      year: "2025",
      color: "#1E1B4B", // Deep Purple Navy
      accent: "#7C3AED", // Electric Purple
      tags: ["Python", "FastAPI", "Vector DB", "gRPC", "Docker"],
      description:
        "Self-governing agentic mesh network coordinating autonomous execution workflows, semantic memory retrieval, and self-healing cluster operations.",
    },
    {
      id: "project-04",
      number: "04",
      title: "PULSE MOBILE ENGINE",
      category: "Mobile & Graphics Engine",
      year: "2025",
      color: "#172554", // Deep Cobalt
      accent: "#3B82F6", // Cobalt Blue
      tags: ["Flutter 3.24", "Dart", "Skia Shaders", "SQLite", "Firebase"],
      description:
        "Cross-platform native mobile client built with custom Skia graphics shaders, fluid 60fps gesture interactions, and instant offline-first SQLite synchronization.",
    },
    {
      id: "project-05",
      number: "05",
      title: "NEXUS PROTOCOL",
      category: "Zero-Trust Infrastructure",
      year: "2025",
      color: "#2E1065", // Deep Royal Violet
      accent: "#A855F7", // Violet Bloom
      tags: ["Zero-Trust", "Kubernetes", "Go", "Docker", "Terraform"],
      description:
        "Zero-trust perimeter security gateway featuring automated cryptographic key rotation, strict mutual TLS authentication, and federated identity management.",
    },
    {
      id: "project-06",
      number: "06",
      title: "CHRONO LEDGER",
      category: "Fintech & Ledger",
      year: "2024",
      color: "#1E293B", // Graphite Obsidian
      accent: "#818CF8", // Indigo Mist
      tags: ["Solidity", "Go", "Event Sourcing", "Ledger", "Cryptography"],
      description:
        "Deterministic distributed ledger engine for institutional asset clearing with sub-second execution guarantees and atomic state rollback prevention.",
    },
    {
      id: "project-07",
      number: "07",
      title: "STRATA DESIGN SYSTEM",
      category: "UI/UX Architecture",
      year: "2024",
      color: "#132338", // Deep Slate Teal
      accent: "#10B981", // Emerald Mint
      tags: ["Design System", "Figma Tokens", "Storybook", "WCAG AAA", "React"],
      description:
        "Comprehensive enterprise design system comprising over 140 accessible tokens, dynamic contrast validation, component libraries, and automated CI/CD token sync.",
    },
    {
      id: "project-08",
      number: "08",
      title: "VORTEX 3D CANVAS",
      category: "Creative Technology",
      year: "2024",
      color: "#1E1E38", // Midnight Indigo
      accent: "#9333EA", // Luminous Purple
      tags: ["Three.js", "WebGL", "GLSL Shaders", "WebAudio", "GSAP"],
      description:
        "Interactive 3D WebGL soundstage driven by audio frequency shaders, generative particle flows, and buttery-smooth 60fps kinetic user interaction.",
    },
  ];

  // ULTRA-SMOOTH CONTINUOUS SCROLL PHYSICS:
  // 1. Raw scroll progress [0, 1] through the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Map [0, 1] to continuous project range [0, 7]
  const rawProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, projects.length - 1]
  );

  // 3. Luxurious inertia physics spring (stiffness: 85, damping: 26, mass: 0.6)
  // Guarantees zero discrete jumping, buttery continuous gliding
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.6,
    restDelta: 0.001,
  });

  // 4. Continuous progress state driving real-time 120fps card coordinates
  const [progressVal, setProgressVal] = useState(0);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setProgressVal(latest);
  });

  // Active integer index for details
  const activeIndex = Math.min(
    projects.length - 1,
    Math.max(0, Math.round(progressVal))
  );
  const activeProject = projects[activeIndex];

  // Smooth scroll helper for clicks and chevrons
  const scrollToIndex = (idx: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top;
      const scrollableDistance =
        containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll =
        scrollTop + (idx / (projects.length - 1)) * scrollableDistance;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // FULL-HEIGHT CIRCULAR ARC GEOMETRY
  const arcCenter = { cx: -260, cy: 330 };
  const arcRadius = 530;
  const stepAngle = 13.5;

  return (
    // 1. OUTER WRAPPER (Generous 420vh scroll runway for luxurious pacing)
    <div
      ref={containerRef}
      className="relative w-full h-[420vh] bg-white"
    >
      {/* 2. STICKY VIEWPORT CONTAINER (100% Fit to Screen, Never Jitters) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-2 sm:px-4 py-2 sm:py-3 bg-white overflow-hidden z-20">
        {/* 3. FRAMED DARK CONSOLE */}
        <div className="w-full h-full max-h-[calc(100vh-16px)] sm:max-h-[calc(100vh-24px)] rounded-[28px] sm:rounded-[36px] bg-[#090D22] text-white p-5 sm:p-7 lg:p-8 relative overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-950/40 flex flex-col justify-between">
          {/* Dynamic Ambient Website Theme Glow */}
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[170px] pointer-events-none opacity-25 transition-all duration-700"
            style={{ backgroundColor: activeProject.accent }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex items-center justify-between pb-3.5 border-b border-white/10 relative z-10">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs tracking-widest uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                <span>Section // 04 • Selected Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-roboto-condensed">
                Projects & Architecture
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                Scroll to Rotate ({activeIndex + 1} / {projects.length})
              </span>
              <div className="flex items-center gap-1.5 bg-slate-900/90 border border-white/10 rounded-xl p-1 shadow-lg">
                <button
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
                  title="Previous Project (Up)"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <span className="px-2 font-mono text-xs font-bold text-indigo-300">
                  {activeProject.number}
                </span>
                <button
                  onClick={() =>
                    scrollToIndex(
                      Math.min(projects.length - 1, activeIndex + 1)
                    )
                  }
                  disabled={activeIndex === projects.length - 1}
                  className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 cursor-pointer"
                  title="Next Project (Down)"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* MAIN DUAL-STAGE: ROTARY DIAL (LEFT) & CLEAN SHOWCASE (RIGHT)   */}
          {/* ============================================================== */}
          <div className="w-full flex-1 my-3 bg-[#0D122B]/90 border border-white/10 rounded-2xl shadow-xl shadow-black/80 backdrop-blur-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-0 relative z-10">
            {/* ============================================================ */}
            {/* LEFT: CONTINUOUS FLUID ROTARY SCROLLER (120FPS SILK PHYSICS) */}
            {/* ============================================================ */}
            <div className="lg:col-span-5 h-[260px] sm:h-[320px] lg:h-full relative overflow-hidden bg-[#080B1E]/95 border-b lg:border-b-0 lg:border-r border-white/10 flex items-center">
              {/* SVG Background: Full-Height Curved Track & Radial Rays */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 440 660"
              >
                {/* Radial Perspective Rays */}
                {[-36, -24, -12, 0, 12, 24, 36].map((angle, idx) => {
                  const rad = (angle * Math.PI) / 180;
                  const x2 = arcCenter.cx + 700 * Math.cos(rad);
                  const y2 = arcCenter.cy + 700 * Math.sin(rad);
                  const isActive = angle === 0;

                  return (
                    <line
                      key={idx}
                      x1={arcCenter.cx}
                      y1={arcCenter.cy}
                      x2={x2}
                      y2={y2}
                      stroke={
                        isActive
                          ? "rgba(129, 140, 248, 0.45)"
                          : "rgba(255, 255, 255, 0.05)"
                      }
                      strokeWidth={isActive ? "1.5" : "1"}
                      strokeDasharray={isActive ? "none" : "3 5"}
                    />
                  );
                })}

                {/* Circular Arc Track */}
                <path
                  d={`
                    M ${arcCenter.cx + arcRadius * Math.cos((-42 * Math.PI) / 180)} ${
                    arcCenter.cy + arcRadius * Math.sin((-42 * Math.PI) / 180)
                  }
                    A ${arcRadius} ${arcRadius} 0 0 1 ${
                    arcCenter.cx + arcRadius * Math.cos((42 * Math.PI) / 180)
                  } ${arcCenter.cy + arcRadius * Math.sin((42 * Math.PI) / 180)}
                  `}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="24"
                  strokeOpacity="0.12"
                />
                <path
                  d={`
                    M ${arcCenter.cx + arcRadius * Math.cos((-42 * Math.PI) / 180)} ${
                    arcCenter.cy + arcRadius * Math.sin((-42 * Math.PI) / 180)
                  }
                    A ${arcRadius} ${arcRadius} 0 0 1 ${
                    arcCenter.cx + arcRadius * Math.cos((42 * Math.PI) / 180)
                  } ${arcCenter.cy + arcRadius * Math.sin((42 * Math.PI) / 180)}
                  `}
                  fill="none"
                  stroke="rgba(99, 102, 241, 0.35)"
                  strokeWidth="1.5"
                />
              </svg>

              {/* BUTTERY CONTINUOUS GLIDING CARDS REEL */}
              <div className="absolute inset-0 pointer-events-auto">
                {projects.map((proj, idx) => {
                  // Continuous fractional offset from center (glides smoothly pixel by pixel)
                  const offset = idx - progressVal;
                  const angle = offset * stepAngle;
                  const isVisible = angle >= -48 && angle <= 48;
                  const dist = Math.abs(offset);
                  const isNearest = Math.round(progressVal) === idx;

                  if (!isVisible) return null;

                  const rad = (angle * Math.PI) / 180;
                  const x = arcCenter.cx + arcRadius * Math.cos(rad);
                  const y = arcCenter.cy + arcRadius * Math.sin(rad);

                  // Continuous organic scaling and opacity
                  const scale = Math.max(0.85, 1.12 - dist * 0.22);
                  const opacity = Math.max(0.3, 1 - dist * 0.28);

                  return (
                    <div
                      key={proj.id}
                      onClick={() => scrollToIndex(idx)}
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg) scale(${scale})`,
                        opacity: opacity,
                        zIndex: isNearest ? 30 : Math.max(1, 20 - Math.round(dist)),
                        willChange: "transform, opacity",
                      }}
                      className="absolute cursor-pointer"
                    >
                      {/* Clean Minimalist Blank Color Card */}
                      <div
                        style={{ backgroundColor: proj.color }}
                        className={`w-[120px] h-[78px] sm:w-[135px] sm:h-[86px] rounded-2xl border relative overflow-hidden p-2.5 sm:p-3 flex flex-col justify-between shadow-2xl transition-shadow duration-300 ${
                          isNearest
                            ? "border-indigo-400 ring-2 ring-indigo-400/60 shadow-[0_0_28px_rgba(99,102,241,0.5)]"
                            : "border-white/15 hover:border-white/40"
                        }`}
                      >
                        {/* Top: Monospace Project Number & Active Pulse Dot */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-white tracking-wider">
                            // {proj.number}
                          </span>
                          <div
                            className="w-2 h-2 rounded-full transition-colors duration-300"
                            style={{
                              backgroundColor: isNearest
                                ? "#818CF8"
                                : "rgba(255,255,255,0.35)",
                            }}
                          />
                        </div>

                        {/* Bottom: Minimalist Project Identifier */}
                        <div className="text-[11px] font-mono text-white/85 truncate">
                          {proj.title.split(" ")[0]}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Focus Indicator Bar (Website Theme Electric Indigo) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center pr-3 pointer-events-none">
                <div className="w-1.5 h-16 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.9)]" />
              </div>
            </div>

            {/* ============================================================ */}
            {/* RIGHT: TITLE AT TOP, SAME BLANK CARD, SOME MATTER BELOW     */}
            {/* ============================================================ */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0D122B] to-[#080B1E] overflow-y-auto">
              {/* 1. TITLE AT TOP (Smooth Crossfade) */}
              <div className="pb-3 border-b border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id + "-title"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs text-indigo-400 tracking-wider uppercase">
                        Project // {activeProject.number}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {activeProject.year}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white font-roboto-condensed">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-indigo-300/80 mt-0.5">
                      {activeProject.category}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 2. THE SAME BLANK CARD (Smooth Liquid Color Transition) */}
              <div className="my-4 flex-1 flex items-center">
                <div
                  style={{
                    backgroundColor: activeProject.color,
                    transition: "background-color 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="w-full aspect-[16/10] max-h-[260px] sm:max-h-[300px] rounded-2xl border border-white/15 shadow-2xl relative overflow-hidden flex items-end p-4 sm:p-5"
                >
                  {/* Subtle Architectural Corner Markers */}
                  <span className="absolute top-3 left-3 text-white/20 font-mono text-xs">
                    +
                  </span>
                  <span className="absolute top-3 right-3 text-white/20 font-mono text-xs">
                    +
                  </span>
                  <span className="absolute bottom-3 left-3 text-white/20 font-mono text-xs">
                    +
                  </span>
                  <span className="absolute bottom-3 right-3 text-white/20 font-mono text-xs">
                    +
                  </span>

                  {/* Minimalist Index Stamp */}
                  <div className="relative z-10 flex items-center justify-between w-full font-mono text-xs text-white/60">
                    <span>CANVAS // {activeProject.number}</span>
                    <span className="text-white/80 font-semibold">{activeProject.title}</span>
                  </div>
                </div>
              </div>

              {/* 3. SOME MATTER BELOW (Smooth Crossfade) */}
              <div className="pt-3 border-t border-white/10 space-y-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id + "-matter"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-3"
                  >
                    {/* Project Description Matter */}
                    <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed">
                      {activeProject.description}
                    </p>

                    {/* Technology Tags & Action Trigger */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-400/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={onContactClick}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-semibold font-roboto-condensed tracking-tight transition-all active:scale-95 shadow-lg shadow-indigo-950/30 flex-shrink-0 cursor-pointer"
                      >
                        <span>Request Details</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
