# HANDOFF — World AI Show — Enterprise (Mumbai 2027 edition site)

Last updated: 2026-10-15 (by Antigravity, for Lohith / Madhu's team).

## Current state

- **Repository:** `https://github.com/Trescon-Events/worldaishow-india.git`
- **Base path:** `basePath: "/enterprise"` configured in `next.config.ts`. All internal asset paths and links use `/enterprise/...`.
- **Brand Assets:** Header and footer logos created and wired at `public/logos/wais-27-enterprise_header.svg` (`#18D4FF` / `#FFFFFF`) and `public/logos/wais-27-enterprise_footer.svg` (`#C0F43C` country highlight).
- **Interactive 3D Hero Background (`src/app/components/sections/HeroCrystalCanvas.tsx`)**: Three.js crystal cluster with glowing blue/cyan wireframe network and interactive cursor tilt integrated into the homepage hero (`HeroSection.tsx`).
- **Elaborate Mumbai / India Hero Banners**: Custom 16:9 WebP hero banners generated and wired across all subpages (`/attend`, `/attend/delegate`, `/attend/sponsor`, `/attend/media-partner`, `/attend/association-partner`, `/agenda`, `/agenda/agenda`, `/agenda/themes`, `/agenda/the-2030-vision`, `/agenda/call-for-speakers`, `/speakers`, `/partners`, `/exhibition`, `/networking`, `/networking/ai-matchmaking`, `/networking/attendee-app`, `/networking/photo-gallery`).
- **HubSpot Form Embeds (`src/app/components/HubSpotForm.tsx`)**: All 8 HubSpot forms (`portalId: "2953901"`, `region: "na1"`) wired across `/sponsorship-enquiry`, `/speaker-enquiry`, `/media-enquiry`, `/association-enquiry`, `/attend/sponsor`, `/attend/media-partner`, `/attend/association-partner`, `/agenda/call-for-speakers`, and `/contact` (General Enquiry).
- **Full Specification & Visual Redesigns**:
  - **Homepage (S1–S13)**:
    - Hero (`20–21 April 2027 · Mumbai, India · Edition 1 of the India Series`) & Stat Strip (`200–300`, `2`, `100%`, `50+`).
    - **The Execution Gap (`EcosystemSectionDemo.tsx`)**: Clean `#020b1c` architectural grid background, animated Deloitte benchmark telemetry cards (`40% vs 28%`, `83% Gap`, `74% vs 21%`) with scroll/hover count-up and shimmer progress bars, Executive Mandate callout banner, and 4 glassmorphic Programme Positioning cards (`01–04`).
    - **5 Content Pillars & The AI ROI Clinic (`AgendaSection.tsx`)**: Top-aligned active pillar feature card so 3D illustrations remain unobstructed; connected 3-stage AI ROI Clinic pipeline with animated horizontal pulse beam, custom icons, and `SCALE` / `REDESIGN` / `STOP` verdict badges.
    - **Who Is In The Room & Two-Door Access (`NetworkingSection.tsx`)**: 2-line headline layout, 4 Buying Unit Constituencies, 12 Priority Enterprise Sectors, C-Level & Transformation marquees, and interactive hover-animated Door 01 (`Delegate Pass`) and Door 02 (`Business Pass`) cards.
    - **Partner & Industry Endorsements (`TestimonialsSection.tsx`)**: Spotlight endorsement card with partner attribution profile card and 4-column interactive partner selector strip (`Microsoft`, `Cloudflare`, `SAP`, `DDN Storage`).
    - **Credibility & Series Heritage, Twin Closing CTA Bands, Speak at the Conference, and 8-question FAQ** with `FAQPage` JSON-LD schema.
  - **Speakers Hub (`/speakers`)**: Centered Enterprise Faculty heading, search + role filter pills, and redesigned twin glassmorphic `SpeakersCTASection.tsx`.
  - **Agenda, Attend, Partners, Exhibition, Networking & Enquiry Suites**: Complete and verified.
- **Verification**: TypeScript compilation (`npx tsc --noEmit`) verified with 0 errors.
