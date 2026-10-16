"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageSquare,
  MapPin,
  Phone,
  Check,
  CheckSquare,
  Square,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface WorkKickoffCTAProps {
  onContactClick?: () => void;
}

interface HelpOption {
  id: string;
  label: string;
}

// All checkboxes start UNCHECKED by default (no ticks) as requested
const HELP_OPTIONS: HelpOption[] = [
  { id: "website-design", label: "Website design" },
  { id: "content-creation", label: "Content creation" },
  { id: "ux-design", label: "UX design" },
  { id: "strategy-consulting", label: "Strategy & consulting" },
  { id: "user-research", label: "User research" },
  { id: "other", label: "Other" },
];

export const WorkKickoffCTA: React.FC<WorkKickoffCTAProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  // No initial ticks on checkboxes
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Outer Card Scale & Rise
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Left Column Channels Stagger
      if (leftColRef.current) {
        const contactItems = leftColRef.current.querySelectorAll(".contact-channel-item");
        gsap.fromTo(
          contactItems,
          {
            opacity: 0,
            x: -24,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.14,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Right Column Form Elements Stagger
      if (rightColRef.current) {
        const formElements = rightColRef.current.querySelectorAll(".form-stagger-item");
        gsap.fromTo(
          formElements,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 85,
      origin: { y: 0.6 },
      colors: ["#9333EA", "#7C3AED", "#C4B5FD", "#10B981"],
    });

    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setProject("");
      setSelectedServices([]);
    }, 3800);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="w-full bg-[#F7F5FC] border-t border-[#E2DCF0] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative select-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(147, 51, 234, 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(147, 51, 234, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    >
      {/* Maximum full container width matching the rest of the work page */}
      <div className="w-full max-w-7xl mx-auto">
        {/* Outer Framed Card in Website's Signature Style */}
        <div
          ref={cardRef}
          className="w-full bg-white rounded-[32px] sm:rounded-[42px] border border-[#E2DCF0] shadow-[0_24px_70px_rgba(147,51,234,0.07)] overflow-hidden p-6 sm:p-10 lg:p-12 relative"
        >
          {/* Subtle Ambient Background Violet Glow */}
          <div
            aria-hidden="true"
            className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* LEFT COLUMN: BRAND & DIRECT CONTACT CHANNELS (No Socials)     */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <div
              ref={leftColRef}
              className="lg:col-span-5 flex flex-col justify-between py-2 space-y-8 sm:space-y-10"
            >
              {/* Brand Logo & Studio Identity */}
              <div className="contact-channel-item flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/25">
                  <span className="font-roboto-condensed font-black text-lg leading-none">
                    K
                  </span>
                </div>
                <div>
                  <span className="font-roboto-condensed font-black text-xl sm:text-2xl tracking-tight text-slate-950 uppercase block leading-none">
                    KAIZEN SOLVES
                  </span>
                  <span className="font-mono text-[10px] text-purple-700 font-bold uppercase tracking-widest mt-1 block">
                    PRODUCTION STUDIO
                  </span>
                </div>
              </div>

              {/* Middle: 3 Direct Contact Channels with Website Purple Theme */}
              <div className="space-y-7">

                {/* 1. Chat to us */}
                <div className="contact-channel-item flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl border border-purple-200/80 bg-purple-50 flex items-center justify-center text-purple-700 shrink-0 shadow-xs group-hover:bg-purple-100/80 transition-colors">
                    <MessageSquare className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-roboto-condensed font-black text-base text-slate-950 leading-snug uppercase tracking-tight">
                      Chat to us
                    </h4>
                    <p className="font-roboto-condensed font-medium text-xs sm:text-sm text-slate-500 mt-0.5">
                      Direct engineering advisory for ambitious founders.
                    </p>
                    <a
                      href="mailto:saisathvik@example.com"
                      className="font-mono font-bold text-xs sm:text-sm text-purple-700 hover:text-purple-900 transition-colors inline-flex items-center gap-1 mt-1.5"
                    >
                      <span>saisathvik@example.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* 2. Visit us */}
                <div className="contact-channel-item flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl border border-purple-200/80 bg-purple-50 flex items-center justify-center text-purple-700 shrink-0 shadow-xs group-hover:bg-purple-100/80 transition-colors">
                    <MapPin className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-roboto-condensed font-black text-base text-slate-950 leading-snug uppercase tracking-tight">
                      Visit us
                    </h4>
                    <p className="font-roboto-condensed font-medium text-xs sm:text-sm text-slate-500 mt-0.5">
                      Global remote-first studio engineering across timezones.
                    </p>
                    <p className="font-roboto-condensed font-bold text-xs sm:text-sm text-slate-900 mt-1.5 leading-snug">
                      San Francisco · Bengaluru · London<br />
                      Global Remote Hub
                    </p>
                  </div>
                </div>

                {/* 3. Call us */}
                <div className="contact-channel-item flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-2xl border border-purple-200/80 bg-purple-50 flex items-center justify-center text-purple-700 shrink-0 shadow-xs group-hover:bg-purple-100/80 transition-colors">
                    <Phone className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h4 className="font-roboto-condensed font-black text-base text-slate-950 leading-snug uppercase tracking-tight">
                      Call us
                    </h4>
                    <p className="font-roboto-condensed font-medium text-xs sm:text-sm text-slate-500 mt-0.5">
                      Sprint planning &amp; scoping calls Monday through Friday.
                    </p>
                    <a
                      href="tel:+15550000000"
                      className="font-mono font-bold text-xs sm:text-sm text-purple-700 hover:text-purple-900 transition-colors inline-flex items-center gap-1 mt-1.5"
                    >
                      <span>+1 (555) 234-5678</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom SLA guarantee (Replaces removed social icons) */}
              <div className="contact-channel-item pt-4 border-t border-slate-100 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" />
                <span className="font-mono text-xs font-semibold text-slate-600 uppercase tracking-wider">
                  Guaranteed response within 12 hours
                </span>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════ */}
            {/* RIGHT COLUMN: SIGNATURE ELECTRIC PURPLE & INDIGO FORM CARD    */}
            {/* ══════════════════════════════════════════════════════════════ */}
            <div
              ref={rightColRef}
              className="lg:col-span-7 bg-gradient-to-br from-[#090B26] via-[#1A0E3B] to-[#4C1D95] rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 md:p-12 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Ambient Radial Highlight */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
              />

              {submitted ? (
                <div className="my-auto py-16 text-center space-y-4 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white text-purple-700 flex items-center justify-center mx-auto shadow-lg shadow-purple-950/40">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="font-roboto-condensed font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
                    LET&apos;S TEAM UP!
                  </h3>
                  <p className="font-roboto-condensed font-medium text-sm sm:text-base text-purple-200/90 max-w-sm mx-auto">
                    Thank you, {name || "friend"}. Your project brief has been logged. We will review your specs and reach out within 12 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7 relative z-10">
                  {/* Headline */}
                  <div className="form-stagger-item">
                    <h3 className="font-roboto-condensed font-black text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.1]">
                      Got ideas? We&apos;ve got<br />
                      the skills.{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-300">
                        Let&apos;s team up.
                      </span>
                    </h3>
                    <p className="font-roboto-condensed font-medium text-xs sm:text-sm text-purple-200/80 mt-2.5">
                      Tell us more about yourself and what you&apos;ve got in mind.
                    </p>
                  </div>

                  {/* Underline Input 1: Your name */}
                  <div className="form-stagger-item pt-1">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-transparent border-b border-white/25 focus:border-purple-300 outline-none pb-2 text-white placeholder:text-purple-200/50 font-roboto-condensed font-medium text-sm sm:text-base transition-colors"
                    />
                  </div>

                  {/* Underline Input 2: you@company.com */}
                  <div className="form-stagger-item">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-transparent border-b border-white/25 focus:border-purple-300 outline-none pb-2 text-white placeholder:text-purple-200/50 font-roboto-condensed font-medium text-sm sm:text-base transition-colors"
                    />
                  </div>

                  {/* Underline Input 3: Tell us a little about the project... */}
                  <div className="form-stagger-item">
                    <input
                      type="text"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      placeholder="Tell us a little about the project..."
                      className="w-full bg-transparent border-b border-white/25 focus:border-purple-300 outline-none pb-2 text-white placeholder:text-purple-200/50 font-roboto-condensed font-medium text-sm sm:text-base transition-colors"
                    />
                  </div>

                  {/* Checkbox Matrix: "How can we help?" (NO TICKS BY DEFAULT) */}
                  <div className="form-stagger-item pt-2">
                    <span className="font-roboto-condensed font-bold text-xs uppercase tracking-wider text-purple-200 block mb-3">
                      How can we help?
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                      {HELP_OPTIONS.map((opt) => {
                        const isChecked = selectedServices.includes(opt.id);

                        return (
                          <label
                            key={opt.id}
                            onClick={() => toggleService(opt.id)}
                            className="flex items-center gap-2.5 cursor-pointer group select-none"
                          >
                            <div className="text-white flex items-center justify-center">
                              {isChecked ? (
                                <CheckSquare className="w-4 h-4 stroke-[2.2] fill-white text-purple-900" />
                              ) : (
                                <Square className="w-4 h-4 stroke-[1.8] text-purple-300/60 group-hover:text-white transition-colors" />
                              )}
                            </div>
                            <span className="font-roboto-condensed font-medium text-xs sm:text-sm text-purple-100 group-hover:text-white transition-colors">
                              {opt.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="form-stagger-item pt-3">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-roboto-condensed font-black text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_4px_24px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_30px_rgba(255,255,255,0.4)] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Let&apos;s get started!</span>
                      <Sparkles className="w-4 h-4 text-purple-600" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkKickoffCTA;
