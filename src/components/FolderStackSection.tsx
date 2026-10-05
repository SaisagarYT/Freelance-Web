"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, Terminal, Zap } from "lucide-react";

interface FolderItem {
  id: string;
  code: string;
  tabTitle: string;
  tabPosition: "left" | "mid-left" | "center" | "mid-right" | "right";
  bg: string;
  accentText: string;
  isDarkText?: boolean;
  date: string;
  headline: string;
  summary: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

export const FolderStackSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string>("folder-0");

  const folders: FolderItem[] = [
    {
      id: "folder-0",
      code: "16A",
      tabTitle: "Lexical Kinetics",
      tabPosition: "left",
      bg: "#701A75", // Deep Plum / Magenta
      accentText: "#F5D0FE",
      date: "Q4 2025 // PROD",
      headline: "Aura Headless Storefront & Instant Cart Physics",
      summary:
        "Kinetic retail architecture engineered with Next.js 15, optimistic client-side mutations, sub-50ms Stripe checkout, and zero-jank 60 FPS transitions.",
      tags: ["Next.js 15", "TailwindCSS", "Stripe API", "Redis", "Framer Motion"],
      metrics: [
        { label: "Checkout Velocity", value: "3.4x Faster" },
        { label: "Cart Mutation Latency", value: "< 42ms" },
        { label: "Core Web Vitals", value: "100 / 100" },
      ],
    },
    {
      id: "folder-1",
      code: "16B",
      tabTitle: "Concord Variants",
      tabPosition: "mid-left",
      bg: "#EA580C", // Tangerine Orange
      accentText: "#FFEDD5",
      date: "Q1 2026 // DEPLOYED",
      headline: "Quantum Telemetry & Edge Event Stream Engine",
      summary:
        "High-frequency telemetry pipeline handling 250,000+ daily events with sub-15ms query resolution, automated zstd compression, and real-time WebGL canvas shaders.",
      tags: ["TypeScript", "ClickHouse", "Docker", "WebGL", "Node.js"],
      metrics: [
        { label: "Daily Event Ingestion", value: "250K+ Events" },
        { label: "Telemetry Latency", value: "< 15ms" },
        { label: "System Uptime SLA", value: "99.99%" },
      ],
    },
    {
      id: "folder-2",
      code: "16C",
      tabTitle: "Unanchored Statements",
      tabPosition: "center",
      bg: "#047857", // Forest Emerald
      accentText: "#A7F3D0",
      date: "Q2 2026 // ACTIVE",
      headline: "Vertex LLM Multi-Agent Autonomous Orchestrator",
      summary:
        "Production-grade generative AI orchestration mesh coordinating multi-step agent graphs, self-healing execution trees, and localized vector memory embeddings.",
      tags: ["Python 3.12", "FastAPI", "LangGraph", "Supabase", "pgvector"],
      metrics: [
        { label: "Agent Execution Speed", value: "12x Velocity" },
        { label: "Token Cost Efficiency", value: "-68% Waste" },
        { label: "Reliability Rate", value: "99.8%" },
      ],
    },
    {
      id: "folder-3",
      code: "16D",
      tabTitle: "Varnell Collection",
      tabPosition: "mid-right",
      bg: "#DC2626", // Crimson Red
      accentText: "#FECACA",
      date: "Q3 2026 // VERIFIED",
      headline: "Pulse 60 FPS Fluid Mobile Engine (iOS & Android)",
      summary:
        "High-velocity cross-platform Flutter application engineered with customized Skia graphics shaders, native gesture physics, and instant offline-first synchronization.",
      tags: ["Flutter 3.24", "Dart", "Firebase", "SQLite", "Clean Architecture"],
      metrics: [
        { label: "Frame Budget", value: "60 FPS Locked" },
        { label: "App Cold-Start", value: "< 280ms" },
        { label: "App Store Rating", value: "4.9 / 5.0" },
      ],
    },
    {
      id: "folder-4",
      code: "16E",
      tabTitle: "Subject Drift",
      tabPosition: "right",
      bg: "#6D28D9", // Deep Royal Violet
      accentText: "#DDD6FE",
      date: "Q4 2026 // CERTIFIED",
      headline: "Cypher Cryptographic Zero-Trust API Mesh",
      summary:
        "Ultra-secure distributed API gateway featuring automated key rotations, payload integrity verification, and sub-millisecond edge authentication tokens across global regions.",
      tags: ["PostgreSQL", "Rust", "AWS Lambda", "OAuth2", "Zero-Trust"],
      metrics: [
        { label: "Security Audit Score", value: "100 / 100" },
        { label: "Edge Verification", value: "< 8ms" },
        { label: "Payload Encryption", value: "AES-256 GCM" },
      ],
    },
    {
      id: "folder-5",
      code: "16F",
      tabTitle: "Margin Events",
      tabPosition: "left",
      bg: "#EAB308", // Golden Canary Yellow
      accentText: "#713F12",
      isDarkText: true,
      date: "CURRENT // LIVE",
      headline: "Nexus Kinetic UI Design System & Component Library",
      summary:
        "Enterprise-grade design system crafted with WCAG AAA accessibility, fluid micro-interactions, typed tokens, and high-performance React 19 component primitives.",
      tags: ["React 19", "Tailwind CSS", "Framer Motion", "Figma Tokens"],
      metrics: [
        { label: "WCAG Accessibility", value: "AAA Level" },
        { label: "Input Response", value: "< 4ms" },
        { label: "Component Reusability", value: "96% Common" },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#0D0F14] text-white py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle Background Radial Atmosphere */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(109,40,217,0.18)_0%,rgba(13,15,20,0)_80%)]" 
      />

      <div className="w-full max-w-[1280px] mx-auto relative z-10">
        {/* Archival Header Section (Exact matching reference style) */}
        <div className="mb-14 sm:mb-20 max-w-3xl">
          <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-slate-400 mb-3 flex items-center gap-2">
            <span>Unindexed Materials</span>
            <span className="text-slate-600">/</span>
            <span>Recovered Entries</span>
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white/95 leading-[1.08] not-italic">
            Fragments 15–20
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-roboto-condensed mt-4 max-w-xl leading-relaxed">
            Curated engineering records and case study dossiers. Hover over any folder to inspect its architecture, metrics, and technical artifacts.
          </p>
        </div>

        {/* FOLDER STACK CONTAINER */}
        <div className="w-full relative min-h-[660px] sm:min-h-[720px] pb-24">
          {folders.map((folder, index) => {
            const isHovered = hoveredId === folder.id;
            const isSelected = activeId === folder.id;
            const isElevated = isHovered || isSelected;

            // Base vertical step down for each folder tab in the stack
            const baseTop = index * 52;

            return (
              <motion.div
                key={folder.id}
                onMouseEnter={() => setHoveredId(folder.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveId(folder.id)}
                animate={{
                  y: isElevated ? -38 : 0,
                  scale: isElevated ? 1.015 : 1,
                  zIndex: isElevated ? 50 : index + 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                style={{
                  top: `${baseTop}px`,
                  zIndex: isElevated ? 50 : index + 1,
                }}
                className="absolute inset-x-0 cursor-pointer select-none origin-bottom will-change-transform"
              >
                {/* SVG FOLDER HEADER WITH STAGGERED CUT-OUT TAB */}
                <div className="w-full relative -mb-[1px]">
                  <FolderTabSvg
                    position={folder.tabPosition}
                    color={folder.bg}
                  />

                  {/* Tab Title Content Placed Precisely Over the Tab Cut-Out */}
                  <div
                    className={`absolute top-0 h-11 sm:h-12 flex items-center px-4 sm:px-6 pointer-events-none ${
                      folder.tabPosition === "left"
                        ? "left-0 sm:left-2"
                        : folder.tabPosition === "mid-left"
                        ? "left-[18%] sm:left-[20%]"
                        : folder.tabPosition === "center"
                        ? "left-[36%] sm:left-[39%]"
                        : folder.tabPosition === "mid-right"
                        ? "left-[55%] sm:left-[59%]"
                        : "left-[72%] sm:left-[76%]"
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm font-bold font-roboto-condensed tracking-tight truncate max-w-[180px] sm:max-w-[240px] ${
                        folder.isDarkText ? "text-slate-950 font-black" : "text-white/95"
                      }`}
                    >
                      {folder.tabTitle}
                    </span>
                  </div>
                </div>

                {/* FOLDER BODY CONTAINER */}
                <div
                  style={{
                    backgroundColor: folder.bg,
                    boxShadow: isElevated
                      ? "0 30px 60px -12px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255, 255, 255, 0.15) inset"
                      : "0 10px 25px -5px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08) inset",
                  }}
                  className={`w-full rounded-b-[24px] sm:rounded-b-[32px] p-6 sm:p-10 transition-shadow duration-200 ${
                    folder.isDarkText ? "text-slate-950" : "text-white"
                  }`}
                >
                  {/* Top Dossier Metadata Bar */}
                  <div className="flex items-center justify-between border-b pb-4 mb-6 opacity-75 text-xs sm:text-sm font-mono tracking-wider"
                    style={{ borderColor: folder.isDarkText ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.18)" }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold">{folder.code}</span>
                      <span>•</span>
                      <span className="truncate max-w-[280px] sm:max-w-none">Provenance verified // Antigravity Core</span>
                    </div>
                    <span className="shrink-0">{folder.date}</span>
                  </div>

                  {/* Main Content Area */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Summary & Headline */}
                    <div className="lg:col-span-8">
                      <h3 className="text-xl sm:text-3xl lg:text-4xl font-black font-roboto-condensed tracking-tight leading-tight">
                        {folder.headline}
                      </h3>
                      <p
                        className={`text-sm sm:text-base font-roboto-condensed mt-3 leading-relaxed max-w-3xl ${
                          folder.isDarkText ? "text-slate-900/85" : "text-white/85"
                        }`}
                      >
                        {folder.summary}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {folder.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-xs font-bold font-roboto-condensed ${
                              folder.isDarkText
                                ? "bg-black/10 text-slate-950 border border-black/10"
                                : "bg-white/15 text-white border border-white/20"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Metrics & Action Pill */}
                    <div className="lg:col-span-4 flex flex-col gap-3.5 w-full">
                      {folder.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-xl flex items-center justify-between ${
                            folder.isDarkText
                              ? "bg-black/8 border border-black/10"
                              : "bg-white/10 border border-white/15 backdrop-blur-xs"
                          }`}
                        >
                          <span
                            className={`text-xs font-medium font-roboto-condensed ${
                              folder.isDarkText ? "text-slate-800" : "text-white/70"
                            }`}
                          >
                            {m.label}
                          </span>
                          <span className="text-sm font-black font-roboto-condensed">
                            {m.value}
                          </span>
                        </div>
                      ))}

                      {/* Hover Indicator Action */}
                      <div
                        className={`mt-2 py-2.5 px-4 rounded-xl flex items-center justify-between text-xs font-bold font-roboto-condensed transition-all duration-200 ${
                          folder.isDarkText
                            ? "bg-slate-950 text-white hover:bg-slate-800"
                            : "bg-white text-slate-950 hover:bg-slate-100"
                        }`}
                      >
                        <span>Inspect Full Dossier</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
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

// Reusable SVG Folder Tab with Angled Trapezoid / Cut-Out Geometry Matching Reference Image
const FolderTabSvg = ({
  position,
  color,
}: {
  position: "left" | "mid-left" | "center" | "mid-right" | "right";
  color: string;
}) => {
  // Generate authentic folder cut-out path based on tab horizontal position
  // ViewBox: 1000 x 48 (48px high tab with rounded corners and angled 40-degree shoulder)
  let pathD = "";

  if (position === "left") {
    // Tab from 0 to 280
    pathD =
      "M 0,48 L 0,16 Q 0,0 16,0 L 240,0 Q 256,0 268,14 L 296,44 Q 302,48 316,48 L 1000,48 L 1000,48 L 0,48 Z";
  } else if (position === "mid-left") {
    // Tab from 190 to 470
    pathD =
      "M 0,48 L 180,48 Q 192,48 200,42 L 226,12 Q 236,0 252,0 L 440,0 Q 456,0 466,14 L 492,44 Q 498,48 512,48 L 1000,48 L 0,48 Z";
  } else if (position === "center") {
    // Tab from 370 to 650
    pathD =
      "M 0,48 L 360,48 Q 372,48 380,42 L 406,12 Q 416,0 432,0 L 620,0 Q 636,0 646,14 L 672,44 Q 678,48 692,48 L 1000,48 L 0,48 Z";
  } else if (position === "mid-right") {
    // Tab from 560 to 840
    pathD =
      "M 0,48 L 550,48 Q 562,48 570,42 L 596,12 Q 606,0 622,0 L 810,0 Q 826,0 836,14 L 862,44 Q 868,48 882,48 L 1000,48 L 0,48 Z";
  } else {
    // Tab on the right side from 730 to 990
    pathD =
      "M 0,48 L 720,48 Q 732,48 740,42 L 766,12 Q 776,0 792,0 L 980,0 Q 996,0 1000,16 L 1000,48 L 0,48 Z";
  }

  return (
    <svg
      viewBox="0 0 1000 48"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-11 sm:h-12 block"
      preserveAspectRatio="none"
    >
      <path d={pathD} fill={color} />
    </svg>
  );
};
