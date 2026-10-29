"use client";

import { GradientText } from "../components/Shared";

type TierSpec = {
  label: string;
  value: string;
  bold?: boolean;
};

type PartnerTierCard = {
  badge: string;
  name: string;
  description: string;
  accent: "green" | "cyan" | "purple" | "amber" | "bronze" | "slate";
  specs: TierSpec[];
};

export const partnerTiers: PartnerTierCard[] = [
  // Row 1
  {
    badge: "1 SLOT ONLY",
    name: "Presenting Partner",
    description:
      "Undisputed headline brand alignment with full cross-category exclusivity across all summit touchpoints.",
    accent: "green",
    specs: [
      { label: "Stage Authority", value: "30-min Fireside + 1 Panel Session", bold: true },
      { label: "Floor Presence & Access", value: "12 sqm Premium Island · 10 VIP Passes" },
      { label: "Targeted Meetings", value: "15 Pre-scheduled 1:1 Handshakes", bold: true },
      {
        label: "Media & Amplification",
        value: "Dedicated PR, Video Interview, 2 EDMs, 4 Stage Ads, 4 Social Posts, Media Wall",
      },
    ],
  },
  {
    badge: "CO-BRANDED ANCHOR",
    name: "Powered by Partner",
    description:
      "Premier co-branding across all stage backdrops, delegate communications, and press areas.",
    accent: "cyan",
    specs: [
      { label: "Stage Authority", value: "2 Main-Stage Panel Sessions", bold: true },
      { label: "Floor Presence & Access", value: "12 sqm Premium Island · 10 VIP Passes" },
      { label: "Targeted Meetings", value: "10 Pre-scheduled 1:1 Handshakes", bold: true },
      {
        label: "Media & Amplification",
        value: "Dedicated PR, Video Interview, 2 EDMs, 3 Stage Ads, 4 Social Posts, Media Wall",
      },
    ],
  },
  {
    badge: "4 TO 5 SLOTS",
    name: "Signature Partner",
    description:
      "Named domain ownership (e.g., 'Trusted AI Partner') with dedicated category exclusivity in your sector.",
    accent: "slate",
    specs: [
      { label: "Stage Authority", value: "1 Main-Stage Panel Session", bold: true },
      { label: "Floor Presence & Access", value: "6 sqm Premium Booth · 8 Passes" },
      { label: "Targeted Meetings", value: "8 Pre-scheduled 1:1 Handshakes", bold: true },
      {
        label: "Media & Amplification",
        value: "Video Interview, 2 EDMs, 2 Stage Ads, 2 Posts, Sector-Specific Mailer",
      },
    ],
  },

  // Row 2
  {
    badge: "VIP DINING",
    name: "CXO Dinner Partner",
    description:
      "Exclusive evening gathering hosting senior enterprise leaders, speakers, and VIPs in an intimate environment.",
    accent: "cyan",
    specs: [
      { label: "On-Site Dinner Branding", value: "Prominent Standees & Flags in Dinner Area", bold: true },
      { label: "Direct VIP Touchpoint", value: "Logo on 'CEOs Dinner' Invites Sent to Delegates" },
      { label: "Access & Passes", value: "6 Conference Passes + Reserved Table", bold: true },
      { label: "Marketing & Digital", value: "4 Social Posts, 2 EDMs + 1 Dinner Special Post" },
    ],
  },
  {
    badge: "VIP FACILITY",
    name: "Speaker Lounge Partner",
    description:
      "Direct positioning inside the private holding room where faculty, CXOs, and VIPs prepare before stage sessions.",
    accent: "purple",
    specs: [
      { label: "Exclusive Lounge Branding", value: "1 Standee Outside & 1 Inside Lounge", bold: true },
      { label: "Cluster Exclusivity", value: "Exclusive Partner Logo Presence in Area" },
      { label: "Access & Passes", value: "6 Full Conference Passes", bold: true },
      { label: "Campaign Amplification", value: "4 Social Posts, 2 EDMs, Specific Mailer Spotlight" },
    ],
  },
  {
    badge: "FIRST TOUCHPOINT",
    name: "Registration Partner",
    description:
      "Prime visual ownership at the entrance check-in desk, welcoming every arriving delegate on Day 1 and Day 2.",
    accent: "slate",
    specs: [
      { label: "Physical Touchpoint", value: "Prominent Branding on Registration Desk", bold: true },
      { label: "Check-In Zone Exclusivity", value: "Exclusive Partner Cluster in Area" },
      { label: "Access & Passes", value: "6 Full Conference Passes", bold: true },
      { label: "Campaign Amplification", value: "4 Social Posts, 2 EDMs, Specific Spotlight" },
    ],
  },

  // Row 3
  {
    badge: "TAKEAWAY BRANDING",
    name: "Swag Bag Partner",
    description:
      "Direct tangible engagement placing your brand in the hands of every delegate departing the registration area.",
    accent: "green",
    specs: [
      { label: "Physical Touchpoint", value: "Logo Co-Branded on Official Swag Bag", bold: true },
      { label: "Direct Delegate Insert", value: "Opportunity to Insert Giveaway/Collateral" },
      { label: "Access & Passes", value: "6 Full Conference Passes", bold: true },
      { label: "Campaign Amplification", value: "4 Social Posts, 2 EDMs, Specific Spotlight" },
    ],
  },
  {
    badge: "PHYSICAL ANCHOR",
    name: "Badge & Lanyard Partner",
    description:
      "100% delegate exposure through compulsory wearable badges and lanyards worn by all attendees.",
    accent: "cyan",
    specs: [
      { label: "Physical Touchpoint", value: "Logo on Badges & Official Lanyards", bold: true },
      { label: "Distribution Area Presence", value: "Branded Stand in Registration Area" },
      { label: "Access & Passes", value: "6 Full Conference Passes", bold: true },
      { label: "Campaign Amplification", value: "4 Social Posts, 2 EDMs, Specific Spotlight" },
    ],
  },
  {
    badge: "4 TO 5 SLOTS",
    name: "Gold Partner",
    description:
      "Strategic presence pairing plenary panel thought leadership with a dedicated exhibition booth and buyer handshakes.",
    accent: "amber",
    specs: [
      { label: "Stage Authority", value: "1 Main-Stage Panel Session", bold: true },
      { label: "Floor Presence & Access", value: "6 sqm Standard Booth · 6 Passes" },
      { label: "Targeted Meetings", value: "8 Pre-scheduled 1:1 Handshakes", bold: true },
      {
        label: "Digital & Marketing Exposure",
        value: "Dedicated Social Post, Group Mailers, Website, Sponsor Walls & Delegate Comms",
      },
    ],
  },

  // Row 4
  {
    badge: "OPEN INVENTORY",
    name: "Silver Partner",
    description:
      "Balanced format offering executive panel representation and qualified 1:1 business development meetings.",
    accent: "slate",
    specs: [
      { label: "Stage Authority", value: "1 Main-Stage Panel Session", bold: true },
      { label: "Floor Presence & Access", value: "4 sqm Standard Booth · 4 Passes" },
      { label: "Targeted Meetings", value: "4 Pre-scheduled 1:1 Handshakes", bold: true },
      {
        label: "Digital & Marketing Exposure",
        value: "Dedicated Social Post Announcement, Social Posts, Website & Sponsor Walls",
      },
    ],
  },
  {
    badge: "OPEN INVENTORY",
    name: "Bronze Partner",
    description:
      "Cost-effective exhibition footprint designed to engage attendees and showcase capabilities on the event floor.",
    accent: "bronze",
    specs: [
      { label: "Exhibition Footprint", value: "4 sqm Standard Fitted Booth", bold: true },
      { label: "Access & Passes", value: "3 Full Conference Passes" },
      { label: "Branding & Listing", value: "Logo & Company Listing on Website" },
      { label: "Marketing Amplification", value: "Common Social Post Announcement + Common Social Posts" },
    ],
  },
  {
    badge: "ENTRY LEVEL",
    name: "Exhibitor Package",
    description:
      "Streamlined turnkey booth space designed for product demonstrations and floor networking.",
    accent: "slate",
    specs: [
      { label: "Exhibition Space", value: "4 sqm Standard Fitted Booth", bold: true },
      { label: "Delegate Passes", value: "2 Full Conference Passes" },
      { label: "Digital Visibility", value: "Logo & Company Listing on Website" },
      { label: "Social Amplification", value: "Common Social Media Post" },
    ],
  },
];

