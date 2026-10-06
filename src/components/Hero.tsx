"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Spotlight } from "./ui/spotlight";

export const Hero = ({ onContactClick }: { onContactClick?: () => void }) => {
  return (
    <section className="relative w-full flex-1 flex flex-col justify-center items-center pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden text-white">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 hero-dot-pattern opacity-30 pointer-events-none z-[1]" />





      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-xs sm:text-sm font-medium text-slate-300 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981]" />
          <span>Available for High-Impact Projects &amp; Contracts</span>
        </motion.div>

        {/* Hero Headline Matching Reference Composition */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
        >
          Engineering that <br className="hidden sm:inline" />
          <span className="font-editorial font-normal italic text-[#E9D5FF] px-1 inline-block">
            elevates the
          </span>{" "}
          Standard
        </motion.h1>

        {/* Subtitle Matching Reference */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          Every system here is engineered to deliver high-velocity impact—not just impressions.
          Full-stack mastery, fluid kinetic interfaces, and bespoke SaaS architectures.
        </motion.p>

        {/* CTAs with the hand-drawn pointer arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative"
        >
          {/* Hand-drawn curving arrow pointing to CTA (Directly matching reference) */}
          <div className="hidden sm:block absolute -left-16 top-1 text-white/70 pointer-events-none">
            <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 22C14 8 28 6 42 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="2.5 2.5"
              />
              <path
                d="M36 12L42 15L37 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Primary Action Button (White Pill with Black Circle Arrow) */}
          <button
            onClick={onContactClick || (() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            })}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm md:text-base flex items-center justify-center gap-3 transition-all duration-300 hover:bg-slate-100 hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] active:scale-95 group cursor-pointer"
          >
            <span>Let&apos;s Contact</span>
            <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Secondary Action Button (Translucent Glass Pill) */}
          <a
            href="/contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-medium text-sm md:text-base flex items-center justify-center gap-2 transition-all duration-200 hover:border-white/40 active:scale-95 cursor-pointer"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-4 h-4 text-slate-300" />
          </a>
        </motion.div>
      </div>

      {/* Seamless Bottom White Dissolve to blend into Section 2 */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none z-[2]" />
    </section>
  );
};
