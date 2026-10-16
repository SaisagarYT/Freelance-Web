"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Icon } from "@iconify/react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ClientStory {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  companyImage?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CLIENT_STORIES: ClientStory[] = [
  {
    id: "story-gary",
    name: "Gary Chen",
    role: "VP of Engineering",
    company: "Horizon Cloud",
    avatar: "/images/work/client_gary.jpg",
    quote:
      "Kaizen didn't just build our web client — they re-architected our micro-frontend routing and brought our global P99 latency down to 14ms. The craft and code cleanliness is something you rarely see outside elite Silicon Valley studios.",
  },
  {
    id: "story-anny",
    name: "Anny Sterling",
    role: "Founder & CEO",
    company: "Solaria AI",
    avatar: "/images/work/client_anny.jpg",
    quote:
      "Investors were blown away by the fluidity of our interactive node canvas and 60FPS UI shaders. Kaizen delivered a production-grade rig that directly helped us secure our $14M Series A within 45 days of launch.",
  },
  {
    id: "story-betty",
    name: "Betty Sandoval",
    role: "Head of Product",
    company: "Synapse OS",
    avatar: "/images/work/client_betty.jpg",
    quote:
      "The architectural design language and tactile micro-interactions turned what could have been a dry developer tool into an addictive, delightful experience. Our user activation jumped 3.4x in the very first cohort.",
  },
  {
    id: "story-izzy",
    name: "Izzy Rodriguez",
    role: "Chief Technology Officer",
    company: "Vault Flow",
    avatar: "/images/work/client_izzy.jpg",
    quote:
      "Finding engineers who combine high-fidelity UI choreography with rigorous distributed systems is almost impossible. Kaizen bridged that gap effortlessly — they operate like an elite in-house founding team.",
  },
];

const COMPANY_LOGOS = [
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "React", icon: "logos:react" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Supabase", icon: "logos:supabase-icon" },
  { name: "AWS", icon: "logos:aws" },
  { name: "Tailwind", icon: "logos:tailwindcss-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Firebase", icon: "logos:firebase" },
];

const TEAM_AVATARS = [
  { src: "/images/architect_alex.jpg", label: "Alex" },
  { src: "/images/architect_katya.jpg", label: "Katya" },
  { src: "/images/architect_ivan.jpg", label: "Ivan" },
  { src: "/images/work/client_gary.jpg", label: "Gary" },
];

// ─── Avatar mosaic grid positions (8-cell mosaic like image) ─────────────────
// Pattern from the image: 3×3 mosaic with some filled, some empty
const MOSAIC: Array<{ type: "avatar"; idx: number } | { type: "empty" }> = [
  { type: "empty" },
  { type: "avatar", idx: 0 },
  { type: "empty" },
  { type: "avatar", idx: 1 },
  { type: "empty" },
  { type: "avatar", idx: 2 },
  { type: "empty" },
  { type: "avatar", idx: 3 },
  { type: "empty" },
];

// ─── Tech logos marquee items (doubled for infinite scroll) ──────────────────
const TECH_ROW = [...COMPANY_LOGOS, ...COMPANY_LOGOS];

// ─── Props ────────────────────────────────────────────────────────────────────

interface WorkClientStoriesProps {
  onContactClick?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const WorkClientStories: React.FC<WorkClientStoriesProps> = ({
  onContactClick,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = CLIENT_STORIES[activeIdx];

  return (
    <section
      className="w-full bg-[#F7F5FC] border-t border-[#E2DCF0] py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 relative select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(147,51,234,0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(147,51,234,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Header ──────────────────────────────────────────────── */}
        <div className="mb-8 sm:mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>03 // VERIFIED EXECUTIVE REPUTATION</span>
          </div>
          <h2 className="font-roboto-condensed font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-950 uppercase">
            What Founders &amp; Leaders Say
          </h2>
        </div>

        {/* ── Bento Grid ──────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">

          {/* ── CARD 1: Team Avatar Mosaic ──────────────────────── col 1-4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0 }}
            className="md:col-span-4 bg-white rounded-2xl border border-[#E8E2F4] shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-6 flex flex-col justify-between min-h-[320px]"
          >
            {/* Avatar mosaic */}
            <div className="grid grid-cols-3 gap-2 flex-1 mb-6">
              {MOSAIC.map((cell, i) => {
                if (cell.type === "empty") {
                  return (
                    <div
                      key={i}
                      className="rounded-xl bg-[#F3F0FB] border border-[#E8E2F4] aspect-square"
                    />
                  );
                }
                const av = TEAM_AVATARS[cell.idx];
                return (
                  <div
                    key={i}
                    className="relative rounded-xl overflow-hidden border border-[#D8D0F0] shadow-sm aspect-square"
                  >
                    <Image
                      src={av.src}
                      alt={av.label}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div>
              <p className="font-roboto-condensed font-semibold text-sm text-slate-600 mb-3">
                Get to know our dream team
              </p>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-purple-700 text-white font-roboto-condensed font-bold text-sm transition-all duration-200 active:scale-95 group shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with us</span>
              </button>
            </div>
          </motion.div>

          {/* ── CARD 2 + RIGHT COLUMN: center + right (col 5-12) ──────────── */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

            {/* ── CARD 2: Big stat ──────────────────────────────── col 5-8 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="bg-white rounded-2xl border border-[#E8E2F4] shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-6 flex flex-col justify-between min-h-[200px]"
            >
              {/* Stat + Grid lines decoration */}
              <div className="relative">
                {/* Subtle grid rule lines in the background */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, #C4B5FD 1px, transparent 1px),
                      linear-gradient(to bottom, #C4B5FD 1px, transparent 1px)
                    `,
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="relative">
                  <span className="font-roboto-condensed font-black text-6xl sm:text-7xl text-slate-950 leading-none tracking-tight">
                    100+
                  </span>
                  <p className="font-roboto-condensed font-semibold text-slate-500 text-sm mt-1 uppercase tracking-wider">
                    Companies served
                  </p>
                </div>
              </div>

              <p className="font-roboto-condensed text-slate-500 text-sm leading-relaxed mt-4">
                We design and build digital products that drive results and help
                your business grow. No Calls. No BS. Just Results.
              </p>
            </motion.div>

            {/* ── CARD 3: Testimonial ─────────────────────────── col 9-12 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="bg-white rounded-2xl border border-[#E8E2F4] shadow-[0_4px_24px_rgba(15,23,42,0.05)] p-6 flex flex-col justify-between min-h-[200px] relative overflow-hidden"
            >
              {/* Decorative abstract shape top-right */}
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-bl-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 50%, #C4B5FD 100%)",
                  opacity: 0.55,
                }}
              />

              {/* Company name badge */}
              <div className="relative z-10">
                <span className="font-roboto-condensed font-black text-xl text-slate-900">
                  {active.company}
                </span>
              </div>

              {/* Quote */}
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="relative z-10 font-roboto-condensed text-slate-600 text-sm leading-relaxed mt-3"
                >
                  &ldquo;{active.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>

              {/* Attribution + selectors */}
              <div className="relative z-10 mt-4 flex items-end justify-between gap-3">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={active.id + "-attr"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-roboto-condensed text-xs text-slate-700 font-semibold"
                  >
                    — {active.name}{" "}
                    <span className="font-normal text-slate-400">
                      {active.role}, {active.company}
                    </span>
                  </motion.p>
                </AnimatePresence>

                {/* Dot selectors */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {CLIENT_STORIES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      aria-label={`View story ${i + 1}`}
                      className={`rounded-full transition-all duration-200 ${
                        i === activeIdx
                          ? "w-4 h-2 bg-purple-600"
                          : "w-2 h-2 bg-slate-200 hover:bg-purple-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── CARD 4: Reviewer avatar strip + Build CTA ────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.22 }}
              className="sm:col-span-2 bg-white rounded-2xl border border-[#E8E2F4] shadow-[0_4px_24px_rgba(15,23,42,0.05)] px-5 py-4 flex items-center justify-between gap-4"
            >
              {/* Stacked avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {CLIENT_STORIES.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveIdx(i)}
                      className={`relative w-9 h-9 rounded-full border-2 overflow-hidden transition-all duration-200 cursor-pointer ${
                        i === activeIdx
                          ? "border-purple-500 scale-110 z-10"
                          : "border-white hover:scale-105 hover:z-10"
                      }`}
                      style={{ zIndex: i === activeIdx ? 10 : 4 - i }}
                      aria-label={`Switch to ${s.name}`}
                    >
                      <Image
                        src={s.avatar}
                        alt={s.name}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </button>
                  ))}
                </div>
                <div>
                  <p className="font-roboto-condensed font-bold text-slate-900 text-sm leading-tight">
                    {CLIENT_STORIES.length} Verified Executives
                  </p>
                  <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                    100% Verified Partnerships
                  </p>
                </div>
              </div>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-roboto-condensed font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm active:scale-95 group shrink-0"
              >
                <span>Build Similar</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* ── CARD 5: Technologies marquee ─────────────── full width ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="md:col-span-12 bg-white rounded-2xl border border-[#E8E2F4] shadow-[0_4px_24px_rgba(15,23,42,0.05)] px-6 py-5 flex items-center gap-6 overflow-hidden"
          >
            <p className="font-roboto-condensed font-semibold text-slate-500 text-sm uppercase tracking-wider shrink-0">
              Technologies we use
            </p>

            {/* Marquee strip */}
            <div className="flex-1 relative overflow-hidden">
              {/* Left fade */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              {/* Right fade */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div className="animate-marquee-left flex gap-4 w-max">
                {TECH_ROW.map((tech, i) => (
                  <div
                    key={`tech-${i}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F7F5FC] border border-[#E8E2F4] shrink-0 hover:border-purple-300 transition-colors"
                  >
                    <Icon icon={tech.icon} className="w-5 h-5 shrink-0" />
                    <span className="font-roboto-condensed font-semibold text-slate-700 text-xs">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
