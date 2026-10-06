"use client";

import React, { useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorkflowPhase {
  id: string;
  number: string;
  title: string;
  tag: string;
  deliverables: string[];
  description: string;
}

interface ProcessWorkflowSectionProps {
  onContactClick?: () => void;
}

const TITLE_HEIGHT = 58; // px

const WORKFLOW_PHASES: WorkflowPhase[] = [
  {
    id: "phase-01",
    number: "01",
    title: "DISCOVER",
    tag: "WHERE EXPLORATION BEGINS",
    deliverables: [
      "Stakeholder & Founder Interviews",
      "Market Context & Competitive Analysis",
      "Technical Architecture Feasibility",
      "Core Product Requirements Matrix",
    ],
    description:
      "We explore who you are, what you stand for and what makes you different. Interviews, market context and internal insights. We build a clear picture before we design a single thing.",
  },
  {
    id: "phase-02",
    number: "02",
    title: "DEFINE",
    tag: "WHERE CLARITY MEETS CONCEPT",
    deliverables: [
      "Brand Strategy & Architecture",
      "Messaging & Positioning Framework",
      "Creative & Visual Direction",
      "System Architecture Blueprint",
    ],
    description:
      "We craft your brand strategy and creative concept: your story, your voice, your visual direction. Sharp thinking meets bold intent to build an unshakeable market position.",
  },
  {
    id: "phase-03",
    number: "03",
    title: "DESIGN",
    tag: "WHERE THE MAGIC CLICKS",
    deliverables: [
      "Distinctive Visual Identity",
      "High-Impact Logo & Asset Systems",
      "Motion Design & Micro-Interactions",
      "Production Design Kits & Components",
    ],
    description:
      "Logo. Colours. Typography. Motion. From big visuals to tiny details, we build a distinctive identity that feels like you and only you, engineered to engage and convert.",
  },
  {
    id: "phase-04",
    number: "04",
    title: "DELIVER",
    tag: "SCALABLE PRODUCTION SYSTEMS",
    deliverables: [
      "Production-Grade Next.js / React Code",
      "Modular Component Libraries & Design Tokens",
      "Automated CI/CD Deployment Pipelines",
      "Comprehensive Design System Guidelines",
    ],
    description:
      "We package your brand into a scalable system: guidelines, assets, templates and examples. Ready to use, easy to apply across every team, platform and digital touchpoint.",
  },
];

interface CardProps {
  phase: WorkflowPhase;
  idx: number;
  scrollYProgress: MotionValue<number>;
  activePhase: number;
  onHeaderClick: (idx: number) => void;
  onContactClick?: () => void;
}

const CardItem: React.FC<CardProps> = ({
  phase,
  idx,
  scrollYProgress,
  activePhase,
  onHeaderClick,
  onContactClick,
}) => {
  const topOffset = idx * TITLE_HEIGHT;
  const isActive = activePhase === idx;

  // CONTINUOUS SCROLL-BOUND MOTION PHYSICS
  // Phase 0: Base card, always at y: 0%. Softly scales and dims as subsequent cards stack above it.
  // Phase 1: Glides up [0.18 -> 0.38], rests [0.38 -> 0.48], scales/dims as Phase 2 stacks.
  // Phase 2: Glides up [0.48 -> 0.68], rests [0.68 -> 0.78], scales/dims as Phase 3 stacks.
  // Phase 3: Glides up [0.78 -> 0.94], rests [0.94 -> 1.00] before smooth exit.

  // Continuous y translation
  const y0 = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const y1 = useTransform(scrollYProgress, [0, 0.18, 0.38, 1], ["100%", "100%", "0%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0, 0.48, 0.68, 1], ["100%", "100%", "0%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0, 0.78, 0.94, 1], ["100%", "100%", "0%", "0%"]);

  const cardY = idx === 0 ? y0 : idx === 1 ? y1 : idx === 2 ? y2 : y3;

  // Subtle depth scale as cards stack above
  const scale0 = useTransform(scrollYProgress, [0.18, 0.38], [1, 0.97]);
  const scale1 = useTransform(scrollYProgress, [0.48, 0.68], [1, 0.98]);
  const scale2 = useTransform(scrollYProgress, [0.78, 0.94], [1, 0.99]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const cardScale = idx === 0 ? scale0 : idx === 1 ? scale1 : idx === 2 ? scale2 : scale3;

  // Subtle opacity depth as cards get covered
  const opacity0 = useTransform(scrollYProgress, [0.18, 0.38], [1, 0.6]);
  const opacity1 = useTransform(scrollYProgress, [0.48, 0.68], [1, 0.65]);
  const opacity2 = useTransform(scrollYProgress, [0.78, 0.94], [1, 0.7]);
  const opacity3 = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const bodyOpacity = idx === 0 ? opacity0 : idx === 1 ? opacity1 : idx === 2 ? opacity2 : opacity3;

  return (
    <motion.div
      key={phase.id}
      style={{
        zIndex: (idx + 1) * 10,
        top: `${topOffset}px`,
        height: `calc(100vh - ${topOffset}px)`,
        y: cardY,
        willChange: "transform",
      }}
      className="absolute inset-x-0 w-full bg-[#F7F5FC] text-slate-900 border-t border-[#DCD5F2] border-x-0 border-b-0 shadow-[0_-12px_36px_rgba(124,58,237,0.07)] flex flex-col justify-between transition-colors select-none"
    >
      {/* TOP TITLE HEADER ROW: Persistently visible as subsequent cards stack over this one */}
      <div
        onClick={() => onHeaderClick(idx)}
        title={`Click to view Phase ${phase.number} (${phase.title})`}
        className="w-full h-[58px] px-6 sm:px-12 lg:px-20 flex items-center justify-between border-b border-[#E2DCF0]/80 cursor-pointer select-none hover:bg-[#F2EDFB] transition-colors shrink-0 bg-[#F7F5FC]"
      >
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
          <span className="font-mono text-base sm:text-xl font-black text-purple-700 tracking-tight shrink-0">
            {phase.number} •
          </span>
          <h3 className="text-lg sm:text-2xl font-black font-roboto-condensed tracking-tight text-slate-900 uppercase">
            {phase.title}
          </h3>
          <span className="hidden md:inline-block font-mono text-[11px] sm:text-xs text-purple-800/80 uppercase tracking-widest font-medium pl-2">
            {phase.tag}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {isActive && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[11px] font-mono font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
              ACTIVE
            </span>
          )}
          <span className="font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider">
            STAGE {phase.number} / 04
          </span>
        </div>
      </div>

      {/* CARD BODY CONTENT: Fluidly scales & dims as next card stacks on top */}
      <motion.div
        style={{
          scale: cardScale,
          opacity: bodyOpacity,
          transformOrigin: "top center",
          willChange: "transform, opacity",
        }}
        className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-10 flex-1 flex flex-col justify-between overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
          {/* Left Column: Key Deliverables & Milestones */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
              Key Deliverables & Milestones
            </div>

            <ul className="space-y-2.5 sm:space-y-3 pt-1">
              {phase.deliverables.map((item, iIdx) => (
                <li
                  key={iIdx}
                  className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base lg:text-[17px] font-medium text-slate-800 font-roboto-condensed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600/70 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Paragraph Description & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 sm:space-y-6 lg:pl-6">
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Phase Overview
              </div>
              <p className="text-sm sm:text-base lg:text-[18px] text-slate-700 leading-relaxed font-roboto-condensed max-w-xl">
                {phase.description}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onContactClick?.();
                }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-slate-900 text-white hover:bg-purple-700 font-bold font-roboto-condensed text-sm transition-all shadow-md active:scale-95 cursor-pointer group"
              >
                <span>Engage This Phase</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-purple-300" />
              </button>
              <span className="font-mono text-xs text-slate-500">
                PHASE 0{idx + 1} OF 04
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Bar: Anchored neatly at the bottom of the card */}
        <div className="w-full pt-4 mt-auto border-t border-[#E2DCF0]/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>SYSTEM METHODOLOGY PROTOCOL</span>
          <span className="font-semibold text-slate-500">SYS 2026</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProcessWorkflowSection: React.FC<ProcessWorkflowSectionProps> = ({
  onContactClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  // Generous 480vh scroll runway gives ample physical travel (~95vh per phase)
  // Prevents jumping past sections with a single wheel flick
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamically update the active phase badge as user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.28) {
      setActivePhase(0);
    } else if (latest < 0.58) {
      setActivePhase(1);
    } else if (latest < 0.86) {
      setActivePhase(2);
    } else {
      setActivePhase(3);
    }
  });

  // Smooth scroll to a specific phase resting index when header tabs are clicked
  const scrollToPhaseIndex = useCallback((idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const progressTargets = [0.05, 0.42, 0.72, 0.96];
    const targetScroll = scrollTop + progressTargets[idx] * scrollableDistance;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  }, []);

  return (
    <section id="methodology" className="w-full bg-white text-slate-900 relative">
      {/* SECTION HEADER: Clean Right-Aligned Heading in Normal Document Flow */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-24 pb-8 sm:pb-12 flex justify-end">
        <div className="text-right">
          <div className="flex items-center justify-end gap-2 text-purple-700 font-mono text-xs tracking-widest uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Execution Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-roboto-condensed uppercase">
            Methodology
          </h2>
        </div>
      </div>

      {/* CONTINUOUS PHYSICS STACKING RUNWAY (480vh) */}
      {/* Provides ~95vh of fluid, continuous scroll per card */}
      <div ref={containerRef} className="relative w-full h-[480vh]">
        {/* Sticky viewport container: Pins to full screen during the section scroll */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
          {WORKFLOW_PHASES.map((phase, idx) => (
            <CardItem
              key={phase.id}
              phase={phase}
              idx={idx}
              scrollYProgress={scrollYProgress}
              activePhase={activePhase}
              onHeaderClick={scrollToPhaseIndex}
              onContactClick={onContactClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
