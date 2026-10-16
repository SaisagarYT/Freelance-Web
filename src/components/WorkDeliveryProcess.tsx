"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Plus, CheckCircle2, Cpu, ArrowUpRight } from "lucide-react";

interface DeliveryPillar {
  code: string;
  stepNumber: string;
  phase: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
  telemetryTag: string;
}

const DELIVERY_PILLARS: DeliveryPillar[] = [
  {
    code: "CADENCE_01",
    stepNumber: "01",
    phase: "ARCHITECTURAL BLUEPRINT",
    title: "DAY-ZERO SPEC & CLICKABLE RIG",
    timeline: "Days 1 — 5",
    description:
      "We don't do weeks of theoretical meetings. We audit existing systems, map database models, establish Tailwind design tokens, and deploy an interactive clickable Next.js scaffold in the first 5 days.",
    deliverables: [
      "System Schema & Edge Route Architecture",
      "Interactive Next.js & Tailwind Scaffold",
      "API Contract & TypeScript Data Interfaces",
      "Component Library & Motion Specification",
    ],
    telemetryTag: "RAPID ALIGNMENT",
  },
  {
    code: "CADENCE_02",
    stepNumber: "02",
    phase: "BI-WEEKLY SPRINTS",
    title: "CONTINUOUS EDGE DEPLOYMENTS",
    timeline: "2-Week Cycles",
    description:
      "Direct engineer-to-founder Slack communication without non-technical project manager bottlenecks. Every single Git commit generates an isolated staging link for immediate stakeholder testing.",
    deliverables: [
      "Direct Engineer-in-the-Loop Slack Channel",
      "Automated Isolated Preview URLs",
      "Asynchronous Video Walkthroughs",
      "Bi-Weekly Demo & Milestone Review",
    ],
    telemetryTag: "ZERO BUREAUCRACY",
  },
  {
    code: "CADENCE_03",
    stepNumber: "03",
    phase: "HARDENING & OPTIMIZATION",
    title: "P99 LATENCY & LIGHTHOUSE 98+ AUDIT",
    timeline: "Final Sprint",
    description:
      "Before production traffic hits, we stress-test microservices, optimize asset caching headers, enforce zero layout shifts, and audit cross-device 60FPS gesture smoothness.",
    deliverables: [
      "Sub-20ms Edge Routing & DB Query Profiling",
      "Lighthouse 98+ Core Web Vitals Across Mobile & Desktop",
      "OWASP Security & Token Auth Verification",
      "Cross-Browser Touch & Gesture Certification",
    ],
    telemetryTag: "ZERO TECHNICAL DEBT",
  },
  {
    code: "CADENCE_04",
    stepNumber: "04",
    phase: "PRODUCTION LAUNCH",
    title: "ZERO-DOWNTIME ROLLOUT & FULL IP TRANSFER",
    timeline: "Launch & 30D SLA",
    description:
      "Seamless DNS cutover with automatic rollback guarantees. You receive 100% clean Git repository ownership, comprehensive architecture docs, and 30 days of post-launch warranty support.",
    deliverables: [
      "Zero-Downtime Multi-Region DNS Cutover",
      "100% Git Repository & IP Rights Handoff",
      "Architecture Documentation & Ops Runbook",
      "30-Day Post-Launch Warranty & Hotfix SLA",
    ],
    telemetryTag: "100% CLIENT OWNED",
  },
];

/**
 * Pixelated Wave Transition Canvas
 * Renders a traveling wave of digital voxels sweeping from bottom-right to top-left.
 * Once the wave passes, all voxels cleanly dissolve away, leaving a pristine solid luxury dark surface.
 */
