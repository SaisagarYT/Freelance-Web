"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Eye,
  ChevronLeft,
  MoreHorizontal,
  Check,
  ChevronDown,
  Activity,
  Zap,
} from "lucide-react";

export interface TabbedFolderProjectsProps {
  onContactClick?: () => void;
}

// Masking Tape Component for realistic taped corners
export const MaskingTape = ({
  className = "",
  rotation = 0,
}: {
  className?: string;
  rotation?: number;
}) => (
  <div
    style={{ transform: `rotate(${rotation}deg)` }}
    className={`absolute z-30 pointer-events-none w-14 sm:w-16 h-5 sm:h-6 bg-white/75 backdrop-blur-[2px] border border-white/50 shadow-[0_2px_6px_rgba(0,0,0,0.14)] ${className}`}
  >
    {/* Translucent matte surface lines */}
    <div className="w-full h-full opacity-40 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
  </div>
);

interface ProjectItem {
  id: string;
  num: string;
  title: string;
  date: string;
  category: string;
  tagline: string;
  tabOffset: string; // Staggered horizontal position matching reference
  theme: {
    cardBg: string;
    border: string;
    textColor: string;
    dateColor: string;
    descColor: string;
    ctaColor: string;
    tabBg: string;
    tabText: string;
    headerHover: string;
  };
}

