"use client";

import React, { useEffect, useRef, useState } from "react";
import { GradientText } from "../../components/Shared";

interface BrandBookTestimonialItem {
  id: string;
  quote: string;
  name: string;
  category: string;
  highlight: string;
  domainTag: string;
}

const testimonials: BrandBookTestimonialItem[] = [
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

export function BrandBookV1TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomProgress, setZoomProgress] = useState(0);
  const videoTrackRef = useRef<HTMLDivElement>(null);
  const videoIframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const el = videoTrackRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoIframeRef.current?.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
            "*"
          );
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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

  /* Scroll-driven cinema zoom effect for the Video Section */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setZoomProgress(1);
      return;
    }

    let rafId = 0;

    const updateScrollZoom = () => {
      const el = videoTrackRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 900;

      const startY = vh * 0.96;
      const endY = vh * 0.26;
      const raw = (startY - rect.top) / Math.max(1, startY - endY);
      const clamped = Math.max(0, Math.min(1, raw));
      const eased = 1 - Math.pow(1 - clamped, 2.35);

      setZoomProgress((prev) => (Math.abs(prev - eased) > 0.004 ? eased : prev));
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(updateScrollZoom);
    };

    updateScrollZoom();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const videoScale = 0.78 + 0.22 * zoomProgress;
  const videoRotateX = (1 - zoomProgress) * 8;
  const videoTranslateY = (1 - zoomProgress) * 34;
  const videoOpacity = 0.65 + 0.35 * zoomProgress;

  return (
    <section
      className="brandbook-v1-testimonials relative py-[104px] max-sm:py-[72px] overflow-hidden"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{`
        @keyframes bbV1QuoteSlideIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bbV1TabProgress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        .bb-v1-quote-animate {
          animation: bbV1QuoteSlideIn 0.42s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .bb-v1-progress-fill {
          transform-origin: left center;
          animation: bbV1TabProgress 5.5s linear forwards;
        }
        .brandbook-v1-testimonials:hover .bb-v1-progress-fill {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative z-10 w-[min(1200px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* ───── Top Editorial Header + Navigation Controls ───── */}
        <div className="flex items-end justify-between gap-6 mb-12 max-[920px]:flex-col max-[920px]:items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0069B8]/22 border border-[#0069B8]/60 text-[#F7F9FC] text-[12px] font-semibold uppercase tracking-[1.6px] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F15928]" />
              Verified Partner Endorsements
            </span>
            <h2 className="m-0 text-[#FFFFFF]">
              What industry leaders <GradientText>are saying.</GradientText>
            </h2>
          </div>

          {/* Circular Arrow Controls */}
          <div
            className="flex items-center gap-2.5 shrink-0"
            aria-label="Testimonial controls"
          >
            <button
              type="button"
              onClick={previous}
              className="grid place-items-center w-11 h-11 rounded-full bg-[#0D1B2E] border border-[#0069B8]/45 text-[#F7F9FC] cursor-pointer transition-all duration-200 hover:bg-[#F15928] hover:border-[#F15928] hover:text-[#FFFFFF] hover:-translate-y-0.5 outline-none"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={next}
              className="grid place-items-center w-11 h-11 rounded-full bg-[#0D1B2E] border border-[#0069B8]/45 text-[#F7F9FC] cursor-pointer transition-all duration-200 hover:bg-[#F15928] hover:border-[#F15928] hover:text-[#FFFFFF] hover:-translate-y-0.5 outline-none"
              aria-label="Next testimonial"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ───── Featured Executive Quote Stage (12-Column Split on Elevated Midnight Card) ───── */}
        <div className="relative rounded-[24px] bg-[#0D1B2E] border border-[#0069B8]/55 shadow-[0_24px_60px_rgba(0,0,0,0.42)] p-8 sm:p-11 overflow-hidden">
          {/* Pulse Orange Left Focal Spine */}
          <div
            className="absolute left-0 top-8 bottom-8 w-[4px] rounded-r-full bg-[#F15928]"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-12 gap-8 items-center max-lg:grid-cols-1">
            {/* Left 8 Columns: Quote & Outcome Metadata */}
            <div className="col-span-8 max-lg:col-span-1">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="bb-v1-quote-icon grid place-items-center w-11 h-11 rounded-[12px] bg-[#0069B8] text-[#FFFFFF] shadow-[0_8px_18px_rgba(0,105,184,0.32)]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08121E] border border-[#009EAD]/45 text-[#F7F9FC] text-[12px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#009EAD]" />
                  {active.highlight}
                </span>
              </div>

              <div key={active.id} className="bb-v1-quote-animate min-h-[120px] flex items-center">
                <blockquote className="m-0 text-[#FFFFFF] text-[clamp(19px,2vw,23px)] font-medium leading-[1.38] tracking-normal">
                  &ldquo;{active.quote}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Right 4 Columns: Partner Attribution Dossier Card */}
            <div
              key={`dossier-${active.id}`}
              className="col-span-4 max-lg:col-span-1 bb-v1-quote-animate rounded-[18px] bg-[#08121E] border border-[#0069B8]/45 p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[#0069B8]/28">
                <span className="px-2.5 py-1 rounded-md bg-[#0069B8]/22 border border-[#0069B8]/55 text-[#F7F9FC] text-[11px] font-semibold uppercase tracking-[1.2px]">
                  Verified Partner
                </span>
                <div className="grid place-items-center w-10 h-10 rounded-[12px] bg-[#0069B8] text-[#FFFFFF]">
                  <PartnerMark name={active.name} />
                </div>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[1.4px] text-[#F7F9FC]/60 mb-1">
                  Organization
                </div>
                <div
                  className="text-[#FFFFFF] font-semibold text-[26px] leading-[1.25]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {active.name}
                </div>
                <div className="text-[#009EAD] font-semibold text-[14px] mt-1">
                  {active.category}
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#0069B8]/28 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-[#F7F9FC]/85 text-[12px] font-medium">
                  <svg
                    className="w-4 h-4 text-[#009EAD] shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  {active.domainTag}
                </span>
                <span className="w-7 h-1.5 rounded-full bg-[#F15928] shrink-0" />
              </div>
            </div>
          </div>

          {/* Live Auto-Cycle Signal Teal Progress Bar along Bottom Edge */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#08121E]">
            <div
              key={`progress-${active.id}`}
              className="bb-v1-progress-fill h-full w-full bg-[#009EAD]"
            />
          </div>
        </div>

        {/* ───── 4-Card Interactive Partner Selector Rail (No Card Numbers) ───── */}
        <div className="grid grid-cols-4 gap-6 mt-6 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          {testimonials.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative text-left p-5 rounded-[18px] border transition-all duration-300 cursor-pointer overflow-hidden outline-none ${
                  isSelected
                    ? "bg-[#0D1B2E] border-[#F15928] border-[1.5px] shadow-[0_16px_36px_rgba(0,0,0,0.38)] -translate-y-1"
                    : "bg-[#0D1B2E]/75 border-[#0069B8]/32 hover:bg-[#0D1B2E] hover:border-[#009EAD] hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span
                    className={`grid place-items-center w-9 h-9 rounded-[10px] transition-colors duration-300 ${
                      isSelected
                        ? "bg-[#0069B8] text-[#FFFFFF]"
                        : "bg-[#08121E] text-[#009EAD] border border-[#0069B8]/35 group-hover:bg-[#0069B8] group-hover:text-[#FFFFFF]"
                    }`}
                  >
                    <PartnerMark name={item.name} />
                  </span>

                  <span
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isSelected
                        ? "bg-[#F15928] scale-110"
                        : "bg-[#0069B8] group-hover:bg-[#009EAD]"
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className="text-[#FFFFFF] font-semibold text-[18px] leading-snug mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.name}
                </div>
                <div className="text-[#F7F9FC]/72 text-[12.5px] leading-snug line-clamp-1">
                  {item.highlight}
                </div>

                {isSelected && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F15928]" />
                )}
              </button>
            );
          })}
        </div>

        {/* ───── Scroll-Driven Cinema Zoom Video Showcase ───── */}
        <div
          ref={videoTrackRef}
          className="mt-20 max-sm:mt-14 flex flex-col items-center"
          style={{ perspective: "1300px" }}
        >
          {/* Section Sub-Header Pill above Zooming Video */}
          <div
            className="flex flex-col items-center text-center mb-7 transition-opacity duration-300"
            style={{ opacity: Math.min(1, 0.45 + zoomProgress * 0.75) }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1B2E] border border-[#0069B8]/55 text-[#F7F9FC] text-[12px] font-semibold uppercase tracking-[1.5px]">
              <span className="w-2 h-2 rounded-full bg-[#F15928] animate-pulse" />
              Client Voices · WAIS India Edition
            </span>
          </div>

          {/* Scroll-Zooming Theater Container */}
          <div
            className="relative w-[min(960px,100%)] will-change-transform"
            style={{
              transform: `translate3d(0, ${videoTranslateY.toFixed(1)}px, 0) scale(${videoScale.toFixed(4)}) rotateX(${videoRotateX.toFixed(2)}deg)`,
              transformOrigin: "center top",
              opacity: Number(videoOpacity.toFixed(3)),
              transition: "transform 90ms linear, opacity 120ms linear",
            }}
          >
            {/* Elevated Institutional Frame around 16:9 YouTube Player */}
            <div
              className="rounded-[24px] bg-[#0D1B2E] p-3 sm:p-4 border border-[#0069B8]/60"
              style={{
                boxShadow: `0 ${Math.round(18 + 26 * zoomProgress)}px ${Math.round(
                  44 + 46 * zoomProgress
                )}px rgba(0, 0, 0, ${(0.32 + 0.22 * zoomProgress).toFixed(2)})`,
              }}
            >
              {/* Cinema Top Bar */}
              <div className="flex items-center justify-between gap-3 px-2 pb-3 mb-1 border-b border-[#0069B8]/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F15928]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#009EAD]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0069B8]" />
                  <span className="ml-2 text-[#F7F9FC] text-[13px] font-semibold max-sm:text-[12px]">
                    What Clients Have to Say — World AI Show India Edition
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-[#0069B8]/28 border border-[#0069B8]/55 text-[#F7F9FC] text-[11px] font-bold uppercase tracking-[1px] shrink-0 max-sm:hidden">
                  HD Reel
                </span>
              </div>

              {/* 16:9 Embedded Video */}
              <div className="relative w-full aspect-video rounded-[16px] overflow-hidden bg-[#08121E] border border-[#0069B8]/35">
                <iframe
                  ref={videoIframeRef}
                  src="https://www.youtube.com/embed/ZQ8-RcE79HE?rel=0&modestbranding=1&enablejsapi=1"
                  title="World AI Show Testimonial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
