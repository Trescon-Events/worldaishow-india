"use client";

import { Header } from "../../components/sections/Header";
import { SpeakersHero } from "../../speakers/SpeakersHero";
import { TestSpeakersList as SpeakersList } from "../_design-system/TestSpeakersComponents";
import { SpeakersCTASection } from "../../speakers/SpeakersCTASection";
import { FooterSection } from "../../components/sections/FooterSection";
import { AiMumbaiLiveThemeStyles } from "../_design-system/AiMumbaiBrandSystem";

export function SpeakerPreviewClient() {
  return (
    <div className="ai2047-live-theme">
      <AiMumbaiLiveThemeStyles />
      <main className="page-speakers relative min-h-screen bg-[#08121e] text-white font-space-grotesk overflow-x-hidden">
        <Header activeItem="Speakers" />
        <SpeakersHero />
        <SpeakersList />
        <SpeakersCTASection />
        <FooterSection />
      </main>
    </div>
  );
}
