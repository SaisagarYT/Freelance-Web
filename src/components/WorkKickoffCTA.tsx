"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Check } from "lucide-react";
import confetti from "canvas-confetti";

// ─── Component Props ──────────────────────────────────────────────────────────

export interface WorkKickoffCTAProps {
  onContactClick?: () => void;
  teamLeaderName?: string;
}

// ─── Mosaic Tile Data (Matches the reference image 4×3 grid) ──────────────────

interface MosaicCell {
  type: "avatar" | "empty";
  avatarSrc?: string;
  avatarAlt?: string;
  faded?: boolean;
}

const MOSAIC_TILES: MosaicCell[] = [
  // Row 1
  { type: "empty", faded: true },
  { type: "empty" },
  { type: "avatar", avatarSrc: "/images/architect_alex.jpg", avatarAlt: "Alex Voron" },
  { type: "empty", faded: true },
  // Row 2
  { type: "empty" },
  { type: "avatar", avatarSrc: "/images/work/client_gary.jpg", avatarAlt: "Gary Chen" },
  { type: "empty" },
  { type: "avatar", avatarSrc: "/images/architect_ivan.jpg", avatarAlt: "Ivan Prokopenko" },
  // Row 3
  { type: "empty", faded: true },
  { type: "empty" },
  { type: "avatar", avatarSrc: "/images/architect_katya.jpg", avatarAlt: "Katya Melnyk" },
  { type: "empty", faded: true },
];

// ─── Brand Pills Data ─────────────────────────────────────────────────────────

interface BrandPill {
  name: string;
  iconType: "acebuilder" | "aceternity" | "algochurn";
}

