"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TabbedFolderProjects } from "@/components/TabbedFolderProjects";

export default function WorkPage() {
  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    contactElem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#F7F5FC] text-slate-900 flex flex-col relative overflow-x-hidden selection:bg-purple-600 selection:text-white">
      {/* Detachable Fixed Island Dock Navbar */}
      <Navbar onContactClick={scrollToContact} />

      {/* ============================================================ */}
      {/* FULL-SCREEN ARCHITECTURAL VIOLETISH-WHITE GRID HERO SECTION  */}
      {/* Exact replica of the reference design on a violetish-white   */}
      {/* architectural grid canvas with zero dark gradient colors     */}
      {/* ============================================================ */}
      <section
        className="w-full min-h-screen h-screen relative flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-20 py-6 sm:py-10 select-none overflow-hidden"
        style={{
          backgroundColor: "#F7F5FC",
          backgroundImage: `
            linear-gradient(to right, rgba(147, 51, 234, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      >
        {/* Full-Screen Vertical Architectural Column Grid Dividers (10 Columns) */}
        <div className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-full border-r border-[#E2DCF0]/80 last:border-r-0"
            />
          ))}
        </div>

        {/* TOP ARCHITECTURAL METADATA ROW (with clearance for fixed floating Navbar) */}
        <div className="relative z-10 w-full pt-18 sm:pt-22 md:pt-24 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-roboto-condensed font-black tracking-wider text-base sm:text-xl text-slate-950 uppercase">
              KAIZEN_
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] sm:text-[11px] text-purple-800/80 uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-purple-100/60 border border-purple-200/50">
              HI-END DEVELOPMENT
            </span>
          </div>

          {/* Right Status Specification */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="hidden sm:inline">INDEXED PRODUCTION ARCHIVE</span>
            <span className="sm:hidden">ARCHIVE</span>
            <span className="text-slate-400">// 2026</span>
          </div>
        </div>

        {/* MAIN HERO CONTENT AREA */}
        <div className="relative z-10 my-auto py-6 flex flex-col justify-center">
          {/* Monumental Headline */}
          <h1 className="font-roboto-condensed font-black tracking-tight text-slate-950 text-5xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[124px] leading-[0.92] uppercase">
            FROM<br />
            IDEA TO FINISHED<br />
            PRODUCT<span className="text-purple-600 animate-pulse">_</span>
          </h1>

          {/* Bottom-Right Positioned Monospace Subtext */}
          <div className="w-full flex justify-end pt-4 sm:pt-6 md:pt-8 pr-2 sm:pr-6">
            <p className="font-mono text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-[290px] sm:max-w-[360px] md:max-w-[400px]">
              We start work immediately and you&apos;ll have weekly check-ins.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR: Crosshair & Social Handles */}
        <div className="relative z-10 w-full flex items-end justify-between pb-2 sm:pb-4">
          <div className="flex items-center gap-6 text-slate-500 font-mono text-xs sm:text-sm font-semibold">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-950 transition-colors"
            >
              in
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-950 transition-colors"
            >
              f
            </a>
          </div>

          {/* Architectural Crosshair Marker */}
          <div className="text-purple-400">
            <Plus className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: CURATED PRODUCTION PORTFOLIO ARCHIVE              */}
      {/* Real flagship projects built with this exact architectural rig */}
      {/* ============================================================ */}
      <section
        className="w-full bg-[#F7F5FC] border-t border-[#E2DCF0] py-16 sm:py-24 px-4 sm:px-8 lg:px-14 relative"
        style={{
          backgroundColor: "#F7F5FC",
          backgroundImage: `
            linear-gradient(to right, rgba(147, 51, 234, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DCF0]">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>INDEXED WORKS & SYSTEMS</span>
              </div>
              <h2 className="font-roboto-condensed font-black text-3xl sm:text-5xl tracking-tight text-slate-950 uppercase">
                ENGINEERED FOR COMPOUNDING SCALE
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-slate-600 max-w-md">
              Full-stack SaaS applications, fluid interactive systems, and production platforms built for speed, resiliency, and conversion.
            </p>
          </div>

          {/* Skeuomorphic Tabbed Folder Projects UI matching reference design */}
          <div className="pt-4">
            <TabbedFolderProjects onContactClick={scrollToContact} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onContactClick={scrollToContact} />
    </main>
  );
}
