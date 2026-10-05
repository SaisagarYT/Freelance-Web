"use client";

import React from "react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Icon } from "@iconify/react";

interface TechArsenalSectionProps {
  onContactClick?: () => void;
}

interface TechnologyItem {
  name: string;
  icon: string;
}

export const TechArsenalSection = ({ onContactClick }: TechArsenalSectionProps) => {
  // Row 1: Frontend, Mobile, Web & Client Systems (Moving Left)
  const row1Technologies: TechnologyItem[] = [
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "Flutter", icon: "logos:flutter" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "React", icon: "logos:react" },
    { name: "Tailwind", icon: "logos:tailwindcss-icon" },
    { name: "Supabase", icon: "logos:supabase-icon" },
    { name: "Dart", icon: "logos:dart" },
    { name: "GraphQL", icon: "logos:graphql" },
    { name: "Figma", icon: "logos:figma" },
    { name: "Vite", icon: "logos:vitejs" },
    { name: "Swift", icon: "logos:swift" },
  ];

  // Row 2: Backend, Cloud, Databases & DevOps (Moving Right)
  const row2Technologies: TechnologyItem[] = [
    { name: "Python", icon: "logos:python" },
    { name: "Docker", icon: "logos:docker-icon" },
    { name: "PostgreSQL", icon: "logos:postgresql" },
    { name: "AWS", icon: "logos:aws" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "Redis", icon: "logos:redis" },
    { name: "Firebase", icon: "logos:firebase" },
    { name: "Stripe", icon: "logos:stripe" },
    { name: "Kubernetes", icon: "logos:kubernetes" },
    { name: "GitHub", icon: "logos:github-icon" },
    { name: "Go", icon: "logos:go" },
  ];

  // Quadruple arrays so 50% translation exceeds 4500px, ensuring zero gaps even on 4K ultrawide monitors
  const row1Repeated = [
    ...row1Technologies,
    ...row1Technologies,
    ...row1Technologies,
    ...row1Technologies,
  ];
  const row2Repeated = [
    ...row2Technologies,
    ...row2Technologies,
    ...row2Technologies,
    ...row2Technologies,
  ];

  return (
    <section
      id="tech-stack"
      className="w-full py-20 sm:py-28 bg-white border-b border-slate-100 relative z-20 overflow-hidden"
    >
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-slate-100">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200/80 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Modern Technology Arsenal</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-roboto-condensed tracking-tight text-slate-950 leading-tight">
              Founders, scale-ups &amp; modern engineering teams partner with KIZEN SOLVES
            </h3>
            <p className="text-slate-500 text-sm sm:text-base mt-2 font-medium font-roboto-condensed">
              Battle-tested tools and frameworks we leverage to architect high-velocity digital products.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-sm font-bold font-roboto-condensed transition-all duration-200 shadow-lg shadow-slate-950/20 active:scale-95 group cursor-pointer"
            >
              <span>Start a Project</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10B981]" />
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* DUAL MOVING MARQUEE TRACKS WITH FOGGY BLURRED END BLENDS */}
      <div className="w-full relative mt-10 sm:mt-12 overflow-hidden py-4">
        {/* Ambient Subtle Center Glow Behind Marquee for Contrast & Depth */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-56 bg-gradient-to-r from-transparent via-purple-100/40 to-transparent blur-3xl pointer-events-none" 
        />

        {/* LEFT FOGGY BLURRED BLEND EFFECT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-36 sm:w-60 md:w-80 lg:w-96 z-30 flex items-stretch"
        >
          {/* Backdrop Blur + Progressive Mask that softens tiles smoothly into fog */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-white/40 to-transparent backdrop-blur-[6px] [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.85)_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.85)_40%,transparent_100%)]" />
          {/* Solid White feather at outer border */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white via-white/95 to-transparent" />
        </div>

        {/* RIGHT FOGGY BLURRED BLEND EFFECT */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-36 sm:w-60 md:w-80 lg:w-96 z-30 flex items-stretch"
        >
          {/* Backdrop Blur + Progressive Mask that softens tiles smoothly into fog */}
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/90 via-white/40 to-transparent backdrop-blur-[6px] [mask-image:linear-gradient(to_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0.85)_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,rgba(0,0,0,1)_0%,rgba(0,0,0,0.85)_40%,transparent_100%)]" />
          {/* Solid White feather at outer border */}
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white via-white/95 to-transparent" />
        </div>

        {/* Track 1: Moving Left (Continuous, No Stutters, Hardware-Accelerated) */}
        <div className="flex w-max mb-4 sm:mb-5">
          <div className="animate-marquee-left flex gap-3.5 sm:gap-4.5 w-max">
            {row1Repeated.map((tech, idx) => (
              <MarqueeTile key={`row1-${idx}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Track 2: Moving Right in Opposite Direction (Continuous, No Stutters) */}
        <div className="flex w-max">
          <div className="animate-marquee-right flex gap-3.5 sm:gap-4.5 w-max">
            {row2Repeated.map((tech, idx) => (
              <MarqueeTile key={`row2-${idx}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar with Guarantees */}
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 sm:pt-10 text-slate-700 text-sm border-t border-slate-100 mt-8 sm:mt-12">
          <p className="max-w-2xl font-medium font-roboto-condensed leading-relaxed text-slate-600 text-sm sm:text-base">
            From high-velocity Flutter mobile applications to mission-critical Next.js cloud platforms, KIZEN SOLVES delivers end-to-end digital excellence modern founders can count on.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-bold font-roboto-condensed text-slate-900 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-purple-700 stroke-[3]" />
              </div>
              <span>60 FPS Native &amp; Web</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-purple-700 stroke-[3]" />
              </div>
              <span>100% Type-Safe Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-purple-700 stroke-[3]" />
              </div>
              <span>Direct Founder Engineering</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Refined Sleek Uniform Icon Pod (No Box-in-a-Box, No Text Clutter, Balanced Proportions)
const MarqueeTile = ({ tech }: { tech: TechnologyItem }) => {
  return (
    <div className="shrink-0 w-[84px] h-[84px] sm:w-[96px] sm:h-[96px] rounded-2xl bg-white border border-slate-200/90 hover:border-purple-400 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_24px_-8px_rgba(147,51,234,0.18)] transition-all duration-200 flex flex-col items-center justify-center gap-1.5 sm:gap-2 group cursor-default select-none hover:-translate-y-1 hover:scale-105">
      {/* Official High-Resolution Iconify Logo (No Inner Box!) */}
      <Icon
        icon={tech.icon}
        className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-200 group-hover:scale-115 shrink-0"
      />

      {/* Crisp Tech Name Only (No clunky taglines!) */}
      <span className="text-[11px] sm:text-xs font-bold font-roboto-condensed text-slate-800 group-hover:text-purple-700 transition-colors tracking-tight text-center truncate max-w-[80px]">
        {tech.name}
      </span>
    </div>
  );
};
