"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  animate,
  AnimatePresence,
} from "framer-motion";
import { ChevronDown, ExternalLink, Layers, Play, Pause } from "lucide-react";

interface ProjectMetric {
  label: string;
  value: string;
  sub: string;
}

interface ProjectArchitecture {
  ingress: { name: string; tag: string };
  engine: { name: string; tag: string };
  egress: { name: string; tag: string };
  latency: string;
  statusText: string;
}

interface BlankProject {
  id: string;
  number: string;
  title: string;
  shortTag: string;
  category: string;
  year: string;
  color: string;
  accent: string;
  tags: string[];
  description: string;
  hook: string;
  metrics: ProjectMetric[];
  architecture: ProjectArchitecture;
}

export interface RadialProjectsSectionProps {
  onContactClick?: () => void;
}

export const RadialProjectsSection: React.FC<RadialProjectsSectionProps> = ({
  onContactClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 8 Curated Projects matching the KAIZEN SOLVES Website Theme
  const projects: BlankProject[] = [
    {
      id: "project-01",
      number: "01",
      title: "AURORA ARCHITECTURE",
      shortTag: "CLOUD",
      category: "Full-Stack Enterprise Cloud",
      year: "2026",
      color: "#0F172A",
      accent: "#6366F1",
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS"],
      description:
        "High-performance cloud architecture engineered for sub-second query latency, global multi-region state synchronization, and enterprise-grade reliability.",
      hook: "Sub-50ms Global Query Latency • Multi-Region Resilient State Sync",
      metrics: [
        { label: "P99 LATENCY", value: "14ms", sub: "Global Edge" },
        { label: "THROUGHPUT", value: "180k/s", sub: "Peak Traffic" },
        { label: "UPTIME SLA", value: "99.999%", sub: "Multi-Region" },
      ],
      architecture: {
        ingress: { name: "EDGE INGRESS", tag: "Cloudflare / CDN" },
        engine: { name: "DISTRIBUTED MESH", tag: "Next.js 15 / Go" },
        egress: { name: "SHARDED DB", tag: "Global PostgreSQL" },
        latency: "14ms p99",
        statusText: "US-EAST & EU-CENTRAL ACTIVE",
      },
    },
    {
      id: "project-02",
      number: "02",
      title: "KINETIC TELEMETRY",
      shortTag: "STREAM",
      category: "Real-Time Telemetry Engine",
      year: "2026",
      color: "#12184B",
      accent: "#4338CA",
      tags: ["WebSocket", "ClickHouse", "Redis Cluster", "Kafka", "Data Pipeline"],
      description:
        "Industrial-grade telemetry ingestion pipeline handling high-frequency data streams with real-time vector indexing and sub-2ms query processing.",
      hook: "1.2M Streaming Events/Sec • Real-Time Vector Indexing with Zero Data Loss",
      metrics: [
        { label: "EVENT VELOCITY", value: "1.2M/s", sub: "Kafka Ingest" },
        { label: "QUERY TIME", value: "1.8ms", sub: "ClickHouse" },
        { label: "COMPRESSION", value: "8.4x", sub: "Zstandard" },
      ],
      architecture: {
        ingress: { name: "STREAM INGEST", tag: "Kafka / Redis Cluster" },
        engine: { name: "TELEMETRY ENGINE", tag: "ClickHouse Pipeline" },
        egress: { name: "VECTOR CACHE", tag: "Sub-2ms Memory" },
        latency: "1.8ms query",
        statusText: "120 FPS STREAMING PIPELINE",
      },
    },
    {
      id: "project-03",
      number: "03",
      title: "SYNAPSE AI MESH",
      shortTag: "AI MESH",
      category: "Autonomous Systems",
      year: "2025",
      color: "#1E1B4B",
      accent: "#7C3AED",
      tags: ["Python", "FastAPI", "Vector DB", "gRPC", "Docker"],
      description:
        "Self-governing agentic mesh network coordinating autonomous execution workflows, semantic memory retrieval, and self-healing cluster operations.",
      hook: "Autonomous Agent Orchestration • Deterministic Tool Execution & Cognitive Memory",
      metrics: [
        { label: "ACTIVE AGENTS", value: "32 Nodes", sub: "Autonomous" },
        { label: "INFERENCE P95", value: "110ms", sub: "vLLM Mesh" },
        { label: "TASK ACCURACY", value: "99.8%", sub: "Evaluated" },
      ],
      architecture: {
        ingress: { name: "COGNITIVE ROUTER", tag: "gRPC Gateway" },
        engine: { name: "AGENTIC MESH", tag: "Multi-Agent Graph" },
        egress: { name: "SEMANTIC RAG", tag: "Milvus / Vector DB" },
        latency: "110ms p95",
        statusText: "AUTONOMOUS CONSENSUS LOCKED",
      },
    },
    {
      id: "project-04",
      number: "04",
      title: "PULSE MOBILE ENGINE",
      shortTag: "MOBILE",
      category: "Mobile & Graphics Engine",
      year: "2025",
      color: "#172554",
      accent: "#3B82F6",
      tags: ["Flutter 3.24", "Dart", "Skia Shaders", "SQLite", "Firebase"],
      description:
        "Cross-platform native mobile client built with custom Skia graphics shaders, fluid 60fps gesture interactions, and instant offline-first SQLite synchronization.",
      hook: "Buttery 60/120 FPS Native Fluidity • Offline-First Reactive SQLite Sync",
      metrics: [
        { label: "FRAME TIME", value: "8.3ms", sub: "120 FPS Native" },
        { label: "COLD BOOT", value: "280ms", sub: "Instant Open" },
        { label: "OFFLINE SYNC", value: "0ms", sub: "Local SQLite" },
      ],
      architecture: {
        ingress: { name: "FLUTTER UI", tag: "Skia Graphics" },
        engine: { name: "SHADER ENGINE", tag: "GPU Custom Pass" },
        egress: { name: "REACTIVE WAL", tag: "SQLite + Cloud Sync" },
        latency: "8.3ms frame",
        statusText: "CROSS-PLATFORM SHADERS ACTIVE",
      },
    },
    {
      id: "project-05",
      number: "05",
      title: "NEXUS PROTOCOL",
      shortTag: "mTLS",
      category: "Zero-Trust Infrastructure",
      year: "2025",
      color: "#2E1065",
      accent: "#A855F7",
      tags: ["Zero-Trust", "Kubernetes", "Go", "Docker", "Terraform"],
      description:
        "Zero-trust perimeter security gateway featuring automated cryptographic key rotation, strict mutual TLS authentication, and federated identity management.",
      hook: "Military-Grade Zero-Trust • 60-Second Automated mTLS Key Rotation",
      metrics: [
        { label: "HANDSHAKE", value: "0.9ms", sub: "mTLS v1.3" },
        { label: "KEY ROTATION", value: "60s", sub: "Automated KMS" },
        { label: "THREAT AUDIT", value: "100%", sub: "Zero-Breach" },
      ],
      architecture: {
        ingress: { name: "PERIMETER GATEWAY", tag: "Strict Mutual TLS" },
        engine: { name: "ENCLAVE RUNTIME", tag: "Kubernetes / Go" },
        egress: { name: "FEDERATED IAM", tag: "Encrypted KMS Vault" },
        latency: "0.9ms tls",
        statusText: "ENCLAVE VERIFIED • AIR-GAPPED",
      },
    },
    {
      id: "project-06",
      number: "06",
      title: "CHRONO LEDGER",
      shortTag: "FINTECH",
      category: "Fintech & Ledger",
      year: "2024",
      color: "#1E293B",
      accent: "#818CF8",
      tags: ["Solidity", "Go", "Event Sourcing", "Ledger", "Cryptography"],
      description:
        "Deterministic distributed ledger engine for institutional asset clearing with sub-second execution guarantees and atomic state rollback prevention.",
      hook: "Microsecond Institutional Settlement • Deterministic State Reversion Prevention",
      metrics: [
        { label: "CLEARING SPEED", value: "420μs", sub: "Atomic Execution" },
        { label: "REVERSION RATE", value: "0.00%", sub: "Deterministic" },
        { label: "TX FINALITY", value: "<1.0s", sub: "Consensus" },
      ],
      architecture: {
        ingress: { name: "ORDER ROUTER", tag: "Low-Latency Ingress" },
        engine: { name: "LEDGER ENGINE", tag: "Event Sourcing Go" },
        egress: { name: "ATOMIC STATE", tag: "Immutable Log" },
        latency: "420μs exec",
        statusText: "CONSENSUS FINALIZED • AUDITED",
      },
    },
    {
      id: "project-07",
      number: "07",
      title: "STRATA DESIGN SYSTEM",
      shortTag: "TOKENS",
      category: "UI/UX Architecture",
      year: "2024",
      color: "#132338",
      accent: "#10B981",
      tags: ["Design System", "Figma Tokens", "Storybook", "WCAG AAA", "React"],
      description:
        "Comprehensive enterprise design system comprising over 140 accessible tokens, dynamic contrast validation, component libraries, and automated CI/CD token sync.",
      hook: "Enterprise-Scale Token Sync • WCAG AAA Compliance Across 160+ Components",
      metrics: [
        { label: "COMPONENTS", value: "160+", sub: "Tested Tokens" },
        { label: "ACCESSIBILITY", value: "AAA", sub: "WCAG Certified" },
        { label: "DESIGN DEBT", value: "0 hrs", sub: "CI Auto-Sync" },
      ],
      architecture: {
        ingress: { name: "FIGMA TOKENS", tag: "Dynamic Palette" },
        engine: { name: "COMPILER PIPELINE", tag: "Tailwind / CSS Vars" },
        egress: { name: "REACT / NATIVE", tag: "Storybook Production" },
        latency: "100% sync",
        statusText: "140+ DESIGN TOKENS SYNCED",
      },
    },
    {
      id: "project-08",
      number: "08",
      title: "VORTEX 3D CANVAS",
      shortTag: "3D GLSL",
      category: "Creative Technology",
      year: "2024",
      color: "#1E1E38",
      accent: "#9333EA",
      tags: ["Three.js", "WebGL", "GLSL Shaders", "WebAudio", "GSAP"],
      description:
        "Interactive 3D WebGL soundstage driven by audio frequency shaders, generative particle flows, and buttery-smooth 60fps kinetic user interaction.",
      hook: "Hardware-Accelerated WebGL 3D • 250,000 Reactive Audio Frequency Particles",
      metrics: [
        { label: "PARTICLES", value: "250k", sub: "GLSL Compute" },
        { label: "GPU OVERHEAD", value: "18%", sub: "Metal / WebGL" },
        { label: "TARGET FPS", value: "60 FPS", sub: "WebAudio FFT" },
      ],
      architecture: {
        ingress: { name: "AUDIO FFT", tag: "Frequency WebAudio" },
        engine: { name: "GLSL COMPUTE", tag: "Particle Shaders" },
        egress: { name: "THREE.JS MESH", tag: "60 FPS Canvas" },
        latency: "16.6ms 60fps",
        statusText: "HARDWARE ACCELERATION ON",
      },
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
            <div className="flex items-center gap-2 text-purple-600 font-roboto-condensed font-bold text-xs tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-roboto-condensed">
              Projects & Architecture
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium font-roboto-condensed max-w-2xl">
              High-performance architectural systems, cloud infrastructure, and client engines engineered by KAIZEN SOLVES.
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
                className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
                  }`}
              />
              <span className="tracking-wide">{isPaused ? "ROTATION PAUSED" : "AUTO-CYCLE • 3s"}</span>
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
                      {/* Rich Engineered Dial Cartridge */}
                      <div
                        className={`w-[130px] h-[86px] sm:w-[146px] sm:h-[94px] rounded-2xl bg-white border relative overflow-hidden p-2.5 sm:p-3 flex flex-col justify-between shadow-2xl transition-all duration-300 ${isNearest
                          ? "border-purple-600 ring-4 ring-purple-600/25 shadow-[0_12px_40px_rgba(147,51,234,0.35),0_4px_16px_rgba(0,0,0,0.4)]"
                          : "border-slate-200/90 shadow-lg shadow-black/20 hover:border-slate-300"
                          }`}
                      >
                        {/* Top: Project Number & Short Category Badge & Active Pulse Dot */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="font-roboto-condensed text-xs font-black text-slate-900 tracking-wider">
                              {proj.number}
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-purple-50 border border-purple-200/80 text-[8px] sm:text-[9px] font-roboto-condensed font-bold text-purple-700 uppercase tracking-wider">
                              {proj.shortTag}
                            </span>
                          </div>
                          <div
                            className="w-2 h-2 rounded-full transition-colors duration-300"
                            style={{
                              backgroundColor: isNearest
                                ? proj.accent || "#9333EA"
                                : "rgba(148,163,184,0.6)",
                            }}
                          />
                        </div>

                        {/* Middle: Prominent Hook Metric Pill */}
                        <div className="flex items-center gap-1 my-0.5">
                          <span className="text-[11px] sm:text-xs font-black font-roboto-condensed text-purple-700 tracking-tight">
                            {proj.metrics[0].value}
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-roboto-condensed font-semibold text-slate-500 uppercase tracking-tight truncate">
                            {proj.metrics[0].label.split(" ")[0]}
                          </span>
                        </div>

                        {/* Bottom: Minimalist Project Identifier & Year */}
                        <div className="flex items-center justify-between text-xs font-roboto-condensed font-bold text-slate-600 truncate uppercase tracking-wider">
                          <span className="text-slate-800 font-extrabold truncate">{proj.title.split(" ")[0]}</span>
                          <span className="text-[10px] text-slate-400 font-bold">{proj.year}</span>
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
                      <span className="font-roboto-condensed text-xs font-bold text-purple-400 tracking-wider uppercase">
                        Project {activeProject.number}
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
                  {/* The Right Side Card (Blank Card - No Content Inside) */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id + "-blank-card"}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="w-full aspect-[16/10] max-h-[260px] sm:max-h-[275px] rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-black/40 relative overflow-hidden select-none transition-all duration-300"
                    />
                  </AnimatePresence>

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
