"use client";

import { type ReactNode, useState } from "react";
import { GradientText } from "../Shared";

const themeItems = [
  {
    label: "Enterprise AI strategy and business value",
    heading: "Enterprise AI Strategy & Business Value",
    description:
      "Use-case scale decisions, executive outcome ownership, board-level productivity metrics.",
    image: "/enterprise/images/theme/Theme-01.webp",
  },
  {
    label: "Pilot to production and workflow redesign",
    heading: "Pilot to Production & Process Redesign",
    description:
      "Continuous integration, latency, exception handling, and human-in-the-loop workflows.",
    image: "/enterprise/images/theme/Theme-02.webp",
  },
  {
    label: "Agentic AI and accountable autonomy",
    heading: "Agentic AI & Accountable Autonomy",
    description:
      "Agent identity, tool permissions, approval gates, auditability, and failure containment.",
    image: "/enterprise/images/theme/Theme-03.webp",
  },
  {
    label: "Data context and the AI-ready stack",
    heading: "Data Context & The AI-Ready Stack",
    description:
      "Real-time enterprise access, API fabrics, hybrid-cloud trade-offs, and data quality.",
    image: "/enterprise/images/theme/Theme-01.webp",
  },
  {
    label: "Governance, security and proportionate trust",
    heading: "Governance, Security & Proportional Trust",
    description:
      "Proportionate risk tiering, synthetic media safeguards, and compliance guidelines.",
    image: "/enterprise/images/theme/Theme-04.webp",
  },
];

