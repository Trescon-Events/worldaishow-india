import React from "react";
import Link from "next/link";

/**
 * AI MUMBAI | AI 2047 — ISOLATED STAGING DESIGN SYSTEM
 * ----------------------------------------------------
 * Strictly scoped to /test/home-preview and /test/speaker-preview.
 * Zero impact on live production routes or global styles.
 *
 * Color Distribution (80 / 15 / 05):
 * - 80% Sovereign Blue (#0069B8 | RGB 0, 105, 184 | CMYK 87, 61, 0, 0)
 * - 15% Signal Teal    (#009EAD | RGB 0, 158, 173 | CMYK 80, 18, 31, 0) — Never used as large section background
 * - 05% Pulse Orange   (#F15928 | RGB 241, 89, 40 | CMYK 00, 77, 88, 00) — Strict CTA & live/urgent focal elements
 *
 * Modular Type Scale (Space Grotesk — 1.200 Ratio):
 * - H1: 57px / 115% / Bold
 * - H2: 48px / 120% / Bold
 * - H3: 40px / 120% / Bold
 * - H4: 33px / 125% / Bold
 * - H5: 27px / 130% / Bold
 * - Body 1: 23px / 135%
 * - Body 2: 19px / 145%
 * - Paragraph: 16px / 150%
 * - Caption: 12px / 160%
 */

export const AI2047_TOKENS = {
  sovereignBlue: "#0069B8",
  sovereignDeep: "#002B52",
  sovereignAbyss: "#001830",
  signalTeal: "#009EAD",
  pulseOrange: "#F15928",
};

export interface Concept2Speaker {
  id: string;
  name: string;
  designation: string;
  organization: string;
  image: string;
  sessionTag: string;
  sessionTitle: string;
  sessionTime: string;
  sessionStage: string;
  track: string;
  leadBio: string;
  fullBio: string[];
  focusAreas: string[];
  linkedinUrl: string;
  xUrl: string;
}

