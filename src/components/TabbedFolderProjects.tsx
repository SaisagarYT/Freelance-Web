"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Eye,
  ChevronLeft,
  MoreHorizontal,
  Check,
  ChevronRight,
  Sparkles,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
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
  tagline: string;
  theme: {
    cardBg: string;
    border: string;
    textColor: string;
    dateColor: string;
    descColor: string;
    ctaColor: string;
    tabActiveBg: string;
    tabActiveText: string;
    tabInactiveBg: string;
    tabInactiveText: string;
  };
}

export const TabbedFolderProjects: React.FC<TabbedFolderProjectsProps> = ({
  onContactClick,
}) => {
  // Active Project Index (0 to 4 for 5 projects)
  const [activeIdx, setActiveIdx] = useState<number>(0);
  // Direction flag for stack animation trigger
  const [animKey, setAnimKey] = useState<number>(0);

  const selectProject = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    setAnimKey((prev) => prev + 1);
  };

  const handleAction = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactEl = document.getElementById("contact");
      contactEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 5 Curated High-End Projects
  const projects: ProjectItem[] = [
    {
      id: "project-01",
      num: "01",
      title: "Tandem",
      date: "MAR 2, 2026",
      tagline: "From 'who owes who' to money that finally feels shared.",
      theme: {
        cardBg: "#1A1816",
        border: "border-[#2A2622]",
        textColor: "text-white",
        dateColor: "text-slate-400",
        descColor: "text-slate-300",
        ctaColor: "text-white hover:text-blue-400 border-white hover:border-blue-400",
        tabActiveBg: "#2563EB",
        tabActiveText: "text-white",
        tabInactiveBg: "#1E1B18",
        tabInactiveText: "text-slate-400 hover:text-white",
      },
    },
    {
      id: "project-02",
      num: "02",
      title: "Kinetic",
      date: "FEB 18, 2026",
      tagline: "Sub-2ms query execution across 1.2M streaming events per second.",
      theme: {
        cardBg: "#0C1026",
        border: "border-[#1E274A]",
        textColor: "text-white",
        dateColor: "text-indigo-300/80",
        descColor: "text-slate-300",
        ctaColor: "text-white hover:text-indigo-400 border-white hover:border-indigo-400",
        tabActiveBg: "#6366F1",
        tabActiveText: "text-white",
        tabInactiveBg: "#121733",
        tabInactiveText: "text-indigo-300/70 hover:text-white",
      },
    },
    {
      id: "project-03",
      num: "03",
      title: "Forge",
      date: "JAN 2, 2026",
      tagline: "Getting a new engineer from day one to shipping without the panic.",
      theme: {
        cardBg: "#F5B82E",
        border: "border-[#E5A820]",
        textColor: "text-slate-950",
        dateColor: "text-slate-900/80",
        descColor: "text-slate-900/90",
        ctaColor: "text-slate-950 hover:text-slate-800 border-slate-950 hover:border-slate-800",
        tabActiveBg: "#F5B82E",
        tabActiveText: "text-slate-950 font-black",
        tabInactiveBg: "#D49B20",
        tabInactiveText: "text-slate-950/80 hover:text-slate-950",
      },
    },
    {
      id: "project-04",
      num: "04",
      title: "Aura",
      date: "DEC 14, 2025",
      tagline: "Fluid 60FPS WebGL headless luxury retail engine with optimistic state sync.",
      theme: {
        cardBg: "#0D241C",
        border: "border-[#184234]",
        textColor: "text-white",
        dateColor: "text-emerald-300/80",
        descColor: "text-slate-300",
        ctaColor: "text-white hover:text-emerald-400 border-white hover:border-emerald-400",
        tabActiveBg: "#10B981",
        tabActiveText: "text-slate-950 font-bold",
        tabInactiveBg: "#123026",
        tabInactiveText: "text-emerald-300/70 hover:text-white",
      },
    },
    {
      id: "project-05",
      num: "05",
      title: "Hyperion",
      date: "NOV 28, 2025",
      tagline: "Multi-agent cognitive orchestration network streaming 12M+ tokens daily.",
      theme: {
        cardBg: "#240E17",
        border: "border-[#3D1727]",
        textColor: "text-white",
        dateColor: "text-rose-300/80",
        descColor: "text-slate-300",
        ctaColor: "text-white hover:text-rose-400 border-white hover:border-rose-400",
        tabActiveBg: "#F43F5E",
        tabActiveText: "text-white font-bold",
        tabInactiveBg: "#331421",
        tabInactiveText: "text-rose-300/70 hover:text-white",
      },
    },
  ];

  const currentProject = projects[activeIdx];

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
                    <Check className="w-3 h-3 text-emerald-400" />
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

            {/* Interactive Chronometer Card */}
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

            {/* Agent Nodes Pipeline */}
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
    <div className="w-full max-w-[1240px] mx-auto select-none space-y-0">
      
      {/* ============================================================== */}
      {/* 1. HORIZONTAL 5-TAB FILING DOCK BAR                           */}
      {/* All 5 tabs are displayed with chamfered angles across the width*/}
      {/* ============================================================== */}
      <div className="relative w-full overflow-x-auto no-scrollbar pb-0">
        <div className="flex items-end h-[42px] sm:h-[46px] min-w-[700px] w-full">
          {projects.map((proj, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={proj.id}
                onClick={() => selectProject(idx)}
                style={{
                  clipPath:
                    idx === 0
                      ? "polygon(0 0, calc(100% - 20px) 0, 100% 100%, 0 100%)"
                      : "polygon(20px 0, calc(100% - 20px) 0, 100% 100%, 0 100%)",
                  backgroundColor: isActive
                    ? proj.theme.tabActiveBg
                    : proj.theme.tabInactiveBg,
                }}
                className={`relative h-full flex-1 min-w-[135px] sm:min-w-[160px] flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase cursor-pointer transition-all duration-200 ${
                  idx > 0 ? "-ml-[18px]" : ""
                } ${
                  isActive
                    ? `z-30 shadow-lg ${proj.theme.tabActiveText}`
                    : `z-10 hover:brightness-125 ${proj.theme.tabInactiveText}`
                }`}
              >
                <span className="flex items-center gap-1.5 px-3">
                  <span className={isActive ? "scale-110" : ""}>✦</span>
                  <span>{`PROJECT ${proj.num}`}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. PHYSICAL 3D STACKED DECK CONTAINER                          */}
      {/* Visual background layers peek out, creating realistic depth    */}
      {/* ============================================================== */}
      <div className="relative w-full">
        {/* Layer 3 behind (Furthest back card edge) */}
        <div
          style={{
            backgroundColor: projects[(activeIdx + 2) % 5].theme.cardBg,
          }}
          className="absolute -top-3 sm:-top-4 inset-x-3 sm:inset-x-5 h-20 rounded-2xl opacity-40 shadow-sm border border-black/10 -z-20 transition-all duration-300"
        />

        {/* Layer 2 behind (Mid stack card edge) */}
        <div
          style={{
            backgroundColor: projects[(activeIdx + 1) % 5].theme.cardBg,
          }}
          className="absolute -top-1.5 sm:-top-2 inset-x-1.5 sm:inset-x-2.5 h-20 rounded-2xl opacity-70 shadow-md border border-black/15 -z-10 transition-all duration-300"
        />

        {/* ============================================================ */}
        {/* FRONT ACTIVE CARD (Flies up from back stack with spring)    */}
        {/* ============================================================ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={animKey}
            initial={{
              y: -55,
              scale: 0.965,
              opacity: 0.85,
            }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{
              y: 35,
              scale: 0.97,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 26,
              mass: 0.75,
            }}
            style={{
              backgroundColor: currentProject.theme.cardBg,
            }}
            className={`relative z-20 w-full ${currentProject.theme.textColor} rounded-b-2xl sm:rounded-b-[24px] p-6 sm:p-10 lg:p-12 shadow-[0_28px_60px_-15px_rgba(0,0,0,0.38)] border border-t-0 ${currentProject.theme.border}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Metadata, Title, Description, Link */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                <div
                  className={`flex items-center gap-2 font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-wider ${currentProject.theme.dateColor}`}
                >
                  <span className="text-[10px]">●</span>
                  <span>{currentProject.date}</span>
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-bold font-sans tracking-tight leading-none">
                  {currentProject.title}
                </h3>

                <p className={`text-base sm:text-lg font-sans leading-relaxed max-w-md ${currentProject.theme.descColor}`}>
                  {currentProject.tagline}
                </p>

                <div className="pt-2 flex items-center gap-6">
                  <button
                    onClick={handleAction}
                    className={`group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest border-b pb-0.5 transition-colors cursor-pointer ${currentProject.theme.ctaColor}`}
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  {/* Quick Card Stepper Controls */}
                  <div className="flex items-center gap-1.5 opacity-80">
                    <button
                      onClick={() => selectProject((activeIdx - 1 + 5) % 5)}
                      aria-label="Previous Project"
                      className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-xs px-1">
                      {activeIdx + 1} / 5
                    </span>
                    <button
                      onClick={() => selectProject((activeIdx + 1) % 5)}
                      aria-label="Next Project"
                      className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Framed Visual Mockup with Corner Masking Tapes */}
              <div className="lg:col-span-7 flex justify-center">
                {renderMockup(activeIdx)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
