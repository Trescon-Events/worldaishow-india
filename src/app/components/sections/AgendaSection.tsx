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
}: {
  title?: ReactNode;
  subtitle?: ReactNode | null;
  description?: ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTheme = themeItems[activeIndex];

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
      </div>
    </section>
  );
}
