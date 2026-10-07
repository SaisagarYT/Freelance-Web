"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

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
      {/* GSAP-CALIBER KINETIC TYPOGRAPHY WITH SCULPTURAL VECTOR SHAPES */}
      {/* ============================================================ */}
      <div className="max-w-5xl mx-auto text-center relative z-10 px-4 py-8 flex flex-col items-center justify-center space-y-3 sm:space-y-5">
        {/* Eyebrow Micro-Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/10 border border-purple-900/15 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-purple-950 mb-1 sm:mb-2 shadow-xs"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          <span>ENGINEERING THAT ELEVATES THE STANDARD</span>
        </motion.div>

        {/* LINE 1: KAIZEN SOLVES [4-Petal Pinwheel] architects */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black font-roboto-condensed tracking-tight text-slate-900 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
          <KineticWord word="KAIZEN" progress={scrollYProgress} range={[0.36, 0.46]} />
          <KineticWord word="SOLVES" progress={scrollYProgress} range={[0.40, 0.50]} />
          <KineticPinwheel progress={scrollYProgress} range={[0.42, 0.52]} />
          <KineticWord word="architects" progress={scrollYProgress} range={[0.44, 0.54]} isHighlight />
        </div>

        {/* LINE 2: scalable [8-Point Asterisk Star] web apps, */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black font-roboto-condensed tracking-tight text-slate-900 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
          <KineticWord word="scalable" progress={scrollYProgress} range={[0.48, 0.58]} isHighlight />
          <KineticAsterisk progress={scrollYProgress} range={[0.50, 0.60]} />
          <KineticWord word="web" progress={scrollYProgress} range={[0.52, 0.62]} />
          <KineticWord word="apps," progress={scrollYProgress} range={[0.54, 0.64]} />
        </div>

        {/* LINE 3: fluid [Lightning Bolt] [Coiled 3D Spring] interfaces, */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black font-roboto-condensed tracking-tight text-slate-900 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
          <KineticWord word="fluid" progress={scrollYProgress} range={[0.58, 0.68]} isHighlight />
          <div className="inline-flex items-center gap-1 sm:gap-2 mx-1 sm:mx-2 align-middle">
            <KineticLightningBolt progress={scrollYProgress} range={[0.60, 0.70]} />
            <KineticCoiledSpring progress={scrollYProgress} range={[0.62, 0.72]} />
          </div>
          <KineticWord word="interfaces," progress={scrollYProgress} range={[0.64, 0.74]} isHighlight />
        </div>

        {/* LINE 4: and resilient cloud systems */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black font-roboto-condensed tracking-tight text-slate-900 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
          <KineticWord word="and" progress={scrollYProgress} range={[0.68, 0.78]} />
          <KineticWord word="resilient" progress={scrollYProgress} range={[0.70, 0.80]} isHighlight />
          <KineticWord word="cloud" progress={scrollYProgress} range={[0.72, 0.82]} />
          <KineticWord word="systems" progress={scrollYProgress} range={[0.74, 0.84]} />
        </div>

        {/* LINE 5: that drive compounding growth. */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black font-roboto-condensed tracking-tight text-slate-900 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
          <KineticWord word="that" progress={scrollYProgress} range={[0.76, 0.86]} />
          <KineticWord word="drive" progress={scrollYProgress} range={[0.78, 0.88]} />
          <KineticWord word="growth." progress={scrollYProgress} range={[0.82, 0.92]} isHighlight />
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 1. KINETIC WORD WITH INTERACTIVE GSAP CHARACTER HOVER
// ============================================================
interface KineticWordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
}

const KineticWord: React.FC<KineticWordProps> = ({
  word,
  progress,
  range,
  isHighlight = false,
}) => {
  const opacity = useTransform(progress, range, [0.25, 1], { clamp: true });
  const filter = useTransform(progress, range, ["blur(4px)", "blur(0px)"], { clamp: true });
  const y = useTransform(progress, range, [16, 0], { clamp: true });

  const letters = word.split("");

  return (
    <motion.span
      style={{ opacity, filter, y }}
      className={`inline-flex items-center cursor-default transition-colors duration-200 ${
        isHighlight
          ? "text-[#581C87] hover:text-[#4A044E]"
          : "text-slate-950 hover:text-purple-950"
      }`}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          whileHover={{
            y: -7,
            scale: 1.12,
            rotate: i % 2 === 0 ? -3 : 3,
            transition: { type: "spring", stiffness: 450, damping: 12 },
          }}
          className="inline-block origin-bottom"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// ============================================================
// 2. SHAPE 1: GSAP 4-PETAL KINETIC PINWHEEL (As seen on gsap.com)
// ============================================================
const KineticPinwheel: React.FC<{
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.4, 1], { clamp: true });
  const y = useTransform(progress, range, [16, 0], { clamp: true });

  return (
    <motion.span
      style={{ opacity, scale, y }}
      className="inline-flex items-center align-middle mx-1 sm:mx-2"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        whileHover={{
          scale: 1.3,
          rotate: 720,
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        whileTap={{ scale: 0.9 }}
        className="w-8 h-8 sm:w-11 sm:h-11 md:w-13 md:h-13 cursor-pointer select-none filter drop-shadow-[0_6px_14px_rgba(249,115,22,0.35)]"
      >
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <defs>
            <linearGradient id="gsapPinwheel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="50%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
          </defs>
          {/* 4 Sculptural Teardrop Petals Meeting at Center */}
          <path d="M24 24 C24 13, 14 7, 10 11 C6 15, 13 24, 24 24 Z" fill="url(#gsapPinwheel)" />
          <path d="M24 24 C35 24, 41 14, 37 10 C33 6, 24 13, 24 24 Z" fill="url(#gsapPinwheel)" />
          <path d="M24 24 C24 35, 34 41, 38 37 C42 33, 35 24, 24 24 Z" fill="url(#gsapPinwheel)" />
          <path d="M24 24 C13 24, 7 34, 11 38 C15 42, 24 35, 24 24 Z" fill="url(#gsapPinwheel)" />
        </svg>
      </motion.div>
    </motion.span>
  );
};

// ============================================================
// 3. SHAPE 2: GSAP 8-POINT ROTATING ASTERISK STAR (As seen on gsap.com)
// ============================================================
const KineticAsterisk: React.FC<{
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.4, 1], { clamp: true });
  const y = useTransform(progress, range, [16, 0], { clamp: true });

  return (
    <motion.span
      style={{ opacity, scale, y }}
      className="inline-flex items-center align-middle mx-1 sm:mx-2"
    >
      <motion.div
        animate={{
          rotate: [0, 45, 90],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.35,
          rotate: 180,
          transition: { type: "spring", stiffness: 350, damping: 14 },
        }}
        whileTap={{ scale: 0.9 }}
        className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer select-none filter drop-shadow-[0_6px_14px_rgba(244,63,94,0.35)]"
      >
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <defs>
            <linearGradient id="gsapAsterisk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FB7185" />
              <stop offset="50%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
          </defs>
          {/* 4 Overlapping Rounded Bars Form an 8-Point Star */}
          <rect x="21" y="6" width="6" height="36" rx="3" fill="url(#gsapAsterisk)" />
          <rect x="6" y="21" width="36" height="6" rx="3" fill="url(#gsapAsterisk)" />
          <rect
            x="21"
            y="6"
            width="6"
            height="36"
            rx="3"
            fill="url(#gsapAsterisk)"
            transform="rotate(45 24 24)"
          />
          <rect
            x="21"
            y="6"
            width="6"
            height="36"
            rx="3"
            fill="url(#gsapAsterisk)"
            transform="rotate(-45 24 24)"
          />
        </svg>
      </motion.div>
    </motion.span>
  );
};

// ============================================================
// 4. SHAPE 3: GSAP GEOMETRIC LIGHTNING BOLT (As seen on gsap.com)
// ============================================================
const KineticLightningBolt: React.FC<{
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.4, 1], { clamp: true });
  const y = useTransform(progress, range, [16, 0], { clamp: true });

  return (
    <motion.span
      style={{ opacity, scale, y }}
      className="inline-flex items-center align-middle"
    >
      <motion.div
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.4,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.28,
          rotate: [-4, 4, -4],
          transition: { type: "spring", stiffness: 400, damping: 10 },
        }}
        whileTap={{ scale: 0.9 }}
        className="w-6 h-8 sm:w-8 sm:h-11 md:w-9 md:h-13 cursor-pointer select-none filter drop-shadow-[0_4px_12px_rgba(16,185,129,0.45)]"
      >
        <svg viewBox="0 0 32 48" className="w-full h-full">
          <defs>
            <linearGradient id="gsapBolt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>
          <path
            d="M 18 2 L 6 22 L 17 22 L 13 46 L 27 22 L 16 22 Z"
            fill="url(#gsapBolt)"
            stroke="#047857"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </motion.span>
  );
};

