"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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

export const ProcessWorkflowSection: React.FC<ProcessWorkflowSectionProps> = ({
  onContactClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const isTransitioningRef = useRef(false);
  const lastWheelTimeRef = useRef(0);
  const activePhaseRef = useRef(0);

  // Keep ref in sync with state for event listeners
  activePhaseRef.current = activePhase;

  const workflowPhases: WorkflowPhase[] = [
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

  // Fixed title bar height for stacked header tabs
  const titleHeight = 58; // px

  // Smooth scroll to a specific phase index on the page
  const scrollToPhaseIndex = useCallback((idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const progressTargets = [0.02, 0.35, 0.68, 0.98];
    const targetScroll = scrollTop + progressTargets[idx] * scrollableDistance;

    isTransitioningRef.current = true;
    setActivePhase(idx);
    window.scrollTo({ top: targetScroll, behavior: "smooth" });

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 750);
  }, []);

  // Track raw scroll progress through the methodology container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Keep active phase updated when user scrubs the scrollbar directly
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isTransitioningRef.current) return;
    if (latest < 0.22) {
      setActivePhase(0);
    } else if (latest < 0.52) {
      setActivePhase(1);
    } else if (latest < 0.82) {
      setActivePhase(2);
    } else {
      setActivePhase(3);
    }
  });

  // AUTOMATIC SLIDE-BY-SLIDE LOCKING SCROLL PHYSICS
  // When scrolling inside the pinned section, automatically snaps and locks to the upcoming slide
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      // Section is locked in view when rect.top is at top of screen and container hasn't reached its bottom
      const isPinned = rect.top <= 8 && rect.bottom >= window.innerHeight - 8;

      if (!isPinned) return;

      // Filter out low-amplitude trackpad micro-movements
      if (Math.abs(e.deltaY) < 22) return;

      const current = activePhaseRef.current;
      const now = Date.now();

      // If currently animating between slides, intercept scroll inside section to prevent erratic jumps
      if (isTransitioningRef.current || now - lastWheelTimeRef.current < 700) {
        if ((e.deltaY > 0 && current < 3) || (e.deltaY < 0 && current > 0)) {
          e.preventDefault();
        }
        return;
      }

      if (e.deltaY > 0) {
        // Scrolling down: automatically lock to the upcoming slide
        if (current < 3) {
          e.preventDefault();
          lastWheelTimeRef.current = now;
          scrollToPhaseIndex(current + 1);
        }
        // At slide 3 (last phase), allow natural scrolling down past the section
      } else if (e.deltaY < 0) {
        // Scrolling up: automatically lock to the previous slide
        if (current > 0) {
          e.preventDefault();
          lastWheelTimeRef.current = now;
          scrollToPhaseIndex(current - 1);
        }
        // At slide 0 (first phase), allow natural scrolling up back to previous section
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollToPhaseIndex]);

  return (
    <section id="methodology" className="w-full bg-white text-slate-900 relative">
      {/* SECTION 05 HEADER: Clean Right-Aligned Heading in Normal Document Flow */}
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

      {/* PINNED STACKING RUNWAY: Provides scroll travel while locking the viewport */}
      <div ref={containerRef} className="relative w-full h-[320vh]">
        {/* Sticky viewport container: Pins to full screen during the section scroll */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-white">
          {workflowPhases.map((phase, idx) => {
            const isActive = activePhase === idx;
            const topOffset = idx * titleHeight;
            // Cards above or equal to activePhase slide up and lock into place
            const isSlideIn = activePhase >= idx;

            return (
              <motion.div
                key={phase.id}
                initial={false}
                animate={{
                  y: isSlideIn ? "0%" : "100%",
                }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 24,
                  mass: 0.5,
                }}
                style={{
                  zIndex: (idx + 1) * 10,
                  top: `${topOffset}px`,
                  height: `calc(100vh - ${topOffset}px)`,
                }}
                className="absolute inset-x-0 w-full bg-[#F7F5FC] text-slate-900 border-t border-[#E2DCF0] border-x-0 border-b-0 shadow-[0_-8px_24px_rgba(124,58,237,0.04)] flex flex-col justify-between transition-colors select-none"
              >
                {/* TOP TITLE HEADER ROW: Persistently visible as subsequent cards stack over this one */}
                <div
                  onClick={() => scrollToPhaseIndex(idx)}
                  title={`Click to view Phase ${phase.number}`}
                  className="w-full h-[58px] px-6 sm:px-12 lg:px-20 flex items-center justify-between border-b border-[#E2DCF0]/70 cursor-pointer select-none hover:bg-[#F2EDFB] transition-colors shrink-0"
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

                {/* CARD BODY CONTENT: Fills down to the bottom of the viewport with zero empty white void */}
                <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-10 flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-2">
                    {/* Left Column: Key Deliverables & Outcomes */}
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

                    {/* Right Column: Paragraph Description positioned below title level */}
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

                  {/* Bottom Metadata Bar: Anchored neatly at the bottom of the card and viewport */}
                  <div className="w-full pt-4 mt-auto border-t border-[#E2DCF0]/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>SYSTEM METHODOLOGY PROTOCOL</span>
                    <span className="font-semibold text-slate-500">SYS 2026</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
