import type { Metadata } from "next";
import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";
import { AttendStats } from "./AttendStats";
import { GradientText } from "../components/Shared";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Attend | World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "How to attend World AI Show: The Enterprise Edition | Mumbai 2027 (20–21 April 2027). Explore the Delegate Pass (complimentary, by invitation and qualification), Business Pass, and Commercial Sponsorship packages.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

type CardItem = {
  title: string;
  text: string;
  icon?: string;
};

const valueCards: CardItem[] = [
  {
    title: "Where AI Becomes the Operating Model",
    text: "A two-day executive conference for 300 CIOs, CTOs, Chief AI Officers, CDOs, CISOs, COOs, and enterprise transformation leaders turning AI pilots into governed, measurable enterprise performance.",
    icon: "/enterprise/images/Attend/enterprise-ai-in-action.svg",
  },
  {
    title: "The Complete Enterprise Buying Unit",
    text: "Modern enterprise buying groups average 39 decision-makers (Foundry, 2026). Connect across technology leadership, enterprise architecture & data, operations & transformation, and risk, security & compliance.",
    icon: "/enterprise/images/Attend/region-ai-decision-makers.svg",
  },
  {
    title: "5 Master Content Pillars & Business Value",
    text: "Auditing the pre-AI operational baseline, expanded productivity KPIs, integration overheads, and governance frameworks to drive verified enterprise business value.",
    icon: "/enterprise/images/Attend/insights-drive-transformation.svg",
  },
];

const gatewayCards: CardItem[] = [
  {
    title: "2-Day Plenary Access",
    text: "Full access across 2 Days (20–21 April 2027) of opening keynotes, cross-functional panels, deployment case studies, and fireside dialogues.",
    icon: "/enterprise/images/Attend/gateway/access-to-all-sessions.svg",
  },
  {
    title: "Production Case Studies & ROI Insights",
    text: "Examine real enterprise deployments on stage — including pre-AI baselines, workflow redesign trade-offs, and verified business outcomes.",
    icon: "/enterprise/images/Attend/gateway/high-value-networking.svg",
  },
  {
    title: "Executive Networking Lounges",
    text: "Dedicated VIP lounges and structured networking environments reserved for invited enterprise CXOs and transformation heads.",
    icon: "/enterprise/images/Attend/gateway/enterprise-ai-showcases.svg",
  },
  {
    title: "Target Audience Qualification",
    text: "Curated exclusively for CIOs, CAIOs, CTOs, CDOs, CISOs, COOs, and Transformation Heads holding an active mandate to deploy enterprise AI.",
    icon: "/enterprise/images/Attend/gateway/speaker-materials-and-insights.svg",
  },
  {
    title: "Curated Executive Roundtables",
    text: "Opportunity to join closed-door, 15-CXO peer roundtables examining pilot-to-production architecture, data sovereignty, and agentic governance.",
    icon: "/enterprise/images/Attend/gateway/curated-roundtable-discussions.svg",
  },
  {
    title: "Pre-Scheduled 1-on-1 Meetings",
    text: "Algorithmic AI matchmaking connecting enterprise buyers with vetted solution providers in focused 20-minute meetings.",
    icon: "/enterprise/images/Attend/gateway/networking-lunch-and-business-meetings.svg",
  },
  {
    title: "Exhibition Arena Access",
    text: "Explore standardized 9 sqm and 12 sqm enterprise technology showcases demonstrating production-ready platforms.",
    icon: "/enterprise/images/Attend/gateway/exclusive-vip-networking-experiences.svg",
  },
  {
    title: "Unbundled Data Privacy Control",
    text: "Mandatory separate unbundled consent checkboxes for name/title and contact details — delegate contact details are shared only where consented.",
    icon: "/enterprise/images/Attend/gateway/event-platform-access.svg",
  },
];

