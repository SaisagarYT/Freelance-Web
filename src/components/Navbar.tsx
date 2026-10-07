"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const Navbar = ({ onContactClick }: { onContactClick?: () => void }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isDetached, setIsDetached] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Elevate gently when user scrolls down beyond 15px
      const detached = window.scrollY > 15;
      setIsDetached(detached);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Architects", href: "/architects" },
    { name: "Methodology", href: "/methodology" },
  ];

  return (
    <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
      {/* 
        Ultra-Premium Floating Island Dock:
        - Pure, symmetrical rounded-full pill contour.
        - Frosted glass backdrop with luxury border & elevation.
        - Cleanly floating with zero awkward side blocks or flanges.
      */}
      <motion.nav
        layout
        initial={false}
        animate={{
          y: isDetached ? 4 : 0,
          backgroundColor: isDetached ? "rgba(255, 255, 255, 0.90)" : "rgba(255, 255, 255, 0.96)",
          backdropFilter: "blur(20px)",
          boxShadow: isDetached
            ? "0 20px 45px -10px rgba(15, 23, 42, 0.14), 0 4px 14px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.95)"
            : "0 10px 30px -5px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(226, 232, 240, 0.85)",
        }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 28,
          mass: 0.8,
        }}
        className="pointer-events-auto relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-2xl sm:rounded-[22px] flex items-center justify-between gap-5 sm:gap-10 border border-slate-200/90 transition-colors duration-200"
      >
        {/* Brand Name */}
        <Link href="/" className="flex items-center group py-0.5">
          <span className="font-extrabold tracking-wider text-sm sm:text-base text-slate-900 uppercase group-hover:text-purple-600 transition-colors duration-200 font-roboto-condensed">
            KAIZEN SOLVES
          </span>
        </Link>

        {/* Center Nav Links with Subtle Hover Interaction */}
        <div
          className="hidden md:flex items-center gap-1 sm:gap-2"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {navLinks.map((link, idx) => {
            const isHovered = hoveredIdx === idx;
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-tight transition-colors duration-200 ${
                  isActive
                    ? "text-purple-700 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {/* Active Underline Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 inset-x-2 h-0.5 bg-purple-600 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}

                {/* Subtle Floating Hover Pill */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="notchedNavHover"
                    style={{
                      backgroundColor: "rgba(241, 245, 249, 0.9)",
                    }}
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
              </Link>
            );
          })}
        </div>

        {/* Right Action Button (High-Contrast Black Pill) */}
        <div className="flex items-center gap-2">
          {onContactClick ? (
            <button
              onClick={onContactClick}
              className="group relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-purple-300" />
            </button>
          ) : (
            <Link
              href="/contact"
              className="group relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-purple-300" />
            </Link>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-slate-700 hover:text-slate-900 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-3 left-0 right-0 bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-2xl p-4 flex flex-col gap-1.5 text-slate-900 shadow-2xl md:hidden z-50"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-semibold py-2 px-3.5 rounded-xl transition-colors ${
                      isActive
                        ? "bg-purple-50 text-purple-700 font-bold"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-2 mt-1 border-t border-slate-100">
                {onContactClick ? (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onContactClick();
                    }}
                    className="w-full text-sm font-bold py-2.5 px-4 rounded-xl bg-slate-900 text-white flex items-center justify-between cursor-pointer"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 text-purple-300" />
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-bold py-2.5 px-4 rounded-xl bg-slate-900 text-white flex items-center justify-between"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 text-purple-300" />
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
