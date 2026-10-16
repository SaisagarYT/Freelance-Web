"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Quote,
  ArrowUpRight,
} from "lucide-react";

export interface ClientStory {
  id: string;
  code: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  metricBadge: string;
  metricValue: string;
  metricLabel: string;
  stack: string[];
  duration: string;
  authId: string;
}

export const CLIENT_STORIES: ClientStory[] = [
  {
    id: "story-gary",
    code: "EXEC_01",
    name: "Gary Chen",
    role: "VP of Engineering",
    company: "Horizon Cloud",
    avatar: "/images/work/client_gary.jpg",
    quote:
      "Kaizen didn't just build our web client; they re-architected our micro-frontend routing and brought our global P99 latency down to 14ms. The craft, typographic precision, and code cleanliness is something you rarely see outside elite Silicon Valley design studios.",
    metricBadge: "LATENCY DROP",
    metricValue: "-64%",
    metricLabel: "Global P99 Edge Latency",
    stack: ["Next.js 15", "Turbopack", "TailwindCSS", "Edge Functions"],
    duration: "4 Weeks Delivery",
    authId: "KZ-HZ-9281",
  },
  {
    id: "story-anny",
    code: "EXEC_02",
    name: "Anny Sterling",
    role: "Founder & CEO",
    company: "Solaria AI",
    avatar: "/images/work/client_anny.jpg",
    quote:
      "Investors were blown away by the fluidity of our interactive node canvas and 60FPS UI shaders. Kaizen delivered a production-grade software rig that directly helped us secure our $14M Series A within 45 days of launch.",
    metricBadge: "VENTURE IMPACT",
    metricValue: "$14M",
    metricLabel: "Series A Secured Post-Launch",
    stack: ["React", "WebGL Shaders", "TypeScript", "TailwindCSS"],
    duration: "6 Weeks Delivery",
    authId: "KZ-SL-4019",
  },
  {
    id: "story-betty",
    code: "EXEC_03",
    name: "Betty Sandoval",
    role: "Head of Product",
    company: "Synapse OS",
    avatar: "/images/work/client_betty.jpg",
    quote:
      "The architectural design language and tactile micro-interactions turned what could have been a dry developer tool into an addictive, delightful experience. Our user activation jumped 3.4x in the very first cohort.",
    metricBadge: "ACTIVATION SURGE",
    metricValue: "3.4x",
    metricLabel: "User Onboarding Velocity",
    stack: ["Next.js 15", "Framer Motion", "PostgreSQL", "Radix UI"],
    duration: "3 Weeks Delivery",
    authId: "KZ-SY-8832",
  },
  {
    id: "story-izzy",
    code: "EXEC_04",
    name: "Izzy Rodriguez",
    role: "Chief Technology Officer",
    company: "Vault Flow",
    avatar: "/images/work/client_izzy.jpg",
    quote:
      "Finding engineers who combine high-fidelity UI choreography with rigorous, zero-downtime distributed systems is almost impossible. Kaizen bridged that gap effortlessly. They operate like an elite in-house founding team.",
    metricBadge: "SYSTEM SCALE",
    metricValue: "$85M+",
    metricLabel: "Annual Flow Processed",
    stack: ["Rust Core", "Next.js 15", "TailwindCSS", "Distributed Cache"],
    duration: "5 Weeks Delivery",
    authId: "KZ-VF-7120",
  },
];

interface WorkClientStoriesProps {
  onContactClick?: () => void;
}

