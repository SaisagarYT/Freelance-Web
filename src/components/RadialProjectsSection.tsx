"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  animate,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, ExternalLink, Layers, Play, Pause } from "lucide-react";

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
}

export const RadialProjectsSection: React.FC<RadialProjectsSectionProps> = ({
  onContactClick,
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

  // 1. Responsive state & 3-Second Auto-Scroll Engine
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  const [progressVal, setProgressVal] = useState(0);
  const progressValRef = useRef(0);

  const [isPaused, setIsPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const isTransitioningRef = useRef(false);
  const animRef = useRef<ReturnType<typeof animate> | null>(null);

  // 2. High-performance, zero-latency direct transition
  // Smoothly glides between cards. Wrapping seamlessly around 0-7.
  const goToProject = useCallback(
    (targetIdx: number) => {
      const clamped = ((targetIdx % projects.length) + projects.length) % projects.length;
      if (clamped === activeIndexRef.current && isTransitioningRef.current) return;

      if (animRef.current) {
        animRef.current.stop();
      }

      isTransitioningRef.current = true;
      setActiveIndex(clamped);
      activeIndexRef.current = clamped;
      // Reset timer key so user gets fresh 3s on new card
      setTimerKey((k) => k + 1);

      // Duration: gentle ease when wrapping from 7 to 0, crisp 0.38s when stepping 1 card
      const isRewind = Math.abs(clamped - progressValRef.current) > 2;
      const duration = isRewind ? 0.52 : 0.38;

      animRef.current = animate(progressValRef.current, clamped, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1], // Apple/Linear deceleration
        onUpdate: (latest) => {
          progressValRef.current = latest;
          setProgressVal(latest);
        },
        onComplete: () => {
          progressValRef.current = clamped;
          setProgressVal(clamped);
          setTimeout(() => {
            isTransitioningRef.current = false;
          }, 40);
        },
      });
    },
    [projects.length]
  );

  // 3. AUTONOMOUS 3-SECOND AUTO-SCROLL CAROUSEL
  // Cycles through cards every 3 seconds; only stops when user manually clicks stepper
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      const next = (activeIndexRef.current + 1) % projects.length;
      goToProject(next);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, timerKey, goToProject, projects.length]);

  // 4. Single Manual Scroll Button Handler:
  // User explicitly clicking the single scroll button below the card is the ONLY manual action that stops autoplay
  const handleManualScroll = () => {
    setIsPaused(true);
    const next = (activeIndexRef.current + 1) % projects.length;
    goToProject(next);
  };

  // 4. Keyboard navigation support (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        goToProject((activeIndexRef.current + 1) % projects.length);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        goToProject((activeIndexRef.current - 1 + projects.length) % projects.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToProject, projects.length]);

  const activeProject = projects[activeIndex];

  // FULL-HEIGHT CIRCULAR ARC GEOMETRY
  const arcCenter = { cx: -260, cy: 330 };
  const arcRadius = 530;
  const stepAngle = 13.5;

  return (
    <section id="projects" className="w-full bg-white relative py-12 sm:py-16">
      {/* 1. SECTION 4 HEADER (At the top of the component, in normal document flow) */}
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 pb-6 sm:pb-8 bg-white">
        <div className="pb-6 sm:pb-8 border-b border-slate-100 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 font-roboto-condensed font-bold text-xs tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-ping" />
              <span>Section // 04 • Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-roboto-condensed">
              Projects & Architecture
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium font-roboto-condensed max-w-2xl">
              High-performance architectural systems, cloud infrastructure, and client engines engineered by KIZEN SOLVES.
            </p>
          </div>

          {/* Single Auto-Cycle Status Button (Click to toggle / resume autoplay) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPaused((p) => !p)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-roboto-condensed font-bold text-slate-700 transition-all cursor-pointer shadow-sm active:scale-95"
              title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isPaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
                }`}
              />
              <span className="tracking-wide">{isPaused ? "ROTATION PAUSED" : "AUTO-CYCLE [3s]"}</span>
              {isPaused ? (
                <Play className="w-3 h-3 text-slate-600 fill-current" />
              ) : (
                <Pause className="w-3 h-3 text-slate-600 fill-current" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. FRAMED DARK CONSOLE (Directly in page layout, natural viewport height, zero scroll traps) */}
      <div className="w-full max-w-[1360px] mx-auto px-2 sm:px-4">
        <div
          className="w-full h-[620px] sm:h-[660px] lg:h-[700px] rounded-[28px] sm:rounded-[36px] bg-[#090D22] text-white relative overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-950/40 flex flex-col justify-between"
        >
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
                    M ${arcCenter.cx + arcRadius * Math.cos((-42 * Math.PI) / 180)} ${arcCenter.cy + arcRadius * Math.sin((-42 * Math.PI) / 180)
                      }
                    A ${arcRadius} ${arcRadius} 0 0 1 ${arcCenter.cx + arcRadius * Math.cos((42 * Math.PI) / 180)
                      } ${arcCenter.cy + arcRadius * Math.sin((42 * Math.PI) / 180)}
                  `}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="24"
                    strokeOpacity="0.12"
                  />
                  <path
                    d={`
                    M ${arcCenter.cx + arcRadius * Math.cos((-42 * Math.PI) / 180)} ${arcCenter.cy + arcRadius * Math.sin((-42 * Math.PI) / 180)
                      }
                    A ${arcRadius} ${arcRadius} 0 0 1 ${arcCenter.cx + arcRadius * Math.cos((42 * Math.PI) / 180)
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
                        onClick={() => goToProject(idx)}
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
                          className={`w-[126px] h-[82px] sm:w-[142px] sm:h-[90px] rounded-2xl bg-white border relative overflow-hidden p-2.5 sm:p-3 flex flex-col justify-between shadow-2xl transition-all duration-300 ${isNearest
                            ? "border-indigo-500 ring-4 ring-indigo-500/25 shadow-[0_12px_40px_rgba(99,102,241,0.4),0_4px_16px_rgba(0,0,0,0.4)]"
                            : "border-slate-200/80 shadow-lg shadow-black/20 hover:border-slate-300"
                            }`}
                        >
                          {/* Top: Project Number & Active Pulse Dot */}
                          <div className="flex items-center justify-between">
                            <span className="font-roboto-condensed text-xs font-black text-slate-900 tracking-wider">
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
                          <div className="text-xs font-roboto-condensed font-bold text-slate-600 truncate uppercase tracking-wider">
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
                        <span className="font-roboto-condensed text-xs font-bold text-indigo-400 tracking-wider uppercase">
                          Project // {activeProject.number}
                        </span>
                        <span className="text-xs font-roboto-condensed font-bold text-slate-400">
                          {activeProject.year}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-white font-roboto-condensed">
                        {activeProject.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-roboto-condensed font-semibold text-indigo-300/80 mt-0.5 tracking-wide">
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

                    {/* Centered single scroll button strictly below the white card */}
                    <div className="flex items-center justify-center">
                      <button
                        onClick={handleManualScroll}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/15 text-xs font-roboto-condensed font-bold text-slate-200 hover:text-white shadow-lg backdrop-blur-md transition-all active:scale-95 cursor-pointer group"
                        title="Scroll to Next Project (Pauses Autoplay)"
                      >
                        <span className="text-indigo-400 font-bold">{activeProject.number} / 08</span>
                        <span className="text-slate-300 group-hover:text-white transition-colors tracking-wide uppercase">Scroll Project</span>
                        <ChevronDown className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* B. TECH STACK & SYSTEM SPECIFICATIONS SIDEBAR (Positioned Right of Project Frame) */}
                  <div className="w-full md:w-[38%] rounded-2xl bg-slate-900/70 border border-white/10 p-3.5 sm:p-4 flex flex-col justify-between backdrop-blur-xl shadow-xl shadow-black/40">
                    <div>
                      {/* Sidebar Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <div className="flex items-center gap-1.5 text-indigo-400 font-roboto-condensed text-xs tracking-wider uppercase font-bold">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Tech Stack</span>
                        </div>
                        <span className="text-[11px] font-roboto-condensed font-bold text-slate-400 tracking-wider">
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
                            <span className="text-xs font-roboto-condensed font-bold text-slate-200 group-hover:text-white transition-colors tracking-wide">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Sidebar Bottom Metadata */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-roboto-condensed text-slate-400 mt-2 tracking-wider">
                      <span className="font-bold">FRAMEWORK</span>
                      <span className="text-indigo-300 font-bold uppercase truncate max-w-[120px] text-right">
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
                      <p className="text-sm sm:text-base text-slate-300 font-roboto-condensed font-normal leading-relaxed max-w-xl">
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