export const STAGING_SPEAKERS: Concept2Speaker[] = [
  {
    id: "sumnesh-joshi",
    name: "Sumnesh Joshi",
    designation: "Deputy Director General, Ministry of Communications",
    organization: "Government of India",
    image: "/mumbai/enterprise/images/speakers/processed/Sumnesh-Joshi.png",
    sessionTag: "KEYNOTE · SOVEREIGN AI INFRASTRUCTURE",
    sessionTitle: "Architecting India’s Sovereign Compute & Digital Public Intelligence Grid for 2047",
    sessionTime: "Day 1 · 20 April 2027 · 09:30 – 10:15 IST",
    sessionStage: "Plenary Hall A · Sovereign Stage",
    track: "Sovereign Infrastructure",
    leadBio:
      "Spearheading national telecommunications modernization, sovereign compute corridors, and public-sector AI governance frameworks under the AI 2047 national transformation mandate.",
    fullBio: [
      "As Deputy Director General at the Ministry of Communications, Government of India, Sumnesh Joshi leads policy architecture and cross-ministerial execution for next-generation digital infrastructure, high-density sovereign data fabrics, and secure AI adoption across critical national systems.",
      "With over two decades of technology leadership spanning telecom standards, federated data governance, and large-scale public digital platforms, his work focuses on bridging sovereign compute capacity with enterprise-grade regulatory guardrails—ensuring India’s transition from AI consumer to foundational AI architect by 2047.",
    ],
    focusAreas: [
      "Sovereign Compute Fabrics",
      "AI 2047 National Policy",
      "Digital Public Infrastructure",
      "Telecom & Edge AI Grid",
      "Federated Data Governance",
      "Algorithmic Auditability",
    ],
    linkedinUrl: "#linkedin-sumnesh-joshi",
    xUrl: "#x-sumnesh-joshi",
  },
  {
    id: "ashwini-tewari",
    name: "Ashwini Tewari",
    designation: "Managing Director",
    organization: "State Bank of India",
    image: "/mumbai/enterprise/images/speakers/processed/Ashwini.png",
    sessionTag: "PLENARY · ENTERPRISE AUTOMATION",
    sessionTitle: "Autonomous Banking at Population Scale: Deploying Governed Multi-Agent Workflows",
    sessionTime: "Day 1 · 20 April 2027 · 11:15 – 12:00 IST",
    sessionStage: "Plenary Hall A · Sovereign Stage",
    track: "Enterprise Automation",
    leadBio:
      "Driving core banking intelligence, risk-governed agentic operations, and real-time financial inclusion across more than 500 million customer accounts.",
    fullBio: [
      "Ashwini Tewari serves as Managing Director at the State Bank of India, overseeing enterprise technology transformation, operational resilience, and institutional AI deployment across India’s largest financial institution.",
      "Under his stewardship, SBI has transitioned from isolated analytics pilots to production-grade generative and predictive systems spanning fraud telemetry, automated underwriting, and multilingual customer copilot architectures.",
    ],
    focusAreas: [
      "Population-Scale FinTech AI",
      "Multi-Agent Risk Controls",
      "Zero-Trust Financial Cloud",
      "Autonomous Treasury & Credit",
      "Regulatory Compliance Ops",
    ],
    linkedinUrl: "#linkedin-ashwini-tewari",
    xUrl: "#x-ashwini-tewari",
  },
  {
    id: "cp-gurnani",
    name: "CP Gurnani",
    designation: "Co-Founder & Executive Vice Chairman",
    organization: "AIonOS",
    image: "/mumbai/enterprise/images/speakers/processed/Chander-Prakash.png",
    sessionTag: "FIRESIDE · GENERATIVE SYSTEMS",
    sessionTitle: "From Legacy IT Services to Agentic Enterprise Operating Models",
    sessionTime: "Day 1 · 20 April 2027 · 14:15 – 15:00 IST",
    sessionStage: "Grand Ballroom · AI 2047 Forum",
    track: "Generative Systems",
    leadBio:
      "Pioneering AI-native enterprise operating models that re-architect global supply chains, customer ecosystems, and autonomous service delivery.",
    fullBio: [
      "CP Gurnani is Co-Founder and Executive Vice Chairman of AIonOS and former MD & CEO of Tech Mahindra. A globally recognized enterprise transformation leader, he advises boards and sovereign funds on scaling AI-first business architectures.",
      "At AI Mumbai, he examines the structural shift from human-in-the-loop software workflows to autonomous agentic enterprises capable of verifiable P&L impact.",
    ],
    focusAreas: [
      "AI-Native Operating Models",
      "Enterprise RAG & Copilots",
      "Boardroom AI Transformation",
      "Global Delivery Automation",
      "Verifiable Enterprise ROI",
    ],
    linkedinUrl: "#linkedin-cp-gurnani",
    xUrl: "#x-cp-gurnani",
  },
  {
    id: "kirti-patil",
    name: "Kirti Patil",
    designation: "Chief Technology Officer",
    organization: "Kotak Mahindra Life Insurance",
    image: "/mumbai/enterprise/images/speakers/processed/Kirti-Patil.png",
    sessionTag: "PANEL · AI GOVERNANCE",
    sessionTitle: "Deterministic Guardrails for Non-Deterministic Models in Regulated Enterprises",
    sessionTime: "Day 2 · 21 April 2027 · 10:30 – 11:15 IST",
    sessionStage: "Hall B · Governance & Risk Track",
    track: "AI Governance",
    leadBio:
      "Architecting zero-hallucination clinical and actuarial AI pipelines, model observability, and enterprise data lineage in regulated insurance.",
    fullBio: [
      "Kirti Patil is Chief Technology Officer at Kotak Mahindra Life Insurance, where she leads cloud-native architecture, enterprise data platforms, and governed generative AI engineering.",
      "Her work centers on establishing continuous red-teaming, PII-safe retrieval architectures, and deterministic policy enforcement layers for customer-facing AI agents.",
    ],
    focusAreas: [
      "AI Guardrails & Red-Teaming",
      "Actuarial & Claims Automation",
      "Model Observability",
      "Privacy-Preserving RAG",
      "Enterprise Data Lineage",
    ],
    linkedinUrl: "#linkedin-kirti-patil",
    xUrl: "#x-kirti-patil",
  },
];

