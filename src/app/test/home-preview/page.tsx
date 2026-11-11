import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { HeroSection } from "../../components/sections/HeroSection";
import { StatsSection } from "../../components/sections/StatsSection";
import { EcosystemSectionDemo as EcosystemSection } from "../../components/sections/EcosystemSectionDemo";
import { AgendaSection } from "../../components/sections/AgendaSection";
import { TestSpeakersSection as SpeakersSection } from "../_design-system/TestSpeakersComponents";
import { NetworkingSection } from "../../components/sections/NetworkingSection";
import { TestTestimonialsSection as TestimonialsSection } from "../_design-system/TestTestimonialsSection";
import { SponsorsSection } from "../../components/sections/SponsorsSection";
import { OrganizerSection } from "../../components/sections/OrganizerSection";
import { FAQSection } from "../../components/sections/FAQSection";
import { FooterSection } from "../../components/sections/FooterSection";
import { AiMumbaiLiveThemeStyles } from "../_design-system/AiMumbaiBrandSystem";
import { TestBrandLogos } from "../_design-system/TestBrandLogos";

export const metadata: Metadata = {
  title: "Home Preview (New Color Palette) | World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "Isolated staging homepage preview using the exact live homepage design with alternating Light Blue (#E6F2FB) and White (#FFFFFF) sections, Sovereign Blue (#0069B8), Signal Teal (#009EAD), and Pulse Orange (#F15928).",
  robots: { index: false, follow: false },
};

export default function StagingHomePreviewPage() {
  return (
    <div className="ai2047-live-theme">
      <AiMumbaiLiveThemeStyles />
      <TestBrandLogos />
      <main className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#E6F2FB]">
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
