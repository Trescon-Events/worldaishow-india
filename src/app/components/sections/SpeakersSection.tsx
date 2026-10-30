"use client";

import { type ReactNode } from "react";
import { GradientText } from "../Shared";
import { SpeakerCard } from "../../speakers/SpeakerCard";
import { speakers as fallbackSpeakers } from "../../speakers/data";

export function SpeakersSection({
  heading = (
    <>
      Past Enterprise <GradientText>Faculty</GradientText>
    </>
  ),
}: {
  heading?: ReactNode;
} = {}) {
  const displaySpeakers = fallbackSpeakers.slice(0, 8);

  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]" id="speakers">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1180px)]">
        {/* Title and Header Block */}
        <div className="flex flex-col items-center text-center mb-[54px]">
          <h2 className="text-center font-[850] text-white leading-[1.08] tracking-[-1.8px] text-[clamp(34px,4.5vw,56px)] max-w-[920px]">
            {heading}
          </h2>
        </div>

        {/* Speakers Grid Container */}
        <div className="speaker-grid grid grid-cols-4 gap-[22px] max-[1080px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-1">
          {displaySpeakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              role={speaker.designation}
              company={speaker.company}
              image={speaker.image}
              bio={speaker.bio}
              index={index}
            />
          ))}
        </div>

        {/* View All Speakers CTA Button */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-4">
          <a
            href="/mumbai/enterprise/speakers"
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full font-extrabold text-[15px] text-black [color:#06111f!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.3)] transition-all duration-200 cursor-pointer"
          >
            Explore Speakers Hub ➔
          </a>
          <a
            href="/mumbai/enterprise/agenda/call-for-speakers"
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full font-extrabold text-[15px] text-white border border-white/25 bg-white/5 hover:border-cyan hover:text-cyan transition-all duration-200 cursor-pointer"
          >
            Apply to Speak →
          </a>
        </div>
      </div>
    </section>
  );
}
