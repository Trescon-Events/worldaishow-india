import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { StatsSection } from "../../components/sections/StatsSection";
import { EcosystemSectionDemo as EcosystemSection } from "../../components/sections/EcosystemSectionDemo";
import { AgendaSection } from "../../components/sections/AgendaSection";
import { BrandBookV1SpeakersSection as SpeakersSection } from "../_design-system/BrandBookV1SpeakersComponents";
import { NetworkingSection } from "../../components/sections/NetworkingSection";
import { BrandBookV1TestimonialsSection as TestimonialsSection } from "../_design-system/BrandBookV1TestimonialsSection";
import { SponsorsSection } from "../../components/sections/SponsorsSection";
import { OrganizerSection } from "../../components/sections/OrganizerSection";
import { FAQSection } from "../../components/sections/FAQSection";
import { FooterSection } from "../../components/sections/FooterSection";
import { Ai2047BrandBookV1Styles } from "../_design-system/Ai2047BrandBookV1System";
import { BrandBookV1Logos } from "../_design-system/BrandBookV1Logos";

export const metadata: Metadata = {
  title: "Home Preview (AI 2047 Brand Book V1.0) | World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "Duplicated staging homepage preview implementing the official AI 2047 Brand Book V1.0 (80/15/05 Sovereign Blue #0069B8, Signal Teal #009EAD, Pulse Orange #F15928, Cloud White #F7F9FC, Midnight Core #08121E, and 1.200 modular typography).",
  robots: { index: false, follow: false },
};

export default function BrandBookV1HomePreviewPage() {
  return (
    <div className="ai2047-brandbook-v1">
      <Ai2047BrandBookV1Styles />
      <BrandBookV1Logos />
      <main className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#F7F9FC]">
        <Header activeItem="Home" />
        <HeroSection />
        <StatsSection />
        <EcosystemSection />
        <AgendaSection />
        <SpeakersSection />
        <NetworkingSection />
        <TestimonialsSection />
        <SponsorsSection />
        <OrganizerSection />
        <FAQSection />
        <FooterSection />
      </main>
    </div>
  );
}
