"use client";

import React, { useState } from "react";
import { Plus, ArrowUpRight, Copy, Check, Mail, Calendar, Sparkles, Send } from "lucide-react";
import confetti from "canvas-confetti";

interface WorkKickoffCTAProps {
  onContactClick?: () => void;
}

export const WorkKickoffCTA: React.FC<WorkKickoffCTAProps> = () => {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState("SaaS Web App");
  const [selectedBudget, setSelectedBudget] = useState("$10k - $25k");
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const directEmail = "saisathvik@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#9333EA", "#7C3AED", "#10B981", "#6366F1"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#9333EA", "#7C3AED", "#10B981", "#3B82F6"],
    });
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#F7F5FC] border-t border-[#E2DCF0] py-20 sm:py-28 px-6 sm:px-10 md:px-14 lg:px-20 relative select-none"
      style={{
        backgroundColor: "#F7F5FC",
        backgroundImage: `
          linear-gradient(to right, rgba(147, 51, 234, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(147, 51, 234, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: "64px 64px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER & ARCHITECTURAL METADATA */}
        <div className="mb-12 sm:mb-16 pb-6 border-b border-[#E2DCF0] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-purple-700 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>05 // ARCHITECTURAL ENGAGEMENT DESK</span>
            </div>
            <h2 className="font-roboto-condensed font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-950 uppercase">
              HAVE A PRODUCT TO BUILD?
            </h2>
          </div>

          <div className="flex items-center gap-4 font-mono text-[11px] text-slate-500 uppercase tracking-wider">
            <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              2 SPOTS AVAILABLE FOR Q2
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span>DIRECT FOUNDER SLA</span>
          </div>
        </div>

        {/* MAIN INTERACTIVE KICKOFF DOCK */}
        <div className="bg-white border border-[#E2DCF0] rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(15,23,42,0.05)] grid grid-cols-1 lg:grid-cols-12 relative">
          {/* Corner Crosshairs */}
          <div className="absolute top-3 right-3 text-purple-300 pointer-events-none">
            <Plus className="w-4 h-4 stroke-[1.5]" />
          </div>
          <div className="absolute bottom-3 left-3 text-purple-300 pointer-events-none">
            <Plus className="w-4 h-4 stroke-[1.5]" />
          </div>

          {/* LEFT COLUMN: Direct Consultation & Calendar Link (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-[#E2DCF0] flex flex-col justify-between">
            <div>
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded border border-purple-200 block w-max mb-6">
                SPEED & CRAFT ASSURED
              </span>

              <h3 className="font-roboto-condensed font-black text-2xl sm:text-3xl text-slate-950 uppercase tracking-tight mb-4">
                LET&apos;S ARCHITECT YOUR DIGITAL PRODUCT
              </h3>

              <p className="font-roboto-condensed font-medium text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Send a brief overview of your product goals, technical stack preferences, or current prototype. We respond within 12 hours with a preliminary engineering breakdown.
              </p>

              {/* Direct Email Pill with Copy Button */}
              <div className="p-4 rounded-xl bg-white border border-[#E2DCF0] shadow-sm mb-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-200/80 flex items-center justify-center text-purple-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] text-slate-400 font-bold uppercase">
                      DIRECT INBOX
                    </div>
                    <div className="font-mono text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {directEmail}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 font-mono text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Direct Booking Link */}
              <a
                href="https://cal.com"
                target="_blank"
                rel="noreferrer"
                className="w-full p-4 rounded-xl bg-purple-50/60 hover:bg-purple-100/60 border border-purple-200/80 flex items-center justify-between text-purple-900 font-roboto-condensed font-bold text-sm uppercase tracking-wider transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-purple-700" />
                  <span>BOOK 20-MIN ARCHITECTURE CALL</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-purple-700" />
              </a>
            </div>

            {/* SLA Response Guarantee */}
            <div className="pt-6 border-t border-[#E2DCF0] mt-8 text-xs font-mono text-slate-500 flex items-center justify-between">
              <span>RESPONSE TIME:</span>
              <span className="font-bold text-emerald-700">&lt; 12 HOURS GUARANTEED</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Fast Scope & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            {submitted ? (
              <div className="my-auto py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-roboto-condensed font-black text-2xl sm:text-3xl text-slate-950 uppercase tracking-tight">
                  INQUIRY RECEIVED_
                </h3>
                <p className="font-roboto-condensed font-medium text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                  Thank you. Your architecture specs have been logged. We will review your requirements and reach out within 12 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-bold uppercase tracking-wider transition-all"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Project Scope Selection */}
                <div>
                  <label className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                    1 // WHAT ARE WE BUILDING?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "SaaS Web App",
                      "Interactive Platform",
                      "Design System & Fluid UI",
                      "Full-Stack Re-Architecture",
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-3.5 py-2 rounded-lg font-roboto-condensed font-bold text-xs uppercase tracking-wider border transition-all ${
                          selectedType === type
                            ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-purple-300"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Budget Scope Selection */}
                <div>
                  <label className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2.5">
                    2 // ESTIMATED BUDGET SCOPE
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"].map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setSelectedBudget(tier)}
                        className={`px-3.5 py-2 rounded-lg font-mono font-bold text-xs uppercase tracking-wider border transition-all ${
                          selectedBudget === tier
                            ? "bg-purple-600 text-white border-purple-600 shadow-sm"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-purple-300"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Email Input */}
                <div>
                  <label className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    3 // YOUR WORK EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:bg-white focus:outline-none text-slate-900 font-mono text-sm transition-all"
                  />
                </div>

                {/* 4. Project Details */}
                <div>
                  <label className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                    4 // BRIEF SUMMARY OR TIMELINE
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current tech stack, goals, or target launch deadline..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-purple-500 focus:bg-white focus:outline-none text-slate-900 font-roboto-condensed text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-slate-950 hover:bg-purple-900 text-white font-roboto-condensed font-black text-base uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  <span>DISPATCH PROJECT INQUIRY</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}

            {/* Bottom Meta */}
            <div className="pt-6 border-t border-[#E2DCF0] mt-6 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>SECURITY: END-TO-END CONFIDENTIAL</span>
              <span>INDEX: #KZ-ENGAGE-2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
