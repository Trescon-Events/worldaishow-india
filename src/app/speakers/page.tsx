import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { SpeakersHero } from "./SpeakersHero";
import { SpeakersList } from "./SpeakersList";
import { SpeakersCTASection } from "./SpeakersCTASection";
import { FooterSection } from "../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Speakers Hub | World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "Explore the Enterprise Faculty and past global series speakers for World AI Show: The Enterprise Edition | Mumbai 2027 (45 Speakers & Panelists).",
};


export default function SpeakersPage() {
  return (
    <main className="page-speakers relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Speakers" />
      <SpeakersHero />
      <SpeakersList />
      <SpeakersCTASection />
      <FooterSection />
    </main>
  );
}
