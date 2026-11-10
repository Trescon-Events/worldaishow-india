import React from "react";

/**
 * AI MUMBAI | AI 2047 — SCOPED COLOR & MOTIF OVERRIDE FOR LIVE DESIGN
 * -------------------------------------------------------------------
 * Keeps the exact same layout, components, and structure as the live homepage
 * and live speakers page, while applying the brand book 80/15/05 color system:
 * - 80% Primary / Dominant: Sovereign Blue (#0069B8)
 * - 15% Secondary / Support: Signal Teal (#009EAD)
 * - 05% Tertiary / Accent: Pulse Orange (#F15928)
 * Plus the Concept 2 (Neural Data Flow + Elliptical Dot-Matrix Vortex Ring)
 * treatment inside `.speaker-card-inner`.
 */

const VORTEX_NEURAL_SVG_DATA_URI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 480' fill='none'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='42%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23009EAD' stop-opacity='0.55'/%3E%3Cstop offset='55%25' stop-color='%230069B8' stop-opacity='0.35'/%3E%3Cstop offset='100%25' stop-color='%230069B8' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='200' cy='200' r='175' fill='url(%23g)'/%3E%3Cg transform='translate(200,195) rotate(-12) scale(1,0.82)'%3E%3Ccircle cx='0' cy='0' r='68' stroke='%23009EAD' stroke-width='4.5' stroke-linecap='round' stroke-dasharray='2 12' opacity='0.55'/%3E%3Ccircle cx='0' cy='0' r='92' stroke='%230069B8' stroke-width='4' stroke-linecap='round' stroke-dasharray='2 14' opacity='0.65'/%3E%3Ccircle cx='0' cy='0' r='116' stroke='%23009EAD' stroke-width='3.5' stroke-linecap='round' stroke-dasharray='2 15' opacity='0.5'/%3E%3Ccircle cx='0' cy='0' r='140' stroke='%230069B8' stroke-width='3' stroke-linecap='round' stroke-dasharray='2 16' opacity='0.55'/%3E%3Ccircle cx='0' cy='0' r='164' stroke='%23009EAD' stroke-width='2.4' stroke-linecap='round' stroke-dasharray='2 18' opacity='0.4'/%3E%3C/g%3E%3Cpath d='M28 360 C76 300 96 232 148 182 C178 152 166 96 212 52' stroke='%23009EAD' stroke-width='1.8' stroke-dasharray='6 5' opacity='0.75'/%3E%3Cpath d='M372 352 C320 295 298 224 252 174 C218 140 232 90 186 46' stroke='%237CE8F2' stroke-width='1.8' stroke-dasharray='6 5' opacity='0.7'/%3E%3Ccircle cx='148' cy='182' r='3.5' fill='%23009EAD'/%3E%3Ccircle cx='212' cy='52' r='4' fill='%237CE8F2'/%3E%3Ccircle cx='252' cy='174' r='3.5' fill='%23009EAD'/%3E%3C/svg%3E")`;

const SECTION_HALFTONE_VORTEX_URI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 900' fill='none'%3E%3Cg transform='translate(450,450) rotate(-14) scale(1,0.84)' opacity='0.08'%3E%3Ccircle cx='0' cy='0' r='120' stroke='%23009EAD' stroke-width='6' stroke-linecap='round' stroke-dasharray='2 20'/%3E%3Ccircle cx='0' cy='0' r='175' stroke='%230069B8' stroke-width='5.5' stroke-linecap='round' stroke-dasharray='2 22'/%3E%3Ccircle cx='0' cy='0' r='230' stroke='%23009EAD' stroke-width='5' stroke-linecap='round' stroke-dasharray='2 24'/%3E%3Ccircle cx='0' cy='0' r='285' stroke='%230069B8' stroke-width='4.5' stroke-linecap='round' stroke-dasharray='2 26'/%3E%3Ccircle cx='0' cy='0' r='340' stroke='%23009EAD' stroke-width='4' stroke-linecap='round' stroke-dasharray='2 28'/%3E%3Ccircle cx='0' cy='0' r='395' stroke='%230069B8' stroke-width='3.5' stroke-linecap='round' stroke-dasharray='2 30'/%3E%3C/g%3E%3C/svg%3E")`;

