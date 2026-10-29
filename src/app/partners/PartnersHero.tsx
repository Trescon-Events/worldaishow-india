"use client";

import { GradientText } from "../components/Shared";

export function PartnersHero() {
  return (
    <section
      id="overview"
      className="relative min-h-[680px] flex items-center page-hero-top pb-[90px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat after:absolute after:inset-x-0 after:bottom-0 after:h-24 after:bg-gradient-to-t after:from-[#020814] after:to-transparent after:z-0 max-sm:min-h-[540px] max-sm:pb-[60px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2, 7, 19, 0.92) 0%, rgba(2, 7, 19, 0.62) 42%, rgba(2, 7, 19, 0.1) 100%), url("/mumbai/enterprise/images/sponsors/Partners-logo-banner.webp")',
      }}
    >
      <div className="relative z-10 w-[min(1114px,calc(100%-48px))] mx-auto">
        <h1 className="m-0 text-white font-[850] leading-[1.06] tracking-[-2px] text-[clamp(44px,5.5vw,74px)] max-w-[760px]">
          <GradientText>Partner</GradientText> at World AI Show
        </h1>
        <p className="max-w-[680px] mt-6 mb-0 text-white/84 text-[20px] leading-relaxed max-sm:text-base">
          Commercial partnerships are structured around 30-minute stage thought leadership, standardized 9 or 12 sqm exhibition spaces, and curated closed-door CXO boardrooms.
        </p>
      </div>
    </section>
  );
}
