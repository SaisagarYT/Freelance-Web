"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronUp,
  ChevronDown,
  Layers,
  Sparkles,
  ArrowUpRight,
  Sliders,
  CheckCircle2,
} from "lucide-react";

interface BlankProject {
  id: string;
  number: string;
  title: string;
  category: string;
  type: string;
  year: string;
  color: string;
  accent: string;
  tags: string[];
  description: string;
  stats: { label: string; value: string }[];
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

  // Curated Blank Color Projects (Pure architectural color swatches without stock photos)
  const projects: BlankProject[] = [
    {
      id: "project-01",
      number: "01",
      title: "AURORA ARCHITECTURE",
      category: "Full-Stack Web App",
      type: "Enterprise Cloud Application",
      year: "2026",
      color: "#1E293B", // Slate Obsidian
      accent: "#38BDF8", // Cyan
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Edge Sync"],
      description:
        "High-performance cloud architecture engineered for sub-second query latency and zero-latency reactive state synchronization across global multi-region clusters.",
      stats: [
        { label: "Query Latency", value: "< 14ms" },
        { label: "Concurrent Sessions", value: "250K+" },
        { label: "Uptime SLA", value: "99.99%" },
      ],
    },
    {
      id: "project-02",
      number: "02",
      title: "KINETIC TELEMETRY",
      category: "Distributed Telemetry",
      type: "Real-Time Telemetry Engine",
      year: "2026",
      color: "#1E3A8A", // Deep Cobalt
      accent: "#60A5FA", // Electric Blue
      tags: ["WebSocket", "ClickHouse", "Redis Cluster", "Kafka", "Data Stream"],
      description:
        "Industrial-grade telemetry ingestion pipeline processing millions of event cycles per second with real-time vector charts and custom WebGL visualization.",
      stats: [
        { label: "Throughput", value: "1.2M msg/s" },
        { label: "Processing Lag", value: "< 2ms" },
        { label: "Storage Efficiency", value: "84%" },
      ],
    },
    {
      id: "project-03",
      number: "03",
      title: "SYNAPSE AI MESH",
      category: "Autonomous Systems",
      type: "Multi-Agent Orchestration",
      year: "2025",
      color: "#064E3B", // Deep Emerald
      accent: "#34D399", // Emerald Mint
      tags: ["Autonomous Agents", "Vector Embeddings", "FastAPI", "Python", "gRPC"],
      description:
        "Self-governing agentic mesh network coordinating autonomous execution, semantic retrieval, and self-healing deployment workflows with zero manual friction.",
      stats: [
        { label: "Agent Coordination", value: "32 Nodes" },
        { label: "Task Convergence", value: "99.4%" },
        { label: "Inference Delta", value: "-45%" },
      ],
    },
    {
      id: "project-04",
      number: "04",
      title: "PULSE MOBILE ENGINE",
      category: "Mobile & Graphics",
      type: "Cross-Platform Client",
      year: "2025",
      color: "#78350F", // Warm Amber Ochre
      accent: "#FBBF24", // Amber Gold
      tags: ["Flutter 3.24", "Skia Shaders", "SQLite Sync", "Native Bridge", "60 FPS"],
      description:
        "High-velocity cross-platform mobile client engineered with customized Skia graphics shaders, native gesture physics, and instant offline-first SQLite sync.",
      stats: [
        { label: "Frame Budget", value: "60 FPS Locked" },
        { label: "Cold Start", value: "< 280ms" },
        { label: "Offline Cache", value: "Instant" },
      ],
    },
    {
      id: "project-05",
      number: "05",
      title: "NEXUS PROTOCOL",
      category: "Security & Cloud",
      type: "Zero-Trust Infrastructure",
      year: "2025",
      color: "#4C1D95", // Royal Violet
      accent: "#A78BFA", // Violet Mist
      tags: ["Zero-Trust", "Docker", "Kubernetes", "AWS Fargate", "Terraform"],
      description:
        "Federated identity and zero-trust perimeter gateway engineered for cryptographic key rotation, automated boundary enforcement, and military-grade encryption.",
      stats: [
        { label: "Audit Clearance", value: "SOC2 Type II" },
        { label: "Key Rotation", value: "Every 4h" },
        { label: "Penetration Fail", value: "0" },
      ],
    },
    {
      id: "project-06",
      number: "06",
      title: "CHRONO LEDGER",
      category: "Fintech & Ledger",
      type: "High-Frequency Ledger",
      year: "2024",
      color: "#881337", // Crimson Garnet
      accent: "#FB7185", // Rose Coral
      tags: ["Go Engine", "Solidity", "Event Sourcing", "Sub-Millisecond", "Ledger"],
      description:
        "Deterministic distributed ledger engine for institutional asset clearing with sub-millisecond execution guarantees and zero unhandled state rollbacks.",
      stats: [
        { label: "Settlement Time", value: "< 1.4s" },
        { label: "Daily Volume", value: "$42M+" },
        { label: "Fault Recovery", value: "< 100ms" },
      ],
    },
    {
      id: "project-07",
      number: "07",
      title: "STRATA DESIGN SYSTEM",
      category: "UI/UX & Design",
      type: "Design Token Architecture",
      year: "2024",
      color: "#134E4A", // Nordic Teal
      accent: "#2DD4BF", // Bright Teal
      tags: ["Design System", "Storybook", "Figma Tokens", "WCAG AAA", "Radix UI"],
      description:
        "Comprehensive cross-brand design system with 200+ accessible tokens, dynamic contrast ratios, micro-animations, and seamless multi-theme token switches.",
      stats: [
        { label: "Components", value: "140+" },
        { label: "Accessibility", value: "WCAG AAA" },
        { label: "Token Sync", value: "Automated" },
      ],
    },
    {
      id: "project-08",
      number: "08",
      title: "VORTEX 3D CANVAS",
      category: "Creative Technology",
      type: "3D WebGL Canvas Experience",
      year: "2024",
      color: "#312E81", // Midnight Indigo
      accent: "#818CF8", // Periwinkle
      tags: ["Three.js", "GLSL Shaders", "WebAudio API", "GSAP", "Lenis"],
      description:
        "Interactive 3D WebGL soundstage driven by audio frequency shaders, generative particle flows, and buttery-smooth 60fps kinetic user interaction.",
      stats: [
        { label: "Particles", value: "50,000" },
        { label: "Shader Pass", value: "Dual Ping-Pong" },
        { label: "GPU Load", value: "< 18%" },
      ],
    },
  ];

