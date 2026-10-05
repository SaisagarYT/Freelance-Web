"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, Terminal, Activity, Zap } from "lucide-react";

interface FolderDossier {
  id: string;
  code: string;
  tabTitle: string;
  tabStartX: number; // SVG X position (out of 1000)
  tabWidth: number;  // SVG Width (out of 1000)
  gradient: string;
  glowColor: string;
  headline: string;
  subtitle: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

export const FolderStackSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>("folder-0");

  const dossiers: FolderDossier[] = [
    {
      id: "folder-0",
      code: "DOSSIER // 16A",
      tabTitle: "01 // Headless E-Commerce",
      tabStartX: 30,
      tabWidth: 230,
      gradient: "linear-gradient(145deg, #701A75 0%, #4A044E 100%)", // Deep Orchid / Plum
      glowColor: "rgba(112, 26, 117, 0.4)",
      headline: "Aura Storefront: 3.4x Checkout Velocity & Instant Cart Sync",
      subtitle:
        "High-performance headless retail architecture built with Next.js 15 App Router, sub-50ms Stripe webhook orchestration, and zero-jank 60 FPS page transitions.",
      tags: ["Next.js 15", "Tailwind CSS", "Stripe API", "Redis", "Framer Motion"],
      metrics: [
        { label: "Checkout Conversion Lift", value: "+3.4x" },
        { label: "Cart Mutation Latency", value: "< 42ms" },
        { label: "Core Web Vitals Score", value: "100 / 100" },
      ],
    },
    {
      id: "folder-1",
      code: "DOSSIER // 16B",
      tabTitle: "02 // Distributed Telemetry",
      tabStartX: 275,
      tabWidth: 235,
      gradient: "linear-gradient(145deg, #EA580C 0%, #9A3412 100%)", // Rich Tangerine Terracotta
      glowColor: "rgba(234, 88, 12, 0.4)",
      headline: "Quantum Engine: Real-Time Edge Analytics & Event Ingestion",
      subtitle:
        "Ultra-low latency telemetry pipeline streaming 250,000+ daily events with sub-15ms query resolution, zstd compression, and real-time WebGL data visualizers.",
      tags: ["TypeScript", "ClickHouse", "Docker", "WebGL", "Node.js"],
      metrics: [
        { label: "Daily Event Ingestion", value: "250K+ Events" },
        { label: "Query Resolution", value: "< 15ms" },
        { label: "System Uptime SLA", value: "99.99%" },
      ],
    },
    {
      id: "folder-2",
      code: "DOSSIER // 16C",
      tabTitle: "03 // Autonomous AI Mesh",
      tabStartX: 525,
      tabWidth: 230,
      gradient: "linear-gradient(145deg, #047857 0%, #064E3B 100%)", // Deep Emerald Mint
      glowColor: "rgba(4, 120, 87, 0.4)",
      headline: "Vertex AI: Multi-Agent Autonomous LLM Orchestration Mesh",
      subtitle:
        "Production-grade generative AI orchestration engine coordinating multi-step agent trees, self-healing execution graphs, and isolated vector memory embeddings.",
      tags: ["Python 3.12", "FastAPI", "LangGraph", "Supabase", "pgvector"],
      metrics: [
        { label: "Agent Pipeline Velocity", value: "12x Faster" },
        { label: "Token Cost Efficiency", value: "-68% Waste" },
        { label: "Task Execution Reliability", value: "99.8%" },
      ],
    },
    {
      id: "folder-3",
      code: "DOSSIER // 16D",
      tabTitle: "04 // Native Mobile 60FPS",
      tabStartX: 770,
      tabWidth: 200,
      gradient: "linear-gradient(145deg, #1D4ED8 0%, #1E3A8A 100%)", // Electric Cobalt Royal
      glowColor: "rgba(29, 78, 216, 0.4)",
      headline: "Pulse Mobile: Cross-Platform Native Flutter Architecture",
      subtitle:
        "High-velocity cross-platform Flutter client engineered with customized Skia graphics shaders, native gesture physics, and instant offline-first SQLite sync.",
      tags: ["Flutter 3.24", "Dart", "Firebase", "SQLite", "Clean Architecture"],
      metrics: [
        { label: "Display Frame Budget", value: "60 FPS Locked" },
        { label: "Application Cold Start", value: "< 280ms" },
        { label: "App Store User Rating", value: "4.9 / 5.0" },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#090B10] text-white py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden select-none">
      {/* Subtle Ambient Radial Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_15%,rgba(99,102,241,0.12)_0%,rgba(9,11,16,0)_80%)]"
      />

      <div className="w-full max-w-5xl mx-auto relative z-10">
        {/* Archival Section Header */}
        <div className="mb-14 sm:mb-18 text-left">
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-indigo-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span>Unindexed Archives // Selected Case Studies</span>
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl text-white font-normal tracking-tight not-italic">
            Engineering Dossiers
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-roboto-condensed mt-3 max-w-xl leading-relaxed">
            Hover over any folder tab to pull the dossier from the filing archive and inspect its architecture, code stack, and benchmarks.
          </p>
        </div>

        {/* ============================================================== */}
        {/* THE INTERACTIVE FOLDER STACK DECK                             */}
        {/* ============================================================== */}
        <div className="relative w-full h-[520px] sm:h-[490px] pt-4">
          {dossiers.map((dossier, index) => {
            const isHovered = hoveredId === dossier.id;

            // Staggered vertical base offset so each folder sits behind the other
            const baseTop = index * 48;

            return (
              <motion.div
                key={dossier.id}
                onMouseEnter={() => setHoveredId(dossier.id)}
                onClick={() => setHoveredId(dossier.id)}
                animate={{
                  y: isHovered ? -55 : 0,
                  scale: isHovered ? 1.015 : 1,
                  zIndex: isHovered ? 40 : index + 1,
                  opacity: hoveredId && !isHovered ? 0.88 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 28,
                }}
                style={{
                  top: `${baseTop}px`,
                  zIndex: isHovered ? 40 : index + 1,
                }}
                className="absolute inset-x-0 cursor-pointer origin-bottom will-change-transform"
              >
                {/* 1. AUTHENTIC FOLDER TAB CUT-OUT HEADER (SVG WITH CONCAVE FILLETS) */}
                <div className="w-full relative -mb-[1px]">
                  <FolderTabSvg
                    tabStartX={dossier.tabStartX}
                    tabWidth={dossier.tabWidth}
                    fillGradient={`url(#grad-${dossier.id})`}
                  />

                  {/* Gradient Definition */}
                  <svg className="absolute w-0 h-0" aria-hidden="true">
                    <defs>
                      <linearGradient id={`grad-${dossier.id}`} x1="0" y1="0" x2="1" y2="1">
                        {dossier.id === "folder-0" && (
                          <>
                            <stop offset="0%" stopColor="#701A75" />
                            <stop offset="100%" stopColor="#4A044E" />
                          </>
                        )}
                        {dossier.id === "folder-1" && (
                          <>
                            <stop offset="0%" stopColor="#EA580C" />
                            <stop offset="100%" stopColor="#9A3412" />
                          </>
                        )}
                        {dossier.id === "folder-2" && (
                          <>
                            <stop offset="0%" stopColor="#047857" />
                            <stop offset="100%" stopColor="#064E3B" />
                          </>
                        )}
                        {dossier.id === "folder-3" && (
                          <>
                            <stop offset="0%" stopColor="#1D4ED8" />
                            <stop offset="100%" stopColor="#1E3A8A" />
                          </>
                        )}
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Tab Label Positioned Exactly Over the Elevated Tab Shape */}
                  <div
                    style={{
                      left: `${dossier.tabStartX / 10}%`,
                      width: `${dossier.tabWidth / 10}%`,
                    }}
                    className="absolute top-0 h-[42px] sm:h-[48px] flex items-center justify-center px-4 pointer-events-none"
                  >
                    <span className="text-xs sm:text-sm font-bold font-roboto-condensed text-white/95 tracking-tight truncate drop-shadow-xs">
                      {dossier.tabTitle}
                    </span>
                  </div>
                </div>

                {/* 2. FOLDER BODY (SEAMLESS CONTINUOUS CONTAINER) */}
                <div
                  style={{
                    background: dossier.gradient,
                    boxShadow: isHovered
                      ? `0 35px 70px -15px rgba(0,0,0,0.85), 0 0 45px -10px ${dossier.glowColor}, inset 0 1px 0 rgba(255,255,255,0.22)`
                      : "0 12px 30px -8px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12)",
                  }}
                  className="w-full rounded-b-[28px] sm:rounded-b-[32px] p-6 sm:p-9 text-white transition-all duration-300"
                >
                  {/* Top Metadata Strip */}
                  <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/15 text-xs font-mono tracking-wider text-white/75">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{dossier.code}</span>
                      <span>•</span>
                      <span className="hidden sm:inline">KIZEN SOLVES ENGINEERING ARCHIVE</span>
                    </div>
                    <span className="text-[11px] font-semibold uppercase bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                      Production Verified
                    </span>
                  </div>

                  {/* Main Grid Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                    {/* Left Column: Headline, Summary & Badges */}
                    <div className="lg:col-span-8">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-roboto-condensed tracking-tight text-white leading-tight">
                        {dossier.headline}
                      </h3>
                      <p className="text-xs sm:text-sm font-roboto-condensed text-white/85 mt-2.5 leading-relaxed max-w-2xl">
                        {dossier.subtitle}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {dossier.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-lg text-xs font-bold font-roboto-condensed bg-white/15 text-white/95 border border-white/20 shadow-2xs backdrop-blur-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Live Metrics */}
                    <div className="lg:col-span-4 flex flex-col gap-2.5 w-full">
                      {dossier.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-center justify-between shadow-2xs"
                        >
                          <span className="text-xs font-medium font-roboto-condensed text-white/75">
                            {m.label}
                          </span>
                          <span className="text-xs sm:text-sm font-black font-roboto-condensed text-white tracking-tight">
                            {m.value}
                          </span>
                        </div>
                      ))}

                      {/* Action Button */}
                      <a
                        href="#contact"
                        className="mt-1 px-4 py-2 rounded-xl bg-white text-slate-950 hover:bg-slate-100 text-xs font-bold font-roboto-condensed transition-all duration-200 flex items-center justify-between shadow-sm cursor-pointer active:scale-95 group/btn"
                      >
                        <span>Request Architecture Review</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * Custom SVG Folder Tab with Authentic Rounded Corners and Smooth Concave Base Fillets
 * Generates an exact physical manila folder tab silhouette
 */
const FolderTabSvg = ({
  tabStartX,
  tabWidth,
  fillGradient,
}: {
  tabStartX: number;
  tabWidth: number;
  fillGradient: string;
}) => {
  // viewBox: 0 0 1000 48
  // Total Height: 48px
  // Tab Top: y = 0
  // Folder Baseline: y = 48
  const r = 14; // Fillet & Corner radius
  const x1 = tabStartX;
  const x2 = tabStartX + tabWidth;

  // Path tracing:
  // 1. From (0, 48) to (x1 - r, 48)
  // 2. Concave fillet curving up to (x1, 48 - r)
  // 3. Line up to (x1, r)
  // 4. Convex rounded corner to (x1 + r, 0)
  // 5. Line along tab top to (x2 - r, 0)
  // 6. Convex rounded corner to (x2, r)
  // 7. Line down to (x2, 48 - r)
  // 8. Concave fillet curving out to (x2 + r, 48)
  // 9. Line along baseline to (1000, 48)
  // 10. Down to (1000, 48) and close to (0, 48)
  const pathD = `
    M 0,48
    L ${x1 - r},48
    Q ${x1},48 ${x1},${48 - r}
    L ${x1},${r}
    Q ${x1},0 ${x1 + r},0
    L ${x2 - r},0
    Q ${x2},0 ${x2},${r}
    L ${x2},${48 - r}
    Q ${x2},48 ${x2 + r},48
    L 1000,48
    Z
  `;

  return (
    <svg
      viewBox="0 0 1000 48"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-[42px] sm:h-[48px] block"
      preserveAspectRatio="none"
    >
      <path d={pathD} fill={fillGradient} />
    </svg>
  );
};
