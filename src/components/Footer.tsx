"use client";

import React from "react";
import { ArrowUp, Sparkles, Heart } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-slate-100 py-12 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-slate-900 tracking-wider text-sm uppercase">
            KIZEN SOLVES
          </span>
          <span className="text-slate-400">© {new Date().getFullYear()}</span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 text-slate-600 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Crafted with precision &amp; modern engineering</span>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors p-2 rounded-lg hover:bg-slate-50 cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
