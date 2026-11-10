import React from "react";

/**
 * AI MUMBAI | AI 2047 — SCOPED COLOR & MOTIF OVERRIDE FOR LIVE DESIGN
 * -------------------------------------------------------------------
 * Keeps the exact same layout, components, and structure as the live homepage
 * and live speakers page, while applying:
 * - Dark Blue (#08121e) primary dark sections
 * - White (#FFFFFF / #F8FAFC) alternating sections
 * - Brand Book Accents: Sovereign Blue (#0069B8), Signal Teal (#009EAD), Pulse Orange (#F15928)
 * - Concept 2 Cybernetic Neural Data Flow portraits in the Speakers section
 */

const SECTION_HALFTONE_DARK_URI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 900' fill='none'%3E%3Cg transform='translate(450,450) rotate(-14) scale(1,0.84)' opacity='0.07'%3E%3Ccircle cx='0' cy='0' r='120' stroke='%23009EAD' stroke-width='6' stroke-linecap='round' stroke-dasharray='2 20'/%3E%3Ccircle cx='0' cy='0' r='175' stroke='%230069B8' stroke-width='5.5' stroke-linecap='round' stroke-dasharray='2 22'/%3E%3Ccircle cx='0' cy='0' r='230' stroke='%23009EAD' stroke-width='5' stroke-linecap='round' stroke-dasharray='2 24'/%3E%3Ccircle cx='0' cy='0' r='285' stroke='%230069B8' stroke-width='4.5' stroke-linecap='round' stroke-dasharray='2 26'/%3E%3Ccircle cx='0' cy='0' r='340' stroke='%23009EAD' stroke-width='4' stroke-linecap='round' stroke-dasharray='2 28'/%3E%3Ccircle cx='0' cy='0' r='395' stroke='%230069B8' stroke-width='3.5' stroke-linecap='round' stroke-dasharray='2 30'/%3E%3C/g%3E%3C/svg%3E")`;

const SECTION_HALFTONE_LIGHT_URI = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 900' fill='none'%3E%3Cg transform='translate(450,450) rotate(-14) scale(1,0.84)' opacity='0.055'%3E%3Ccircle cx='0' cy='0' r='120' stroke='%230069B8' stroke-width='6' stroke-linecap='round' stroke-dasharray='2 20'/%3E%3Ccircle cx='0' cy='0' r='175' stroke='%23009EAD' stroke-width='5.5' stroke-linecap='round' stroke-dasharray='2 22'/%3E%3Ccircle cx='0' cy='0' r='230' stroke='%230069B8' stroke-width='5' stroke-linecap='round' stroke-dasharray='2 24'/%3E%3Ccircle cx='0' cy='0' r='285' stroke='%23009EAD' stroke-width='4.5' stroke-linecap='round' stroke-dasharray='2 26'/%3E%3Ccircle cx='0' cy='0' r='340' stroke='%230069B8' stroke-width='4' stroke-linecap='round' stroke-dasharray='2 28'/%3E%3Ccircle cx='0' cy='0' r='395' stroke='%23009EAD' stroke-width='3.5' stroke-linecap='round' stroke-dasharray='2 30'/%3E%3C/g%3E%3C/svg%3E")`;

