"use client";

export function CTASection() {
  return (
    <section className="relative py-[92px] bg-[#020713] overflow-hidden" id="cta">
      {/* Visual background glowing aura to create a premium depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(192,244,60,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[radial-gradient(circle,rgba(24,212,255,0.03),transparent_70%)] pointer-events-none" />

      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)] space-y-8">
        
        {/* S11 · Twin closing CTA bands */}
        <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
          {/* Band 1: Delegate Pass */}
          <div
            className="relative flex flex-col justify-between p-10 max-sm:p-7 rounded-[28px] backdrop-blur-[24px] overflow-hidden"
            style={{
              background: "linear-gradient(125.2deg, rgba(192, 244, 60, 0.08) 0%, rgba(0, 206, 255, 0.02) 100%), rgba(4, 14, 33, 0.88)",
              boxShadow: "0 0 32px 0 rgba(192, 244, 60, 0.14), 0 0 0 1px rgba(192, 244, 60, 0.35), 0 24px 64px 0 rgba(0, 0, 0, 0.5)"
            }}
          >
            <div>
              <span className="inline-block font-mono text-[11px] uppercase tracking-[1.6px] text-[#C0F43C] mb-3">
                Mumbai · 20–21 April 2027 · 2 Full Days · 200–300 Enterprise Leaders
              </span>
              <h2 className="m-0 font-[850] text-white leading-[1.12] tracking-[-1px] text-[clamp(26px,3vw,36px)]">
                Be in the room where the operating model gets decided
              </h2>
            </div>
            <div className="mt-8">
              <a
                href="/enterprise/attend/delegate"
                className="inline-flex items-center gap-2 px-[28px] py-[14px] rounded-full text-[15px] font-extrabold text-[#06111f] [color:#06111f!important] bg-[#C0F43C] shadow-[0_8px_24px_rgba(192,244,60,0.25)] hover:shadow-[0_12px_32px_rgba(192,244,60,0.4)] hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              >
                Apply for a Delegate Pass
                <span className="font-mono text-[16px] font-bold">→</span>
              </a>
            </div>
          </div>

          {/* Band 2: Sponsorship Enquiry */}
          <div
            className="relative flex flex-col justify-between p-10 max-sm:p-7 rounded-[28px] backdrop-blur-[24px] overflow-hidden"
            style={{
              background: "linear-gradient(125.2deg, rgba(0, 206, 255, 0.09) 0%, rgba(192, 244, 60, 0.015) 100%), rgba(4, 14, 33, 0.88)",
              boxShadow: "0 0 32px 0 rgba(24, 212, 255, 0.14), 0 0 0 1px rgba(24, 212, 255, 0.35), 0 24px 64px 0 rgba(0, 0, 0, 0.5)"
            }}
          >
            <div>
              <span className="inline-block font-mono text-[11px] uppercase tracking-[1.6px] text-[#18D4FF] mb-3">
                5 Content Pillars · 30-Min Stage Sessions · Standardized Booths
              </span>
              <h2 className="m-0 font-[850] text-white leading-[1.12] tracking-[-1px] text-[clamp(26px,3vw,36px)]">
                Put your solutions in front of the cross-functional buying unit
              </h2>
            </div>
            <div className="mt-8">
              <a
                href="/enterprise/sponsorship-enquiry"
                className="inline-flex items-center gap-2 px-[28px] py-[14px] rounded-full text-[15px] font-extrabold text-[#06111f] [color:#06111f!important] bg-[#18D4FF] shadow-[0_8px_24px_rgba(24,212,255,0.25)] hover:shadow-[0_12px_32px_rgba(24,212,255,0.4)] hover:scale-[1.02] transition-all duration-200 cursor-pointer"
              >
                Enquire about sponsorship
                <span className="font-mono text-[16px] font-bold">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* S12 · Speak at the conference */}
        <div
          className="relative p-12 px-14 max-sm:p-8 rounded-[32px] backdrop-blur-[24px] overflow-hidden border border-white/12"
          style={{
            background: "linear-gradient(125.2deg, rgba(0, 206, 255, 0.05) 0%, rgba(192, 244, 60, 0.02) 100%), rgba(4, 14, 33, 0.85)",
          }}
        >
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-[2px] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
              Faculty
            </div>

            <h2 className="m-0 font-[850] text-white leading-[1.08] tracking-[-1.5px] text-[clamp(28px,3.8vw,44px)] max-w-[780px]">
              If you have scaled AI in production, <span className="text-[#18d4ff]">we want you</span> <span className="text-[#C0F43C]">on the stage</span>
            </h2>

            <p className="m-0 mt-5 text-white/75 text-[17px] leading-[1.6] max-w-[720px] max-sm:text-[15px]">
              We are looking for enterprise leaders with real deployment evidence: the original baseline, trade-offs made, exception rates, and verified business outcomes.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <a
                href="/enterprise/agenda/call-for-speakers"
                className="inline-flex items-center gap-2 px-[30px] py-[14px] rounded-full text-[15px] font-extrabold text-white border border-white/25 bg-white/5 hover:border-[#C0F43C] hover:text-[#C0F43C] transition-all duration-200 cursor-pointer"
              >
                Apply to speak
                <span className="font-mono text-[16px] font-bold">→</span>
              </a>
            </div>

            {/* Horizontal Divider Line */}
            <div className="w-full h-[1px] bg-white/10 my-10" />

            {/* Bottom 3-Column Metadata Grid */}
            <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-6">
              {/* Date */}
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                  Date
                </span>
                <strong className="text-[18px] font-extrabold text-white tracking-wide font-mono">
                  20–21 April 2027 · 2 Full Days
                </strong>
              </div>

              {/* Venue */}
              <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                  Location
                </span>
                <strong className="text-[18px] font-extrabold text-white tracking-wide text-center">
                  Mumbai, India
                </strong>
              </div>

              {/* Format */}
              <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                  Series Edition
                </span>
                <strong className="text-[18px] font-extrabold text-white tracking-wide">
                  Edition 1 · India Series Launch
                </strong>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

