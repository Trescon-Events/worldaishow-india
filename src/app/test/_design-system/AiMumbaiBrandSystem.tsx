import React from "react";
import { BRANDBOOK_URIS } from "./BrandBookBgElements";

/**
 * AI MUMBAI | AI 2047 — SCOPED COLOR & MOTIF OVERRIDE FOR LIVE DESIGN
 * -------------------------------------------------------------------
 * Keeps the exact same layout, components, and structure as the live homepage
 * and live speakers page, while applying:
 * - Brand Blue (#0069B8) primary alternating sections (with crisp white headings & white cards)
 * - White (#FFFFFF) alternating sections
 * - Brand Book Accents: Sovereign Blue (#0069B8), Signal Teal (#009EAD), Pulse Orange (#F15928)
 * - Authentic Brand Book SVG Elements (Pages 35–41 of AI 2047-BrandBook_V1.0.pdf):
 *   Strictly 1 background element per content section (no-repeat), 0 on Hero Banner.
 * - Brand Book Typographic System (Pages 30–34, 1.200 Modular Scale):
 *   Space Grotesk for Headlines (H1–H5) + Plus Jakarta Sans for Body/UI (B1, B2, P, C).
 */

export function AiMumbaiLiveThemeStyles() {
  const pulseLight = `url("${BRANDBOOK_URIS.digitalPulseLight}")`;
  const waveLight = `url("${BRANDBOOK_URIS.halftoneWaveLight}")`;
  const isoVortexLight = `url("${BRANDBOOK_URIS.isometricVortexLight}")`;

  // Subtle pure-white Brand Book motifs for #0069B8 Brand Blue sections (strictly 1 per section)
  const pulseOnBlue = `url("${BRANDBOOK_URIS.digitalPulseLight
    .replace(/%230069B8/g, "%23FFFFFF")
    .replace(/%23009EAD/g, "%23FFFFFF")}")`;
  const waveOnBlue = `url("${BRANDBOOK_URIS.halftoneWaveLight
    .replace(/%230069B8/g, "%23FFFFFF")
    .replace(/%23009EAD/g, "%23FFFFFF")}")`;
  const isoVortexOnBlue = `url("${BRANDBOOK_URIS.isometricVortexLight
    .replace(/%230069B8/g, "%23FFFFFF")
    .replace(/%23009EAD/g, "%23FFFFFF")}")`;

  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

      .ai2047-live-theme {
        --bg: #0069B8;
        --panel: #FFFFFF;
        --panel-soft: #F2F8FE;
        --line: rgba(0, 105, 184, 0.22);
        --line-green: rgba(241, 89, 40, 0.55);
        --text: #0B1F3A;
        --muted: #334155;
        --dim: #52657A;
        --cyan: #009EAD;
        --blue: #0069B8;
        --green: #F15928;

        --color-bg: #0069B8;
        --color-panel: #FFFFFF;
        --color-panel-soft: #F2F8FE;
        --color-line: rgba(0, 105, 184, 0.22);
        --color-line-green: rgba(241, 89, 40, 0.55);
        --color-text: #0B1F3A;
        --color-muted: #334155;
        --color-dim: #52657A;
        --color-cyan: #009EAD;
        --color-blue: #0069B8;
        --color-green: #F15928;

        font-family: 'Plus Jakarta Sans', sans-serif !important;
        color: #0B1F3A;
      }

      /* Prevent flash of legacy SVG logo before TestBrandLogos swaps in PNG lockups */
      .ai2047-live-theme img[src*="wais-27-enterprise"] {
        opacity: 0 !important;
      }

      .ai2047-live-theme header nav > a:first-child {
        width: 175px !important;
        height: 56px !important;
      }
      .ai2047-live-theme header nav > a:first-child img {
        object-fit: contain !important;
        object-position: left center !important;
      }

      .ai2047-live-theme #home .container > div:first-child img {
        width: auto !important;
        height: auto !important;
        max-width: 330px !important;
        max-height: 155px !important;
        filter: drop-shadow(0 6px 24px rgba(0, 28, 58, 0.48)) !important;
      }
      @media (max-width: 640px) {
        .ai2047-live-theme #home .container > div:first-child img {
          max-width: 240px !important;
          max-height: 120px !important;
        }
      }

      .ai2047-live-theme #footer img[data-test-logo="footer"] {
        width: auto !important;
        height: auto !important;
        max-width: 215px !important;
        max-height: 98px !important;
        object-position: left center !important;
      }

      /* =====================================================================
         0. BRAND BOOK TYPOGRAPHIC SYSTEM (1.200 MODULAR SCALE — PAGES 30–34)
            - Headlines: Space Grotesk (H1 Bold 57px/115%, H2 Semibold 48px/120%,
              H3 Semibold 40px/120%, H4 Medium 33px/125%, H5 Medium 27px/130%)
            - Body & UI: Plus Jakarta Sans (B1 Medium 23px/135%, B2 Regular 19px/145%,
              P Regular 16px/150%, C Regular 12px/160%)
            - Do Not Compress or Distort Letterforms (reset negative tracking)
         ===================================================================== */
      .ai2047-live-theme h1,
      .ai2047-live-theme h2,
      .ai2047-live-theme h3,
      .ai2047-live-theme h4,
      .ai2047-live-theme h5,
      .ai2047-live-theme .hero-bg strong,
      .ai2047-live-theme #attend article strong,
      .ai2047-live-theme #attend > div > div.mt-16 strong {
        font-family: 'Space Grotesk', sans-serif !important;
        letter-spacing: -0.01em !important;
      }

      /* H1: Space Grotesk Bold — 57px / 115% */
      .ai2047-live-theme h1 {
        font-size: clamp(36px, 4.5vw, 57px) !important;
        line-height: 1.15 !important;
        font-weight: 700 !important;
      }

      /* H2: Space Grotesk Semibold — 48px / 120% */
      .ai2047-live-theme h2 {
        font-size: clamp(30px, 3.8vw, 48px) !important;
        line-height: 1.2 !important;
        font-weight: 600 !important;
      }

      /* H3 (Section-level): Space Grotesk Semibold — 40px / 120% */
      .ai2047-live-theme h3 {
        font-size: clamp(26px, 3vw, 40px) !important;
        line-height: 1.2 !important;
        font-weight: 600 !important;
      }

      /* H4: Space Grotesk Medium — 33px / 125% */
      .ai2047-live-theme h4,
      .ai2047-live-theme #attend > div > div.mt-16 h3 {
        font-size: clamp(22px, 2.4vw, 33px) !important;
        line-height: 1.25 !important;
        font-weight: 500 !important;
      }

      /* H5 (Card-level titles & Delegate Pass title): Space Grotesk Medium — 27px / 130% */
      .ai2047-live-theme h5,
      .ai2047-live-theme #ecosystem article h3,
      .ai2047-live-theme #agenda article h3,
      .ai2047-live-theme #networking article h3,
      .ai2047-live-theme #networking .max-w-\\[760px\\] h4,
      .ai2047-live-theme #lineup .rounded-\\[20px\\] h3,
      .ai2047-live-theme #cta article h3 {
        font-size: clamp(20px, 2vw, 27px) !important;
        line-height: 1.3 !important;
        font-weight: 500 !important;
      }

      /* Footer Column Labels (EVENT / ENQUIRIES / ORGANISER) */
      .ai2047-live-theme #footer h3 {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: 12px !important;
        line-height: 1.6 !important;
        font-weight: 700 !important;
        letter-spacing: 0.22em !important;
      }

      /* Body Text, Reports, Digital Interfaces -> Plus Jakarta Sans */
      .ai2047-live-theme p,
      .ai2047-live-theme li,
      .ai2047-live-theme dd,
      .ai2047-live-theme summary,
      .ai2047-live-theme input,
      .ai2047-live-theme blockquote {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        letter-spacing: 0 !important;
      }

      /* B1: Plus Jakarta Sans Medium — 23px / 135% (Hero Standfirst) */
      .ai2047-live-theme #home .container > p {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: clamp(18px, 1.8vw, 23px) !important;
        line-height: 1.35 !important;
        font-weight: 500 !important;
      }

      /* B2: Plus Jakarta Sans Regular — 19px / 145% (Section Lead Descriptions) */
      .ai2047-live-theme #ecosystem > div > div.text-center > p:first-of-type,
      .ai2047-live-theme #ecosystem > div > p,
      .ai2047-live-theme #agenda > div > p,
      .ai2047-live-theme #networking > div > div.flex > div > p,
      .ai2047-live-theme #organizer p {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: clamp(16px, 1.5vw, 19px) !important;
        line-height: 1.45 !important;
        font-weight: 400 !important;
      }

      /* P: Plus Jakarta Sans Regular — 16px / 150% (Card Body, FAQ Answers, Standard Copy) */
      .ai2047-live-theme article p,
      .ai2047-live-theme #faq details p,
      .ai2047-live-theme #networking .max-w-\\[760px\\] p,
      .ai2047-live-theme #lineup p,
      .ai2047-live-theme #cta p {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: 16px !important;
        line-height: 1.5 !important;
        font-weight: 400 !important;
      }

      /* Speaker Card Typography (Space Grotesk Name + Plus Jakarta Sans Role/Bio) */
      .ai2047-live-theme .speaker-card-inner h3,
      .ai2047-live-theme .speaker-card-inner h4 {
        font-family: 'Space Grotesk', sans-serif !important;
        font-size: 21px !important;
        line-height: 1.25 !important;
        font-weight: 600 !important;
        color: #FFFFFF !important;
      }
      .ai2047-live-theme .speaker-card-inner p {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: 13.5px !important;
        line-height: 1.45 !important;
        font-weight: 400 !important;
        color: rgba(255, 255, 255, 0.84) !important;
      }

      /* C: Plus Jakarta Sans Regular — 12px / 160% (Captions, Eyebrows, Citations, Badges) */
      .ai2047-live-theme .font-mono,
      .ai2047-live-theme #home .grid span.uppercase,
      .ai2047-live-theme #ecosystem > div > div.text-center > p:last-of-type {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
        font-size: 12px !important;
        line-height: 1.6 !important;
        font-weight: 400 !important;
      }

      /* =====================================================================
         1. BASE CANVAS (#0069B8 BRAND BLUE) & FROSTED WHITE STICKY HEADER
         ===================================================================== */
      .ai2047-live-theme main,
      .ai2047-live-theme .page-speakers {
        background-color: #0069B8 !important;
        color: #0B1F3A !important;
      }

      .ai2047-live-theme header nav[aria-label="Primary navigation"] {
        background: rgba(255, 255, 255, 0.96) !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 16px 42px rgba(0, 32, 68, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.95) !important;
      }

      /* Desktop Nav Links on Frosted White Header */
      .ai2047-live-theme header nav[aria-label="Primary navigation"] .uppercase a:not([class*="bg-[#C0F43C]"]) {
        color: #0B1F3A !important;
      }
      .ai2047-live-theme header nav[aria-label="Primary navigation"] .uppercase a:not([class*="bg-[#C0F43C]"]):hover {
        color: #0069B8 !important;
      }

      /* Active Nav Item in Header -> Pulse Orange (#F15928) */
      .ai2047-live-theme header nav[aria-label="Primary navigation"] a.text-\\[\\#c0f43c\\] {
        color: #F15928 !important;
      }
      .ai2047-live-theme header nav[aria-label="Primary navigation"] span.bg-\\[\\#c0f43c\\] {
        background-color: #F15928 !important;
      }

      /* Mobile Hamburger Toggle & Drawer on Frosted White Header */
      .ai2047-live-theme header nav[aria-label="Primary navigation"] > button {
        background: #FFFFFF !important;
        border-color: rgba(0, 105, 184, 0.26) !important;
        color: #0B1F3A !important;
      }
      .ai2047-live-theme header nav[aria-label="Primary navigation"] > button span {
        background-color: #0B1F3A !important;
      }
      .ai2047-live-theme header > div.rounded-\\[24px\\] {
        background: rgba(255, 255, 255, 0.98) !important;
        border-color: rgba(0, 105, 184, 0.24) !important;
        box-shadow: 0 22px 52px rgba(0, 32, 68, 0.24) !important;
      }
      .ai2047-live-theme header > div.rounded-\\[24px\\] a {
        color: #0B1F3A !important;
      }
      .ai2047-live-theme header > div.rounded-\\[24px\\] a.text-\\[\\#c0f43c\\] {
        color: #F15928 !important;
      }
      .ai2047-live-theme header > div.rounded-\\[24px\\] button {
        border-color: rgba(0, 105, 184, 0.22) !important;
        color: #0B1F3A !important;
      }

      /* =====================================================================
         2. HERO BANNER (SOVEREIGN BLUE VIDEO TINT — NO #08121e, NO BG MOTIFS)
            Pairs with wais-26-enterprise-white-logo.png & crisp white H1
         ===================================================================== */
      .ai2047-live-theme .hero-bg {
        background:
          linear-gradient(180deg, rgba(0, 56, 108, 0.35) 0%, rgba(0, 72, 134, 0.82) 98%),
          radial-gradient(ellipse at 50% 90%, rgba(0, 158, 173, 0.28), transparent 34%),
          radial-gradient(ellipse at 18% 19%, rgba(0, 105, 184, 0.38), transparent 40%),
          #003E75 !important;
      }

      .ai2047-live-theme #home > div.bg-\\[\\#020917\\]\\/35 {
        background-color: rgba(0, 48, 94, 0.38) !important;
      }

      .ai2047-live-theme .hero-overlay {
        background:
          linear-gradient(180deg, rgba(0, 52, 100, 0.32) 0%, rgba(0, 62, 118, 0.72) 74%, rgba(0, 74, 138, 0.92) 100%) !important;
      }

      .ai2047-live-theme .hero-grid-pattern {
        background: none !important;
      }

      /* Brighten Signal Teal highlight strictly on deep blue Hero so it pops cleanly */
      .ai2047-live-theme #home .bg-clip-text.text-transparent,
      .ai2047-live-theme .page-hero-top .bg-clip-text.text-transparent {
        background-image: none !important;
        background-color: transparent !important;
        -webkit-text-fill-color: #9BF6FF !important;
        color: #9BF6FF !important;
      }

      .ai2047-live-theme #home .container > p {
        color: #F0F8FF !important;
      }

      .ai2047-live-theme .page-hero-top {
        background-image:
          linear-gradient(90deg, rgba(0, 54, 104, 0.92) 0%, rgba(0, 68, 128, 0.72) 48%, rgba(0, 68, 128, 0.2) 100%),
          url("/mumbai/enterprise/images/speakers/Mumbai-speakers-overview.jpg") !important;
        background-size: 100% 100%, cover !important;
        background-position: center, center !important;
        background-repeat: no-repeat, no-repeat !important;
      }
      .ai2047-live-theme .page-hero-top::after {
        background: linear-gradient(to top, rgba(0, 62, 118, 0.45), transparent) !important;
      }

      /* =====================================================================
         3. BRAND BLUE (#0069B8) SECTIONS (ALTERNATING WITH WHITE #FFFFFF)
            - Strictly 1 single Brand Book element per section (no-repeat)
            - Crisp White (#FFFFFF) headings & elevated White (#FFFFFF) cards
         ===================================================================== */

      /* #ecosystem -> Brand Blue (#0069B8) + Strictly 1 element: Isometric Data Vortex (top-right) */
      .ai2047-live-theme #ecosystem {
        background-image: ${isoVortexOnBlue} !important;
        background-size: 460px auto !important;
        background-position: right -50px top 40px !important;
        background-repeat: no-repeat !important;
        background-color: #0069B8 !important;
        color: #FFFFFF !important;
        border-top: 1px solid rgba(255, 255, 255, 0.16) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.16) !important;
      }
      /* Hide dark-mode grid & blur overlays inside #ecosystem */
      .ai2047-live-theme #ecosystem > div[aria-hidden="true"] {
        display: none !important;
      }

      /* #speakers & #lineup -> Brand Blue (#0069B8) + Strictly 1 element: Digital Pulse (top-left) */
      .ai2047-live-theme #speakers,
      .ai2047-live-theme #lineup {
        background-image: ${pulseOnBlue} !important;
        background-size: 420px 420px !important;
        background-position: left -90px top -70px !important;
        background-repeat: no-repeat !important;
        background-color: #0069B8 !important;
        color: #FFFFFF !important;
        border-top: 1px solid rgba(255, 255, 255, 0.16) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.16) !important;
      }

      /* #testimonials -> Brand Blue (#0069B8) + Strictly 1 element: Halftone Wave (bottom-left) */
      .ai2047-live-theme #testimonials {
        background-image: ${waveOnBlue} !important;
        background-size: 680px auto !important;
        background-position: left -110px bottom -30px !important;
        background-repeat: no-repeat !important;
        background-color: #0069B8 !important;
        color: #FFFFFF !important;
        border-top: 1px solid rgba(255, 255, 255, 0.16) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.16) !important;
      }
      .ai2047-live-theme #testimonials > div[aria-hidden="true"] {
        display: none !important;
      }

      /* #organizer -> Brand Blue (#0069B8) + Strictly 1 element: Digital Pulse (bottom-right) */
      .ai2047-live-theme #organizer {
        background-image: ${pulseOnBlue} !important;
        background-size: 400px 400px !important;
        background-position: right -80px bottom -80px !important;
        background-repeat: no-repeat !important;
        background-color: #0069B8 !important;
        color: #FFFFFF !important;
        border-top: 1px solid rgba(255, 255, 255, 0.16) !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.16) !important;
      }

      /* #cta (on Speaker Preview, between Brand Blue #lineup and Brand Blue #footer) -> White + 1 element */
      .ai2047-live-theme #cta {
        background-image:
          ${pulseLight},
          linear-gradient(180deg, #FFFFFF 0%, #F7FBFF 100%) !important;
        background-size: 400px 400px, 100% 100% !important;
        background-position: right -80px bottom -80px, center !important;
        background-repeat: no-repeat, no-repeat !important;
        background-color: #FFFFFF !important;
        color: #0B1F3A !important;
        border-top: 1px solid rgba(0, 105, 184, 0.14) !important;
        border-bottom: 1px solid rgba(0, 105, 184, 0.14) !important;
      }
      .ai2047-live-theme #cta > div[aria-hidden="true"] {
        display: none !important;
      }

      /* #footer -> Brand Blue (#0069B8) Surface + White Enterprise Logo */
      .ai2047-live-theme #footer {
        background-color: #0069B8 !important;
        background-image: none !important;
        border-top: 1px solid rgba(255, 255, 255, 0.22) !important;
        color: #FFFFFF !important;
      }

      /* --- Section-Level Headings Directly on Brand Blue (#0069B8) -> Pure White --- */
      .ai2047-live-theme #ecosystem h2,
      .ai2047-live-theme #speakers h2,
      .ai2047-live-theme #testimonials h2,
      .ai2047-live-theme #lineup h2 {
        color: #FFFFFF !important;
      }

      /* --- Card-Level Headings Inside White (#FFFFFF) Cards -> Deep Navy (#0B1F3A) --- */
      .ai2047-live-theme #ecosystem article h3,
      .ai2047-live-theme #lineup .rounded-\\[20px\\] h3,
      .ai2047-live-theme #cta h2,
      .ai2047-live-theme #cta article h3 {
        color: #0B1F3A !important;
      }

      /* --- Lead Paragraphs & Citations Directly on Brand Blue (#0069B8) --- */
      .ai2047-live-theme #ecosystem > div > p,
      .ai2047-live-theme #ecosystem > div > div.text-center > p {
        color: rgba(255, 255, 255, 0.92) !important;
      }
      .ai2047-live-theme #ecosystem > div > p span.font-mono,
      .ai2047-live-theme #ecosystem > div > div.text-center > p span.font-mono {
        color: rgba(255, 255, 255, 0.78) !important;
      }

      /* --- Body Copy Inside White (#FFFFFF) Cards --- */
      .ai2047-live-theme #organizer p,
      .ai2047-live-theme #lineup .rounded-\\[20px\\] p,
      .ai2047-live-theme #cta article p {
        color: #334155 !important;
      }

      /* Crisp White Cards inside #ecosystem, #testimonials, #organizer, #cta */
      .ai2047-live-theme #ecosystem article,
      .ai2047-live-theme #testimonials article,
      .ai2047-live-theme #organizer > div > div,
      .ai2047-live-theme #cta article {
        background: #FFFFFF !important;
        border: 1px solid rgba(255, 255, 255, 0.85) !important;
        box-shadow: 0 20px 46px rgba(0, 24, 56, 0.2) !important;
      }

      .ai2047-live-theme #ecosystem article:hover,
      .ai2047-live-theme #cta article:hover {
        border-color: #F15928 !important;
        box-shadow: 0 24px 54px rgba(0, 24, 56, 0.28) !important;
      }

      /* #ecosystem Telemetry Cards & Operational Ownership Cards */
      .ai2047-live-theme #ecosystem article div.w-11.h-11,
      .ai2047-live-theme #ecosystem article div.w-13.h-13 {
        background: #EAF4FC !important;
        border-color: rgba(0, 105, 184, 0.24) !important;
        color: #0069B8 !important;
        box-shadow: none !important;
      }
      .ai2047-live-theme #ecosystem article div.w-11.h-11 svg,
      .ai2047-live-theme #ecosystem article div.w-13.h-13 svg {
        color: #0069B8 !important;
      }
      .ai2047-live-theme #ecosystem article span.rounded-full {
        background: #EEF6FC !important;
        border-color: rgba(0, 105, 184, 0.2) !important;
        color: #0069B8 !important;
        font-weight: 600 !important;
      }
      .ai2047-live-theme #ecosystem article p {
        color: #334155 !important;
      }
      .ai2047-live-theme #ecosystem article p.font-bold {
        color: #0B1F3A !important;
        font-weight: 600 !important;
      }
      .ai2047-live-theme #ecosystem article .border-t {
        border-color: rgba(0, 105, 184, 0.14) !important;
      }
      .ai2047-live-theme #ecosystem article .space-y-2 .flex span:first-child {
        color: #475569 !important;
      }
      .ai2047-live-theme #ecosystem article .space-y-2 .flex span:last-child {
        color: #0B1F3A !important;
      }
      .ai2047-live-theme #ecosystem article .h-2\\.5 {
        background-color: #DCEBFA !important;
        border-color: rgba(0, 105, 184, 0.16) !important;
      }
      .ai2047-live-theme #ecosystem article .h-2\\.5 > div:first-child {
        background: #009EAD !important;
        box-shadow: 0 0 10px rgba(0, 158, 173, 0.35) !important;
      }
      .ai2047-live-theme #ecosystem article .mt-7 span.font-mono {
        color: #52657A !important;
      }
      .ai2047-live-theme #ecosystem article .mt-7 span.text-\\[\\#18d4ff\\] {
        color: #0069B8 !important;
        font-weight: 600 !important;
      }
      .ai2047-live-theme #ecosystem article span.text-\\[76px\\] {
        color: rgba(0, 105, 184, 0.06) !important;
      }
      .ai2047-live-theme #ecosystem article span.text-white\\/50 {
        color: #52657A !important;
      }
      .ai2047-live-theme #ecosystem article div.h-\\[1px\\] {
        background-color: rgba(0, 105, 184, 0.14) !important;
      }
      .ai2047-live-theme #ecosystem article div.h-\\[1px\\] > div {
        background: #009EAD !important;
      }

      /* Executive Mandate Callout Banner & Lineup Intake Banner */
      .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35,
      .ai2047-live-theme #lineup .rounded-\\[20px\\].border-\\[\\#C0F43C\\]\\/35 {
        background: linear-gradient(135deg, #FFFFFF 0%, #F2F8FE 100%) !important;
        border: 1.5px solid #009EAD !important;
        box-shadow: 0 18px 44px rgba(0, 65, 120, 0.1) !important;
      }
      .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 > div.w-1\\.5 {
        background: #0069B8 !important;
      }
      .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 div.w-14.h-14 {
        background: #EAF4FC !important;
        border-color: rgba(0, 158, 173, 0.35) !important;
        color: #009EAD !important;
        box-shadow: none !important;
      }
      .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 p {
        color: #0B1F3A !important;
      }

      /* #lineup Search Input & Divider on Brand Blue (#0069B8) */
      .ai2047-live-theme #lineup .border-b.border-white\\/10 {
        border-color: rgba(255, 255, 255, 0.24) !important;
      }
      .ai2047-live-theme #lineup input[type="search"] {
        background-color: #FFFFFF !important;
        border-color: rgba(255, 255, 255, 0.85) !important;
        color: #0B1F3A !important;
        box-shadow: 0 8px 20px rgba(0, 22, 52, 0.16) !important;
      }
      .ai2047-live-theme #lineup input[type="search"]::placeholder {
        color: #64748B !important;
      }

      /* #testimonials Controls, Spotlight Card & Selector Buttons (legacy fallback) */
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) [aria-label="Testimonial controls"] button {
        background: #FFFFFF !important;
        border-color: rgba(0, 105, 184, 0.24) !important;
        color: #0B1F3A !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) [aria-label="Testimonial controls"] button:hover {
        border-color: #0069B8 !important;
        color: #0069B8 !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) [aria-label="Testimonial controls"] > div {
        background: #FFFFFF !important;
        border-color: rgba(0, 105, 184, 0.22) !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) [aria-label="Testimonial controls"] > div span:first-child {
        color: #0069B8 !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) [aria-label="Testimonial controls"] > div span:not(:first-child) {
        color: #64748B !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article blockquote {
        color: #0B1F3A !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article span.text-\\[180px\\] {
        color: rgba(0, 105, 184, 0.06) !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article span.text-white\\/55 {
        color: #52657A !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article span.rounded-\\[12px\\] {
        background: #EAF4FC !important;
        border-color: rgba(0, 158, 173, 0.35) !important;
        color: #009EAD !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article span.rounded-full {
        background: #EAF4FC !important;
        border-color: rgba(0, 105, 184, 0.24) !important;
        color: #0069B8 !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article span.rounded-full > span {
        background-color: #009EAD !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article div.rounded-\\[18px\\] {
        background: #F0F7FD !important;
        border-color: rgba(0, 105, 184, 0.2) !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article div.rounded-\\[18px\\] .border-b,
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article div.rounded-\\[18px\\] .border-t {
        border-color: rgba(0, 105, 184, 0.14) !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article div.rounded-\\[18px\\] span.rounded-md {
        background: #FFFFFF !important;
        border-color: rgba(0, 105, 184, 0.2) !important;
        color: #0069B8 !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article div.rounded-\\[18px\\] div.text-white\\/45,
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article div.rounded-\\[18px\\] span.text-white\\/45 {
        color: #52657A !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article div.rounded-\\[18px\\] strong {
        color: #0B1F3A !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) article div.rounded-\\[18px\\] span.mt-1\\.5 {
        color: #009EAD !important;
        font-weight: 600 !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) .grid-cols-4 > button {
        background: rgba(255, 255, 255, 0.78) !important;
        border: 1px solid rgba(0, 105, 184, 0.18) !important;
        box-shadow: 0 6px 18px rgba(0, 65, 120, 0.05) !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) .grid-cols-4 > button:hover {
        background: #FFFFFF !important;
        border-color: rgba(0, 105, 184, 0.38) !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) .grid-cols-4 > button[class*="-translate-y-0.5"] {
        background: #FFFFFF !important;
        border: 1.5px solid #0069B8 !important;
        box-shadow: 0 14px 30px rgba(0, 105, 184, 0.14) !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) .grid-cols-4 > button div.text-white {
        color: #0B1F3A !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) .grid-cols-4 > button div.text-white\\/50 {
        color: #475569 !important;
      }
      .ai2047-live-theme #testimonials:not(.test-testimonials-redesign) .grid-cols-4 > button span.font-mono {
        color: #0069B8 !important;
      }

      /* #organizer Panel */
      .ai2047-live-theme #organizer > div > div {
        border-top: 3px solid #009EAD !important;
      }
      .ai2047-live-theme #organizer span.font-mono {
        color: #0069B8 !important;
        font-weight: 600 !important;
      }
      .ai2047-live-theme #organizer a {
        color: #0069B8 !important;
      }
      .ai2047-live-theme #organizer a:hover {
        color: #F15928 !important;
      }

      /* #cta Dividers */
      .ai2047-live-theme #cta article .border-t {
        border-color: rgba(0, 105, 184, 0.14) !important;
      }

      /* #footer Typography, Links & Social Icons on Brand Blue (#0069B8) */
      .ai2047-live-theme #footer .border-b {
        border-color: rgba(255, 255, 255, 0.22) !important;
      }
      .ai2047-live-theme #footer h3 {
        color: #FFFFFF !important;
      }
      .ai2047-live-theme #footer p {
        color: rgba(255, 255, 255, 0.9) !important;
      }
      .ai2047-live-theme #footer a.text-muted {
        color: rgba(255, 255, 255, 0.9) !important;
      }
      .ai2047-live-theme #footer a.text-muted:hover {
        color: #9BF6FF !important;
      }
      .ai2047-live-theme #footer p.font-mono {
        color: rgba(255, 255, 255, 0.78) !important;
      }

      /* =====================================================================
         4. ALTERNATING WHITE (#FFFFFF) SECTIONS
            - Strictly 1 single element per section (no-repeat)
         ===================================================================== */

      /* #attend -> White + Strictly 1 element: Digital Pulse (top-left) */
      .ai2047-live-theme #attend {
        background-image:
          ${pulseLight},
          linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%) !important;
        background-size: 420px 420px, 100% 100% !important;
        background-position: left -90px top -70px, center !important;
        background-repeat: no-repeat, no-repeat !important;
        background-color: #FFFFFF !important;
        color: #0B1F3A !important;
        border-top: 1px solid rgba(0, 105, 184, 0.14) !important;
        border-bottom: 1px solid rgba(0, 105, 184, 0.14) !important;
      }

      /* #agenda -> White + Strictly 1 element: Halftone Wave (bottom-right) */
      .ai2047-live-theme #agenda {
        background-image:
          ${waveLight},
          linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%) !important;
        background-size: 680px auto, 100% 100% !important;
        background-position: right -100px bottom -30px, center !important;
        background-repeat: no-repeat, no-repeat !important;
        background-color: #FFFFFF !important;
        color: #0B1F3A !important;
        border-top: 1px solid rgba(0, 105, 184, 0.14) !important;
        border-bottom: 1px solid rgba(0, 105, 184, 0.14) !important;
      }

      /* #networking -> White + Strictly 1 element: Isometric Data Vortex (top-right) */
      .ai2047-live-theme #networking {
        background-image:
          ${isoVortexLight},
          linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%) !important;
        background-size: 440px auto, 100% 100% !important;
        background-position: right -50px top 40px, center !important;
        background-repeat: no-repeat, no-repeat !important;
        background-color: #FFFFFF !important;
        color: #0B1F3A !important;
        border-top: 1px solid rgba(0, 105, 184, 0.14) !important;
        border-bottom: 1px solid rgba(0, 105, 184, 0.14) !important;
      }

      /* #partners -> White + Strictly 1 element: Digital Pulse (bottom-left) */
      .ai2047-live-theme #partners {
        background-image:
          ${pulseLight},
          linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%) !important;
        background-size: 400px 400px, 100% 100% !important;
        background-position: left -80px bottom -80px, center !important;
        background-repeat: no-repeat, no-repeat !important;
        background-color: #FFFFFF !important;
        color: #0B1F3A !important;
        border-top: 1px solid rgba(0, 105, 184, 0.14) !important;
        border-bottom: 1px solid rgba(0, 105, 184, 0.14) !important;
      }

      /* #faq -> White + Strictly 1 element: Isometric Data Vortex (top-left) */
      .ai2047-live-theme #faq {
        background-image:
          ${isoVortexLight},
          linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 100%) !important;
        background-size: 420px auto, 100% 100% !important;
        background-position: left -50px top 40px, center !important;
        background-repeat: no-repeat, no-repeat !important;
        background-color: #FFFFFF !important;
        color: #0B1F3A !important;
        border-top: 1px solid rgba(0, 105, 184, 0.14) !important;
        border-bottom: 1px solid rgba(0, 105, 184, 0.14) !important;
      }

      /* Headings & Typography inside White Sections */
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
        color: #0B1F3A !important;
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
        background: linear-gradient(155deg, #FFFFFF 0%, #EFF6FD 100%) !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 14px 34px rgba(0, 65, 120, 0.07) !important;
      }
      .ai2047-live-theme #attend article:hover {
        border-color: #009EAD !important;
        box-shadow: 0 18px 42px rgba(0, 105, 184, 0.15) !important;
      }
      .ai2047-live-theme #attend article div.rounded-full {
        background-color: #0069B8 !important;
        box-shadow: 0 6px 16px rgba(0, 105, 184, 0.26) !important;
      }
      .ai2047-live-theme #attend article span.absolute {
        color: #64748B !important;
      }
      .ai2047-live-theme #attend article strong {
        color: #0069B8 !important;
      }
      .ai2047-live-theme #attend article p {
        color: #0B1F3A !important;
      }

      /* Our Reach & Series Highlights Panel inside #attend -> Brand Blue (#0069B8) */
      .ai2047-live-theme #attend > div > div.mt-16 {
        background: #0069B8 !important;
        border: 1px solid rgba(0, 105, 184, 0.35) !important;
        box-shadow: 0 24px 56px rgba(0, 52, 102, 0.2) !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 h3 {
        color: #FFFFFF !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 div.rounded-2xl {
        background: #FFFFFF !important;
        border: 1px solid rgba(255, 255, 255, 0.85) !important;
        box-shadow: 0 10px 26px rgba(0, 24, 56, 0.16) !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 div.rounded-2xl:hover {
        border-color: #F15928 !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 div.rounded-2xl strong {
        color: #0069B8 !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 div.rounded-2xl span {
        color: #334155 !important;
      }
      .ai2047-live-theme #attend > div > div.mt-16 div.h-\\[1px\\] {
        background: rgba(255, 255, 255, 0.24) !important;
      }

      /* --- Section: #agenda (5 Talking Points) on White --- */
      .ai2047-live-theme #agenda article {
        background: linear-gradient(180deg, #FFFFFF 0%, #F4F9FE 100%) !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 14px 36px rgba(0, 65, 120, 0.07) !important;
      }
      .ai2047-live-theme #agenda article:hover {
        border-color: #0069B8 !important;
        box-shadow: 0 20px 44px rgba(0, 105, 184, 0.15) !important;
      }
      .ai2047-live-theme #agenda article span.w-\\[48px\\] {
        background-color: #EAF4FC !important;
        border-color: rgba(0, 105, 184, 0.3) !important;
        color: #0069B8 !important;
      }
      .ai2047-live-theme #agenda article span.rounded-full {
        background-color: #EAF4FC !important;
        border-color: rgba(0, 105, 184, 0.28) !important;
        color: #0069B8 !important;
      }

      /* --- Section: #networking (Buying Unit + Industries + Delegate Pass) on White --- */
      .ai2047-live-theme #networking article {
        background: linear-gradient(180deg, #FFFFFF 0%, #F4F9FE 100%) !important;
        border: 1px solid rgba(0, 105, 184, 0.22) !important;
        box-shadow: 0 12px 32px rgba(0, 65, 120, 0.06) !important;
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
        color: #0B1F3A !important;
      }
      .ai2047-live-theme #networking article span.w-10.h-10 {
        background-color: #0069B8 !important;
        border-color: #0069B8 !important;
      }
      .ai2047-live-theme #networking .border-t.border-white\\/10 {
        border-color: rgba(0, 105, 184, 0.16) !important;
      }
      /* Delegate Pass Card inside #networking -> Brand Blue (#0069B8) Card */
      .ai2047-live-theme #networking .max-w-\\[760px\\] > div {
        background: #0069B8 !important;
        border: 1.5px solid #009EAD !important;
        box-shadow: 0 22px 52px rgba(0, 52, 102, 0.22) !important;
      }
      .ai2047-live-theme #networking .max-w-\\[760px\\] > div h4 {
        color: #FFFFFF !important;
      }
      .ai2047-live-theme #networking .max-w-\\[760px\\] > div p {
        color: rgba(255, 255, 255, 0.92) !important;
      }

      /* --- Section: #partners (Sponsors) on White --- */
      .ai2047-live-theme #partners span.bg-white {
        border: 1px solid rgba(0, 105, 184, 0.18) !important;
        box-shadow: 0 8px 24px rgba(0, 65, 120, 0.06) !important;
      }

      /* --- Section: #faq (Frequently Asked Questions) on White --- */
      .ai2047-live-theme #faq > div > div {
        background: rgba(255, 255, 255, 0.94) !important;
        backdrop-filter: blur(8px) !important;
        border: 1px solid rgba(0, 105, 184, 0.2) !important;
        box-shadow: 0 18px 48px rgba(0, 65, 120, 0.07) !important;
      }
      .ai2047-live-theme #faq details {
        border-color: rgba(0, 105, 184, 0.16) !important;
      }
      .ai2047-live-theme #faq details summary span {
        color: #0069B8 !important;
        font-weight: 700 !important;
      }
      .ai2047-live-theme #faq details summary strong {
        color: #0B1F3A !important;
      }
      .ai2047-live-theme #faq details[open] summary strong {
        color: #0069B8 !important;
      }
      .ai2047-live-theme #faq details summary i {
        color: #0069B8 !important;
      }

      /* =====================================================================
         5. SOLID SINGLE-COLOR ACCENT TEXT (NO 2-COLOR GRADIENTS)
            - On White (#FFFFFF) sections & White cards: #009EAD (Signal Teal)
            - Directly on Brand Blue (#0069B8) backgrounds: #9BF6FF (Ice Cyan)
         ===================================================================== */
      .ai2047-live-theme #attend .bg-clip-text.text-transparent,
      .ai2047-live-theme #ecosystem article .bg-clip-text.text-transparent,
      .ai2047-live-theme #agenda .bg-clip-text.text-transparent,
      .ai2047-live-theme #networking .bg-clip-text.text-transparent,
      .ai2047-live-theme #partners .bg-clip-text.text-transparent,
      .ai2047-live-theme #faq .bg-clip-text.text-transparent,
      .ai2047-live-theme #cta .bg-clip-text.text-transparent {
        background-image: none !important;
        background-color: transparent !important;
        -webkit-text-fill-color: #009EAD !important;
        color: #009EAD !important;
      }

      /* Headings sitting directly on Brand Blue (#0069B8) surfaces */
      .ai2047-live-theme #ecosystem h2 .bg-clip-text.text-transparent,
      .ai2047-live-theme #speakers h2 .bg-clip-text.text-transparent,
      .ai2047-live-theme #testimonials h2 .bg-clip-text.text-transparent,
      .ai2047-live-theme #lineup h2 .bg-clip-text.text-transparent,
      .ai2047-live-theme #attend > div > div.mt-16 h3 .bg-clip-text.text-transparent {
        background-image: none !important;
        background-color: transparent !important;
        -webkit-text-fill-color: #9BF6FF !important;
        color: #9BF6FF !important;
      }

      .ai2047-live-theme .text-\\[\\#C0F43C\\],
      .ai2047-live-theme .text-\\[\\#c0f43c\\] {
        color: #009EAD !important;
      }

      /* Secondary Outline Buttons:
         - On Hero Banner: crisp translucent Sovereign Blue + white label
         - On Light Blue / White Content Sections: crisp white fill + Sovereign Blue border/label */
      .ai2047-live-theme #home a[class*="border-[#4eb9ff]"] {
        border: 1.5px solid #7CE8F2 !important;
        background-color: rgba(0, 48, 94, 0.52) !important;
        color: #FFFFFF !important;
        box-shadow: 0 4px 20px rgba(0, 32, 64, 0.25) !important;
      }
      .ai2047-live-theme #home a[class*="border-[#4eb9ff]"]:hover {
        background-color: rgba(0, 158, 173, 0.35) !important;
        border-color: #FFFFFF !important;
      }

      .ai2047-live-theme a[class*="border-white/25"] {
        border: 1.5px solid #FFFFFF !important;
        background-color: #FFFFFF !important;
        color: #0069B8 !important;
        box-shadow: 0 8px 22px rgba(0, 28, 60, 0.16) !important;
      }
      .ai2047-live-theme #agenda a[class*="border-white/25"],
      .ai2047-live-theme #networking a[class*="border-white/25"],
      .ai2047-live-theme #partners a[class*="border-white/25"] {
        border: 1.5px solid #0069B8 !important;
        box-shadow: 0 6px 18px rgba(0, 65, 120, 0.08) !important;
      }
      .ai2047-live-theme a[class*="border-white/25"]:hover {
        background-color: #F15928 !important;
        border-color: #F15928 !important;
        color: #FFFFFF !important;
      }

      /* =====================================================================
         6. PULSE ORANGE (#F15928) — HIGH-CONVERSION PRIMARY CTAS
         ===================================================================== */
      .ai2047-live-theme a[class*="bg-[#C0F43C]"],
      .ai2047-live-theme a[class*="bg-[#c0f43c]"],
      .ai2047-live-theme button[class*="bg-[#C0F43C]"],
      .ai2047-live-theme a[class*="bg-[#18d4ff]"] {
        background-color: #F15928 !important;
        color: #FFFFFF !important;
        border-color: #F15928 !important;
        box-shadow: 0 8px 26px rgba(241, 89, 40, 0.36) !important;
      }

      .ai2047-live-theme a[class*="bg-[#C0F43C]"]:hover,
      .ai2047-live-theme a[class*="bg-[#c0f43c]"]:hover,
      .ai2047-live-theme a[class*="bg-[#18d4ff]"]:hover {
        background-color: #FF6B3B !important;
        box-shadow: 0 12px 34px rgba(241, 89, 40, 0.5) !important;
      }

      .ai2047-live-theme a[class*="bg-[#C0F43C]"] svg,
      .ai2047-live-theme a[class*="bg-[#C0F43C]"] span,
      .ai2047-live-theme a[class*="bg-[#18d4ff]"] svg,
      .ai2047-live-theme a[class*="bg-[#18d4ff]"] span {
        color: #FFFFFF !important;
      }

      /* Footer Social Icons on Light Blue Footer */
      .ai2047-live-theme #footer a[class*="border-[#C0F43C]"] {
        background-color: #FFFFFF !important;
        border-color: rgba(0, 105, 184, 0.3) !important;
        color: #0069B8 !important;
        box-shadow: 0 4px 12px rgba(0, 65, 120, 0.08) !important;
      }
      .ai2047-live-theme #footer a[class*="border-[#C0F43C]"]:hover {
        border-color: #F15928 !important;
        background-color: #F15928 !important;
        color: #FFFFFF !important;
      }

      /* =====================================================================
         7. SPEAKER CARD TREATMENT (CONCEPT 2 — NEURAL DATA FLOW PORTRAITS)
         ===================================================================== */
      .ai2047-live-theme .speaker-card-inner {
        background: #010612 !important;
        border: 1.5px solid #009EAD !important;
        box-shadow:
          0 18px 38px rgba(0, 52, 102, 0.22),
          0 0 18px rgba(0, 158, 173, 0.18) !important;
      }

      .ai2047-live-theme .speaker-card-inner:hover {
        border-color: #0069B8 !important;
        box-shadow:
          0 22px 46px rgba(0, 52, 102, 0.32),
          0 0 28px rgba(0, 158, 173, 0.32) !important;
      }

      .ai2047-live-theme .speaker-card-inner > img {
        position: relative;
        z-index: 2;
        opacity: 1 !important;
      }

      .ai2047-live-theme .speaker-card-inner::after {
        background: linear-gradient(
          to top,
          rgba(1, 10, 24, 0.92) 0%,
          rgba(1, 10, 24, 0.25) 28%,
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

      /* =====================================================================
         8. TEST PAGE ICON ANIMATIONS (AMBIENT + INTERACTIVE HOVER)
            Covers:
            - #attend 4 Stat Card Icons (01–04)
            - #networking 12 Priority Enterprise Sector Icons
            - #ecosystem Telemetry, Mandate & Standard Card Icons
            - #agenda 5 Talking Point Pillar Icons
            - #testimonials Quote Badge Icon
         ===================================================================== */
      @keyframes ai2047IconFloat {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-4px);
        }
      }

      @keyframes ai2047GlyphBreathe {
        0%, 100% {
          transform: scale(1) rotate(0deg);
        }
        50% {
          transform: scale(1.12) rotate(3deg);
        }
      }

      @keyframes ai2047PulseRing {
        0% {
          transform: scale(1);
          opacity: 0.6;
        }
        75% {
          transform: scale(1.58);
          opacity: 0;
        }
        100% {
          transform: scale(1.58);
          opacity: 0;
        }
      }

      @keyframes ai2047SectorSheen {
        0%, 65% {
          transform: translateX(-160%) skewX(-22deg);
        }
        100% {
          transform: translateX(180%) skewX(-22deg);
        }
      }

      @keyframes ai2047SectorGlyph {
        0%, 100% {
          transform: translateY(0px) scale(1);
        }
        50% {
          transform: translateY(-2.5px) scale(1.1);
        }
      }

      @keyframes ai2047IconSpringPop {
        0% {
          transform: scale(1) rotate(0deg);
        }
        45% {
          transform: scale(1.24) rotate(-6deg);
        }
        75% {
          transform: scale(0.95) rotate(3deg);
        }
        100% {
          transform: scale(1.12) rotate(0deg);
        }
      }

      /* --- A. #attend 4 Stat Icons (01 CXOs, 02 Speakers, 03 Pillars, 04 Days) --- */
      .ai2047-live-theme #attend article div.rounded-full {
        position: relative !important;
        width: 46px !important;
        height: 46px !important;
        background-color: #0069B8 !important;
        box-shadow: 0 8px 20px rgba(0, 105, 184, 0.28) !important;
        animation: ai2047IconFloat 3.4s ease-in-out infinite !important;
        transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease !important;
      }

      /* Concentric Signal Pulse Ring around each Stat Icon */
      .ai2047-live-theme #attend article div.rounded-full::after {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 9999px;
        border: 1.5px solid #009EAD;
        pointer-events: none;
        animation: ai2047PulseRing 2.8s cubic-bezier(0.22, 1, 0.36, 1) infinite;
      }

      /* Staggered timing across cards 01–04 */
      .ai2047-live-theme #attend article:nth-child(1) div.rounded-full,
      .ai2047-live-theme #attend article:nth-child(1) div.rounded-full::after,
      .ai2047-live-theme #attend article:nth-child(1) div.rounded-full img {
        animation-delay: 0s !important;
      }
      .ai2047-live-theme #attend article:nth-child(2) div.rounded-full,
      .ai2047-live-theme #attend article:nth-child(2) div.rounded-full::after,
      .ai2047-live-theme #attend article:nth-child(2) div.rounded-full img {
        animation-delay: 0.65s !important;
      }
      .ai2047-live-theme #attend article:nth-child(3) div.rounded-full,
      .ai2047-live-theme #attend article:nth-child(3) div.rounded-full::after,
      .ai2047-live-theme #attend article:nth-child(3) div.rounded-full img {
        animation-delay: 1.3s !important;
      }
      .ai2047-live-theme #attend article:nth-child(4) div.rounded-full,
      .ai2047-live-theme #attend article:nth-child(4) div.rounded-full::after,
      .ai2047-live-theme #attend article:nth-child(4) div.rounded-full img {
        animation-delay: 1.95s !important;
      }

      /* Crisp Pure White Stat SVG + Gentle Breathing Motion */
      .ai2047-live-theme #attend article div.rounded-full img {
        filter: brightness(0) invert(1) !important;
        animation: ai2047GlyphBreathe 3.4s ease-in-out infinite !important;
        will-change: transform;
      }

      /* Stat Card Hover -> Pulse Orange (#F15928) + Elastic Pop */
      .ai2047-live-theme #attend article:hover div.rounded-full {
        background-color: #F15928 !important;
        box-shadow: 0 10px 26px rgba(241, 89, 40, 0.42) !important;
        transform: translateY(-4px) scale(1.1) !important;
        animation-play-state: paused !important;
      }
      .ai2047-live-theme #attend article:hover div.rounded-full::after {
        border-color: #F15928 !important;
        animation-duration: 1.4s !important;
      }
      .ai2047-live-theme #attend article:hover div.rounded-full img {
        animation: ai2047IconSpringPop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
      }

      /* --- B. #networking 12 Priority Enterprise Sector Icons --- */
      .ai2047-live-theme #networking article span.w-10.h-10 {
        position: relative !important;
        overflow: hidden !important;
        border-radius: 10px !important;
        background-color: #0069B8 !important;
        border: 1px solid rgba(0, 158, 173, 0.45) !important;
        box-shadow: 0 6px 16px rgba(0, 105, 184, 0.22) !important;
        transition: transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease !important;
      }

      /* Diagonal Specular Sheen Wave Across the 12 Sector Icons */
      .ai2047-live-theme #networking article span.w-10.h-10::before {
        content: "";
        position: absolute;
        inset: -20% -10%;
        width: 55%;
        background: rgba(255, 255, 255, 0.28);
        pointer-events: none;
        z-index: 1;
        animation: ai2047SectorSheen 4.6s ease-in-out infinite;
      }

      /* Unify all 12 raster .webp icons to crisp pure white + ambient float */
      .ai2047-live-theme #networking article span.w-10.h-10 img {
        position: relative;
        z-index: 2;
        filter: brightness(0) invert(1) !important;
        animation: ai2047SectorGlyph 3.2s ease-in-out infinite !important;
        will-change: transform;
      }

      /* Staggered wave across all 12 sector cards in the 4x3 grid */
      .ai2047-live-theme #networking article:nth-child(1) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(1) span.w-10.h-10 img { animation-delay: 0s !important; }
      .ai2047-live-theme #networking article:nth-child(2) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(2) span.w-10.h-10 img { animation-delay: 0.28s !important; }
      .ai2047-live-theme #networking article:nth-child(3) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(3) span.w-10.h-10 img { animation-delay: 0.56s !important; }
      .ai2047-live-theme #networking article:nth-child(4) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(4) span.w-10.h-10 img { animation-delay: 0.84s !important; }
      .ai2047-live-theme #networking article:nth-child(5) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(5) span.w-10.h-10 img { animation-delay: 1.12s !important; }
      .ai2047-live-theme #networking article:nth-child(6) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(6) span.w-10.h-10 img { animation-delay: 1.4s !important; }
      .ai2047-live-theme #networking article:nth-child(7) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(7) span.w-10.h-10 img { animation-delay: 1.68s !important; }
      .ai2047-live-theme #networking article:nth-child(8) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(8) span.w-10.h-10 img { animation-delay: 1.96s !important; }
      .ai2047-live-theme #networking article:nth-child(9) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(9) span.w-10.h-10 img { animation-delay: 2.24s !important; }
      .ai2047-live-theme #networking article:nth-child(10) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(10) span.w-10.h-10 img { animation-delay: 2.52s !important; }
      .ai2047-live-theme #networking article:nth-child(11) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(11) span.w-10.h-10 img { animation-delay: 2.8s !important; }
      .ai2047-live-theme #networking article:nth-child(12) span.w-10.h-10::before,
      .ai2047-live-theme #networking article:nth-child(12) span.w-10.h-10 img { animation-delay: 3.08s !important; }

      /* Sector Card Hover -> Pulse Orange (#F15928) + Kinetic Spring Bounce */
      .ai2047-live-theme #networking article:hover span.w-10.h-10 {
        background-color: #F15928 !important;
        border-color: #F15928 !important;
        box-shadow: 0 10px 24px rgba(241, 89, 40, 0.38) !important;
        transform: translateY(-2px) scale(1.12) rotate(-4deg) !important;
      }
      .ai2047-live-theme #networking article:hover span.w-10.h-10 img {
        filter: brightness(0) invert(1) !important;
        animation: ai2047IconSpringPop 0.52s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
      }

      /* --- C. #ecosystem, #agenda & #testimonials Section Icons --- */
      .ai2047-live-theme #ecosystem article div.w-11.h-11,
      .ai2047-live-theme #ecosystem article div.w-13.h-13,
      .ai2047-live-theme #agenda article span.w-\\[48px\\],
      .ai2047-live-theme #testimonials article span.rounded-\\[12px\\],
      .ai2047-live-theme #testimonials .test-quote-icon {
        animation: ai2047IconFloat 3.8s ease-in-out infinite !important;
        transition: background-color 0.28s ease, border-color 0.28s ease, color 0.28s ease, transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.28s ease !important;
      }

      .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 div.w-14.h-14 {
        position: relative !important;
        animation: ai2047IconFloat 3.4s ease-in-out infinite !important;
      }
      .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 div.w-14.h-14::after {
        content: "";
        position: absolute;
        inset: -2px;
        border-radius: 16px;
        border: 1.5px solid #009EAD;
        pointer-events: none;
        animation: ai2047PulseRing 3s cubic-bezier(0.22, 1, 0.36, 1) infinite;
      }

      .ai2047-live-theme #ecosystem article:hover div.w-11.h-11,
      .ai2047-live-theme #ecosystem article:hover div.w-13.h-13,
      .ai2047-live-theme #agenda article:hover span.w-\\[48px\\] {
        background-color: #0069B8 !important;
        border-color: #0069B8 !important;
        color: #FFFFFF !important;
        box-shadow: 0 8px 22px rgba(0, 105, 184, 0.3) !important;
        transform: translateY(-3px) scale(1.1) rotate(-4deg) !important;
        animation-play-state: paused !important;
      }
      .ai2047-live-theme #ecosystem article:hover div.w-11.h-11 svg,
      .ai2047-live-theme #ecosystem article:hover div.w-13.h-13 svg,
      .ai2047-live-theme #agenda article:hover span.w-\\[48px\\] svg {
        color: #FFFFFF !important;
        animation: ai2047IconSpringPop 0.52s cubic-bezier(0.34, 1.56, 0.64, 1) forwards !important;
      }

      @media (prefers-reduced-motion: reduce) {
        .ai2047-live-theme #attend article div.rounded-full,
        .ai2047-live-theme #attend article div.rounded-full::after,
        .ai2047-live-theme #attend article div.rounded-full img,
        .ai2047-live-theme #networking article span.w-10.h-10::before,
        .ai2047-live-theme #networking article span.w-10.h-10 img,
        .ai2047-live-theme #ecosystem article div.w-11.h-11,
        .ai2047-live-theme #ecosystem article div.w-13.h-13,
        .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 div.w-14.h-14,
        .ai2047-live-theme #ecosystem .rounded-\\[24px\\].border-\\[\\#C0F43C\\]\\/35 div.w-14.h-14::after,
        .ai2047-live-theme #agenda article span.w-\\[48px\\],
        .ai2047-live-theme #testimonials article span.rounded-\\[12px\\] {
          animation: none !important;
        }
      }
    `}</style>
  );
}
