"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye, ChevronLeft, MoreHorizontal, Check } from "lucide-react";

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

export const TabbedFolderProjects: React.FC<TabbedFolderProjectsProps> = ({
  onContactClick,
}) => {
  // Active tab state for Folder 1 (Project 01 vs 02)
  const [folder1Tab, setFolder1Tab] = useState<"01" | "02">("01");

  const handleAction = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const contactEl = document.getElementById("contact");
      contactEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-[1240px] mx-auto space-y-0 select-none">
      {/* ------------------------------------------------------------ */}
      {/* CARD 1: DARK CHARCOAL FOLDER (Project 01 & Project 02)       */}
      {/* ------------------------------------------------------------ */}
      <div className="relative z-10 w-full group">
        {/* Top Folder Tabs Bar */}
        <div className="relative flex items-end h-[42px] sm:h-[46px] w-full">
          {/* Tab 01: Project 01 (Chamfered on right) */}
          <button
            onClick={() => setFolder1Tab("01")}
            style={{
              clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 100%, 0 100%)",
            }}
            className={`relative z-20 h-full w-[150px] sm:w-[185px] flex items-center px-4 sm:px-5 font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase cursor-pointer transition-colors duration-200 ${
              folder1Tab === "01"
                ? "bg-[#2563EB] text-white shadow-sm"
                : "bg-[#1E1B18] text-slate-400 hover:text-white hover:bg-[#26231F]"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span>✦</span>
              <span>PROJECT 01</span>
            </span>
          </button>

          {/* Tab 02: Project 02 (Chamfered on right, tucks under Tab 01 with -ml-[20px]) */}
          <button
            onClick={() => setFolder1Tab("02")}
            style={{
              clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 100%, 0 100%)",
            }}
            className={`relative z-10 -ml-[20px] h-full w-[150px] sm:w-[185px] flex items-center pl-7 sm:pl-8 pr-4 font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase cursor-pointer transition-colors duration-200 ${
              folder1Tab === "02"
                ? "bg-[#2563EB] text-white shadow-sm"
                : "bg-[#1A1816] text-white hover:text-white"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span>✦</span>
              <span>PROJECT 02</span>
            </span>
          </button>
        </div>

        {/* Card 1 Main Body */}
        <div className="relative w-full bg-[#1A1816] text-white rounded-b-2xl sm:rounded-b-[24px] p-6 sm:p-10 lg:p-12 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.35)] border border-t-0 border-[#2A2622]">
          <AnimatePresence mode="wait">
            {folder1Tab === "01" ? (
              /* TAB 01 CONTENT: TANDEM */
              <motion.div
                key="tandem"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.24 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Left Column: Metadata, Title, Description, Link */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-[13px] text-slate-400 font-semibold uppercase tracking-wider">
                    <span className="text-[10px]">●</span>
                    <span>MAR 2, 2026</span>
                  </div>

                  <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-bold font-sans text-white tracking-tight leading-none">
                    Tandem
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-md">
                    From &apos;who owes who&apos; to money that finally feels shared.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={handleAction}
                      className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-white border-b border-white pb-0.5 hover:text-blue-400 hover:border-blue-400 transition-colors cursor-pointer"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Phone Mockup with Taped Corners */}
                <div className="lg:col-span-7 flex justify-center">
                  <div className="relative w-full max-w-[560px] rounded-xl border border-white/50 p-4 sm:p-6 bg-gradient-to-br from-[#1A2514] via-[#10190D] to-[#0A0F08] shadow-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-center justify-center">
                    {/* Realistic Masking Tape on Corners */}
                    <MaskingTape rotation={-14} className="-top-3 -left-3" />
                    <MaskingTape rotation={14} className="-top-3 -right-3" />
                    <MaskingTape rotation={10} className="-bottom-3 -left-3" />

                    {/* Overlapping Dual Phone UI Mockups */}
                    <div className="relative w-full h-[300px] sm:h-[340px] flex items-center justify-center">
                      {/* Background Phone (Slightly tilted right) */}
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

                      {/* Foreground Phone (Dark Mode Mobile Split Bill Interface) */}
                      <div
                        style={{ transform: "rotate(-3deg) translate(-25px, 10px)" }}
                        className="relative z-10 w-[210px] sm:w-[240px] h-[320px] sm:h-[360px] bg-[#111113] border-2 border-slate-700/80 rounded-[34px] sm:rounded-[38px] p-3.5 sm:p-4 text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between"
                      >
                        {/* Phone Top Notch / Dynamic Island */}
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1">
                            <span>10:38</span>
                            <div className="w-16 h-3.5 bg-black rounded-full border border-slate-800/80" />
                            <div className="flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>5G</span>
                            </div>
                          </div>

                          {/* App Nav */}
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

                        {/* App Body: Balance Card */}
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

                          {/* Split Status Indicator */}
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

                        {/* App Bottom Button */}
                        <div className="w-full pt-1">
                          <div className="w-full py-2 rounded-xl bg-white text-slate-950 text-center font-bold text-xs tracking-wide shadow-sm">
                            Confirm & Send
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* TAB 02 CONTENT: KINETIC TELEMETRY */
              <motion.div
                key="kinetic"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.24 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-[13px] text-slate-400 font-semibold uppercase tracking-wider">
                    <span className="text-[10px]">●</span>
                    <span>FEB 18, 2026</span>
                  </div>

                  <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-bold font-sans text-white tracking-tight leading-none">
                    Kinetic
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-md">
                    Sub-2ms query execution across 1.2M streaming events per second.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={handleAction}
                      className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-white border-b border-white pb-0.5 hover:text-blue-400 hover:border-blue-400 transition-colors cursor-pointer"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7 flex justify-center">
                  <div className="relative w-full max-w-[560px] rounded-xl border border-white/50 p-4 sm:p-6 bg-[#0E1326] shadow-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex flex-col justify-between">
                    <MaskingTape rotation={-14} className="-top-3 -left-3" />
                    <MaskingTape rotation={14} className="-top-3 -right-3" />
                    <MaskingTape rotation={10} className="-bottom-3 -left-3" />

                    {/* Telemetry Stream Mockup UI */}
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ------------------------------------------------------------ */}
      {/* CARD 2: GOLDEN AMBER FOLDER (Project 03 / Forge)             */}
      {/* Overlaps seamlessly beneath Card 1 matching reference layout */}
      {/* ------------------------------------------------------------ */}
      <div className="relative z-20 w-full -mt-4 sm:-mt-8 group">
        {/* Top Folder Tabs Bar (Shifted to center with chamfered shoulder) */}
        <div className="relative flex items-end h-[42px] sm:h-[46px] w-full">
          {/* Tab 03: Project 03 (Positioned in center, chamfered on left & right) */}
          <button
            style={{
              clipPath: "polygon(22px 0, calc(100% - 22px) 0, 100% 100%, 0 100%)",
            }}
            className="relative z-20 ml-0 sm:ml-[310px] lg:ml-[330px] h-full w-[170px] sm:w-[200px] bg-[#F5B82E] text-slate-950 flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold tracking-widest uppercase cursor-pointer shadow-sm transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <span>✦</span>
              <span>PROJECT 03</span>
            </span>
          </button>
        </div>

        {/* Card 2 Main Body */}
        <div className="relative w-full bg-[#F5B82E] text-slate-950 rounded-b-2xl sm:rounded-b-[24px] p-6 sm:p-10 lg:p-12 shadow-[0_24px_50px_-15px_rgba(245,184,46,0.35)] border border-t-0 border-[#E5A820]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Metadata, Title, Description, Link */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs sm:text-[13px] text-slate-900/80 font-bold uppercase tracking-wider">
                <span className="text-[10px]">●</span>
                <span>JAN 2, 2026</span>
              </div>

              <h3 className="text-4xl sm:text-5xl lg:text-[56px] font-bold font-sans text-slate-950 tracking-tight leading-none">
                Forge
              </h3>

              <p className="text-base sm:text-lg text-slate-900/90 font-sans leading-relaxed max-w-md">
                Getting a new engineer from day one to shipping without the panic.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleAction}
                  className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-950 border-b border-slate-950 pb-0.5 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Framed Studio Monochrome Photo with Taped Corners */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[560px] rounded-xl border border-white/60 p-3 sm:p-4 bg-white/25 shadow-2xl overflow-hidden min-h-[300px] sm:min-h-[360px] flex items-center justify-center">
                {/* Realistic Masking Tape on Corners */}
                <MaskingTape rotation={-15} className="-top-3 -left-3" />
                <MaskingTape rotation={15} className="-top-3 -right-3" />

                {/* High-Contrast Monochrome Photographic Subject */}
                <div className="relative w-full h-[280px] sm:h-[340px] rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                  <img
                    src="/images/architect_alex.jpg"
                    alt="Forge Systems Studio Portrait"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
                  />
                  {/* Architectural Studio Watermark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white font-mono text-[10px] uppercase tracking-wider">
                    <span>FORGE CORE // ENGINEERING LAB</span>
                    <span>DEV SPEC 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
