"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Grid,
  Folder,
  Video,
  Music,
  Gamepad2,
  BookOpen,
  Play,
  Pause,
  ExternalLink,
  ChevronUp,
  ChevronDown,
  Radio,
  Layers,
  Sparkles,
  Plus,
  Share2,
  Info,
  Sliders,
  Clock,
} from "lucide-react";

interface BlankProject {
  id: string;
  number: string;
  title: string;
  category: string;
  categoryIconIdx: number;
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
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState<Record<string, boolean>>({});
  const dialContainerRef = useRef<HTMLDivElement>(null);

  // Curated Blank Color Projects (Ready for real project media later, as requested)
  const projects: BlankProject[] = [
    {
      id: "project-01",
      number: "01",
      title: "AURORA ARCHITECTURE",
      category: "Full-Stack Web",
      categoryIconIdx: 1, // Grid
      type: "Enterprise Cloud Application",
      year: "2026",
      color: "#1E293B", // Slate Obsidian
      accent: "#38BDF8", // Cyan
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Edge Sync"],
      description:
        "High-performance cloud architecture built for sub-second query latency and zero-latency reactive state synchronization across global multi-region clusters.",
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
      category: "Distributed Systems",
      categoryIconIdx: 4, // Music / Wave
      type: "Real-Time Telemetry Engine",
      year: "2026",
      color: "#1E3A8A", // Deep Cobalt
      accent: "#60A5FA", // Electric Blue
      tags: ["WebSocket", "ClickHouse", "Redis Cluster", "Kafka", "Data Stream"],
      description:
        "Industrial-grade telemetry ingestion pipeline processing millions of event cycles per second with real-time vector charts and custom WebGL telemetry visualization.",
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
      categoryIconIdx: 2, // Folder
      type: "Multi-Agent Orchestration",
      year: "2025",
      color: "#064E3B", // Deep Emerald
      accent: "#34D399", // Emerald Mint
      tags: ["Autonomous Agents", "Vector Embeddings", "FastAPI", "Python", "gRPC"],
      description:
        "Self-governing agentic mesh network that coordinates autonomous coding, semantic retrieval, and self-healing deployment workflows with zero manual intervention.",
      stats: [
        { label: "Agent Coordination", value: "32 Nodes" },
        { label: "Task Convergence", value: "99.4%" },
        { label: "Inference Delta", value: "-45%" },
      ],
    },
    {
      id: "project-04",
      number: "04",
      title: "PULSE ENGINE",
      category: "Mobile & Graphics",
      categoryIconIdx: 5, // Gamepad
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
      categoryIconIdx: 3, // Video
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
      categoryIconIdx: 6, // BookOpen
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
      categoryIconIdx: 1, // Grid
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
      title: "VORTEX CANVAS",
      category: "Creative Technology",
      categoryIconIdx: 4, // Wave
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

  // Category Icons along the outermost arc (Matching Reference Image)
  const categoryIcons = [
    { icon: Heart, label: "Favorites" },
    { icon: Grid, label: "Web Applications" },
    { icon: Folder, label: "Autonomous Mesh" },
    { icon: Video, label: "Media & Cloud" },
    { icon: Music, label: "Telemetry & Audio" },
    { icon: Gamepad2, label: "Mobile & Skia" },
    { icon: BookOpen, label: "Ledgers & Docs" },
  ];

  // Mouse wheel handler to rotate dial
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 20) {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    } else if (e.deltaY < -20) {
      setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % projects.length);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [projects.length]);

  // Radial Dial Math Geometry
  // Center of circle: cx = -240, cy = 320 (height = 640px)
  const dialCenter = { cx: -240, cy: 320 };
  const rIcons = 370; // Outer arc
  const rCards = 490; // Inner project reel arc
  const stepAngle = 10.5; // Angular separation between items