const sponsorBenefits: CardItem[] = [
  {
    title: "Lead Partner (1 Position)",
    text: "30-Min Keynote + 1 Panel + 12 sqm Booth + CXO Boardroom. Exclusive premier positioning for Mumbai 2027.",
    icon: "/enterprise/images/Attend/sponsor/brand-visibility-at-scale.webp",
  },
  {
    title: "Platinum Partner",
    text: "30-Min Standalone Session + 9 sqm Booth. High-impact main-stage thought leadership paired with a standardized 9 sqm exhibition space.",
    icon: "/enterprise/images/Attend/sponsor/speaking-opportunities.webp",
  },
  {
    title: "Gold Partner",
    text: "30-Min Standalone Session + 9 sqm Booth. Dedicated 30-minute stage session and 9 sqm standard exhibition footprint.",
    icon: "/enterprise/images/Attend/sponsor/product-showcase-floor.webp",
  },
  {
    title: "Silver Partner",
    text: "1 Panel Seat + 9 sqm Booth. Executive panel participation across the five content pillars plus a 9 sqm standard booth.",
    icon: "/enterprise/images/Attend/sponsor/qualified-lead-generation.webp",
  },
  {
    title: "Bronze Partner",
    text: "9 sqm Standard Turnkey Floor Presence. Standardized 9 sqm exhibition space in the main networking and showcase arena.",
    icon: "/enterprise/images/Attend/sponsor/exclusive-sponsorship-branding.webp",
  },
  {
    title: "CXO Boardroom Partner (Standalone)",
    text: "15 Pre-Qualified CXOs, 5-Min Opening Address inside room. Closed-door executive roundtable built for high-trust peer dialogue.",
    icon: "/enterprise/images/Attend/sponsor/hosted-meetings.webp",
  },
  {
    title: "Algorithmic 1-on-1 Matchmaking",
    text: "Pre-scheduled 20-minute 1-on-1 meetings with qualified members of the 39-person enterprise buying unit.",
    icon: "/enterprise/images/Attend/sponsor/networking-lunch-branding.webp",
  },
  {
    title: "Consent-Governed Lead Sharing",
    text: "Compliant post-event executive engagement insights; delegate contact details are shared strictly where consented.",
    icon: "/enterprise/images/Attend/sponsor/post-event-lead-report.webp",
  },
];

const mediaBenefits: CardItem[] = [
  {
    title: "Press Credentials & Plenary Access",
    text: "Full media accreditation across both days of main-stage keynotes, panels, deployment case studies, and fireside dialogues.",
    icon: "/enterprise/images/Attend/media/full-event-access.webp",
  },
  {
    title: "Executive Interview Room Access",
    text: "Dedicated press workspace and private interview rooms for 1-on-1 briefings with CIOs, CAIOs, CTOs, and global speakers.",
    icon: "/enterprise/images/Attend/media/dedicated-media-facilities.webp",
  },
  {
    title: "Editorial Distribution & Amplification",
    text: "Syndicate official research citations, India Series launch announcements, and enterprise AI insights to your readership.",
    icon: "/enterprise/images/Attend/media/speaker-interview-access.webp",
  },
  {
    title: "Official Press & Research Kit",
    text: "Receive embargoed releases, speaker biographies, and verified research briefs ahead of Mumbai Edition 1.",
    icon: "/enterprise/images/Attend/media/official-media-kit.webp",
  },
  {
    title: "Brand & Media Recognition",
    text: "Featured placement in the Supporting Media & Association Alliances showcase across the website and venue.",
    icon: "/enterprise/images/Attend/media/amplified-media-visibility.webp",
  },
  {
    title: "India Series Launch Coverage",
    text: "First-mover editorial access to Edition 1 of the World AI Show Series in India ahead of the regional chapters and Q4 Finale.",
    icon: "/enterprise/images/Attend/media/brand-and-media-recognition.webp",
  },
  {
    title: "Exclusive Story Opportunities",
    text: "Capture real deployment baselines, productivity KPIs, and operational transformation stories directly from enterprise leaders.",
    icon: "/enterprise/images/Attend/media/exclusive-story-opportunities.webp",
  },
  {
    title: "Executive Networking Access",
    text: "Connect directly with 300 qualified CXOs and 45 speakers and panellists in Mumbai.",
    icon: "/enterprise/images/Attend/media/networking-access.webp",
  },
];

