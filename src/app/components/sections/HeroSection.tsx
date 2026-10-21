import { Button, GradientText } from "../Shared";

export function HeroSection() {
  return (
    <section
      className="hero-bg relative min-h-[760px] -mt-[102px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[680px] max-sm:-mt-[71px] max-sm:min-h-[700px]"
      id="home"
    >
      {/* Hero Content */}
      <div className="container relative z-2 mx-auto px-6 pt-[215px] max-sm:pt-[165px] max-sm:px-4 flex flex-col items-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C0F43C]/45 bg-[#040D1F]/85 text-[#C0F43C] text-[13px] font-mono uppercase tracking-[2.4px] font-extrabold shadow-[0_0_24px_rgba(192,244,60,0.18)] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C0F43C] animate-pulse" />
          Now in India · The Enterprise Edition
        </div>

        {/* Event Lockup Sub-label */}
        <p className="text-white/85 font-mono text-[13px] uppercase tracking-[2px] font-semibold mb-3">
          World AI Show: The Enterprise Edition | Mumbai 2027
        </p>

        {/* Hero Title */}
        <h1 className="max-w-[760px] mx-auto text-white font-[850] leading-[1.1] tracking-[-1.2px] text-[clamp(28px,4vw,52px)] text-center mb-5">
          Where AI becomes the <GradientText>operating model.</GradientText>
        </h1>

        {/* Standfirst */}
        <p className="max-w-[780px] mx-auto text-white/80 text-[18px] leading-[1.6] text-center mb-6 max-sm:text-[15px]">
          The premier cross-functional executive conference addressing the architecture, systems integration, agentic governance, and verifiable ROI of enterprise AI.
        </p>

        <div className="w-full max-w-[780px] border-t border-white/20 opacity-60 mt-1" />

        {/* Event Meta Footer */}
        <div className="grid grid-cols-[max-content_max-content_max-content] justify-center items-center gap-6 w-full max-w-[760px] mx-auto mt-6 text-center max-[980px]:grid-cols-1 max-sm:gap-3 max-sm:mt-5">
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[32px] font-[850] text-white leading-none max-sm:text-[26px]">
              20–<GradientText>21</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              APRIL 2027
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[32px] font-[850] text-white leading-none max-sm:text-[26px]">
              Mumbai, <GradientText>India</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EDITION 1 · INDIA SERIES
            </span>
          </div>

          {/* Column 3: Duration */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[32px] font-[850] text-white leading-none max-sm:text-[26px]">
              2 <GradientText>Days</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EXECUTIVE CONFERENCE
            </span>
          </div>
        </div>

        {/* Hero CTA Actions */}
        <div className="flex justify-center flex-wrap gap-3.5 mt-9 mb-14 max-sm:mb-10 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[320px]">
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
