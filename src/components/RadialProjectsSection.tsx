"use client";

import React from "react";
import { TabbedFolderProjects } from "./TabbedFolderProjects";

export interface RadialProjectsSectionProps {
  onContactClick?: () => void;
}

export const RadialProjectsSection: React.FC<RadialProjectsSectionProps> = ({
  onContactClick,
}) => {
  return (
    <section
      id="projects"
      className="w-full relative py-16 sm:py-24 select-none overflow-hidden"
      style={{
        backgroundColor: "#F8F7F4",
        backgroundImage: `
          repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 27px,
            rgba(226, 232, 240, 0.85) 28px
          )
        `,
      }}
    >
      {/* SECTION HEADER (Projects & Architecture) */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
        <div className="pb-6 sm:pb-8 border-b border-slate-200/90 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-purple-600 font-roboto-condensed font-bold text-xs tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-roboto-condensed">
              Projects & Architecture
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-slate-500 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>INDEX: ARCHIVED PRODUCTION WORK // 2026</span>
          </div>
        </div>
      </div>

      {/* SKEUOMORPHIC TABBED FOLDER CARDS UI */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6">
        <TabbedFolderProjects onContactClick={onContactClick} />
      </div>
    </section>
  );
};
