import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { SpeakersHero } from "./SpeakersHero";
import { BrandBookV1SpeakersList as SpeakersList } from "../test/_design-system/BrandBookV1SpeakersComponents";
import { SpeakersCTASection } from "./SpeakersCTASection";
import { FooterSection } from "../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Speakers Hub | World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "Explore the Enterprise Faculty and past global series speakers for World AI Show: The Enterprise Edition | Mumbai 2027 (45 Speakers & Panelists).",
};

export default function SpeakersPage() {
  return (
    <main className="page-speakers relative min-h-screen bg-[#F7F9FC] text-[#08121E] font-space-grotesk overflow-x-hidden">
      <Header activeItem="Speakers" />
      <SpeakersHero />
      <SpeakersList />
      <SpeakersCTASection />
      <FooterSection />
    </main>
  );
}
