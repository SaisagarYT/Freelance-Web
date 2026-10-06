"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStatementSection } from "@/components/TrustStatementSection";
import { TechArsenalSection } from "@/components/TechArsenalSection";
import { RadialProjectsSection } from "@/components/RadialProjectsSection";
import { ProcessWorkflowSection } from "@/components/ProcessWorkflowSection";

export default function Home() {
  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    contactElem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Outer White Frame Wrapper matching reference screenshot */}
      <div className="w-full bg-white px-2 sm:px-4 pt-2 sm:pt-3">
        {/* Section 1: Framed Hero Container with Rounded Top Corners & Seamless Flush Bottom */}
        <div className="relative rounded-t-[28px] sm:rounded-t-[36px] rounded-b-none overflow-hidden hero-aurora-bg text-white border-t border-x border-slate-100/80 border-b-0 shadow-none min-h-[calc(100vh-16px)] sm:min-h-[calc(100vh-24px)] flex flex-col justify-between">
          {/* Notched White Island Dock */}
          <Navbar onContactClick={scrollToContact} />

          {/* Hero Section Content */}
          <Hero onContactClick={scrollToContact} />
        </div>
      </div>

      {/* Section 2: Full-Screen Core Philosophy Statement with 3-Edge Liquid Purple Fill */}
      <TrustStatementSection />

      {/* Section 3: Modern Technology Arsenal Section (Bidirectional Moving Marquee with Foggy Blur) */}
      <TechArsenalSection onContactClick={scrollToContact} />

      {/* Section 4: Radial Rotary Jog-Wheel Project Showcase with Blank Color Mockups */}
      <RadialProjectsSection onContactClick={scrollToContact} />

      {/* Section 5: Overlapping Methodology & Workflow Stacking Cards */}
      <ProcessWorkflowSection onContactClick={scrollToContact} />
    </main>
  );
}
