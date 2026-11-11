"use client";

import React, { useEffect, useState } from "react";
import { GradientText } from "../../components/Shared";

interface TestTestimonialItem {
  id: string;
  quote: string;
  name: string;
  category: string;
  highlight: string;
  domainTag: string;
}

const testimonials: TestTestimonialItem[] = [
  {
    id: "01",
    quote:
      "We'd like to acknowledge Trescon for all the great efforts and structured organization with thorough follow ups and accommodation.",
    name: "Microsoft",
    category: "Enterprise Cloud & AI Partner",
    highlight: "Structured Organization & Follow-Up",
    domainTag: "Cloud & Copilot Ecosystem",
  },
  {
    id: "02",
    quote:
      "It was a great experience to work with Trescon. The team is super-efficient, proactive, and goes above and beyond to make the most out of the situation.",
    name: "Cloudflare",
    category: "Connectivity & Security Partner",
    highlight: "Proactive Execution & Delivery",
    domainTag: "AI Security & Edge Network",
  },
  {
    id: "03",
    quote:
      "Ridiculously efficient is the phrase that comes to mind when I think about the team at Trescon. They have a sense of strong motivation and aims for excellence all the time. The team is creative, energetic, solution-oriented and highly motivated with great communication skills.",
    name: "SAP",
    category: "Enterprise Applications Partner",
    highlight: "Solution-Oriented Excellence",
    domainTag: "Core Enterprise Workflows",
  },
  {
    id: "04",
    quote:
      "The thing I like the most is that Trescon has the right mix of users who are exploring AI, and the vendors who have the solutions.",
    name: "DDN Storage",
    category: "AI Data Infrastructure Partner",
    highlight: "Curated Buyer & Solution Mix",
    domainTag: "High-Scale AI Infrastructure",
  },
];

function PartnerMark({ name }: { name: string }) {
  if (name === "Microsoft") {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="3" y="3" width="8.2" height="8.2" rx="1.2" />
        <rect x="12.8" y="3" width="8.2" height="8.2" rx="1.2" opacity="0.85" />
        <rect x="3" y="12.8" width="8.2" height="8.2" rx="1.2" opacity="0.85" />
        <rect x="12.8" y="12.8" width="8.2" height="8.2" rx="1.2" opacity="0.7" />
      </svg>
    );
  }

  if (name === "Cloudflare") {
    return (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17.5 19H7a4 4 0 0 1-.5-7.97A6 6 0 0 1 18.2 9.5a3.5 3.5 0 0 1-.7 9.5Z" />
      </svg>
    );
  }

  if (name === "SAP") {
    return (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="3 6 21 6 15 18 3 18 3 6" />
        <path d="M7.5 12h4.5" />
      </svg>
    );
  }

  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