  return (
    <section className="w-full bg-[#0D1117] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-t border-slate-800/80">
      {/* Subtle Ambient Background Glows */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: activeProject.accent }}
      />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-white/5 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
              <span>Rotary Project Reel // Interactive Dial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Selected Works & Architecture
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              Scroll or Click Dial to Rotate
            </span>
            <div className="flex gap-1.5">
              <button
                onClick={() =>
                  setActiveIndex(
                    (prev) => (prev - 1 + projects.length) % projects.length
                  )
                }
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95"
                title="Previous Project (Up)"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % projects.length)
                }
                className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 hover:border-cyan-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95"
                title="Next Project (Down)"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MAIN ROTARY DIAL & PROJECT DETAIL SHOWCASE CONTAINER           */}
        {/* ============================================================== */}
        <div className="w-full bg-[#111622]/90 border border-white/10 rounded-3xl shadow-2xl shadow-black/80 backdrop-blur-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          {/* ============================================================ */}
          {/* LEFT COLUMN: THE CIRCULAR JOG-WHEEL / ROTARY DIAL           */}
          {/* ============================================================ */}
          <div
            ref={dialContainerRef}
            onWheel={handleWheel}
            className="lg:col-span-6 xl:col-span-5 h-[480px] sm:h-[560px] lg:h-[640px] relative overflow-hidden bg-[#0A0E17]/80 border-b lg:border-b-0 lg:border-r border-white/10 flex items-center"
          >
            {/* SVG Background: Concentric Arc Tracks & Perspective Radial Ray Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 540 640"
            >
              {/* Radial Perspective Guide Lines (emanating outward to items) */}
              {[-31.5, -21, -10.5, 0, 10.5, 21, 31.5].map((angle, idx) => {
                const rad = (angle * Math.PI) / 180;
                const x2 = dialCenter.cx + 700 * Math.cos(rad);
                const y2 = dialCenter.cy + 700 * Math.sin(rad);
                const isActive = angle === 0;

                return (
                  <line
                    key={idx}
                    x1={dialCenter.cx}
                    y1={dialCenter.cy}
                    x2={x2}
                    y2={y2}
                    stroke={
                      isActive
                        ? "rgba(56, 189, 248, 0.35)"
                        : "rgba(255, 255, 255, 0.05)"
                    }
                    strokeWidth={isActive ? "1.5" : "1"}
                    strokeDasharray={isActive ? "none" : "3 5"}
                  />
                );
              })}

              {/* Arc Track 1: Outer Category Icons Arc */}
              <path
                d={`
                  M ${dialCenter.cx + rIcons * Math.cos((-42 * Math.PI) / 180)} ${
                  dialCenter.cy + rIcons * Math.sin((-42 * Math.PI) / 180)
                }
                  A ${rIcons} ${rIcons} 0 0 1 ${
                  dialCenter.cx + rIcons * Math.cos((42 * Math.PI) / 180)
                } ${dialCenter.cy + rIcons * Math.sin((42 * Math.PI) / 180)}
                `}
                fill="none"
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.5"
              />

              {/* Arc Track 2: Inner Project Reel Arc */}
              <path
                d={`
                  M ${dialCenter.cx + rCards * Math.cos((-42 * Math.PI) / 180)} ${
                  dialCenter.cy + rCards * Math.sin((-42 * Math.PI) / 180)
                }
                  A ${rCards} ${rCards} 0 0 1 ${
                  dialCenter.cx + rCards * Math.cos((42 * Math.PI) / 180)
                } ${dialCenter.cy + rCards * Math.sin((42 * Math.PI) / 180)}
                `}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="28"
                strokeOpacity="0.15"
              />
            </svg>

            {/* 1. OUTER RING: Category Filter Icons along the curve */}
            <div className="absolute inset-0 pointer-events-auto">
              {categoryIcons.map((cat, idx) => {
                // Space 7 icons evenly along the arc from -35 deg to +35 deg
                const angle = -35 + idx * (70 / (categoryIcons.length - 1));
                const rad = (angle * Math.PI) / 180;
                const x = dialCenter.cx + rIcons * Math.cos(rad);
                const y = dialCenter.cy + rIcons * Math.sin(rad);
                const isSelected = activeProject.categoryIconIdx === idx;
                const IconComponent = cat.icon;

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      const matchIdx = projects.findIndex(
                        (p) => p.categoryIconIdx === idx
                      );
                      if (matchIdx !== -1) setActiveIndex(matchIdx);
                    }}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    }}
                    className={`absolute p-2 rounded-full transition-all duration-300 group ${
                      isSelected
                        ? "text-cyan-400 bg-cyan-950/60 ring-2 ring-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.7)] scale-110"
                        : "text-slate-400/80 hover:text-white hover:bg-white/10"
                    }`}
                    title={cat.label}
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                );
              })}
            </div>

            {/* 2. INNER REEL: Curved Project Cards (Blank Color Blocks) */}
            <div className="absolute inset-0">
              {projects.map((proj, idx) => {
                // Calculate angular distance from active center (angle = 0)
                const offset = idx - activeIndex;
                const angle = offset * stepAngle;
                const isVisible = angle >= -42 && angle <= 42;
                const isActive = idx === activeIndex;

                if (!isVisible) return null;

                const rad = (angle * Math.PI) / 180;
                const x = dialCenter.cx + rCards * Math.cos(rad);
                const y = dialCenter.cy + rCards * Math.sin(rad);

                return (
                  <motion.div
                    key={proj.id}
                    onClick={() => setActiveIndex(idx)}
                    animate={{
                      left: `${x}px`,
                      top: `${y}px`,
                      rotate: angle,
                      scale: isActive ? 1.08 : 0.88,
                      opacity: isActive ? 1 : Math.max(0.4, 1 - Math.abs(offset) * 0.22),
                      zIndex: isActive ? 30 : 20 - Math.abs(offset),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 28,
                    }}
                    className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2"
                  >
                    {/* The Blank Color Project Card */}
                    <div
                      style={{ backgroundColor: proj.color }}
                      className={`w-[105px] h-[72px] sm:w-[125px] sm:h-[84px] rounded-xl border relative overflow-hidden transition-all duration-300 p-2.5 flex flex-col justify-between shadow-xl ${
                        isActive
                          ? "border-cyan-400 ring-2 ring-cyan-400/50 shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                          : "border-white/15 hover:border-white/40"
                      }`}
                    >
                      {/* Top Bar: Monospace Project Number & Minimalist Indicator */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] font-bold text-white/80 tracking-wider">
                          // {proj.number}
                        </span>
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{
                            backgroundColor: isActive ? "#38BDF8" : "rgba(255,255,255,0.4)",
                          }}
                        />
                      </div>

                      {/* Center: Minimalist Abstract Wireframe / Geometry Placeholder */}
                      <div className="w-full flex items-center justify-center my-auto opacity-40">
                        <div className="w-8 h-4 border border-dashed border-white/60 rounded flex items-center justify-center">
                          <span className="text-[8px] font-mono text-white/70">
                            {proj.number}
                          </span>
                        </div>
                      </div>

                      {/* Bottom: Blank Color Swatch Accent Tag */}
                      <div className="flex items-center justify-between text-[9px] font-mono text-white/70">
                        <span className="truncate max-w-[80px]">
                          {proj.category.split(" ")[0]}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* 3. ACTIVE FOCUS RETICLE & CYAN METADATA READOUT (Exactly as in Reference) */}
            <div className="absolute left-[295px] sm:left-[325px] lg:left-[315px] xl:left-[330px] top-1/2 -translate-y-1/2 flex items-center gap-3 sm:gap-4 z-40 pointer-events-auto">
              {/* Cyan Active Bracket / Indicator Notch */}
              <div className="w-1.5 h-14 sm:h-16 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.8)]" />

              {/* Title & Metadata Readout */}
              <div className="flex flex-col max-w-[150px] sm:max-w-[190px]">
                <span className="font-roboto-condensed font-black text-xs sm:text-sm tracking-wide text-white uppercase truncate">
                  {activeProject.title}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">
                  {activeProject.category} • {activeProject.year}
                </span>

                {/* Micro Actions: Heart, Info, Nodes (Matching reference screenshot) */}
                <div className="flex items-center gap-2 mt-1.5 text-slate-400">
                  <button
                    onClick={() =>
                      setIsLiked((prev) => ({
                        ...prev,
                        [activeProject.id]: !prev[activeProject.id],
                      }))
                    }
                    className={`transition-colors ${
                      isLiked[activeProject.id]
                        ? "text-rose-500"
                        : "hover:text-white"
                    }`}
                    title="Bookmark Project"
                  >
                    <Heart
                      className="w-3.5 h-3.5"
                      fill={isLiked[activeProject.id] ? "currentColor" : "none"}
                    />
                  </button>
                  <button
                    onClick={onContactClick}
                    className="hover:text-white transition-colors"
                    title="Project Architecture Info"
                  >
                    <Info className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onContactClick}
                    className="hover:text-white transition-colors"
                    title="Share Specification"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Cyan Action / Play Button (Matching Reference Image) */}
              <button
                onClick={onContactClick}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.6)] transition-all duration-200 active:scale-95 group flex-shrink-0"
                title="Explore Architecture"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 ml-0.5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: MAIN PROJECT DETAIL STAGE (BLANK COLOR CARDS) */}
          {/* ============================================================ */}
          <div className="lg:col-span-6 xl:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-[#111622] to-[#0A0D14]">
            {/* Top Bar: System ID & Status */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800/40">
                  SYSTEM // {activeProject.number}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeProject.type}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Case Study Stage
                </span>
              </div>
            </div>

            {/* Middle: Blank Color Mockup Showcases (Matching bottom image in reference) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-8">
              {/* Primary Large Blank Color Canvas (16:9 Aspect Ratio) */}
              <div className="md:col-span-8 flex flex-col gap-3">
                <div
                  style={{ backgroundColor: activeProject.color }}
                  className="w-full aspect-[16/10] rounded-2xl border border-white/10 relative p-5 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-500"
                >
                  {/* Background Grid Pattern & Wireframe Guide Markers */}
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
                    <span>CANVAS // 1920 × 1080</span>
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

              {/* Secondary Sub-Canvases Column (Matching Photo Stack in Reference) */}
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
                    NATIVE VIEWPORT
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
                    API TELEMETRY
                  </div>
                </div>

                {/* Project Metrics Summary */}
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

            {/* Bottom Metadata & Cyan Tag Badges (Matching Reference Image) */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    Etiquetas // Tech Stack:
                  </span>
                </div>
                {/* Cyan Pill Badges (Directly inspired by reference screenshot) */}
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