export const TabbedFolderProjects: React.FC<TabbedFolderProjectsProps> = ({
  onContactClick,
}) => {
  // Active/Expanded folder index (0 = Tandem initially open)
  const [expandedIdx, setExpandedIdx] = useState<number>(0);

  const toggleFolder = (idx: number) => {
    setExpandedIdx((prev) => (prev === idx ? -1 : idx));
  };

  const handleAction = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactEl = document.getElementById("contact");
      contactEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 5 Staggered Architectural File Folders with cohesive file & tab colors
  const projects: ProjectItem[] = [
    {
      id: "project-01",
      num: "01",
      title: "Tandem",
      date: "MAR 2, 2026",
      category: "FINTECH & SHARED BALANCES",
      tagline: "From 'who owes who' to money that finally feels shared.",
      tabOffset: "left-0 sm:left-0",
      theme: {
        cardBg: "#1D4ED8",
        border: "border-blue-400/40",
        textColor: "text-white",
        dateColor: "text-blue-100",
        descColor: "text-blue-50",
        ctaColor: "text-white hover:text-blue-200 border-white hover:border-blue-200",
        tabBg: "#1D4ED8",
        tabText: "text-white font-black",
        headerHover: "hover:bg-blue-600/40",
      },
    },
    {
      id: "project-02",
      num: "02",
      title: "Kinetic",
      date: "FEB 18, 2026",
      category: "STREAM INGESTION ENGINE",
      tagline: "Sub-2ms query execution across 1.2M streaming events per second.",
      tabOffset: "left-0 sm:left-0",
      theme: {
        cardBg: "#4F46E5",
        border: "border-indigo-300/40",
        textColor: "text-white",
        dateColor: "text-indigo-100",
        descColor: "text-indigo-50",
        ctaColor: "text-white hover:text-indigo-200 border-white hover:border-indigo-200",
        tabBg: "#4F46E5",
        tabText: "text-white font-black",
        headerHover: "hover:bg-indigo-600/40",
      },
    },
    {
      id: "project-03",
      num: "03",
      title: "Forge",
      date: "JAN 2, 2026",
      category: "DEVELOPER SYSTEMS PLATFORM",
      tagline: "Getting a new engineer from day one to shipping without the panic.",
      tabOffset: "left-0 sm:left-0",
      theme: {
        cardBg: "#F5B82E",
        border: "border-[#D99A1C]",
        textColor: "text-slate-950",
        dateColor: "text-slate-900/80",
        descColor: "text-slate-950/90",
        ctaColor: "text-slate-950 hover:text-slate-800 border-slate-950 hover:border-slate-800",
        tabBg: "#F5B82E",
        tabText: "text-slate-950 font-black",
        headerHover: "hover:bg-[#EAA822]",
      },
    },
    {
      id: "project-04",
      num: "04",
      title: "Aura",
      date: "DEC 14, 2025",
      category: "HEADLESS LUXURY WEBGL",
      tagline: "Fluid 60FPS WebGL headless luxury retail engine with optimistic state sync.",
      tabOffset: "left-0 sm:left-0",
      theme: {
        cardBg: "#059669",
        border: "border-emerald-300/40",
        textColor: "text-white",
        dateColor: "text-emerald-100",
        descColor: "text-emerald-50",
        ctaColor: "text-white hover:text-emerald-200 border-white hover:border-emerald-200",
        tabBg: "#059669",
        tabText: "text-white font-black",
        headerHover: "hover:bg-emerald-600/40",
      },
    },
    {
      id: "project-05",
      num: "05",
      title: "Hyperion",
      date: "NOV 28, 2025",
      category: "MULTI-AGENT AI NETWORK",
      tagline: "Multi-agent cognitive orchestration network streaming 12M+ tokens daily.",
      tabOffset: "left-0 sm:left-0",
      theme: {
        cardBg: "#E11D48",
        border: "border-rose-300/40",
        textColor: "text-white",
        dateColor: "text-rose-100",
        descColor: "text-rose-50",
        ctaColor: "text-white hover:text-rose-200 border-white hover:border-rose-200",
        tabBg: "#E11D48",
        tabText: "text-white font-black",
        headerHover: "hover:bg-rose-600/40",
      },
    },
  ];

  // Visual Mockup Preview renderer
  const renderMockup = (idx: number) => {
    switch (idx) {
      case 0:
        // Tandem (Dual Phone Split Bill UI)
        return (
          <div className="relative w-full max-w-[560px] rounded-xl border border-white/50 p-4 sm:p-6 bg-gradient-to-br from-[#1A2514] via-[#10190D] to-[#0A0F08] shadow-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-center justify-center">
            <MaskingTape rotation={-14} className="-top-3 -left-3" />
            <MaskingTape rotation={14} className="-top-3 -right-3" />
            <MaskingTape rotation={10} className="-bottom-3 -left-3" />

            <div className="relative w-full h-[300px] sm:h-[340px] flex items-center justify-center">
              {/* Back Phone */}
              <div
                style={{ transform: "rotate(6deg) translate(50px, -10px)" }}
                className="absolute w-[200px] sm:w-[230px] h-[310px] sm:h-[350px] bg-[#141416] border border-slate-700/70 rounded-[32px] sm:rounded-[36px] p-3 text-white shadow-2xl opacity-90 hidden sm:flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                    <span>Note (Optional)</span>
                    <span className="text-white font-bold">$20.00</span>
                  </div>
                  <div className="w-full h-8 rounded-lg bg-white/5 border border-white/10 px-2 flex items-center text-[10px] text-slate-300">
                    Dinner at Osteria
                  </div>
                </div>

                <div className="space-y-2 py-2">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Group Split • 4 Persons
                  </div>
                  <div className="flex items-center gap-2">
                    {["Kyle", "Darlene", "Colleen", "Debbie"].map((name) => (
                      <div key={name} className="flex flex-col items-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 border border-white/30 flex items-center justify-center text-[10px] font-bold text-white">
                          {name[0]}
                        </div>
                        <span className="text-[8px] text-slate-300">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-2 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400 text-[10px]">Total</span>
                  <span className="font-bold text-emerald-400 font-mono">$240.00</span>
                </div>
              </div>

              {/* Front Phone */}
              <div
                style={{ transform: "rotate(-3deg) translate(-25px, 10px)" }}
                className="relative z-10 w-[210px] sm:w-[240px] h-[320px] sm:h-[360px] bg-[#111113] border-2 border-slate-700/80 rounded-[34px] sm:rounded-[38px] p-3.5 sm:p-4 text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1">
                    <span>10:38</span>
                    <div className="w-16 h-3.5 bg-black rounded-full border border-slate-800/80" />
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>5G</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 pb-3 border-b border-slate-800/80">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <ChevronLeft className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                    <span className="font-semibold text-xs tracking-tight">Split Bill</span>
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <MoreHorizontal className="w-3.5 h-3.5 text-slate-300" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 my-auto py-2">
                  <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                      Split Bill This Month
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl sm:text-4xl font-black font-roboto-condensed tracking-tight text-white">
                        $42
                      </span>
                      <div className="p-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400">
                        <Eye className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-mono text-emerald-300 font-semibold">
                        Balanced & Settled
                      </span>
                    </div>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="w-full pt-1">
                  <div className="w-full py-2 rounded-xl bg-white text-slate-950 text-center font-bold text-xs tracking-wide shadow-sm">
                    Confirm & Send
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 1:
        // Kinetic (High-throughput Telemetry Stream)
        return (
          <div className="relative w-full max-w-[560px] rounded-xl border border-white/50 p-4 sm:p-6 bg-[#0E1326] shadow-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex flex-col justify-between">
            <MaskingTape rotation={-14} className="-top-3 -left-3" />
            <MaskingTape rotation={14} className="-top-3 -right-3" />
            <MaskingTape rotation={10} className="-bottom-3 -left-3" />

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20 text-xs font-mono text-indigo-300">
                <span>CLUSTER: US-EAST-01</span>
                <span className="text-emerald-400 font-bold">● 99.999% HEALTHY</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 block">THROUGHPUT</span>
                  <span className="text-xl font-bold font-mono text-white">1.2M/s</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 block">P99 LATENCY</span>
                  <span className="text-xl font-bold font-mono text-indigo-400">1.8ms</span>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-slate-400 block">COMPRESSION</span>
                  <span className="text-xl font-bold font-mono text-emerald-400">8.4x</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-slate-300 space-y-1.5">
                <div className="text-indigo-400 text-[11px] font-bold">STREAM TELEMETRY INGESTION</div>
                <div className="text-[11px] text-slate-400">Kafka ➔ Redis Cluster ➔ ClickHouse ➔ Vector Engine</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-indigo-500/20 text-[11px] font-mono text-slate-400">
              <span>PIPELINE VELOCITY: NOMINAL</span>
              <span className="text-indigo-300">TLS 1.3 ENCRYPTED</span>
            </div>
          </div>
        );

      case 2:
        // Forge (Studio Monochrome Portrait)
        return (
          <div className="relative w-full max-w-[560px] rounded-xl border border-white/60 p-3 sm:p-4 bg-white/25 shadow-2xl overflow-hidden min-h-[300px] sm:min-h-[360px] flex items-center justify-center">
            <MaskingTape rotation={-15} className="-top-3 -left-3" />
            <MaskingTape rotation={15} className="-top-3 -right-3" />

            <div className="relative w-full h-[280px] sm:h-[340px] rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
              <img
                src="/images/architect_alex.jpg"
                alt="Forge Systems Studio Portrait"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[10px] uppercase tracking-wider">
                <span>FORGE CORE // ENGINEERING LAB</span>
                <span>DEV SPEC 2026</span>
              </div>
            </div>
          </div>
        );

      case 3:
        // Aura (Headless Luxury WebGL Commerce)
        return (
          <div className="relative w-full max-w-[560px] rounded-xl border border-white/50 p-4 sm:p-6 bg-[#081712] shadow-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex flex-col justify-between">
            <MaskingTape rotation={-14} className="-top-3 -left-3" />
            <MaskingTape rotation={14} className="-top-3 -right-3" />

            <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>60FPS KINETIC ENGINE</span>
              </span>
              <span>RENDER PASS: PBR</span>
            </div>

            <div className="my-auto py-3 p-4 rounded-2xl bg-white/[0.03] border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/80">
                    KINETIC CHRONO 01
                  </span>
                  <div className="text-2xl font-bold font-sans text-white">Chronograph Titanium</div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold font-mono text-emerald-400">$1,420.00</span>
                  <span className="text-[10px] font-mono text-slate-400 block">OPTIMISTIC SYNC</span>
                </div>
              </div>

              <div className="h-20 w-full rounded-xl bg-gradient-to-r from-emerald-950/60 via-emerald-900/40 to-emerald-950/60 border border-emerald-500/20 flex items-center justify-center">
                <div className="flex items-center gap-3 text-xs font-mono text-emerald-300">
                  <Activity className="w-4 h-4 animate-spin" />
                  <span>Interactive 3D WebGL Mesh Loaded</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-emerald-500/20 text-[11px] font-mono text-slate-400">
              <span>ZERO RELOAD CHECKOUT</span>
              <span className="text-emerald-400 font-bold">100/100 LIGHTHOUSE</span>
            </div>
          </div>
        );

      case 4:
        // Hyperion (Multi-Agent Neural Workspace)
        return (
          <div className="relative w-full max-w-[560px] rounded-xl border border-white/50 p-4 sm:p-6 bg-[#16080F] shadow-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex flex-col justify-between">
            <MaskingTape rotation={-14} className="-top-3 -left-3" />
            <MaskingTape rotation={14} className="-top-3 -right-3" />

            <div className="flex items-center justify-between pb-3 border-b border-rose-500/20 text-xs font-mono text-rose-400">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-rose-400" />
                <span>COGNITIVE RUNTIME // ACTIVE</span>
              </span>
              <span>12M TOKENS/DAY</span>
            </div>

            <div className="my-auto py-2 space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-rose-500/20 flex items-center justify-between">
                <span className="text-slate-300">AGENT_01: ORCHESTRATOR</span>
                <span className="text-emerald-400 font-bold">99.8% READY</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-rose-500/20 flex items-center justify-between">
                <span className="text-slate-300">AGENT_02: VECTOR SEARCH</span>
                <span className="text-rose-400 font-bold">3.2ms EDGE</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-rose-500/20 flex items-center justify-between">
                <span className="text-slate-300">AGENT_03: SYNTHESIS SHARD</span>
                <span className="text-indigo-400 font-bold">STREAMING</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-rose-500/20 text-[11px] font-mono text-slate-400">
              <span>LOCAL EMBEDDINGS 1536-D</span>
              <span className="text-rose-400 font-bold">PARALLEL MESH</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto select-none space-y-3">
      {/* Brutalist Archival Index Header matching reference */}
      <div className="w-full flex items-center justify-between font-mono text-[11px] text-slate-500 uppercase tracking-widest px-2 pb-1 border-b border-slate-200/80">
        <div className="flex items-center gap-6">
          <span>M_1 // ARCHIVE_01</span>
          <span className="hidden sm:inline">12938 // BUILDS</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-purple-600 font-semibold">T3 3 // 2026</span>
          <span className="hidden sm:inline text-slate-400">p.14-17</span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 5 PHYSICAL FILE FOLDERS STACKED ONE AFTER ANOTHER              */}
      {/* Seamless cascading stack with overlapping depth & no gaps      */}
      {/* ============================================================== */}
      <div className="w-full flex flex-col">
        {projects.map((proj, idx) => {
          const isExpanded = expandedIdx === idx;

          return (
            <div
              key={proj.id}
              style={{ zIndex: 10 + idx }}
              className={`relative w-full ${
                idx === 0
                  ? "pt-[32px] sm:pt-[36px]"
                  : "-mt-[33px] sm:-mt-[37px] pt-[32px] sm:pt-[36px]"
              } group transition-all duration-300`}
            >
              {/* -------------------------------------------------------- */}
              {/* SKEUOMORPHIC ROUNDED FOLDER TAB (Smooth curves all around)*/}
              {/* Beautiful continuous curvature with zero sharp corners   */}
              {/* -------------------------------------------------------- */}
              <div
                onClick={() => toggleFolder(idx)}
                className="absolute top-0 left-0 z-20 h-[34px] sm:h-[38px] w-[170px] sm:w-[195px] cursor-pointer select-none transition-all duration-200 hover:brightness-110"
              >
                {/* Continuous-Curvature SVG Tab Silhouette */}
                <svg
                  viewBox="0 0 195 38"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full overflow-visible drop-shadow-[0_2px_4px_rgba(0,0,0,0.14)]"
                >
                  <path
                    d="M 0 38 L 0 14 A 14 14 0 0 1 14 0 L 138 0 Q 152 0 159 9 L 171 24 Q 179 38 195 38 L 0 38 Z"
                    fill={proj.theme.tabBg}
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="1"
                  />
                </svg>

                {/* Tab Label */}
                <div
                  className={`relative z-10 h-full flex items-center pl-4 sm:pl-5 pr-8 sm:pr-10 font-mono text-[11px] sm:text-xs tracking-widest uppercase font-bold ${proj.theme.tabText}`}
                >
                  <span className="flex items-center gap-1.5">
                    <span>✦</span>
                    <span>{`PROJECT ${proj.num}`}</span>
                  </span>
                </div>
              </div>

              {/* -------------------------------------------------------- */}
              {/* MAIN FOLDER CARD BODY COMPONENT                          */}
              {/* Welded directly to the tab with smooth top & bottom edges*/}
              {/* -------------------------------------------------------- */}
              <motion.div
                layout
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 26,
                  mass: 0.8,
                }}
                style={{
                  backgroundColor: proj.theme.cardBg,
                }}
                className={`relative w-full rounded-2xl sm:rounded-[26px] rounded-tl-none sm:rounded-tl-none border ${proj.theme.border} overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.22)] transition-all duration-300 ${
                  isExpanded ? "shadow-[0_28px_65px_-12px_rgba(0,0,0,0.48)] ring-1 ring-white/10" : "hover:brightness-105"
                }`}
              >
                {/* Folder Header Bar (Title, Category, Date, View/Open toggle) */}
                <div
                  onClick={() => toggleFolder(idx)}
                  className={`relative w-full h-[58px] sm:h-[66px] flex items-center justify-between pl-[175px] sm:pl-[205px] pr-5 sm:pr-8 cursor-pointer select-none transition-colors ${proj.theme.headerHover}`}
                >
                  {/* Title & Category Metadata */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span
                      className={`font-roboto-condensed font-black tracking-tight text-lg sm:text-2xl uppercase ${proj.theme.textColor}`}
                    >
                      {proj.title}
                    </span>
                    <span className="hidden md:inline-block font-mono text-[10px] sm:text-[11px] text-slate-400/90 uppercase tracking-wider font-semibold">
                      // {proj.category}
                    </span>
                  </div>

                  {/* Right Metadata: Date & Interactive Toggle */}
                  <div className="flex items-center gap-3 sm:gap-5">
                    <span
                      className={`hidden sm:inline-block font-mono text-xs font-semibold tracking-wider uppercase ${proj.theme.dateColor}`}
                    >
                      {proj.date}
                    </span>

                    {/* Active/Expanded State Indicator */}
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                        proj.num === "03"
                          ? isExpanded
                            ? "bg-slate-950/20 text-slate-950"
                            : "bg-slate-950/10 text-slate-900 group-hover:bg-slate-950/20"
                          : isExpanded
                          ? "bg-white/20 text-white"
                          : "bg-black/25 text-white/95 group-hover:bg-black/35"
                      }`}
                    >
                      <span>{isExpanded ? "OPEN" : "VIEW"}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* ------------------------------------------------------ */}
                {/* FOLDER BODY CONTENT (Expands smoothly on click)        */}
                {/* ------------------------------------------------------ */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className={`w-full px-6 sm:px-10 lg:px-12 pb-8 sm:pb-12 pt-4 border-t ${
                        proj.num === "03" ? "border-slate-950/15" : "border-white/15"
                      }`}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                          {/* Left Column: Metadata, Title, Description, Link */}
                          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                            <div
                              className={`flex items-center gap-2 font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-wider ${proj.theme.dateColor}`}
                            >
                              <span className="text-[10px]">●</span>
                              <span>{proj.date}</span>
                            </div>

                            <h3
                              className={`text-4xl sm:text-5xl lg:text-[56px] font-bold font-sans tracking-tight leading-none ${proj.theme.textColor}`}
                            >
                              {proj.title}
                            </h3>

                            <p
                              className={`text-base sm:text-lg font-sans leading-relaxed max-w-md ${proj.theme.descColor}`}
                            >
                              {proj.tagline}
                            </p>

                            <div className="pt-2">
                              <button
                                onClick={handleAction}
                                className={`group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest border-b pb-0.5 transition-colors cursor-pointer ${proj.theme.ctaColor}`}
                              >
                                <span>VIEW PROJECT</span>
                                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </button>
                            </div>
                          </div>

                          {/* Right Column: Framed Visual Mockup with Corner Masking Tapes */}
                          <div className="lg:col-span-7 flex justify-center">
                            {renderMockup(idx)}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Archival Exploration Footer Tag */}
      <div className="w-full flex items-center justify-between pt-3 font-mono text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest px-2">
        <span>Files. Design Exploration</span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          <span className="font-editorial italic font-normal text-xs text-slate-500">
            (files)
          </span>
        </div>
      </div>
    </div>
  );
};