/**
 * Modular CSS Scoped Stylesheet for the AI Mumbai | AI 2047 Brand System.
 * Injected only inside `/test/*` routes so zero rules leak into production.
 */
export function AiMumbaiScopedStyles() {
  return (
    <style>{`
      .ai2047-sandbox-root {
        --sb-sovereign-blue: #0069B8;
        --sb-sovereign-deep: #002B52;
        --sb-sovereign-abyss: #00162B;
        --sb-signal-teal: #009EAD;
        --sb-pulse-orange: #F15928;
        font-family: var(--font-space-grotesk), "Space Grotesk", sans-serif;
        background-color: #002344;
        color: #FFFFFF;
      }

      /* 1.200 Modular Scale Typography Hierarchy (Space Grotesk) */
      .ai2047-h1 {
        font-size: clamp(38px, 4.8vw, 57px);
        line-height: 1.15;
        font-weight: 700;
        letter-spacing: -0.02em;
      }
      .ai2047-h2 {
        font-size: clamp(32px, 3.8vw, 48px);
        line-height: 1.20;
        font-weight: 700;
        letter-spacing: -0.018em;
      }
      .ai2047-h3 {
        font-size: clamp(26px, 3vw, 40px);
        line-height: 1.20;
        font-weight: 700;
        letter-spacing: -0.015em;
      }
      .ai2047-h4 {
        font-size: clamp(24px, 2.4vw, 33px);
        line-height: 1.25;
        font-weight: 700;
        letter-spacing: -0.01em;
      }
      .ai2047-h5 {
        font-size: clamp(21px, 2vw, 27px);
        line-height: 1.30;
        font-weight: 700;
      }
      .ai2047-body1 {
        font-size: clamp(19px, 1.7vw, 23px);
        line-height: 1.35;
        font-weight: 400;
      }
      .ai2047-body2 {
        font-size: 19px;
        line-height: 1.45;
        font-weight: 400;
      }
      .ai2047-paragraph {
        font-size: 16px;
        line-height: 1.50;
        font-weight: 400;
      }
      .ai2047-caption {
        font-size: 12px;
        line-height: 1.60;
        font-weight: 500;
      }

      /* Brand Micro-Linear Texture & Concentric Halftone Background */
      .ai2047-micro-linear {
        background-image:
          repeating-linear-gradient(
            90deg,
            rgba(0, 158, 173, 0.06) 0px,
            rgba(0, 158, 173, 0.06) 1px,
            transparent 1px,
            transparent 48px
          ),
          repeating-linear-gradient(
            180deg,
            rgba(0, 105, 184, 0.08) 0px,
            rgba(0, 105, 184, 0.08) 1px,
            transparent 1px,
            transparent 48px
          );
      }

      /* Sovereign Blue Canvas (80% Dominant Anchor with WCAG AAA Contrast Protection) */
      .ai2047-sovereign-canvas {
        background:
          radial-gradient(circle at 18% 15%, rgba(0, 105, 184, 0.78) 0%, rgba(0, 105, 184, 0) 52%),
          radial-gradient(circle at 82% 24%, rgba(0, 105, 184, 0.65) 0%, rgba(0, 105, 184, 0) 48%),
          linear-gradient(180deg, #004E8C 0%, #003566 38%, #002142 78%, #001830 100%);
      }

      .ai2047-sovereign-card {
        background: linear-gradient(
          155deg,
          rgba(0, 105, 184, 0.42) 0%,
          rgba(0, 56, 104, 0.78) 55%,
          rgba(0, 26, 51, 0.94) 100%
        );
        border: 1px solid rgba(0, 158, 173, 0.55);
        box-shadow:
          0 20px 50px rgba(0, 12, 28, 0.55),
          0 0 24px rgba(0, 158, 173, 0.14),
          inset 0 1px 0 rgba(255, 255, 255, 0.14);
        backdrop-filter: blur(16px);
      }

      .ai2047-sovereign-card:hover {
        border-color: #009EAD;
        box-shadow:
          0 24px 60px rgba(0, 12, 28, 0.68),
          0 0 32px rgba(0, 158, 173, 0.28),
          inset 0 1px 0 rgba(255, 255, 255, 0.22);
      }

      @keyframes ai2047PulseFlow {
        0%, 100% { stroke-dashoffset: 0; opacity: 0.72; }
        50% { stroke-dashoffset: -28; opacity: 1; }
      }

      .ai2047-neural-stream {
        stroke-dasharray: 8 6;
        animation: ai2047PulseFlow 6s ease-in-out infinite;
      }
    `}</style>
  );
}