// ============================================================
// 5. SHAPE 4: GSAP 3D WAVY COILED SPRING (As seen on gsap.com)
// ============================================================
const KineticCoiledSpring: React.FC<{
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.4, 1], { clamp: true });
  const y = useTransform(progress, range, [16, 0], { clamp: true });

  return (
    <motion.span
      style={{ opacity, scale, y }}
      className="inline-flex items-center align-middle"
    >
      <motion.div
        animate={{
          scaleY: [1, 1.16, 0.92, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.3,
          scaleY: 1.3,
          rotate: -8,
          transition: { type: "spring", stiffness: 350, damping: 12 },
        }}
        whileTap={{ scale: 0.9 }}
        className="w-5 h-8 sm:w-7 sm:h-11 md:w-8 md:h-13 cursor-pointer select-none filter drop-shadow-[0_4px_12px_rgba(168,85,247,0.4)]"
      >
        <svg viewBox="0 0 28 48" className="w-full h-full">
          <defs>
            <linearGradient id="gsapSpring" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="50%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <path
            d="M 14 3 C 24 3, 24 11, 14 13 C 4 15, 4 23, 14 25 C 24 27, 24 35, 14 37 C 8 39, 8 45, 14 45"
            fill="none"
            stroke="url(#gsapSpring)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </motion.span>
  );
};
