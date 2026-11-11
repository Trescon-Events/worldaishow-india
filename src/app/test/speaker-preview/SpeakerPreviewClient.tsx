"use client";

import { Header } from "../../components/sections/Header";
import { SpeakersHero } from "../../speakers/SpeakersHero";
import { TestSpeakersList as SpeakersList } from "../_design-system/TestSpeakersComponents";
import { SpeakersCTASection } from "../../speakers/SpeakersCTASection";
import { FooterSection } from "../../components/sections/FooterSection";
import { AiMumbaiLiveThemeStyles } from "../_design-system/AiMumbaiBrandSystem";
import { TestBrandLogos } from "../_design-system/TestBrandLogos";

export function SpeakerPreviewClient() {
  return (
    <div className="ai2047-live-theme">
      <AiMumbaiLiveThemeStyles />
      <TestBrandLogos />
      <main className="page-speakers relative min-h-screen bg-[#E6F2FB] text-[#0B1F3A] font-space-grotesk overflow-x-hidden">
        <Header activeItem="Speakers" />
        <SpeakersHero />
        <SpeakersList />
        <SpeakersCTASection />
        <FooterSection />
      </main>
    </div>
  );
}
