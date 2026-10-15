"use client";

import { Counter } from "../Shared";

export function OrganizerSection() {
  return (
    <section className="relative py-[104px] pt-[72px] bg-[#020713]" id="organizer">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Main Organizer Layout Panel (S10 · Credibility & series heritage) */}
        <div
          className="grid grid-cols-[0.68fr_1fr] gap-[56px] items-center min-h-[292px] p-[56px_64px] border border-white/10 border-t-[#00CEFF]/60 rounded-[28px] backdrop-blur-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_32px_rgba(192,244,60,0.04)] max-[980px]:grid-cols-1 max-sm:p-[34px_22px] max-sm:gap-[42px]"
          style={{
            background: "linear-gradient(104.71deg, rgba(0, 206, 255, 0.12) 0%, rgba(192, 244, 60, 0.054) 100%), rgba(4, 14, 34, 0.8)",
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
              A premier India launch. 48 global editions of proven authority.
            </h2>
          </div>

          {/* Copy content column */}
          <div className="flex flex-col">
            <p className="m-0 text-[#a4adbd] text-[16px] leading-[1.65]">
              World AI Show: The Enterprise Edition is organised by Trescon, the team behind World AI Show — the world&apos;s longest-running AI summit series.
            </p>

            {/* Strategic Stats Row (4 stats per S10) */}
            <div className="grid grid-cols-2 gap-6 mt-[28px] max-sm:grid-cols-1 max-sm:gap-4">
              <div className="flex flex-col p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <strong className="text-[#C0F43C] font-[850] text-[30px] leading-none mb-2">
                  <Counter end={48} suffix="" />
                </strong>
                <span className="text-white/75 font-mono text-[12px] uppercase tracking-[1.2px] select-none leading-snug">
                  World AI Show editions completed across four continents
                </span>
              </div>
              <div className="flex flex-col p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <strong className="text-[#C0F43C] font-[850] text-[30px] leading-none mb-2">
                  <Counter end={42000} suffix="+" />
                </strong>
                <span className="text-white/75 font-mono text-[12px] uppercase tracking-[1.2px] select-none leading-snug">
                  C-level executives and enterprise leaders convened
                </span>
              </div>
              <div className="flex flex-col p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <strong className="text-[#C0F43C] font-[850] text-[30px] leading-none mb-2">
                  <Counter end={2600} suffix="+" />
                </strong>
                <span className="text-white/75 font-mono text-[12px] uppercase tracking-[1.2px] select-none leading-snug">
                  Speakers hosted
                </span>
              </div>
              <div className="flex flex-col p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <strong className="text-[#C0F43C] font-[850] text-[30px] leading-none mb-2">
                  <Counter end={4} suffix="" />
                </strong>
                <span className="text-white/75 font-mono text-[12px] uppercase tracking-[1.2px] select-none leading-snug">
                  Continents
                </span>
              </div>
            </div>

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


