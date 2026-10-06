"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Specialist {
  id: string;
  number: string;
  role: string;
  name: string;
  credentials: string;
  bio: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

const specialists: Specialist[] = [
  {
    id: "alex-voron",
    number: "01",
    role: "LLMOPS & NEURAL ARCHITECT",
    name: "Alex Voron",
    credentials: "AI Systems Architect · ex-Google DeepMind · 8 deployed agents in production",
    bio: "Engineers high-throughput LLM inference pipelines, multi-agent cognitive architectures, latency optimization, and resilient vector index systems for enterprise deployments.",
    image: "/images/architect_alex.jpg",
    tags: ["Neural Arch", "Agent Design", "LLM Ops", "LangGraph", "vLLM", "Vector RAG"],
    metrics: [
      { label: "Agents In Prod", value: "8" },
      { label: "P99 Latency", value: "<120ms" },
      { label: "Uptime SLA", value: "99.98%" },
    ],
    accentColor: "#9333EA",
  },
  {
    id: "katya-melnyk",
    number: "02",
    role: "VISUAL AI & CREATIVE DIRECTOR",
    name: "Katya Melnyk",
    credentials: "Generative Design Lead · Built AI pipelines for 40+ brands · Midjourney Certified",
    bio: "Unifies generative synthetic media with high-converting interface architecture. Crafts bespoke diffusion pipelines, real-time image engines, and brand systems for tech platforms.",
    image: "/images/architect_katya.jpg",
    tags: ["Synthetic Design", "Visual AI", "Workflows", "ComfyUI", "LoRA Models", "Design Tokens"],
    metrics: [
      { label: "Brand Engines", value: "40+" },
      { label: "Assets Synthesized", value: "500k+" },
      { label: "Fidelity Score", value: "99.4%" },
    ],
    accentColor: "#9333EA",
  },
  {
    id: "ivan-prokopenko",
    number: "03",
    role: "AGENTIC WORKFLOW ENGINEER",
    name: "Ivan Prokopenko",
    credentials: "Agentic Workflow Engineer · Founder of AI-first agency · $2M ARR automated",
    bio: "Architects autonomous business systems and deterministic tool-calling workflows. Eliminates operational friction through self-healing agent pipelines running 24/7 without manual intervention.",
    image: "/images/architect_ivan.jpg",
    tags: ["Automation", "Agentic AI", "Tool Calling", "Temporal", "Event Loops", "SaaS Scale"],
    metrics: [
      { label: "Automated ARR", value: "$2M+" },
      { label: "Active Pipelines", value: "65+" },
      { label: "Autonomous Rate", value: "100%" },
    ],
    accentColor: "#9333EA",
  },
];

interface ArchitectsSectionProps {
  onContactClick?: () => void;
}