export function AiMumbaiLiveThemeStyles() {
  return (
    <style>{`
      .ai2047-live-theme {
        --bg: #08121e;
        --panel: #0d1d31;
        --panel-soft: #122640;
        --line: rgba(0, 158, 173, 0.35);
        --line-green: rgba(241, 89, 40, 0.55);
        --text: #FFFFFF;
        --muted: #CBD5E1;
        --dim: #94A3B8;
        --cyan: #009EAD;
        --blue: #0069B8;
        --green: #F15928;

        --color-bg: #08121e;
        --color-panel: #0d1d31;
        --color-panel-soft: #122640;
        --color-line: rgba(0, 158, 173, 0.35);
        --color-line-green: rgba(241, 89, 40, 0.55);
        --color-text: #FFFFFF;
        --color-muted: #CBD5E1;
        --color-dim: #94A3B8;
        --color-cyan: #009EAD;
        --color-blue: #0069B8;
        --color-green: #F15928;
      }

      /* =====================================================================
         1. BASE CANVAS & STICKY HEADER IN #08121e DARK BLUE
         ===================================================================== */
      .ai2047-live-theme main,
      .ai2047-live-theme .page-speakers {
        background-color: #08121e !important;
      }

      .ai2047-live-theme header nav {
        background: rgba(8, 18, 30, 0.92) !important;
        border-color: rgba(0, 158, 173, 0.45) !important;
        box-shadow: 0 20px 55px rgba(0, 0, 0, 0.55), inset 0 0 24px rgba(0, 105, 184, 0.16) !important;
      }

      /* Active Nav Item in Header -> Pulse Orange (#F15928) */
      .ai2047-live-theme header nav a.text-\\[\\#c0f43c\\] {
        color: #F15928 !important;
      }
      .ai2047-live-theme header nav span.bg-\\[\\#c0f43c\\] {
        background-color: #F15928 !important;
      }

      /* =====================================================================
         2. DARK BLUE (#08121e) SECTIONS:
            - Hero (#home / .page-hero-top)
            - Ecosystem (#ecosystem)
            - Speakers (#speakers / #lineup)
            - Testimonials (#testimonials)
            - Organizer (#organizer)
            - Footer (#footer / #cta)
         ===================================================================== */
      .ai2047-live-theme .hero-bg {
        background:
          linear-gradient(180deg, rgba(8, 18, 30, 0.25), #08121e 98%),
          radial-gradient(ellipse at 50% 93%, rgba(0, 158, 173, 0.28), transparent 28%),
          radial-gradient(ellipse at 18% 19%, rgba(0, 105, 184, 0.35), transparent 36%),
          #08121e !important;
      }

      .ai2047-live-theme .hero-overlay {
        background:
          ${SECTION_HALFTONE_DARK_URI} center/920px no-repeat,
          linear-gradient(180deg, rgba(8, 18, 30, 0.32) 0%, rgba(8, 18, 30, 0.76) 72%, #08121e 100%),
          repeating-linear-gradient(90deg, transparent 0 76px, rgba(0, 158, 173, 0.07) 77px 78px, transparent 79px 119px) !important;
      }

      .ai2047-live-theme .hero-grid-pattern {
        background:
          radial-gradient(ellipse at center, rgba(0, 158, 173, 0.35), transparent 45%),
          repeating-radial-gradient(ellipse at center, transparent 0 12px, rgba(0, 105, 184, 0.24) 13px 14px) !important;
      }

      .ai2047-live-theme .page-hero-top {
        background-image:
          linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.72) 48%, rgba(8, 18, 30, 0.2) 100%),
          url("/mumbai/enterprise/images/speakers/Mumbai-speakers-overview.jpg") !important;
      }
      .ai2047-live-theme .page-hero-top::after {
        background: linear-gradient(to top, #08121e, transparent) !important;
      }

      .ai2047-live-theme #ecosystem,
      .ai2047-live-theme #speakers,
      .ai2047-live-theme #testimonials,
      .ai2047-live-theme #organizer,
      .ai2047-live-theme #lineup,
      .ai2047-live-theme #cta {
        background-image:
          ${SECTION_HALFTONE_DARK_URI},
          radial-gradient(circle at 18% 20%, rgba(0, 105, 184, 0.18), transparent 36rem),
          radial-gradient(circle at 82% 80%, rgba(0, 158, 173, 0.12), transparent 34rem),
          linear-gradient(180deg, #08121e 0%, #0a1726 50%, #08121e 100%) !important;
        background-size: 880px 880px, 100% 100%, 100% 100%, 100% 100% !important;
        background-position: right -180px center, center, center, center !important;
        background-repeat: no-repeat !important;
        background-color: #08121e !important;
      }

      .ai2047-live-theme #footer {
        background: #08121e !important;
        border-top: 1px solid rgba(0, 158, 173, 0.35) !important;
      }

      /* Cards inside Dark Blue (#08121e) Sections */
      .ai2047-live-theme #ecosystem article,
      .ai2047-live-theme #testimonials article,
      .ai2047-live-theme #organizer > div > div,
      .ai2047-live-theme #cta article {
        background: linear-gradient(155deg, rgba(14, 31, 52, 0.92) 0%, rgba(8, 18, 30, 0.96) 100%) !important;
        border: 1px solid rgba(0, 158, 173, 0.45) !important;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
      }

      .ai2047-live-theme #ecosystem article:hover,
      .ai2047-live-theme #cta article:hover {
        border-color: #009EAD !important;
        box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 28px rgba(0, 158, 173, 0.25) !important;
      }

      .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35,
      .ai2047-live-theme #lineup .rounded-\\[20px\\].border-\\[\\#C0F43C\\]\\/35 {
        background: linear-gradient(135deg, rgba(0, 105, 184, 0.28) 0%, rgba(13, 29, 49, 0.95) 60%, rgba(8, 18, 30, 0.98) 100%) !important;
        border: 1px solid #009EAD !important;
        box-shadow: 0 22px 55px rgba(0, 0, 0, 0.48), 0 0 28px rgba(0, 158, 173, 0.18) !important;
      }

      /* =====================================================================
         3. ALTERNATING WHITE (#FFFFFF / #F8FAFC) SECTIONS:
            - Stats (#attend)
            - Agenda (#agenda)
            - Networking (#networking)
            - Sponsors (#partners)
            - FAQ (#faq)
         ===================================================================== */
      .ai2047-live-theme #attend,
      .ai2047-live-theme #agenda,
      .ai2047-live-theme #networking,
      .ai2047-live-theme #partners,
      .ai2047-live-theme #faq {
        background-image:
          ${SECTION_HALFTONE_LIGHT_URI},
          linear-gradient(180deg, #FFFFFF 0%, #F4F8FC 100%) !important;
        background-size: 860px 860px, 100% 100% !important;
        background-position: left -180px center, center !important;
        background-repeat: no-repeat !important;
        background-color: #FFFFFF !important;
        color: #08121e !important;
        border-top: 1px solid rgba(0, 105, 184, 0.12) !important;
        border-bottom: 1px solid rgba(0, 105, 184, 0.12) !important;
      }

      /* Headings & Typography inside White Sections -> Deep #08121e */
      .ai2047-live-theme #attend h2,
      .ai2047-live-theme #attend h3,
      .ai2047-live-theme #agenda h2,
      .ai2047-live-theme #agenda h3,
      .ai2047-live-theme #networking h2,
      .ai2047-live-theme #networking h3,
      .ai2047-live-theme #networking h4,
      .ai2047-live-theme #partners h2,
      .ai2047-live-theme #partners h3,
      .ai2047-live-theme #faq h2 {
        color: #08121e !important;
      }

      /* GradientText inside White Sections -> Rich Sovereign Blue (#0069B8) to Signal Teal (#009EAD) */
      .ai2047-live-theme #attend .bg-clip-text.text-transparent,
      .ai2047-live-theme #agenda .bg-clip-text.text-transparent,
      .ai2047-live-theme #networking .bg-clip-text.text-transparent,
      .ai2047-live-theme #partners .bg-clip-text.text-transparent,
      .ai2047-live-theme #faq .bg-clip-text.text-transparent {
        background-image: linear-gradient(90deg, #0069B8 0%, #009EAD 100%) !important;
      }

      /* Body & Muted Copy inside White Sections */
      .ai2047-live-theme #attend p,
      .ai2047-live-theme #agenda p,
      .ai2047-live-theme #networking p,
      .ai2047-live-theme #partners p,
      .ai2047-live-theme #faq p {
        color: #334155 !important;
      }

      /* --- Section: #attend (Stats + Our Reach + Series Highlights) on White --- */
      .ai2047-live-theme #attend article {
        background: linear-gradient(155deg, #FFFFFF 0%, #F1F7FC 100%) !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 14px 34px rgba(8, 18, 30, 0.07) !important;
      }
      .ai2047-live-theme #attend article:hover {
        border-color: #009EAD !important;
        box-shadow: 0 18px 42px rgba(0, 105, 184, 0.15) !important;
      }
      .ai2047-live-theme #attend article div.rounded-full {
        background-color: #08121e !important;
        box-shadow: 0 4px 14px rgba(8, 18, 30, 0.2) !important;
      }
      .ai2047-live-theme #attend article span.absolute {
        color: #64748B !important;
      }
      .ai2047-live-theme #attend article strong {
        color: #0069B8 !important;
      }
      .ai2047-live-theme #attend article p {
        color: #08121e !important;
      }

      /* Our Reach & Series Highlights Panel inside #attend */
      .ai2047-live-theme #attend > div > div.mt-16 {
        background: #F4F8FC !important;
        border: 1px solid rgba(0, 105, 184, 0.18) !important;
        box-shadow: 0 20px 50px rgba(8, 18, 30, 0.06) !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 div.rounded-2xl {
        background: #FFFFFF !important;
        border: 1px solid rgba(0, 105, 184, 0.16) !important;
        box-shadow: 0 6px 20px rgba(8, 18, 30, 0.04) !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 div.rounded-2xl:hover {
        border-color: #009EAD !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 strong {
        color: #0069B8 !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 span {
        color: #334155 !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 div.h-\\[1px\\] {
        background: linear-gradient(90deg, transparent, rgba(0, 105, 184, 0.25), transparent) !important;
      }

      /* --- Section: #agenda (5 Talking Points) on White --- */
      .ai2047-live-theme #agenda article {
        background: #FFFFFF !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 14px 36px rgba(8, 18, 30, 0.07) !important;
      }
      .ai2047-live-theme #agenda article:hover {
        border-color: #0069B8 !important;
        box-shadow: 0 20px 44px rgba(0, 105, 184, 0.15) !important;
      }
      .ai2047-live-theme #agenda article span.w-\\[48px\\] {
        background-color: #08121e !important;
        border-color: #0069B8 !important;
        color: #38D8E6 !important;
      }
      .ai2047-live-theme #agenda article span.rounded-full {
        background-color: rgba(0, 105, 184, 0.1) !important;
        border-color: rgba(0, 105, 184, 0.28) !important;
        color: #0069B8 !important;
      }

      /* --- Section: #networking (Buying Unit + Industries + Delegate Pass) on White --- */
      .ai2047-live-theme #networking article {
        background: #FFFFFF !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 12px 32px rgba(8, 18, 30, 0.06) !important;
      }
      .ai2047-live-theme #networking article:hover {
        border-color: #0069B8 !important;
        box-shadow: 0 18px 40px rgba(0, 105, 184, 0.14) !important;
      }
      .ai2047-live-theme #networking article span.font-mono {
        color: #0069B8 !important;
        font-weight: 700 !important;
      }
      .ai2047-live-theme #networking article strong {
        color: #08121e !important;
      }
      .ai2047-live-theme #networking article span.w-10.h-10 {
        background-color: #08121e !important;
        border-color: #0069B8 !important;
      }
      .ai2047-live-theme #networking .border-t.border-white\\/10 {
        border-color: rgba(0, 105, 184, 0.16) !important;
      }
      .ai2047-live-theme #networking .max-w-\\[760px\\] > div {
        background: linear-gradient(145deg, #08121e 0%, #0e2238 100%) !important;
        border: 1.5px solid #009EAD !important;
        box-shadow: 0 24px 55px rgba(8, 18, 30, 0.22) !important;
      }
      .ai2047-live-theme #networking .max-w-\\[760px\\] > div h4 {
        color: #FFFFFF !important;
      }
      .ai2047-live-theme #networking .max-w-\\[760px\\] > div p {
        color: #CBD5E1 !important;
      }

      /* --- Section: #partners (Sponsors) on White --- */
      .ai2047-live-theme #partners span.bg-white {
        border: 1px solid rgba(0, 105, 184, 0.18) !important;
        box-shadow: 0 8px 24px rgba(8, 18, 30, 0.06) !important;
      }

      /* --- Section: #faq (Frequently Asked Questions) on White --- */
      .ai2047-live-theme #faq > div > div {
        background: #FFFFFF !important;
        border: 1px solid rgba(0, 105, 184, 0.2) !important;
        box-shadow: 0 18px 48px rgba(8, 18, 30, 0.07) !important;
      }
      .ai2047-live-theme #faq details {
        border-color: rgba(0, 105, 184, 0.16) !important;
      }
      .ai2047-live-theme #faq details summary span {
        color: #0069B8 !important;
        font-weight: 700 !important;
      }
      .ai2047-live-theme #faq details summary strong {
        color: #08121e !important;
      }
      .ai2047-live-theme #faq details[open] summary strong {
        color: #0069B8 !important;
      }
      .ai2047-live-theme #faq details summary i {
        color: #0069B8 !important;
      }

      /* =====================================================================
         4. GRADIENT TEXT & ACCENTS IN DARK SECTIONS (#08121e)
         ===================================================================== */
      .ai2047-live-theme .bg-clip-text.text-transparent {
        background-image: linear-gradient(90deg, #7CE8F2 0%, #009EAD 52%, #38B6FF 100%) !important;
      }

      .ai2047-live-theme .text-\\[\\#C0F43C\\],
      .ai2047-live-theme .text-\\[\\#c0f43c\\] {
        color: #38D8E6 !important;
      }

      .ai2047-live-theme #ecosystem .h-2\\.5 > div:first-child {
        background: linear-gradient(90deg, #0069B8 0%, #009EAD 65%, #7CE8F2 100%) !important;
        box-shadow: 0 0 14px rgba(0, 158, 173, 0.65) !important;
      }

      /* Secondary Outline Buttons -> Signal Teal (#009EAD) Border */
      .ai2047-live-theme a[class*="border-[#4eb9ff]"],
      .ai2047-live-theme a[class*="border-white/25"] {
        border: 1.5px solid #009EAD !important;
        background-color: rgba(8, 18, 30, 0.65) !important;
        color: #FFFFFF !important;
        box-shadow: 0 0 20px rgba(0, 158, 173, 0.22) !important;
      }
      .ai2047-live-theme a[class*="border-[#4eb9ff]"]:hover,
      .ai2047-live-theme a[class*="border-white/25"]:hover {
        background-color: rgba(0, 158, 173, 0.25) !important;
        border-color: #7CE8F2 !important;
      }

      /* =====================================================================
         5. PULSE ORANGE (#F15928) — HIGH-CONVERSION PRIMARY CTAS
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

      /* Footer Social Icons */
      .ai2047-live-theme #footer a[class*="border-[#C0F43C]"] {
        border-color: #009EAD !important;
        color: #38D8E6 !important;
        box-shadow: 0 0 14px rgba(0, 158, 173, 0.25) !important;
      }
      .ai2047-live-theme #footer a[class*="border-[#C0F43C]"]:hover {
        border-color: #F15928 !important;
        background-color: #F15928 !important;
        color: #FFFFFF !important;
      }

      /* =====================================================================
         6. SPEAKER CARD TREATMENT (CONCEPT 2 — NEURAL DATA FLOW PORTRAITS)
         ===================================================================== */
      .ai2047-live-theme .speaker-card-inner {
        background: #01040B !important;
        border: 1px solid #009EAD !important;
        box-shadow:
          0 18px 42px rgba(0, 0, 0, 0.65),
          0 0 22px rgba(0, 158, 173, 0.26),
          inset 0 1px 0 rgba(255, 255, 255, 0.16) !important;
      }

      .ai2047-live-theme .speaker-card-inner:hover {
        border-color: #7CE8F2 !important;
        box-shadow:
          0 22px 52px rgba(0, 0, 0, 0.78),
          0 0 32px rgba(0, 158, 173, 0.48),
          inset 0 1px 0 rgba(255, 255, 255, 0.28) !important;
      }

      .ai2047-live-theme .speaker-card-inner > img {
        position: relative;
        z-index: 2;
        opacity: 1 !important;
      }

      .ai2047-live-theme .speaker-card-inner::after {
        background: linear-gradient(
          to top,
          rgba(8, 18, 30, 0.92) 0%,
          rgba(8, 18, 30, 0.25) 28%,
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
