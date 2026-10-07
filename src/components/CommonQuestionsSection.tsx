"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowRight } from "lucide-react";

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string[];
}

interface CommonQuestionsSectionProps {
  onContactClick?: () => void;
}

export const CommonQuestionsSection: React.FC<CommonQuestionsSectionProps> = ({
  onContactClick,
}) => {
  // Default to item 2 open to match reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqs: FaqItem[] = [
    {
      id: "faq-01",
      number: "1",
      question: "What industries do you work with?",
      answer: [
        "We collaborate with forward-thinking venture-backed startups, high-growth scale-ups, and enterprise engineering teams across fintech, AI infrastructure, creative technology, and modern SaaS.",
        "Any team that prioritizes high velocity, sub-second latency, and distinctive digital interfaces is an ideal partner for our studio.",
      ],
    },
    {
      id: "faq-02",
      number: "2",
      question: "How long does implementation take?",
      answer: [
        "Project timelines typically range from 2 to 6 weeks, depending on complexity. Smaller automation systems — such as AI chatbots with CRM integration — can often be deployed within 2–3 weeks.",
        "More advanced projects involving multi-platform integrations, custom AI logic, internal workflow automation, and reporting dashboards may take 4–6 weeks or longer.",
      ],
    },
    {
      id: "faq-03",
      number: "3",
      question: "Do we need technical knowledge to work with you?",
      answer: [
        "Not at all. We manage the complete technical lifecycle from architectural design to deployment. We translate your core business objectives into production-grade systems.",
        "We keep communication seamless with weekly milestone demos, transparent linear roadmaps, and modular documentation that your team can easily maintain.",
      ],
    },
    {
      id: "faq-04",
      number: "4",
      question: "Is AI automation secure?",
      answer: [
        "Yes, enterprise-grade security and zero-trust principles are foundational to every system we build. We adhere to strict data isolation, SOC2/GDPR compliance guidelines, and air-gapped secret handling.",
        "All API gateways utilize strict mutual TLS (mTLS), automated cryptographic key rotations, and isolated containerized runtimes so your telemetry and client privacy remain uncompromised.",
      ],
    },
    {
      id: "faq-05",
      number: "5",
      question: "What kind of ROI can we expect?",
      answer: [
        "Clients typically achieve 3x faster time-to-market compared to traditional agencies, alongside significant infrastructure cost savings through modern cloud architecture.",
        "Furthermore, our bespoke 60/120 FPS kinetic interfaces and sub-second query speeds directly elevate user engagement and conversion rates.",
      ],
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full bg-[#080B1E] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Subtle Ambient Glow & Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(124,58,237,0.08),transparent)] pointer-events-none" />

      {/* Main Massive White Curved Canvas matching screenshot */}
      <div className="w-full max-w-[1120px] mx-auto rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] bg-white p-6 sm:p-12 lg:p-16 shadow-[0_24px_80px_rgba(0,0,0,0.45)] relative z-10 flex flex-col items-center">
        {/* Top Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-[11px] font-mono font-bold text-slate-700 mb-5 select-none">
          <span className="text-slate-400">010</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          <span className="tracking-widest uppercase">FAQS</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-roboto-condensed text-center mb-8 sm:mb-12">
          Common Questions
        </h2>

        {/* Accordion Questions List */}
        <div className="w-full max-w-3xl space-y-3 sm:space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={faq.id}
                layout
                initial={false}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`w-full rounded-2xl sm:rounded-[22px] transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-2 border-[#C4B5FD] shadow-[0_8px_30px_rgba(147,51,234,0.06)]"
                    : "bg-[#F3F4F6] hover:bg-[#EEF0F4] border border-transparent"
                }`}
              >
                {/* Accordion Header Row */}
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 flex items-center justify-between gap-4 text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                    {/* Number Badge */}
                    <span className="w-5 h-5 rounded-md bg-white/80 border border-slate-200/80 flex items-center justify-center font-mono text-[11px] font-bold text-slate-700 shrink-0">
                      {faq.number}
                    </span>
                    {/* Question Text */}
                    <span className="text-sm sm:text-base font-bold text-slate-900 font-roboto-condensed tracking-tight">
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle Circular Button */}
                  <div className="shrink-0">
                    {isOpen ? (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200/90 text-slate-800 flex items-center justify-center shadow-xs hover:bg-slate-50 transition-colors">
                        <X className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-xs hover:bg-purple-700 transition-colors">
                        <Plus className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 space-y-3 pl-12 sm:pl-14 text-xs sm:text-sm text-slate-600 font-roboto-condensed leading-relaxed font-normal">
                        {faq.answer.map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA / Inquiry Link */}
        <div className="mt-10 sm:mt-12 text-center flex flex-col items-center gap-1 text-slate-500 font-roboto-condensed">
          <p className="text-xs sm:text-sm font-medium">Have any other questions?</p>
          <button
            onClick={onContactClick || (() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            })}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-purple-700 underline underline-offset-4 transition-colors cursor-pointer group"
          >
            <span>Contact Us</span>
            <div className="w-4 h-4 rounded-full bg-slate-200 group-hover:bg-purple-100 flex items-center justify-center transition-colors">
              <ArrowRight className="w-2.5 h-2.5 text-slate-700 group-hover:text-purple-700 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
