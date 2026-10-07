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
      // Detach when user scrolls down beyond 20px
      const detached = window.scrollY > 20;
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
    <div className="fixed top-2 sm:top-3 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
      {/* Animated Island Dock: Detaches smoothly with spring physics on scroll */}
      <motion.nav
        layout
        initial={false}
        animate={{
          y: isDetached ? 12 : 0,
          borderTopLeftRadius: isDetached ? 26 : 0,
          borderTopRightRadius: isDetached ? 26 : 0,
          borderBottomLeftRadius: 26,
          borderBottomRightRadius: 26,
          backgroundColor: isDetached ? "rgba(255, 255, 255, 0.88)" : "#FFFFFF",
          backdropFilter: isDetached ? "blur(18px)" : "blur(0px)",
          borderTopColor: isDetached ? "rgba(255, 255, 255, 0.75)" : "transparent",
          borderBottomColor: isDetached ? "rgba(226, 232, 240, 0.85)" : "rgba(241, 245, 249, 1)",
          borderLeftColor: isDetached ? "rgba(226, 232, 240, 0.85)" : "rgba(241, 245, 249, 1)",
          borderRightColor: isDetached ? "rgba(226, 232, 240, 0.85)" : "rgba(241, 245, 249, 1)",
          boxShadow: isDetached
            ? "0 20px 45px -10px rgba(15, 23, 42, 0.12), 0 4px 14px -2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.95)"
            : "0 12px 30px rgba(0, 0, 0, 0.06)",
        }}
        transition={{
          type: "spring",
          stiffness: 340,
          damping: 28,
          mass: 0.8,
        }}
        className="pointer-events-auto relative px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-5 sm:gap-10 border transition-colors duration-200"
      >
        {/* Left Inverted Concave Fillet (Smoothly fades out and retracts when detached) */}
        <motion.div
          animate={{
            opacity: isDetached ? 0 : 1,
            scale: isDetached ? 0.6 : 1,
            y: isDetached ? 6 : 0,
          }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="absolute top-0 -left-6 w-6 h-6 pointer-events-none"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full fill-white" preserveAspectRatio="none">
            <path d="M0 0 L24 0 L24 24 C24 10.745 13.255 0 0 0 Z" />
          </svg>
        </motion.div>

        {/* Right Inverted Concave Fillet (Smoothly fades out and retracts when detached) */}
        <motion.div
          animate={{
            opacity: isDetached ? 0 : 1,
            scale: isDetached ? 0.6 : 1,
            y: isDetached ? 6 : 0,
          }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
          className="absolute top-0 -right-6 w-6 h-6 pointer-events-none"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full fill-white" preserveAspectRatio="none">
            <path d="M24 0 L0 0 L0 24 C0 10.745 10.745 0 24 0 Z" />
          </svg>
        </motion.div>

        {/* Brand Name */}
        <Link href="/" className="flex items-center group py-0.5">
          <span className="font-extrabold tracking-wider text-sm sm:text-base text-slate-900 uppercase group-hover:text-purple-600 transition-colors duration-200 font-roboto-condensed">
            KAIZEN SOLVES
          </span>
        </Link>

        {/* Center Nav Links with Subtle Hover Interaction (Same exact size & layout) */}
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
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-tight transition-colors duration-200 ${isActive
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
                      backgroundColor: isDetached
                        ? "rgba(241, 245, 249, 0.85)"
                        : "rgba(241, 245, 249, 0.9)",
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
                    className={`text-sm font-semibold py-2 px-3.5 rounded-xl transition-colors ${isActive
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
