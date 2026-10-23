"use client";

import { type ReactNode } from "react";
import { GradientText } from "../Shared";

const themeItems = [
  {
    label: "Enterprise AI strategy and business value",
    heading: "Enterprise AI Strategy & Business Value",
    description:
      "Use-case scale decisions, executive outcome ownership, board-level productivity metrics.",
    image: "/enterprise/images/agenda/keynotes.webp",
  },
  {
    label: "Pilot to production and workflow redesign",
    heading: "Pilot to Production & Process Redesign",
    description:
      "Continuous integration, latency, exception handling, and human-in-the-loop workflows.",
    image: "/enterprise/images/agenda/panel-discussion.webp",
  },
  {
    label: "Agentic AI and accountable autonomy",
    heading: "Agentic AI & Accountable Autonomy",
    description:
      "Agent identity, tool permissions, approval gates, auditability, and failure containment.",
    image: "/enterprise/images/agenda/driving-malaysia-stage.webp",
  },
  {
    label: "Data & architecture (The AI-ready stack)",
    heading: "Data & Architecture (The AI-Ready Stack)",
    description:
      "Data quality and context retrieval, real-time enterprise access, API fabrics, hybrid/multi-cloud workload placement, interoperability, and data sovereignty.",
    image: "/enterprise/images/agenda/driving-malaysia-speakers.webp",
  },
  {
    label: "Governance, security and proportionate trust",
    heading: "Governance, Security & Proportional Trust",
    description:
      "Proportionate risk tiering, synthetic media safeguards, and compliance guidelines.",
    image: "/enterprise/images/agenda/Fireside.webp",
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
      Five Talking Points. <GradientText>Two Days.</GradientText>
    </>
  ),
  subtitle = "Curated Agenda",
  description = "Workforce restructuring, operating-model change, and verified ROI run across all five.",
}: {
  title?: ReactNode;
  subtitle?: ReactNode | null;
  description?: ReactNode;
}) {
  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#020a18]/96 to-[#051224]/70 max-sm:py-[72px]" id="agenda">
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

        {/* 5 Content Pillar Boxes (No images) */}
        <div className="grid grid-cols-5 gap-4 max-[1080px]:grid-cols-2 max-sm:grid-cols-1">
          {themeItems.map((theme, index) => (
            <article
              key={theme.label}
              className="group relative flex flex-col justify-between p-6 rounded-[18px] border border-white/15 bg-gradient-to-br from-[#00ceff]/10 via-[#040c1e]/95 to-[#996cff]/10 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C0F43C]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4),0_0_28px_rgba(192,244,60,0.12)] text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="grid place-items-center w-[44px] h-[44px] border border-cyan/30 rounded-[13px] bg-cyan/10 text-cyan transition-all duration-300 group-hover:border-[#C0F43C]/50 group-hover:bg-[#C0F43C]/18 group-hover:text-[#C0F43C]">
                    <ThemeIcon index={index} />
                  </span>
                  <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-cyan font-mono text-[10.5px] font-bold uppercase tracking-[1.5px] transition-colors duration-300 group-hover:border-[#C0F43C]/40 group-hover:bg-[#C0F43C]/15 group-hover:text-[#C0F43C]">
                    Pillar / {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="m-0 mb-2.5 text-white font-extrabold text-[17.5px] leading-[1.28] transition-colors duration-200 group-hover:text-[#C0F43C]">
                  {theme.label}
                </h3>
                <p className="m-0 text-white/70 text-[14px] leading-[1.55]">
                  {theme.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
