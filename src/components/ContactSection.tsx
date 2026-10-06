"use client";

import React, { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Sparkles, Send, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import confetti from "canvas-confetti";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState("Full-Stack Web App");
  const [selectedBudget, setSelectedBudget] = useState("$5k - $10k");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const userEmail = "saisathvik@example.com"; // Customized for developer

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopied(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#2948FF", "#6366F1", "#10B981", "#FF6584"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="w-full bg-white py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-purple-50/80 text-purple-900 border border-purple-200/80 mb-4 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
                </span>
                <span className="font-mono text-[11px] font-bold tracking-widest uppercase text-purple-700">
                  ENGAGEMENT DESK
                </span>
                <span className="w-px h-3 bg-purple-200" />
                <span className="font-roboto-condensed text-xs font-medium text-slate-700">
                  Reviewing Inquiries for 2026
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Let&apos;s build something <span className="text-blue-600">extraordinary</span> together.
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Whether you need a flagship SaaS web app engineered from scratch, an existing platform overhauled for speed, or a high-converting kinetic landing page, I am ready to help.
              </p>
            </div>

            {/* Direct Copy Email Box */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 card-soft-shadow">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Direct Contact
              </div>
              <div className="flex items-center justify-between gap-3 mt-2">
                <div className="flex items-center gap-2.5 text-slate-900 font-mono text-sm sm:text-base font-semibold truncate">
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">{userEmail}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 flex items-center gap-1.5 shadow-xs transition-all active:scale-95 cursor-pointer shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Fast Stats & Guarantees */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">&lt; 24h</div>
                <div className="text-xs text-slate-500 mt-0.5">Average Response Time</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="text-2xl font-bold text-emerald-600">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">On-Time Milestone Delivery</div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-sky-500 hover:border-sky-400 transition-colors"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 card-soft-shadow relative">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out. I have received your project details and will review your specifications within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Full-Stack Web App",
                      "SaaS Dashboard",
                      "Kinetic Landing Page",
                      "Design System & UI",
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          selectedType === type
                            ? "bg-blue-600 text-white shadow-xs"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Estimated Budget Scope
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["$3k - $5k", "$5k - $10k", "$10k - $25k", "$25k+"].map((budget) => (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setSelectedBudget(budget)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          selectedBudget === budget
                            ? "bg-slate-900 text-white shadow-xs"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="founder@company.com"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Project Vision &amp; Goals
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Tell me about what you are looking to build, timelines, and primary goals..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Project Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