  const activeProject = projects[activeIndex];

  // Natural, Fluid Wheel Scroll Handling:
  // When scrolling down, smoothly steps through projects until the last project (then lets user scroll page down).
  // When scrolling up, smoothly steps back until the first project (then lets user scroll page up).
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      wheelAccumulator.current += e.deltaY;

      // Small cooldown to prevent trackpad velocity runaway
      if (now - lastScrollTime.current < 200) {
        if (
          (e.deltaY > 0 && activeIndex < projects.length - 1) ||
          (e.deltaY < 0 && activeIndex > 0)
        ) {
          e.preventDefault();
        }
        return;
      }

      if (Math.abs(wheelAccumulator.current) > 25) {
        if (wheelAccumulator.current > 0) {
          // Scroll Down -> Next project
          if (activeIndex < projects.length - 1) {
            e.preventDefault();
            setActiveIndex((prev) => prev + 1);
            lastScrollTime.current = now;
            wheelAccumulator.current = 0;
          }
        } else {
          // Scroll Up -> Previous project
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

  // FULL-HEIGHT CIRCULAR ARC GEOMETRY:
  // Height = 800px. Center of circle: cx = -360px, cy = 400px.
  // Radius R = 660px.
  // At angle = 0 deg: x = -360 + 660 = 300px, y = 400px.
  const arcCenter = { cx: -360, cy: 400 };
  const arcRadius = 660;
  const stepAngle = 11.5; // Degrees per project card

  return (
    <section
      ref={sectionRef}
      onWheel={handleWheel}
      className="w-full bg-[#0D1117] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-t border-slate-800/80"
    >
      {/* Dynamic Ambient Color Glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: activeProject.accent }}
      />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-white/5 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Rotary Project Arc // Full-Height Reel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Selected Works & Architecture
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Scroll or Drag Dial ({activeIndex + 1} / {projects.length})
            </span>
            <div className="flex items-center gap-1.5 bg-slate-900/90 border border-white/10 rounded-xl p-1">
              <button
                onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeIndex === 0}
                className="w-9 h-9 rounded-lg hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
                title="Previous (Up)"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <span className="px-2 font-mono text-xs font-bold text-cyan-400">
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
        {/* FULL-HEIGHT CONTAINER OCCUPYING THE COMPLETE SECTION           */}
        {/* ============================================================== */}
        <div className="w-full bg-[#101522]/90 border border-white/10 rounded-3xl shadow-2xl shadow-black/80 backdrop-blur-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[750px] lg:h-[800px]">
          {/* ============================================================ */}
          {/* LEFT COLUMN: FULL-HEIGHT CURVED RADIAL SCROLLER ARC         */}
          {/* (NO SONG OR MEDIA ICONS — PURE ARCHITECTURAL CARDS REEL)     */}
          {/* ============================================================ */}
          <div
            onMouseDown={(e) => handleDragStart(e.clientY)}
            onMouseMove={(e) => handleDragMove(e.clientY)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientY)}
            onTouchEnd={handleDragEnd}
            className={`lg:col-span-5 xl:col-span-5 h-[500px] sm:h-[600px] lg:h-full relative overflow-hidden bg-[#0A0D15]/90 border-b lg:border-b-0 lg:border-r border-white/10 flex items-center ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {/* SVG Background: Full-Height Curved Track & Radial Perspective Rays */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 540 800"
            >
              {/* Radial Perspective Ray Lines */}
              {[-34.5, -23, -11.5, 0, 11.5, 23, 34.5].map((angle, idx) => {
                const rad = (angle * Math.PI) / 180;
                const x2 = arcCenter.cx + 820 * Math.cos(rad);
                const y2 = arcCenter.cy + 820 * Math.sin(rad);
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
                        ? "rgba(56, 189, 248, 0.45)"
                        : "rgba(255, 255, 255, 0.05)"
                    }
                    strokeWidth={isActive ? "1.5" : "1"}
                    strokeDasharray={isActive ? "none" : "3 5"}
                  />
                );
              })}

              {/* Majestic Circular Arc Track sweeping the complete height */}
              <path
                d={`
                  M ${arcCenter.cx + arcRadius * Math.cos((-38 * Math.PI) / 180)} ${
                  arcCenter.cy + arcRadius * Math.sin((-38 * Math.PI) / 180)
                }
                  A ${arcRadius} ${arcRadius} 0 0 1 ${
                  arcCenter.cx + arcRadius * Math.cos((38 * Math.PI) / 180)
                } ${arcCenter.cy + arcRadius * Math.sin((38 * Math.PI) / 180)}
                `}
                fill="none"
                stroke="rgba(255, 255, 255, 0.10)"
                strokeWidth="32"
                strokeOpacity="0.12"
              />
              <path
                d={`
                  M ${arcCenter.cx + arcRadius * Math.cos((-38 * Math.PI) / 180)} ${
                  arcCenter.cy + arcRadius * Math.sin((-38 * Math.PI) / 180)
                }
                  A ${arcRadius} ${arcRadius} 0 0 1 ${
                  arcCenter.cx + arcRadius * Math.cos((38 * Math.PI) / 180)
                } ${arcCenter.cy + arcRadius * Math.sin((38 * Math.PI) / 180)}
                `}
                fill="none"
                stroke="rgba(56, 189, 248, 0.25)"
                strokeWidth="1.5"
              />
            </svg>

            {/* CURVED PROJECT CARDS REEL (Spans Complete Height of Section) */}
            <div className="absolute inset-0 pointer-events-auto">
              {projects.map((proj, idx) => {
                const offset = idx - activeIndex;
                const angle = offset * stepAngle;
                const isVisible = angle >= -42 && angle <= 42;
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
                      stiffness: 260,
                      damping: 26,
                    }}
                    className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2"
                  >
                    {/* The Blank Color Architectural Project Card */}
                    <div
                      style={{ backgroundColor: proj.color }}
                      className={`w-[125px] h-[82px] sm:w-[145px] sm:h-[94px] rounded-xl border relative overflow-hidden transition-all duration-300 p-3 flex flex-col justify-between shadow-2xl ${
                        isActive
                          ? "border-cyan-400 ring-2 ring-cyan-400/60 shadow-[0_0_24px_rgba(56,189,248,0.45)]"
                          : "border-white/15 hover:border-white/40"
                      }`}
                    >
                      {/* Top Bar: Monospace Project Number */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] font-bold text-white tracking-wider">
                          // {proj.number}
                        </span>
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: isActive
                              ? "#38BDF8"
                              : "rgba(255,255,255,0.35)",
                          }}
                        />
                      </div>

                      {/* Center: Minimalist Abstract Wireframe Geometry */}
                      <div className="w-full flex items-center justify-center my-auto opacity-45">
                        <div className="w-10 h-5 border border-dashed border-white/60 rounded flex items-center justify-center">
                          <span className="text-[9px] font-mono text-white/80">
                            {proj.number}
                          </span>
                        </div>
                      </div>

                      {/* Bottom: Minimalist Label */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/80">
                        <span className="truncate max-w-[95px]">
                          {proj.title.split(" ")[0]}
                        </span>
                        <span className="text-white/40">{proj.year}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ACTIVE FOCUS RETICLE & CYAN METADATA READOUT */}
            <div className="absolute left-[330px] sm:left-[350px] lg:left-[340px] xl:left-[360px] top-1/2 -translate-y-1/2 flex items-center gap-3.5 z-40 pointer-events-auto">
              {/* Cyan Active Indicator Notch */}
              <div className="w-1.5 h-16 sm:h-20 bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.9)] flex-shrink-0" />

              {/* Title & Metadata Readout */}
              <div className="flex flex-col max-w-[140px] sm:max-w-[170px]">
                <span className="font-roboto-condensed font-black text-xs sm:text-sm tracking-wide text-white uppercase truncate">
                  {activeProject.title}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400/90 truncate">
                  {activeProject.category}
                </span>
                <span className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                  SYS // {activeProject.number} • {activeProject.year}
                </span>
              </div>

              {/* Cyan Explore Button */}
              <button
                onClick={onContactClick}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-200 active:scale-95 group flex-shrink-0"
                title="Inspect Architecture"
              >
                <ArrowUpRight className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: MAIN DETAIL STAGE WITH BLANK COLOR SHOWCASE   */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 xl:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-[#101522] to-[#0A0D15]">
            {/* Top Bar: System ID & Status */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-800/40">
                  SYSTEM // {activeProject.number}
                </span>
                <span className="text-xs font-mono text-slate-300">
                  {activeProject.type}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Blank Color Canvas
                </span>
              </div>
            </div>

            {/* Middle: Blank Color Mockup Showcases */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-6">
              {/* Primary Large Blank Color Canvas (16:10 Aspect Ratio) */}
              <div className="md:col-span-8 flex flex-col gap-3">
                <div
                  style={{ backgroundColor: activeProject.color }}
                  className="w-full aspect-[16/10] rounded-2xl border border-white/10 relative p-5 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500"
                >
                  {/* Subtle Blueprint Grid Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

                  {/* Corner Crosshairs */}
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

                  {/* Top Bar inside canvas */}
                  <div className="relative z-10 flex items-center justify-between text-white/60 font-mono text-xs">
                    <span>VIEWPORT // 1920 × 1080</span>
                    <span className="text-cyan-400/90 font-semibold">
                      [BLANK COLOR MOCKUP]
                    </span>
                  </div>

                  {/* Center Abstract Geometry Minimalist Badge */}
                  <div className="relative z-10 text-center my-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/30 border border-white/10 backdrop-blur-md mb-2">
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-mono text-xs font-semibold text-white/90">
                        {activeProject.title}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 font-mono max-w-xs mx-auto">
                      Ready for custom high-resolution client project assets & screenshots.
                    </p>
                  </div>

                  {/* Bottom Bar inside canvas */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/50">
                    <span>INDEX: {activeProject.number} / 08</span>
                    <span className="text-white/70">{activeProject.category}</span>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-xs sm:text-[13px] text-slate-300 font-mono leading-relaxed mt-1">
                  {activeProject.description}
                </p>
              </div>

              {/* Secondary Sub-Canvases Column */}
              <div className="md:col-span-4 flex flex-col justify-between gap-3">
                {/* Secondary Blank Color Block 1 */}
                <div
                  style={{ backgroundColor: activeProject.color }}
                  className="w-full h-[95px] rounded-xl border border-white/10 relative p-3 flex flex-col justify-between overflow-hidden opacity-90 transition-all duration-500"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
                    <span>VIEW 02 // MOBILE</span>
                    <span className="text-cyan-400">9:16</span>
                  </div>
                  <div className="w-6 h-6 rounded-md border border-dashed border-white/40 mx-auto my-auto flex items-center justify-center">
                    <span className="text-[9px] font-mono text-white/60">+</span>
                  </div>
                  <div className="text-[9px] font-mono text-white/40">
                    RESPONSIVE MOBILE
                  </div>
                </div>

                {/* Secondary Blank Color Block 2 */}
                <div
                  style={{ backgroundColor: activeProject.color }}
                  className="w-full h-[95px] rounded-xl border border-white/10 relative p-3 flex flex-col justify-between overflow-hidden opacity-75 transition-all duration-500"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/60">
                    <span>VIEW 03 // DATA</span>
                    <span className="text-cyan-400">4:3</span>
                  </div>
                  <div className="w-6 h-6 rounded-md border border-dashed border-white/40 mx-auto my-auto flex items-center justify-center">
                    <span className="text-[9px] font-mono text-white/60">+</span>
                  </div>
                  <div className="text-[9px] font-mono text-white/40">
                    ANALYTICS ENGINE
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-slate-900/80 rounded-xl border border-white/10 p-3 space-y-1.5">
                  {activeProject.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-[11px] font-mono"
                    >
                      <span className="text-slate-400">{stat.label}</span>
                      <span className="text-white font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Metadata & Cyan Tag Badges */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    Etiquetas // Technology Stack:
                  </span>
                </div>
                {/* Cyan Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_8px_rgba(34,211,238,0.2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold font-roboto-condensed tracking-tight transition-all duration-200 active:scale-95 shadow-lg flex-shrink-0"
              >
                <span>Request Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