const BRAND_PILLS: BrandPill[] = [
  { name: "Acebuilder", iconType: "acebuilder" },
  { name: "Aceternity UI", iconType: "aceternity" },
  { name: "Algochurn", iconType: "algochurn" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export const WorkKickoffCTA: React.FC<WorkKickoffCTAProps> = ({
  onContactClick,
  teamLeaderName = "Manu",
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOpenChat = () => {
    if (onContactClick) {
      onContactClick();
    }
    setModalOpen(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#9333EA", "#7C3AED", "#10B981", "#F59E0B"],
    });
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setEmail("");
      setMessage("");
    }, 2400);
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#F7F5FC] border-t border-[#E2DCF0] py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-16 relative select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(147, 51, 234, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(147, 51, 234, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Section Title (Clean, NO //, NO Year) ───────────────────────── */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-roboto-condensed font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-950 uppercase">
            Scaling Successful Companies
          </h2>
        </div>

        {/* ── Main Bento Grid Composition ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* CARD 1: TEAM MOSAIC CARD (Left Column - Spans Full Height)        */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-4 bg-white rounded-3xl border border-[#E8E2F4] p-6 sm:p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] flex flex-col justify-between"
          >
            {/* 4×3 Mosaic Grid of Rounded Square Tiles */}
            <div className="grid grid-cols-4 gap-2.5 sm:gap-3 flex-1 mb-6 sm:mb-8 items-center">
              {MOSAIC_TILES.map((tile, idx) => {
                if (tile.type === "empty") {
                  return (
                    <div
                      key={idx}
                      className={`aspect-square rounded-2xl bg-[#F8FAFC] border border-[#EDE9FE] shadow-[inset_0_2px_4px_rgba(147,51,234,0.03),0_1px_2px_rgba(0,0,0,0.02)] transition-opacity duration-300 ${
                        tile.faded ? "opacity-35" : "opacity-85"
                      }`}
                    />
                  );
                }

                return (
                  <div
                    key={idx}
                    className="aspect-square relative rounded-2xl overflow-hidden border border-[#D8D0F0] shadow-md transition-transform duration-300 hover:scale-105"
                  >
                    <Image
                      src={tile.avatarSrc || "/images/architect_alex.jpg"}
                      alt={tile.avatarAlt || "Team Specialist"}
                      fill
                      className="object-cover"
                      sizes="90px"
                    />
                  </div>
                );
              })}
            </div>

            {/* Bottom Content of Left Card */}
            <div className="pt-2">
              <p className="font-roboto-condensed font-semibold text-slate-700 text-sm sm:text-base mb-3">
                Get to know our dream team
              </p>

              <button
                onClick={handleOpenChat}
                className="rounded-2xl bg-slate-950 hover:bg-slate-900 text-white p-2.5 sm:p-3 pr-5 inline-flex items-center gap-3 transition-all duration-200 shadow-md active:scale-95 group cursor-pointer border border-slate-800"
              >
                {/* Golden Square Badge with 3×3 Dot Matrix Icon (Exact Match to Image) */}
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-sm flex items-center justify-center shrink-0">
                  <div className="grid grid-cols-3 gap-0.5 w-3.5 h-3.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className="w-1 h-1 rounded-full bg-slate-950" />
                    ))}
                  </div>
                </div>

                <span className="font-roboto-condensed font-bold text-xs sm:text-sm tracking-wide">
                  Chat with {teamLeaderName}
                </span>
              </button>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════════════════════════ */}
          {/* RIGHT STAGE: 8 Columns containing Top 3 Cards + Bottom Tech Strip  */}
          {/* ══════════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-3.5 sm:gap-4">

            {/* Top Row: Middle Stat Card (col 1) + Right Stack (col 2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 items-stretch flex-1">

              {/* ────────────────────────────────────────────────────────────── */}
              {/* CARD 2: "100+ Companies served" (Middle Top)                   */}
              {/* ────────────────────────────────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className="bg-white rounded-3xl border border-[#E8E2F4] p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.04)] relative overflow-hidden flex flex-col justify-between min-h-[240px]"
              >
                {/* Subtle Rounded Rectangle Wireframe Background (Exact layered depth from image) */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 10px 10px, rgba(147, 51, 234, 0.15) 1.5px, transparent 0),
                      linear-gradient(to right, rgba(147, 51, 234, 0.08) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(147, 51, 234, 0.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Stat Display */}
                <div className="relative z-10">
                  <span className="font-roboto-condensed font-black text-6xl sm:text-7xl text-slate-950 tracking-tight leading-none block">
                    100+
                  </span>
                  <p className="font-roboto-condensed font-medium text-slate-500 text-sm sm:text-base mt-2">
                    Companies served
                  </p>
                </div>

                {/* Value Proposition Copy */}
                <p className="relative z-10 font-roboto-condensed font-medium text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mt-8 sm:mt-12">
                  We design and build websites that drive results and help your business grow. No Calls. No BS. Just Results.
                </p>
              </motion.div>

              {/* ────────────────────────────────────────────────────────────── */}
              {/* RIGHT STACK: Top Brand Pills + Featured "Primer" Testimonial   */}
              {/* ────────────────────────────────────────────────────────────── */}
              <div className="flex flex-col gap-3.5 sm:gap-4 justify-between">

                {/* CARD 3: Brand Logo Pills Strip (Top Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.14 }}
                  className="bg-white rounded-3xl border border-[#E8E2F4] p-3.5 sm:p-4 shadow-[0_4px_24px_rgba(15,23,42,0.04)] flex items-center justify-between gap-2 overflow-x-auto scrollbar-none"
                >
                  {BRAND_PILLS.map((brand) => (
                    <div
                      key={brand.name}
                      className="px-3 sm:px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex items-center gap-2 shrink-0 hover:border-purple-300 transition-colors"
                    >
                      {/* Icon rendering for Acebuilder, Aceternity, Algochurn */}
                      {brand.iconType === "acebuilder" && (
                        <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 flex flex-col justify-center items-center gap-0.5 p-1 shadow-xs">
                          <span className="w-full h-0.5 bg-white/90 rounded-full" />
                          <span className="w-2.5 h-0.5 bg-white/90 rounded-full" />
                        </div>
                      )}

                      {brand.iconType === "aceternity" && (
                        <div className="w-5 h-5 rounded-md bg-black text-white flex items-center justify-center font-bold text-[11px] font-sans shadow-xs">
                          A
                        </div>
                      )}

                      {brand.iconType === "algochurn" && (
                        <div className="w-5 h-5 rounded-md bg-black text-white flex items-center justify-center font-bold text-xs font-sans shadow-xs">
                          *
                        </div>
                      )}

                      <span className="font-roboto-condensed font-bold text-slate-800 text-xs sm:text-sm">
                        {brand.name}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* CARD 4: Featured Testimonial Card "Primer" (Middle Right) */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="bg-white rounded-3xl border border-[#E8E2F4] p-6 sm:p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] relative overflow-hidden flex flex-col justify-between flex-1 min-h-[190px]"
                >
                  {/* Isometric 3D Stacked Cubes Illustration in Background (Exact match to image) */}
                  <div className="absolute top-0 right-0 w-44 h-44 pointer-events-none opacity-45 overflow-hidden">
                    <svg
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <defs>
                        <linearGradient id="cubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.4" />
                        </linearGradient>
                        <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.6" />
                          <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.3" />
                        </linearGradient>
                        <linearGradient id="cubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.2" />
                        </linearGradient>
                      </defs>

                      {/* Cube 1 (Back) */}
                      <g transform="translate(110, 20)">
                        <polygon points="40,0 80,20 40,40 0,20" fill="url(#cubeTop)" />
                        <polygon points="0,20 40,40 40,80 0,60" fill="url(#cubeLeft)" />
                        <polygon points="40,40 80,20 80,60 40,80" fill="url(#cubeRight)" />
                      </g>

                      {/* Cube 2 (Front Left) */}
                      <g transform="translate(70, 45)">
                        <polygon points="40,0 80,20 40,40 0,20" fill="url(#cubeTop)" />
                        <polygon points="0,20 40,40 40,80 0,60" fill="url(#cubeLeft)" />
                        <polygon points="40,40 80,20 80,60 40,80" fill="url(#cubeRight)" />
                      </g>

                      {/* Cube 3 (Front Right) */}
                      <g transform="translate(130, 60)">
                        <polygon points="40,0 80,20 40,40 0,20" fill="url(#cubeTop)" />
                        <polygon points="0,20 40,40 40,80 0,60" fill="url(#cubeLeft)" />
                        <polygon points="40,40 80,20 80,60 40,80" fill="url(#cubeRight)" />
                      </g>
                    </svg>
                  </div>

                  {/* Header Title */}
                  <div className="relative z-10">
                    <h3 className="font-roboto-condensed font-black text-2xl sm:text-3xl text-slate-950 tracking-tight">
                      Primer
                    </h3>
                  </div>

                  {/* Exact Quote from Reference Screenshot */}
                  <blockquote className="relative z-10 font-roboto-condensed font-medium text-slate-600 text-xs sm:text-sm leading-relaxed my-3 max-w-sm">
                    &ldquo;Since adding the AI assistant to our store, our support load has dropped by nearly 60% Customers now get instant answers about supplements, dosages.&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div className="relative z-10 font-roboto-condensed text-xs sm:text-sm">
                    <span className="font-bold text-slate-950">— James Finley</span>
                    <span className="font-normal text-slate-500 ml-1.5">Founder, Primer</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ────────────────────────────────────────────────────────────── */}
            {/* CARD 5: "Technologies we use" (Bottom - Spanning Center + Right) */}
            {/* ────────────────────────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.26 }}
              className="bg-white rounded-3xl border border-[#E8E2F4] px-6 sm:px-8 py-4 sm:py-5 shadow-[0_4px_24px_rgba(15,23,42,0.04)] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
            >
              {/* Left Label with Glowing Accent Capsule */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-roboto-condensed font-bold text-slate-900 text-sm sm:text-base">
                  Technologies we use
                </span>
                {/* Subtle warm vertical capsule divider (as in image) */}
                <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 opacity-60 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
              </div>

              {/* 5 Distinct Squircle Technology Icon Cards (Exact match to image) */}
              <div className="flex items-center gap-2.5 sm:gap-3.5 flex-wrap justify-center">

                {/* 1. OpenAI / ChatGPT */}
                <div
                  title="OpenAI"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1635a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                  </svg>
                </div>

                {/* 2. Supabase / Lightning Bolt */}
                <div
                  title="Supabase"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13.4 22.8c-.8.9-2.2.3-2.2-1V12.7h8.1c1.3 0 2 .1.4 1.8l-7.3 8.3z"
                      fill="#3ECF8E"
                    />
                    <path
                      d="M10.6 1.2c.8-.9 2.2-.3 2.2 1v9.1H4.7c-1.3 0-2-.1-.4-1.8l6.3-8.3z"
                      fill="#3ECF8E"
                      fillOpacity="0.75"
                    />
                  </svg>
                </div>

                {/* 3. React */}
                <div
                  title="React"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#06B6D4" strokeWidth="1.5" />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4.5"
                      stroke="#06B6D4"
                      strokeWidth="1.5"
                      transform="rotate(60 12 12)"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4.5"
                      stroke="#06B6D4"
                      strokeWidth="1.5"
                      transform="rotate(120 12 12)"
                    />
                    <circle cx="12" cy="12" r="2" fill="#06B6D4" />
                  </svg>
                </div>

                {/* 4. AWS */}
                <div
                  title="AWS"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18.8 17.5c-2.7 2-6.8 3.1-10.2 3.1-4.8 0-9.2-1.8-12.5-4.8-.3-.3 0-.6.3-.4 3.5 2 7.7 3.2 12.2 3.2 3 0 6.6-.8 9.8-2.4.5-.3.8.3.4.7z"
                      fill="#FF9900"
                    />
                    <path
                      d="M19.9 15.8c-.3-.4-2.2-.8-3.3-.6-.3 0-.4-.3-.1-.5 1.7-.9 4.4-.7 4.7-.3.3.4-.1 3.1-1.7 4.2-.3.2-.5 0-.4-.3.3-1 .8-2.2.8-2.5z"
                      fill="#FF9900"
                    />
                    <path
                      d="M7.4 6.8c-.8 0-1.4.3-1.8.8l-.1-.7H4.1v7.6h1.6V9.8c.2-.9.8-1.5 1.6-1.5.8 0 1.2.5 1.2 1.4v4.8h1.6V9.4c0-1.7-.9-2.6-2.7-2.6z"
                      fill="#232F3E"
                    />
                    <path
                      d="M13.8 6.8c-2 0-3.3 1.4-3.3 3.9 0 2.4 1.3 3.9 3.3 3.9 2 0 3.3-1.4 3.3-3.9 0-2.5-1.3-3.9-3.3-3.9zm0 6.3c-1.1 0-1.7-.9-1.7-2.4 0-1.5.6-2.4 1.7-2.4 1.1 0 1.7.9 1.7 2.4 0 1.5-.6 2.4-1.7 2.4z"
                      fill="#232F3E"
                    />
                  </svg>
                </div>

                {/* 5. Firebase */}
                <div
                  title="Firebase"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center hover:scale-110 hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M4.3 16.5L6.8 2.8c.1-.4.6-.6.9-.3l3.6 6.8z" fill="#FFA000" />
                    <path
                      d="M4.3 16.5L1.8 12.1c-.2-.4.1-.9.6-.9.2 0 .4.1.5.2l1.4 5.1z"
                      fill="#F57C00"
                    />
                    <path
                      d="M12.1 22.8l7.6-6.3-4.3-13.6c-.1-.4-.6-.6-.9-.3L4.3 16.5z"
                      fill="#FFCA28"
                    />
                    <path d="M12.1 22.8L1.8 12.1l2.5 4.4z" fill="#FFA000" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Direct Chat Modal for "Chat with Manu" ───────────────────────── */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-md bg-white rounded-3xl border border-[#E8E2F4] p-6 sm:p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <span className="font-mono text-[10px] font-bold text-purple-700 uppercase tracking-widest bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                  DIRECT DIALOGUE
                </span>
                <h3 className="font-roboto-condensed font-black text-2xl text-slate-950 tracking-tight mt-2">
                  Chat with {teamLeaderName}
                </h3>
                <p className="font-roboto-condensed font-medium text-slate-500 text-xs sm:text-sm mt-1">
                  Tell us about your upcoming digital product or requirements. We respond in under 12 hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-roboto-condensed font-black text-xl text-slate-900">
                    Message Dispatched
                  </h4>
                  <p className="font-roboto-condensed text-xs text-slate-600">
                    We received your note and will reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:bg-white focus:outline-none text-slate-900 font-mono text-xs sm:text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Project Notes or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Brief overview of goals, timeline, or current prototype..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:bg-white focus:outline-none text-slate-900 font-roboto-condensed text-xs sm:text-sm transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-roboto-condensed font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Also export as ScalingSuccessfulCompanies for semantic clarity & reusability
export const ScalingSuccessfulCompanies = WorkKickoffCTA;
export default WorkKickoffCTA;
