import type { Metadata } from "next";
import Link from "next/link";
import {
  AiMumbaiScopedStyles,
  AiMumbaiHeader,
  AiMumbaiFooter,
  HalftoneVortexRings,
  Concept2SpeakerCard,
  STAGING_SPEAKERS,
} from "../_design-system/AiMumbaiBrandSystem";

export const metadata: Metadata = {
  title: "AI Mumbai | AI 2047 — Staging Homepage Preview (Sandbox)",
  description:
    "Isolated staging homepage preview for AI Mumbai (AI 2047 Initiative) built on the 80/15/05 Sovereign Blue, Signal Teal, and Pulse Orange design system.",
  robots: { index: false, follow: false },
};

const CORE_PILLARS = [
  {
    code: "PILLAR 01",
    tag: "REGULATORY & RISK ARCHITECTURE",
    title: "AI Governance",
    summary:
      "Operationalizing deterministic guardrails, model auditability, DPDP compliance, and autonomous agent risk controls across regulated banking, healthcare, and public infrastructure.",
    metrics: "21% Mature Agent Governance → Target 100% Auditability",
  },
  {
    code: "PILLAR 02",
    tag: "AUTONOMOUS WORKFLOWS",
    title: "Enterprise Automation",
    summary:
      "Moving beyond isolated task copilots to end-to-end multi-agent orchestration across supply chain, ERP, customer telemetry, and zero-latency back-office operations.",
    metrics: "44% Process Redesign · 74% Agentic AI Adoption by 2028",
  },
  {
    code: "PILLAR 03",
    tag: "FOUNDATION & MULTIMODAL AI",
    title: "Generative Systems",
    summary:
      "Production-grade retrieval-augmented generation (RAG), Indic-multilingual foundation models, low-latency inference optimization, and verifiable enterprise ROI.",
    metrics: "97% Productivity Mandate · 73% Expanded KPI Tracking",
  },
  {
    code: "PILLAR 04",
    tag: "NATIONAL COMPUTE & CLOUD FABRIC",
    title: "Sovereign Infrastructure",
    summary:
      "Architecting domestic GPU compute clusters, sovereign cloud zones, energy-resilient data centers, and silicon-to-model independence under the AI 2047 national roadmap.",
    metrics: "AI 2047 Sovereign Compute & Data Residency Corridor",
  },
];

const METRICS_STRIP = [
  {
    value: "1,500+",
    label: "Attendees",
    sub: "C-Suite, Policymakers & Enterprise AI Architects",
  },
  {
    value: "80+",
    label: "Speakers",
    sub: "Global AI Pioneers, CIOs, CAIOs & Sovereign Leaders",
  },
  {
    value: "50+",
    label: "Demos",
    sub: "Live Enterprise AI Deployments & Sovereign Pavilions",
  },
  {
    value: "52nd",
    label: "Global Edition",
    sub: "World’s Longest-Running AI Show Series · Mumbai",
  },
];

const AGENDA_HIGHLIGHTS = [
  {
    time: "09:30 – 10:15 IST · DAY 1",
    format: "INAUGURAL MINISTERIAL KEYNOTE",
    title: "India Towards AI 2047: Building the Sovereign Intelligence Stack",
    stage: "Plenary Hall A · Sovereign Stage",
  },
  {
    time: "11:30 – 13:00 IST · DAY 1",
    format: "CLOSED-DOOR CXO BOARDROOM",
    title: "Executive Roundtable I: Governing Autonomous Agents in BFSI & Critical Infrastructure",
    stage: "Sovereign Boardroom Suite",
  },
  {
    time: "14:15 – 15:00 IST · DAY 1",
    format: "ENTERPRISE ARCHITECTURE PANEL",
    title: "From Pilot Purgatory to P&L Impact: Verifiable ROI at Population Scale",
    stage: "Grand Ballroom · AI 2047 Forum",
  },
  {
    time: "15:30 – 17:00 IST · DAY 2",
    format: "CLOSED-DOOR CXO BOARDROOM",
    title: "Executive Roundtable II: Sovereign Cloud, Indic LLMs & Cross-Border Data Lineage",
    stage: "Sovereign Boardroom Suite",
  },
];

