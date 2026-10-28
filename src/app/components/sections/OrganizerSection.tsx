"use client";

import { Counter, GradientText } from "../Shared";

const ourReachStats = [
  { end: 16, suffix: "M+", label: "General Media" },
  { end: 19, suffix: "M+", label: "Targeted Media" },
  { end: 220, suffix: "K+", label: "Twitter" },
  { end: 170, suffix: "K+", label: "LinkedIn" },
  { end: 150, suffix: "K+", label: "Direct Email" },
];

const seriesHighlightsRow1 = [
  { end: 46, suffix: "", label: "Global Editions" },
  { end: 42, suffix: "K+", label: "C-Level Attendees" },
  { end: 2600, suffix: "+", label: "Speakers" },
  { end: 93, suffix: "%", label: "Decision Makers" },
  { end: 51, suffix: "+", label: "Countries Represented" },
];

const seriesHighlightsRow2 = [
  { end: 1650, suffix: "+", label: "Exhibitors" },
  { end: 830, suffix: "+", label: "Media Partners" },
];

export function OrganizerSection() {
  return (
    <section className="relative py-[104px] pt-[80px] bg-[#020713] overflow-hidden" id="organizer">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)] space-y-12">
        {/* OUR REACH & SERIES HIGHLIGHTS (Matching worldaishow.com reference) */}
        <div className="p-9 sm:p-11 rounded-[28px] border border-white/10 bg-gradient-to-b from-[#061428]/90 via-[#040d1d]/95 to-[#030915]/95 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          {/* OUR REACH */}
          <div className="text-center mb-12">
            <h3 className="text-center font-[850] text-white text-[clamp(26px,3.4vw,38px)] tracking-[-1px] uppercase mb-8">
              Our <GradientText>Reach</GradientText>
            </h3>

            <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
              {ourReachStats.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-[#18d4ff]/45 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <strong className="block text-white font-[850] text-[clamp(28px,3.2vw,38px)] leading-none mb-2">
                    <Counter end={item.end} suffix={item.suffix} />
                  </strong>
                  <span className="block text-white/70 font-mono text-[11.5px] uppercase tracking-[1.4px] font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-10" />

          {/* SERIES HIGHLIGHTS */}
          <div className="text-center">
            <h3 className="text-center font-[850] text-white text-[clamp(26px,3.4vw,38px)] tracking-[-1px] uppercase mb-8">
              Series <GradientText>Highlights</GradientText>
            </h3>

            <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
              {seriesHighlightsRow1.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-[#C0F43C]/45 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <strong className="block text-[#C0F43C] font-[850] text-[clamp(28px,3.2vw,38px)] leading-none mb-2">
                    <Counter end={item.end} suffix={item.suffix} />
                  </strong>
                  <span className="block text-white/70 font-mono text-[11.5px] uppercase tracking-[1.4px] font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-[440px] mx-auto mt-4">
              {seriesHighlightsRow2.map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-[#C0F43C]/45 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <strong className="block text-[#C0F43C] font-[850] text-[clamp(28px,3.2vw,38px)] leading-none mb-2">
                    <Counter end={item.end} suffix={item.suffix} />
                  </strong>
                  <span className="block text-white/70 font-mono text-[11.5px] uppercase tracking-[1.4px] font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Organizer Layout Panel (S10 · Credibility & series heritage) */}
        <div
          className="grid grid-cols-[0.68fr_1fr] gap-[56px] items-center min-h-[260px] p-[48px_56px] border border-white/10 border-t-[#00CEFF]/60 rounded-[28px] backdrop-blur-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_32px_rgba(192,244,60,0.04)] max-[980px]:grid-cols-1 max-sm:p-[34px_22px] max-sm:gap-[32px]"
          style={{
            background:
              "linear-gradient(104.71deg, rgba(0, 206, 255, 0.12) 0%, rgba(192, 244, 60, 0.054) 100%), rgba(4, 14, 34, 0.8)",
          }}
        >
          {/* Logo column */}
          <div className="flex flex-col">
            <span className="text-white/74 font-mono text-[12px] uppercase tracking-[3px] select-none">
              Organised by Trescon
            </span>
            <img
              className="block mt-[12px] h-auto object-contain select-none"
              style={{ width: "55%" }}
              src="/enterprise/logos/Trescon-org.svg"
              alt="Trescon"
              width={270}
              height={80}
            />
            <h2 className="mt-6 text-white font-[850] text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.8px]">
              A premier India launch. 46 global editions of proven authority.
            </h2>
          </div>

          {/* Copy content column */}
          <div className="flex flex-col">
            <p className="m-0 text-[#a4adbd] text-[16px] leading-[1.65]">
              World AI Show: The Enterprise Edition is organised by Trescon, the team behind World AI Show — the world&apos;s longest-running AI summit series convening 42,000+ C-level executives and 2,600+ speakers across 51+ countries.
            </p>

            {/* Link Anchor with up-right arrow */}
            <a
              href="https://www.tresconglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-7 text-[#C0F43C] font-extrabold text-[15px] hover:underline"
            >
              Learn more about Trescon
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 object-contain"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
