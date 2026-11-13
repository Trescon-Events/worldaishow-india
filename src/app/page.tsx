import { Header } from "./components/sections/Header";
import { BrandBookV1HeroSection as HeroSection } from "./test/_design-system/BrandBookV1HeroSection";
import { StatsSection } from "./components/sections/StatsSection";
import { EcosystemSectionDemo as EcosystemSection } from "./components/sections/EcosystemSectionDemo";
import { AgendaSection } from "./components/sections/AgendaSection";
import { BrandBookV1SpeakersSection as SpeakersSection } from "./test/_design-system/BrandBookV1SpeakersComponents";
import { NetworkingSection } from "./components/sections/NetworkingSection";
import { BrandBookV1TestimonialsSection as TestimonialsSection } from "./test/_design-system/BrandBookV1TestimonialsSection";
import { SponsorsSection } from "./components/sections/SponsorsSection";
import { FAQSection } from "./components/sections/FAQSection";
import { OrganizerSection } from "./components/sections/OrganizerSection";
import { FooterSection } from "./components/sections/FooterSection";

export default function Home() {
  return (
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
  );
}