/**
 * Concentric Halftone Dot-Matrix / Circular Vortex Pattern SVG
 * Uses #0069B8 and #009EAD at 5%-10% opacity (or higher inside speaker avatar halos).
 */
export function HalftoneVortexRings({
  className = "",
  opacity = 0.09,
  variant = "canvas",
}: {
  className?: string;
  opacity?: number;
  variant?: "canvas" | "avatar";
}) {
  const rings = variant === "avatar" ? [46, 64, 82, 100, 118, 136, 154] : [90, 140, 190, 240, 290, 340, 390, 440];
  return (
    <svg
      viewBox="0 0 960 960"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`vortexGrad-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#009EAD" stopOpacity="0.95" />
          <stop offset="55%" stopColor="#0069B8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#0069B8" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Elliptical dynamic dot-matrix vortex rings */}
      <g transform="translate(480, 480) rotate(-14) scale(1, 0.84)">
        {rings.map((radius, rIdx) => {
          const dotRadius = Math.max(1.8, 5.2 - rIdx * 0.42);
          const circumference = 2 * Math.PI * radius;
          const dotCount = Math.floor(circumference / (variant === "avatar" ? 13 : 18));
          const dash = `${dotRadius} ${circumference / dotCount - dotRadius}`;
          const strokeColor = rIdx % 2 === 0 ? "#009EAD" : "#0069B8";
          return (
            <circle
              key={radius}
              cx="0"
              cy="0"
              r={radius}
              stroke={strokeColor}
              strokeWidth={dotRadius * 1.9}
              strokeLinecap="round"
              strokeDasharray={dash}
              transform={`rotate(${rIdx * 11})`}
            />
          );
        })}
      </g>

      {/* Subtle inner luminous core */}
      <circle cx="480" cy="480" r={variant === "avatar" ? 140 : 280} fill={`url(#vortexGrad-${variant})`} opacity="0.28" />
    </svg>
  );
}

/**
 * Concept 2 — Neural Data Flow SVG Overlay
 * Flowing Sovereign Blue (#0069B8) & Signal Teal (#009EAD) luminous data streams
 * and neural pathways emerging from the speaker silhouette.
 */
export function NeuralDataStreamsOverlay({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="neuralBeamLeft" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0069B8" stopOpacity="0" />
          <stop offset="50%" stopColor="#0069B8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#009EAD" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="neuralBeamRight" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#0069B8" stopOpacity="0" />
          <stop offset="50%" stopColor="#009EAD" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
        </linearGradient>
        <filter id="neuralGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Flowing cybernetic neural pathways emerging from silhouette shoulders & head */}
      <g filter="url(#neuralGlow)">
        <path
          d="M 36 360 C 78 310, 92 240, 146 188 C 178 156, 165 98, 210 56"
          stroke="url(#neuralBeamLeft)"
          strokeWidth="2.2"
          className="ai2047-neural-stream"
        />
        <path
          d="M 18 395 C 88 355, 118 282, 164 232 C 194 198, 212 142, 266 94"
          stroke="url(#neuralBeamLeft)"
          strokeWidth="1.5"
          opacity="0.85"
        />
        <path
          d="M 368 354 C 318 302, 298 228, 250 176 C 216 142, 230 92, 184 48"
          stroke="url(#neuralBeamRight)"
          strokeWidth="2.2"
          className="ai2047-neural-stream"
        />
        <path
          d="M 382 392 C 322 342, 286 278, 236 220 C 204 182, 178 134, 134 86"
          stroke="url(#neuralBeamRight)"
          strokeWidth="1.5"
          opacity="0.8"
        />

        {/* Synaptic Data Nodes */}
        <circle cx="146" cy="188" r="4" fill="#009EAD" />
        <circle cx="210" cy="56" r="4.5" fill="#FFFFFF" />
        <circle cx="250" cy="176" r="4" fill="#009EAD" />
        <circle cx="184" cy="48" r="3.5" fill="#009EAD" />
        <circle cx="266" cy="94" r="3.5" fill="#0069B8" />
        <circle cx="134" cy="86" r="3.5" fill="#009EAD" />
      </g>
    </svg>
  );
}

/**
 * Concept 2 — Neural Data Flow Speaker Card Component
 * - Deep glassmorphic Sovereign Blue container
 * - 1px Signal Teal (#009EAD) luminous border glow
 * - Elliptical dynamic dot-matrix halo/vortex ring behind avatar
 * - High-contrast speaker portrait augmented with flowing blue/cyan neural data streams
 * - Speaker Name (H4: 33px / 125% Bold), Title/Company (Body 2: 19px / Caption: 12px), and Session Tag
 */
export function Concept2SpeakerCard({
  speaker,
  href = "/test/speaker-preview",
}: {
  speaker: Concept2Speaker;
  href?: string;
}) {
  return (
    <article className="ai2047-sovereign-card group relative rounded-[22px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5">
      {/* Top Signal Teal 1px luminous highlight bar */}
      <div
        className="h-[2px] w-full"
        style={{
          background: "linear-gradient(90deg, rgba(0,105,184,0) 0%, #009EAD 50%, rgba(0,105,184,0) 100%)",
        }}
      />

      {/* Portrait Canvas with Elliptical Halftone Vortex Halo & Neural Data Streams */}
      <div className="relative h-[320px] w-full overflow-hidden bg-gradient-to-b from-[#00589C] via-[#003B6D] to-[#001D38]">
        {/* Elliptical Dot-Matrix Vortex Ring Behind Avatar */}
        <HalftoneVortexRings
          variant="avatar"
          opacity={0.42}
          className="absolute inset-0 w-full h-full scale-125 group-hover:scale-[1.32] group-hover:rotate-6 transition-transform duration-700"
        />

        {/* Cybernetic Neural Data Streams Behind & Around Silhouette */}
        <NeuralDataStreamsOverlay className="absolute inset-0 w-full h-full z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

        {/* High-Contrast Speaker Portrait */}
        <img
          src={speaker.image}
          alt={speaker.name}
          loading="lazy"
          className="relative z-20 w-full h-full object-cover object-top contrast-110 saturate-105 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Foreground Neural Stream Accents & Sovereign Blue Contrast Protection Overlay */}
        <div
          className="absolute inset-0 z-30 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 105, 184, 0.08) 0%, rgba(0, 53, 102, 0.32) 58%, rgba(0, 24, 48, 0.96) 100%)",
          }}
        />

        {/* Top Session Tag Pill in Signal Teal (#009EAD) */}
        <div className="absolute top-4 left-4 right-4 z-40 flex items-center justify-between gap-2">
          <span
            className="ai2047-caption inline-flex items-center gap-1.5 px-3 py-1 rounded-full uppercase tracking-[0.12em] font-bold text-white border"
            style={{
              backgroundColor: "rgba(0, 24, 48, 0.82)",
              borderColor: "#009EAD",
              boxShadow: "0 0 14px rgba(0, 158, 173, 0.35)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#009EAD]" />
            {speaker.sessionTag}
          </span>
        </div>
      </div>

      {/* Card Body: H4 Speaker Name, Body 2 Designation, Caption Company */}
      <div className="relative z-30 p-6 pt-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#001D38]/95 to-[#001529]">
        <div>
          <h4 className="ai2047-h4 m-0 text-white group-hover:text-[#7CE8F2] transition-colors">
            {speaker.name}
          </h4>
          <p className="ai2047-body2 m-0 mt-2 text-white/92 font-medium">
            {speaker.designation}
          </p>
          <span
            className="ai2047-caption block mt-2 uppercase tracking-[0.16em] font-bold"
            style={{ color: "#009EAD" }}
          >
            {speaker.organization}
          </span>
        </div>

        <div className="mt-5 pt-4 border-t border-[#009EAD]/30 flex items-center justify-between gap-3">
          <span className="ai2047-caption text-white/75 truncate">{speaker.sessionStage}</span>
          <Link
            href={`${href}?speaker=${speaker.id}`}
            className="ai2047-caption inline-flex items-center gap-1.5 font-bold uppercase tracking-[0.12em] text-white hover:text-[#F15928] transition-colors shrink-0"
          >
            Profile &amp; Session
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

/**
 * Sticky Sandbox Header with "AI Mumbai | AI 2047" branding,
 * "SANDBOX TEST VIEW" safety banner, navigation anchors, and Pulse Orange (#F15928) CTA.
 */
export function AiMumbaiHeader({ activePage }: { activePage: "home" | "speaker" }) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#001B36]/92 border-b border-[#009EAD]/40 shadow-[0_10px_30px_rgba(0,12,28,0.45)]">
      {/* Top Sandbox Safety & Environment Strip */}
      <div className="w-full bg-[#001224] border-b border-[#009EAD]/30 px-4 py-1.5">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span
              className="ai2047-caption inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-[0.14em] text-white"
              style={{ backgroundColor: "#F15928" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              SANDBOX TEST VIEW
            </span>
            <span className="ai2047-caption text-white/80 hidden sm:inline">
              Isolated Staging Environment · AI Mumbai (AI 2047 Initiative) · 80/15/05 Brand System
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/test/home-preview"
              className={`ai2047-caption px-3 py-0.5 rounded-full border transition-all ${
                activePage === "home"
                  ? "bg-[#0069B8] text-white border-[#009EAD] font-bold"
                  : "text-white/75 border-white/20 hover:border-[#009EAD]"
              }`}
            >
              Page A: /test/home-preview
            </Link>
            <Link
              href="/test/speaker-preview"
              className={`ai2047-caption px-3 py-0.5 rounded-full border transition-all ${
                activePage === "speaker"
                  ? "bg-[#0069B8] text-white border-[#009EAD] font-bold"
                  : "text-white/75 border-white/20 hover:border-[#009EAD]"
              }`}
            >
              Page B: /test/speaker-preview
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center justify-between gap-4">
        {/* Brand Lockup: AI Mumbai | AI 2047 */}
        <Link href="/test/home-preview" className="flex items-center gap-3.5 group">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white border shadow-[0_0_20px_rgba(0,158,173,0.3)]"
            style={{
              background: "linear-gradient(135deg, #0069B8 0%, #003B6F 100%)",
              borderColor: "#009EAD",
            }}
          >
            <span className="text-[17px] tracking-tighter font-extrabold">AI</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[20px] font-bold tracking-tight text-white">AI MUMBAI</span>
              <span className="text-[#009EAD] font-bold">|</span>
              <span
                className="ai2047-caption px-2 py-0.5 rounded font-bold tracking-[0.14em] uppercase"
                style={{
                  backgroundColor: "rgba(0, 158, 173, 0.18)",
                  color: "#7CE8F2",
                  border: "1px solid rgba(0, 158, 173, 0.5)",
                }}
              >
                AI 2047
              </span>
            </div>
            <span className="ai2047-caption block text-white/70 tracking-[0.08em]">
              SOVEREIGN ENTERPRISE EDITION · MUMBAI
            </span>
          </div>
        </Link>

        {/* Navigation Menu Anchors */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Staging Navigation">
          <Link
            href="/test/home-preview#hero"
            className="ai2047-paragraph text-white/90 hover:text-[#7CE8F2] font-medium transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/test/home-preview#pillars"
            className="ai2047-paragraph text-white/90 hover:text-[#7CE8F2] font-medium transition-colors"
          >
            Core Pillars
          </Link>
          <Link
            href="/test/home-preview#keynotes"
            className="ai2047-paragraph text-white/90 hover:text-[#7CE8F2] font-medium transition-colors"
          >
            Keynote Faculty
          </Link>
          <Link
            href="/test/home-preview#metrics"
            className="ai2047-paragraph text-white/90 hover:text-[#7CE8F2] font-medium transition-colors"
          >
            Impact &amp; Scale
          </Link>
          <Link
            href="/test/speaker-preview"
            className="ai2047-paragraph text-white/90 hover:text-[#7CE8F2] font-medium transition-colors flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#009EAD]" />
            Speaker Sandbox
          </Link>
        </nav>

        {/* Primary High-Conversion CTA (5% Pulse Orange #F15928) */}
        <div className="flex items-center gap-3">
          <a
            href="#register-cta"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[15px] text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              backgroundColor: "#F15928",
              boxShadow: "0 8px 24px rgba(241, 89, 40, 0.42)",
            }}
          >
            Register Now
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

/**
 * Institutional Sandbox Footer with Brand Credits, 80/15/05 Color Legend & Links
 */
export function AiMumbaiFooter() {
  return (
    <footer className="relative border-t border-[#009EAD]/40 bg-[#001224] text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 py-14">
        {/* Brand Book Token Verification Bar */}
        <div className="mb-10 p-5 rounded-2xl border border-[#009EAD]/40 bg-[#001F3D]/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span
              className="ai2047-caption px-2.5 py-1 rounded font-bold uppercase tracking-[0.14em]"
              style={{ backgroundColor: "#0069B8" }}
            >
              DESIGN SYSTEM AUDIT
            </span>
            <span className="ai2047-paragraph text-white/90 font-medium">
              Strict 80 / 15 / 05 Brand Book Distribution · Space Grotesk 1.200 Modular Scale · WCAG AAA Contrast
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="ai2047-caption flex items-center gap-2 text-white/85">
              <span className="w-3.5 h-3.5 rounded-full bg-[#0069B8] border border-white/40" />
              80% Sovereign Blue (#0069B8)
            </span>
            <span className="ai2047-caption flex items-center gap-2 text-white/85">
              <span className="w-3.5 h-3.5 rounded-full bg-[#009EAD] border border-white/40" />
              15% Signal Teal (#009EAD)
            </span>
            <span className="ai2047-caption flex items-center gap-2 text-white/85">
              <span className="w-3.5 h-3.5 rounded-full bg-[#F15928] border border-white/40" />
              05% Pulse Orange (#F15928)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white border"
                style={{ backgroundColor: "#0069B8", borderColor: "#009EAD" }}
              >
                AI
              </div>
              <div>
                <div className="text-[20px] font-bold tracking-tight">AI MUMBAI | AI 2047</div>
                <div className="ai2047-caption text-[#7CE8F2]">
                  THE SOVEREIGN ENTERPRISE AI SUMMIT
                </div>
              </div>
            </div>
            <p className="ai2047-paragraph text-white/80 max-w-[440px] m-0">
              Part of the national AI 2047 initiative. Bringing together sovereign policymakers, enterprise CXOs, and deep-tech architects to build India’s AI operating model.
            </p>
          </div>

          <div className="md:col-span-4">
            <h5 className="ai2047-caption uppercase tracking-[0.16em] text-[#7CE8F2] font-bold mb-3">
              Staging Deliverables
            </h5>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <Link href="/test/home-preview" className="ai2047-paragraph text-white/85 hover:text-white underline-offset-4 hover:underline">
                  Page A: Staging Homepage (/test/home-preview)
                </Link>
              </li>
              <li>
                <Link href="/test/speaker-preview" className="ai2047-paragraph text-white/85 hover:text-white underline-offset-4 hover:underline">
                  Page B: Speaker Template (/test/speaker-preview)
                </Link>
              </li>
              <li>
                <Link href="/test/home-preview#pillars" className="ai2047-paragraph text-white/85 hover:text-white underline-offset-4 hover:underline">
                  Core Pillars &amp; Sovereign Tracks
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="ai2047-caption uppercase tracking-[0.16em] text-[#7CE8F2] font-bold mb-3">
              Sandbox Notice
            </h5>
            <p className="ai2047-caption text-white/75 m-0">
              SANDBOX ENVIRONMENT: This route is an isolated staging duplicate created for UI/UX brand-book evaluation. Live production routes remain untouched.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
          <span className="ai2047-caption text-white/70">
            © 2027 AI Mumbai · AI 2047 Initiative · Trescon Global Series (52nd Edition)
          </span>
          <span className="ai2047-caption text-[#7CE8F2]">
            WCAG AA/AAA Verified · Sovereign Blue (#0069B8) · Signal Teal (#009EAD) · Pulse Orange (#F15928)
          </span>
        </div>
      </div>
    </footer>
  );
}
