"use client";

import { Header } from "../../components/sections/Header";
import { SpeakersHero } from "../../speakers/SpeakersHero";
import { BrandBookV1SpeakersList as SpeakersList } from "../_design-system/BrandBookV1SpeakersComponents";
import { SpeakersCTASection } from "../../speakers/SpeakersCTASection";
import { FooterSection } from "../../components/sections/FooterSection";
import { Ai2047BrandBookV1Styles } from "../_design-system/Ai2047BrandBookV1System";
import { BrandBookV1Logos } from "../_design-system/BrandBookV1Logos";

export function BrandBookSpeakerPreviewClient() {
  return (
    <div className="ai2047-brandbook-v1">
      <Ai2047BrandBookV1Styles />
      <BrandBookV1Logos />
      <main className="page-speakers relative min-h-screen bg-[#F7F9FC] text-[#08121E] overflow-x-hidden">
        <Header activeItem="Speakers" />
        <SpeakersHero />
        <SpeakersList />
        <SpeakersCTASection />
        <FooterSection />
      </main>
    </div>
  );
}
