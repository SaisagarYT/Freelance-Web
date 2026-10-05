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
  ShieldCheck,
  Cpu,
  Activity,
  Zap,
  Terminal,
  Smartphone,
  Globe,
  Radio,
  CheckCircle2,
  Lock,
  TrendingUp,
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
  stats: { label: string; value: string; badge?: string }[];
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

  // 8 Curated Enterprise Engineering Projects
  const projects: BlankProject[] = [
    {
      id: "project-01",
      number: "01",
      title: "AURORA ARCHITECTURE",
      category: "Full-Stack Enterprise",
      type: "Distributed Cloud Platform",
      year: "2026",
      color: "#1E293B", // Slate Obsidian
      accent: "#38BDF8", // Cyan
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Edge Sync"],
      description:
        "High-performance cloud architecture engineered for sub-second query latency and zero-latency reactive state synchronization across global multi-region clusters.",
      stats: [
        { label: "Query Latency", value: "< 14ms", badge: "-24%" },
        { label: "Edge Throughput", value: "250K/s", badge: "Live" },
        { label: "Uptime SLA", value: "99.99%", badge: "SOC2" },
      ],
    },
    {
      id: "project-02",
      number: "02",
      title: "KINETIC TELEMETRY",
      category: "Real-Time Systems",
      type: "High-Frequency Telemetry",
      year: "2026",
      color: "#1E3A8A", // Deep Cobalt
      accent: "#60A5FA", // Electric Blue
      tags: ["WebSocket", "ClickHouse", "Redis Cluster", "Kafka", "Data Stream"],
      description:
        "Industrial-grade telemetry ingestion pipeline processing millions of event cycles per second with real-time vector charts and custom WebGL telemetry visualization.",
      stats: [
        { label: "Ingestion Rate", value: "1.2M msg/s", badge: "Peak" },
        { label: "Processing Lag", value: "< 2ms", badge: "Zero-Lag" },
        { label: "Storage Efficiency", value: "84.2%", badge: "ZSTD" },
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
        "Self-governing agentic mesh network that coordinates autonomous coding, semantic retrieval, and self-healing deployment workflows with zero manual intervention.",
      stats: [
        { label: "Agent Nodes", value: "32 Cluster", badge: "Active" },
        { label: "Convergence", value: "99.4%", badge: "Verified" },
        { label: "Inference Delta", value: "-45%", badge: "Optimized" },
      ],
    },
    {
      id: "project-04",
      number: "04",
      title: "PULSE MOBILE ENGINE",
      category: "Mobile & Graphics",
      type: "Native Skia 60FPS Client",
      year: "2025",
      color: "#78350F", // Warm Amber Ochre
      accent: "#FBBF24", // Amber Gold
      tags: ["Flutter 3.24", "Skia Shaders", "SQLite Sync", "Native Bridge", "60 FPS"],
      description:
        "High-velocity cross-platform mobile client engineered with customized Skia graphics shaders, native gesture physics, and instant offline-first SQLite sync.",
      stats: [
        { label: "Display Budget", value: "60 FPS", badge: "Locked" },
        { label: "App Cold Start", value: "< 280ms", badge: "Native" },
        { label: "Offline Cache", value: "Instant", badge: "SQLite" },
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
        { label: "Audit Clearance", value: "SOC2 Type II", badge: "Passed" },
        { label: "Key Rotation", value: "Every 4h", badge: "mTLS" },
        { label: "Penetration Fail", value: "0 Incidents", badge: "Secure" },
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
        { label: "Settlement Delta", value: "< 1.4s", badge: "Deterministic" },
        { label: "Daily Cleared", value: "$42.8M", badge: "Audited" },
        { label: "Rollback Rate", value: "0.00%", badge: "Atomic" },
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
        { label: "Component Count", value: "140+ Ready", badge: "Tested" },
        { label: "Accessibility", value: "WCAG AAA", badge: "Certified" },
        { label: "Token Sync", value: "Automated", badge: "CI/CD" },
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
        { label: "Particle Matrix", value: "50,000", badge: "Compute" },
        { label: "Shader Passes", value: "Dual Ping-Pong", badge: "GLSL" },
        { label: "GPU Load", value: "< 14%", badge: "60 FPS" },
      ],
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
    if (deltaY > 38) {
      setActiveIndex((prev) => Math.max(0, prev - 1));
      dragStartY.current = clientY;
    } else if (deltaY < -38) {
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
  // Dial width = 480px, height = 760px.
  // Center of circle: cx = -330px, cy = 380px.
  // Radius: R = 570px.
  // At angle = 0 deg: x = -330 + 570 = 240px, y = 380px.
  const arcCenter = { cx: -330, cy: 380 };
  const arcRadius = 570;
  const stepAngle = 12.5;

  return (
    <section
      ref={sectionRef}
      onWheel={handleWheel}
      className="w-full bg-[#0B0F19] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-t border-slate-800/80"
    >
      {/* Dynamic Ambient Color Bloom */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none opacity-20 transition-all duration-700"
        style={{ backgroundColor: activeProject.accent }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-5 border-b border-white/5 gap-4">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-1.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Section // 04 • Interactive Architecture Reel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Selected Works & Architecture
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Drag or Scroll Dial ({activeIndex + 1} / {projects.length})
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
        {/* WORLD-CLASS SAAS CONTAINER (FULL HEIGHT, CLEAN DUAL STAGE)    */}
        {/* ============================================================== */}
        <div className="w-full bg-[#0F1422]/95 border border-white/10 rounded-[28px] shadow-2xl shadow-black/90 backdrop-blur-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[740px] lg:h-[780px]">
          {/* ============================================================ */}
          {/* LEFT STAGE: TACTILE ROTARY JOG-WHEEL DIAL (FULL HEIGHT)     */}
          {/* ============================================================ */}
          <div
            onMouseDown={(e) => handleDragStart(e.clientY)}
            onMouseMove={(e) => handleDragMove(e.clientY)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
            onTouchMove={(e) => handleDragMove(e.touches[0].clientY)}
            onTouchEnd={handleDragEnd}
            className={`lg:col-span-5 h-[480px] sm:h-[540px] lg:h-full relative overflow-hidden bg-[#090D16]/95 border-b lg:border-b-0 lg:border-r border-white/10 flex items-center ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {/* SVG Background: Full-Height Curved Track & Radial Perspective Ray Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 480 760"
            >
              {/* Radial Perspective Rays */}
              {[-37.5, -25, -12.5, 0, 12.5, 25, 37.5].map((angle, idx) => {
                const rad = (angle * Math.PI) / 180;
                const x2 = arcCenter.cx + 740 * Math.cos(rad);
                const y2 = arcCenter.cy + 740 * Math.sin(rad);
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
                  M ${arcCenter.cx + arcRadius * Math.cos((-42 * Math.PI) / 180)} ${
                  arcCenter.cy + arcRadius * Math.sin((-42 * Math.PI) / 180)
                }
                  A ${arcRadius} ${arcRadius} 0 0 1 ${
                  arcCenter.cx + arcRadius * Math.cos((42 * Math.PI) / 180)
                } ${arcCenter.cy + arcRadius * Math.sin((42 * Math.PI) / 180)}
                `}
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="28"
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
                stroke="rgba(56, 189, 248, 0.28)"
                strokeWidth="1.5"
              />
            </svg>

            {/* CURVED PROJECT CARDS REEL */}
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
                    {/* The Blank Color Architectural Project Card */}
                    <div
                      style={{ backgroundColor: proj.color }}
                      className={`w-[130px] h-[86px] sm:w-[140px] sm:h-[92px] rounded-xl border relative overflow-hidden transition-all duration-300 p-2.5 flex flex-col justify-between shadow-2xl backdrop-blur-sm ${
                        isActive
                          ? "border-cyan-400 ring-2 ring-cyan-400/60 shadow-[0_0_24px_rgba(56,189,248,0.45)]"
                          : "border-white/15 hover:border-white/40"
                      }`}
                    >
                      {/* Top Bar: Monospace Project Number & Live Indicator */}
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
                      <div className="w-full flex items-center justify-center my-auto opacity-50">
                        <div className="w-9 h-4.5 border border-dashed border-white/60 rounded flex items-center justify-center">
                          <span className="text-[9px] font-mono text-white/80">
                            {proj.number}
                          </span>
                        </div>
                      </div>

                      {/* Bottom: Minimalist Label */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/85">
                        <span className="truncate max-w-[85px]">
                          {proj.title.split(" ")[0]}
                        </span>
                        <span className="text-white/40">{proj.year}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* FLAWLESS ACTIVE FOCUS RETICLE (Spacious & Cleanly Aligned) */}
            <div className="absolute left-[318px] sm:left-[324px] top-1/2 -translate-y-1/2 flex items-center gap-3 z-40 pointer-events-auto">
              {/* Cyan Active Indicator Notch */}
              <div className="w-1.5 h-16 bg-cyan-400 rounded-full shadow-[0_0_18px_rgba(56,189,248,0.9)] flex-shrink-0" />

              {/* Title & Metadata Readout */}
              <div className="flex flex-col max-w-[100px] sm:max-w-[110px]">
                <span className="font-roboto-condensed font-black text-xs tracking-tight text-white uppercase truncate">
                  {activeProject.title}
                </span>
                <span className="text-[10px] font-mono text-cyan-400 truncate">
                  {activeProject.category}
                </span>
              </div>

              {/* Quick Jump Action Button */}
              <button
                onClick={onContactClick}
                className="w-8 h-8 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all active:scale-95 group flex-shrink-0"
                title="Inspect Architecture"
              >
                <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT STAGE: LIVING SAAS PRODUCT STAGE                       */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-gradient-to-br from-[#0F1422] to-[#0A0D16]">
            {/* Top Stage Header: System ID & Status */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-800/40">
                  SYSTEM // {activeProject.number}
                </span>
                <span className="text-xs font-mono text-slate-300 truncate max-w-[200px] sm:max-w-none">
                  {activeProject.type}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  Production Verified
                </span>
              </div>
            </div>

            {/* Middle: Bespoke Living SaaS UI Mockup Viewport */}
            <div className="my-5">
              <div
                style={{ backgroundColor: activeProject.color }}
                className="w-full rounded-2xl border border-white/10 relative p-4 sm:p-5 overflow-hidden shadow-2xl transition-all duration-500 min-h-[260px] sm:min-h-[290px] flex flex-col justify-between"
              >
                {/* Architectural Blueprint Dot-Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                {/* macOS Style Browser Chrome Window Bar */}
                <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-white/50 text-[11px] truncate max-w-[140px] sm:max-w-none">
                      https://kizen.dev/systems/{activeProject.id}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-black/40 text-cyan-400 border border-cyan-500/30">
                      LIVE ENGINE
                    </span>
                  </div>
                </div>

                {/* Bespoke Dynamic SaaS Interface Components according to Project Theme */}
                <div className="relative z-10 my-auto py-3">
                  {activeProject.id === "project-01" && (
                    /* Cloud Infrastructure Dashboard (Aurora) */
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-black/40 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                        <div className="text-[10px] font-mono text-white/60 mb-1">
                          API LATENCY
                        </div>
                        <div className="text-xl font-bold font-mono text-cyan-300">
                          12.4ms
                        </div>
                        <div className="text-[10px] text-emerald-400 font-mono mt-1">
                          ↓ 24% sub-edge
                        </div>
                      </div>
                      <div className="bg-black/40 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                        <div className="text-[10px] font-mono text-white/60 mb-1">
                          NODE HEALTH
                        </div>
                        <div className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-1">
                          <span>99.99%</span>
                        </div>
                        <div className="text-[10px] text-white/50 font-mono mt-1">
                          Global Mesh Sync
                        </div>
                      </div>
                      <div className="bg-black/40 border border-white/10 rounded-xl p-3 backdrop-blur-md">
                        <div className="text-[10px] font-mono text-white/60 mb-1">
                          ACTIVE SESSIONS
                        </div>
                        <div className="text-xl font-bold font-mono text-purple-300">
                          248.6K
                        </div>
                        <div className="text-[10px] text-cyan-400 font-mono mt-1">
                          Multi-region cluster
                        </div>
                      </div>
                    </div>
                  )}

                  {activeProject.id === "project-02" && (
                    /* Real-Time Telemetry Terminal (Kinetic) */
                    <div className="bg-black/50 border border-white/10 rounded-xl p-3.5 font-mono text-[11px] space-y-2 backdrop-blur-md">
                      <div className="flex items-center justify-between text-white/50 border-b border-white/10 pb-1.5 text-[10px]">
                        <span>TELEMETRY STREAM // INGESTION ENGINE</span>
                        <span className="text-cyan-400">1.2M msg/s</span>
                      </div>
                      <div className="text-emerald-400">
                        [14:22:01.402] INGEST topic=events rate=1.2M/s lag=0.8ms [OK]
                      </div>
                      <div className="text-cyan-300">
                        [14:22:01.408] CLICKHOUSE batch_insert rows=50000 commit=4ms [200]
                      </div>
                      <div className="text-white/70">
                        [14:22:01.415] VECTOR_INDEX hnsw_search latency=1.1ms [SYNCED]
                      </div>
                    </div>
                  )}

                  {activeProject.id === "project-03" && (
                    /* Autonomous Agent Mesh Topology (Synapse) */
                    <div className="bg-black/40 border border-white/10 rounded-xl p-3.5 backdrop-blur-md">
                      <div className="flex items-center justify-between text-[11px] font-mono mb-2 text-white/70">
                        <span>AGENT MESH TOPOLOGY</span>
                        <span className="text-emerald-400">32 Converged Nodes</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2 text-center font-mono text-[10px]">
                        <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
                          Orchestrator
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
                          Synthesizer
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
                          Vector Cache
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
                          Auditor
                        </div>
                      </div>
                    </div>
                  )}

                  {activeProject.id === "project-04" && (
                    /* Mobile 60 FPS Skia Graphics Showcase (Pulse Mobile) */
                    <div className="bg-black/40 border border-white/10 rounded-xl p-3.5 backdrop-blur-md">
                      <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                        <span className="text-amber-300">NATIVE SKIA FRAME MONITOR</span>
                        <span className="text-emerald-400">60.0 FPS Steady</span>
                      </div>
                      <div className="h-10 w-full flex items-end gap-1 px-1 py-1 bg-black/60 rounded-lg border border-white/10">
                        {[16.6, 16.4, 16.7, 16.5, 16.6, 16.6, 16.4, 16.5, 16.6, 16.5, 16.6, 16.4, 16.6].map((ms, i) => (
                          <div
                            key={i}
                            style={{ height: `${(ms / 20) * 100}%` }}
                            className="flex-1 bg-amber-400/80 rounded-t-sm"
                          />
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-white/50 mt-2">
                        <span>Frame Budget: 16.6ms</span>
                        <span className="text-cyan-400">Offline SQLite: Synced</span>
                      </div>
                    </div>
                  )}

                  {activeProject.id === "project-05" && (
                    /* Zero-Trust Perimeter Gateway (Nexus Protocol) */
                    <div className="bg-black/40 border border-white/10 rounded-xl p-3.5 font-mono text-xs backdrop-blur-md space-y-2">
                      <div className="flex items-center justify-between text-purple-300 text-[11px]">
                        <span>CRYPTOGRAPHIC PERIMETER</span>
                        <span className="text-emerald-400">mTLS STRICT</span>
                      </div>
                      <div className="p-2 rounded bg-black/60 border border-purple-500/30 text-white/80 text-[10px] truncate">
                        SHA-256: 0x9f4a8b12e34d7c81a9f0b24e6c... [VERIFIED]
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-white/60">
                        <span>Next Key Rotation: 03:42:19</span>
                        <span className="text-purple-400">SOC2 Type II</span>
                      </div>
                    </div>
                  )}

                  {activeProject.id === "project-06" && (
                    /* High-Frequency Ledger & Order Book (Chrono Ledger) */
                    <div className="bg-black/40 border border-white/10 rounded-xl p-3.5 font-mono text-xs backdrop-blur-md">
                      <div className="flex items-center justify-between text-[11px] mb-2 text-rose-300">
                        <span>DETERMINISTIC SETTLEMENT ENGINE</span>
                        <span className="text-emerald-400">&lt; 1.4s Execution</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-black/60 border border-white/10">
                          <span className="text-white/50 text-[10px] block">CLEARED 24H</span>
                          <span className="text-emerald-400 font-bold">$42,840,290</span>
                        </div>
                        <div className="p-2 rounded bg-black/60 border border-white/10">
                          <span className="text-white/50 text-[10px] block">BLOCK COMMIT</span>
                          <span className="text-cyan-300 font-bold">#894,204 ATOMIC</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeProject.id === "project-07" && (
                    /* Design Token Architecture Sandbox (Strata) */
                    <div className="bg-black/40 border border-white/10 rounded-xl p-3.5 font-mono text-xs backdrop-blur-md">
                      <div className="flex items-center justify-between text-[11px] mb-2 text-teal-300">
                        <span>DESIGN TOKEN SANDBOX // WCAG AAA</span>
                        <span className="text-cyan-400">140+ Tokens</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 p-2 rounded bg-teal-950/60 border border-teal-500/40 text-center text-[10px] text-teal-200">
                          Primary Slate (14.2:1)
                        </div>
                        <div className="flex-1 p-2 rounded bg-cyan-950/60 border border-cyan-500/40 text-center text-[10px] text-cyan-200">
                          Accent Cyan (12.6:1)
                        </div>
                        <div className="flex-1 p-2 rounded bg-white/10 border border-white/20 text-center text-[10px] text-white">
                          Surface Pure (21:1)
                        </div>
                      </div>
                    </div>
                  )}

                  {activeProject.id === "project-08" && (
                    /* 3D WebGL Shader Canvas (Vortex) */
                    <div className="bg-black/40 border border-white/10 rounded-xl p-3.5 font-mono text-xs backdrop-blur-md">
                      <div className="flex items-center justify-between text-[11px] mb-2 text-indigo-300">
                        <span>WEBGL 3D SHADER WAVEFORM</span>
                        <span className="text-cyan-400">50K Particles</span>
                      </div>
                      <div className="h-8 flex items-center justify-between gap-1 px-2 bg-black/60 rounded border border-indigo-500/30">
                        {[40, 70, 95, 60, 30, 85, 100, 45, 65, 80, 50, 90, 75].map((val, i) => (
                          <div
                            key={i}
                            style={{ height: `${val}%` }}
                            className="flex-1 bg-indigo-400/90 rounded-sm"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Canvas Footer */}
                <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/50 pt-2 border-t border-white/10">
                  <span>INDEX // {activeProject.number} OF 08</span>
                  <span className="text-cyan-300 font-semibold">{activeProject.category}</span>
                </div>
              </div>

              {/* Technical Overview Description */}
              <p className="text-xs sm:text-[13px] text-slate-300 font-mono leading-relaxed mt-3">
                {activeProject.description}
              </p>
            </div>

            {/* Performance KPI Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {activeProject.stats.map((stat, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-slate-900/80 border border-white/10 rounded-xl p-3 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
                    <span>{stat.label}</span>
                    {stat.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                        {stat.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-base sm:text-lg font-bold font-mono text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Metadata & Cyan Tech Stack Badges */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Technology Stack:
                </div>
                {/* Cyan Pill Badges */}
                <div className="flex flex-wrap gap-1.5">
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
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-semibold font-roboto-condensed tracking-tight transition-all duration-200 active:scale-95 shadow-xl flex-shrink-0"
              >
                <span>Inspect Architecture</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
