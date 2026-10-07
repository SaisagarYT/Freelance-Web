"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export const TrustStatementSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Entrance Bloom Progress (Hero -> Section 2 transition)
  const { scrollYProgress: bloomProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  // 2. Pinned Runway Progress (Scrubbed Kinetic Typography & Bespoke Icon Choreography)
  const { scrollYProgress: kineticProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 3 Multi-Edge Liquid Waves - exactly as before
  const leftScale = useTransform(
    bloomProgress,
    [0.35, 0.65, 0.88, 1.00],
    [0.05, 0.45, 1.15, 1.65],
    { clamp: true }
  );
  const leftOpacity = useTransform(
    bloomProgress,
    [0.35, 0.65, 0.88, 1.00],
    [0, 0.35, 0.70, 0.92],
    { clamp: true }
  );

  const rightScale = useTransform(
    bloomProgress,
    [0.38, 0.68, 0.89, 1.00],
    [0.05, 0.45, 1.15, 1.65],
    { clamp: true }
  );
  const rightOpacity = useTransform(
    bloomProgress,
    [0.38, 0.68, 0.89, 1.00],
    [0, 0.35, 0.70, 0.92],
    { clamp: true }
  );

  const bottomScale = useTransform(
    bloomProgress,
    [0.42, 0.72, 0.92, 1.00],
    [0.05, 0.40, 1.20, 1.75],
    { clamp: true }
  );
  const bottomOpacity = useTransform(
    bloomProgress,
    [0.42, 0.72, 0.92, 1.00],
    [0, 0.35, 0.70, 0.92],
    { clamp: true }
  );

  // Final Background Coalescence - fills smoothly as purple locks at top
  const unifiedOpacity = useTransform(bloomProgress, [0.88, 1.00], [0, 1], { clamp: true });

  // Seamless top white blend that dissolves away gradually as purple finishes blooming
  const topBlendOpacity = useTransform(bloomProgress, [0.45, 0.92], [1, 0], { clamp: true });

  // Eyebrow Micro-Badge Entrance
  const eyebrowY = useTransform(kineticProgress, [0.00, 0.12], [-20, 0], { clamp: true });
  const eyebrowOpacity = useTransform(kineticProgress, [0.00, 0.10], [0, 1], { clamp: true });

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[250vh] bg-white"
    >
      {/* Sticky Fullscreen Stage: Pins in viewport while user scrolls through the runway */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 bg-white select-none">
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
        {/* GSAP-CALIBER KINETIC TYPOGRAPHY WITH BESPOKE SCROLL CHOREOGRAPHY */}
        {/* ============================================================ */}
        <div className="max-w-6xl mx-auto text-center relative z-10 px-4 py-8 flex flex-col items-center justify-center space-y-2 sm:space-y-4">
          {/* Eyebrow Micro-Badge */}
          <motion.div
            style={{ y: eyebrowY, opacity: eyebrowOpacity }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/10 border border-purple-900/15 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest text-purple-950 mb-2 shadow-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            <span>ENGINEERING THAT ELEVATES THE STANDARD</span>
          </motion.div>

          {/* LINE 1: KAIZEN SOLVES [Windmill] architects */}
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-black font-display tracking-tight sm:tracking-tighter text-slate-950 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
            <KineticWord word="KAIZEN" progress={kineticProgress} range={[0.06, 0.24]} />
            <KineticWord word="SOLVES" progress={kineticProgress} range={[0.08, 0.26]} />
            <div className="relative inline-flex items-center mx-1 sm:mx-2 align-middle">
              <GSAPWindmill progress={kineticProgress} range={[0.08, 0.28]} />
            </div>
            <KineticWord word="architects" progress={kineticProgress} range={[0.12, 0.30]} isHighlight />
          </div>

          {/* LINE 2: scalable [Star] web apps, */}
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-black font-display tracking-tight sm:tracking-tighter text-slate-950 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
            <KineticWord word="scalable" progress={kineticProgress} range={[0.22, 0.40]} isHighlight />
            <div className="relative inline-flex items-center mx-1 sm:mx-2 align-middle">
              <GSAPStar progress={kineticProgress} range={[0.24, 0.44]} />
            </div>
            <KineticWord word="web" progress={kineticProgress} range={[0.28, 0.46]} />
            <KineticWord word="apps," progress={kineticProgress} range={[0.30, 0.48]} />
          </div>

          {/* LINE 3: fluid [3D Worm] interfaces, */}
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-black font-display tracking-tight sm:tracking-tighter text-slate-950 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
            <KineticWord word="fluid" progress={kineticProgress} range={[0.38, 0.56]} isHighlight />
            <div className="relative inline-flex items-center mx-1 sm:mx-2 align-middle">
              <GSAP3DWorm progress={kineticProgress} range={[0.40, 0.60]} />
            </div>
            <KineticWord word="interfaces," progress={kineticProgress} range={[0.44, 0.62]} isHighlight />
          </div>

          {/* LINE 4: and resilient cloud systems */}
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-black font-display tracking-tight sm:tracking-tighter text-slate-950 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
            <KineticWord word="and" progress={kineticProgress} range={[0.54, 0.72]} />
            <KineticWord word="resilient" progress={kineticProgress} range={[0.56, 0.74]} isHighlight />
            <KineticWord word="cloud" progress={kineticProgress} range={[0.60, 0.78]} />
            <KineticWord word="systems" progress={kineticProgress} range={[0.62, 0.80]} />
          </div>

          {/* LINE 5: that drive compounding growth. */}
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[84px] font-black font-display tracking-tight sm:tracking-tighter text-slate-950 leading-[1.08] flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-5">
            <KineticWord word="that" progress={kineticProgress} range={[0.68, 0.86]} />
            <KineticWord word="drive" progress={kineticProgress} range={[0.70, 0.88]} />
            <KineticWord word="growth." progress={kineticProgress} range={[0.74, 0.92]} isHighlight />
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// 1. KINETIC WORD WITH SCROLL BOUNCE, BLUR CLEARING & HOVER
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
  const [start, end] = range;
  const mid = start + (end - start) * 0.72;

  // Elastic scroll bounce: starts 55px below, overshoots -7px upward, settles at 0px
  const y = useTransform(progress, [start, mid, end], [55, -7, 0], { clamp: true });
  // Blur effect clearing smoothly on scroll
  const filter = useTransform(progress, [start, end], ["blur(14px)", "blur(0px)"], { clamp: true });
  // Opacity fade in
  const opacity = useTransform(progress, [start, mid], [0, 1], { clamp: true });
  // Subtle scale pop overshoot
  const scale = useTransform(progress, [start, mid, end], [0.90, 1.03, 1.00], { clamp: true });

  const letters = word.split("");

  return (
    <motion.span
      style={{ y, filter, opacity, scale }}
      className={`inline-flex items-center cursor-default transition-colors duration-200 ${
        isHighlight
          ? "text-[#581C87] hover:text-[#3B0764]"
          : "text-slate-950 hover:text-purple-950"
      }`}
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          whileHover={{
            y: -8,
            scale: 1.15,
            rotate: i % 2 === 0 ? -3 : 3,
            color: isHighlight ? "#3B0764" : "#6B21A8",
            transition: { type: "spring", stiffness: 450, damping: 12 },
          }}
          className="inline-block origin-bottom transition-colors duration-150"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// ============================================================
// 2. AUTHENTIC GSAP WINDMILL (Scroll Spin & Scale Overshoot)
// ============================================================
const GSAPWindmill: React.FC<{
  progress: MotionValue<number>;
  range: [number, number];
  size?: string;
  className?: string;
}> = ({
  progress,
  range,
  size = "w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
  className = "",
}) => {
  const [start, end] = range;
  const mid = start + (end - start) * 0.72;

  // Custom Windmill Scroll Animation: spins from -180deg to 390deg overshoot, settling at 360deg
  const scrollRotate = useTransform(progress, [start, mid, end], [-180, 390, 360], { clamp: true });
  const scale = useTransform(progress, [start, mid, end], [0, 1.28, 1.0], { clamp: true });
  const opacity = useTransform(progress, [start, mid], [0, 1], { clamp: true });
  const y = useTransform(progress, [start, mid, end], [50, -8, 0], { clamp: true });

  return (
    <motion.div
      style={{ rotate: scrollRotate, scale, opacity, y }}
      className={`relative inline-block cursor-pointer select-none filter drop-shadow-[0_8px_18px_rgba(255,135,9,0.38)] ${size} ${className}`}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        whileHover={{
          scale: 1.28,
          rotate: 720,
          transition: { type: "spring", stiffness: 320, damping: 14 },
        }}
        whileTap={{ scale: 0.9 }}
        className="w-full h-full"
      >
        <svg
          viewBox="0 0 137 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id="gsapWindmillGrad"
              x1="-76.6791"
              y1="-15.6157"
              x2="165.682"
              y2="81.0082"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.427083" stopColor="#FF8709" />
              <stop offset="0.791667" stopColor="#F7BDF8" />
            </linearGradient>
            <pattern
              id="pattern-gsap-windmill"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <image href="/noise.png" width="500" height="500" transform="scale(0.003)" />
            </pattern>
          </defs>
          <path
            d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z"
            fill="url(#gsapWindmillGrad)"
          />
          <path
            d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z"
            fill="url(#pattern-gsap-windmill)"
            fillOpacity="0.45"
            style={{ mixBlendMode: "multiply" }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

// ============================================================
// 3. AUTHENTIC GSAP 8-POINT STAR (Scroll Nova Burst & Rotation)
// ============================================================
const GSAPStar: React.FC<{
  progress: MotionValue<number>;
  range: [number, number];
  size?: string;
  className?: string;
}> = ({
  progress,
  range,
  size = "w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16",
  className = "",
}) => {
  const [start, end] = range;
  const mid = start + (end - start) * 0.72;

  // Custom Star Scroll Animation: counter-rotates and bursts open with 1.35x spring pop
  const scrollRotate = useTransform(progress, [start, mid, end], [-120, 25, 0], { clamp: true });
  const scale = useTransform(progress, [start, mid, end], [0, 1.35, 1.0], { clamp: true });
  const opacity = useTransform(progress, [start, mid], [0, 1], { clamp: true });
  const y = useTransform(progress, [start, mid, end], [50, -8, 0], { clamp: true });

  return (
    <motion.div
      style={{ rotate: scrollRotate, scale, opacity, y }}
      className={`relative inline-block cursor-pointer select-none filter drop-shadow-[0_8px_18px_rgba(255,119,75,0.4)] ${size} ${className}`}
    >
      <motion.div
        animate={{
          rotate: [0, 45, 90],
          scale: [1, 1.06, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.32,
          rotate: 180,
          transition: { type: "spring", stiffness: 350, damping: 14 },
        }}
        whileTap={{ scale: 0.9 }}
        className="w-full h-full"
      >
        <svg
          viewBox="0 0 157 156"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-full h-full"
        >
          <defs>
            <radialGradient
              id="gsapStarGrad"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(124.192 87.08) rotate(149.757) scale(126.034)"
            >
              <stop stopColor="#FFEBE7" />
              <stop offset="0.6721" stopColor="#FF9C7C" />
              <stop offset="0.8164" stopColor="#FF9983" />
              <stop offset="0.9014" stopColor="#FF774B" />
              <stop offset="1" stopColor="#E76F00" />
            </radialGradient>
            <pattern
              id="pattern-gsap-star"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <image href="/noise.png" width="500" height="500" transform="scale(0.003)" />
            </pattern>
          </defs>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z"
            fill="url(#gsapStarGrad)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z"
            fill="url(#gsapStarGrad)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z"
            fill="url(#pattern-gsap-star)"
            fillOpacity="0.45"
            style={{ mixBlendMode: "multiply" }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

// ============================================================
// 4. AUTHENTIC 3D COILED WORM (Scroll Spring Uncoil & Bounce)
// ============================================================
const GSAP3DWorm: React.FC<{
  progress: MotionValue<number>;
  range: [number, number];
  size?: string;
  className?: string;
}> = ({
  progress,
  range,
  size = "w-7 h-11 sm:w-10 sm:h-16 md:w-13 md:h-20 lg:w-15 lg:h-24",
  className = "",
}) => {
  const [start, end] = range;
  const mid = start + (end - start) * 0.72;

  // Custom 3D Worm Scroll Animation: uncoils elastically from compressed 0.1 scaleY to 1.35x spring stretch to 1.0 resting
  const scaleY = useTransform(progress, [start, mid, end], [0.1, 1.35, 1.0], { clamp: true });
  const scaleX = useTransform(progress, [start, mid, end], [0.4, 1.15, 1.0], { clamp: true });
  const rotate = useTransform(progress, [start, mid, end], [0, 32, 24], { clamp: true });
  const y = useTransform(progress, [start, mid, end], [50, -10, 0], { clamp: true });
  const opacity = useTransform(progress, [start, mid], [0, 1], { clamp: true });

  return (
    <motion.div
      style={{ scaleY, scaleX, rotate, y, opacity }}
      className={`relative inline-block cursor-pointer select-none filter drop-shadow-[0_8px_18px_rgba(168,85,247,0.4)] ${size} ${className}`}
    >
      <motion.div
        animate={{
          scaleY: [1, 1.14, 0.94, 1],
          rotate: [0, 4, -4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.2,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.35,
          rotate: 35,
          filter: "drop-shadow(0 12px 24px rgba(168,85,247,0.55))",
          transition: { type: "spring", stiffness: 380, damping: 12 },
        }}
        whileTap={{ scale: 0.9 }}
        className="w-full h-full"
      >
        <img
          src="/worm.png"
          alt="3D Coiled Spring"
          className="w-full h-full object-contain pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
};
