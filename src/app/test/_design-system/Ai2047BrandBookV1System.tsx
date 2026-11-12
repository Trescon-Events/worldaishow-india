import React from "react";

/**
 * AI 2047 — STRICT BRAND BOOK V1.0 DESIGN SYSTEM (.ai2047-brandbook-v1)
 * ---------------------------------------------------------------------
 * Implements the AI 2047-BrandBook_V1.0 (1).pdf specification in an isolated
 * preview scope (.ai2047-brandbook-v1) without touching live pages:
 *
 * 1. Official 80 / 15 / 05 Color Hierarchy (Pages 18–26):
 *    - Sovereign Blue (#0069B8) — 80% Dominant Brand Anchor
 *    - Signal Teal (#009EAD)    — 15% Data/Telemetry Support
 *    - Pulse Orange (#F15928)   — 5% High-Conversion CTA & Focal Accent (strictly pure #FFFFFF text)
 *    - Cloud White (#F7F9FC)    — Official Neutral Light Base + #FFFFFF Elevated Cards
 *    - Midnight Core (#08121E)  — Official Neutral Dark Base + #0D1B2E Elevated Dark Panels
 *
 * 2. Clean Solid Section Surfaces (all decorative background motifs & ambient grids removed)
 * 3. Zero sequence/index numbers on cards
 * 4. Pure White (#FFFFFF) text & icons on all Pulse Orange (#F15928) backgrounds/CTAs
 * 5. Unified interactive hover effect (sheen sweep + magnetic lift + halo + arrow glide) across ALL CTAs
 */
