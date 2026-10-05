"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, TrendingUp, Zap, Sparkles, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./Icons";

type ProjectCategory = "all" | "saas" | "landing" | "ecommerce";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  metric: string;
  metricLabel: string;
  description: string;
  stack: string[];
  deliverables: string[];
  gradient: string;
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
}

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "quantum-analytics",
      title: "Quantum Real-Time Analytics",
      subtitle: "High-Throughput Enterprise Telemetry Dashboard",
      category: "saas",
      metric: "99%",
      metricLabel: "Telemetry Precision",
      description:
        "Engineered an ultra-fast event streaming platform handling 250k daily active sessions with sub-20ms query latency across multi-region edge clusters.",
      stack: ["Next.js 15", "TypeScript", "ClickHouse", "Tailwind CSS", "Redis"],
      deliverables: [
        "Interactive SVG data curves with real-time WebSocket sync",
        "Sub-second multi-tenant data caching architecture",
        "Zero-latency dark/light aesthetic design system",
      ],
      gradient: "from-blue-600/10 via-indigo-600/5 to-transparent",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "aura-kinetic",
      title: "Aura Kinetic E-Commerce",
      subtitle: "Fluid 60FPS Headless Luxury Storefront",
      category: "ecommerce",
      metric: "+140%",
      metricLabel: "Checkout Conversion",
      description:
        "Designed and implemented a headless retail experience featuring kinetic micro-interactions, instantaneous cart state transitions, and custom 3D product previews.",
      stack: ["Next.js 15", "Framer Motion", "Stripe API", "Prisma", "PostgreSQL"],
      deliverables: [
        "Custom physics-based drag-to-cart interaction",
        "Sub-100ms TTFB across worldwide CDN edges",
        "Fully automated tax & currency settlement engine",
      ],
      gradient: "from-indigo-600/10 via-purple-600/5 to-transparent",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: "hyper-launch",
      title: "Hyperflow SaaS Landing Page",
      subtitle: "High-Conversion Product Launch Experience",
      category: "landing",
      metric: "3.8x",
      metricLabel: "Sign-Up Velocity",
      description:
        "A high-fashion, SaaS product launch page engineered to maximize waitlist conversions with dynamic scroll-driven storytelling and interactive pricing calculator.",
      stack: ["React 19", "GSAP", "Tailwind CSS", "Lenis Scroll", "Lucide"],
      deliverables: [
        "ScrollTrigger timeline animations with smooth momentum",
        "Interactive tier simulator with instant ROI calculation",
        "100/100 Google Lighthouse Core Web Vitals score",
      ],
      gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "vertex-workflow",
      title: "Vertex Autonomous Cloud Hub",
      subtitle: "Visual API Pipeline & Microservice Orchestrator",
      category: "saas",
      metric: "<15ms",
      metricLabel: "API Response Time",
      description:
        "A full-stack workflow automation canvas where developers drag, connect, and execute serverless cloud functions with live visual execution logs.",
      stack: ["Next.js", "TypeScript", "Node.js", "Docker", "Tailwind CSS"],
      deliverables: [
        "Infinite node canvas with zoom/pan and connection snapping",
        "Optimistic UI updates with offline state persistence",
        "Granular team role-based access control (RBAC)",
      ],
      gradient: "from-emerald-600/10 via-blue-600/5 to-transparent",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="w-full bg-white py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Selected Works &amp; Case Studies
            </h2>
            <p className="mt-3 text-base text-slate-500 max-w-xl">
              A curated selection of high-performance web apps, kinetic landing pages, and scalable systems I have architected and shipped.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {[
              { label: "All Projects", key: "all" },
              { label: "SaaS & Dashboards", key: "saas" },
              { label: "E-Commerce", key: "ecommerce" },
              { label: "High-Converting Pages", key: "landing" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as ProjectCategory)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.key
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative rounded-3xl bg-white border border-slate-200 p-7 sm:p-8 flex flex-col justify-between card-soft-shadow card-hover-shadow overflow-hidden"
              >
                {/* Subtle top corner gradient accent */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${project.gradient} blur-2xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700`}
                />

                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {project.category.toUpperCase()}
                    </span>

                    {/* Big Metric Badge (Matches the 99% badge in the reference image) */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/80 text-xs font-bold">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{project.metric}</span>
                      <span className="text-emerald-600/80 font-normal hidden sm:inline">
                        {project.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Deliverables / Architectural Breakthroughs */}
                  <div className="mt-6 space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Engineering Highlights
                    </div>
                    {project.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer: Tech Stack & Actions */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        aria-label="GitHub Repository"
                        className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 group/btn transition-colors cursor-pointer"
                    >
                      <span>Explore Overview</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Quick Modal / Drawer */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>

              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 mb-3">
                Project Deep Dive
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1">
                {selectedProject.subtitle}
              </p>

              <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500">Key Metric Achieved</div>
                <div className="text-3xl font-black text-slate-900 mt-1">
                  {selectedProject.metric}{" "}
                  <span className="text-xs font-semibold text-emerald-600">
                    {selectedProject.metricLabel}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-2">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Full Implementation Scope
                </div>
                {selectedProject.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5"
                >
                  <span>Build Something Similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
