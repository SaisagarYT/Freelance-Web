"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronLeft, ChevronRight, ShieldCheck, Star, Quote, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ClientStory {
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

const CLIENT_STORIES: ClientStory[] = [
  {
    id: "story-gary",
    code: "TESTIMONIAL_01",
    name: "Gary Chen",
    role: "VP of Engineering",
    company: "Horizon Cloud",
    avatar: "/images/work/client_gary.jpg",
    quote:
      "Kaizen didn't just build our web client; they re-architected our micro-frontend routing and brought our global P99 latency down to 14ms. The craft, typographic precision, and code cleanliness is something you rarely see outside of elite Silicon Valley design studios.",
    metricBadge: "LATENCY DROP",
    metricValue: "-64%",
    metricLabel: "Global P99 Edge Latency",
    stack: ["Next.js 15", "Turbopack", "TailwindCSS", "Edge Functions"],
    duration: "4 Weeks Delivery",
    authId: "KZ-HZ-9281",
  },
  {
    id: "story-anny",
    code: "TESTIMONIAL_02",
    name: "Anny Sterling",
    role: "Founder & CEO",
    company: "Solaria AI",
    avatar: "/images/work/client_anny.jpg",
    quote:
      "Investors were blown away by the fluidity of our interactive node canvas and 60FPS UI shaders. Kaizen delivered a production-grade software rig that helped us secure our $14M Series A within 45 days of launch.",
    metricBadge: "VENTURE IMPACT",
    metricValue: "$14M",
    metricLabel: "Series A Secured Post-Launch",
    stack: ["React", "WebGL Shaders", "TypeScript", "TailwindCSS"],
    duration: "6 Weeks Delivery",
    authId: "KZ-SL-4019",
  },
  {
    id: "story-betty",
    code: "TESTIMONIAL_03",
    name: "Betty Sandoval",
    role: "Head of Product",
    company: "Synapse OS",
    avatar: "/images/work/client_betty.jpg",
    quote:
      "The architectural design language and tactile micro-interactions turned what could have been a dry devtools workspace into an addictive, delightful experience. Our user activation jumped 3.4x in the very first cohort.",
    metricBadge: "ACTIVATION SURGE",
    metricValue: "3.4x",
    metricLabel: "User Onboarding Velocity",
    stack: ["Next.js", "Framer Motion", "PostgreSQL", "Radix UI"],
    duration: "3 Weeks Delivery",
    authId: "KZ-SY-8832",
  },
  {
    id: "story-izzy",
    code: "TESTIMONIAL_04",
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
        {/* SECTION HEADER & ARCHITECTURAL METADATA */}
        <div className="mb-10 sm:mb-14 pb-6 border-b border-[#E2DCF0] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>03 // VERIFIED EXECUTIVE REPUTATION</span>
            </div>
            <h2 className="font-roboto-condensed font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-950 uppercase">
              WHAT FOUNDERS & LEADERS SAY
            </h2>
          </div>

          {/* Carousel Navigation Buttons & Pagination Indicator */}
          <div className="flex items-center gap-3">
            <div className="font-mono text-xs text-slate-500 font-bold tracking-wider mr-2">
              <span className="text-purple-700">0{activeIndex + 1}</span> / 0{CLIENT_STORIES.length}
            </div>
            <button
              onClick={handlePrev}
              aria-label="Previous story"
              className="w-10 h-10 rounded-xl bg-white border border-[#E2DCF0] text-slate-700 hover:text-purple-700 hover:border-purple-300 transition-all flex items-center justify-center shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next story"
              className="w-10 h-10 rounded-xl bg-white border border-[#E2DCF0] text-slate-700 hover:text-purple-700 hover:border-purple-300 transition-all flex items-center justify-center shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* FEATURED STORY HERO CARD */}
        <div className="relative bg-white border border-[#E2DCF0] rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
          {/* Corner Crosshairs */}
          <div className="absolute top-3 right-3 text-purple-300 pointer-events-none">
            <Plus className="w-4 h-4 stroke-[1.5]" />
          </div>
          <div className="absolute bottom-3 left-3 text-purple-300 pointer-events-none">
            <Plus className="w-4 h-4 stroke-[1.5]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStory.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12"
            >
              {/* LEFT COLUMN: Executive Profile & Impact Metric (4 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-[#E2DCF0] flex flex-col justify-between">
                <div>
                  {/* Verification Tag */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>VERIFIED CONTRACT</span>
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 font-bold">
                      {activeStory.authId}
                    </span>
                  </div>

                  {/* Avatar & Title */}
                  <div className="flex items-center gap-4 sm:gap-5 mb-8">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-purple-200 shadow-sm shrink-0">
                      <Image
                        src={activeStory.avatar}
                        alt={activeStory.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h3 className="font-roboto-condensed font-black text-xl sm:text-2xl text-slate-950 uppercase tracking-tight">
                        {activeStory.name}
                      </h3>
                      <p className="font-mono text-xs text-purple-700 font-bold uppercase tracking-wider">
                        {activeStory.role}
                      </p>
                      <p className="font-mono text-[11px] text-slate-500 font-medium mt-0.5">
                        {activeStory.company}
                      </p>
                    </div>
                  </div>

                  {/* Verified Metric Pill Card */}
                  <div className="p-5 rounded-xl bg-white border border-[#E2DCF0] shadow-sm mb-6">
                    <div className="font-mono text-[10px] font-bold text-purple-700 uppercase tracking-widest mb-1">
                      {activeStory.metricBadge}
                    </div>
                    <div className="font-roboto-condensed font-black text-3xl sm:text-4xl text-slate-950 tracking-tight">
                      {activeStory.metricValue}
                    </div>
                    <div className="font-roboto-condensed font-medium text-xs text-slate-600 mt-1 uppercase">
                      {activeStory.metricLabel}
                    </div>
                  </div>
                </div>

                {/* Delivery Meta */}
                <div className="pt-4 border-t border-[#E2DCF0] flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>DEPLOYMENT CYCLE:</span>
                  <span className="font-bold text-slate-800">{activeStory.duration}</span>
                </div>
              </div>

              {/* RIGHT COLUMN: The Quote & Technical Stack Badges (7 cols) */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  {/* Decorative Quote Icon & Code */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-100/60 border border-purple-200 flex items-center justify-center text-purple-700">
                      <Quote className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Paragraph */}
                  <blockquote className="font-roboto-condensed font-bold text-lg sm:text-2xl md:text-3xl text-slate-900 leading-snug tracking-tight mb-8">
                    &ldquo;{activeStory.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Bottom Stack Chips & CTA Dock */}
                <div className="pt-6 border-t border-[#E2DCF0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      PRODUCTION STACK UTILIZED:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeStory.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] font-semibold text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onContactClick}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-roboto-condensed font-bold text-sm uppercase tracking-wider transition-all shadow-sm shrink-0 active:scale-95 group"
                  >
                    <span>BUILD SIMILAR</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4-CLIENT THUMBNAIL DOCK PICKER */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {CLIENT_STORIES.map((story, index) => {
            const isSelected = index === activeIndex;
            return (
              <button
                key={story.id}
                onClick={() => setActiveIndex(index)}
                className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all flex items-center gap-3 relative ${
                  isSelected
                    ? "bg-white border-purple-600 shadow-md ring-2 ring-purple-600/10"
                    : "bg-white/60 border-[#E2DCF0] hover:bg-white hover:border-purple-300"
                }`}
              >
                <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-slate-200">
                  <Image
                    src={story.avatar}
                    alt={story.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-roboto-condensed font-bold text-xs sm:text-sm text-slate-950 truncate uppercase">
                    {story.name}
                  </div>
                  <div className="font-mono text-[10px] text-purple-700 font-bold truncate uppercase">
                    {story.company}
                  </div>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-purple-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
