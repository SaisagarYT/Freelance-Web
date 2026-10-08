"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, GitPullRequest, Gauge, Terminal, CheckCircle2, Cpu, ArrowUpRight } from "lucide-react";

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
              <span>04 // DELIVERY OPERATING SYSTEM</span>
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

        {/* 4-PHASE ARCHITECTURAL SPRINT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#E2DCF0] bg-white rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(15,23,42,0.04)]">
          {DELIVERY_PILLARS.map((pillar, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={pillar.code}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E2DCF0] last:border-b-0 last:border-r-0 transition-colors duration-300 group ${
                  isHovered ? "bg-purple-50/40" : "bg-white"
                }`}
              >
                {/* Corner Crosshair Reticle */}
                <div className="absolute top-2 right-2 text-purple-300 opacity-60 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-3.5 h-3.5 stroke-[1.5]" />
                </div>

                <div>
                  {/* Step Code & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                      {pillar.code}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded border border-purple-200 uppercase tracking-wider">
                      {pillar.telemetryTag}
                    </span>
                  </div>

                  {/* Step Timeline & Phase */}
                  <div className="mb-2">
                    <span className="font-mono text-xs font-bold text-purple-600 uppercase tracking-wider block">
                      {pillar.timeline}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest font-semibold block mt-0.5">
                      {pillar.phase}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-roboto-condensed font-black text-xl sm:text-2xl text-slate-950 uppercase tracking-tight mb-4 group-hover:text-purple-700 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="font-roboto-condensed font-medium text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-5 border-t border-slate-100 space-y-2.5">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    KEY DELIVERABLES:
                  </span>
                  {pillar.deliverables.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-roboto-condensed font-medium leading-snug">{item}</span>
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
