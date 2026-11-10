import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { StatsSection } from "../../components/sections/StatsSection";
import { EcosystemSectionDemo as EcosystemSection } from "../../components/sections/EcosystemSectionDemo";
import { AgendaSection } from "../../components/sections/AgendaSection";
import { SpeakersSection } from "../../components/sections/SpeakersSection";
import { NetworkingSection } from "../../components/sections/NetworkingSection";
import { TestimonialsSection } from "../../components/sections/TestimonialsSection";
import { SponsorsSection } from "../../components/sections/SponsorsSection";
import { OrganizerSection } from "../../components/sections/OrganizerSection";
import { FAQSection } from "../../components/sections/FAQSection";
import { FooterSection } from "../../components/sections/FooterSection";
import { AiMumbaiLiveThemeStyles } from "../_design-system/AiMumbaiBrandSystem";

export const metadata: Metadata = {
  title: "Home Preview (New Color Palette) | World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "Isolated staging homepage preview using the exact live homepage design with the new 80/15/05 Sovereign Blue (#0069B8), Signal Teal (#009EAD), and Pulse Orange (#F15928) color palette.",
  robots: { index: false, follow: false },
};

export default function StagingHomePreviewPage() {
  return (
    <div className="ai2047-live-theme">
      <AiMumbaiLiveThemeStyles />
      <main className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#004A86]">
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
