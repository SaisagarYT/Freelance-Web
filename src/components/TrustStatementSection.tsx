"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Sparkles, Zap, TrendingUp, Layers, Terminal } from "lucide-react";

export const TrustStatementSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress from when Section 2 enters viewport until it fills the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // 3 Multi-Edge Liquid Waves - tuned to expand gradually and smoothly
  const leftScale = useTransform(
    scrollYProgress,
    [0.35, 0.65, 0.88, 1.00],
    [0.05, 0.45, 1.15, 1.65],
    { clamp: true }
  );
  const leftOpacity = useTransform(
    scrollYProgress,
    [0.35, 0.65, 0.88, 1.00],
    [0, 0.35, 0.70, 0.92],
    { clamp: true }
  );

  const rightScale = useTransform(
    scrollYProgress,
    [0.38, 0.68, 0.89, 1.00],
    [0.05, 0.45, 1.15, 1.65],
    { clamp: true }
  );
  const rightOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.68, 0.89, 1.00],
    [0, 0.35, 0.70, 0.92],
    { clamp: true }
  );

  const bottomScale = useTransform(
    scrollYProgress,
    [0.42, 0.72, 0.92, 1.00],
    [0.05, 0.40, 1.20, 1.75],
    { clamp: true }
  );
  const bottomOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.72, 0.92, 1.00],
    [0, 0.35, 0.70, 0.92],
    { clamp: true }
  );

  // Final Background Coalescence - fills smoothly only in the final stretch [0.88 -> 1.00] as section locks at top
  const unifiedOpacity = useTransform(scrollYProgress, [0.88, 1.00], [0, 1], { clamp: true });

  // Seamless top white blend that dissolves away gradually as purple finishes blooming
  const topBlendOpacity = useTransform(scrollYProgress, [0.45, 0.92], [1, 0], { clamp: true });

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 bg-white select-none"
    >
      {/* Seamless Top Blend from Hero's White Bottom that dissolves away as purple fills */}
      <motion.div
        style={{ opacity: topBlendOpacity }}
        className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-[2]"
      />

      {/* Wave 1: Liquid Bloom from Left Edge */}
      <motion.div
        style={{
          scale: leftScale,
          opacity: leftOpacity,
          background:
            "radial-gradient(circle at 10% 50%, #E3CDFE 0%, #D4B2FE 50%, rgba(212, 178, 254, 0) 75%)",
          filter: "blur(45px)",
        }}
        className="absolute -left-28 top-1/2 -translate-y-1/2 w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full pointer-events-none z-0 origin-left"
      />

      {/* Wave 2: Liquid Bloom from Right Edge */}
      <motion.div
        style={{
          scale: rightScale,
          opacity: rightOpacity,
          background:
            "radial-gradient(circle at 90% 50%, #DBBCFE 0%, #CCA2FE 50%, rgba(204, 162, 254, 0) 75%)",
          filter: "blur(45px)",
        }}
        className="absolute -right-28 top-1/2 -translate-y-1/2 w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full pointer-events-none z-0 origin-right"
      />

      {/* Wave 3: Liquid Bloom from Bottom Edge */}
      <motion.div
        style={{
          scale: bottomScale,
          opacity: bottomOpacity,
          background:
            "radial-gradient(ellipse at 50% 90%, #DFCAFE 0%, #D0A7FE 50%, rgba(208, 167, 254, 0) 75%)",
          filter: "blur(50px)",
        }}
        className="absolute left-1/2 -bottom-28 -translate-x-1/2 w-[680px] h-[480px] md:w-[900px] md:h-[600px] rounded-full pointer-events-none z-0 origin-bottom"
      />

      {/* Unified Solid Flood Overlay */}
      <motion.div
        style={{ opacity: unifiedOpacity }}
        className="absolute inset-0 bg-[#E2CEFE] pointer-events-none z-0"
      />

      {/* ============================================================ */}
      {/* FULL-SCREEN CENTERED STATEMENT WITH INLINE SYMBOLS & WIDGETS */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto text-center relative z-10 px-4 py-6 flex flex-col items-center justify-center space-y-2.5 sm:space-y-4">
        {/* Eyebrow Micro-Capsule matching reference photo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/10 border border-slate-900/15 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-800 mb-1 sm:mb-2 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          <span>FRONTEND SYSTEMS WITH PRODUCT TASTE</span>
        </motion.div>

        {/* LINE 1: KAIZEN SOLVES [Studio Avatar Capsule] architects */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-none flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5 gap-y-2">
          <WordItem word="KAIZEN" progress={scrollYProgress} range={[0.38, 0.48]} />
          <WordItem word="SOLVES" progress={scrollYProgress} range={[0.40, 0.50]} />
          <InlineStudioAvatar progress={scrollYProgress} range={[0.42, 0.52]} />
          <WordItem word="architects" progress={scrollYProgress} range={[0.44, 0.54]} />
        </div>

        {/* LINE 2: scalable [0.08s Speed Widget] web apps, */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-none flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5 gap-y-2">
          <WordItem word="scalable" progress={scrollYProgress} range={[0.46, 0.56]} isHighlight />
          <InlineSpeedChip progress={scrollYProgress} range={[0.48, 0.58]} />
          <WordItem word="web" progress={scrollYProgress} range={[0.50, 0.60]} />
          <WordItem word="apps," progress={scrollYProgress} range={[0.52, 0.62]} isHighlight />
        </div>

        {/* LINE 3: fluid [60 FPS Badge] [Glossy Amber Pebble] interfaces, */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-none flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5 gap-y-2">
          <WordItem word="fluid" progress={scrollYProgress} range={[0.54, 0.64]} />
          <InlineFpsBadge progress={scrollYProgress} range={[0.56, 0.66]} />
          <InlineGlossyPebble progress={scrollYProgress} range={[0.58, 0.68]} />
          <WordItem word="interfaces," progress={scrollYProgress} range={[0.60, 0.70]} isHighlight />
        </div>

        {/* LINE 4: and resilient [Stacked App Preview Capsule] cloud systems */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-none flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5 gap-y-2">
          <WordItem word="and" progress={scrollYProgress} range={[0.62, 0.72]} />
          <WordItem word="resilient" progress={scrollYProgress} range={[0.64, 0.74]} isHighlight />
          <InlineStackedAppPreview progress={scrollYProgress} range={[0.66, 0.76]} />
          <WordItem word="cloud" progress={scrollYProgress} range={[0.68, 0.78]} />
          <WordItem word="systems" progress={scrollYProgress} range={[0.70, 0.80]} />
        </div>

        {/* LINE 5: that drive [Growth Widget] growth. */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-none flex flex-wrap justify-center items-center gap-x-2.5 sm:gap-x-3.5 gap-y-2">
          <WordItem word="that" progress={scrollYProgress} range={[0.72, 0.82]} />
          <WordItem word="drive" progress={scrollYProgress} range={[0.74, 0.84]} />
          <InlineGrowthWidget progress={scrollYProgress} range={[0.76, 0.86]} />
          <WordItem word="growth." progress={scrollYProgress} range={[0.78, 0.88]} isHighlight hasDottedUnderline />
        </div>

        {/* Bottom Connect Pill & Animated Scroll Ticker matching reference photo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-6 sm:pt-8 flex flex-col items-center gap-3 relative z-10"
        >
          <button
            onClick={() => {
              const el = document.getElementById("tech-stack");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-2 rounded-full bg-slate-950 hover:bg-purple-700 text-white font-roboto-condensed font-bold text-xs sm:text-sm shadow-lg hover:shadow-purple-500/30 transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Connect
          </button>

          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono font-semibold text-slate-600 uppercase tracking-widest pt-1">
            <span className="w-3.5 h-5 rounded-full border border-slate-600/50 flex items-start justify-center p-0.5">
              <span className="w-1 h-1.5 rounded-full bg-slate-800 animate-bounce" />
            </span>
            <span>SCROLL TO ENTER SELECTED WORK</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================
// REUSABLE WORD ITEM WITH BLUR & POP-UP ENTRANCE
// ============================================================
interface WordItemProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
  hasDottedUnderline?: boolean;
}

const WordItem: React.FC<WordItemProps> = ({
  word,
  progress,
  range,
  isHighlight = false,
  hasDottedUnderline = false,
}) => {
  const y = useTransform(progress, range, [22, 0], { clamp: true });
  const filter = useTransform(progress, range, ["blur(10px)", "blur(0px)"], { clamp: true });
  const opacity = useTransform(progress, range, [0.12, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.88, 1], { clamp: true });

  return (
    <motion.span
      style={{ y, filter, opacity, scale }}
      className={`inline-block transition-colors duration-150 origin-bottom ${
        isHighlight
          ? "font-editorial font-normal italic text-purple-700 tracking-normal px-1"
          : "font-roboto-condensed font-black tracking-tight text-slate-900"
      } ${
        hasDottedUnderline
          ? "border-b-2 border-dotted border-purple-600/80 hover:border-solid cursor-pointer"
          : ""
      }`}
    >
      {word}
    </motion.span>
  );
};

// ============================================================
// 1. INLINE STUDIO AVATAR / MONOGRAM CAPSULE (Matching Dukes Avatar in Photo)
// ============================================================
const InlineStudioAvatar: React.FC<{ progress: MotionValue<number>; range: [number, number] }> = ({
  progress,
  range,
}) => {
  const y = useTransform(progress, range, [22, 0], { clamp: true });
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.8, 1], { clamp: true });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      style={{ y, opacity, scale }}
      className="inline-flex items-center align-middle mx-1 sm:mx-1.5 relative"
    >
      <motion.div
        whileHover={{ scale: 1.18, rotate: -6 }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-purple-800 via-indigo-600 to-purple-500 border-2 border-white shadow-md shadow-purple-600/35 flex items-center justify-center cursor-pointer select-none relative group"
      >
        <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        <span className="w-2 h-2 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 border border-white shadow-xs animate-pulse" />
      </motion.div>

      {/* Tooltip */}
      {hovered && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[9px] font-mono whitespace-nowrap shadow-md pointer-events-none z-20">
          KAIZEN Studio
        </span>
      )}
    </motion.span>
  );
};

// ============================================================
// 2. INLINE PERFORMANCE SPEED CHIP (0.08s Microchip Widget)
// ============================================================
const InlineSpeedChip: React.FC<{ progress: MotionValue<number>; range: [number, number] }> = ({
  progress,
  range,
}) => {
  const y = useTransform(progress, range, [22, 0], { clamp: true });
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.8, 1], { clamp: true });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      style={{ y, opacity, scale }}
      className="inline-flex items-center align-middle mx-1 sm:mx-1.5 relative"
    >
      <motion.div
        whileHover={{ scale: 1.12, rotate: 2 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-950 text-purple-200 border border-purple-400/40 shadow-sm flex items-center gap-1.5 cursor-pointer select-none font-mono text-[10px] sm:text-xs font-bold tracking-tight"
      >
        <Zap className="w-3 h-3 text-amber-400 animate-pulse" />
        <span>0.08s</span>
      </motion.div>

      {hovered && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[9px] font-mono whitespace-nowrap shadow-md pointer-events-none z-20">
          Sub-100ms Query Latency
        </span>
      )}
    </motion.span>
  );
};

// ============================================================
// 3. INLINE 60 FPS BADGE
// ============================================================
const InlineFpsBadge: React.FC<{ progress: MotionValue<number>; range: [number, number] }> = ({
  progress,
  range,
}) => {
  const y = useTransform(progress, range, [22, 0], { clamp: true });
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.8, 1], { clamp: true });

  return (
    <motion.span
      style={{ y, opacity, scale }}
      className="inline-flex items-center align-middle mx-1 sm:mx-1.5"
    >
      <motion.div
        whileHover={{ scale: 1.14 }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-white/90 border border-purple-300 shadow-xs flex items-center gap-1 font-mono text-[10px] sm:text-xs font-black text-purple-800 cursor-pointer select-none"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>60 FPS</span>
      </motion.div>
    </motion.span>
  );
};

