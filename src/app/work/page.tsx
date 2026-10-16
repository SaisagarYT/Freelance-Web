"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TabbedFolderProjects } from "@/components/TabbedFolderProjects";
import { WorkImpactMetrics } from "@/components/WorkImpactMetrics";
import { WorkClientStories } from "@/components/WorkClientStories";
import { WorkDeliveryProcess } from "@/components/WorkDeliveryProcess";
import { WorkKickoffCTA } from "@/components/WorkKickoffCTA";

export default function WorkPage() {
  const pageContainerRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroGridLinesRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtextRef = useRef<HTMLDivElement>(null);
  const heroBottomBarRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const contactElem = document.getElementById("contact");
    contactElem?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Timeline
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (heroTitleRef.current) {
        const titleLines = heroTitleRef.current.querySelectorAll(".hero-line-inner");
        heroTl.fromTo(
          titleLines,
          {
            yPercent: 110,
            opacity: 0,
            rotateZ: 1.5,
          },
          {
            yPercent: 0,
            opacity: 1,
            rotateZ: 0,
            duration: 1.1,
            stagger: 0.12,
            delay: 0.15,
          }
        );
      }

      if (heroSubtextRef.current) {
        heroTl.fromTo(
          heroSubtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        );
      }

      if (heroBottomBarRef.current) {
        heroTl.fromTo(
          heroBottomBarRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        );
      }

      // 2. Hero Background Grid Columns Parallax on Scroll
      if (heroGridLinesRef.current && heroSectionRef.current) {
        gsap.to(heroGridLinesRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: heroSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      // 3. Staggered Smooth Scroll Reveals for Section Headers Across the Page
      const animatedHeaders = document.querySelectorAll(".gsap-reveal-header");
      animatedHeaders.forEach((header) => {
        gsap.fromTo(
          header,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: header,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 4. Subtle Parallax Lift on Major Section Blocks
      const parallaxSections = document.querySelectorAll(".gsap-parallax-section");
      parallaxSections.forEach((sec) => {
        gsap.fromTo(
          sec,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, pageContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageContainerRef}
      className="min-h-screen bg-[#F7F5FC] text-slate-900 flex flex-col relative overflow-x-hidden selection:bg-purple-600 selection:text-white"
    >
      {/* Detachable Fixed Island Dock Navbar */}
      <Navbar onContactClick={scrollToContact} />

      {/* ============================================================ */}
      {/* FULL-SCREEN ARCHITECTURAL VIOLETISH-WHITE GRID HERO SECTION  */}
      {/* ============================================================ */}
      <section
        ref={heroSectionRef}
        className="w-full min-h-screen h-screen relative flex flex-col justify-between px-6 sm:px-10 md:px-14 lg:px-20 py-6 sm:py-10 select-none overflow-hidden"
        style={{
          backgroundColor: "#F7F5FC",
          backgroundImage: `
            linear-gradient(to right, rgba(147, 51, 234, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      >
        {/* Full-Screen Vertical Architectural Column Grid Dividers (10 Columns) with GSAP Parallax */}
        <div
          ref={heroGridLinesRef}
          className="absolute inset-0 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 pointer-events-none will-change-transform"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-full border-r border-[#E2DCF0]/80 last:border-r-0"
            />
          ))}
        </div>

        {/* TOP ARCHITECTURAL METADATA ROW */}
        <div className="relative z-10 w-full pt-18 sm:pt-22 md:pt-24 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="font-roboto-condensed font-black tracking-wider text-base sm:text-xl text-slate-950 uppercase">
              KAIZEN_
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] sm:text-[11px] text-purple-800/80 uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-purple-100/60 border border-purple-200/50">
              HI-END DEVELOPMENT
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="hidden sm:inline">INDEXED PRODUCTION ARCHIVE</span>
            <span className="sm:hidden">ARCHIVE</span>
          </div>
        </div>

        {/* MAIN HERO CONTENT AREA (Kinetic Clip Reveal) */}
        <div className="relative z-10 my-auto py-6 flex flex-col justify-center">
          <h1
            ref={heroTitleRef}
            className="font-roboto-condensed font-black tracking-tight text-slate-950 text-5xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[124px] leading-[0.92] uppercase"
          >
            <span className="block overflow-hidden pb-1">
              <span className="hero-line-inner inline-block will-change-transform">FROM</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-line-inner inline-block will-change-transform">IDEA TO FINISHED</span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span className="hero-line-inner inline-block will-change-transform">
                PRODUCT<span className="text-purple-600 animate-pulse">_</span>
              </span>
            </span>
          </h1>

          <div
            ref={heroSubtextRef}
            className="w-full flex justify-end pt-4 sm:pt-6 md:pt-8 pr-2 sm:pr-6"
          >
            <p className="font-mono text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-[290px] sm:max-w-[360px] md:max-w-[400px]">
              We start work immediately and you&apos;ll have weekly check-ins.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR: Crosshair & Social Handles */}
        <div
          ref={heroBottomBarRef}
          className="relative z-10 w-full flex items-end justify-between pb-2 sm:pb-4"
        >
          <div className="flex items-center gap-6 text-slate-500 font-mono text-xs sm:text-sm font-semibold">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-950 transition-colors"
            >
              in
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-950 transition-colors"
            >
              f
            </a>
          </div>

          <div className="text-purple-400">
            <Plus className="w-6 h-6 sm:w-8 sm:h-8 stroke-[1.5]" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: QUANTIFIED SYSTEM TELEMETRY (BY THE NUMBERS)      */}
      {/* ============================================================ */}
      <WorkImpactMetrics />

      {/* ============================================================ */}
      {/* SECTION 3: CURATED PRODUCTION PORTFOLIO ARCHIVE              */}
      {/* ============================================================ */}
      <section
        className="w-full bg-[#F7F5FC] border-t border-[#E2DCF0] py-16 sm:py-24 px-4 sm:px-8 lg:px-14 relative"
        style={{
          backgroundColor: "#F7F5FC",
          backgroundImage: `
            linear-gradient(to right, rgba(147, 51, 234, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(147, 51, 234, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header Metadata (GSAP Animated) */}
          <div className="gsap-reveal-header flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#E2DCF0]">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>INDEXED WORKS & SYSTEMS</span>
              </div>
              <h2 className="font-roboto-condensed font-black text-3xl sm:text-5xl tracking-tight text-slate-950 uppercase">
                ENGINEERED FOR COMPOUNDING SCALE
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-slate-600 max-w-md">
              Full-stack SaaS applications, fluid interactive systems, and production platforms built for speed, resiliency, and conversion.
            </p>
          </div>

          <div className="pt-4 gsap-parallax-section">
            <TabbedFolderProjects onContactClick={scrollToContact} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: VERIFIED EXECUTIVE REPUTATION & CLIENT STORIES     */}
      {/* ============================================================ */}
      <WorkClientStories onContactClick={scrollToContact} />

      {/* ============================================================ */}
      {/* SECTION 5: DELIVERY VELOCITY & 2-WEEK SPRINT OS               */}
      {/* ============================================================ */}
      <WorkDeliveryProcess onContactClick={scrollToContact} />

      {/* ============================================================ */}
      {/* SECTION 6: ARCHITECTURAL PROJECT KICKOFF CTA DOCK             */}
      {/* (Maximum Width, Website Violet Theme, GSAP Animated)          */}
      {/* ============================================================ */}
      <WorkKickoffCTA onContactClick={scrollToContact} />

      {/* Footer */}
      <Footer onContactClick={scrollToContact} />
    </main>
  );
}
