# HANDOFF — World AI Show — Enterprise (Mumbai 2027 edition site)

Last updated: 2026-10-29 (by Antigravity, for Lohith / Madhu's team).

## Current state

- **Live URL:** `https://worldaishow.com/mumbai/enterprise`
- **Repository:** `https://github.com/Trescon-Events/worldaishow-india.git`
- **Cloudflare Pages Project:** `wais-enterprise` (`https://wais-enterprise.pages.dev`)
- **Live Testing URL (GitHub Pages):** `https://trescon-events.github.io/worldaishow-india/`
- **Base path:** `basePath: "/mumbai/enterprise"` configured in `next.config.ts`. All internal asset paths and links use `/mumbai/enterprise/...` (automatically rewritten to `/worldaishow-india/...` inside the GitHub Actions Pages deployment workflow `.github/workflows/deploy.yml`).
- **Brand Assets:** Header and footer logos wired at `public/logos/wais-27-enterprise_header.svg`, `public/logos/wais-27-enterprise_footer.svg`, and `public/logos/Wais-series-W.svg` (Global Series lockup).
- **2026-10-21 Website Feedback Updates (`Website changes and feedback.docx`) Applied:**
  1. **Research & Statistics (`EcosystemSectionDemo.tsx`)**:
     - Updated "The Execution Gap" lead copy to: *"India’s enterprise adoption rate leads at nearly 40%, compared with 28% globally. 44% were redesigning selected processes; 17% reported fundamental reinvention."* (`Source: Deloitte, State of AI in the Enterprise: India Insights (2026)`).
     - Updated **Benchmark 02 (Process redesign)** to `Selected-process redesign: 44%` vs `Fundamental process and business-model reinvention: 17%` (`Source: Deloitte, State of AI in the Enterprise: India Insights (2026)`).
     - Updated **Benchmark 03 (Agentic AI and governance)** to `Expect moderate or greater agentic AI use within two years: 74%` vs `Mature governance for autonomous agents: 21%` (`Source: Deloitte, State of AI in the Enterprise`).
  2. **Removed AI Workshop / AI ROI Clinic Across Website**:
     - Removed from homepage (`AgendaSection.tsx`), Agenda Overview (`AgendaPage.tsx`), Themes page (`/agenda/themes`), "The 2030 Vision" page (`/agenda/the-2030-vision`), Delegate Pass & Attend pages (`src/app/attend/page.tsx`), Speakers Call to Stage (`SpeakerCallToStage.tsx`), and Homepage FAQ (`FAQSection.tsx`). Retained general editorial references to measuring business value and ROI.
  3. **Agenda & Programme Updates (`AgendaPage.tsx`)**:
     - Updated "The 2030 Vision" page quote to: *"Nearly 97% expect AI to improve productivity; about 73% already track productivity using expanded or comprehensive KPIs."* (`Source: Deloitte, State of AI in the Enterprise: India Insights`).
     - Updated Executive Roundtable times on the Agenda timeline to **Roundtable 1: `11:30–13:00`** and **Roundtable 2: `15:30–17:00`**.
  4. **Sponsorship Booth Sizes**:
     - Updated standardized booth spaces across Sponsor, Partners, Exhibition, Agenda, and FAQ pages to **`9 sqm` standard space** and **`12 sqm` for the Lead package**.
  5. **User Interface & Reference Alignments (`HeroSection.tsx`, `StatsSection.tsx`, `SponsorsSection.tsx`, `OrganizerSection.tsx`)**:
     - Updated Hero section to open with the **World AI Show Global Series** logo (`Wais-series-W.svg`) and **"World's Longest Running AI Show Series"**, followed by **"Now in India · The Enterprise Edition"** and a smaller theme line (*"Where AI becomes the operating model."*).
     - Replaced all stat ranges across the site with specific numbers: **`300`** Qualified CXOs (instead of `200–300`), **`45`** Speakers & Panelists (instead of `35–45`), and **`2 Days`** (instead of `2 Full Days`).
     - Added **OUR REACH** (`16M+`, `19M+`, `220K+`, `170K+`, `150K+`) and **SERIES HIGHLIGHTS** (`46` Global Editions, `42K+` C-Level Attendees, `2600+` Speakers, `93%` Decision Makers, `51+` Countries Represented, `1650+` Exhibitors, `830+` Media Partners) to `OrganizerSection.tsx`.
     - Added the **"Governments and Associations Who Have Worked With Us In The Past"** 4×4 logo showcase grid (`public/images/sponsors/governments/*.webp`) to `SponsorsSection.tsx`.
