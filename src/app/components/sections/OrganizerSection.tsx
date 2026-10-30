"use client";

export function OrganizerSection() {
  return (
    <section className="relative py-[104px] pt-[80px] bg-[#020713] overflow-hidden" id="organizer">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)] space-y-12">
        {/* Main Organizer Layout Panel (S10 · Credibility & series heritage) */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-[0.68fr_1fr] gap-[56px] items-center min-h-[260px] p-[48px_56px] border border-white/10 border-t-[#00CEFF]/60 rounded-[28px] backdrop-blur-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_32px_rgba(192,244,60,0.04)] max-[980px]:grid-cols-1 max-sm:p-[34px_22px] max-sm:gap-[32px]"
          style={{
            background:
              "linear-gradient(104.71deg, rgba(0, 206, 255, 0.12) 0%, rgba(192, 244, 60, 0.054) 100%), rgba(4, 14, 34, 0.8)",
          }}
        >
          {/* Logo column */}
          <div className="flex flex-col" data-aos="fade-right" data-aos-delay="100">
            <span className="text-white/74 font-mono text-[12px] uppercase tracking-[3px] select-none">
              Organised by Trescon
            </span>
            <img
              className="block mt-[12px] h-auto object-contain select-none"
              style={{ width: "55%" }}
              src="/mumbai/enterprise/logos/Trescon-org.svg"
              alt="Trescon"
              width={270}
              height={80}
            />
          </div>

          {/* Copy content column */}
          <div className="flex flex-col" data-aos="fade-left" data-aos-delay="200">
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
