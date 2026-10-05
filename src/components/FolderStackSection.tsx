"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ArchivalTab {
  label: string;
  color: string;
  textColor?: string;
  // Canvas coordinates on 1000px coordinate system
  startX: number;
  topStartX: number;
  topEndX: number;
  endX: number;
}

interface ArchivalFolder {
  id: string;
  code: string;
  primaryColor: string;
  behindColor: string; // The color that shows through gaps and behind tabs
  tabs: ArchivalTab[];
  note: string;
  date: string;
}

export const FolderStackSection = () => {
  // Folder 4 ("Subject Drift") and Folder 7 ("No Verified") active to match the exact reference screenshot
  const [activeId, setActiveId] = useState<string>("folder-4");

  const folders: ArchivalFolder[] = [
    // 1. Lexical Interruptions (Plum #741743)
    {
      id: "folder-0",
      code: "15A",
      primaryColor: "#741743",
      behindColor: "#741743",
      tabs: [
        {
          label: "Lexical Interruptions",
          color: "#741743",
          startX: 0,
          topStartX: 0,
          topEndX: 220,
          endX: 245,
        },
      ],
      note: "Displaced typography specimens recovered from cold storage. Inscription boundaries show thermal degradation along lower margin.",
      date: "Oct 14, 1954",
    },

    // 2. Concord Variants | Ink Displacement | Referent Ghosts (Orange #EA580C)
    // Behind color is Plum (#741743) from Folder 1
    {
      id: "folder-1",
      code: "15B",
      primaryColor: "#EA580C",
      behindColor: "#741743",
      tabs: [
        {
          label: "Concord Variants",
          color: "#EA580C",
          startX: 0,
          topStartX: 0,
          topEndX: 210,
          endX: 235,
        },
        {
          label: "Ink Displacement",
          color: "#1D4ED8", // Royal Blue
          startX: 240,
          topStartX: 265,
          topEndX: 455,
          endX: 480,
        },
        {
          label: "Referent Ghosts",
          color: "#171717", // Jet Black
          startX: 525,
          topStartX: 550,
          topEndX: 735,
          endX: 760,
        },
      ],
      note: "Cross-referenced telemetry matrices. Edge mutation latency benchmarks recorded under sub-15ms threshold across distributed clusters.",
      date: "Nov 02, 1955",
    },

    // 3. Unanchored Statements (Emerald Teal #047857)
    // Behind color is Orange (#EA580C) from Folder 2
    {
      id: "folder-2",
      code: "15C",
      primaryColor: "#047857",
      behindColor: "#EA580C",
      tabs: [
        {
          label: "Unanchored Statements",
          color: "#047857",
          startX: 0,
          topStartX: 0,
          topEndX: 240,
          endX: 265,
        },
      ],
      note: "Autonomous multi-agent execution graphs. Self-healing state tree validated with zero unhandled exceptions under adversarial load.",
      date: "Jan 18, 1956",
    },

    // 4. Varnell Collection | Peripheral Entry (Crimson Red #DC2626)
    // Behind color is Emerald Teal (#047857) from Folder 3
    {
      id: "folder-3",
      code: "15D",
      primaryColor: "#DC2626",
      behindColor: "#047857",
      tabs: [
        {
          label: "Varnell Collection",
          color: "#DC2626",
          startX: 0,
          topStartX: 0,
          topEndX: 210,
          endX: 235,
        },
        {
          label: "Peripheral Entry",
          color: "#1D4ED8", // Royal Blue
          startX: 245,
          topStartX: 270,
          topEndX: 465,
          endX: 490,
        },
      ],
      note: "Hardware-accelerated Skia shaders cataloged for native cross-platform deployment. Frame budget locked at steady 60 FPS.",
      date: "Aug 29, 1956",
    },

    // 5. Subject Drift | Duplicated Silence | Margin Events (Deep Violet #58207E)
    // Primary active folder in reference image. Behind color is Crimson Red (#DC2626) from Folder 4
    {
      id: "folder-4",
      code: "16A",
      primaryColor: "#58207E",
      behindColor: "#DC2626",
      tabs: [
        {
          label: "Subject Drift",
          color: "#58207E",
          startX: 0,
          topStartX: 0,
          topEndX: 200,
          endX: 225,
        },
        {
          label: "Duplicated Silence",
          color: "#DC2626",
          startX: 230,
          topStartX: 255,
          topEndX: 450,
          endX: 475,
        },
        {
          label: "Margin Events",
          color: "#FCD34D", // Sunflower Yellow
          textColor: "#0F172A",
          startX: 515,
          topStartX: 540,
          topEndX: 735,
          endX: 760,
        },
      ],
      note: "Provenance unclear. Part of unidentified collection. Further context unavailable.",
      date: "Dec 13, 1956",
    },

    // 6. Reverse Index (Cobalt Blue #1D4ED8)
    // Behind color is Deep Violet (#58207E) from Folder 5
    {
      id: "folder-5",
      code: "16B",
      primaryColor: "#1D4ED8",
      behindColor: "#58207E",
      tabs: [
        {
          label: "Reverse Index",
          color: "#1D4ED8",
          startX: 0,
          topStartX: 0,
          topEndX: 210,
          endX: 235,
        },
      ],
      note: "Inverted cryptographic registry verified. Key-rotation schedule executed with zero downtime across federated nodes.",
      date: "May 04, 1961",
    },

    // 7. Obscured Provenance | Undated Persuasions (Rose Pink #DB2777)
    // Behind color is Cobalt Blue (#1D4ED8) from Folder 6
    {
      id: "folder-6",
      code: "16C",
      primaryColor: "#DB2777",
      behindColor: "#1D4ED8",
      tabs: [
        {
          label: "Obscured Provenance",
          color: "#DB2777",
          startX: 0,
          topStartX: 0,
          topEndX: 220,
          endX: 245,
        },
        {
          label: "Undated Persuasions",
          color: "#FCD34D", // Sunflower Yellow
          textColor: "#0F172A",
          startX: 265,
          topStartX: 290,
          topEndX: 515,
          endX: 540,
        },
      ],
      note: "Cross-platform state restoration archive. Snapshot recovery completed with zero missing dependencies or data drift.",
      date: "Feb 10, 1964",
    },

    // 8. No Verified (Electric Blue #2563EB)
    // Behind color is Rose Pink (#DB2777) from Folder 7
    {
      id: "folder-7",
      code: "15C",
      primaryColor: "#2563EB",
      behindColor: "#DB2777",
      tabs: [
        {
          label: "No Verified",
          color: "#2563EB",
          startX: 0,
          topStartX: 0,
          topEndX: 200,
          endX: 225,
        },
      ],
      note: "Believed to be part of a larger set. No other parts located. Referent unknown. Source pending.",
      date: "Mar 18, 1966",
    },
  ];

  return (
    <section className="w-full bg-[#121214] text-white py-20 sm:py-28 px-4 sm:px-6 relative select-none">
      <div className="w-full max-w-[880px] mx-auto">
        {/* Archival Section Header (Exact matching reference screenshot) */}
        <div className="mb-8 sm:mb-12 text-left">
          <p className="text-xs sm:text-[13px] font-mono tracking-wider text-slate-400 mb-2 flex items-center gap-2">
            <span>Unindexed Materials</span>
            <span className="text-slate-600">/</span>
            <span>Recovered Entries</span>
          </p>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight not-italic">
            Fragments 15–20
          </h2>
        </div>

        {/* ============================================================== */}
        {/* THE EXACT ARCHIVAL FILING CABINET FOLDER STACK                */}
        {/* ============================================================== */}
        <div className="w-full flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-white/5">
          {folders.map((folder, folderIdx) => {
            // Folder 4 ("Subject Drift") is open by default, and Folder 7 ("No Verified") is also open by default
            // Hovering any folder dynamically activates it
            const isHovered = activeId === folder.id;
            const isOpen =
              isHovered || (activeId === "folder-4" && (folder.id === "folder-4" || folder.id === "folder-7"));

            return (
              <div
                key={folder.id}
                onMouseEnter={() => setActiveId(folder.id)}
                className="w-full flex flex-col cursor-pointer transition-all duration-150"
              >
                {/* 1. THE VECTOR TAB HEADER BAR (EXACT BEVELED CUTS & PEEK-THROUGH COLORS) */}
                <div className="w-full relative h-[38px] sm:h-[42px] block">
                  <svg
                    viewBox="0 0 1000 40"
                    className="w-full h-full block"
                    preserveAspectRatio="none"
                  >
                    {/* Background rectangle: shows the previous folder's color behind tabs and in gaps */}
                    <rect x="0" y="0" width="1000" height="40" fill={folder.behindColor} />

                    {/* Folder baseline strip (connecting the tabs across the folder) */}
                    <rect x="0" y="14" width="1000" height="26" fill={folder.primaryColor} />

                    {/* Elevated Beveled Tabs */}
                    {folder.tabs.map((tab, idx) => {
                      const isLeft = tab.startX === 0;

                      // Exact SVG trapezoid path with smooth rounded corners and 36-degree beveled shoulders
                      let pathD = "";
                      if (isLeft) {
                        pathD = `
                          M 0,40
                          L 0,10
                          Q 0,0 12,0
                          L ${tab.topEndX},0
                          C ${tab.topEndX + 8},0 ${tab.endX - 8},14 ${tab.endX},14
                          L ${tab.endX},40
                          Z
                        `;
                      } else {
                        pathD = `
                          M ${tab.startX},40
                          L ${tab.startX},14
                          C ${tab.startX + 8},14 ${tab.topStartX - 8},0 ${tab.topStartX},0
                          L ${tab.topEndX},0
                          C ${tab.topEndX + 8},0 ${tab.endX - 8},14 ${tab.endX},14
                          L ${tab.endX},40
                          Z
                        `;
                      }

                      return (
                        <g key={idx}>
                          <path d={pathD} fill={tab.color} />
                        </g>
                      );
                    })}
                  </svg>

                  {/* Text Labels Positioned Over Each Tab */}
                  <div className="absolute inset-0 pointer-events-none flex items-center">
                    {folder.tabs.map((tab, idx) => {
                      const leftPercent = (tab.startX / 1000) * 100;
                      const widthPercent = ((tab.endX - tab.startX) / 1000) * 100;
                      const isYellow = tab.color === "#FCD34D";

                      return (
                        <div
                          key={idx}
                          style={{
                            left: `${leftPercent}%`,
                            width: `${widthPercent}%`,
                          }}
                          className={`absolute top-0 bottom-0 flex items-center justify-center px-3 sm:px-4 text-[11px] sm:text-[13px] font-semibold font-roboto-condensed tracking-tight truncate ${
                            isYellow ? "text-slate-950 font-bold" : "text-white/95"
                          }`}
                        >
                          <span className="truncate">{tab.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. THE EXPANDABLE FOLDER BODY (EXACT ARCHIVAL MONOSPACE LAYOUT) */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.28,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="w-full overflow-hidden"
                  style={{ backgroundColor: folder.primaryColor }}
                >
                  <div className="px-6 sm:px-12 py-8 sm:py-10 text-white min-h-[140px] sm:min-h-[160px] flex items-center border-t border-white/5">
                    {/* Archival Grid: Code (left) | Typewritten Note (center) | Date (right) */}
                    <div className="w-full grid grid-cols-12 gap-4 items-start font-mono text-xs sm:text-[13px]">
                      {/* Left: Code (e.g. 16A, 15C) */}
                      <div className="col-span-2 font-bold text-white tracking-widest text-sm sm:text-base">
                        {folder.code}
                      </div>

                      {/* Center: Archival Note (3-4 lines, exact matching reference) */}
                      <div className="col-span-8 pr-4">
                        <p className="leading-relaxed max-w-sm text-white/90 font-mono text-xs sm:text-[13px]">
                          {folder.note}
                        </p>
                      </div>

                      {/* Right: Date (e.g. Dec 13, 1956) */}
                      <div className="col-span-2 text-right text-white/80 whitespace-nowrap font-mono text-xs sm:text-[13px]">
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
