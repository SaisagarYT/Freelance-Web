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

  // 3 Multi-Edge Liquid Waves - tuned to expand much more gradually and slowly:
  // Starts subtly around ~0.36, stays as a gentle edge glow across the middle scroll, and converges fully as Section 2 reaches the top
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

  // Short, punchy statement
  const statementWords = [
    "KAIZEN",
    "SOLVES",
    "architects",
    "scalable",
    "web",
    "apps,",
    "fluid",
    "60",
    "FPS",
    "interfaces,",
    "and",
    "resilient",
    "cloud",
    "systems",
    "that",
    "drive",
    "growth.",
  ];

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 bg-white"
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

      {/* FULL-SCREEN CENTERED STATEMENT */}
      <div className="max-w-5xl mx-auto text-center relative z-10 px-4 py-8 flex flex-col items-center">
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-roboto-condensed tracking-tight text-slate-900 leading-[1.14] flex flex-wrap justify-center gap-x-3.5 sm:gap-x-4.5 gap-y-2.5 sm:gap-y-3.5">
          {statementWords.map((word, index) => {
            const total = statementWords.length;
            // Distribute words smoothly across scroll progress [0.38, 0.96] in harmony with slower liquid background
            const start = 0.38 + (index / total) * 0.48;
            const end = start + 0.10;

            return (
              <WordBlurPopItem
                key={index}
                word={word}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
};

// Word item that pops up from bottom to top with guaranteed blur clearance
const WordBlurPopItem = ({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const y = useTransform(progress, range, [36, 0], { clamp: true });
  const filter = useTransform(progress, range, ["blur(14px)", "blur(0px)"], { clamp: true });
  const opacity = useTransform(progress, range, [0.12, 1], { clamp: true });
  const scale = useTransform(progress, range, [0.86, 1], { clamp: true });

  const isHighlight =
    word === "scalable" ||
    word === "apps," ||
    word === "60" ||
    word === "FPS" ||
    word === "interfaces," ||
    word === "resilient" ||
    word === "growth.";

  return (
    <motion.span
      style={{
        y,
        filter,
        opacity,
        scale,
      }}
      className={`inline-block transition-colors duration-150 origin-bottom font-roboto-condensed font-black tracking-tight ${isHighlight
        ? "text-purple-700 font-black"
        : "text-slate-900 font-black"
        }`}
    >
      {word}
    </motion.span>
  );
};
