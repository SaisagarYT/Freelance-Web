"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ChevronUp, ChevronDown, ExternalLink, Layers } from "lucide-react";

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

export interface RadialProjectsSectionProps {
  onContactClick?: () => void;
  activeIndex?: number;
  onSelectProject?: (idx: number) => void;
}

export const RadialProjectsSection: React.FC<RadialProjectsSectionProps> = ({
  onContactClick,
  activeIndex: controlledIndex,
  onSelectProject,
}) => {

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

  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = controlledIndex !== undefined ? controlledIndex : internalIndex;

  const handleSelectProject = (idx: number) => {
    if (onSelectProject) {
      onSelectProject(idx);
    } else {
      setInternalIndex(idx);
    }
  };

  const progressMotion = useMotionValue(activeIndex);
  const smoothProgress = useSpring(progressMotion, {
    stiffness: 85,
    damping: 24,
    mass: 0.55,
    restDelta: 0.001,
  });

  const [progressVal, setProgressVal] = useState(activeIndex);

  useEffect(() => {
    progressMotion.set(activeIndex);
  }, [activeIndex, progressMotion]);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setProgressVal(latest);
  });

  const activeProject = projects[Math.min(projects.length - 1, Math.max(0, activeIndex))];

  // FULL-HEIGHT CIRCULAR ARC GEOMETRY
  const arcCenter = { cx: -260, cy: 330 };
  const arcRadius = 530;
  const stepAngle = 13.5;

  return (
    <section
      id="projects"
      className="w-full h-screen bg-white relative flex flex-col justify-between px-2 sm:px-4 py-2 sm:py-3 overflow-hidden select-none"
    >
      {/* 1. COMPACT TOP SECTION HEADER */}
      <div className="w-full max-w-[1360px] mx-auto px-2 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between border-b border-slate-100 shrink-0">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 text-indigo-600 font-mono text-[11px] sm:text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
            <span>Section // 04</span>
          </div>
          <span className="text-slate-300">|</span>
          <h2 className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 font-roboto-condensed uppercase">
            Projects &amp; Architecture
          </h2>
        </div>
        <p className="hidden md:block text-slate-500 text-xs font-medium font-roboto-condensed">
          High-performance architectural systems &amp; cloud infrastructure engineered by KIZEN SOLVES.
        </p>
      </div>

      {/* 2. FRAMED DARK CONSOLE (Fits 100% of remaining screen) */}
      <div className="w-full flex-1 min-h-0 mt-2 rounded-[24px] sm:rounded-[32px] bg-[#090D22] text-white relative overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-950/40 flex flex-col justify-between">
        {/* Dynamic Ambient Website Theme Glow */}
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[170px] pointer-events-none opacity-25 transition-all duration-700"
          style={{ backgroundColor: activeProject.accent }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />

            {/* MAIN DUAL-STAGE: ROTARY DIAL (LEFT) & CLEAN SHOWCASE (RIGHT) */}
            <div className="w-full h-full overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-0 relative z-10">
            {/* ============================================================ */}
            {/* LEFT: CONTINUOUS FLUID ROTARY SCROLLER (120FPS SILK PHYSICS) */}
            {/* ============================================================ */}
            <div className="lg:col-span-5 h-[260px] sm:h-[320px] lg:h-full relative overflow-hidden bg-[#080B1E]/95 flex items-center">
              {/* SVG Background: Full-Height Curved Track & Radial Rays */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 440 660"
              >
                {/* Radial Perspective Rays (excluding center angle 0 to remove center line) */}
                {[-36, -24, -12, 12, 24, 36].map((angle, idx) => {
                  const rad = (angle * Math.PI) / 180;
                  const x2 = arcCenter.cx + 700 * Math.cos(rad);
                  const y2 = arcCenter.cy + 700 * Math.sin(rad);

                  return (
                    <line
                      key={idx}
                      x1={arcCenter.cx}
                      y1={arcCenter.cy}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255, 255, 255, 0.05)"
                      strokeWidth="1"
                      strokeDasharray="3 5"
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

                  // Continuous organic scaling: substantially enlarged at center (~1.36x) and reduced off-center (~0.74x)
                  const scale = Math.max(0.74, 1.36 - dist * 0.4);
                  const opacity = Math.max(0.25, 1 - dist * 0.35);

                  return (
                    <div
                      key={proj.id}
                      onClick={() => handleSelectProject(idx)}
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg) scale(${scale})`,
                        opacity: opacity,
                        zIndex: isNearest ? 40 : Math.max(1, 20 - Math.round(dist)),
                        willChange: "transform, opacity",
                      }}
                      className="absolute cursor-pointer"
                    >
                      {/* Clean Minimalist White Card */}
                      <div
                        className={`w-[126px] h-[82px] sm:w-[142px] sm:h-[90px] rounded-2xl bg-white border relative overflow-hidden p-2.5 sm:p-3 flex flex-col justify-between shadow-2xl transition-all duration-300 ${
                          isNearest
                            ? "border-indigo-500 ring-4 ring-indigo-500/25 shadow-[0_12px_40px_rgba(99,102,241,0.4),0_4px_16px_rgba(0,0,0,0.4)]"
                            : "border-slate-200/80 shadow-lg shadow-black/20 hover:border-slate-300"
                        }`}
                      >
                        {/* Top: Monospace Project Number & Active Pulse Dot */}
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-slate-900 tracking-wider">
                            // {proj.number}
                          </span>
                          <div
                            className="w-2 h-2 rounded-full transition-colors duration-300"
                            style={{
                              backgroundColor: isNearest
                                ? proj.accent || "#6366F1"
                                : "rgba(148,163,184,0.6)",
                            }}
                          />
                        </div>

                        {/* Bottom: Minimalist Project Identifier */}
                        <div className="text-[11px] font-mono font-semibold text-slate-600 truncate">
                          {proj.title.split(" ")[0]}
                        </div>
                      </div>
                    </div>
                  );
                })}
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

              {/* 2. DESKTOP PROJECT FRAME + TECH STACK SIDEBAR (Clean, Premium, High-End Layout) */}
              <div className="my-3 sm:my-4 flex-1 flex flex-col md:flex-row items-stretch gap-4 min-h-0">
                {/* A. DESKTOP PROJECT FRAME COLUMN (White Card + Centered Stepper Button Below It) */}
                <div className="w-full md:w-[62%] flex flex-col items-center justify-between gap-3">
                  {/* The Right Side Card (Plain Blank White Card) */}
                  <div className="w-full aspect-[16/10] max-h-[260px] sm:max-h-[275px] rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-black/50 relative overflow-hidden transition-all duration-300" />

                  {/* Centered exactly below the right side card */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-1.5 bg-slate-900/90 border border-white/15 rounded-xl p-1 shadow-lg backdrop-blur-md">
                      <button
                        onClick={() => handleSelectProject(Math.max(0, activeIndex - 1))}
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
                          handleSelectProject(
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

                {/* B. TECH STACK & SYSTEM SPECIFICATIONS SIDEBAR (Positioned Right of Project Frame) */}
                <div className="w-full md:w-[38%] rounded-2xl bg-slate-900/70 border border-white/10 p-3.5 sm:p-4 flex flex-col justify-between backdrop-blur-xl shadow-xl shadow-black/40">
                  <div>
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <div className="flex items-center gap-1.5 text-indigo-400 font-mono text-[11px] tracking-wider uppercase font-semibold">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Tech Stack</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        {activeProject.tags.length} MODULES
                      </span>
                    </div>

                    {/* Word-Sized Tech Stack Badges Displayed Side-by-Side */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {activeProject.tags.map((tag, tIdx) => (
                        <div
                          key={tIdx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-indigo-400/50 transition-all duration-200 cursor-default group shadow-sm shadow-black/20"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform" />
                          <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-white transition-colors">
                            {tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar Bottom Metadata */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400 mt-2">
                    <span>FRAMEWORK</span>
                    <span className="text-indigo-300 font-semibold uppercase truncate max-w-[110px] text-right">
                      {activeProject.category.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. SOME MATTER BELOW (Smooth Crossfade) */}
              <div className="pt-3 border-t border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.id + "-matter"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    {/* Project Description Matter */}
                    <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed max-w-xl">
                      {activeProject.description}
                    </p>

                    {/* Action Trigger */}
                    <button
                      onClick={onContactClick}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs sm:text-sm font-semibold font-roboto-condensed tracking-tight transition-all active:scale-95 shadow-xl shadow-indigo-950/40 shrink-0 cursor-pointer"
                    >
                      <span>Request Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