export const ArchitectsSection: React.FC<ArchitectsSectionProps> = ({ onContactClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSpecialist = specialists[activeIndex];

  return (
    <section
      id="architects"
      className="w-full relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between py-6 sm:py-8 lg:py-8 overflow-hidden bg-transparent"
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-between">
        {/* Top Header Bar */}
        <div className="pb-3 border-b border-slate-200 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2 text-purple-600 font-roboto-condensed font-bold text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping" />
            <span>Core Engineering Bench</span>
          </div>

          <div className="text-[11px] font-roboto-condensed font-bold uppercase tracking-wider text-slate-400">
            Hover Cards to Explore Profiles • 01 — 03
          </div>
        </div>

        {/* Main Split Stage: Left Dynamic Description & Right Thin-to-Wide Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-4 sm:py-6 my-auto flex-1">
          {/* ============================================================ */}
          {/* LEFT COLUMN: DYNAMIC DESCRIPTIONS SYNCHRONIZED ON HOVER       */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <div>
              {/* Lowercase Title */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 font-roboto-condensed lowercase leading-none">
                architects
              </h2>
              <p className="text-slate-500 font-roboto-condensed text-xs sm:text-sm mt-1 font-medium">
                Hands-on practitioners with real-world production deployments, not theoretical lecturers.
              </p>
            </div>

            {/* Dynamic Card for Active Person with Smooth Crossfade */}
            <div className="min-h-[280px] sm:min-h-[300px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSpecialist.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="space-y-3.5"
                >
                  {/* Active Indicator & Role Tag in Signature Purple */}
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded-sm bg-purple-50 border border-purple-200/80 text-purple-700 text-[11px] font-roboto-condensed font-bold tracking-wider">
                      {activeSpecialist.number} of 03
                    </span>
                    <span className="text-purple-600 font-roboto-condensed font-bold text-xs tracking-wider uppercase">
                      {activeSpecialist.role}
                    </span>
                  </div>

                  {/* Specialist Name */}
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 font-roboto-condensed tracking-tight">
                    {activeSpecialist.name}
                  </h3>

                  {/* One-Liner Credentials */}
                  <div className="text-xs sm:text-sm font-roboto-condensed font-bold text-slate-700 pb-1 border-b border-slate-100">
                    {activeSpecialist.credentials}
                  </div>

                  {/* Deep Bio Description */}
                  <p className="text-slate-600 font-roboto-condensed text-xs sm:text-sm leading-relaxed font-normal">
                    {activeSpecialist.bio}
                  </p>

                  {/* Live Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {activeSpecialist.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2 rounded-sm bg-slate-50 border border-slate-200/80 flex flex-col"
                      >
                        <span className="text-sm font-black font-roboto-condensed text-slate-900">
                          {metric.value}
                        </span>
                        <span className="text-[10px] font-roboto-condensed font-medium text-slate-500 uppercase tracking-tight truncate">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeSpecialist.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-sm bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-roboto-condensed font-semibold hover:border-purple-300 hover:text-purple-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: 3 THIN RECTANGLE CARDS (EXPANDS FULL ON HOVER) */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 h-[360px] sm:h-[420px] lg:h-[460px] flex gap-3 sm:gap-4 w-full">
            {specialists.map((specialist, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={specialist.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative rounded-md overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between border ${
                    isActive
                      ? "flex-[3.2] sm:flex-[3.4] border-purple-600 shadow-2xl shadow-purple-950/25"
                      : "flex-[0.7] sm:flex-[0.8] border-slate-300 hover:border-slate-400 bg-slate-900 shadow-md"
                  }`}
                >
                  {/* 1. Full Image Background */}
                  <div className="absolute inset-0 w-full h-full bg-[#0E0725]">
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={`object-cover object-top transition-all duration-700 ${
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-105 opacity-45 hover:opacity-65 grayscale-[25%]"
                      }`}
                      priority={idx === 0}
                    />

                    {/* Gradient overlay for readability */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        isActive
                          ? "bg-gradient-to-t from-[#0E0725] via-[#0E0725]/30 to-transparent"
                          : "bg-black/50 hover:bg-black/30"
                      }`}
                    />
                  </div>

                  {/* 2. Collapsed View: Vertical Sleek Strip Label */}
                  {!isActive && (
                    <div className="relative z-10 w-full h-full p-3 flex flex-col justify-between items-center select-none">
                      <span className="font-roboto-condensed font-bold text-xs text-purple-400">
                        {specialist.number}
                      </span>

                      {/* Rotated Name for Thin Rectangles */}
                      <span
                        className="font-roboto-condensed font-black text-xs sm:text-sm tracking-wider uppercase text-slate-300 whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {specialist.name}
                      </span>

                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400/60" />
                    </div>
                  )}

                  {/* 3. Expanded View: Rich Card Footer Overlay in Purple Theme */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 }}
                      className="relative z-10 p-4 sm:p-5 flex flex-col justify-end h-full select-none"
                    >
                      {/* Top badge on expanded photo */}
                      <div className="mb-auto">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-black/60 backdrop-blur-md border border-purple-400/30 text-[11px] font-roboto-condensed font-bold text-purple-300 uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                          <span>Active Focus • {specialist.role.split(" ")[0]}</span>
                        </span>
                      </div>

                      {/* Bottom Info on the Image */}
                      <div className="space-y-1">
                        <div className="text-purple-300 font-roboto-condensed font-bold text-xs uppercase tracking-wider">
                          {specialist.role}
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-black text-white font-roboto-condensed tracking-tight">
                          {specialist.name}
                        </h4>
                        <p className="text-slate-300 text-xs font-roboto-condensed line-clamp-1">
                          {specialist.credentials}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Consultation Bar */}
        <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-roboto-condensed text-slate-500 shrink-0">
          <span className="tracking-wide uppercase font-semibold text-[11px] sm:text-xs">
            Direct Architecture Sessions &amp; Production Contracts Available
          </span>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-700 font-bold uppercase tracking-wider transition-colors cursor-pointer group text-[11px] sm:text-xs"
          >
            <span>Schedule Architecture Advisory</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