export function Ai2047BrandBookV1Styles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');

      /* =====================================================================
         TAILWIND V4 CASCADE OVERRIDE (@layer base !important > @layer utilities !important)
         Guarantees pure #FFFFFF text & icons on every #F15928 orange background/CTA,
         overriding Tailwind v4's !text-black and [color:#06111f!important] utilities.
         ===================================================================== */
      @layer base {
        .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"],
        .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"],
        .ai2047-brandbook-v1 button[class*="bg-[#C0F43C]"],
        .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"],
        .ai2047-brandbook-v1 [class*="bg-[#F15928]"],
        .ai2047-brandbook-v1 .bb-cta-primary,
        .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a[href*="sponsorship-enquiry"],
        .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"] {
          background-color: #F15928 !important;
          border-color: #F15928 !important;
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }

        .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"] span,
        .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"] svg,
        .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"] span,
        .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"] svg,
        .ai2047-brandbook-v1 button[class*="bg-[#C0F43C]"] span,
        .ai2047-brandbook-v1 button[class*="bg-[#C0F43C]"] svg,
        .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"] span,
        .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"] svg,
        .ai2047-brandbook-v1 [class*="bg-[#F15928]"] span,
        .ai2047-brandbook-v1 [class*="bg-[#F15928]"] svg,
        .ai2047-brandbook-v1 .bb-cta-primary span,
        .ai2047-brandbook-v1 .bb-cta-primary svg,
        .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a[href*="sponsorship-enquiry"] span,
        .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a[href*="sponsorship-enquiry"] svg,
        .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"] span,
        .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"] svg {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }

        .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"]:hover,
        .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"]:hover,
        .ai2047-brandbook-v1 button[class*="bg-[#C0F43C]"]:hover,
        .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"]:hover,
        .ai2047-brandbook-v1 .bb-cta-primary:hover,
        .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a[href*="sponsorship-enquiry"]:hover,
        .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"]:hover {
          background-color: #D9481A !important;
          border-color: #D9481A !important;
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }

        .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"]:hover,
        .ai2047-brandbook-v1 a[class*="border-white/25"]:hover,
        .ai2047-brandbook-v1 .bb-cta-secondary:hover,
        .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"]:hover span,
        .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"]:hover svg,
        .ai2047-brandbook-v1 a[class*="border-white/25"]:hover span,
        .ai2047-brandbook-v1 a[class*="border-white/25"]:hover svg,
        .ai2047-brandbook-v1 .bb-cta-secondary:hover span,
        .ai2047-brandbook-v1 .bb-cta-secondary:hover svg {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
        }
      }

      .ai2047-brandbook-v1 {
        --bb-sovereign-blue: #0069B8;
        --bb-signal-teal: #009EAD;
        --bb-pulse-orange: #F15928;
        --bb-cloud-white: #F7F9FC;
        --bb-midnight-core: #08121E;
        --bb-midnight-elevated: #0D1B2E;
        --bb-pure-white: #FFFFFF;

        --bg: #F7F9FC;
        --panel: #FFFFFF;
        --panel-soft: #F7F9FC;
        --line: rgba(0, 105, 184, 0.20);
        --line-green: rgba(241, 89, 40, 0.55);
        --text: #08121E;
        --muted: #334155;
        --dim: #52657A;
        --cyan: #009EAD;
        --blue: #0069B8;
        --green: #F15928;

        --color-bg: #F7F9FC;
        --color-panel: #FFFFFF;
        --color-panel-soft: #F7F9FC;
        --color-line: rgba(0, 105, 184, 0.20);
        --color-line-green: rgba(241, 89, 40, 0.55);
        --color-text: #08121E;
        --color-muted: #334155;
        --color-dim: #52657A;
        --color-cyan: #009EAD;
        --color-blue: #0069B8;
        --color-green: #F15928;

        font-family: 'Plus Jakarta Sans', sans-serif !important;
        color: #08121E;
        background-color: #F7F9FC;
      }

      /* =====================================================================
         1. LOGO SYSTEM: CLEAR SPACE, MIN-WIDTH >= 64PX & ZERO EFFECTS (PAGES 10–17)
         ===================================================================== */
      .ai2047-brandbook-v1 img[src*="wais-27-enterprise"] {
        opacity: 0 !important;
      }

      .ai2047-brandbook-v1 header nav > a:first-child {
        width: 176px !important;
        min-width: 64px !important;
        height: 56px !important;
      }
      .ai2047-brandbook-v1 header nav > a:first-child img {
        min-width: 64px !important;
        object-fit: contain !important;
        object-position: left center !important;
        filter: none !important;
        box-shadow: none !important;
      }

      .ai2047-brandbook-v1 #home .container > div:first-child img {
        width: auto !important;
        height: auto !important;
        min-width: 64px !important;
        max-width: 320px !important;
        max-height: 152px !important;
        filter: none !important;
        box-shadow: none !important;
      }
      @media (max-width: 640px) {
        .ai2047-brandbook-v1 #home .container > div:first-child img {
          max-width: 236px !important;
          max-height: 116px !important;
        }
      }

      .ai2047-brandbook-v1 #footer img[data-brandbook-logo="footer"] {
        width: auto !important;
        height: auto !important;
        min-width: 64px !important;
        max-width: 212px !important;
        max-height: 96px !important;
        object-position: left center !important;
        filter: none !important;
        box-shadow: none !important;
      }

      /* =====================================================================
         2. 12-COLUMN 1200PX CONTAINER GRID & 4PX SPACING RHYTHM (PAGES 52–55)
         ===================================================================== */
      .ai2047-brandbook-v1 section > div[class*="1180px"],
      .ai2047-brandbook-v1 section > div[class*="1140px"],
      .ai2047-brandbook-v1 #footer > div[class*="1180px"] {
        width: min(1200px, calc(100% - 48px)) !important;
      }
      @media (max-width: 640px) {
        .ai2047-brandbook-v1 section > div[class*="1180px"],
        .ai2047-brandbook-v1 section > div[class*="1140px"],
        .ai2047-brandbook-v1 #footer > div[class*="1180px"] {
          width: calc(100% - 32px) !important;
        }
      }

      /* =====================================================================
         3. 1.200 MODULAR TYPOGRAPHIC SYSTEM (PAGES 27–33)
         ===================================================================== */
      .ai2047-brandbook-v1 h1,
      .ai2047-brandbook-v1 h2,
      .ai2047-brandbook-v1 h3,
      .ai2047-brandbook-v1 h4,
      .ai2047-brandbook-v1 h5,
      .ai2047-brandbook-v1 .hero-bg strong,
      .ai2047-brandbook-v1 #attend article strong,
      .ai2047-brandbook-v1 #attend > div > div.mt-16 strong {
        font-family: 'Space Grotesk', sans-serif !important;
        letter-spacing: -0.01em !important;
      }

      .ai2047-brandbook-v1 h1 {
        font-size: clamp(36px, 4.5vw, 57px) !important;
        line-height: 1.15 !important;
        font-weight: 700 !important;
      }

      .ai2047-brandbook-v1 h2 {
        font-size: clamp(30px, 3.8vw, 48px) !important;
        line-height: 1.2 !important;
        font-weight: 600 !important;
      }

      .ai2047-brandbook-v1 h3 {
        font-size: clamp(26px, 3vw, 40px) !important;
        line-height: 1.2 !important;
        font-weight: 600 !important;
      }

      .ai2047-brandbook-v1 h4,
      .ai2047-brandbook-v1 #attend > div > div.mt-16 h3 {
        font-size: clamp(22px, 2.4vw, 33px) !important;
        line-height: 1.25 !important;
        font-weight: 500 !important;
      }

      .ai2047-brandbook-v1 h5,
      .ai2047-brandbook-v1 #ecosystem article h3,
      .ai2047-brandbook-v1 #agenda article h3,
      .ai2047-brandbook-v1 #networking article h3,
      .ai2047-brandbook-v1 #networking .max-w-\\[760px\\] h4,
      .ai2047-brandbook-v1 #lineup .rounded-\\[20px\\] h3,
      .ai2047-brandbook-v1 #cta article h3 {
        font-size: clamp(20px, 2vw, 27px) !important;
        line-height: 1.3 !important;
        font-weight: 500 !important;
      }

      .ai2047-brandbook-v1 #footer h3 {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: 12px !important;
        line-height: 1.6 !important;
        font-weight: 700 !important;
        letter-spacing: 0.2em !important;
      }

      .ai2047-brandbook-v1 p,
      .ai2047-brandbook-v1 li,
      .ai2047-brandbook-v1 dd,
      .ai2047-brandbook-v1 summary,
      .ai2047-brandbook-v1 input,
      .ai2047-brandbook-v1 blockquote,
      .ai2047-brandbook-v1 a,
      .ai2047-brandbook-v1 button {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        letter-spacing: 0 !important;
      }

      .ai2047-brandbook-v1 #home .container > p {
        font-size: clamp(18px, 1.8vw, 23px) !important;
        line-height: 1.35 !important;
        font-weight: 500 !important;
      }

      .ai2047-brandbook-v1 #ecosystem > div > div.text-center > p:first-of-type,
      .ai2047-brandbook-v1 #ecosystem > div > p,
      .ai2047-brandbook-v1 #agenda > div > p,
      .ai2047-brandbook-v1 #networking > div > div.flex > div > p,
      .ai2047-brandbook-v1 #organizer p {
        font-size: clamp(16px, 1.5vw, 19px) !important;
        line-height: 1.45 !important;
        font-weight: 400 !important;
      }

      .ai2047-brandbook-v1 article p,
      .ai2047-brandbook-v1 #faq details p,
      .ai2047-brandbook-v1 #networking .max-w-\\[760px\\] p,
      .ai2047-brandbook-v1 #lineup p,
      .ai2047-brandbook-v1 #cta p {
        font-size: 16px !important;
        line-height: 1.5 !important;
        font-weight: 400 !important;
      }

      .ai2047-brandbook-v1 .font-mono,
      .ai2047-brandbook-v1 #home .grid span.uppercase,
      .ai2047-brandbook-v1 #ecosystem > div > div.text-center > p:last-of-type {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: 12px !important;
        line-height: 1.6 !important;
        font-weight: 400 !important;
      }

      /* =====================================================================
         4. STICKY HEADER (FROSTED CLOUD WHITE #F7F9FC + SOVEREIGN BLUE BORDER)
         ===================================================================== */
      .ai2047-brandbook-v1 main,
      .ai2047-brandbook-v1 .page-speakers {
        background-color: #F7F9FC !important;
        color: #08121E !important;
      }

      .ai2047-brandbook-v1 header nav[aria-label="Primary navigation"] {
        background: rgba(247, 249, 252, 0.96) !important;
        backdrop-filter: blur(12px) !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 14px 36px rgba(8, 18, 30, 0.12) !important;
      }

      .ai2047-brandbook-v1 header nav[aria-label="Primary navigation"] .uppercase a:not([class*="bg-[#C0F43C]"]) {
        color: #08121E !important;
        font-weight: 600 !important;
      }
      .ai2047-brandbook-v1 header nav[aria-label="Primary navigation"] .uppercase a:not([class*="bg-[#C0F43C]"]):hover {
        color: #0069B8 !important;
      }

      .ai2047-brandbook-v1 header nav[aria-label="Primary navigation"] a.text-\\[\\#c0f43c\\] {
        color: #F15928 !important;
      }
      .ai2047-brandbook-v1 header nav[aria-label="Primary navigation"] span.bg-\\[\\#c0f43c\\] {
        background-color: #F15928 !important;
      }

      /* Mobile Navigation Drawer (excluding primary orange CTA button) */
      .ai2047-brandbook-v1 header nav[aria-label="Primary navigation"] > button {
        background: #FFFFFF !important;
        border-color: rgba(0, 105, 184, 0.26) !important;
        color: #08121E !important;
      }
      .ai2047-brandbook-v1 header nav[aria-label="Primary navigation"] > button span {
        background-color: #08121E !important;
      }
      .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] {
        background: #F7F9FC !important;
        border-color: rgba(0, 105, 184, 0.24) !important;
        box-shadow: 0 22px 52px rgba(8, 18, 30, 0.22) !important;
      }
      .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a:not([class*="bg-[#C0F43C]"]):not([class*="bg-[#c0f43c]"]):not([href*="sponsorship-enquiry"]) {
        color: #08121E !important;
      }
      .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a.text-\\[\\#c0f43c\\] {
        color: #F15928 !important;
      }
      .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] button:not([class*="bg-[#C0F43C]"]) {
        border-color: rgba(0, 105, 184, 0.22) !important;
        color: #08121E !important;
      }

      /* =====================================================================
         5. HERO BANNER (#home & .page-hero-top) — ZERO BG ELEMENTS
         ===================================================================== */
      .ai2047-brandbook-v1 .hero-bg {
        background:
          linear-gradient(180deg, rgba(8, 18, 30, 0.68) 0%, rgba(8, 18, 30, 0.88) 100%),
          radial-gradient(ellipse at 50% 88%, rgba(0, 105, 184, 0.34), transparent 45%),
          #08121E !important;
      }

      .ai2047-brandbook-v1 #home > div.bg-\\[\\#020917\\]\\/35 {
        background-color: rgba(8, 18, 30, 0.56) !important;
      }

      .ai2047-brandbook-v1 .hero-overlay {
        background:
          linear-gradient(180deg, rgba(8, 18, 30, 0.48) 0%, rgba(8, 18, 30, 0.78) 68%, #08121E 100%) !important;
      }

      .ai2047-brandbook-v1 .hero-grid-pattern {
        display: none !important;
        background: none !important;
      }

      .ai2047-brandbook-v1 #home .container > p {
        color: #F7F9FC !important;
      }

      .ai2047-brandbook-v1 #home .grid > div {
        background-color: rgba(8, 18, 30, 0.82) !important;
        border-color: rgba(0, 105, 184, 0.48) !important;
      }

      .ai2047-brandbook-v1 .page-hero-top {
        background-image:
          linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.80) 52%, rgba(0, 105, 184, 0.38) 100%),
          url("/mumbai/enterprise/images/speakers/Mumbai-speakers-overview.jpg") !important;
        background-size: 100% 100%, cover !important;
        background-position: center, center !important;
        background-repeat: no-repeat, no-repeat !important;
        background-color: #08121E !important;
      }
      .ai2047-brandbook-v1 .page-hero-top::after {
        background: linear-gradient(to top, #08121E, transparent) !important;
      }

      /* =====================================================================
         6. CLEAN SOLID SECTION SURFACES (ALL DECORATIVE BG ELEMENTS REMOVED)
            & ALL CARD INDEX NUMBERS REMOVED
         ===================================================================== */

      /* Cloud White (#F7F9FC) Neutral Light Sections */
      .ai2047-brandbook-v1 #attend,
      .ai2047-brandbook-v1 #agenda,
      .ai2047-brandbook-v1 #networking,
      .ai2047-brandbook-v1 #partners,
      .ai2047-brandbook-v1 #faq,
      .ai2047-brandbook-v1 #cta {
        background-image: none !important;
        background-color: #F7F9FC !important;
        color: #08121E !important;
        border-top: 1px solid rgba(0, 105, 184, 0.14) !important;
        border-bottom: 1px solid rgba(0, 105, 184, 0.14) !important;
      }

      /* Midnight Core (#08121E) Institutional Data & Endorsement Sections */
      .ai2047-brandbook-v1 #ecosystem,
      .ai2047-brandbook-v1 #testimonials {
        background-image: none !important;
        background-color: #08121E !important;
        color: #FFFFFF !important;
        border-top: 2px solid #0069B8 !important;
        border-bottom: 2px solid #0069B8 !important;
      }

      /* Sovereign Blue (#0069B8) Institutional Anchor Bands */
      .ai2047-brandbook-v1 #speakers,
      .ai2047-brandbook-v1 #lineup,
      .ai2047-brandbook-v1 #organizer {
        background-image: none !important;
        background-color: #0069B8 !important;
        color: #FFFFFF !important;
      }

      /* Vortex-Extended.svg Decorative Accents for #attend & #agenda */
      .ai2047-brandbook-v1 #attend,
      .ai2047-brandbook-v1 #agenda {
        position: relative !important;
        overflow: hidden !important;
      }

      .ai2047-brandbook-v1 #attend > div,
      .ai2047-brandbook-v1 #agenda > div {
        position: relative;
        z-index: 2;
      }

      .ai2047-brandbook-v1 #attend::before {
        content: "";
        position: absolute;
        top: -20px;
        right: -60px;
        width: min(760px, 65vw);
        height: 440px;
        background-image: url("/mumbai/enterprise/images/brandbook/Vortex-Extended.svg");
        background-repeat: no-repeat;
        background-position: top right;
        background-size: contain;
        opacity: 0.32;
        pointer-events: none;
        z-index: 1;
      }

      .ai2047-brandbook-v1 #agenda::before {
        content: "";
        position: absolute;
        top: -20px;
        left: -80px;
        width: min(780px, 65vw);
        height: 460px;
        background-image: url("/mumbai/enterprise/images/brandbook/Vortex-Extended.svg");
        background-repeat: no-repeat;
        background-position: top left;
        background-size: contain;
        transform: scaleX(-1);
        opacity: 0.32;
        pointer-events: none;
        z-index: 1;
      }

      /* Hide decorative background grids, floating particles & ambient blur orbs */
      .ai2047-brandbook-v1 #ecosystem > div[aria-hidden="true"],
      .ai2047-brandbook-v1 #testimonials > div[aria-hidden="true"],
      .ai2047-brandbook-v1 #cta > div[aria-hidden="true"],
      .ai2047-brandbook-v1 #attend article canvas,
      .ai2047-brandbook-v1 #ecosystem article .blur-2xl,
      .ai2047-brandbook-v1 #ecosystem article .blur-3xl,
      .ai2047-brandbook-v1 #networking .blur-\\[60px\\],
      .ai2047-brandbook-v1 #cta article .blur-3xl {
        display: none !important;
      }

      /* Hide ALL card index numbers (01–05) across sections */
      .ai2047-brandbook-v1 #attend article > span.absolute,
      .ai2047-brandbook-v1 #ecosystem article .mb-6 > span.rounded-full,
      .ai2047-brandbook-v1 #ecosystem article > span.absolute,
      .ai2047-brandbook-v1 #ecosystem article .flex.flex-col > span:first-child,
      .ai2047-brandbook-v1 #agenda article span.rounded-full,
      .ai2047-brandbook-v1 #networking article span.font-mono,
      .ai2047-brandbook-v1 #testimonials:not(.brandbook-v1-testimonials) .grid-cols-4 > button span.font-mono,
      .ai2047-brandbook-v1 #faq details summary > span.font-mono {
        display: none !important;
      }

      .ai2047-brandbook-v1 #faq details summary {
        grid-template-columns: 1fr 32px !important;
      }
      .ai2047-brandbook-v1 #faq details p {
        margin-left: 24px !important;
        margin-right: 24px !important;
        max-width: none !important;
      }
      @media (max-width: 640px) {
        .ai2047-brandbook-v1 #faq details p {
          margin-left: 8px !important;
          margin-right: 8px !important;
        }
      }

      /* Typography on Cloud White (#F7F9FC) Sections -> Midnight Core (#08121E) */
      .ai2047-brandbook-v1 #attend h2,
      .ai2047-brandbook-v1 #attend h3,
      .ai2047-brandbook-v1 #agenda h2,
      .ai2047-brandbook-v1 #agenda h3,
      .ai2047-brandbook-v1 #networking h2,
      .ai2047-brandbook-v1 #networking h3,
      .ai2047-brandbook-v1 #networking h4,
      .ai2047-brandbook-v1 #partners h2,
      .ai2047-brandbook-v1 #partners h3,
      .ai2047-brandbook-v1 #faq h2,
      .ai2047-brandbook-v1 #cta h2,
      .ai2047-brandbook-v1 #cta article h3 {
        color: #08121E !important;
      }

      /* Keep "The complete enterprise buying unit." on one line on desktop/tablet */
      .ai2047-brandbook-v1 #networking > div > div > div.max-w-\\[780px\\] {
        max-width: 100% !important;
      }
      .ai2047-brandbook-v1 #networking > div > div > div.max-w-\\[780px\\] > p {
        max-width: 780px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
      @media (min-width: 768px) {
        .ai2047-brandbook-v1 #networking h2 {
          white-space: nowrap !important;
          font-size: clamp(28px, 3.5vw, 46px) !important;
        }
      }

      .ai2047-brandbook-v1 #attend p,
      .ai2047-brandbook-v1 #agenda p,
      .ai2047-brandbook-v1 #networking p,
      .ai2047-brandbook-v1 #partners p,
      .ai2047-brandbook-v1 #faq p,
      .ai2047-brandbook-v1 #cta article p {
        color: #334155 !important;
      }

      /* #attend Stat Cards + Sovereign Blue (#0069B8) "Our Reach" Band */
      .ai2047-brandbook-v1 #attend article {
        background: #FFFFFF !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 12px 32px rgba(8, 18, 30, 0.06) !important;
      }
      .ai2047-brandbook-v1 #attend article:hover {
        border-color: #0069B8 !important;
        box-shadow: 0 18px 40px rgba(0, 105, 184, 0.14) !important;
      }
      .ai2047-brandbook-v1 #attend article strong {
        color: #0069B8 !important;
      }
      .ai2047-brandbook-v1 #attend article p {
        color: #08121E !important;
      }

      /* #attend "Our Reach & Series Highlights" — Clean White Only */
      .ai2047-brandbook-v1 #attend > div > div.mt-16 {
        background: #FFFFFF !important;
        background-image: none !important;
        border: 1px solid rgba(0, 105, 184, 0.18) !important;
        border-radius: 24px !important;
        box-shadow: 0 12px 32px rgba(8, 18, 30, 0.05) !important;
      }
      .ai2047-brandbook-v1 #attend > div > div.mt-16 h3 {
        color: #08121E !important;
        letter-spacing: 0.04em !important;
      }
      .ai2047-brandbook-v1 #attend > div > div.mt-16 h3 .bg-clip-text {
        background-image: none !important;
        -webkit-text-fill-color: #0069B8 !important;
        color: #0069B8 !important;
      }
      .ai2047-brandbook-v1 #attend > div > div.mt-16 div.rounded-2xl {
        background: #FFFFFF !important;
        background-image: none !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        border-top: 2px solid #0069B8 !important;
        border-radius: 16px !important;
        box-shadow: 0 8px 22px rgba(8, 18, 30, 0.05) !important;
        transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease !important;
      }
      .ai2047-brandbook-v1 #attend > div > div.mt-16 div.rounded-2xl:hover {
        background: #FFFFFF !important;
        border-color: #F15928 !important;
        border-top-color: #F15928 !important;
        transform: translateY(-3px) !important;
        box-shadow: 0 14px 30px rgba(0, 105, 184, 0.12) !important;
      }
      .ai2047-brandbook-v1 #attend > div > div.mt-16 div.rounded-2xl strong {
        color: #0069B8 !important;
      }
      .ai2047-brandbook-v1 #attend > div > div.mt-16 div.rounded-2xl span {
        color: #334155 !important;
      }
      .ai2047-brandbook-v1 #attend > div > div.mt-16 div.h-\\[1px\\] {
        background: rgba(0, 105, 184, 0.16) !important;
      }

      /* #agenda Cards */
      .ai2047-brandbook-v1 #agenda article {
        background: #FFFFFF !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 12px 32px rgba(8, 18, 30, 0.06) !important;
      }
      .ai2047-brandbook-v1 #agenda article:hover {
        border-color: #0069B8 !important;
        box-shadow: 0 18px 42px rgba(0, 105, 184, 0.14) !important;
      }
      .ai2047-brandbook-v1 #agenda article span.w-\\[48px\\] {
        background-color: #F7F9FC !important;
        border-color: rgba(0, 105, 184, 0.28) !important;
        color: #0069B8 !important;
      }

      /* #networking Cards + Sovereign Blue Delegate Pass Banner */
      .ai2047-brandbook-v1 #networking article {
        background: #FFFFFF !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 12px 30px rgba(8, 18, 30, 0.05) !important;
      }
      .ai2047-brandbook-v1 #networking article:hover {
        border-color: #0069B8 !important;
        box-shadow: 0 18px 38px rgba(0, 105, 184, 0.13) !important;
      }
      .ai2047-brandbook-v1 #networking article strong {
        color: #08121E !important;
      }
      .ai2047-brandbook-v1 #networking .border-t.border-white\\/10 {
        border-color: rgba(0, 105, 184, 0.16) !important;
      }
      .ai2047-brandbook-v1 #networking .max-w-\\[760px\\] > div {
        background: #0069B8 !important;
        border: 1.5px solid #009EAD !important;
        box-shadow: 0 22px 52px rgba(0, 105, 184, 0.24) !important;
      }
      .ai2047-brandbook-v1 #networking .max-w-\\[760px\\] > div h4 {
        color: #FFFFFF !important;
      }
      .ai2047-brandbook-v1 #networking .max-w-\\[760px\\] > div p {
        color: #F7F9FC !important;
      }

      /* #partners Sponsor Tiles */
      .ai2047-brandbook-v1 #partners span.bg-white {
        background: #FFFFFF !important;
        border: 1px solid rgba(0, 105, 184, 0.18) !important;
        box-shadow: 0 8px 24px rgba(8, 18, 30, 0.05) !important;
      }

      /* #faq Accordion & #cta Cards */
      .ai2047-brandbook-v1 #faq > div > div,
      .ai2047-brandbook-v1 #cta article {
        background: #FFFFFF !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 16px 42px rgba(8, 18, 30, 0.06) !important;
      }
      .ai2047-brandbook-v1 #cta article:hover {
        border-color: #F15928 !important;
      }
      .ai2047-brandbook-v1 #cta article .border-t,
      .ai2047-brandbook-v1 #faq details {
        border-color: rgba(0, 105, 184, 0.16) !important;
      }
      .ai2047-brandbook-v1 #faq details summary i,
      .ai2047-brandbook-v1 #faq details[open] summary strong {
        color: #0069B8 !important;
      }
      .ai2047-brandbook-v1 #faq details summary strong {
        color: #08121E !important;
      }

      /* =====================================================================
         7. MIDNIGHT CORE (#08121E) CARDS & FOOTER (#ecosystem, #footer)
         ===================================================================== */
      .ai2047-brandbook-v1 #ecosystem h2 {
        color: #FFFFFF !important;
      }
      .ai2047-brandbook-v1 #ecosystem > div > p,
      .ai2047-brandbook-v1 #ecosystem > div > div.text-center > p {
        color: rgba(247, 249, 252, 0.86) !important;
      }
      .ai2047-brandbook-v1 #ecosystem > div > div.text-center > p span.font-mono {
        color: rgba(247, 249, 252, 0.66) !important;
      }

      .ai2047-brandbook-v1 #ecosystem article {
        background: #0D1B2E !important;
        background-image: none !important;
        border: 1px solid rgba(0, 105, 184, 0.52) !important;
        box-shadow: 0 20px 46px rgba(0, 0, 0, 0.34) !important;
      }
      .ai2047-brandbook-v1 #ecosystem article > div.h-\\[2px\\] {
        background: #009EAD !important;
        background-image: none !important;
      }
      .ai2047-brandbook-v1 #ecosystem article:hover {
        border-color: #009EAD !important;
        box-shadow: 0 24px 54px rgba(0, 0, 0, 0.45) !important;
      }
      .ai2047-brandbook-v1 #ecosystem article h3 {
        color: #FFFFFF !important;
      }
      .ai2047-brandbook-v1 #ecosystem article p {
        color: rgba(247, 249, 252, 0.82) !important;
      }
      .ai2047-brandbook-v1 #ecosystem article p.font-bold {
        color: #FFFFFF !important;
        font-weight: 600 !important;
      }
      .ai2047-brandbook-v1 #ecosystem article div.w-11.h-11,
      .ai2047-brandbook-v1 #ecosystem article div.w-13.h-13 {
        background: rgba(0, 105, 184, 0.22) !important;
        border-color: rgba(0, 105, 184, 0.55) !important;
        color: #FFFFFF !important;
        box-shadow: none !important;
      }
      .ai2047-brandbook-v1 #ecosystem article div.w-11.h-11 svg,
      .ai2047-brandbook-v1 #ecosystem article div.w-13.h-13 svg {
        color: #009EAD !important;
      }
      .ai2047-brandbook-v1 #ecosystem article .border-t {
        border-color: rgba(0, 105, 184, 0.30) !important;
      }
      .ai2047-brandbook-v1 #ecosystem article .space-y-2 .flex span:first-child {
        color: rgba(247, 249, 252, 0.78) !important;
      }
      .ai2047-brandbook-v1 #ecosystem article .space-y-2 .flex span:last-child {
        color: #FFFFFF !important;
      }
      .ai2047-brandbook-v1 #ecosystem article .h-2\\.5 {
        background-color: #08121E !important;
        border-color: rgba(0, 105, 184, 0.42) !important;
      }
      .ai2047-brandbook-v1 #ecosystem article .h-2\\.5 > div:first-child {
        background-color: #009EAD !important;
        background-image: none !important;
        box-shadow: none !important;
      }
      .ai2047-brandbook-v1 #ecosystem article .h-2\\.5 > div:first-child > div {
        display: none !important;
      }
      .ai2047-brandbook-v1 #ecosystem article .h-2\\.5 > div:nth-child(2) {
        box-shadow: none !important;
        background-color: #FFFFFF !important;
      }
      .ai2047-brandbook-v1 #ecosystem article .mt-7 span.font-mono {
        color: rgba(247, 249, 252, 0.65) !important;
      }
      .ai2047-brandbook-v1 #ecosystem article span.text-white\\/50 {
        color: #009EAD !important;
        font-weight: 600 !important;
      }
      .ai2047-brandbook-v1 #ecosystem article .mt-7 span.text-\\[\\#18d4ff\\] {
        color: #009EAD !important;
        font-weight: 600 !important;
      }
      .ai2047-brandbook-v1 #ecosystem article div.h-\\[1px\\] {
        background-color: rgba(0, 105, 184, 0.28) !important;
      }
      .ai2047-brandbook-v1 #ecosystem article div.h-\\[1px\\] > div {
        background: #009EAD !important;
      }

      /* Executive Mandate Callout inside #ecosystem -> Sovereign Blue Anchor Card */
      .ai2047-brandbook-v1 #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 {
        background: #0069B8 !important;
        border: 1.5px solid #009EAD !important;
        box-shadow: 0 22px 52px rgba(0, 0, 0, 0.36) !important;
      }
      .ai2047-brandbook-v1 #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 > div.w-1\\.5 {
        background: #F15928 !important;
      }
      .ai2047-brandbook-v1 #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 div.w-14.h-14 {
        background: #08121E !important;
        border-color: #009EAD !important;
        color: #009EAD !important;
        box-shadow: none !important;
      }
      .ai2047-brandbook-v1 #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 p,
      .ai2047-brandbook-v1 #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 span {
        color: #FFFFFF !important;
      }

      /* #footer -> Midnight Core (#08121E) Institutional Footer */
      .ai2047-brandbook-v1 #footer {
        background-color: #08121E !important;
        background-image: none !important;
        border-top: 2px solid #0069B8 !important;
        color: #F7F9FC !important;
      }
      .ai2047-brandbook-v1 #footer .border-b {
        border-color: rgba(0, 105, 184, 0.35) !important;
      }
      .ai2047-brandbook-v1 #footer h3 {
        color: #009EAD !important;
      }
      .ai2047-brandbook-v1 #footer p,
      .ai2047-brandbook-v1 #footer a.text-muted {
        color: rgba(247, 249, 252, 0.85) !important;
      }
      .ai2047-brandbook-v1 #footer a.text-muted:hover {
        color: #009EAD !important;
      }
      .ai2047-brandbook-v1 #footer p.font-mono {
        color: rgba(247, 249, 252, 0.65) !important;
      }
      .ai2047-brandbook-v1 #footer a[class*="border-[#C0F43C]"] {
        background-color: #0D1B2E !important;
        border-color: rgba(0, 105, 184, 0.55) !important;
        color: #F7F9FC !important;
        transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease !important;
      }
      .ai2047-brandbook-v1 #footer a[class*="border-[#C0F43C]"]:hover {
        background-color: #F15928 !important;
        border-color: #F15928 !important;
        color: #FFFFFF !important;
        transform: translateY(-3px) scale(1.08) !important;
        box-shadow: 0 10px 24px rgba(241, 89, 40, 0.4) !important;
      }

      /* #organizer Panel & Trescon CTA Button */
      .ai2047-brandbook-v1 #organizer > div > div {
        background: #FFFFFF !important;
        border: 1px solid rgba(255, 255, 255, 0.92) !important;
        border-top: 4px solid #F15928 !important;
        box-shadow: 0 22px 52px rgba(8, 18, 30, 0.24) !important;
      }
      .ai2047-brandbook-v1 #organizer h2,
      .ai2047-brandbook-v1 #organizer h3 {
        color: #08121E !important;
      }
      .ai2047-brandbook-v1 #organizer p {
        color: #334155 !important;
      }
      .ai2047-brandbook-v1 #organizer span.font-mono {
        color: #0069B8 !important;
        font-weight: 700 !important;
      }
      .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"] {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 8px !important;
        padding: 13px 26px !important;
        border-radius: 9999px !important;
        width: fit-content !important;
        text-decoration: none !important;
        font-weight: 700 !important;
        background-color: #F15928 !important;
        border: 1.5px solid #F15928 !important;
        color: #FFFFFF !important;
        -webkit-text-fill-color: #FFFFFF !important;
      }

      /* =====================================================================
         8. STRICT WCAG AA/AAA HEADLINE HIGHLIGHTS (PAGE 24 CONTRAST MATRIX)
         ===================================================================== */
      .ai2047-brandbook-v1 #attend .bg-clip-text.text-transparent,
      .ai2047-brandbook-v1 #agenda .bg-clip-text.text-transparent,
      .ai2047-brandbook-v1 #networking .bg-clip-text.text-transparent,
      .ai2047-brandbook-v1 #partners .bg-clip-text.text-transparent,
      .ai2047-brandbook-v1 #faq .bg-clip-text.text-transparent,
      .ai2047-brandbook-v1 #cta .bg-clip-text.text-transparent {
        background-image: none !important;
        background-color: transparent !important;
        -webkit-text-fill-color: #0069B8 !important;
        color: #0069B8 !important;
      }

      .ai2047-brandbook-v1 #home .bg-clip-text.text-transparent,
      .ai2047-brandbook-v1 .page-hero-top .bg-clip-text.text-transparent,
      .ai2047-brandbook-v1 #ecosystem .bg-clip-text.text-transparent,
      .ai2047-brandbook-v1 #testimonials .bg-clip-text.text-transparent {
        background-image: none !important;
        background-color: transparent !important;
        -webkit-text-fill-color: #009EAD !important;
        color: #009EAD !important;
      }

      .ai2047-brandbook-v1 #speakers h2 .bg-clip-text.text-transparent,
      .ai2047-brandbook-v1 #lineup h2 .bg-clip-text.text-transparent {
        background-image: none !important;
        background-color: transparent !important;
        -webkit-text-fill-color: #FFFFFF !important;
        color: #FFFFFF !important;
        text-decoration: none !important;
      }

      .ai2047-brandbook-v1 .text-\\[\\#C0F43C\\],
      .ai2047-brandbook-v1 .text-\\[\\#c0f43c\\] {
        color: #0069B8 !important;
      }
      .ai2047-brandbook-v1 #home .text-\\[\\#C0F43C\\],
      .ai2047-brandbook-v1 .page-hero-top .text-\\[\\#C0F43C\\],
      .ai2047-brandbook-v1 #ecosystem .text-\\[\\#C0F43C\\] {
        color: #009EAD !important;
      }

      /* =====================================================================
         9. UNIFIED CTA BUTTON SYSTEM: WHITE TEXT ON ORANGE BG + HOVER EFFECTS
            (5% Pulse Orange Primary + Sovereign Blue Secondary -> Interactive Hover)
         ===================================================================== */
      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"],
      .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"],
      .ai2047-brandbook-v1 button[class*="bg-[#C0F43C]"],
      .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"],
      .ai2047-brandbook-v1 .bb-cta-primary,
      .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a[href*="sponsorship-enquiry"],
      .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"],
      .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"],
      .ai2047-brandbook-v1 a[class*="border-white/25"],
      .ai2047-brandbook-v1 .bb-cta-secondary {
        position: relative !important;
        overflow: hidden !important;
        isolation: isolate !important;
        transition:
          transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
          background-color 0.24s ease,
          border-color 0.24s ease,
          color 0.24s ease,
          box-shadow 0.28s ease !important;
      }

      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"]::after,
      .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"]::after,
      .ai2047-brandbook-v1 button[class*="bg-[#C0F43C]"]::after,
      .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"]::after,
      .ai2047-brandbook-v1 .bb-cta-primary::after,
      .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a[href*="sponsorship-enquiry"]::after,
      .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"]::after,
      .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"]::after,
      .ai2047-brandbook-v1 a[class*="border-white/25"]::after,
      .ai2047-brandbook-v1 .bb-cta-secondary::after {
        content: "";
        position: absolute;
        top: -20%;
        bottom: -20%;
        left: 0;
        width: 42%;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 255, 255, 0.32) 50%,
          transparent 100%
        );
        transform: translateX(-180%) skewX(-22deg);
        transition: transform 0.58s cubic-bezier(0.22, 1, 0.36, 1);
        pointer-events: none;
        z-index: 1;
      }

      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"]:hover::after,
      .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"]:hover::after,
      .ai2047-brandbook-v1 button[class*="bg-[#C0F43C]"]:hover::after,
      .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"]:hover::after,
      .ai2047-brandbook-v1 .bb-cta-primary:hover::after,
      .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a[href*="sponsorship-enquiry"]:hover::after,
      .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"]:hover::after,
      .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"]:hover::after,
      .ai2047-brandbook-v1 a[class*="border-white/25"]:hover::after,
      .ai2047-brandbook-v1 .bb-cta-secondary:hover::after {
        transform: translateX(310%) skewX(-22deg);
      }

      /* Primary Pulse Orange (#F15928) CTAs */
      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"],
      .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"],
      .ai2047-brandbook-v1 button[class*="bg-[#C0F43C]"],
      .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"],
      .ai2047-brandbook-v1 .bb-cta-primary,
      .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a[href*="sponsorship-enquiry"],
      .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"] {
        background-color: #F15928 !important;
        border-color: #F15928 !important;
        color: #FFFFFF !important;
        -webkit-text-fill-color: #FFFFFF !important;
        box-shadow: 0 8px 24px rgba(241, 89, 40, 0.34) !important;
      }

      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"]:hover,
      .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"]:hover,
      .ai2047-brandbook-v1 button[class*="bg-[#C0F43C]"]:hover,
      .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"]:hover,
      .ai2047-brandbook-v1 .bb-cta-primary:hover,
      .ai2047-brandbook-v1 header > div.rounded-\\[24px\\] a[href*="sponsorship-enquiry"]:hover,
      .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"]:hover {
        background-color: #D9481A !important;
        border-color: #D9481A !important;
        color: #FFFFFF !important;
        -webkit-text-fill-color: #FFFFFF !important;
        transform: translateY(-3px) scale(1.025) !important;
        box-shadow:
          0 14px 32px rgba(241, 89, 40, 0.46),
          0 0 0 3px rgba(241, 89, 40, 0.22) !important;
      }

      /* Secondary Outline CTAs */
      .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"] {
        border: 1.5px solid #009EAD !important;
        background-color: rgba(8, 18, 30, 0.72) !important;
        color: #FFFFFF !important;
        -webkit-text-fill-color: #FFFFFF !important;
      }

      .ai2047-brandbook-v1 a[class*="border-white/25"],
      .ai2047-brandbook-v1 .bb-cta-secondary {
        border: 1.5px solid #FFFFFF !important;
        background-color: #FFFFFF !important;
        color: #0069B8 !important;
        -webkit-text-fill-color: #0069B8 !important;
        box-shadow: 0 8px 22px rgba(8, 18, 30, 0.14) !important;
      }

      .ai2047-brandbook-v1 #agenda a[class*="border-white/25"],
      .ai2047-brandbook-v1 #networking a[class*="border-white/25"],
      .ai2047-brandbook-v1 #partners a[class*="border-white/25"] {
        border: 1.5px solid #0069B8 !important;
        background-color: #FFFFFF !important;
        color: #0069B8 !important;
        -webkit-text-fill-color: #0069B8 !important;
        box-shadow: 0 6px 18px rgba(8, 18, 30, 0.06) !important;
      }
      .ai2047-brandbook-v1 #networking .max-w-\\[760px\\] a[class*="border-white/25"] {
        border: 1.5px solid #FFFFFF !important;
      }
      .ai2047-brandbook-v1 .page-hero-top a[class*="border-white/25"] {
        border: 1.5px solid #009EAD !important;
        background-color: rgba(8, 18, 30, 0.72) !important;
        color: #FFFFFF !important;
        -webkit-text-fill-color: #FFFFFF !important;
      }

      .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"]:hover,
      .ai2047-brandbook-v1 a[class*="border-white/25"]:hover,
      .ai2047-brandbook-v1 .bb-cta-secondary:hover {
        background-color: #F15928 !important;
        border-color: #F15928 !important;
        color: #FFFFFF !important;
        -webkit-text-fill-color: #FFFFFF !important;
        transform: translateY(-3px) scale(1.025) !important;
        box-shadow:
          0 14px 30px rgba(241, 89, 40, 0.42),
          0 0 0 3px rgba(241, 89, 40, 0.2) !important;
      }

      /* Tactile Active Press Feedback */
      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"]:active,
      .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"]:active,
      .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"]:active,
      .ai2047-brandbook-v1 .bb-cta-primary:active,
      .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"]:active,
      .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"]:active,
      .ai2047-brandbook-v1 a[class*="border-white/25"]:active,
      .ai2047-brandbook-v1 .bb-cta-secondary:active {
        transform: translateY(-1px) scale(0.99) !important;
      }

      /* Trailing Arrow Micro-Glide on Hover */
      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"] svg,
      .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"] svg,
      .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"] svg,
      .ai2047-brandbook-v1 .bb-cta-primary .cta-arrow,
      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"] > span:last-child:not(:only-child),
      .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"] svg,
      .ai2047-brandbook-v1 a[class*="border-white/25"] svg,
      .ai2047-brandbook-v1 .bb-cta-secondary .cta-arrow,
      .ai2047-brandbook-v1 a[class*="border-white/25"] > span:last-child:not(:only-child),
      .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"] svg {
        transition: transform 0.26s cubic-bezier(0.22, 1, 0.36, 1) !important;
      }

      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"]:hover svg,
      .ai2047-brandbook-v1 a[class*="bg-[#c0f43c]"]:hover svg,
      .ai2047-brandbook-v1 a[class*="bg-[#18d4ff]"]:hover svg,
      .ai2047-brandbook-v1 .bb-cta-primary:hover .cta-arrow,
      .ai2047-brandbook-v1 a[class*="bg-[#C0F43C]"]:hover > span:last-child:not(:only-child),
      .ai2047-brandbook-v1 #home a[class*="border-[#4eb9ff]"]:hover svg,
      .ai2047-brandbook-v1 a[class*="border-white/25"]:hover svg,
      .ai2047-brandbook-v1 .bb-cta-secondary:hover .cta-arrow,
      .ai2047-brandbook-v1 a[class*="border-white/25"]:hover > span:last-child:not(:only-child) {
        transform: translateX(4px) !important;
      }

      .ai2047-brandbook-v1 #organizer a[href*="tresconglobal"]:hover svg {
        transform: translate(3px, -3px) !important;
      }

      /* =====================================================================
         10. SPEAKER PORTRAIT CARDS (HOME PAGE SPEAKER PORTRAIT CARDS)
         ===================================================================== */
      .ai2047-brandbook-v1 .speaker-card-inner {
        background-color: #08121E !important;
        background-image: url("/mumbai/enterprise/images/brandbook/wais-speker-bg.png") !important;
        background-size: cover !important;
        background-position: center !important;
        background-repeat: no-repeat !important;
        border: 1px solid rgba(255, 255, 255, 0.24) !important;
        box-shadow: 0 18px 38px rgba(8, 18, 30, 0.28) !important;
      }
      .ai2047-brandbook-v1 .speaker-card-inner:hover {
        border-color: #F15928 !important;
        box-shadow: 0 22px 46px rgba(8, 18, 30, 0.38) !important;
      }
      .ai2047-brandbook-v1 .speaker-card-inner > img {
        position: relative;
        z-index: 2;
        opacity: 0.96 !important;
      }
      .ai2047-brandbook-v1 .speaker-card-inner::after {
        background: linear-gradient(
          to top,
          rgba(4, 9, 20, 0.95) 0%,
          rgba(4, 9, 20, 0.35) 36%,
          transparent 65%
        ) !important;
        z-index: 3 !important;
      }
      .ai2047-brandbook-v1 .speaker-card-inner > div {
        z-index: 10 !important;
      }
      .ai2047-brandbook-v1 .speaker-card-inner h3,
      .ai2047-brandbook-v1 .speaker-card-inner h4 {
        font-family: 'Space Grotesk', sans-serif !important;
        font-size: 21px !important;
        line-height: 1.25 !important;
        font-weight: 600 !important;
        color: #FFFFFF !important;
      }
      .ai2047-brandbook-v1 .speaker-card-inner p {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: 13.5px !important;
        line-height: 1.45 !important;
        font-weight: 400 !important;
        color: rgba(247, 249, 252, 0.85) !important;
      }
      .ai2047-brandbook-v1 .speaker-card-inner .speaker-line {
        background-color: #009EAD !important;
      }
      .ai2047-brandbook-v1 .speaker-card-inner:hover .speaker-line {
        width: 56px !important;
        background-color: #F15928 !important;
      }

      /* =====================================================================
         11. 24X24PX ICON KEYLINES & MICRO-ANIMATIONS (PAGES 50–51)
         ===================================================================== */
      @keyframes bbV1IconFloat {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-4px); }
      }
      @keyframes bbV1GlyphBreathe {
        0%, 100% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.10) rotate(2deg); }
      }
      @keyframes bbV1PulseRing {
        0% { transform: scale(1); opacity: 0.55; }
        75%, 100% { transform: scale(1.55); opacity: 0; }
      }
      @keyframes bbV1SectorSheen {
        0%, 65% { transform: translateX(-160%) skewX(-22deg); }
        100% { transform: translateX(180%) skewX(-22deg); }
      }
      @keyframes bbV1IconSpringPop {
        0% { transform: scale(1) rotate(0deg); }
        45% { transform: scale(1.22) rotate(-5deg); }
        75% { transform: scale(0.96) rotate(2deg); }
        100% { transform: scale(1.10) rotate(0deg); }
      }

      .ai2047-brandbook-v1 #attend article div.rounded-full {
        position: relative !important;
        width: 48px !important;
        height: 48px !important;
        background-color: #0069B8 !important;
        box-shadow: 0 8px 20px rgba(0, 105, 184, 0.25) !important;
        animation: bbV1IconFloat 3.4s ease-in-out infinite !important;
        transition: background-color 0.28s ease, box-shadow 0.28s ease, transform 0.28s ease !important;
      }
      .ai2047-brandbook-v1 #attend article div.rounded-full::after {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 9999px;
        border: 1.5px solid #009EAD;
        pointer-events: none;
        animation: bbV1PulseRing 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
      }
      .ai2047-brandbook-v1 #attend article div.rounded-full img {
        width: 24px !important;
        height: 24px !important;
        filter: brightness(0) invert(1) !important;
        animation: bbV1GlyphBreathe 3.4s ease-in-out infinite !important;
      }
      .ai2047-brandbook-v1 #attend article:nth-child(2) div.rounded-full,
      .ai2047-brandbook-v1 #attend article:nth-child(2) div.rounded-full::after,
      .ai2047-brandbook-v1 #attend article:nth-child(2) div.rounded-full img { animation-delay: 0.65s !important; }
      .ai2047-brandbook-v1 #attend article:nth-child(3) div.rounded-full,
      .ai2047-brandbook-v1 #attend article:nth-child(3) div.rounded-full::after,
      .ai2047-brandbook-v1 #attend article:nth-child(3) div.rounded-full img { animation-delay: 1.3s !important; }
      .ai2047-brandbook-v1 #attend article:nth-child(4) div.rounded-full,
      .ai2047-brandbook-v1 #attend article:nth-child(4) div.rounded-full::after,
      .ai2047-brandbook-v1 #attend article:nth-child(4) div.rounded-full img { animation-delay: 1.95s !important; }

      .ai2047-brandbook-v1 #attend article:hover div.rounded-full {
        background-color: #F15928 !important;
        box-shadow: 0 10px 26px rgba(241, 89, 40, 0.38) !important;
        transform: translateY(-4px) scale(1.08) !important;
        animation-play-state: paused !important;
      }
      .ai2047-brandbook-v1 #attend article:hover div.rounded-full img {
        animation: bbV1IconSpringPop 0.52s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
      }

      .ai2047-brandbook-v1 #networking article span.w-10.h-10 {
        position: relative !important;
        overflow: hidden !important;
        border-radius: 10px !important;
        background-color: #0069B8 !important;
        border: 1px solid #0069B8 !important;
        box-shadow: 0 6px 16px rgba(0, 105, 184, 0.20) !important;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.28s ease, border-color 0.28s ease !important;
      }
      .ai2047-brandbook-v1 #networking article span.w-10.h-10::before {
        content: "";
        position: absolute;
        inset: -20% -10%;
        width: 55%;
        background: rgba(255, 255, 255, 0.25);
        pointer-events: none;
        z-index: 1;
        animation: bbV1SectorSheen 4.6s ease-in-out infinite;
      }
      .ai2047-brandbook-v1 #networking article span.w-10.h-10 img {
        position: relative;
        z-index: 2;
        filter: brightness(0) invert(1) !important;
        animation: bbV1GlyphBreathe 3.2s ease-in-out infinite !important;
      }
      .ai2047-brandbook-v1 #networking article:hover span.w-10.h-10 {
        background-color: #F15928 !important;
        border-color: #F15928 !important;
        transform: translateY(-2px) scale(1.10) rotate(-3deg) !important;
      }

      .ai2047-brandbook-v1 #ecosystem article div.w-11.h-11,
      .ai2047-brandbook-v1 #ecosystem article div.w-13.h-13,
      .ai2047-brandbook-v1 #agenda article span.w-\\[48px\\],
      .ai2047-brandbook-v1 #testimonials .bb-v1-quote-icon {
        animation: bbV1IconFloat 3.8s ease-in-out infinite !important;
        transition: background-color 0.28s ease, border-color 0.28s ease, color 0.28s ease, transform 0.3s ease !important;
      }
      .ai2047-brandbook-v1 #ecosystem article:hover div.w-11.h-11,
      .ai2047-brandbook-v1 #ecosystem article:hover div.w-13.h-13,
      .ai2047-brandbook-v1 #agenda article:hover span.w-\\[48px\\] {
        background-color: #0069B8 !important;
        border-color: #0069B8 !important;
        color: #FFFFFF !important;
        transform: translateY(-3px) scale(1.08) !important;
        animation-play-state: paused !important;
      }
      .ai2047-brandbook-v1 #ecosystem article:hover div.w-11.h-11 svg,
      .ai2047-brandbook-v1 #ecosystem article:hover div.w-13.h-13 svg,
      .ai2047-brandbook-v1 #agenda article:hover span.w-\\[48px\\] svg {
        color: #FFFFFF !important;
      }

      /* =====================================================================
         15. INNER PAGES COHESION (.ai2047-brandbook-inner)
         ===================================================================== */
      .ai2047-brandbook-v1.ai2047-brandbook-inner,
      .ai2047-brandbook-v1.ai2047-brandbook-inner main {
        overflow-x: clip !important;
        overflow-y: visible !important;
      }

      @media (min-width: 981px) {
        .ai2047-brandbook-v1.ai2047-brandbook-inner .grid.overflow-x-auto,
        .ai2047-brandbook-v1.ai2047-brandbook-inner [class*="overflow-x-auto"] {
          overflow: visible !important;
        }
      }

      @media (max-width: 980px) {
        .ai2047-brandbook-v1.ai2047-brandbook-inner .grid.overflow-x-auto,
        .ai2047-brandbook-v1.ai2047-brandbook-inner [class*="overflow-x-auto"] {
          overflow-x: auto !important;
          overflow-y: hidden !important;
        }
      }

      .ai2047-brandbook-v1.ai2047-brandbook-inner main {
        background: #08121E !important;
        background-image: none !important;
        color: #FFFFFF !important;
      }

      .ai2047-brandbook-v1.ai2047-brandbook-inner main > section:nth-of-type(even):not(:first-of-type):not(.page-hero-top):not(#speakers):not(#lineup):not(#organizer):not(#footer) {
        background-color: #0B1829 !important;
        background-image: none !important;
        border-top: 1px solid rgba(0, 105, 184, 0.22) !important;
        border-bottom: 1px solid rgba(0, 105, 184, 0.22) !important;
      }

      .ai2047-brandbook-v1.ai2047-brandbook-inner main > section:nth-of-type(odd):not(:first-of-type):not(.page-hero-top):not(#speakers):not(#lineup):not(#organizer):not(#footer) {
        background-color: #08121E !important;
        background-image: none !important;
      }

      /* Inner Page Hero Banners (Preserve absolute hero image & overlays, keep content left-aligned above them) */
      .ai2047-brandbook-v1.ai2047-brandbook-inner main > section:first-of-type:not(#lineup) {
        position: relative !important;
        background-color: #08121E !important;
        border-bottom: 2px solid #0069B8 !important;
      }
      .ai2047-brandbook-v1.ai2047-brandbook-inner main > section:first-of-type:not(.page-hero-top):not(#lineup) {
        padding-top: 175px !important;
        padding-bottom: 84px !important;
      }
      .ai2047-brandbook-v1.ai2047-brandbook-inner main > section:first-of-type > div:not(.absolute) {
        position: relative !important;
        z-index: 5 !important;
      }
      .ai2047-brandbook-v1.ai2047-brandbook-inner main > section:first-of-type h1 {
        color: #FFFFFF !important;
        font-family: 'Space Grotesk', sans-serif !important;
        font-size: clamp(36px, 4.6vw, 60px) !important;
        line-height: 1.12 !important;
        font-weight: 700 !important;
        letter-spacing: -0.02em !important;
      }
      .ai2047-brandbook-v1.ai2047-brandbook-inner main > section:first-of-type p {
        color: rgba(247, 249, 252, 0.88) !important;
      }

      /* Fix Card & Tile Headings on Inner Pages (prevent 40px section-h3 override inside cards) */
      .ai2047-brandbook-v1.ai2047-brandbook-inner article h3,
      .ai2047-brandbook-v1.ai2047-brandbook-inner .grid h3,
      .ai2047-brandbook-v1.ai2047-brandbook-inner [class*="rounded-"] h3 {
        font-size: clamp(19px, 1.8vw, 23px) !important;
        line-height: 1.3 !important;
        font-weight: 700 !important;
        letter-spacing: -0.01em !important;
        color: #FFFFFF !important;
      }
      .ai2047-brandbook-v1.ai2047-brandbook-inner article h4,
      .ai2047-brandbook-v1.ai2047-brandbook-inner .grid h4,
      .ai2047-brandbook-v1.ai2047-brandbook-inner [class*="rounded-"] h4 {
        font-size: clamp(17px, 1.5vw, 20px) !important;
        line-height: 1.35 !important;
        font-weight: 600 !important;
      }

      /* Inner Page Glass Form Cards (Enquiry & Onboarding Pages) */
      .ai2047-brandbook-v1.ai2047-brandbook-inner div.rounded-\\[32px\\].backdrop-blur-\\[24px\\] {
        background: #0D1B2E !important;
        border: 1px solid rgba(0, 105, 184, 0.52) !important;
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 158, 173, 0.22) !important;
      }

      /* HubSpot Embedded Form Submit CTA -> Pulse Orange (#F15928) + Pure White Text */
      .ai2047-brandbook-v1.ai2047-brandbook-inner .hs-button,
      .ai2047-brandbook-v1.ai2047-brandbook-inner input[type="submit"].hs-button {
        background-color: #F15928 !important;
        background-image: none !important;
        border: 1px solid #F15928 !important;
        border-radius: 9999px !important;
        color: #FFFFFF !important;
        font-family: 'Space Grotesk', sans-serif !important;
        font-weight: 700 !important;
        padding: 12px 28px !important;
        cursor: pointer !important;
        transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease !important;
      }
      .ai2047-brandbook-v1.ai2047-brandbook-inner .hs-button:hover,
      .ai2047-brandbook-v1.ai2047-brandbook-inner input[type="submit"].hs-button:hover {
        background-color: #D9481B !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 12px 28px rgba(241, 89, 40, 0.4) !important;
      }

      /* Map legacy #C0F43C / #18d4ff accents on dark inner sections -> Signal Teal & Pulse Orange */
      .ai2047-brandbook-v1.ai2047-brandbook-inner .text-\\[\\#C0F43C\\],
      .ai2047-brandbook-v1.ai2047-brandbook-inner .text-\\[\\#c0f43c\\],
      .ai2047-brandbook-v1.ai2047-brandbook-inner .text-\\[\\#18d4ff\\] {
        color: #009EAD !important;
      }
      .ai2047-brandbook-v1.ai2047-brandbook-inner .bg-clip-text.text-transparent {
        background-image: none !important;
        background-color: transparent !important;
        -webkit-text-fill-color: #009EAD !important;
        color: #009EAD !important;
      }
      .ai2047-brandbook-v1.ai2047-brandbook-inner [class*="border-[#C0F43C]"] {
        border-color: rgba(0, 158, 173, 0.45) !important;
      }
      .ai2047-brandbook-v1.ai2047-brandbook-inner [class*="bg-[#C0F43C]"]:not(a):not(button) {
        background-color: rgba(0, 158, 173, 0.16) !important;
        border: 1px solid rgba(0, 158, 173, 0.45) !important;
        color: #009EAD !important;
      }

      @media (prefers-reduced-motion: reduce) {
        .ai2047-brandbook-v1 #attend article div.rounded-full,
        .ai2047-brandbook-v1 #attend article div.rounded-full::after,
        .ai2047-brandbook-v1 #attend article div.rounded-full img,
        .ai2047-brandbook-v1 #networking article span.w-10.h-10::before,
        .ai2047-brandbook-v1 #networking article span.w-10.h-10 img,
        .ai2047-brandbook-v1 #ecosystem article div.w-11.h-11,
        .ai2047-brandbook-v1 #ecosystem article div.w-13.h-13,
        .ai2047-brandbook-v1 #agenda article span.w-\\[48px\\],
        .ai2047-brandbook-v1 #testimonials .bb-v1-quote-icon {
          animation: none !important;
        }
        .ai2047-brandbook-v1 a::after,
        .ai2047-brandbook-v1 button::after {
          transition: none !important;
        }
      }
    `}</style>
  );
}
