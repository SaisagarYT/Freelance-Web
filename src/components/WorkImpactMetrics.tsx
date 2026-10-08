"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plus, TrendingUp, Zap, ShieldCheck, Activity, Unlock } from "lucide-react";

interface MetricItem {
  id: string;
  code: string;
  value: string;
  label: string;
  description: string;
  badge: string;
  icon: React.ElementType;
}

const METRICS: MetricItem[] = [
  {
    id: "metric-capital",
    code: "METRIC_01",
    value: "$240M+",
    label: "CLIENT CAPITAL RAISED",
    description: "Across client platforms backed by Tier-1 VCs including Sequoia, a16z, and Y Combinator.",
    badge: "VENTURE IMPACT",
    icon: TrendingUp,
  },
  {
    id: "metric-latency",
    code: "METRIC_02",
    value: "14ms",
    label: "GLOBAL EDGE P99 LATENCY",
    description: "Multi-region edge execution routes client requests with near-zero geographical delay.",
    badge: "SUB-SECOND ENGINE",
    icon: Zap,
  },
  {
    id: "metric-uptime",
    code: "METRIC_03",
    value: "99.999%",
    label: "ENTERPRISE UPTIME SLA",
    description: "Self-healing microservice clusters engineered for zero-downtime continuous operations.",
    badge: "MISSION CRITICAL",
    icon: ShieldCheck,
  },
  {
    id: "metric-growth",
    code: "METRIC_04",
    value: "3.8x",
    label: "AVERAGE CONVERSION SURGE",
    description: "Observed in the first 30 days post-deployment through fluid 60FPS UI and sub-second load times.",
    badge: "MEASURED GROWTH",
    icon: Activity,
  },
];

// 2 full cycles of digits 0..9 (20 items total, each item is exactly 5% of height)
const TWENTY_DIGITS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
];

interface TumblerDigitProps {
  digit: number;
  digitIndex: number;
  inView: boolean;
  isHover: boolean;
  triggerKey: number;
}

