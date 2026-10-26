"use client";

import { type ReactNode, useEffect, useState } from "react";
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
  const normalized = ((index % 5) + 5) % 5;
  if (normalized === 0) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 4 8l8 4 8-4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }
  if (normalized === 1) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 17h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 7 17Z" />
      </svg>
    );
  }
  if (normalized === 2) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20V9h5v11" />
        <path d="M13 20V4h5v16" />
        <path d="M8 12h1M8 15h1M15 8h1M15 11h1M15 14h1" />
      </svg>
    );
  }
  if (normalized === 3) {
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

// Triple the items so infinite looping in both directions is seamless
const extendedItems = [...themeItems, ...themeItems, ...themeItems];

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
  const total = themeItems.length; // 5
  const [slideIndex, setSlideIndex] = useState(total); // Start at middle set (index 5)
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // Continuous auto-slide loop
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIsAnimating(true);
      setSlideIndex((prev) => prev + 1);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless infinite loop reset when reaching cloned boundaries
  const handleTransitionEnd = () => {
    if (slideIndex >= total * 2) {
      setIsAnimating(false);
      setSlideIndex(slideIndex - total);
    } else if (slideIndex < total) {
      setIsAnimating(false);
      setSlideIndex(slideIndex + total);
    }
  };

  const nextSlide = () => {
    setIsAnimating(true);
    setSlideIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setSlideIndex((prev) => prev - 1);
  };

  const activeDot = ((slideIndex % total) + total) % total;

  return (
    <section
      className="relative py-[104px] bg-gradient-to-b from-[#020a18]/96 to-[#051224]/70 max-sm:py-[72px]"
      id="agenda"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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
          <p className="max-w-[920px] mx-auto mt-6 text-center text-muted text-[20px] leading-[1.45] mb-[44px]">
            {description}
          </p>
        )}

        {/* 3-Cards-Per-Row Continuous Looping Slider */}
        <div className="relative overflow-hidden py-3">
          <div
            onTransitionEnd={handleTransitionEnd}
            className={`flex ${
              isAnimating ? "transition-transform duration-600 ease-out" : ""
            }`}
            style={{
              transform: `translate3d(-${(slideIndex * 100) / cardsPerView}%, 0, 0)`,
            }}
          >
            {extendedItems.map((theme, idx) => {
              const originalIndex = idx % total;
              return (
                <div
                  key={`${theme.label}-${idx}`}
                  className="shrink-0 px-2.5"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <article className="group relative flex flex-col justify-between h-full min-h-[275px] p-7 rounded-[18px] border border-white/15 bg-gradient-to-br from-[#00ceff]/10 via-[#040c1e]/95 to-[#996cff]/10 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C0F43C]/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4),0_0_28px_rgba(192,244,60,0.12)] text-left">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <span className="grid place-items-center w-[48px] h-[48px] border border-cyan/30 rounded-[14px] bg-cyan/10 text-cyan transition-all duration-300 group-hover:border-[#C0F43C]/50 group-hover:bg-[#C0F43C]/18 group-hover:text-[#C0F43C]">
                          <ThemeIcon index={originalIndex} />
                        </span>
                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyan font-mono text-[11px] font-bold uppercase tracking-[1.8px] transition-colors duration-300 group-hover:border-[#C0F43C]/40 group-hover:bg-[#C0F43C]/15 group-hover:text-[#C0F43C]">
                          Pillar / {String(originalIndex + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="m-0 mb-3 text-white font-extrabold text-[20px] leading-[1.26] transition-colors duration-200 group-hover:text-[#C0F43C]">
                        {theme.label}
                      </h3>
                      <p className="m-0 text-white/70 text-[15px] leading-[1.6]">
                        {theme.description}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider Controls & Indicators */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous pillar"
            className="grid place-items-center w-10 h-10 rounded-full border border-white/15 bg-[#051024]/80 text-white/85 cursor-pointer transition-all duration-200 hover:border-cyan/60 hover:bg-cyan/10 hover:text-cyan"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {themeItems.map((item, idx) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setIsAnimating(true);
                  setSlideIndex(total + idx);
                }}
                aria-label={`Go to pillar ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-0 ${
                  activeDot === idx
                    ? "w-7 bg-[#C0F43C] shadow-[0_0_10px_#C0F43C]"
                    : "w-2 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next pillar"
            className="grid place-items-center w-10 h-10 rounded-full border border-white/15 bg-[#051024]/80 text-white/85 cursor-pointer transition-all duration-200 hover:border-cyan/60 hover:bg-cyan/10 hover:text-cyan"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
