"use client";

import React from "react";
import Link from "next/link";
import { LinkedinIcon, TwitterIcon, GithubIcon, InstagramIcon } from "./Icons";

interface FooterProps {
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer id="contact" className="w-full bg-white relative overflow-hidden flex flex-col justify-between">
      {/* ============================================================ */}
      {/* 1. TOP HIGH-IMPACT VIBRANT BANNER (WEBSITE ELECTRIC THEME)   */}
      {/* ============================================================ */}
      <div className="w-full bg-[#C4B5FD] text-slate-950 py-10 sm:py-14 md:py-16 px-6 sm:px-12 lg:px-20 transition-colors duration-300">
        <div className="w-full max-w-[1360px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Main Headline: "Let's work together" */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-roboto-condensed tracking-tight text-slate-950 leading-tight">
            <span className="font-normal">Let&apos;s work </span>
            <span className="font-black">together</span>
          </h2>

          {/* Action Links with Clean Underlines */}
          <div className="flex items-center gap-6 sm:gap-8 font-roboto-condensed text-base sm:text-lg md:text-xl font-bold tracking-tight">
            <Link
              href="/contact"
              className="underline underline-offset-4 decoration-2 hover:opacity-75 transition-opacity cursor-pointer"
            >
              Get in Touch
            </Link>
            <Link
              href="/architects"
              className="underline underline-offset-4 decoration-2 hover:opacity-75 transition-opacity cursor-pointer"
            >
              Advisory
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. MIDDLE INFO & LOCATIONS SECTION                           */}
      {/* ============================================================ */}
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-12 lg:px-20 pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 items-start">
          {/* Left Side: Socials, Copyright, Legal */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-8">
            {/* Social Icons Row */}
            <div className="flex items-center gap-5 text-slate-900">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 transition-colors duration-200"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-5 h-5 fill-current" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-600 transition-colors duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright & Legal Navigation */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-roboto-condensed text-slate-500">
              <span>©{new Date().getFullYear()} KAIZEN SOLVES</span>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors font-medium underline-offset-2 hover:underline"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="hover:text-slate-900 transition-colors font-medium underline-offset-2 hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Right Side: Two Contact/Studio Hub Columns */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 sm:gap-12 text-xs sm:text-sm font-roboto-condensed leading-relaxed text-slate-600">
            {/* Column 1: Direct Inquiries */}
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 tracking-tight">
                Direct Inquiries
              </h4>
              <p>hello@kaizensolves.com</p>
              <p>Architecture &amp; AI Systems</p>
              <p className="text-slate-900 font-semibold mt-1">Available Worldwide</p>
            </div>

            {/* Column 2: Engineering Hub */}
            <div>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1 tracking-tight">
                Engineering Hub
              </h4>
              <p>San Francisco &amp; Remote</p>
              <p>Full-Stack Mastery</p>
              <p className="text-slate-900 font-semibold mt-1">Mon - Fri • 09:00 - 18:00 UTC</p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. BOTTOM OVERSIZED WORDMARK: KAIZEN SOLVES                  */}
      {/* ============================================================ */}
      <div className="w-full overflow-hidden select-none -mb-4 sm:-mb-8 md:-mb-12 lg:-mb-16">
        <h1 className="text-[11vw] sm:text-[12.5vw] md:text-[13.5vw] font-black tracking-tighter text-slate-900 font-roboto-condensed leading-[0.76] text-center uppercase pointer-events-none whitespace-nowrap">
          KAIZEN SOLVES
        </h1>
      </div>
    </footer>
  );
};
