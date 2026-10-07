"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

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
      {/* FULL-SCREEN CENTERED STATEMENT (AWWWARDS EDITORIAL TYPOGRAPHY) */}
      {/* ============================================================ */}
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4 py-6 flex flex-col items-center justify-center space-y-3 sm:space-y-4">
        {/* Eyebrow Micro-Pill matching laptop reference */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/10 border border-slate-900/15 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-slate-800 mb-1 sm:mb-2 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          <span>FRONTEND SYSTEMS WITH PRODUCT TASTE</span>
        </motion.div>

        {/* LINE 1: KAIZEN SOLVES architects (Pure, Confident Architecture) */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-tight flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4">
          <ScrubWord word="KAIZEN" progress={scrollYProgress} range={[0.36, 0.46]} />
          <ScrubWord word="SOLVES" progress={scrollYProgress} range={[0.40, 0.50]} />
          <ScrubWord word="architects" progress={scrollYProgress} range={[0.44, 0.54]} isEditorial />
        </div>

        {/* LINE 2: scalable web apps, (With Dynamic Highlighted Capsule) */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-tight flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4">
          <HighlightedCapsuleWord word="scalable" progress={scrollYProgress} range={[0.48, 0.58]} />
          <ScrubWord word="web" progress={scrollYProgress} range={[0.52, 0.62]} />
          <ScrubWord word="apps," progress={scrollYProgress} range={[0.54, 0.64]} />
        </div>

        {/* LINE 3: fluid interfaces [Glossy Organic Pebble] (Reference Sunset Pebble) */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-tight flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4">
          <ScrubWord word="fluid" progress={scrollYProgress} range={[0.58, 0.68]} isEditorial />
          <ScrubWord word="interfaces" progress={scrollYProgress} range={[0.62, 0.72]} />
          <InlineSunsetPebble progress={scrollYProgress} range={[0.64, 0.74]} />
        </div>

        {/* LINE 4: and resilient cloud systems (Fluid Editorial Pairing) */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-tight flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4">
          <ScrubWord word="and" progress={scrollYProgress} range={[0.66, 0.76]} />
          <ScrubWord word="resilient" progress={scrollYProgress} range={[0.70, 0.80]} isEditorial />
          <ScrubWord word="cloud" progress={scrollYProgress} range={[0.72, 0.82]} />
          <ScrubWord word="systems" progress={scrollYProgress} range={[0.74, 0.84]} />
        </div>

        {/* LINE 5: that drive [Curated Dual App Capsule] growth. (With Liquid Glow Underline) */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-tight flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4">
          <ScrubWord word="that" progress={scrollYProgress} range={[0.76, 0.86]} />
          <ScrubWord word="drive" progress={scrollYProgress} range={[0.78, 0.88]} />
          <InlineAppCapsule progress={scrollYProgress} range={[0.80, 0.90]} />
          <LiquidUnderlineWord word="growth." progress={scrollYProgress} range={[0.82, 0.92]} />
        </div>

        {/* Bottom Connect Pill & Animated Scroll Ticker matching laptop reference */}
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
// 1. GSAP-STYLE SCROLL SCRUB WORD (Progressive Karaoke Illumination)
// ============================================================
interface ScrubWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isEditorial?: boolean;
}

const ScrubWord: React.FC<ScrubWordProps> = ({
  word,
  progress,
  range,
  isEditorial = false,
}) => {
  const opacity = useTransform(progress, range, [0.28, 1], { clamp: true });
  const filter = useTransform(progress, range, ["blur(3px)", "blur(0px)"], { clamp: true });
  const y = useTransform(progress, range, [12, 0], { clamp: true });

  return (
    <motion.span
      style={{ opacity, filter, y }}
      className={`inline-block transition-colors duration-150 origin-bottom ${
        isEditorial
          ? "font-editorial font-normal italic text-purple-800 tracking-normal px-1"
          : "font-roboto-condensed font-black tracking-tight text-slate-900"
      }`}
    >
      {word}
    </motion.span>
  );
};

// ============================================================
// 2. HIGHLIGHTED TEXT TYPE CAPSULE ("scalable")
// ============================================================
const HighlightedCapsuleWord: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.35, 1], { clamp: true });
  const y = useTransform(progress, range, [12, 0], { clamp: true });
  const scale = useTransform(progress, range, [0.92, 1], { clamp: true });

  return (
    <motion.span
      style={{ opacity, y, scale }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex items-center px-3 sm:px-4 py-0.5 rounded-full bg-white/75 backdrop-blur-md border border-purple-300/80 shadow-[0_4px_16px_rgba(147,51,234,0.08)] text-purple-900 font-editorial font-normal italic cursor-pointer select-none mx-0.5"
    >
      {word}
    </motion.span>
  );
};

// ============================================================
// 3. INLINE SUNSET GLOSSY PEBBLE (Matching the Orange Blob from Photo)
// ============================================================
const InlineSunsetPebble: React.FC<{
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.6, 1], { clamp: true });
  const y = useTransform(progress, range, [14, 0], { clamp: true });

  return (
    <motion.span
      style={{ opacity, scale, y }}
      className="inline-flex items-center align-middle mx-1 sm:mx-1.5"
    >
      <motion.div
        animate={{ y: [0, -3.5, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
        whileHover={{ scale: 1.25, rotate: -6 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-6 sm:w-13 sm:h-7 md:w-14 md:h-8 rounded-full bg-gradient-to-r from-[#FF5E3A] via-[#FF8A00] to-[#D946EF] shadow-[0_6px_20px_rgba(255,100,50,0.35)] relative overflow-hidden cursor-pointer select-none"
      >
        {/* Specular 3D glass highlight */}
        <span className="absolute top-0.5 inset-x-2 h-1.5 rounded-full bg-white/60 blur-[0.6px]" />
      </motion.div>
    </motion.span>
  );
};

// ============================================================
// 4. INLINE CURATED DUAL APP CAPSULE (Matching Eazyul from Photo)
// ============================================================
const InlineAppCapsule: React.FC<{
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.7, 1], { clamp: true });
  const y = useTransform(progress, range, [14, 0], { clamp: true });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      style={{ opacity, scale, y }}
      className="inline-flex items-center align-middle mx-1 sm:mx-2 relative"
    >
      <motion.div
        whileHover={{ scale: 1.12, rotate: 2 }}
        transition={{ type: "spring", stiffness: 350, damping: 18 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center shadow-[0_4px_16px_rgba(0,0,0,0.2)] cursor-pointer select-none rounded-full overflow-hidden"
      >
        {/* Left Half: Dark pill with micro arrow icon & code */}
        <div className="bg-slate-950 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 flex items-center gap-1.5 text-[9px] sm:text-[11px] font-mono font-bold tracking-tight border-y border-l border-white/20">
          <ArrowUpRight className="w-3 h-3 text-purple-300" />
          <span>SYS.01</span>
        </div>

        {/* Right Half: Miniature high-res architectural gradient canvas */}
        <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-tr from-indigo-600 via-purple-600 to-amber-400 border-y border-r border-white/20 flex items-center justify-center relative overflow-hidden">
          <Sparkles className="w-3 h-3 text-white/90 animate-pulse" />
        </div>
      </motion.div>

      {hovered && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-900 text-white text-[9px] font-mono whitespace-nowrap shadow-md pointer-events-none z-20">
          Production Architecture
        </span>
      )}
    </motion.span>
  );
};

// ============================================================
// 5. LIQUID GLOW UNDERLINED WORD ("growth.")
// ============================================================
const LiquidUnderlineWord: React.FC<{
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ word, progress, range }) => {
  const opacity = useTransform(progress, range, [0.35, 1], { clamp: true });
  const y = useTransform(progress, range, [12, 0], { clamp: true });
  const lineWidth = useTransform(progress, range, ["0%", "100%"], { clamp: true });

  return (
    <motion.span
      style={{ opacity, y }}
      className="relative inline-block font-editorial font-normal italic text-purple-900 cursor-pointer px-1"
    >
      <span>{word}</span>
      {/* Animated Liquid Accent Stroke */}
      <motion.span
        style={{ width: lineWidth }}
        className="absolute -bottom-1 left-0 h-[3px] sm:h-[4px] bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-full shadow-[0_2px_8px_rgba(168,85,247,0.5)]"
      />
    </motion.span>
  );
};