const associationBenefits: CardItem[] = [
  {
    title: "Industry Councils & Trade Chambers",
    text: "Official alliance recognition for industry councils, trade chambers, and professional AI bodies across the India Series.",
    icon: "/enterprise/images/Attend/partner/co-branding-opportunities.webp",
  },
  {
    title: "Member Qualification Pathway",
    text: "Priority nomination pathway for senior enterprise CIO, CAIO, CTO, CDO, CISO, and COO members to apply for Delegate Passes.",
    icon: "/enterprise/images/Attend/partner/complimentary-delegate-passes.webp",
  },
  {
    title: "Co-Branded Ecosystem Outreach",
    text: "Joint executive communications, thought-leadership briefings, and visibility across the World AI Show Series in India.",
    icon: "/enterprise/images/Attend/partner/joint-marketing-campaigns.webp",
  },
  {
    title: "Digital & Social Amplification",
    text: "Collaborative promotion across Trescon's global executive network and official World AI Show channels.",
    icon: "/enterprise/images/Attend/partner/social-media-amplification.webp",
  },
  {
    title: "Steering & Faculty Nominations",
    text: "Nominate qualified enterprise practitioners with live production evidence for main-stage panels and roundtables.",
    icon: "/enterprise/images/Attend/partner/speaking-opportunities.webp",
  },
  {
    title: "VIP Networking Access",
    text: "Connect association leadership with 300 qualified enterprise CXOs and technology pioneers in Mumbai.",
    icon: "/enterprise/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Post-Conference Playbook",
    text: "Share post-event executive synthesis and operational frameworks from the 5 Content Pillars with your members.",
    icon: "/enterprise/images/Attend/partner/access-to-post-event-insights.webp",
  },
  {
    title: "Year-Round India Series Alliance",
    text: "Extend collaboration from Edition 1 in Mumbai across the Q2–Q3 Regional Chapters to the Q4 Series Finale.",
    icon: "/enterprise/images/Attend/partner/long-term-partnership-opportunities.webp",
  },
];

export function ArrowButton({
  children,
  href = "/enterprise/sponsorship-enquiry",
  variant = "solid",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-3.5 min-w-[178px] h-[49px] px-[25px] rounded-full text-[15px] font-extrabold transition-all duration-180 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(185,248,45,0.24)] cursor-pointer";
  const styles = {
    solid: "bg-[#C0F43C] !text-black [color:#06111f!important] shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)]",
    outline: "text-white border border-[#4eb9ff]/80 bg-[#030a18]/30 shadow-[inset_0_0_24px_rgba(46,172,255,0.08)] hover:border-cyan/100 hover:bg-[#030a18]/50",
  };

  return (
    <a className={`${baseClasses} ${styles[variant]}`} href={href}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[15px] h-[15px] object-contain"
        aria-hidden="true"
      >
        <path
          d="M3.33334 8H12.6667"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.66666 4L12.6667 8L8.66666 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export function NumberedCard({ item, index }: { item: CardItem; index: number }) {
  return (
    <article className="group relative min-h-[235px] p-7 border border-white/[0.17] rounded-[13px] bg-gradient-to-br from-[#00ceff]/12 to-[#996cff]/14 bg-[#050c1c]/80 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#18d4ff]/50 hover:shadow-[0_12px_36px_rgba(0,206,255,0.12),inset_0_0_24px_rgba(24,212,255,0.04)]">
      <span className="grid place-items-center w-11 h-11 mb-7 border border-white/8 rounded-[14px] text-cyan bg-[#030914]/72 text-[11px] font-extrabold select-none group-hover:text-[#06111f] group-hover:bg-[#C0F43C] group-hover:border-[#C0F43C] group-hover:shadow-[0_0_15px_rgba(192,244,60,0.35)] transition-all duration-300">
        {item.icon ? (
          <img src={item.icon} alt="" className="w-5 h-5 object-contain group-hover:brightness-0 transition-all duration-300" loading="lazy" />
        ) : index + 1 < 10 ? (
          `0${index + 1}`
        ) : (
          index + 1
        )}
      </span>
      <span className="absolute right-[25px] top-[30px] px-[9px] py-1 rounded-full text-cyan bg-[#12d7ff]/9 text-[11px] font-extrabold tracking-[1px] select-none group-hover:text-black group-hover:bg-[#C0F43C] transition-all duration-300">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span>
      <h3 className="m-0 mb-2.5 text-white font-[850] text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#C0F43C]">{item.title}</h3>
      <p className="m-0 text-white/62 text-[15px] leading-relaxed transition-colors duration-200 group-hover:text-white/80">{item.text}</p>
    </article>
  );
}

export function BenefitGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 overflow-x-auto pb-1.5 max-[980px]:grid-cols-[repeat(4,280px)] max-sm:grid-cols-1">
      {items.map((item, index) => (
        <NumberedCard item={item} index={index} key={item.title} />
      ))}
    </div>
  );
}