// ============================================================
// 4. INLINE GLOSSY ORANGE/PURPLE PEBBLE (Matching the Orange Blob in Photo)
// ============================================================
const InlineGlossyPebble: React.FC<{ progress: MotionValue<number>; range: [number, number] }> = ({
  progress,
  range,
}) => {
  const y = useTransform(progress, range, [22, 0], { clamp: true });
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.8, 1], { clamp: true });

  return (
    <motion.span
      style={{ y, opacity, scale }}
      className="inline-flex items-center align-middle mx-1 sm:mx-1.5"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.28, rotate: -8 }}
        className="w-9 h-5 sm:w-13 sm:h-7 md:w-14 md:h-8 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-purple-600 shadow-md shadow-orange-500/35 relative overflow-hidden cursor-pointer select-none"
      >
        {/* Specular highlight for liquid glossy 3D glass look */}
        <span className="absolute top-0.5 inset-x-2 h-1.5 rounded-full bg-white/50 blur-[0.6px]" />
      </motion.div>
    </motion.span>
  );
};

// ============================================================
// 5. INLINE STACKED APP PREVIEW CAPSULE (Matching Eazyul in Photo)
// ============================================================
const InlineStackedAppPreview: React.FC<{ progress: MotionValue<number>; range: [number, number] }> = ({
  progress,
  range,
}) => {
  const y = useTransform(progress, range, [22, 0], { clamp: true });
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.8, 1], { clamp: true });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      style={{ y, opacity, scale }}
      className="inline-flex items-center align-middle mx-1 sm:mx-1.5 relative"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: 2 }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center shadow-md cursor-pointer select-none rounded-full overflow-hidden"
      >
        {/* Left Half: Dark pill with icon & code */}
        <div className="bg-slate-950 text-white px-2 sm:px-2.5 py-1 sm:py-1.5 flex items-center gap-1 text-[9px] sm:text-[11px] font-mono font-bold tracking-tight border-y border-l border-white/25">
          <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-300" />
          <span>MESH.V2</span>
        </div>

        {/* Right Half: Micro vibrant gradient thumbnail */}
        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-400 border-y border-r border-white/25 flex items-center justify-center relative overflow-hidden">
          <Sparkles className="w-3 h-3 text-white/90 animate-pulse" />
        </div>
      </motion.div>

      {hovered && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-900 text-white text-[9px] font-mono whitespace-nowrap shadow-md pointer-events-none z-20">
          Distributed Cloud Mesh
        </span>
      )}
    </motion.span>
  );
};

// ============================================================
// 6. INLINE GROWTH WIDGET (+240% Kinetic Pill)
// ============================================================
const InlineGrowthWidget: React.FC<{ progress: MotionValue<number>; range: [number, number] }> = ({
  progress,
  range,
}) => {
  const y = useTransform(progress, range, [22, 0], { clamp: true });
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.8, 1], { clamp: true });

  return (
    <motion.span
      style={{ y, opacity, scale }}
      className="inline-flex items-center align-middle mx-1 sm:mx-1.5"
    >
      <motion.div
        whileHover={{ scale: 1.15, rotate: -3 }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-purple-900 text-purple-100 border border-purple-400/40 shadow-sm flex items-center gap-1 font-mono text-[10px] sm:text-xs font-bold cursor-pointer select-none"
      >
        <TrendingUp className="w-3 h-3 text-emerald-400" />
        <span>+240%</span>
      </motion.div>
    </motion.span>
  );
};