export function TestTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  return (
    <section
      className="test-testimonials-redesign relative py-[110px] max-sm:py-[72px] overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes testQuoteSlideIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes testTabProgress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        .test-quote-animate {
          animation: testQuoteSlideIn 0.42s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .test-progress-fill {
          transform-origin: left center;
          animation: testTabProgress 5.5s linear forwards;
        }
        .test-testimonials-redesign:hover .test-progress-fill {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 w-[min(1140px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1140px)]">
        {/* ───── Top Editorial Header + Navigation Controls ───── */}
        <div className="flex items-end justify-between gap-6 mb-11 max-[920px]:flex-col max-[920px]:items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#0069B8]/20 text-[#0069B8] text-[12px] font-semibold uppercase tracking-[1.6px] mb-4 shadow-[0_4px_14px_rgba(0,65,120,0.06)]">
              <span className="w-2 h-2 rounded-full bg-[#009EAD]" />
              Verified Partner Endorsements
            </span>
            <h2 className="m-0 text-[#0B1F3A]">
              What industry leaders <GradientText>are saying.</GradientText>
            </h2>
          </div>

          {/* Sleek Counter + Circular Arrow Controls */}
          <div
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Testimonial controls"
          >
            <div className="px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#0069B8]/20 shadow-[0_4px_14px_rgba(0,65,120,0.06)] text-[13px] font-semibold select-none">
              <span className="text-[#0069B8] font-bold">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-[#94A3B8] mx-1.5">/</span>
              <span className="text-[#52657A]">
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            <button
              type="button"
              onClick={previous}
              className="grid place-items-center w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#0069B8]/22 text-[#0B1F3A] shadow-[0_4px_14px_rgba(0,65,120,0.06)] cursor-pointer transition-all duration-200 hover:bg-[#0069B8] hover:border-[#0069B8] hover:text-[#FFFFFF] hover:-translate-y-0.5 outline-none"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              className="grid place-items-center w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#0069B8]/22 text-[#0B1F3A] shadow-[0_4px_14px_rgba(0,65,120,0.06)] cursor-pointer transition-all duration-200 hover:bg-[#0069B8] hover:border-[#0069B8] hover:text-[#FFFFFF] hover:-translate-y-0.5 outline-none"
              aria-label="Next testimonial"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ───── Asymmetric 12-Col Bento: Editorial Quote Stage (7) + Video Reel (5) ───── */}
        <div className="grid grid-cols-12 gap-6 items-stretch max-lg:grid-cols-1">
          {/* LEFT 7 COLUMNS: Featured Executive Quote Card */}
          <div className="col-span-7 max-lg:col-span-1 flex flex-col">
            <div className="test-quote-stage relative flex-1 flex flex-col justify-between rounded-[24px] bg-[#FFFFFF] border border-[#0069B8]/20 shadow-[0_20px_50px_rgba(0,65,120,0.09)] p-9 sm:p-10 overflow-hidden">
              {/* Solid Sovereign Blue Left Architectural Spine */}
              <div
                className="absolute left-0 top-8 bottom-8 w-[4px] rounded-r-full bg-[#0069B8]"
                aria-hidden="true"
              />

              {/* Subtle sculptural quote watermark in top-right */}
              <svg
                className="pointer-events-none select-none absolute top-6 right-8 w-24 h-24 text-[#0069B8]/[0.05]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Top Metadata Bar: Quote Icon Badge + Outcome Tag */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-7">
                  <div className="flex items-center gap-3">
                    <span className="test-quote-icon grid place-items-center w-11 h-11 rounded-[13px] bg-[#0069B8] text-[#FFFFFF] shadow-[0_8px_18px_rgba(0,105,184,0.25)]">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </span>
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4FC] border border-[#0069B8]/20 text-[#0069B8] text-[12px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#009EAD]" />
                      {active.highlight}
                    </span>
                  </div>

                  <span className="text-[12px] font-semibold uppercase tracking-[1.5px] text-[#52657A]">
                    Endorser {active.id}
                  </span>
                </div>

                {/* Animated Quote Body */}
                <div key={active.id} className="test-quote-animate min-h-[145px] flex items-center">
                  <blockquote className="m-0 text-[#0B1F3A] text-[clamp(19px,2vw,23px)] font-medium leading-[1.5] tracking-normal">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Bottom Partner Attribution Strip inside Featured Card */}
              <div
                key={`meta-${active.id}`}
                className="test-quote-animate mt-8 pt-6 border-t border-[#0069B8]/14 flex flex-wrap items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5">
                  <div className="grid place-items-center w-12 h-12 rounded-[14px] bg-[#0069B8] text-[#FFFFFF] shadow-[0_6px_16px_rgba(0,105,184,0.22)] shrink-0">
                    <PartnerMark name={active.name} />
                  </div>
                  <div>
                    <div className="text-[#0B1F3A] font-bold text-[20px] leading-tight">
                      {active.name}
                    </div>
                    <div className="text-[#009EAD] font-semibold text-[13px] mt-0.5">
                      {active.category}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[12px] bg-[#F2F8FE] border border-[#0069B8]/15">
                  <svg
                    className="w-4 h-4 text-[#009EAD]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="text-[#334155] text-[12px] font-semibold">
                    {active.domainTag}
                  </span>
                </div>
              </div>

              {/* Live Auto-Cycle Progress Bar along Bottom Edge */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#E6F2FB]">
                <div
                  key={`progress-${active.id}`}
                  className="test-progress-fill h-full w-full bg-[#009EAD]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLUMNS: Integrated Executive Video Spotlight Card */}
          <div className="col-span-5 max-lg:col-span-1 flex flex-col">
            <div className="relative flex-1 flex flex-col justify-between rounded-[24px] bg-[#FFFFFF] border border-[#0069B8]/20 shadow-[0_20px_50px_rgba(0,65,120,0.09)] p-6 sm:p-7 overflow-hidden">
              {/* Video Card Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F15928] animate-pulse" />
                  <span className="text-[#0B1F3A] text-[12px] font-bold uppercase tracking-[1.4px]">
                    Executive Voices Reel
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#EAF4FC] text-[#0069B8] text-[11px] font-semibold uppercase tracking-[1px]">
                  World AI Show
                </span>
              </div>

              {/* 16:9 Embedded Video Frame */}
              <div className="relative w-full aspect-video rounded-[16px] border border-[#0069B8]/22 bg-[#0B1F3A] overflow-hidden shadow-[0_12px_28px_rgba(0,52,102,0.14)]">
                <iframe
                  src="https://www.youtube.com/embed/ZQ8-RcE79HE?rel=0&modestbranding=1"
                  title="World AI Show Testimonial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Series Proof Metrics Strip under Video */}
              <div className="mt-5 pt-4 border-t border-[#0069B8]/14 grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-[12px] bg-[#F2F8FE]">
                  <strong className="block text-[#0069B8] text-[18px] font-bold leading-none">
                    51+
                  </strong>
                  <span className="block mt-1 text-[#52657A] text-[11px] font-medium">
                    Countries
                  </span>
                </div>
                <div className="p-2.5 rounded-[12px] bg-[#F2F8FE]">
                  <strong className="block text-[#0069B8] text-[18px] font-bold leading-none">
                    93%
                  </strong>
                  <span className="block mt-1 text-[#52657A] text-[11px] font-medium">
                    Decision Makers
                  </span>
                </div>
                <div className="p-2.5 rounded-[12px] bg-[#F2F8FE]">
                  <strong className="block text-[#0069B8] text-[18px] font-bold leading-none">
                    42K+
                  </strong>
                  <span className="block mt-1 text-[#52657A] text-[11px] font-medium">
                    C-Suite Peers
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ───── Bottom 4-Card Interactive Partner Selector Rail ───── */}
        <div className="grid grid-cols-4 gap-4 mt-6 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          {testimonials.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative text-left p-5 rounded-[18px] border transition-all duration-300 cursor-pointer overflow-hidden outline-none ${
                  isSelected
                    ? "bg-[#FFFFFF] border-[#0069B8] border-[1.5px] shadow-[0_14px_32px_rgba(0,105,184,0.16)] -translate-y-1"
                    : "bg-[#FFFFFF]/82 border-[#0069B8]/18 hover:bg-[#FFFFFF] hover:border-[#0069B8]/45 hover:-translate-y-0.5 shadow-[0_6px_18px_rgba(0,65,120,0.05)]"
                }`}
              >
                {/* Top Row: Partner Icon + Active Status Pill */}
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span
                    className={`grid place-items-center w-9 h-9 rounded-[10px] transition-colors duration-300 ${
                      isSelected
                        ? "bg-[#0069B8] text-[#FFFFFF] shadow-[0_6px_14px_rgba(0,105,184,0.26)]"
                        : "bg-[#EAF4FC] text-[#0069B8] group-hover:bg-[#0069B8] group-hover:text-[#FFFFFF]"
                    }`}
                  >
                    <PartnerMark name={item.name} />
                  </span>

                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[1.4px] ${
                      isSelected ? "text-[#F15928]" : "text-[#64748B]"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isSelected
                          ? "bg-[#F15928] scale-110"
                          : "bg-[#CBD5E1] group-hover:bg-[#009EAD]"
                      }`}
                    />
                    {item.id}
                  </span>
                </div>

                {/* Partner Name & Highlight */}
                <div className="text-[#0B1F3A] font-bold text-[17px] leading-snug mb-1">
                  {item.name}
                </div>
                <div className="text-[#475569] text-[12.5px] leading-snug line-clamp-1">
                  {item.highlight}
                </div>

                {/* Bottom Active Accent Bar */}
                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F15928]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
