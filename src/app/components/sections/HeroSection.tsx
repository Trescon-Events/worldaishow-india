import { Button, GradientText } from "../Shared";
import { Interactive3DHeroBackground } from "./Interactive3DHeroBackground";

export function HeroSection() {
  return (
    <section className="hero-bg relative min-h-[760px] -mt-[102px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[680px] max-sm:-mt-[71px] max-sm:min-h-[720px]" id="home">
      {/* Interactive 3D Hero Background */}
      <Interactive3DHeroBackground />

      {/* Cyber Grid overlays */}
      <div className="hero-overlay absolute inset-0 z-1 opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="hero-grid-pattern absolute bottom-0 left-[-6%] right-[-6%] h-[245px] z-1 opacity-50 blur-[1px] pointer-events-none" aria-hidden="true" />

      {/* Hero Content */}
      <div className="container relative z-2 mx-auto px-6 pt-[215px] max-sm:pt-[165px] max-sm:px-4 flex flex-col items-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C0F43C]/35 bg-[#040D1F]/80 text-[#C0F43C] text-xs font-mono uppercase tracking-[2.2px] font-bold mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C0F43C] animate-pulse" />
          The Launch of the World AI Show Series in India
        </div>

        {/* Event Lockup Sub-label */}
        <p className="text-white/85 font-mono text-[13px] uppercase tracking-[2px] font-semibold mb-3">
          World AI Show: The Enterprise Edition | Mumbai 2027
        </p>

        {/* Hero Title */}
        <h1 className="max-w-[1030px] mx-auto text-white font-[850] leading-[1.04] tracking-[-2px] text-[clamp(42px,6.8vw,88px)] text-center mb-6">
          Where AI becomes the <GradientText>operating model.</GradientText>
        </h1>

        {/* Standfirst */}
        <p className="max-w-[820px] mx-auto text-white/80 text-[18px] leading-[1.6] text-center mb-6 max-sm:text-[15px]">
          The premier cross-functional executive conference addressing the architecture, systems integration, agentic governance, and verifiable ROI of enterprise AI. The inaugural edition of a nationwide series culminating in the 2027 Series Finale.
        </p>

        <div className="w-full max-w-[900px] border-t border-white/20 opacity-60 mt-2"></div>

        {/* Event Meta Footer */}
        <div className="grid grid-cols-[max-content_max-content_max-content] justify-center items-center gap-6 w-full max-w-[780px] mx-auto mt-7 text-center max-[980px]:grid-cols-1 max-sm:gap-3 max-sm:mt-5">
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              20–<GradientText>21</GradientText>
            </strong>
            <span className="block mt-2 text-[14px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              APRIL 2027
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              Mumbai, <GradientText>India</GradientText>
            </strong>
            <span className="block mt-2 text-[14px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EDITION 1 · INDIA SERIES
            </span>
          </div>

          {/* Column 3: Duration */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              2 Full <GradientText>Days</GradientText>
            </strong>
            <span className="block mt-2 text-[14px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EXECUTIVE CONFERENCE
            </span>
          </div>
        </div>

        {/* Hero CTA Actions */}
        <div className="flex justify-center flex-wrap gap-3.5 mt-10 mb-16 max-sm:mb-10 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[320px]">
          <Button href="/enterprise/sponsorship-enquiry/" showArrow={true}>
            Enquire Now (Sponsorship &amp; Passes)
          </Button>
          <Button href="/enterprise/agenda/the-2030-vision/" variant="outline" showArrow={true}>
            Explore The India Series
          </Button>
          <Button href="/enterprise/attend/sponsor/" variant="outline" showArrow={true}>
            Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
}
