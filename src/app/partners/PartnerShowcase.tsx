"use client";

import { GradientText } from "../components/Shared";

export type SponsorBenefitItem = {
  title: string;
  text: string;
  icon: string;
};

export const sponsorBenefitsList: SponsorBenefitItem[] = [
  {
    title: "Brand Visibility at Scale",
    text: "Amplify your presence across the venue, website, event app, digital screens, campaigns and attendee communications.",
    icon: "/mumbai/enterprise/images/Attend/sponsor/brand-visibility-at-scale.webp",
  },
  {
    title: "Qualified Lead Generation",
    text: "Connect directly with pre-qualified enterprise buyers, stakeholders, investors and AI decision-makers.",
    icon: "/mumbai/enterprise/images/Attend/sponsor/qualified-lead-generation.webp",
  },
  {
    title: "Product Showcase Floor",
    text: "Demonstrate platforms and innovations live to enterprise leaders seeking transformative technologies.",
    icon: "/mumbai/enterprise/images/Attend/sponsor/product-showcase-floor.webp",
  },
  {
    title: "Speaking Opportunities",
    text: "Position your organisation as a thought leader through keynotes, panels and strategic conversations.",
    icon: "/mumbai/enterprise/images/Attend/sponsor/speaking-opportunities.webp",
  },
  {
    title: "1:1 Hosted Meetings",
    text: "Engage in curated business meetings aligned to your ideal customer profile and business objectives.",
    icon: "/mumbai/enterprise/images/Attend/sponsor/hosted-meetings.webp",
  },
  {
    title: "Exclusive Sponsorship Branding",
    text: "Align your brand with one of India's premier AI platforms through customised visibility.",
    icon: "/mumbai/enterprise/images/Attend/sponsor/exclusive-sponsorship-branding.webp",
  },
  {
    title: "Networking Lunch Branding",
    text: "Position your brand at the centre of high-value networking and engagement opportunities.",
    icon: "/mumbai/enterprise/images/Attend/sponsor/networking-lunch-branding.webp",
  },
  {
    title: "Post-Event Lead Report",
    text: "Receive detailed post-event insights including engagement, interactions and performance metrics.",
    icon: "/mumbai/enterprise/images/Attend/sponsor/post-event-lead-report.webp",
  },
];

export function TierGroupedPartnershipsGrid() {
  return (
    <div className="grid grid-cols-4 gap-4 overflow-x-auto pb-1.5 max-[980px]:grid-cols-2 max-sm:grid-cols-1 text-left">
      {sponsorBenefitsList.map((item, index) => (
        <article
          key={item.title}
          data-aos="fade-up"
          data-aos-delay={String((index % 4) * 100)}
          className="group relative min-h-[235px] p-7 border border-white/[0.17] rounded-[13px] bg-gradient-to-br from-[#00ceff]/12 to-[#996cff]/14 bg-[#050c1c]/80 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#18d4ff]/50 hover:shadow-[0_12px_36px_rgba(0,206,255,0.12),inset_0_0_24px_rgba(24,212,255,0.04)]"
        >
          <span className="grid place-items-center w-11 h-11 mb-7 border border-white/8 rounded-[14px] text-cyan bg-[#030914]/72 text-[11px] font-extrabold select-none group-hover:text-[#06111f] group-hover:bg-[#C0F43C] group-hover:border-[#C0F43C] group-hover:shadow-[0_0_15px_rgba(192,244,60,0.35)] transition-all duration-300">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.icon}
              alt=""
              className="w-5 h-5 object-contain group-hover:brightness-0 transition-all duration-300"
              loading="lazy"
            />
          </span>
          <span className="absolute right-[25px] top-[30px] px-[9px] py-1 rounded-full text-cyan bg-[#12d7ff]/9 text-[11px] font-extrabold tracking-[1px] select-none group-hover:text-black group-hover:bg-[#C0F43C] transition-all duration-300">
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </span>
          <h3 className="m-0 mb-2.5 text-white font-[850] text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#C0F43C]">
            {item.title}
          </h3>
          <p className="m-0 text-white/62 text-[15px] leading-relaxed transition-colors duration-200 group-hover:text-white/80">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  );
}

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
              World AI Show: The Enterprise Edition | Mumbai 2027 convenes 300+ qualified enterprise CXOs across technology leadership, architecture &amp; data, operations &amp; transformation, and risk, security &amp; compliance.
            </p>
          </div>

          {/* Right Column: Image with Blue/Cyan Glowing Outline */}
          <div className="relative group max-[980px]:mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-1.5 rounded-[16px] bg-gradient-to-r from-[#00ceff] to-[#9a6cff] opacity-40 blur-[8px] group-hover:opacity-75 transition duration-500" />
            <div className="relative rounded-[12px] overflow-hidden border-2 border-[#00ceff] bg-[#040916]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mumbai/enterprise/images/sponsors/showcase.webp"
                alt="Enterprise AI Showcase at World AI Show"
                className="w-full h-auto object-cover aspect-[1.7/1] transform group-hover:scale-[1.01] transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ── PART 2: SPONSORSHIP BENEFITS (8-CARD GRID) ─────────── */}
        <div className="mb-20">
          <TierGroupedPartnershipsGrid />
        </div>

        {/* ── PART 3: CTA BANNER ── */}
        <div
          className="group/banner relative p-12 max-sm:p-8 border border-[#c0f43c]/20 rounded-[28px] text-center overflow-hidden transition-all duration-300 hover:border-[#c0f43c]/40"
          style={{
            background: "linear-gradient(135deg, rgba(192, 244, 60, 0.04) 0%, rgba(4, 10, 24, 0.96) 50%, rgba(0, 206, 255, 0.02) 100%)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c0f43c]/20 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h3 className="m-0 font-space-grotesk text-white font-[850] text-[clamp(28px,3.5vw,42px)] leading-tight tracking-tight">
              Put your solutions in front of <br />
              <GradientText>the cross-functional buying unit.</GradientText>
            </h3>

            <p className="m-0 text-white/70 text-[16px] leading-relaxed max-w-[640px] font-sans">
              Secure your enterprise presence for Mumbai 2027 (20–21 April 2027 · 2 Days) across Presenting, Powered by, Signature, Gold, Silver, Bronze, VIP Experiences, or Turnkey Exhibitor packages.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-sm:flex-col max-sm:items-center">
              <a
                href="/mumbai/enterprise/sponsorship-enquiry"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-extrabold text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Enquire about sponsorship <span className="font-mono">→</span>
              </a>
              <a
                href="/mumbai/enterprise/attend/sponsor"
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
