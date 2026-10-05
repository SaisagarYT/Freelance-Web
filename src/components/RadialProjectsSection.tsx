"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ChevronDown, ExternalLink, ArrowUpRight } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const lastScrollTime = useRef(0);
  const wheelAccumulator = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  // 8 Curated Projects matching the KIZEN SOLVES Theme Palette (Navy, Indigo, Violet, Slate)
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

  const activeProject = projects[activeIndex];

  // Natural Wheel Scroll Navigation
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      wheelAccumulator.current += e.deltaY;

      // Cooldown to avoid velocity runaway on trackpads
      if (now - lastScrollTime.current < 200) {
        if (
          (e.deltaY > 0 && activeIndex < projects.length - 1) ||
          (e.deltaY < 0 && activeIndex > 0)
        ) {
          e.preventDefault();
        }
        return;
      }

      if (Math.abs(wheelAccumulator.current) > 28) {
        if (wheelAccumulator.current > 0) {
          // Down
          if (activeIndex < projects.length - 1) {
            e.preventDefault();
            setActiveIndex((prev) => prev + 1);
            lastScrollTime.current = now;
            wheelAccumulator.current = 0;
          }
        } else {
          // Up
          if (activeIndex > 0) {
            e.preventDefault();
            setActiveIndex((prev) => prev - 1);
            lastScrollTime.current = now;
            wheelAccumulator.current = 0;
          }
        }
      }
    },
    [activeIndex, projects.length]
  );

  // Mouse / Touch Drag Scrubbing on Dial
  const handleDragStart = (clientY: number) => {
    setIsDragging(true);
    dragStartY.current = clientY;
  };

  const handleDragMove = (clientY: number) => {
    if (!isDragging) return;
    const deltaY = clientY - dragStartY.current;
    if (deltaY > 35) {
      setActiveIndex((prev) => Math.max(0, prev - 1));
      dragStartY.current = clientY;
    } else if (deltaY < -35) {
      setActiveIndex((prev) => Math.min(projects.length - 1, prev + 1));
      dragStartY.current = clientY;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setActiveIndex((prev) => Math.min(projects.length - 1, prev + 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setActiveIndex((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projects.length]);

  // FULL-HEIGHT CIRCULAR ARC GEOMETRY
  const arcCenter = { cx: -260, cy: 340 };
  const arcRadius = 540;
  const stepAngle = 13.5;

  return (
    <section
      ref={sectionRef}
      onWheel={handleWheel}
      className="w-full bg-white px-2 sm:px-4 pb-4 sm:pb-6 relative select-none"
    >
      {/* Outer Framed Container matching Website Theme Frame */}
      <div className="w-full rounded-[28px] sm:rounded-[36px] bg-[#090D22] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-10 relative overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-950/40">
        {/* Dynamic Ambient Website Theme Bloom (Indigo / Purple / Lavender) */}
        <div
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[170px] pointer-events-none opacity-25 transition-all duration-700"
          style={{ backgroundColor: activeProject.accent }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full max-w-[1360px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs tracking-widest uppercase mb-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                <span>Section // 04 • Selected Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-roboto-condensed">
                Projects & Architecture
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                Scroll or Click Dial ({activeIndex + 1} / {projects.length})
              </span>
              <div className="flex items-center gap-1.5 bg-slate-900/90 border border-white/10 rounded-xl p-1 shadow-lg">
                <button
                  onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeIndex === 0}
                  className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                  title="Previous (Up)"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <span className="px-2 font-mono text-xs font-bold text-indigo-300">
                  {activeProject.number}
                </span>
                <button
                  onClick={() =>
                    setActiveIndex((prev) =>
                      Math.min(projects.length - 1, prev + 1)
                    )
                  }
                  disabled={activeIndex === projects.length - 1}
                  className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                  title="Next (Down)"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* MAIN DISPLAY: CURVED BLANK REEL (LEFT) & CLEAN SHOWCASE (RIGHT) */}
          {/* ============================================================== */}
          <div className="w-full bg-[#0D122B]/90 border border-white/10 rounded-[28px] shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:h-[680px]">
            {/* ============================================================ */}
            {/* LEFT: CURVED ROTARY SCROLLER (BLANK CARDS ONLY, NO TEXT CLUTTER) */}
            {/* ============================================================ */}
            <div
              onMouseDown={(e) => handleDragStart(e.clientY)}
              onMouseMove={(e) => handleDragMove(e.clientY)}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientY)}
              onTouchEnd={handleDragEnd}
              className={`lg:col-span-5 h-[420px] sm:h-[480px] lg:h-full relative overflow-hidden bg-[#080B1E]/95 border-b lg:border-b-0 lg:border-r border-white/10 flex items-center ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            >
              {/* SVG Background: Full-Height Curved Track & Radial Rays */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 440 680"
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

              {/* CURVED BLANK PROJECT CARDS REEL */}
              <div className="absolute inset-0 pointer-events-auto">
                {projects.map((proj, idx) => {
                  const offset = idx - activeIndex;
                  const angle = offset * stepAngle;
                  const isVisible = angle >= -45 && angle <= 45;
                  const isActive = idx === activeIndex;

                  if (!isVisible) return null;

                  const rad = (angle * Math.PI) / 180;
                  const x = arcCenter.cx + arcRadius * Math.cos(rad);
                  const y = arcCenter.cy + arcRadius * Math.sin(rad);

                  return (
                    <motion.div
                      key={proj.id}
                      onClick={() => setActiveIndex(idx)}
                      animate={{
                        left: `${x}px`,
                        top: `${y}px`,
                        rotate: angle,
                        scale: isActive ? 1.12 : 0.88,
                        opacity: isActive
                          ? 1
                          : Math.max(0.35, 1 - Math.abs(offset) * 0.2),
                        zIndex: isActive ? 30 : 20 - Math.abs(offset),
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 26,
                      }}
                      className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2"
                    >
                      {/* Clean Minimalist Blank Color Card in Website Theme */}
                      <div
                        style={{ backgroundColor: proj.color }}
                        className={`w-[125px] h-[82px] sm:w-[138px] sm:h-[90px] rounded-2xl border relative overflow-hidden transition-all duration-300 p-3 flex flex-col justify-between shadow-2xl ${
                          isActive
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
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: isActive
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
                    </motion.div>
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
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-[#0D122B] to-[#080B1E]">
              {/* 1. TITLE AT TOP */}
              <div className="pb-4 border-b border-white/10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-indigo-400 tracking-wider uppercase">
                    Project // {activeProject.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeProject.year}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-roboto-condensed">
                  {activeProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-indigo-300/80 mt-1">
                  {activeProject.category}
                </p>
              </div>

              {/* 2. THE SAME BLANK CARD (Clean, Pure, Harmonious Theme Color) */}
              <div className="my-6">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: activeProject.color }}
                  className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl border border-white/15 shadow-2xl relative overflow-hidden flex items-end p-5"
                >
                  {/* Subtle Architectural Corner Markers */}
                  <span className="absolute top-4 left-4 text-white/20 font-mono text-xs">
                    +
                  </span>
                  <span className="absolute top-4 right-4 text-white/20 font-mono text-xs">
                    +
                  </span>
                  <span className="absolute bottom-4 left-4 text-white/20 font-mono text-xs">
                    +
                  </span>
                  <span className="absolute bottom-4 right-4 text-white/20 font-mono text-xs">
                    +
                  </span>

                  {/* Minimalist Index Stamp */}
                  <div className="relative z-10 flex items-center justify-between w-full font-mono text-xs text-white/60">
                    <span>CANVAS // {activeProject.number}</span>
                    <span className="text-white/80 font-semibold">{activeProject.title}</span>
                  </div>
                </motion.div>
              </div>

              {/* 3. SOME MATTER BELOW */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                {/* Project Description Matter */}
                <p className="text-sm sm:text-[15px] text-slate-300 font-mono leading-relaxed">
                  {activeProject.description}
                </p>

                {/* Technology Tags & Action Trigger in Website Theme */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold font-roboto-condensed tracking-tight transition-all active:scale-95 shadow-lg shadow-indigo-950/30 flex-shrink-0 cursor-pointer"
                  >
                    <span>Request Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
