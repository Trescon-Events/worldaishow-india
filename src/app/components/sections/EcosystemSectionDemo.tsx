"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText } from "../Shared";

interface TelemetryBar {
  name: string;
  value: number;
  color: string;
  glowColor: string;
}

interface TelemetryCardData {
  index: string;
  metricType: "dual" | "single";
  primaryNum: number;
  secondaryNum?: number;
  suffixText?: string;
  label: string;
  source: string;
  bars: TelemetryBar[];
  icon: React.ReactNode;
}

const sourceCitedCards: TelemetryCardData[] = [
  {
    index: "01",
    metricType: "dual",
    primaryNum: 40,
    secondaryNum: 28,
    label: "India AI adoption vs global benchmark",
    source: "Deloitte India, April 2026",
    bars: [
      {
        name: "India Enterprise Adoption",
        value: 40,
        color: "from-[#9be12b] via-[#C0F43C] to-[#e4ff85]",
        glowColor: "rgba(192, 244, 60, 0.65)",
      },
      {
        name: "Global Benchmark",
        value: 28,
        color: "from-[#0b84b8] via-[#18d4ff] to-[#7be8ff]",
        glowColor: "rgba(24, 212, 255, 0.55)",
      },
    ],
    icon: (
      <svg className="w-5 h-5 text-[#C0F43C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    index: "02",
    metricType: "single",
    primaryNum: 83,
    suffixText: "% Gap",
    label: "Organizations lacking core process redesign",
    source: "Deloitte India, April 2026",
    bars: [
      {
        name: "Point-Tool Retrofitting Only",
        value: 83,
        color: "from-[#18d4ff] via-[#6ce599] to-[#C0F43C]",
        glowColor: "rgba(192, 244, 60, 0.65)",
      },
      {
        name: "Core Process Redesigned",
        value: 17,
        color: "from-slate-500 via-slate-400 to-slate-300",
        glowColor: "rgba(148, 163, 184, 0.45)",
      },
    ],
    icon: (
      <svg className="w-5 h-5 text-[#18d4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  {
    index: "03",
    metricType: "dual",
    primaryNum: 74,
    secondaryNum: 21,
    label: "Agentic ambition vs mature governance",
    source: "Deloitte Global, January 2026",
    bars: [
      {
        name: "Agentic Deployment Ambition",
        value: 74,
        color: "from-[#0b84b8] via-[#18d4ff] to-[#84edff]",
        glowColor: "rgba(24, 212, 255, 0.65)",
      },
      {
        name: "Mature Governance Ready",
        value: 21,
        color: "from-[#9be12b] via-[#C0F43C] to-[#e4ff85]",
        glowColor: "rgba(192, 244, 60, 0.65)",
      },
    ],
    icon: (
      <svg className="w-5 h-5 text-[#C0F43C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const whatThisIsNotCards = [
  {
    index: "01",
    tag: "PRODUCTION FOCUS",
    title: "Not an AI awareness conference",
    body: "We do not debate whether AI will transform enterprise. We address the integration, monitoring, and workflow redesign required after launch.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    index: "02",
    tag: "EXECUTIVE BUYING GROUP",
    title: "Not a developer hackathon",
    body: "It gathers the cross-functional enterprise buying group: CIOs, CAIOs, CDOs, COOs, CISOs, and transformation leaders.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    index: "03",
    tag: "EDITORIAL INTEGRITY",
    title: "Not an uncapped vendor showcase",
    body: "Editorial integrity is preserved. Sponsored sessions are standardized at 30 minutes, vetted for implementation proof, and strictly capped.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    index: "04",
    tag: "NATIONAL SERIES ROADMAP",
    title: "Not a standalone, one-off event",
    body: "It is the launchpad of the World AI Show Series in India, building momentum directly toward the national Series Finale in late 2027.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

function useAnimatedValue(target: number, triggerKey: number, duration = 1350, delay = 0) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (triggerKey === 0) return;
    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    setVal(0);
    timeoutId = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setVal(Math.round(eased * target));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, triggerKey, duration, delay]);

  return val;
}

function TelemetryCard({ card, cardIndex }: { card: TelemetryCardData; cardIndex: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const [animTrigger, setAnimTrigger] = useState(0);
  const [barsExpanded, setBarsExpanded] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimTrigger((prev) => (prev === 0 ? 1 : prev));
          setBarsExpanded(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const replayAnimation = () => {
    setBarsExpanded(false);
    setTimeout(() => {
      setAnimTrigger((prev) => prev + 1);
      setBarsExpanded(true);
    }, 60);
  };

  const staggerMs = cardIndex * 140;
  const primaryCount = useAnimatedValue(card.primaryNum, animTrigger, 1300, staggerMs);
  const secondaryCount = useAnimatedValue(card.secondaryNum ?? 0, animTrigger, 1300, staggerMs + 140);
  const bar0Count = useAnimatedValue(card.bars[0].value, animTrigger, 1400, staggerMs + 120);
  const bar1Count = useAnimatedValue(card.bars[1].value, animTrigger, 1400, staggerMs + 280);
  const barCounts = [bar0Count, bar1Count];

  return (
    <article
      ref={cardRef}
      onMouseEnter={replayAnimation}
      className="group relative p-8 rounded-[24px] border border-[#18d4ff]/25 bg-gradient-to-b from-[#071830]/90 via-[#040e20]/95 to-[#030917]/95 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] text-left flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:border-[#C0F43C]/50 hover:shadow-[0_28px_70px_rgba(0,0,0,0.6),0_0_36px_rgba(24,212,255,0.14)] transition-all duration-300"
    >
      {/* Top Glowing Accent Line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#18d4ff]/70 to-transparent group-hover:via-[#C0F43C] transition-all duration-300" />
      {/* Corner Ambient Glow */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#18d4ff]/10 blur-2xl group-hover:bg-[#C0F43C]/15 transition-colors duration-300 pointer-events-none" />

      <div>
        {/* Top Icon & Telemetry Index */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-11 h-11 rounded-xl border border-white/12 bg-white/[0.04] flex items-center justify-center shadow-[inset_0_0_16px_rgba(24,212,255,0.08)] group-hover:border-[#C0F43C]/40 group-hover:scale-105 transition-all duration-300">
            {card.icon}
          </div>
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/55 font-mono text-[11px] tracking-[1.5px] uppercase">
            BENCHMARK // {card.index}
          </span>
        </div>

        {/* Animated Big Metric */}
        <strong className="block text-[clamp(36px,3.6vw,44px)] font-[850] leading-none tracking-[-1.5px] mb-3 bg-gradient-to-r from-[#C0F43C] via-[#d8ff75] to-[#18d4ff] bg-clip-text text-transparent tabular-nums">
          {card.metricType === "dual"
            ? `${primaryCount}% vs ${secondaryCount}%`
            : `${primaryCount}${card.suffixText}`}
        </strong>

        {/* Metric Label */}
        <p className="m-0 text-white font-bold text-[18px] leading-[1.35] mb-6">
          {card.label}
        </p>

        {/* Animated Visual Data Comparison Bars */}
        <div className="space-y-4 pt-4 border-t border-white/[0.08]">
          {card.bars.map((bar, bIdx) => (
            <div key={bar.name} className="space-y-2">
              <div className="flex items-center justify-between text-[12px] font-mono">
                <span className="text-white/70 group-hover:text-white transition-colors">
                  {bar.name}
                </span>
                <span className="text-white font-bold tabular-nums">
                  {barCounts[bIdx]}%
                </span>
              </div>

              {/* Track */}
              <div className="relative w-full h-2.5 rounded-full bg-[#091930] border border-white/[0.06] overflow-visible p-[1px]">
                {/* Animated Fill Bar */}
                <div
                  className={`relative h-full rounded-full bg-gradient-to-r ${bar.color} transition-all ease-out overflow-hidden`}
                  style={{
                    width: barsExpanded ? `${bar.value}%` : "0%",
                    transitionDuration: "1350ms",
                    transitionDelay: `${staggerMs + bIdx * 160}ms`,
                    boxShadow: barsExpanded ? `0 0 14px ${bar.glowColor}` : "none",
                  }}
                >
                  {/* Continuous Shimmer Wave Inside Bar */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)",
                      animation: "telemetryShimmer 2.4s infinite linear",
                    }}
                  />
                </div>

                {/* Glowing Pulse Orb at Leading Tip */}
                <span
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white transition-all ease-out pointer-events-none"
                  style={{
                    left: barsExpanded ? `${bar.value}%` : "0%",
                    opacity: barsExpanded ? 1 : 0,
                    transitionDuration: "1350ms",
                    transitionDelay: `${staggerMs + bIdx * 160}ms`,
                    boxShadow: `0 0 10px 2px ${bar.glowColor}`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Citation Footer */}
      <div className="mt-7 pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-white/55 font-mono text-[12px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0F43C] animate-pulse" />
          {card.source}
        </span>
        <span className="text-[#18d4ff] text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Verified →
        </span>
      </div>
    </article>
  );
}

export function EcosystemSectionDemo() {
  return (
    <section
      className="relative w-full px-20 py-28 bg-[#020b1c] overflow-hidden flex flex-col items-center gap-28 max-lg:px-6 max-sm:px-4 max-sm:py-16 max-sm:gap-20"
      id="ecosystem"
    >
      <style>{`
        @keyframes telemetryShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>

      {/* Subtle architectural background grid & ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24, 212, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 212, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-[#18d4ff]/[0.05] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-[#C0F43C]/[0.04] blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ───── S3 · The argument — page centre of gravity ───── */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#18d4ff]/35 bg-[#051428]/90 shadow-[0_0_24px_rgba(24,212,255,0.14)] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#18d4ff] animate-pulse" />
          <span className="text-[#18d4ff] text-xs font-mono font-bold uppercase tracking-[2.4px]">
            The Execution Gap
          </span>
        </div>

        <h2 className="max-w-[940px] text-center font-[850] text-white leading-[1.06] tracking-[-1.8px] text-[clamp(34px,4.5vw,54px)] mb-6">
          Enterprises have proved AI in the sandbox.{" "}
          <GradientText>The battle now is making it work across daily business operations.</GradientText>
        </h2>

        <p className="max-w-[820px] text-white/75 text-[19px] leading-[1.6] mb-14 max-sm:text-[16px]">
          India&apos;s enterprise adoption rate leads globally at nearly 40% (Deloitte India, 2026), yet 83% of organizations remain trapped in point-tool retrofitting without core process reinvention.
        </p>

        {/* Component C2 — Animated Source-Cited Telemetry Cards */}
        <div className="w-full grid grid-cols-3 gap-6 max-lg:grid-cols-1 mb-10">
          {sourceCitedCards.map((card, idx) => (
            <TelemetryCard key={card.index} card={card} cardIndex={idx} />
          ))}
        </div>

        {/* Executive Mandate Callout Banner */}
        <div className="relative w-full p-9 max-sm:p-6 rounded-[24px] border border-[#C0F43C]/35 bg-gradient-to-r from-[#06152d]/95 via-[#091e3a]/95 to-[#06152d]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_40px_rgba(192,244,60,0.08)] overflow-hidden text-left">
          {/* Left glowing accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C0F43C] via-[#18d4ff] to-[#C0F43C]" />
          {/* Right decorative radial glow */}
          <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#C0F43C]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center gap-7 max-md:flex-col max-md:items-start max-md:gap-4 pl-3 max-sm:pl-1">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-[#C0F43C]/35 bg-[#C0F43C]/12 flex items-center justify-center text-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.2)]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div>
              <span className="block text-[#C0F43C] font-mono text-[11px] font-bold uppercase tracking-[2.2px] mb-1.5">
                The Executive Mandate
              </span>
              <p className="m-0 text-white font-semibold text-[19px] leading-[1.55] max-sm:text-[16px]">
                World AI Show: The Enterprise Edition convenes the cross-functional leaders who own the systems, workflows, controls, and budgets required to turn experimental AI into a dependable operating model.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ───── S4 · What this is not ───── */}
      <div className="relative z-10 w-full max-w-[1140px] mx-auto flex flex-col items-center">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C0F43C]/35 bg-[#C0F43C]/10 shadow-[0_0_24px_rgba(192,244,60,0.12)] mb-5">
            <span className="w-2 h-2 rounded-full bg-[#C0F43C]" />
            <span className="text-[#C0F43C] text-xs font-mono font-bold uppercase tracking-[2.2px]">
              Programme Positioning
            </span>
          </div>
          <h2 className="text-center font-[850] text-white leading-[1.06] tracking-[-1.8px] text-[clamp(32px,4.4vw,52px)]">
            Operational ownership over <GradientText>technology demonstrations</GradientText>
          </h2>
        </div>

        <div className="w-full grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {whatThisIsNotCards.map((item) => (
            <article
              key={item.title}
              className="group relative p-8 max-sm:p-6 rounded-[24px] border border-white/[0.12] bg-gradient-to-br from-[#071932]/90 via-[#040e20]/95 to-[#030916]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[#18d4ff]/55 hover:-translate-y-1.5 hover:shadow-[0_28px_65px_rgba(0,0,0,0.55),0_0_34px_rgba(24,212,255,0.12)] transition-all duration-300 overflow-hidden"
            >
              {/* Watermark Index Number */}
              <span
                className="absolute right-6 top-4 font-[900] text-[76px] leading-none tracking-tighter text-white/[0.03] group-hover:text-[#18d4ff]/[0.08] transition-colors duration-300 select-none pointer-events-none"
                aria-hidden="true"
              >
                {item.index}
              </span>

              {/* Top Row: Icon + Pill Tag */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div className="w-13 h-13 rounded-2xl border border-[#18d4ff]/30 bg-gradient-to-br from-[#18d4ff]/20 to-[#C0F43C]/10 flex items-center justify-center text-[#18d4ff] group-hover:text-[#C0F43C] group-hover:border-[#C0F43C]/45 group-hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(24,212,255,0.12)]">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[#C0F43C] font-mono text-[11px] font-bold uppercase tracking-[1.8px]">
                    STANDARD // {item.index}
                  </span>
                  <span className="text-white/50 font-mono text-[11px] uppercase tracking-[1.2px]">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Card Heading */}
              <h3 className="relative z-10 m-0 mb-3 text-white font-[850] text-[23px] leading-tight group-hover:text-[#C0F43C] transition-colors duration-200">
                {item.title}
              </h3>

              {/* Divider with expanding hover highlight */}
              <div className="relative z-10 w-full h-[1px] bg-white/[0.08] mb-4 overflow-hidden">
                <div className="w-12 group-hover:w-full h-full bg-gradient-to-r from-[#C0F43C] to-[#18d4ff] transition-all duration-500" />
              </div>

              {/* Card Body */}
              <p className="relative z-10 m-0 text-white/75 text-[16px] leading-[1.65]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
