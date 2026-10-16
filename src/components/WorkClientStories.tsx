"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface FounderCard {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  metricBadge: string;
  metricValue: string;
}

export const FOUNDERS: FounderCard[] = [
  {
    id: "founder-anny",
    name: "Anny Sterling",
    role: "Founder & CEO",
    company: "Solaria AI",
    avatar: "/images/work/client_anny.jpg",
    quote:
      "Investors were blown away by the fluidity of our interactive node canvas and 60FPS UI shaders. Kaizen delivered a production-grade software rig that directly helped us secure our $14M Series A within 45 days of launch.",
    metricBadge: "VENTURE IMPACT",
    metricValue: "$14M Series A",
  },
  {
    id: "founder-gary",
    name: "Gary Chen",
    role: "VP of Engineering",
    company: "Horizon Cloud",
    avatar: "/images/work/client_gary.jpg",
    quote:
      "Kaizen didn't just build our web client; they re-architected our micro-frontend routing and brought our global P99 latency down to 14ms. The craft, typographic precision, and code cleanliness is something you rarely see outside elite Silicon Valley studios.",
    metricBadge: "LATENCY DROP",
    metricValue: "-64% P99 Latency",
  },
  {
    id: "founder-betty",
    name: "Betty Sandoval",
    role: "Head of Product",
    company: "Synapse OS",
    avatar: "/images/work/client_betty.jpg",
    quote:
      "The architectural design language and tactile micro-interactions turned what could have been a dry developer tool into an addictive, delightful experience. Our user activation jumped 3.4x in the very first cohort.",
    metricBadge: "ACTIVATION SURGE",
    metricValue: "3.4x Onboarding Velocity",
  },
  {
    id: "founder-alex",
    name: "Alex Voron",
    role: "AI Systems Lead",
    company: "Neural Architecture",
    avatar: "/images/architect_alex.jpg",
    quote:
      "Engineers high-throughput inference pipelines, multi-agent cognitive architectures, and resilient vector index systems for enterprise deployments with sub-120ms latency SLAs.",
    metricBadge: "SYSTEM RESILIENCE",
    metricValue: "< 120ms P99 Edge",
  },
  {
    id: "founder-izzy",
    name: "Izzy Rodriguez",
    role: "Chief Technology Officer",
    company: "Vault Flow",
    avatar: "/images/work/client_izzy.jpg",
    quote:
      "Finding engineers who combine high-fidelity UI choreography with rigorous, zero-downtime distributed systems is almost impossible. Kaizen bridged that gap effortlessly. They operate like an elite in-house founding team.",
    metricBadge: "SYSTEM SCALE",
    metricValue: "$85M+ Flow Processed",
  },
  {
    id: "founder-katya",
    name: "Katya Melnyk",
    role: "Creative Director",
    company: "Aura Generative",
    avatar: "/images/architect_katya.jpg",
    quote:
      "Unifies generative synthetic media with high-converting interface architecture. Crafts bespoke diffusion pipelines, real-time image engines, and robust design tokens for scale.",
    metricBadge: "ASSET FIDELITY",
    metricValue: "99.4% Brand Score",
  },
  {
    id: "founder-ivan",
    name: "Ivan Prokopenko",
    role: "Workflow Architect",
    company: "Autonomous Scale",
    avatar: "/images/architect_ivan.jpg",
    quote:
      "Architects autonomous business systems and deterministic tool-calling workflows. Eliminates operational friction through self-healing agent pipelines running 24/7 without manual intervention.",
    metricBadge: "AUTOMATION RATE",
    metricValue: "$2M+ ARR Automated",
  },
];

interface WorkClientStoriesProps {
  onContactClick?: () => void;
}

