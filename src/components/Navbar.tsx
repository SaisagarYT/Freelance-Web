"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar = ({ onContactClick }: { onContactClick?: () => void }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full flex justify-center relative z-40">
      {/* Notched White Island Dock */}
      <div className="relative bg-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-b-[24px] sm:rounded-b-[28px] flex items-center justify-between gap-5 sm:gap-10 shadow-[0_12px_30px_rgba(0,0,0,0.06)] border-b border-x border-slate-100">
        
        {/* Left Inverted Concave Fillet (Seamless Reverse Corner) */}
        <div className="absolute top-0 -left-6 w-6 h-6 pointer-events-none">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-white" preserveAspectRatio="none">
            <path d="M0 0 L24 0 L24 24 C24 10.745 13.255 0 0 0 Z" />
          </svg>
        </div>

        {/* Right Inverted Concave Fillet (Seamless Reverse Corner) */}
        <div className="absolute top-0 -right-6 w-6 h-6 pointer-events-none">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-white" preserveAspectRatio="none">
            <path d="M24 0 L0 0 L0 24 C0 10.745 10.745 0 24 0 Z" />
          </svg>
        </div>

        {/* Brand Name */}
        <a href="#" className="flex items-center group py-0.5">
          <span className="font-extrabold tracking-wider text-sm sm:text-base text-slate-900 uppercase group-hover:text-purple-600 transition-colors duration-200">
            KIZEN SOLVES
          </span>
        </a>

        {/* Center Nav Links with Subtle Hover Interaction */}
        <div
          className="hidden md:flex items-center gap-1 sm:gap-2"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {navLinks.map((link, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="relative px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-tight text-slate-600 hover:text-slate-950 transition-colors duration-200"
              >
                {/* Subtle Floating Hover Pill */}
                {isHovered && (
                  <motion.div
                    layoutId="notchedNavHover"
                    style={{ backgroundColor: "rgba(241, 245, 249, 0.9)" }}
                    className="absolute inset-0 rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                    }}
                  />
                )}

                {/* Animated Text Lift */}
                <motion.span
                  animate={{ y: isHovered ? -1 : 0 }}
                  transition={{ duration: 0.15 }}
                  className="block relative"
                >
                  {link.name}
                </motion.span>
              </a>
            );
          })}
        </div>

        {/* Right Action Button (High-Contrast Black Pill) */}
        <div className="flex items-center gap-2">
          <button
            onClick={
              onContactClick ||
              (() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              })
            }
            className="group relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-slate-950 text-white hover:bg-slate-800 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-slate-700 hover:text-slate-950"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-2xl border border-slate-200 rounded-3xl p-5 flex flex-col gap-2 text-slate-900 shadow-2xl md:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-slate-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
