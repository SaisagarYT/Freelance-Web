"use client";

import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

export const CapabilitiesSection = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleSnippet = `// Real-Time Edge Telemetry Worker
export async function handleStream(event: TelemetryEvent) {
  const pipeline = createEdgePipeline({
    compression: "zstd",
    batchWindowMs: 15,
  });
  
  return await pipeline.dispatch(event);
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="capabilities" className="w-full bg-slate-50/50 py-24 sm:py-32 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/70 text-blue-700 border border-blue-200 mb-3">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            What I Am Able To Build &amp; Ship
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Bridging the gap between cutting-edge creative design and resilient full-stack systems. Here is the depth of what I bring to every engagement.
          </p>
        </div>

        {/* Bento Grid from Aceternity UI */}
        <BentoGrid className="max-w-6xl mx-auto">
          {/* Item 1: Kinetic UI & 60 FPS Physics */}
          <BentoGridItem
            className="md:col-span-2"
            title="Fluid 60 FPS Kinetic Interfaces"
            description="Bespoke micro-interactions, scroll-driven timelines (GSAP, Motion, Anime.js), and hardware-accelerated shaders that make applications feel alive, responsive, and tactile."
            icon={<Sparkles className="w-5 h-5 text-blue-600" />}
            header={
              <div className="w-full h-full min-h-[7rem] rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 p-4 flex flex-col justify-between text-white relative overflow-hidden border border-white/10">
                <div className="flex items-center justify-between text-xs text-blue-300 font-mono">
                  <span>Engine: Motion + WebGL Canvas</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    60 FPS Stable
                  </span>
                </div>
                
                {/* Visual kinetic wave */}
                <div className="flex items-center gap-1.5 h-12 my-auto justify-center">
                  {[40, 65, 85, 45, 95, 75, 50, 80, 60, 90, 45, 70].map((h, i) => (
                    <div
                      key={i}
                      className="w-2 rounded-full bg-blue-500/70 animate-pulse"
                      style={{
                        height: `${h}%`,
                        animationDelay: `${i * 120}ms`,
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Zero Jank Frame Guarantee</span>
                  <span className="font-mono text-white">GPU Hardware Accelerated</span>
                </div>
              </div>
            }
          />

          {/* Item 2: Core Web Vitals & Speed */}
          <BentoGridItem
            className="md:col-span-1"
            title="Sub-Second Load Times"
            description="Obsessed with Core Web Vitals. Sub-100ms TTFB, automated image optimization, and static edge generation for 100/100 Lighthouse scores."
            icon={<Activity className="w-5 h-5 text-emerald-600" />}
            header={
              <div className="w-full h-full min-h-[7rem] rounded-2xl bg-emerald-50/70 border border-emerald-200/80 p-5 flex flex-col justify-center items-center text-center">
                <div className="text-4xl font-black text-emerald-700 font-mono tracking-tight">
                  100<span className="text-emerald-500 text-2xl">/100</span>
                </div>
                <div className="text-xs font-semibold text-emerald-800 mt-1">
                  Google Lighthouse Performance
                </div>
                <div className="flex items-center gap-2 mt-3 text-[10px] text-emerald-600 font-mono font-medium">
                  <span>LCP &lt; 0.8s</span>
                  <span>•</span>
                  <span>CLS: 0.00</span>
                  <span>•</span>
                  <span>FID &lt; 15ms</span>
                </div>
              </div>
            }
          />

          {/* Item 3: Live Code Quality Terminal */}
          <BentoGridItem
            className="md:col-span-1"
            title="Production-Grade Code Quality"
            description="Strict TypeScript types, modular architectural design patterns, automated unit tests, and maintainable documentation that your team will love inheriting."
            icon={<Terminal className="w-5 h-5 text-indigo-600" />}
            header={
              <div className="w-full h-full min-h-[7rem] rounded-2xl bg-slate-900 border border-slate-800 p-3 text-left font-mono text-[11px] text-slate-300 relative group overflow-hidden">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <button
                    onClick={copyCode}
                    className="text-slate-400 hover:text-white flex items-center gap-1 text-[10px]"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="text-blue-300 leading-tight overflow-x-hidden">
                  <code>{sampleSnippet}</code>
                </pre>
              </div>
            }
          />

          {/* Item 4: Scalable Full-Stack Architecture */}
          <BentoGridItem
            className="md:col-span-2"
            title="Full-Stack & Cloud Architecture"
            description="From secure authentication (NextAuth, Clerk), complex relational databases (PostgreSQL, Supabase, Prisma), to payment workflows (Stripe, LemonSqueezy) and autonomous AI pipelines."
            icon={<Cpu className="w-5 h-5 text-blue-600" />}
            header={
              <div className="w-full h-full min-h-[7rem] rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 p-5 flex flex-col justify-between text-white border border-slate-800">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                    <div className="text-[10px] text-slate-400">Database Layer</div>
                    <div className="text-xs font-bold text-white mt-0.5">PostgreSQL / Supabase</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                    <div className="text-[10px] text-slate-400">API Gateway</div>
                    <div className="text-xs font-bold text-blue-400 mt-0.5">Next.js Edge &amp; Node</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left">
                    <div className="text-[10px] text-slate-400">Checkout</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">Stripe Webhooks</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Engineered with end-to-end type safety, automated rollback, and zero vendor lock-in.</span>
                </div>
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
};