const accentStyles: Record<
  PartnerTierCard["accent"],
  { topBar: string; badge: string }
> = {
  green: {
    topBar: "bg-[#10b981]",
    badge: "bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/35",
  },
  cyan: {
    topBar: "bg-[#00ceff]",
    badge: "bg-[#00ceff]/15 text-[#38bdf8] border border-[#00ceff]/35",
  },
  purple: {
    topBar: "bg-[#9a6cff]",
    badge: "bg-[#9a6cff]/15 text-[#c084fc] border border-[#9a6cff]/35",
  },
  amber: {
    topBar: "bg-[#f59e0b]",
    badge: "bg-[#f59e0b]/15 text-[#fbbf24] border border-[#f59e0b]/35",
  },
  bronze: {
    topBar: "bg-[#b45309]",
    badge: "bg-[#b45309]/20 text-[#fb923c] border border-[#b45309]/40",
  },
  slate: {
    topBar: "bg-[#475569]",
    badge: "bg-white/10 text-white/80 border border-white/20",
  },
};

export function TierGroupedPartnershipsGrid() {
  return (
    <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1 text-left">
      {partnerTiers.map((item, idx) => {
        const style = accentStyles[item.accent];
        return (
          <article
            key={item.name}
            data-aos="fade-up"
            data-aos-delay={String((idx % 3) * 100)}
            className="group relative flex flex-col justify-between p-7 pt-8 border border-white/[0.12] rounded-[20px] bg-[#040c1d]/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#00ceff]/45 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden"
          >
            {/* Top Accent Bar */}
            <div className={`absolute top-0 left-0 right-0 h-[4px] ${style.topBar}`} />

            <div>
              {/* Badge Row */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-md font-mono text-[11px] font-bold uppercase tracking-[1.2px] ${style.badge}`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Partner Tier Title */}
              <h4 className="m-0 mb-2.5 text-white font-[850] text-[22px] leading-snug tracking-tight">
                {item.name}
              </h4>

              {/* Description */}
              <p className="m-0 text-white/68 text-[14.5px] leading-relaxed">
                {item.description}
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/10 my-5" />

              {/* 4 Deliverable Spec Blocks */}
              <div className="flex flex-col gap-3.5">
                {item.specs.map((spec) => (
                  <div key={spec.label} className="flex flex-col gap-0.5">
                    <span className="text-[#18d4ff] text-[12px] font-bold tracking-[0.2px]">
                      {spec.label}
                    </span>
                    <span
                      className={`text-[14.5px] leading-snug ${
                        spec.bold
                          ? "text-white font-extrabold"
                          : "text-white/80 font-medium"
                      }`}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        );
      })}
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

        {/* ── PART 2: TIER-GROUPED PARTNERSHIP (Section 10) ─────────── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-white font-[850] text-[clamp(26px,3.4vw,38px)] m-0">
              Tier-Grouped <GradientText>Partnership</GradientText>
            </h3>
          </div>
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
