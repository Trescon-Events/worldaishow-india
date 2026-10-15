"use client";

import { GradientText } from "../components/Shared";

const partnerTiers = [
  {
    tier: "Tier 1 · 1 Position Only",
    name: "Lead Partner — 12 sqm",
    deliverables: "30-Min Keynote + 1 Panel + 12 sqm Booth + CXO Boardroom",
  },
  {
    tier: "Tier 2 · Main Stage & Pod",
    name: "Platinum & Gold Partners — 6 sqm",
    deliverables: "30-Min Standalone Session + 6 sqm Standardized Exhibition Booth",
  },
  {
    tier: "Tier 3 · Panel & Exhibition",
    name: "Silver & Bronze Partners — 4 sqm",
    deliverables: "Silver: 1 Panel Seat + 4 sqm Booth · Bronze: 4 sqm Turnkey Floor Presence",
  },
  {
    tier: "Closed-Door Executive Format",
    name: "CXO Boardroom Partners",
    deliverables: "15 Pre-Qualified CXOs, 5-Min Opening Address inside room",
  },
  {
    tier: "Exhibition Arena",
    name: "Turnkey Exhibitors (4 sqm)",
    deliverables: "Standardized 4 sqm linear booth in the main networking and showcase arena",
  },
  {
    tier: "Ecosystem Alliances",
    name: "Supporting Media & Association Alliances",
    deliverables: "Industry councils, trade chambers, professional AI bodies, and accredited press",
  },
];

export function PartnerShowcase() {
  return (
    <section className="relative py-[100px] bg-[#020814] overflow-hidden" id="showcase-benefits">
      {/* Background Soft Ambient Spotlights */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* ── PART 1: SHOWCASING THE FUTURE SECTION ─────────────────── */}
        <div className="grid grid-cols-[1.1fr_0.9fr] max-[980px]:grid-cols-1 gap-12 items-center mb-20">
          {/* Left Column: Heading and Description */}
          <div className="flex flex-col gap-6 max-[980px]:text-center max-[980px]:items-center">
            <h2 className="m-0 font-space-grotesk text-white font-[850] text-[clamp(32px,4vw,46px)] leading-tight tracking-tight">
              Your buyers are redesigning workflows now, <br />
              <span className="text-[#C0F43C]">not after</span> <span className="text-[#00ceff]">the pilot.</span>
            </h2>
            <p className="m-0 text-white/70 text-[16px] leading-relaxed max-w-[580px] font-sans">
              World AI Show: The Enterprise Edition | Mumbai 2027 convenes 200–300 qualified enterprise CXOs across technology leadership, architecture &amp; data, operations &amp; transformation, and risk, security &amp; compliance.
            </p>
          </div>

          {/* Right Column: Image with Blue/Cyan Glowing Outline */}
          <div className="relative group max-[980px]:mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-1.5 rounded-[16px] bg-gradient-to-r from-[#00ceff] to-[#9a6cff] opacity-40 blur-[8px] group-hover:opacity-75 transition duration-500" />
            <div className="relative rounded-[12px] overflow-hidden border-2 border-[#00ceff] bg-[#040916]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/enterprise/images/sponsors/showcase.webp"
                alt="Enterprise AI Showcase at World AI Show"
                className="w-full h-auto object-cover aspect-[1.7/1] transform group-hover:scale-[1.01] transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ── PART 2: TIER-GROUPED ARCHITECTURE (Section 10) ─────────── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-cyan mb-2">
              Mumbai 2027 Commercial Architecture
            </span>
            <h3 className="text-white font-[850] text-[clamp(26px,3.4vw,38px)] m-0">
              Tier-Grouped Partnership <GradientText>&amp; Booth Structure</GradientText>
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1">
            {partnerTiers.map((item) => (
              <article
                key={item.name}
                className="group relative p-7 border border-white/[0.1] rounded-[22px] bg-[#040a17]/75 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00ceff]/50"
              >
                <span className="inline-block font-mono text-[11px] uppercase tracking-[1.6px] text-[#C0F43C] mb-3">
                  {item.tier}
                </span>
                <h4 className="m-0 mb-2.5 text-white font-[800] text-[19px] leading-snug">
                  {item.name}
                </h4>
                <p className="m-0 text-white/65 text-[14.5px] leading-relaxed">
                  {item.deliverables}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ── PART 3: CTA BANNER ── */}
        <div 
          className="group/banner relative p-12 max-sm:p-8 border border-[#c0f43c]/20 rounded-[28px] text-center overflow-hidden transition-all duration-300 hover:border-[#c0f43c]/40"
          style={{
            background: "linear-gradient(135deg, rgba(192, 244, 60, 0.04) 0%, rgba(4, 10, 24, 0.96) 50%, rgba(0, 206, 255, 0.02) 100%)"
          }}
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c0f43c]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#00ceff] bg-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ceff] animate-pulse" />
              5 Content Pillars · 30-Min Stage Sessions · Standardized Booths
            </div>

            <h3 className="m-0 font-space-grotesk text-white font-[850] text-[clamp(28px,3.5vw,42px)] leading-tight tracking-tight">
              Put your solutions in front of <br />
              <GradientText>the cross-functional buying unit.</GradientText>
            </h3>

            <p className="m-0 text-white/70 text-[16px] leading-relaxed max-w-[640px] font-sans">
              Secure your enterprise presence for Mumbai 2027 (20–21 April 2027 · 2 Full Days) across Lead (12 sqm), Platinum/Gold (6 sqm), Silver/Bronze (4 sqm), or standalone CXO Boardrooms.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-sm:flex-col max-sm:items-center">
              <a
                href="/enterprise/sponsorship-enquiry"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-extrabold text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Enquire about sponsorship <span className="font-mono">→</span>
              </a>
              <a
                href="/enterprise/exhibition"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 rounded-full text-[14px] font-extrabold text-white bg-white/5 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Explore 3D Floorplan
              </a>
              <a
                href="/enterprise/attend/sponsor"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 rounded-full text-[14px] font-extrabold text-white bg-white/5 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                View Commercial Standards
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