export function SplitSection({
  id,
  eyebrow,
  title,
  text,
  button,
  buttonHref,
  imageAlt,
  imageSrc,
  reverse = false,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  text: ReactNode;
  button: string;
  buttonHref?: string;
  imageAlt: string;
  imageSrc: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-[92px] bg-[#020b1c] max-sm:py-[66px]" id={id}>
      <div
        className={`grid grid-cols-[1fr_minmax(360px,47%)] items-center gap-[74px] w-[min(1120px,calc(100%-48px))] mx-auto max-[980px]:grid-cols-1 max-sm:gap-[34px]`}
      >
        <div className={`flex flex-col ${reverse ? "max-[980px]:order-none order-2" : "order-none"}`}>
          {eyebrow && (
            <p className="m-0 mb-[19px] text-white/78 text-[13px] font-[650] tracking-[4px] uppercase select-none font-mono">
              {eyebrow}
            </p>
          )}
          <h2 className="m-0 text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(42px,5vw,62px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            {title}
          </h2>
          <p className="mt-6 mb-9 text-white/66 text-[19px] leading-relaxed max-sm:text-base">
            {text}
          </p>
          <div className="flex">
            <ArrowButton href={buttonHref || `#${id}`}>{button}</ArrowButton>
          </div>
        </div>
        <div className="relative overflow-hidden border border-[#55cfff]/22 rounded-[24px] bg-[#071426]/72 shadow-[0_0_44px_rgba(0,206,255,0.12)]">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#020b2c]/18 pointer-events-none" />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover filter saturate-[0.96] brightness-[0.95]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= RESIZED FIGMA BOTTOM CTA SECTION ================= */
export function AttendCTASection() {
  return (
    <section className="py-[86px] pt-[86px] bg-gradient-to-b from-transparent to-[#020a2c]/18 max-sm:py-[62px]">
      <div className="w-[min(980px,calc(100%-48px))] mx-auto p-[66px_48px] border border-[#c0f43c]/35 rounded-[36px] text-center bg-[#050c1c]/82 shadow-[0_0_60px_rgba(192,244,60,0.12),inset_0_0_34px_rgba(0,206,255,0.03)] max-sm:p-[42px_22px] max-sm:w-[min(100%-28px,1120px)] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(192,244,60,0.04),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#2E3C4D]/45" />

        <div className="relative z-10">
          <span className="inline-flex items-center mb-[27px] px-[15px] py-2 border border-white/10 rounded-full text-white/72 text-[12px] tracking-[2px] uppercase select-none before:content-[''] before:w-[7px] before:h-[7px] before:mr-2.5 before:rounded-full before:bg-cyan font-mono">
            Mumbai · 20–21 April 2027 · 2 Days · 300 Enterprise Leaders
          </span>
          <h2 className="max-w-[760px] mx-auto mb-8 text-[#f7f9ff] font-[850] leading-[1.08] tracking-[-1.8px] text-[clamp(36px,5vw,56px)] max-sm:text-[32px] max-sm:tracking-[-1px]">
            Be in the room where <span className="bg-gradient-to-r from-[#C0F43C] to-[#18d4ff] bg-clip-text text-transparent">the operating model</span> gets decided.
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 mb-12 max-sm:flex-col max-sm:w-full">
            <a
              href="/enterprise/attend/delegate"
              className="inline-flex items-center justify-center gap-2 min-w-[178px] h-[49px] px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-[#06111f] [color:#06111f!important] bg-[#C0F43C] shadow-[0_8px_24px_rgba(192,244,60,0.25)] hover:shadow-[0_12px_32px_rgba(192,244,60,0.4)] hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Apply for a Delegate Pass
              <span className="font-mono text-[16px] font-bold">→</span>
            </a>
            <a
              href="/enterprise/sponsorship-enquiry"
              className="inline-flex items-center justify-center min-w-[178px] h-[49px] px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-white bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Enquire about sponsorship
            </a>
          </div>

          <div className="w-full h-[1px] bg-white/10 my-8" />

          <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Date
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide font-mono">
                20–21 April 2027 · 2 Days
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Location
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide text-center">
                Mumbai, India
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Organiser
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide">
                Organised by Trescon
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendOverviewSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.48) 42%, rgba(2, 7, 19, 0.05) 100%), url("/enterprise/images/Attend/Attend-Hero-bg.webp")',
        }}
        id="overview"
      >
        <div className="heroBackdrop absolute bottom-0 right-[-3%] w-[58%] h-[84%] opacity-0 pointer-events-none" />
        <div className="relative z-10 max-w-[820px]">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            How To Attend — Two Doors · Mumbai 2027
          </span>
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(48px,6vw,76px)] max-sm:text-[42px]">
            Where AI becomes <GradientText>the operating model.</GradientText>
          </h1>
          <p className="max-w-[730px] mt-[26px] mb-0 text-white/88 text-[20px] leading-normal max-sm:text-[17px]">
            This is a two-day executive conference featuring 300+ CIOs, CTOs, Chief AI Officers, CDOs, CISOs, COOs, and enterprise transformation leaders turning AI pilots into governed, measurable enterprise performance.
          </p>
          <div className="flex flex-wrap gap-3.5 mt-10 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/enterprise/attend/delegate" variant="solid">
              Apply for a Delegate Pass
            </ArrowButton>
            <ArrowButton href="/enterprise/sponsorship-enquiry" variant="outline">
              Enquire about sponsorship
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* Stats Section (Moved directly under the hero) */}
      <section className="py-[86px] pt-[74px] bg-gradient-to-b from-[#020c21] to-[#031127] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
          <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            The <GradientText>Scale</GradientText>
          </h2>
          <AttendStats />
        </div>
      </section>

      {/* Two-Door Pass Matrix Section (Section 08: /enterprise/attend/) */}
      <section className="py-[86px] bg-[#020c21] max-sm:py-[62px]" id="pass-matrix">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-[2px] mb-3">
              Pass Matrix · Two-Door Attendance Model
            </span>
            <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(36px,4.6vw,54px)]">
              Choose your <GradientText>access pathway</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1 */}
            <div className="flex flex-col justify-between p-9 rounded-[24px] border border-[#C0F43C]/45 bg-gradient-to-br from-[#C0F43C]/10 via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#C0F43C]/15 border border-[#C0F43C]/40 text-[#C0F43C] font-mono text-[11px] uppercase tracking-[1.8px] mb-4">
                  Door 01 · Qualified Enterprise Buyers
                </span>
                <h3 className="text-white font-extrabold text-[26px] leading-[1.2] mb-3">
                  Delegate Pass — Complimentary, By Invitation &amp; Qualification
                </h3>
                <p className="text-white/80 text-[16px] leading-[1.6] mb-5">
                  For enterprise technology, operations, and risk leaders. Senior enterprise technology, data, operations, and risk leaders attend by invitation, subject to qualification based on an active mandate to deploy enterprise AI.
                </p>
                <ul className="space-y-2.5 mb-8 text-white/75 text-[15px] list-none p-0">
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> Target Audience: CIOs, CAIOs, CTOs, CDOs, CISOs, COOs, Transformation Heads</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> Inclusions: 2-day plenary access, executive case studies, networking lounges</li>
                  <li className="flex items-start gap-2.5"><span className="text-[#C0F43C] font-bold">✓</span> Privacy: Mandatory separate unbundled consent checkboxes for name/title and contact details</li>
                </ul>
              </div>
              <div>
                <ArrowButton href="/enterprise/attend/delegate" variant="solid">
                  Apply for a Delegate Pass
                </ArrowButton>
              </div>
            </div>

            {/* Door 2 */}
            <div className="flex flex-col justify-between p-9 rounded-[24px] border border-cyan/40 bg-gradient-to-br from-cyan/10 via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-cyan/15 border border-cyan/40 text-cyan font-mono text-[11px] uppercase tracking-[1.8px] mb-4">
                  Door 02 · Commercial Access
                </span>
                <h3 className="text-white font-extrabold text-[26px] leading-[1.2] mb-3">
                  Business Pass — Commercial Access
                </h3>
                <p className="text-white/80 text-[16px] leading-[1.6] mb-5">
                  For technology solution providers, software vendors, and consultants. Capped availability to protect buyer composition.
                </p>
                <ul className="space-y-2.5 mb-8 text-white/75 text-[15px] list-none p-0">
                  <li className="flex items-start gap-2.5"><span className="text-cyan font-bold">✓</span> Paid access for technology solution providers, system integrators, and consultancies</li>
                  <li className="flex items-start gap-2.5"><span className="text-cyan font-bold">✓</span> Strictly controlled availability to preserve the 300 qualified enterprise buyer ratio</li>
                  <li className="flex items-start gap-2.5"><span className="text-cyan font-bold">✓</span> Full 2-day access to main plenary sessions, exhibition arena, and networking app</li>
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <ArrowButton href="/enterprise/sponsorship-enquiry" variant="outline">
                  Buy a Business Pass
                </ArrowButton>
                <ArrowButton href="/enterprise/attend/sponsor" variant="solid">
                  Explore Sponsorship
                </ArrowButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Value Section */}
      <section className="py-[86px] bg-gradient-to-b from-[#031127] to-[#020b1c] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Look Back at the Previous Edition of <GradientText>World AI Show.</GradientText>
          </h2>
          <div className="relative w-[min(700px,100%)] aspect-video mx-auto my-[58px] border-[3px] border-[#8559ff]/58 rounded-[13px] overflow-hidden shadow-[0_0_24px_rgba(151,108,255,0.35)]">
            <iframe
              src="https://www.youtube.com/embed/rIHUrmsdY2U?rel=0&modestbranding=1"
              title="World AI Show India Aftermovie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
          <h3 className="max-w-[820px] mx-auto mt-16 mb-10 text-white font-[850] leading-[1.08] tracking-[-1.5px] text-[clamp(32px,4vw,46px)] max-sm:text-[30px]">
            The Key Focus Areas of <GradientText>This Event</GradientText>
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-9 max-[980px]:grid-cols-[repeat(3,310px)] max-sm:grid-cols-1">
            {valueCards.map((card, index) => (
              <NumberedCard item={card} index={index} key={card.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function AttendDelegateSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/enterprise/images/Attend/Delegates-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Delegate Pass — Complimentary, By Invitation &amp; Qualification
          </span>
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Built for <GradientText>Enterprise CXOs.</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Join an exclusive cohort of 300 pre-qualified enterprise peers, from CIOs to CISOs and Transformation Heads. Access is complimentary but strictly validated to ensure every seat represents active deployment authority.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="#delegate-qualification">Apply for a Delegate Pass</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Submit Qualification Enquiry"
        buttonHref="/enterprise/general-enquiry"
        id="delegate-qualification"
        eyebrow="Qualification & Consent Governance"
        imageAlt="Invited Enterprise CXOs at World AI Show"
        imageSrc="/enterprise/images/Attend/AI-decision-maker.webp"
        title={<>2-Day Plenary Access &amp; <GradientText>Executive Networking</GradientText></>}
        text={
          <>
            <strong>Target Audience:</strong> CIOs, CAIOs, CTOs, CDOs, CISOs, COOs, Transformation Heads.
            <br />
            <br />
            <strong>Inclusions:</strong> 2-day plenary access, executive case studies, and VIP networking lounges.
            <br />
            <br />
            <strong>Privacy &amp; Consent Qualifier:</strong> Mandatory separate unbundled consent checkboxes for name/title and contact details. Delegate contact details are shared only where consented.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Delegate Pass <GradientText>Inclusions &amp; Standards</GradientText>
          </h2>
          <BenefitGrid items={gatewayCards} />
        </div>
      </section>
    </>
  );
}

export function AttendSponsorSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/enterprise/images/Attend/Sponsor-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Commercial Packages &amp; Booth Standards
          </span>
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Your buyers are redesigning workflows now, <GradientText>not after the pilot.</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Modern enterprise buying groups average 39 decision-makers (Foundry, 2026). Commercial partnerships are structured around 30-minute stage thought leadership, standardized 9 sqm and 12 sqm exhibition spaces, and curated closed-door CXO boardrooms.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/enterprise/sponsorship-enquiry">Enquire About Sponsorship</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Enquire About Sponsorship"
        buttonHref="/enterprise/sponsorship-enquiry"
        id="sponsor"
        eyebrow="Standardized Speaking & Booth Framework"
        imageAlt="Standardized Speaking and Booth Framework"
        imageSrc="/enterprise/images/Attend/brand-center-innovation.webp"
        reverse={false}
        title={<>Put Your Solutions in Front of the <GradientText>Cross-Functional Buying Unit</GradientText></>}
        text={
          <>
            • <strong>Lead Partner (1 Position):</strong> 30-Min Keynote + 1 Panel + 12 sqm Booth + CXO Boardroom
            <br />
            • <strong>Platinum Partner:</strong> 30-Min Standalone Session + 9 sqm Standard Booth
            <br />
            • <strong>Gold Partner:</strong> 30-Min Standalone Session + 9 sqm Standard Booth
            <br />
            • <strong>Silver Partner:</strong> 1 Panel Seat + 9 sqm Standard Booth
            <br />
            • <strong>Bronze Partner:</strong> 9 sqm Standard Turnkey Floor Presence
            <br />
            • <strong>CXO Boardroom Partner (Standalone):</strong> 15 Pre-Qualified CXOs, 5-Min Opening Address inside room
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Standardized Partnership <GradientText>Tiers &amp; Deliverables</GradientText>
          </h2>
          <BenefitGrid items={sponsorBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendMediaSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/enterprise/images/Attend/Media-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Press Accreditation · Mumbai 2027
          </span>
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Cover the Launch of the <GradientText>World AI Show Series in India</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Press credentials, executive interview room access, and editorial distribution for Mumbai 2027 (20–21 April 2027 · 2 Days).
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/enterprise/media-enquiry">Apply for Media Accreditation</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Apply for Media Accreditation"
        buttonHref="/enterprise/media-enquiry"
        id="media-partner"
        imageAlt="Media interview coverage"
        imageSrc="/enterprise/images/Attend/cover-southeast.webp"
        title={<>Press Credentials &amp; <GradientText>Executive Interview Access</GradientText></>}
        text={
          <>
            World AI Show: The Enterprise Edition | Mumbai 2027 convenes 300 qualified enterprise CXOs and 45 speakers and panellists across 2 Days.
            <br />
            <br />
            Accredited journalists, editors, and research analysts receive press credentials, executive interview room access, and editorial distribution opportunities across the World AI Show Series in India.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={mediaBenefits} />
        </div>
      </section>
    </>
  );
}

export function AttendAssociationSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[760px] -mt-[102px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[280px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[240px]"
        style={{ backgroundImage: 'url("/enterprise/images/Attend/Association-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/88 via-[#020713]/48 to-transparent z-0 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Trade Bodies &amp; Ecosystem Alliances
          </span>
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Partner with the <GradientText>World AI Show Series</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Industry councils, trade chambers, and professional AI bodies partnering across Edition 1 in Mumbai, Regional Chapters (Q2–Q3), and the Series Finale (Q4).
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/enterprise/association-enquiry">Partner with the Series</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Partner with the World AI Show Series"
        buttonHref="/enterprise/association-enquiry"
        id="association-partner"
        imageAlt="Strengthening the AI Ecosystem Together"
        imageSrc="/enterprise/images/Attend/strengthening-ai-ecosystem.webp"
        reverse={false}
        title={<>Industry Councils, Trade Chambers &amp; <GradientText>Professional AI Bodies</GradientText></>}
        text={
          <>
            World AI Show: The Enterprise Edition welcomes industry councils, trade chambers, and professional AI bodies to join as official supporting alliances for the launch of the World AI Show Series in India.
            <br />
            <br />
            Connect your enterprise leadership members with 300 qualified CXOs, nominate faculty speakers with live production evidence, and collaborate across the full 2027 India Series trajectory.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={associationBenefits} />
        </div>
      </section>
    </>
  );
}

export default function AttendPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Overview" />
      <AttendOverviewSection />
      <FooterSection />
    </main>
  );
}