const PixelatedCardBackground: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);
  const progressRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    const setupCanvas = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    const resizeObserver = new ResizeObserver(() => {
      setupCanvas();
    });
    resizeObserver.observe(canvas);

    // Ultra-fine 5px micro-pixel matrix for high-density, luxury holographic finish
    const PIXEL_SIZE = 5;

    const render = () => {
      const speed = isHovered ? 0.048 : 0.075;
      if (isHovered) {
        // Progress reaches 1.25 to guarantee the wave sweeps completely past the top-left edge
        progressRef.current = Math.min(progressRef.current + speed, 1.25);
      } else {
        progressRef.current = Math.max(progressRef.current - speed * 1.5, 0);
      }

      const p = progressRef.current;
      ctx.clearRect(0, 0, width, height);

      // Only draw the wave while it is actively sweeping across
      if (p > 0 && p < 1.2) {
        const cols = Math.ceil(width / PIXEL_SIZE);
        const rows = Math.ceil(height / PIXEL_SIZE);
        const maxDist = cols + rows;

        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            // Distance from bottom-right (cols-1, rows-1) to top-left (0, 0)
            const dist = (cols - 1 - c) + (rows - 1 - r);
            const normalizedDist = dist / maxDist; // 0 at bottom-right, 1 at top-left

            // Deterministic jitter for fine organic micro-dissolve
            const noise = ((Math.sin(c * 17.1 + r * 31.7) * 43758.5453) % 1) * 0.15;
            const threshold = normalizedDist * 0.85 + noise;

            const distFromWave = p - threshold;

            // Active wave band: micro-pixels appear and then cleanly dissolve as the wave passes
            if (distFromWave > 0 && distFromWave < 0.22) {
              const x = c * PIXEL_SIZE;
              const y = r * PIXEL_SIZE;

              // Smoothly fade out voxels behind the leading edge
              const alpha = Math.max(0, 1 - distFromWave / 0.22);

              if (distFromWave < 0.07) {
                // Front edge: bright luminous electric lavender / cyber-spark
                ctx.fillStyle = `rgba(216, 180, 254, ${alpha * 0.95})`;
              } else {
                // Trailing voxels: deep purple pulse
                ctx.fillStyle = `rgba(168, 85, 247, ${alpha * 0.65})`;
              }

              ctx.fillRect(x + 0.5, y + 0.5, PIXEL_SIZE - 0.5, PIXEL_SIZE - 0.5);
            }
          }
        }
      }

      // Continue animation loop until wave exits completely
      if (
        (isHovered && progressRef.current < 1.25) ||
        (!isHovered && progressRef.current > 0)
      ) {
        animRef.current = requestAnimationFrame(render);
      }
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      resizeObserver.disconnect();
    };
  }, [isHovered]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl z-1"
    />
  );
};

interface WorkDeliveryProcessProps {
  onContactClick?: () => void;
}

