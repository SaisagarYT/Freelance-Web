"use client";

import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStatementSection } from "@/components/TrustStatementSection";
import { TechArsenalSection } from "@/components/TechArsenalSection";
import { RadialProjectsSection } from "@/components/RadialProjectsSection";
import { ProcessWorkflowSection } from "@/components/ProcessWorkflowSection";

export default function Home() {
  const isGlobalTransitioningRef = useRef(false);
  const lastGlobalWheelTimeRef = useRef(0);

  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    contactElem?.scrollIntoView({ behavior: "smooth" });
  };

  // UNIFIED FULL-PAGE AUTO-FIXING SCROLL CONTROLLER
  // When scrolling, automatically and smoothly fixes to the upcoming section
  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      const projectsEl = document.getElementById("projects");
      const methodologyEl = document.getElementById("methodology");
      const vh = window.innerHeight;

      // Check if user is currently pinned inside internal multi-slide sections
      if (projectsEl) {
        const pRect = projectsEl.getBoundingClientRect();
        // If pinned inside projects runway, let projects handle its internal multi-step rotation
        if (pRect.top <= 10 && pRect.bottom >= vh - 10) {
          return;
        }
      }

      if (methodologyEl) {
        const mRect = methodologyEl.getBoundingClientRect();
        // If pinned inside methodology runway, let methodology handle its internal multi-step stacking
        if (mRect.top <= 10 && mRect.bottom >= vh - 10) {
          return;
        }
      }

      if (Math.abs(e.deltaY) < 22) return;

      const now = Date.now();
      if (isGlobalTransitioningRef.current || now - lastGlobalWheelTimeRef.current < 700) {
        e.preventDefault();
        return;
      }

      const trustEl = document.getElementById("trust-statement");
      const techEl = document.getElementById("tech-stack");

      const sectionPositions = [
        0, // 0: Hero
        trustEl ? trustEl.offsetTop : vh, // 1: Trust Statement
        techEl ? techEl.offsetTop : vh * 2, // 2: Tech Arsenal
        projectsEl ? projectsEl.offsetTop : vh * 3, // 3: Radial Projects
        methodologyEl ? methodologyEl.offsetTop : vh * 7, // 4: Methodology
      ];

      const scrollY = window.scrollY;

      // Identify current active section based on scroll offset
      let currentIndex = 0;
      for (let i = 0; i < sectionPositions.length; i++) {
        if (scrollY >= sectionPositions[i] - 120) {
          currentIndex = i;
        }
      }

      if (e.deltaY > 0) {
        // Scrolling down -> automatically fix to upcoming section
        if (currentIndex < sectionPositions.length - 1) {
          e.preventDefault();
          isGlobalTransitioningRef.current = true;
          lastGlobalWheelTimeRef.current = now;
          const nextTarget = sectionPositions[currentIndex + 1];
          window.scrollTo({ top: nextTarget, behavior: "smooth" });
          setTimeout(() => {
            isGlobalTransitioningRef.current = false;
          }, 750);
        }
      } else if (e.deltaY < 0) {
        // Scrolling up -> automatically fix to previous section
        if (currentIndex > 0) {
          e.preventDefault();
          isGlobalTransitioningRef.current = true;
          lastGlobalWheelTimeRef.current = now;
          const prevTarget = sectionPositions[currentIndex - 1];
          window.scrollTo({ top: prevTarget, behavior: "smooth" });
          setTimeout(() => {
            isGlobalTransitioningRef.current = false;
          }, 750);
        }
      }
    };

    window.addEventListener("wheel", handleGlobalWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleGlobalWheel);
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Outer White Frame Wrapper matching reference screenshot */}
      <div id="hero" className="w-full bg-white px-2 sm:px-4 pt-2 sm:pt-3">
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