export default function StagingHomePreviewPage() {
  return (
    <div className="ai2047-sandbox-root ai2047-sovereign-canvas ai2047-micro-linear min-h-screen flex flex-col selection:bg-[#F15928] selection:text-white">
      <AiMumbaiScopedStyles />
      <AiMumbaiHeader activePage="home" />

      <main className="flex-1">
        {/* =====================================================================
            1. HERO SECTION (80% Sovereign Blue #0069B8 Canvas + Halftone Vortex)
           ===================================================================== */}
        <section
          id="hero"
          className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-28 border-b border-[#009EAD]/35"
          style={{
            background:
              "radial-gradient(ellipse 80% 65% at 50% 22%, rgba(0, 105, 184, 0.85) 0%, rgba(0, 62, 115, 0.92) 56%, rgba(0, 24, 48, 0.98) 100%)",
          }}
        >
          {/* Subtle Concentric Dot-Matrix / Circular Vortex Halftone Pattern (5-10% Opacity) */}
          <HalftoneVortexRings
            variant="canvas"
            opacity={0.1}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1080px] h-[1080px]"
          />

          {/* Smooth Sovereign Blue to Dark Transparent Gradient Overlay for AAA Contrast */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 105, 184, 0.18) 0%, rgba(0, 28, 56, 0.55) 68%, rgba(0, 20, 40, 0.94) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center flex flex-col items-center">
            {/* Top Initiative & Date/Venue Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full border border-[#009EAD] bg-[#001D38]/85 shadow-[0_0_24px_rgba(0,158,173,0.25)] mb-7">
              <span
                className="ai2047-caption inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-[0.14em] text-white"
                style={{ backgroundColor: "#F15928" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                LIVE DELEGATE QUALIFICATION
              </span>
              <span className="ai2047-caption uppercase tracking-[0.14em] font-bold text-[#7CE8F2]">
                20–21 APRIL 2027 · MUMBAI, INDIA · THE 52ND GLOBAL EDITION
              </span>
            </div>

            {/* H1 Headline (57px | Line Height: 115% | Bold) */}
            <h1 className="ai2047-h1 max-w-[1000px] mx-auto text-white m-0">
              Where Sovereign AI Becomes the{" "}
              <span
                className="underline decoration-[#009EAD] decoration-2 underline-offset-8"
                style={{ color: "#7CE8F2" }}
              >
                Enterprise Operating Model.
              </span>
            </h1>

            {/* Body 1 Supporting Text (23px | Line Height: 135%) */}
            <p className="ai2047-body1 max-w-[850px] mx-auto mt-6 mb-0 text-white/92">
              Convening India’s foremost CIOs, Chief AI Officers, sovereign policymakers, and deep-tech architects under the{" "}
              <strong className="text-white font-bold">AI Mumbai | AI 2047</strong> mandate to transition from experimental pilots to governed, population-scale enterprise intelligence.
            </p>

            {/* Dual CTAs: Pulse Orange (#F15928) Primary + Signal Teal (#009EAD) Outline Secondary */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#register-cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-[17px] text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#F15928",
                  boxShadow: "0 12px 32px rgba(241, 89, 40, 0.45)",
                }}
              >
                Secure Pass — Register Now
                <span aria-hidden="true">→</span>
              </a>

              <Link
                href="/test/speaker-preview"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-[17px] text-white border-2 transition-all duration-200 hover:bg-[#009EAD]/20"
                style={{
                  borderColor: "#009EAD",
                  backgroundColor: "rgba(0, 29, 56, 0.65)",
                  boxShadow: "0 0 20px rgba(0, 158, 173, 0.25)",
                }}
              >
                Explore Speaker Template (Concept 2)
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            {/* Event Meta Footer Strip */}
            <div className="mt-14 pt-8 border-t border-[#009EAD]/35 w-full max-w-[920px] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="sm:border-r border-[#009EAD]/35 sm:pr-6">
                <div className="ai2047-h4 text-white">20–21 April 2027</div>
                <div className="ai2047-caption uppercase tracking-[0.16em] text-[#7CE8F2] mt-1">
                  2-DAY EXECUTIVE SUMMIT
                </div>
              </div>
              <div className="sm:border-r border-[#009EAD]/35 sm:pr-6">
                <div className="ai2047-h4 text-white">Mumbai, India</div>
                <div className="ai2047-caption uppercase tracking-[0.16em] text-[#7CE8F2] mt-1">
                  THE 52ND GLOBAL EDITION
                </div>
              </div>
              <div>
                <div className="ai2047-h4 text-white">AI 2047 Initiative</div>
                <div className="ai2047-caption uppercase tracking-[0.16em] text-[#7CE8F2] mt-1">
                  SOVEREIGN ENTERPRISE EDITION
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            2. METRICS STRIP (1,500+ Attendees, 80+ Speakers, 50+ Demos)
           ===================================================================== */}
        <section
          id="metrics"
          className="relative py-16 border-b border-[#009EAD]/35 bg-[#00284D]/90"
        >
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div>
                <span
                  className="ai2047-caption uppercase tracking-[0.16em] font-bold block"
                  style={{ color: "#009EAD" }}
                >
                  VERIFIED SCALE &amp; INSTITUTIONAL FOOTPRINT
                </span>
                <h2 className="ai2047-h3 text-white m-0 mt-1">
                  Sovereign Enterprise Density
                </h2>
              </div>
              <span className="ai2047-caption px-3.5 py-1.5 rounded-full border border-[#009EAD] bg-[#001830] text-white/90">
                Deloitte India Insights: 40% Enterprise AI Adoption (vs. 28% Global)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {METRICS_STRIP.map((metric) => (
                <div
                  key={metric.label}
                  className="ai2047-sovereign-card rounded-2xl p-7 relative overflow-hidden"
                >
                  <div
                    className="w-10 h-1 rounded-full mb-4"
                    style={{ backgroundColor: "#009EAD" }}
                  />
                  <div className="ai2047-h2 text-white">{metric.value}</div>
                  <div className="ai2047-h5 text-[#7CE8F2] mt-1">{metric.label}</div>
                  <p className="ai2047-paragraph text-white/80 m-0 mt-2">
                    {metric.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            3. CORE THEMES / PILLARS (4-Card Grid: AI Governance, Enterprise
               Automation, Generative Systems, Sovereign Infrastructure)
           ===================================================================== */}
        <section id="pillars" className="relative py-24 overflow-hidden border-b border-[#009EAD]/35">
          <HalftoneVortexRings
            variant="canvas"
            opacity={0.07}
            className="absolute -right-64 -top-64 w-[860px] h-[860px]"
          />

          <div className="relative z-10 max-w-[1280px] mx-auto px-6">
            <div className="max-w-[780px] mb-14">
              <span
                className="ai2047-caption inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#009EAD] bg-[#001D38] uppercase tracking-[0.16em] font-bold text-[#7CE8F2]"
              >
                <span className="w-2 h-2 rounded-full bg-[#009EAD]" />
                AI 2047 ARCHITECTURAL TRACKS
              </span>
              <h2 className="ai2047-h2 text-white m-0 mt-4">
                Four Core Pillars of the Sovereign AI Operating Model
              </h2>
              <p className="ai2047-body2 text-white/85 m-0 mt-4">
                Structured around India’s enterprise execution gap—moving from 44% selective process redesign to fundamental business-model reinvention and governed autonomous systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {CORE_PILLARS.map((pillar) => (
                <article
                  key={pillar.code}
                  className="ai2047-sovereign-card rounded-[22px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span
                        className="ai2047-caption px-3 py-1 rounded-full font-bold uppercase tracking-[0.14em] border"
                        style={{
                          backgroundColor: "rgba(0, 105, 184, 0.35)",
                          borderColor: "#009EAD",
                          color: "#7CE8F2",
                        }}
                      >
                        {pillar.code} · {pillar.tag}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#009EAD]" />
                    </div>

                    {/* H4 Title (33px | Line Height: 125% | Bold) */}
                    <h3 className="ai2047-h4 text-white m-0">{pillar.title}</h3>

                    {/* Paragraph (16px | Line Height: 150%) */}
                    <p className="ai2047-paragraph text-white/88 m-0 mt-3.5">
                      {pillar.summary}
                    </p>
                  </div>

                  <div className="mt-7 pt-4 border-t border-[#009EAD]/35 flex items-center justify-between gap-3">
                    <span className="ai2047-caption text-[#7CE8F2] font-bold uppercase tracking-[0.08em]">
                      {pillar.metrics}
                    </span>
                    <span className="ai2047-caption text-white/75 font-bold">
                      Explore Track →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. KEYNOTE TEASER (Concept 2 — Neural Data Flow Speaker Cards)
           ===================================================================== */}
        <section id="keynotes" className="relative py-24 overflow-hidden border-b border-[#009EAD]/35 bg-[#001D38]/75">
          <HalftoneVortexRings
            variant="canvas"
            opacity={0.08}
            className="absolute -left-64 bottom-0 w-[900px] h-[900px]"
          />

          <div className="relative z-10 max-w-[1280px] mx-auto px-6">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <div className="max-w-[760px]">
                <span className="ai2047-caption inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#009EAD] bg-[#001830] uppercase tracking-[0.16em] font-bold text-[#7CE8F2]">
                  <span className="w-2 h-2 rounded-full bg-[#009EAD]" />
                  CONCEPT 2 · NEURAL DATA FLOW TREATMENT
                </span>
                <h2 className="ai2047-h2 text-white m-0 mt-4">
                  Keynote &amp; Sovereign Enterprise Faculty
                </h2>
                <p className="ai2047-body2 text-white/85 m-0 mt-3">
                  High-contrast speaker portraits augmented with elliptical halftone vortex rings, luminous neural pathways, and 1px Signal Teal border glow.
                </p>
              </div>

              <Link
                href="/test/speaker-preview"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-[15px] text-white border transition-all hover:bg-[#009EAD]/20"
                style={{
                  borderColor: "#009EAD",
                  backgroundColor: "rgba(0, 105, 184, 0.35)",
                }}
              >
                Open Full Speaker Sandbox (/test/speaker-preview)
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* 4-Card Concept 2 Speaker Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STAGING_SPEAKERS.map((speaker) => (
                <Concept2SpeakerCard
                  key={speaker.id}
                  speaker={speaker}
                  href="/test/speaker-preview"
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. PROGRAMME & CONVERSION PATHWAYS (Duplicated Homepage Flow)
           ===================================================================== */}
        <section id="register-cta" className="relative py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6">
            {/* Programme Preview */}
            <div className="mb-20">
              <div className="max-w-[740px] mb-10">
                <span className="ai2047-caption uppercase tracking-[0.16em] font-bold text-[#7CE8F2]">
                  CURATED FOR CROSS-FUNCTIONAL BUYING UNITS
                </span>
                <h2 className="ai2047-h2 text-white m-0 mt-2">
                  2027 Sovereign Programme Architecture
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {AGENDA_HIGHLIGHTS.map((item) => (
                  <div
                    key={item.title}
                    className="ai2047-sovereign-card rounded-2xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className="ai2047-caption px-3 py-0.5 rounded-full font-bold uppercase tracking-[0.12em] border"
                          style={{
                            borderColor: "#009EAD",
                            backgroundColor: "rgba(0, 158, 173, 0.16)",
                            color: "#7CE8F2",
                          }}
                        >
                          {item.format}
                        </span>
                        <span className="ai2047-caption text-white/80 font-bold">
                          {item.time}
                        </span>
                      </div>
                      <h3 className="ai2047-h5 text-white m-0">{item.title}</h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#009EAD]/30 flex items-center justify-between">
                      <span className="ai2047-caption text-[#7CE8F2]">{item.stage}</span>
                      <span className="ai2047-caption text-white/75">20–21 April 2027</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dual Access Pathway Conversion Block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 1: Delegate Pass */}
              <div className="ai2047-sovereign-card rounded-[24px] p-9 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <span
                    className="ai2047-caption inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-bold uppercase tracking-[0.14em] text-white mb-5"
                    style={{ backgroundColor: "#F15928" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    INVITATION &amp; QUALIFICATION
                  </span>
                  <h3 className="ai2047-h3 text-white m-0">
                    Delegate Pass — Built for Enterprise CXOs
                  </h3>
                  <p className="ai2047-paragraph text-white/88 m-0 mt-4">
                    Senior enterprise technology, data, operations, and risk leaders attend by invitation, subject to qualification based on an active mandate to deploy enterprise AI.
                  </p>
                  <ul className="mt-6 space-y-2.5 p-0 list-none">
                    <li className="ai2047-paragraph text-white/85 flex items-center gap-2.5">
                      <span className="text-[#7CE8F2] font-bold">✓</span>
                      CIOs, CTOs, Chief AI Officers, CDOs, CISOs &amp; Transformation Heads
                    </li>
                    <li className="ai2047-paragraph text-white/85 flex items-center gap-2.5">
                      <span className="text-[#7CE8F2] font-bold">✓</span>
                      Full 2-day plenary access, executive roundtables &amp; AI matchmaking
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#009EAD]/35">
                  <a
                    href="#register-cta"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-[16px] text-white transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "#F15928",
                      boxShadow: "0 10px 28px rgba(241, 89, 40, 0.42)",
                    }}
                  >
                    Secure Pass — Apply Now
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              {/* Card 2: Commercial Partnerships */}
              <div className="ai2047-sovereign-card rounded-[24px] p-9 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <span
                    className="ai2047-caption inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-bold uppercase tracking-[0.14em] border mb-5"
                    style={{
                      borderColor: "#009EAD",
                      backgroundColor: "rgba(0, 158, 173, 0.18)",
                      color: "#7CE8F2",
                    }}
                  >
                    COMMERCIAL PARTNERSHIPS
                  </span>
                  <h3 className="ai2047-h3 text-white m-0">
                    Put Your Solutions in Front of the Buying Unit
                  </h3>
                  <p className="ai2047-paragraph text-white/88 m-0 mt-4">
                    Commercial partnerships are structured around standalone stage sessions, standardized exhibition spaces, and curated closed-door CXO boardrooms.
                  </p>
                  <ul className="mt-6 space-y-2.5 p-0 list-none">
                    <li className="ai2047-paragraph text-white/85 flex items-center gap-2.5">
                      <span className="text-[#7CE8F2] font-bold">✓</span>
                      Standalone stage thought leadership &amp; sovereign showcase
                    </li>
                    <li className="ai2047-paragraph text-white/85 flex items-center gap-2.5">
                      <span className="text-[#7CE8F2] font-bold">✓</span>
                      1-to-1 pre-scheduled meetings with qualified enterprise buyers
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#009EAD]/35">
                  <a
                    href="#register-cta"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-[16px] text-white border-2 transition-all hover:bg-[#009EAD]/20"
                    style={{
                      borderColor: "#009EAD",
                      backgroundColor: "rgba(0, 105, 184, 0.35)",
                    }}
                  >
                    Enquire About Sponsorship
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AiMumbaiFooter />
    </div>
  );
}
