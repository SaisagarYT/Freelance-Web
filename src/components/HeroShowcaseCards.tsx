"use client";

import React, { useState } from "react";
import { TrendingUp, ArrowUpRight, Zap, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

export const HeroShowcaseCards = () => {
  const [activeProject, setActiveProject] = useState<"analytics" | "ecommerce" | "cloud">("analytics");

  const projectData = {
    analytics: {
      name: "Quantum Analytics Engine",
      stat: "99%",
      statLabel: "Revenue & Telemetry Growth",
      detail: "Ultra-fast telemetry pipeline handling 250k daily events with sub-20ms query latency.",
      bars: [30, 45, 60, 52, 78, 65, 85, 92, 99],
      tag: "Next.js 15 • ClickHouse • Redis",
    },
    ecommerce: {
      name: "Aura Headless Storefront",
      stat: "3.4x",
      statLabel: "Checkout Velocity",
      detail: "Kinetic headless retail architecture with instantaneous cart updates and Stripe integration.",
      bars: [25, 40, 55, 65, 70, 80, 88, 93, 98],
      tag: "Next.js • TailwindCSS • Stripe",
    },
    cloud: {
      name: "Vertex Microservice Mesh",
      stat: "<15ms",
      statLabel: "API Response Time",
      detail: "Autonomous microservice orchestration canvas with optimistic UI updates and zero downtime.",
      bars: [40, 50, 60, 75, 82, 85, 90, 95, 100],
      tag: "React 19 • Python • Docker",
    },
  };

  const current = projectData[activeProject];

  return (
    <section className="w-full bg-white pt-6 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Card: Exactly matching the "Revenue Growth 99%" card from the reference image */}
        <div className="lg:col-span-7 rounded-[32px] bg-gradient-to-b from-blue-50/70 to-slate-50/50 border border-blue-100/80 p-8 sm:p-10 card-soft-shadow flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full pointer-events-none" />

          <div>
            {/* Top Project Selector Tabs */}
            <div className="flex items-center justify-between pb-6 border-b border-blue-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                  Featured Case Study
                </span>
              </div>

              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-xs text-xs font-medium">
                {(["analytics", "ecommerce", "cloud"] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveProject(key)}
                    className={`px-3 py-1 rounded-lg transition-all capitalize cursor-pointer ${activeProject === key
                        ? "bg-blue-600 text-white font-semibold shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Inner White Metric Card (Matching the Reference) */}
            <div className="mt-8 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Revenue Growth
              </div>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight">
                  {current.stat}
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/80">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {current.statLabel}
                </span>
              </div>

              {/* Sparkline Visualizer */}
              <div className="h-20 w-full flex items-end gap-2 pt-6">
                {current.bars.map((bar, i) => (
                  <div key={i} className="flex-1 bg-slate-100 rounded-t-md h-full flex items-end">
                    <div
                      className="w-full bg-gradient-to-t from-blue-600 to-indigo-400 rounded-t-md transition-all duration-500"
                      style={{ height: `${bar}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-slate-900">
                {current.name}
              </h3>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                {current.detail}
              </p>
              <div className="text-xs font-mono text-blue-600 font-medium mt-3">
                {current.tag}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-blue-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Verified Performance Metric
            </span>
            <a
              href="#projects"
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn"
            >
              <span>Explore Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Card: Matching the Right Card with Radial Concentric Rings Beacon */}
        <div className="lg:col-span-5 rounded-[32px] bg-gradient-to-b from-slate-50/80 to-blue-50/40 border border-slate-200 p-8 sm:p-10 card-soft-shadow flex flex-col justify-between relative overflow-hidden">
          {/* Glowing Concentric Radial Beacon (Exactly like the circular beacon icon in the reference image) */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-blue-100/70 border border-blue-200 flex items-center justify-center relative">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-300 flex items-center justify-center animate-pulse">
                <div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_12px_#2563EB]" />
              </div>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mt-6 tracking-tight">
              Surgical Precision &amp; 100/100 Core Web Vitals
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Every interface is built with obsessive attention to latency, layout stability, and fluid client-side physics.
            </p>
          </div>

          {/* Metric Stats Pills */}
          <div className="space-y-3 my-8">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-semibold text-slate-700">Time to First Byte (TTFB)</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-900">&lt; 85ms</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-semibold text-slate-700">Google Lighthouse Score</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-600">100 / 100</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                <span className="text-xs font-semibold text-slate-700">Frame Budget</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-900">60 FPS Stable</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
            <span>Client Satisfaction Rate</span>
            <span className="font-bold text-slate-900 font-mono">100% Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};