export function AiMumbaiLiveThemeStyles() {
  return (
    <style>{`
      .ai2047-live-theme {
        --bg: #003E70;
        --panel: #004E8C;
        --panel-soft: #005BA1;
        --line: rgba(0, 158, 173, 0.45);
        --line-green: rgba(241, 89, 40, 0.55);
        --text: #FFFFFF;
        --muted: #D9EEF9;
        --dim: #A6D1EC;
        --cyan: #009EAD;
        --blue: #0069B8;
        --green: #F15928;

        --color-bg: #003E70;
        --color-panel: #004E8C;
        --color-panel-soft: #005BA1;
        --color-line: rgba(0, 158, 173, 0.45);
        --color-line-green: rgba(241, 89, 40, 0.55);
        --color-text: #FFFFFF;
        --color-muted: #D9EEF9;
        --color-dim: #A6D1EC;
        --color-cyan: #009EAD;
        --color-blue: #0069B8;
        --color-green: #F15928;
      }

      /* =====================================================================
         1. 80% DOMINANT SOVEREIGN BLUE (#0069B8) BACKGROUNDS & CANVASES
         ===================================================================== */
      .ai2047-live-theme main,
      .ai2047-live-theme .page-speakers {
        background:
          radial-gradient(circle at 15% 12%, rgba(0, 158, 173, 0.18), transparent 34rem),
          radial-gradient(circle at 85% 22%, rgba(0, 105, 184, 0.55), transparent 38rem),
          linear-gradient(180deg, #005A9E 0%, #004780 45%, #003663 100%) !important;
      }

      /* Sticky Header Pill in Deep Sovereign Blue with 1px Signal Teal Border */
      .ai2047-live-theme header nav {
        background: linear-gradient(90deg, rgba(0, 42, 78, 0.92) 0%, rgba(0, 68, 122, 0.90) 50%, rgba(0, 42, 78, 0.92) 100%) !important;
        border-color: rgba(0, 158, 173, 0.55) !important;
        box-shadow: 0 20px 55px rgba(0, 18, 38, 0.55), inset 0 0 24px rgba(0, 158, 173, 0.16) !important;
      }

      /* Hero Background & Video Overlay in Sovereign Blue (#0069B8) */
      .ai2047-live-theme .hero-bg {
        background:
          linear-gradient(180deg, rgba(0, 74, 134, 0.35), #00437A 98%),
          radial-gradient(ellipse at 50% 93%, rgba(0, 158, 173, 0.38), transparent 28%),
          radial-gradient(ellipse at 18% 19%, rgba(0, 105, 184, 0.55), transparent 36%),
          #004A86 !important;
      }

      .ai2047-live-theme .hero-overlay {
        background:
          ${SECTION_HALFTONE_VORTEX_URI} center/920px no-repeat,
          linear-gradient(180deg, rgba(0, 62, 114, 0.35) 0%, rgba(0, 74, 134, 0.72) 65%, rgba(0, 56, 104, 0.94) 100%),
          repeating-linear-gradient(90deg, transparent 0 76px, rgba(0, 158, 173, 0.10) 77px 78px, transparent 79px 119px) !important;
      }

      .ai2047-live-theme .hero-grid-pattern {
        background:
          radial-gradient(ellipse at center, rgba(0, 158, 173, 0.42), transparent 45%),
          repeating-radial-gradient(ellipse at center, transparent 0 12px, rgba(0, 158, 173, 0.25) 13px 14px) !important;
      }

      /* Speakers Hero Overlay in Sovereign Blue */
      .ai2047-live-theme .page-hero-top {
        background-image:
          linear-gradient(90deg, rgba(0, 52, 96, 0.94) 0%, rgba(0, 82, 148, 0.72) 48%, rgba(0, 69, 124, 0.22) 100%),
          url("/mumbai/enterprise/images/speakers/Mumbai-speakers-overview.jpg") !important;
      }
      .ai2047-live-theme .page-hero-top::after {
        background: linear-gradient(to top, #004A86, transparent) !important;
      }

      /* Major Section Canvases -> 80% Sovereign Blue (#0069B8) Spectrum + Halftone Vortex */
      .ai2047-live-theme #attend,
      .ai2047-live-theme #ecosystem,
      .ai2047-live-theme #agenda,
      .ai2047-live-theme #speakers,
      .ai2047-live-theme #networking,
      .ai2047-live-theme #testimonials,
      .ai2047-live-theme #partners,
      .ai2047-live-theme #organizer,
      .ai2047-live-theme #faq,
      .ai2047-live-theme #lineup,
      .ai2047-live-theme #cta {
        background-image:
          ${SECTION_HALFTONE_VORTEX_URI},
          repeating-linear-gradient(90deg, rgba(0, 158, 173, 0.05) 0px, rgba(0, 158, 173, 0.05) 1px, transparent 1px, transparent 56px),
          linear-gradient(180deg, #00589E 0%, #004782 52%, #003B6D 100%) !important;
        background-size: 880px 880px, 56px 56px, 100% 100% !important;
        background-position: right -180px center, center, center !important;
        background-repeat: no-repeat, repeat, no-repeat !important;
        background-color: #004B87 !important;
      }

      /* Alternate odd/even sections slightly within Sovereign Blue for visual rhythm */
      .ai2047-live-theme #ecosystem,
      .ai2047-live-theme #speakers,
      .ai2047-live-theme #testimonials,
      .ai2047-live-theme #organizer,
      .ai2047-live-theme #cta {
        background-image:
          ${SECTION_HALFTONE_VORTEX_URI},
          repeating-linear-gradient(90deg, rgba(0, 158, 173, 0.05) 0px, rgba(0, 158, 173, 0.05) 1px, transparent 1px, transparent 56px),
          linear-gradient(180deg, #004B87 0%, #005EA8 50%, #004278 100%) !important;
        background-position: left -180px center, center, center !important;
      }

      /* Footer in Deep Sovereign Blue */
      .ai2047-live-theme #footer {
        background: linear-gradient(180deg, #003562 0%, #002444 100%) !important;
        border-top: 1px solid rgba(0, 158, 173, 0.45) !important;
      }

      /* Cards & Panels -> Sovereign Blue Glassmorphic Containers with 1px Signal Teal (#009EAD) Borders */
      .ai2047-live-theme #attend article,
      .ai2047-live-theme #attend > div > div.mt-16,
      .ai2047-live-theme #ecosystem article,
      .ai2047-live-theme #agenda article,
      .ai2047-live-theme #networking article,
      .ai2047-live-theme #testimonials article,
      .ai2047-live-theme #organizer > div > div,
      .ai2047-live-theme #faq > div > div,
      .ai2047-live-theme #cta article {
        background: linear-gradient(155deg, rgba(0, 105, 184, 0.65) 0%, rgba(0, 66, 122, 0.88) 55%, rgba(0, 42, 80, 0.95) 100%) !important;
        border: 1px solid rgba(0, 158, 173, 0.58) !important;
        box-shadow: 0 20px 50px rgba(0, 18, 38, 0.42), inset 0 1px 0 rgba(255, 255, 255, 0.18) !important;
      }

      .ai2047-live-theme #attend article:hover,
      .ai2047-live-theme #ecosystem article:hover,
      .ai2047-live-theme #agenda article:hover,
      .ai2047-live-theme #networking article:hover,
      .ai2047-live-theme #cta article:hover {
        border-color: #009EAD !important;
        box-shadow: 0 24px 60px rgba(0, 18, 38, 0.55), 0 0 28px rgba(0, 158, 173, 0.32), inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
      }

      /* Delegate Pass Card & Executive Mandate Callout Banner */
      .ai2047-live-theme #networking .max-w-\\[760px\\] > div,
      .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35,
      .ai2047-live-theme #lineup .rounded-\\[20px\\].border-\\[\\#C0F43C\\]\\/35 {
        background: linear-gradient(135deg, rgba(0, 105, 184, 0.72) 0%, rgba(0, 62, 114, 0.92) 60%, rgba(0, 40, 76, 0.96) 100%) !important;
        border: 1px solid #009EAD !important;
        box-shadow: 0 22px 55px rgba(0, 18, 38, 0.48), 0 0 32px rgba(0, 158, 173, 0.22) !important;
      }

      /* =====================================================================
         2. 15% SECONDARY SIGNAL TEAL (#009EAD) — GRADIENT TEXT, BORDERS & PILLS
         ===================================================================== */
      .ai2047-live-theme .bg-clip-text.text-transparent {
        background-image: linear-gradient(90deg, #9BF2FA 0%, #38D8E6 48%, #009EAD 100%) !important;
      }

      /* Remap Lime Green (#C0F43C) Text Accents to Luminous Signal Teal / Pulse Orange */
      .ai2047-live-theme .text-\\[\\#C0F43C\\],
      .ai2047-live-theme .text-\\[\\#c0f43c\\] {
        color: #7CE8F2 !important;
      }

      /* Active Nav Item in Header -> Pulse Orange (#F15928) */
      .ai2047-live-theme header nav a.text-\\[\\#c0f43c\\] {
        color: #F15928 !important;
      }
      .ai2047-live-theme header nav span.bg-\\[\\#c0f43c\\] {
        background-color: #F15928 !important;
      }

      /* Stats Big Numbers -> Crisp White / Luminous Signal Teal */
      .ai2047-live-theme #attend strong.text-\\[\\#C0F43C\\] {
        color: #7CE8F2 !important;
      }

      /* Telemetry Progress Bars -> Signal Teal (#009EAD) & Pulse Orange (#F15928) */
      .ai2047-live-theme #ecosystem .h-2\\.5 > div:first-child {
        background: linear-gradient(90deg, #0069B8 0%, #009EAD 65%, #7CE8F2 100%) !important;
        box-shadow: 0 0 14px rgba(0, 158, 173, 0.65) !important;
      }

      /* Secondary Outline Buttons -> Signal Teal (#009EAD) Border */
      .ai2047-live-theme a[class*="border-[#4eb9ff]"],
      .ai2047-live-theme a[class*="border-white/25"] {
        border: 1.5px solid #009EAD !important;
        background-color: rgba(0, 46, 86, 0.55) !important;
        color: #FFFFFF !important;
        box-shadow: 0 0 20px rgba(0, 158, 173, 0.22) !important;
      }
      .ai2047-live-theme a[class*="border-[#4eb9ff]"]:hover,
      .ai2047-live-theme a[class*="border-white/25"]:hover {
        background-color: rgba(0, 158, 173, 0.25) !important;
        border-color: #7CE8F2 !important;
      }

      /* =====================================================================
         3. 05% TERTIARY PULSE ORANGE (#F15928) — HIGH-CONVERSION PRIMARY CTAS
         ===================================================================== */
      .ai2047-live-theme a[class*="bg-[#C0F43C]"],
      .ai2047-live-theme a[class*="bg-[#c0f43c]"],
      .ai2047-live-theme button[class*="bg-[#C0F43C]"],
      .ai2047-live-theme a[class*="bg-[#18d4ff]"] {
        background-color: #F15928 !important;
        color: #FFFFFF !important;
        border-color: #F15928 !important;
        box-shadow: 0 8px 26px rgba(241, 89, 40, 0.42) !important;
      }

      .ai2047-live-theme a[class*="bg-[#C0F43C]"]:hover,
      .ai2047-live-theme a[class*="bg-[#c0f43c]"]:hover,
      .ai2047-live-theme a[class*="bg-[#18d4ff]"]:hover {
        background-color: #FF6B3B !important;
        box-shadow: 0 12px 34px rgba(241, 89, 40, 0.58) !important;
      }

      .ai2047-live-theme a[class*="bg-[#C0F43C]"] svg,
      .ai2047-live-theme a[class*="bg-[#C0F43C]"] span,
      .ai2047-live-theme a[class*="bg-[#18d4ff]"] svg,
      .ai2047-live-theme a[class*="bg-[#18d4ff]"] span {
        color: #FFFFFF !important;
      }

      /* Footer Social Icons -> Signal Teal Border with Pulse Orange Hover */
      .ai2047-live-theme #footer a[class*="border-[#C0F43C]"] {
        border-color: #009EAD !important;
        color: #7CE8F2 !important;
        box-shadow: 0 0 14px rgba(0, 158, 173, 0.25) !important;
      }
      .ai2047-live-theme #footer a[class*="border-[#C0F43C]"]:hover {
        border-color: #F15928 !important;
        background-color: #F15928 !important;
        color: #FFFFFF !important;
      }

      /* =====================================================================
         4. SPEAKER CARD TREATMENT (CONCEPT 2 — NEURAL DATA FLOW PORTRAITS)
         ===================================================================== */
      .ai2047-live-theme .speaker-card-inner {
        background: #01040B !important;
        border: 1px solid #009EAD !important;
        box-shadow:
          0 18px 42px rgba(0, 12, 28, 0.65),
          0 0 22px rgba(0, 158, 173, 0.28),
          inset 0 1px 0 rgba(255, 255, 255, 0.18) !important;
      }

      .ai2047-live-theme .speaker-card-inner:hover {
        border-color: #7CE8F2 !important;
        box-shadow:
          0 22px 52px rgba(0, 12, 28, 0.78),
          0 0 32px rgba(0, 158, 173, 0.48),
          inset 0 1px 0 rgba(255, 255, 255, 0.28) !important;
      }

      .ai2047-live-theme .speaker-card-inner > img {
        position: relative;
        z-index: 2;
        opacity: 1 !important;
      }

      /* Subtle bottom vignette only under the text label so the neural chest streams stay bright */
      .ai2047-live-theme .speaker-card-inner::after {
        background: linear-gradient(
          to top,
          rgba(1, 6, 16, 0.88) 0%,
          rgba(1, 8, 22, 0.25) 28%,
          transparent 55%
        ) !important;
        z-index: 3 !important;
      }

      .ai2047-live-theme .speaker-card-inner > div {
        z-index: 10 !important;
      }

      .ai2047-live-theme .speaker-card-inner .speaker-line {
        background-color: #009EAD !important;
      }
      .ai2047-live-theme .speaker-card-inner:hover .speaker-line {
        width: 56px !important;
        background-color: #F15928 !important;
      }
    `}</style>
  );
}