export const WorkClientStories: React.FC<WorkClientStoriesProps> = ({ onContactClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = CLIENT_STORIES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? CLIENT_STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === CLIENT_STORIES.length - 1 ? 0 : prev + 1));
  };

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
        {/* SECTION HEADER & ARCHITECTURAL METADATA (NO // OR YEARS) */}
        <div className="mb-10 sm:mb-14 pb-6 border-b border-[#E2DCF0] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>VERIFIED EXECUTIVE REPUTATION</span>
            </div>
            <h2 className="font-roboto-condensed font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-950 uppercase">
              WHAT FOUNDERS & LEADERS SAY
            </h2>
          </div>

          {/* Quick Navigator & Live Stats */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>100% VERIFIED PARTNERSHIPS</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-slate-500 font-bold mr-1">
                <span className="text-purple-700 font-extrabold">0{activeIndex + 1}</span> / 0{CLIENT_STORIES.length}
              </span>
              <button
                onClick={handlePrev}
                aria-label="Previous executive story"
                className="w-9 h-9 rounded-xl bg-white border border-[#E2DCF0] text-slate-700 hover:text-purple-700 hover:border-purple-300 transition-all flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next executive story"
                className="w-9 h-9 rounded-xl bg-white border border-[#E2DCF0] text-slate-700 hover:text-purple-700 hover:border-purple-300 transition-all flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP ACCORDION STRUCTURE */}
        <div className="hidden lg:flex gap-4 h-[500px] w-full">
          {CLIENT_STORIES.map((story, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={story.id}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border flex flex-col justify-between ${
                  isActive
                    ? "flex-[3.8] bg-white border-purple-500 shadow-[0_20px_50px_rgba(147,51,234,0.08)] ring-1 ring-purple-500/20"
                    : "flex-[0.9] bg-white/70 hover:bg-white border-[#E2DCF0] hover:border-purple-300 shadow-xs"
                }`}
              >
                {/* Corner Crosshairs */}
                <div
                  className={`absolute top-3 right-3 transition-opacity ${
                    isActive ? "text-purple-400 opacity-80" : "text-slate-300 opacity-40"
                  }`}
                >
                  <Plus className="w-3.5 h-3.5 stroke-[1.5]" />
                </div>

                {isActive ? (
                  <div className="h-full w-full overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.22, delay: 0.08 }}
                      className="h-full p-8 xl:p-10 flex flex-col justify-between min-w-[560px] xl:min-w-[620px]"
                    >
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span>VERIFIED CONTRACT</span>
                          </span>
                          <span className="font-mono text-[10px] text-slate-400 font-bold">
                            {story.authId}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                          ))}
                        </div>
                      </div>

                      {/* Main Center Stage: Spacious Two-Column Presentation */}
                      <div className="grid grid-cols-12 gap-8 my-auto py-4 items-center">
                        {/* Left Column: Executive Identity & Audited Result */}
                        <div className="col-span-5 space-y-4 pr-4 border-r border-slate-100">
                          <div className="flex items-center gap-4">
                            <div className="relative w-18 h-18 rounded-2xl overflow-hidden border-2 border-purple-200 shadow-sm shrink-0">
                              <Image
                                src={story.avatar}
                                alt={story.name}
                                fill
                                className="object-cover"
                                sizes="80px"
                              />
                            </div>
                            <div>
                              <h3 className="font-roboto-condensed font-black text-2xl text-slate-950 uppercase tracking-tight leading-tight">
                                {story.name}
                              </h3>
                              <p className="font-mono text-xs text-purple-700 font-bold uppercase mt-0.5">
                                {story.role}
                              </p>
                              <p className="font-mono text-[11px] text-slate-400 font-medium">
                                {story.company}
                              </p>
                            </div>
                          </div>

                          {/* Distinct ROI Highlight Box */}
                          <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200/80">
                            <span className="font-mono text-[9px] font-bold text-purple-700 uppercase tracking-wider block mb-1">
                              {story.metricBadge}
                            </span>
                            <span className="font-roboto-condensed font-black text-3xl text-slate-950 tracking-tight block leading-none">
                              {story.metricValue}
                            </span>
                            <span className="font-roboto-condensed font-medium text-xs text-slate-600 uppercase block mt-1">
                              {story.metricLabel}
                            </span>
                          </div>
                        </div>

                        {/* Right Column: Breathable Editorial Quote */}
                        <div className="col-span-7 pl-2 space-y-3">
                          <div className="w-7 h-7 rounded-lg bg-purple-100/70 flex items-center justify-center text-purple-700">
                            <Quote className="w-4 h-4" />
                          </div>

                          <blockquote className="font-roboto-condensed font-medium text-base lg:text-[17px] text-slate-700 leading-relaxed">
                            &ldquo;{story.quote}&rdquo;
                          </blockquote>

                          <div className="pt-2 text-xs font-mono text-slate-400">
                            DEPLOYMENT CADENCE: <span className="font-bold text-slate-700">{story.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Footer Row: Stack Badges & CTA */}
                      <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest mr-1">
                            PRODUCTION STACK:
                          </span>
                          {story.stack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={onContactClick}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-roboto-condensed font-bold text-xs uppercase tracking-wider transition-all shadow-xs active:scale-95 group shrink-0 cursor-pointer"
                        >
                          <span>BUILD SIMILAR</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div className="p-5 h-full flex flex-col justify-between items-center text-center">
                    {/* Top: Avatar */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 shadow-xs mb-2">
                        <Image
                          src={story.avatar}
                          alt={story.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                          sizes="56px"
                        />
                      </div>
                      <span className="font-mono text-[9px] font-bold text-purple-700 uppercase tracking-wider">
                        {story.code}
                      </span>
                    </div>

                    {/* Middle: Clean Horizontal Identity */}
                    <div className="my-auto py-2">
                      <h4 className="font-roboto-condensed font-black text-sm text-slate-900 uppercase tracking-tight leading-snug">
                        {story.name}
                      </h4>
                      <p className="font-mono text-[10px] text-slate-400 font-semibold truncate max-w-[90px] mx-auto mt-0.5">
                        {story.company}
                      </p>
                    </div>

                    {/* Bottom: High-Contrast ROI Pill */}
                    <div className="w-full py-2.5 px-1.5 rounded-xl bg-purple-50/60 border border-purple-200/70 group-hover:bg-purple-100/60 transition-colors">
                      <span className="font-roboto-condensed font-black text-base text-slate-950 block leading-none">
                        {story.metricValue}
                      </span>
                      <span className="font-mono text-[8px] text-purple-700 font-bold uppercase tracking-wider block mt-1 truncate">
                        {story.metricBadge}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MOBILE & TABLET RESPONSIVE VIEW */}
        <div className="lg:hidden space-y-5">
          <div className="p-6 rounded-2xl bg-white border border-purple-500/40 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>VERIFIED CONTRACT</span>
              </span>
              <span className="font-mono text-[10px] text-slate-400 font-bold">
                {activeStory.authId}
              </span>
            </div>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-purple-200 shrink-0">
                <Image
                  src={activeStory.avatar}
                  alt={activeStory.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <h3 className="font-roboto-condensed font-black text-xl text-slate-950 uppercase tracking-tight">
                  {activeStory.name}
                </h3>
                <p className="font-mono text-xs text-purple-700 font-bold uppercase">
                  {activeStory.role} · {activeStory.company}
                </p>
              </div>
            </div>

            <blockquote className="font-roboto-condensed font-medium text-sm text-slate-700 leading-relaxed mb-5">
              &ldquo;{activeStory.quote}&rdquo;
            </blockquote>

            <div className="p-3.5 rounded-xl bg-purple-50/70 border border-purple-200 mb-5 flex items-center justify-between">
              <div>
                <span className="font-mono text-[9px] font-bold text-purple-700 uppercase">
                  {activeStory.metricBadge}
                </span>
                <span className="font-roboto-condensed font-black text-2xl text-slate-950 block leading-tight">
                  {activeStory.metricValue}
                </span>
              </div>
              <span className="font-roboto-condensed text-xs text-slate-600 uppercase font-medium text-right max-w-[140px]">
                {activeStory.metricLabel}
              </span>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 mb-5">
              {activeStory.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              onClick={onContactClick}
              className="w-full py-2.5 rounded-xl bg-purple-600 text-white font-roboto-condensed font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>BUILD SIMILAR</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4-Leader Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CLIENT_STORIES.map((story, i) => (
              <button
                key={story.id}
                onClick={() => setActiveIndex(i)}
                className={`p-2.5 rounded-xl border text-left flex items-center gap-2 transition-all cursor-pointer ${
                  i === activeIndex
                    ? "bg-white border-purple-600 shadow-xs ring-1 ring-purple-600/10"
                    : "bg-white/60 border-[#E2DCF0] hover:bg-white"
                }`}
              >
                <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src={story.avatar}
                    alt={story.name}
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-roboto-condensed font-bold text-xs text-slate-950 truncate uppercase leading-tight">
                    {story.name}
                  </div>
                  <div className="font-mono text-[9px] text-purple-700 font-bold truncate">
                    {story.metricValue}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