export const WorkDeliveryProcess: React.FC<WorkDeliveryProcessProps> = ({ onContactClick }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      className="w-full bg-[#F7F5FC] border-t border-[#E2DCF0] py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-20 relative select-none"
      style={{
        backgroundColor: "#F7F5FC",
        backgroundImage: `
          linear-gradient(to right, rgba(147, 51, 234, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(147, 51, 234, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER & ARCHITECTURAL METADATA */}
        <div className="mb-12 sm:mb-16 pb-6 border-b border-[#E2DCF0] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>DELIVERY OPERATING SYSTEM</span>
            </div>
            <h2 className="font-roboto-condensed font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-950 uppercase">
              ENGINEERED VELOCITY WITHOUT CHAOS
            </h2>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
            <span className="hidden sm:inline">2-WEEK SPRINT CADENCE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span>ZERO-LOCK-IN PROTOCOL</span>
          </div>
        </div>

        {/* 4-PHASE ARCHITECTURAL SPRINT GRID WITH BOTTOM-RIGHT TO TOP PIXELATED HOVER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#E2DCF0] bg-white rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
          {DELIVERY_PILLARS.map((pillar, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={pillar.code}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E2DCF0] last:border-b-0 last:border-r-0 transition-all duration-500 group cursor-pointer overflow-hidden ${
                  isHovered
                    ? "bg-[#0C0824] shadow-[0_20px_50px_rgba(147,51,234,0.22)]"
                    : "bg-white"
                }`}
              >
                {/* 1. Canvas-Based Pixelated Wave (Sweeps from bottom-right to top, dissolves cleanly at finish) */}
                <PixelatedCardBackground isHovered={isHovered} />

                {/* 2. Ambient Radial Glow Overlay when Active */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 z-0 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background:
                      "radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.35) 0%, rgba(124, 58, 237, 0.15) 45%, transparent 75%)",
                  }}
                />

                {/* 3. Corner Crosshair Reticle (Rotates 90deg on Hover) */}
                <div
                  className={`absolute top-2.5 right-2.5 transition-all duration-300 z-10 ${
                    isHovered
                      ? "text-purple-400 rotate-90 opacity-100"
                      : "text-purple-300 opacity-60 group-hover:opacity-100"
                  }`}
                >
                  <Plus className="w-4 h-4 stroke-[1.5]" />
                </div>

                {/* Card Content (Relative z-10 for perfect contrast) */}
                <div className="relative z-10">
                  {/* Step Code & Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-mono text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                        isHovered ? "text-purple-300" : "text-slate-400"
                      }`}
                    >
                      {pillar.code}
                    </span>
                    <span
                      className={`font-mono text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider transition-all duration-300 ${
                        isHovered
                          ? "bg-purple-900/60 text-purple-200 border-purple-400/50"
                          : "bg-purple-100/70 text-purple-700 border-purple-200"
                      }`}
                    >
                      {pillar.telemetryTag}
                    </span>
                  </div>

                  {/* Step Timeline & Phase */}
                  <div className="mb-2">
                    <span
                      className={`font-mono text-xs font-bold uppercase tracking-wider block transition-colors duration-300 ${
                        isHovered ? "text-purple-300" : "text-purple-600"
                      }`}
                    >
                      {pillar.timeline}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest font-semibold block mt-0.5 transition-colors duration-300 ${
                        isHovered ? "text-slate-400" : "text-slate-400"
                      }`}
                    >
                      {pillar.phase}
                    </span>
                  </div>

                  {/* Title (Transitions from slate-950 to crisp white) */}
                  <h3
                    className={`font-roboto-condensed font-black text-xl sm:text-2xl uppercase tracking-tight mb-4 transition-colors duration-300 leading-tight ${
                      isHovered ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  {/* Description (Transitions to slate-300 on dark background) */}
                  <p
                    className={`font-roboto-condensed font-medium text-xs sm:text-[13.5px] leading-relaxed mb-6 transition-colors duration-300 ${
                      isHovered ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Deliverables Checklist (Relative z-10) */}
                <div
                  className={`pt-5 border-t space-y-2.5 relative z-10 transition-colors duration-300 ${
                    isHovered ? "border-purple-900/50" : "border-slate-100"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-widest block mb-1 transition-colors duration-300 ${
                      isHovered ? "text-purple-300" : "text-slate-400"
                    }`}
                  >
                    KEY DELIVERABLES:
                  </span>
                  {pillar.deliverables.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors duration-300 ${
                          isHovered ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      />
                      <span
                        className={`font-roboto-condensed font-medium leading-snug transition-colors duration-300 ${
                          isHovered ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM GUARANTEE DOCK */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2DCF0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100/80 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-roboto-condensed font-black text-lg sm:text-xl text-slate-950 uppercase tracking-tight">
                OUR ENGINEERING PLEDGE: 100% CODE OWNERSHIP
              </h4>
              <p className="font-roboto-condensed font-medium text-xs sm:text-sm text-slate-600">
                You own 100% of the repository, Figma source files, credentials, and infrastructure from Day 1. No vendor lock-in.
              </p>
            </div>
          </div>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-purple-900 text-white font-roboto-condensed font-bold text-sm uppercase tracking-wider transition-all shadow-md shrink-0 active:scale-95 group"
          >
            <span>DISCUSS YOUR SPRINT TIMELINE</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