export const WorkClientStories: React.FC<WorkClientStoriesProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const total = FOUNDERS.length;

  // Auto-advance loop scroll every 4 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".founder-carousel-viewport",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Compute a centered window of 7 relative positions: [-3, -2, -1, 0, 1, 2, 3]
  const offsets = [-3, -2, -1, 0, 1, 2, 3];
  const visibleCards = offsets.map((offset) => {
    const rawIndex = (activeIndex + offset) % total;
    const index = rawIndex < 0 ? rawIndex + total : rawIndex;
    return {
      founder: FOUNDERS[index],
      offset,
      isCenter: offset === 0,
      index,
    };
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#F7F5FC] border-t border-[#E2DCF0] py-20 sm:py-28 relative select-none overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(147, 51, 234, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(147, 51, 234, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] font-bold text-purple-700 uppercase tracking-widest">
              VERIFIED EXECUTIVE REPUTATION
            </span>
          </div>

          <h2 className="font-roboto-condensed font-black text-4xl sm:text-5xl lg:text-6xl text-slate-950 tracking-tight leading-[1.08] uppercase">
            What Founders &amp; Leaders Say
          </h2>

          <p className="font-roboto-condensed font-medium text-slate-500 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Real feedback from technical leaders and founding executives who trusted Kaizen Solves to architect their flagship systems.
          </p>
        </div>

        {/* Mobile Active Details (visible only on mobile < sm) */}
        <div className="sm:hidden max-w-sm mx-auto mb-6 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mobile-details-${FOUNDERS[activeIndex].id}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="p-4 rounded-2xl bg-white border border-purple-200/80 shadow-xs text-left space-y-2"
            >
              <div>
                <h3 className="font-roboto-condensed font-black text-lg text-slate-950 uppercase tracking-tight">
                  {FOUNDERS[activeIndex].name}
                </h3>
                <p className="font-mono text-[10px] text-purple-700 font-bold uppercase">
                  {FOUNDERS[activeIndex].role} · {FOUNDERS[activeIndex].company}
                </p>
              </div>
              <p className="font-roboto-condensed text-xs text-slate-600 leading-relaxed italic">
                &ldquo;{FOUNDERS[activeIndex].quote}&rdquo;
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── AUTOMATIC CENTER-EXPANDING CAROUSEL (NO BOTTOM CARD) ─────────── */}
        <div
          className="relative w-full overflow-hidden py-6 founder-carousel-viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Feather Fade Mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-r from-[#F7F5FC] via-[#F7F5FC]/90 to-transparent"
          />

          {/* Right Feather Fade Mask */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-l from-[#F7F5FC] via-[#F7F5FC]/90 to-transparent"
          />

          {/* Centered Track: All cards in continuous sequence with small gap, aligned at bottom */}
          <div className="flex items-end justify-center gap-3 sm:gap-4 md:gap-5 min-h-[380px] sm:min-h-[430px] md:min-h-[460px] w-full px-4 overflow-visible">
            {visibleCards.map(({ founder, isCenter, offset, index }) => {
              if (isCenter) {
                /* ════════════════════════════════════════════════════════════ */
                /* CENTER CARD: DOUBLED HEIGHT IMAGE + TOP-RIGHT OUTSIDE TEXT   */
                /* (Cards remain in tight sequence; text floats in top space)   */
                /* ════════════════════════════════════════════════════════════ */
                return (
                  <div
                    key={`center-wrapper-${founder.id}`}
                    className="relative shrink-0 z-10"
                  >
                    {/* The Center Image Card: FULL width & FULL height image */}
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                        duration: 0.4,
                      }}
                      className="relative w-[150px] sm:w-[220px] md:w-[250px] lg:w-[270px] h-[260px] sm:h-[350px] md:h-[390px] lg:h-[415px] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-500 shadow-[0_20px_60px_rgba(147,51,234,0.18)] ring-4 ring-purple-500/15 shrink-0 bg-slate-950 cursor-default"
                    >
                      <Image
                        src={founder.avatar}
                        alt={founder.name}
                        fill
                        className="object-cover object-top w-full h-full"
                        sizes="(max-width: 640px) 180px, (max-width: 768px) 250px, 320px"
                        priority
                      />

                      {/* Corner Active Wedge */}
                      <div
                        aria-hidden="true"
                        className="absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 bg-purple-700 z-20"
                        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                      />

                      {/* Subtle gradient vignette at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* OUTSIDE DETAILS AT RIGHT SIDE IN TOP PART (DOES NOT PUSH RIGHT PHOTO AWAY) */}
                    <div className="hidden sm:block absolute left-[calc(100%+14px)] md:left-[calc(100%+18px)] lg:left-[calc(100%+20px)] top-0 w-[290px] md:w-[380px] lg:w-[440px] text-left z-30 pointer-events-auto">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`details-${founder.id}`}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="space-y-2 sm:space-y-2.5"
                        >
                          {/* Founder Name & Role */}
                          <div>
                            <h3 className="font-roboto-condensed font-black text-xl sm:text-2xl md:text-3xl text-slate-950 uppercase tracking-tight leading-tight">
                              {founder.name}
                            </h3>
                            <p className="font-mono text-[10px] sm:text-xs text-purple-700 font-bold uppercase mt-0.5">
                              {founder.role} · <span className="text-slate-600 font-medium">{founder.company}</span>
                            </p>
                          </div>

                          {/* Editorial Quote */}
                          <div className="relative pl-2.5 sm:pl-3 border-l-2 border-purple-400/80 pt-0.5">
                            <Quote className="w-3.5 h-3.5 text-purple-400 mb-1" />
                            <blockquote className="font-roboto-condensed font-medium text-xs sm:text-[13px] md:text-sm text-slate-700 leading-relaxed line-clamp-3 md:line-clamp-4">
                              &ldquo;{founder.quote}&rdquo;
                            </blockquote>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                );
              }

              /* ══════════════════════════════════════════════════════════════ */
              /* INACTIVE CARDS: COMPACT PORTRAITS ALIGNED AT THE BOTTOM        */
              /* ══════════════════════════════════════════════════════════════ */
              const distance = Math.abs(offset);
              const opacity = distance === 1 ? 0.85 : distance === 2 ? 0.6 : 0.35;
              const scale = distance === 1 ? 0.98 : distance === 2 ? 0.92 : 0.85;

              return (
                <motion.div
                  key={`inactive-${founder.id}-${offset}`}
                  layout
                  onClick={() => setActiveIndex(index)}
                  style={{ opacity }}
                  className="shrink-0 w-[120px] sm:w-[135px] md:w-[145px] cursor-pointer group select-none transition-transform duration-300 hover:opacity-100"
                >
                  {/* Photo Box */}
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#E2DCF0] bg-[#F1EBFB] hover:border-purple-300 shadow-xs transition-all duration-300 group-hover:scale-105">
                    <div className="absolute inset-0 bg-[#F1EBFB] flex items-end justify-center">
                      <Image
                        src={founder.avatar}
                        alt={founder.name}
                        fill
                        className="object-cover object-top grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        sizes="160px"
                      />
                      <div className="absolute inset-0 bg-[#7C3AED]/20 mix-blend-multiply group-hover:opacity-0 transition-opacity" />
                    </div>
                  </div>

                  {/* Info Row Below Image */}
                  <div className="pt-2 pb-0.5">
                    <div className="flex items-center justify-between gap-1">
                      <h4 className="font-roboto-condensed font-black text-[11px] sm:text-xs text-slate-900 group-hover:text-purple-700 tracking-tight truncate transition-colors">
                        {founder.name}
                      </h4>
                      <ArrowUpRight className="w-2.5 h-2.5 shrink-0 text-slate-400 group-hover:text-purple-700 transition-colors" />
                    </div>

                    <p className="font-roboto-condensed font-medium text-[10px] text-slate-500 truncate mt-0.5">
                      {founder.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkClientStories;