const TumblerDigit: React.FC<TumblerDigitProps> = ({
  digit,
  digitIndex,
  inView,
  isHover,
  triggerKey,
}) => {
  // Target index in the second cycle (10 + digit). Total items = 20.
  // Each item is exactly 5% (1 / 20 * 100%)
  const targetIndex = 10 + digit;
  const targetYPercentage = targetIndex * 5;

  // Exact durations requested by user:
  // Scroll animation: ~2.0s
  // Hover animation: ~1.0s
  const duration = isHover ? 0.95 : 1.85;
  const staggerDelay = digitIndex * (isHover ? 0.025 : 0.05);

  return (
    <div className="relative inline-flex items-center justify-center overflow-hidden h-[1.15em] leading-none select-none">
      {/* Invisible natural sizer so container matches the exact width of the digit */}
      <span className="invisible opacity-0 select-none px-[0.5px]">
        {digit}
      </span>

      {/* GPU-accelerated tumbler strip */}
      <motion.div
        key={triggerKey}
        initial={{ y: "0%" }}
        animate={{ y: inView ? `-${targetYPercentage}%` : "0%" }}
        transition={{
          duration,
          delay: staggerDelay,
          // Silky smooth cubic-bezier curve that spins fast and smoothly locks in
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-x-0 top-0 flex flex-col will-change-transform"
      >
        {TWENTY_DIGITS.map((num, i) => (
          <div
            key={i}
            className="h-[1.15em] w-full flex items-center justify-center leading-none tabular-nums select-none"
          >
            {num}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface CombinationLockerDisplayProps {
  value: string;
  inView: boolean;
  triggerKey: number;
  isHover: boolean;
}

const CombinationLockerDisplay: React.FC<CombinationLockerDisplayProps> = ({
  value,
  inView,
  triggerKey,
  isHover,
}) => {
  let digitCounter = 0;
  const characters = Array.from(value).map((char) => {
    const isNumeric = /\d/.test(char);
    const digitIdx = isNumeric ? digitCounter++ : -1;
    return {
      char,
      isNumeric,
      digitValue: isNumeric ? parseInt(char, 10) : 0,
      digitIdx,
    };
  });

  return (
    <div className="inline-flex items-center font-roboto-condensed font-black tracking-tight tabular-nums select-none">
      {characters.map((item, idx) => {
        if (!item.isNumeric) {
          return (
            <span key={idx} className="inline-flex items-center justify-center leading-none px-[0.5px]">
              {item.char}
            </span>
          );
        }

        return (
          <TumblerDigit
            key={`${idx}-${triggerKey}`}
            digit={item.digitValue}
            digitIndex={item.digitIdx}
            inView={inView}
            isHover={isHover}
            triggerKey={triggerKey}
          />
        );
      })}
    </div>
  );
};

export const WorkImpactMetrics: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.25 });

  // Individual trigger keys per card to allow individual hover locker tumbling
  const [triggerKeys, setTriggerKeys] = useState<Record<string, number>>({
    "metric-capital": 1,
    "metric-latency": 1,
    "metric-uptime": 1,
    "metric-growth": 1,
  });

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCardMouseEnter = (id: string) => {
    setHoveredCard(id);
    setTriggerKeys((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleCardMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section
      ref={sectionRef}
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
      {/* SECTION HEADER & ARCHITECTURAL METADATA */}
      <div className="max-w-7xl mx-auto mb-10 sm:mb-14 pb-6 border-b border-[#E2DCF0] flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>01 // QUANTIFIED SYSTEM TELEMETRY</span>
          </div>
          <h2 className="font-roboto-condensed font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-950 uppercase">
            MEASURED BY THE NUMBERS
          </h2>
        </div>

        <div className="flex items-center gap-4 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
          <span className="hidden sm:inline">VAULT LOCKER PROTOCOL</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <span>PRODUCTION AUDIT // 2026</span>
        </div>
      </div>

      {/* 4-COLUMN ARCHITECTURAL METRIC GRID WITH COMBINATION LOCKER WHEELS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#E2DCF0] bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(15,23,42,0.04)]">
        {METRICS.map((metric, idx) => {
          const Icon = metric.icon;
          const isHovered = hoveredCard === metric.id;
          const currentKey = triggerKeys[metric.id];

          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onMouseEnter={() => handleCardMouseEnter(metric.id)}
              onMouseLeave={handleCardMouseLeave}
              className="relative p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E2DCF0] last:border-b-0 last:border-r-0 hover:bg-white transition-all duration-300 group cursor-pointer"
            >
              {/* Corner Architectural Crosshair Marker (Rotates 90deg on Hover) */}
              <div className="absolute top-2.5 right-2.5 text-purple-300 opacity-60 group-hover:opacity-100 group-hover:rotate-90 group-hover:text-purple-600 transition-all duration-300">
                <Plus className="w-4 h-4 stroke-[1.5]" />
              </div>

              {/* Card Header: Code & Category Tag */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-widest uppercase flex items-center gap-1.5">
                  <span>{metric.code}</span>
                  {isHovered && (
                    <span className="text-[9px] text-purple-600 font-mono tracking-tight animate-pulse flex items-center gap-0.5">
                      <Unlock className="w-2.5 h-2.5" />
                      <span>SPIN</span>
                    </span>
                  )}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[9px] sm:text-[10px] font-bold text-purple-700 bg-purple-50 group-hover:bg-purple-100 px-2 py-0.5 rounded border border-purple-200/60 uppercase tracking-wider transition-colors">
                  <Icon className="w-2.5 h-2.5" />
                  <span>{metric.badge}</span>
                </span>
              </div>

              {/* Central Value (Combination Safe Tumbler Locker Display) */}
              <div className="my-2">
                <div className="font-roboto-condensed font-black text-4xl sm:text-5xl lg:text-[54px] tracking-tight text-slate-950 leading-none group-hover:text-purple-700 transition-colors duration-300 min-h-[58px] flex items-center">
                  <CombinationLockerDisplay
                    value={metric.value}
                    inView={isInView}
                    triggerKey={currentKey}
                    isHover={isHovered}
                  />
                </div>
                <div className="font-roboto-condensed font-bold text-xs sm:text-sm text-slate-700 tracking-wider uppercase mt-2.5">
                  {metric.label}
                </div>
              </div>

              {/* Bottom Description */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <p className="font-roboto-condensed font-medium text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FOOTER RUNTIME GUARANTEE BANNER */}
      <div className="max-w-7xl mx-auto mt-6 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-500 px-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
          <span>METHODOLOGY: REAL PRODUCTION TELEMETRY AUDITED QUARTERLY</span>
        </div>
        <div className="text-slate-400">
          INDEX ID: <span className="text-slate-700 font-bold">#KZ-TELEMETRY-2026</span>
        </div>
      </div>
    </section>
  );
};