const roiClinicStages = [
  {
    index: "01",
    tag: "DIAGNOSTIC BASELINE",
    stage: "Stage 1: Problem & Baseline",
    desc: "Introduce an enterprise use case and examine the verified pre-AI baseline.",
    chips: ["Pre-AI Baseline", "Operational Scope"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    index: "02",
    tag: "TELEMETRY & COST AUDIT",
    stage: "Stage 2: Evidence & Full Cost",
    desc: "Audit cycle times, error rates, hidden integration overheads, and exception escalation.",
    chips: ["Cycle Times", "Error Rates", "Hidden Overheads"],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
  {
    index: "03",
    tag: "EXECUTIVE DECISION",
    stage: "Stage 3: The Boardroom Verdict",
    desc: "The room and panel decide: Does the deployment Scale, Redesign, or Stop?",
    verdicts: [
      { label: "SCALE", style: "border-[#C0F43C]/45 bg-[#C0F43C]/15 text-[#C0F43C]" },
      { label: "REDESIGN", style: "border-[#18d4ff]/45 bg-[#18d4ff]/15 text-[#18d4ff]" },
      { label: "STOP", style: "border-[#ff5e5e]/45 bg-[#ff5e5e]/15 text-[#ff5e5e]" },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

function ThemeIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 4 8l8 4 8-4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 17h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 7 17Z" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20V9h5v11" />
        <path d="M13 20V4h5v16" />
        <path d="M8 12h1M8 15h1M15 8h1M15 11h1M15 14h1" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4v5" />
        <path d="M6 14h12" />
        <path d="M8 20h8" />
        <path d="M12 9 6 14l6 5 6-5-6-5Z" />
      </svg>
    );
  }
  return (
    <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4 7v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10V7l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function AgendaSection({
  title = (
    <>
      Five decisions. <GradientText>Two days.</GradientText>
    </>
  ),
  subtitle = "Curated Agenda",
  description = "Workforce restructuring, operating-model change, and verified ROI run across all five.",
  showRoiClinic = true,
}: {
  title?: ReactNode;
  subtitle?: ReactNode | null;
  description?: ReactNode;
  showRoiClinic?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTheme = themeItems[activeIndex];

  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#020a18]/96 to-[#051224]/70 max-sm:py-[72px]" id="agenda">
      <style>{`
        @keyframes roiPulseFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Eyebrow */}
        {subtitle && (
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-[2px]">
              {subtitle}
            </span>
          </div>
        )}

        {/* Headings */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          {title}
        </h2>
        {description && (
          <p className="max-w-[920px] mx-auto mt-6 text-center text-muted text-[20px] leading-[1.45] mb-[54px]">
            {description}
          </p>
        )}

        {/* Agenda Grid Layout (5 Content Pillars — Component C3) */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-9 max-[980px]:grid-cols-1">
          {/* Themes Tabs List */}
          <div className="grid gap-[16px]">
            {themeItems.map((theme, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={theme.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`grid grid-cols-[52px_1fr] gap-6 items-center w-full min-h-[104px] p-[22px_26px] text-white text-left cursor-pointer rounded-[16px] transition-all duration-200 outline-none max-sm:p-5 ${
                    isActive
                      ? "border border-[#b9f82d]/42 bg-gradient-to-br from-[#00ceff]/20 to-[#c0f43c]/9 shadow-[0_0_28px_rgba(185,248,45,0.14),inset_0_0_30px_rgba(50,21,100,0.16)] border-t-[#293442]"
                      : "border border-purple/74 bg-[#040b1b]/72 shadow-[inset_0_0_30px_rgba(50,21,100,0.16)] border-[#855dff]/30 hover:border-purple/80"
                  }`}
                >
                  {/* Icon Circle */}
                  <span
                    className={`grid place-items-center w-[52px] h-[52px] border rounded-[18px] transition-all duration-200 ${
                      isActive
                        ? "border-[#c0f43c]/20 bg-[#c0f43c]/18 text-green"
                        : "border-white/8 bg-white/3 text-[#7f8999]"
                    }`}
                  >
                    <ThemeIcon index={index} />
                  </span>

                  {/* Copy content */}
                  <span className="grid gap-2 min-w-0 w-full">
                    <span className="flex items-center gap-4 w-full">
                      <small className="text-white/62 font-mono text-[11px] uppercase tracking-[1.8px] whitespace-nowrap">
                        Pillar / {String(index + 1).padStart(2, "0")}
                      </small>
                      {isActive && (
                        <span className="block h-[1px] w-full bg-green opacity-42" />
                      )}
                    </span>
                    <strong
                      className={`text-[18px] font-bold leading-[1.2] relative ${
                        isActive ? "text-white" : "text-white/80"
                      }`}
                    >
                      {theme.label}
                    </strong>
                    {isActive && (
                      <span className="text-white/70 text-[14px] leading-relaxed">
                        {theme.description}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Focus Feature Card */}
          <aside
            key={activeIndex}
            style={{ backgroundImage: `url(${activeTheme.image})` }}
            className="focus-reveal flex flex-col justify-start p-8 min-h-[420px] rounded-[22px] overflow-hidden bg-cover bg-bottom shadow-[0_0_34px_rgba(192,244,60,0.14),inset_0_0_28px_rgba(0,206,255,0.06)] relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#040b1b]/90 before:via-[#040b1b]/35 before:to-transparent before:z-0 border border-[#b9f82d]/20"
          >
            <div className="relative z-1 flex flex-col">
              <span className="text-[#C0F43C] font-mono text-[11px] uppercase tracking-[1.8px] font-extrabold mb-2">
                Pillar / {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white font-[850] text-[32px] leading-[1.13] mb-3 max-w-[470px]">
                {activeTheme.heading}
              </h3>
              <p className="m-0 text-white/80 text-[16px] leading-relaxed max-w-[450px]">
                {activeTheme.description}
              </p>
            </div>
          </aside>
        </div>

        {/* ───── S6 · Special feature: The AI ROI Clinic (Redesigned) ───── */}
        {showRoiClinic && (
          <div className="relative mt-24 p-12 max-lg:p-8 max-sm:p-6 rounded-[32px] border border-[#18d4ff]/30 bg-gradient-to-b from-[#06162d]/95 via-[#040e20]/98 to-[#030917]/98 shadow-[0_30px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] overflow-hidden">
            {/* Top Glowing Accent Line */}
            <div className="absolute top-0 left-16 right-16 h-[2px] bg-gradient-to-r from-transparent via-[#C0F43C] to-transparent opacity-80" />

            {/* Subtle Background Architectural Grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.14]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(24, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 212, 255, 0.1) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(ellipse 80% 75% at 50% 35%, black 15%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 75% at 50% 35%, black 15%, transparent 100%)",
              }}
              aria-hidden="true"
            />
            {/* Ambient Spotlights */}
            <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-[#18d4ff]/10 blur-[110px] pointer-events-none" />
            <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#C0F43C]/10 blur-[110px] pointer-events-none" />

            {/* Header Block */}
            <div className="relative z-10 flex flex-col items-center text-center mb-14 max-sm:mb-10">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C0F43C]/40 bg-[#071a2e]/90 shadow-[0_0_24px_rgba(192,244,60,0.15)] mb-5">
                <span className="w-2 h-2 rounded-full bg-[#C0F43C] animate-pulse" />
                <span className="text-[#C0F43C] text-xs font-mono uppercase tracking-[2.2px] font-bold">
                  Interactive Stage Feature
                </span>
              </div>

              <h2 className="m-0 font-[850] text-white leading-[1.06] tracking-[-1.8px] text-[clamp(30px,4.2vw,48px)] max-w-[840px]">
                The AI ROI Clinic:{" "}
                <GradientText>What should the board actually measure?</GradientText>
              </h2>

              <p className="m-0 mt-4 text-white/75 text-[18px] leading-[1.6] max-w-[680px] max-sm:text-[16px]">
                A facilitated, on-stage working session interrogating a live enterprise deployment.
              </p>
            </div>

            {/* Connected 3-Stage Pipeline Grid */}
            <div className="relative z-10">
              {/* Desktop Horizontal Pipeline Connector Beam */}
              <div
                className="hidden lg:block absolute top-[54px] left-[16%] right-[16%] h-[2px] bg-white/10 overflow-hidden pointer-events-none z-0"
                aria-hidden="true"
              >
                <div
                  className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#C0F43C] to-[#18d4ff]"
                  style={{ animation: "roiPulseFlow 3.2s infinite linear" }}
                />
              </div>

              <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1 relative z-10">
                {roiClinicStages.map((item) => (
                  <article
                    key={item.stage}
                    className="group relative p-7 rounded-[24px] border border-white/[0.12] bg-gradient-to-b from-[#081b36]/90 via-[#040f22]/95 to-[#020814]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-[#C0F43C]/55 hover:-translate-y-1.5 hover:shadow-[0_26px_65px_rgba(0,0,0,0.6),0_0_32px_rgba(24,212,255,0.14)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Top card accent highlight */}
                    <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#18d4ff]/60 to-transparent group-hover:via-[#C0F43C] transition-all duration-300" />

                    {/* Large Watermark Step Number */}
                    <span
                      className="absolute right-5 top-3 font-[900] text-[68px] leading-none tracking-tighter text-white/[0.035] group-hover:text-[#C0F43C]/[0.08] transition-colors duration-300 select-none pointer-events-none"
                      aria-hidden="true"
                    >
                      {item.index}
                    </span>

                    <div>
                      {/* Top Row: Icon Badge + Step Pill */}
                      <div className="flex items-center gap-3.5 mb-6">
                        <div className="w-12 h-12 rounded-2xl border border-[#18d4ff]/35 bg-gradient-to-br from-[#18d4ff]/20 to-[#C0F43C]/10 flex items-center justify-center text-[#C0F43C] group-hover:scale-105 group-hover:border-[#C0F43C]/50 transition-all duration-300 shadow-[0_0_20px_rgba(24,212,255,0.15)]">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#18d4ff] font-mono text-[11px] font-bold uppercase tracking-[1.8px]">
                            STEP // {item.index}
                          </span>
                          <span className="text-white/50 font-mono text-[10px] uppercase tracking-[1.2px]">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      {/* Stage Heading */}
                      <h3 className="m-0 mb-3 text-white font-[850] text-[21px] leading-snug group-hover:text-[#C0F43C] transition-colors duration-200">
                        {item.stage}
                      </h3>

                      {/* Animated Divider Line */}
                      <div className="w-full h-[1px] bg-white/[0.08] mb-4 overflow-hidden">
                        <div className="w-10 group-hover:w-full h-full bg-gradient-to-r from-[#C0F43C] to-[#18d4ff] transition-all duration-500" />
                      </div>

                      {/* Stage Description */}
                      <p className="m-0 text-white/75 text-[15px] leading-[1.65]">
                        {item.desc}
                      </p>
                    </div>

                    {/* Interactive Stage Telemetry / Verdict Footer */}
                    <div className="mt-6 pt-4 border-t border-white/[0.08]">
                      {item.chips ? (
                        <div className="flex flex-wrap gap-2">
                          {item.chips.map((chip) => (
                            <span
                              key={chip}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.04] text-white/65 font-mono text-[11px]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#18d4ff]" />
                              {chip}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 flex-wrap">
                          {item.verdicts?.map((v) => (
                            <span
                              key={v.label}
                              className={`px-2.5 py-1 rounded-md border font-mono text-[11px] font-bold tracking-wider ${v.style}`}
                            >
                              {v.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
