"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FolderTab {
  id: string;
  label: string;
  color: string;
  textColor?: string;
  type: "left" | "mid" | "right";
  offset?: string; // Margin left offset to position across the bar
}

interface FolderRow {
  id: string;
  code: string;
  primaryColor: string;
  tabs: FolderTab[];
  note: string;
  secondaryNote?: string;
  date: string;
}

export const FolderStackSection = () => {
  // Default to Folder 4 ("Subject Drift") being open, exactly matching the reference screenshot
  const [activeFolderId, setActiveFolderId] = useState<string>("folder-4");

  const folderRows: FolderRow[] = [
    // Row 1: Lexical Interruptions | Ink Displacement | Referent Ghosts
    {
      id: "folder-0",
      code: "15A",
      primaryColor: "#7B1842", // Deep Plum / Berry
      tabs: [
        { id: "tab-0-1", label: "Lexical Interruptions", color: "#7B1842", textColor: "#FFFFFF", type: "left" },
        { id: "tab-0-2", label: "Ink Displacement", color: "#2563EB", textColor: "#FFFFFF", type: "mid", offset: "ml-6 sm:ml-12" },
        { id: "tab-0-3", label: "Referent Ghosts", color: "#111111", textColor: "#FFFFFF", type: "right", offset: "ml-auto mr-12 sm:mr-16" },
      ],
      note: "Fragment extracted from primary typography index. Linguistic permutations cataloged under ledger volume IV. Structural continuity verified.",
      date: "Oct 14, 1954",
    },

    // Row 2: Concord Variants
    {
      id: "folder-1",
      code: "15B",
      primaryColor: "#EA580C", // Tangerine Orange
      tabs: [
        { id: "tab-1-1", label: "Concord Variants", color: "#EA580C", textColor: "#FFFFFF", type: "left" },
      ],
      note: "Cross-referenced telemetry matrices. Edge mutation latency benchmarks recorded under sub-15ms threshold across distributed cluster nodes.",
      date: "Nov 02, 1955",
    },

    // Row 3: Unanchored Statements
    {
      id: "folder-2",
      code: "15C",
      primaryColor: "#047857", // Forest Emerald Teal
      tabs: [
        { id: "tab-2-1", label: "Unanchored Statements", color: "#047857", textColor: "#FFFFFF", type: "left" },
      ],
      note: "Autonomous multi-agent execution graphs. Self-healing state tree validated with zero unhandled exceptions across 250,000 synthetic test cycles.",
      date: "Jan 18, 1956",
    },

    // Row 4: Varnell Collection | Peripheral Entry
    {
      id: "folder-3",
      code: "15D",
      primaryColor: "#DC2626", // Crimson Red
      tabs: [
        { id: "tab-3-1", label: "Varnell Collection", color: "#DC2626", textColor: "#FFFFFF", type: "left" },
        { id: "tab-3-2", label: "Peripheral Entry", color: "#2563EB", textColor: "#FFFFFF", type: "mid", offset: "ml-8 sm:ml-16" },
      ],
      note: "Hardware-accelerated Skia shaders cataloged for native cross-platform deployment. Frame budget locked at steady 60 FPS under heavy gesture physics.",
      date: "Aug 29, 1956",
    },

    // Row 5: Subject Drift | Duplicated Silence | Margin Events (The primary open folder in reference screenshot)
    {
      id: "folder-4",
      code: "16A",
      primaryColor: "#581C87", // Deep Purple / Violet
      tabs: [
        { id: "tab-4-1", label: "Subject Drift", color: "#581C87", textColor: "#FFFFFF", type: "left" },
        { id: "tab-4-2", label: "Duplicated Silence", color: "#DC2626", textColor: "#FFFFFF", type: "mid", offset: "ml-4 sm:ml-8" },
        { id: "tab-4-3", label: "Margin Events", color: "#FACC15", textColor: "#0F172A", type: "right", offset: "ml-auto mr-8 sm:mr-14" },
      ],
      note: "Provenance unclear. Part of unidentified collection. Further context unavailable.",
      secondaryNote: "Ref. Agent unknown. Source pending.",
      date: "Dec 13, 1956",
    },

    // Row 6: Reverse Index
    {
      id: "folder-5",
      code: "16B",
      primaryColor: "#2563EB", // Cobalt Blue
      tabs: [
        { id: "tab-5-1", label: "Reverse Index", color: "#2563EB", textColor: "#FFFFFF", type: "left" },
      ],
      note: "Inverted cryptographic registry verified. Key-rotation schedule executed with zero downtime across multi-tenant database clusters.",
      date: "May 04, 1961",
    },

    // Row 7: Obscured Provenance | Undated Persuasions
    {
      id: "folder-6",
      code: "16C",
      primaryColor: "#DB2777", // Rose Pink
      tabs: [
        { id: "tab-6-1", label: "Obscured Provenance", color: "#DB2777", textColor: "#FFFFFF", type: "left" },
        { id: "tab-6-2", label: "Undated Persuasions", color: "#FACC15", textColor: "#0F172A", type: "right", offset: "ml-auto mr-16 sm:mr-28" },
      ],
      note: "Believed to be part of a larger set. No other parts located. Referent unknown. Source pending.",
      date: "Mar 18, 1966",
    },

    // Row 8: No Verified
    {
      id: "folder-7",
      code: "16D",
      primaryColor: "#1D4ED8", // Electric Blue
      tabs: [
        { id: "tab-7-1", label: "No Verified", color: "#1D4ED8", textColor: "#FFFFFF", type: "left" },
      ],
      note: "System operational parameters verified under stress testing. Production artifacts frozen for distribution.",
      date: "Jul 22, 1968",
    },
  ];

  return (
    <section className="w-full bg-[#111215] text-white py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden select-none">
      <div className="w-full max-w-5xl mx-auto">
        {/* Archival Header - Matching Reference Screenshot */}
        <div className="mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-mono tracking-wider text-slate-400 mb-2">
            <span>Unindexed Materials</span>
            <span className="mx-2 text-slate-600">/</span>
            <span>Recovered Entries</span>
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl text-white/95 font-normal tracking-tight not-italic">
            Fragments 15–20
          </h2>
        </div>

        {/* TIGHTLY PACKED ARCHIVAL FILING FOLDER STACK */}
        <div className="w-full flex flex-col shadow-2xl rounded-xl overflow-hidden border border-white/5">
          {folderRows.map((folder) => {
            const isOpen = activeFolderId === folder.id;

            return (
              <div
                key={folder.id}
                onMouseEnter={() => setActiveFolderId(folder.id)}
                className="w-full flex flex-col cursor-pointer transition-colors duration-150"
              >
                {/* Horizontal Solid Colored Folder Bar with Elevated Beveled Tabs */}
                <div
                  className="w-full relative flex items-end h-[38px] sm:h-[42px] px-2 sm:px-4"
                  style={{ backgroundColor: folder.primaryColor }}
                >
                  {/* Tabs Cluster */}
                  <div className="flex items-end h-full w-full">
                    {folder.tabs.map((tab) => {
                      const isYellow = tab.color === "#FACC15";

                      // Trapezoid angled cuts matching authentic filing folder tabs:
                      // Left tab: straight left, 45-degree slope on right
                      // Mid tab: 45-degree slope on left, 45-degree slope on right
                      // Right tab: 45-degree slope on left, straight or 45-degree slope on right
                      let clipPathStyle = "polygon(0 0, calc(100% - 16px) 0, 100% 100%, 0 100%)";
                      if (tab.type === "mid" || tab.type === "right") {
                        clipPathStyle = "polygon(16px 0, calc(100% - 16px) 0, 100% 100%, 0 100%)";
                      }

                      return (
                        <div
                          key={tab.id}
                          style={{
                            backgroundColor: tab.color,
                            clipPath: clipPathStyle,
                          }}
                          className={`h-full flex items-center justify-center px-6 sm:px-8 relative text-xs sm:text-sm font-semibold tracking-tight transition-transform duration-150 ${
                            tab.offset || ""
                          } ${isYellow ? "text-slate-950 font-black" : "text-white font-medium"}`}
                        >
                          <span className="truncate max-w-[160px] sm:max-w-[240px] whitespace-nowrap px-1">
                            {tab.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* EXPANDABLE ARCHIVAL FOLDER BODY */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.32,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full overflow-hidden"
                  style={{
                    backgroundColor: folder.primaryColor,
                  }}
                >
                  <div className="px-6 sm:px-12 py-10 sm:py-12 text-white flex flex-col justify-between min-h-[160px] sm:min-h-[190px]">
                    {/* Archival Content Row: Code (left) | Note (center) | Date (right) */}
                    <div className="grid grid-cols-12 gap-4 items-start font-mono text-xs sm:text-sm text-white/90">
                      {/* Left Index Code (e.g. 16A, 15C) */}
                      <div className="col-span-2 sm:col-span-1 font-bold text-white tracking-wider">
                        {folder.code}
                      </div>

                      {/* Center Archival Entry Note */}
                      <div className="col-span-7 sm:col-span-8 pr-4">
                        <p className="leading-relaxed max-w-xl text-white/95">
                          {folder.note}
                        </p>
                        {folder.secondaryNote && (
                          <p className="mt-4 text-xs text-white/70 leading-relaxed font-mono">
                            {folder.secondaryNote}
                          </p>
                        )}
                      </div>

                      {/* Right Date */}
                      <div className="col-span-3 sm:col-span-3 text-right font-medium text-white/80 whitespace-nowrap">
                        {folder.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
