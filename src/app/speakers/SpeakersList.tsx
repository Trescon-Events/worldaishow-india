"use client";

import { useMemo, useState } from "react";
import { SpeakerCard } from "./SpeakerCard";
import { GradientText } from "../components/Shared";
import { speakers as pastSpeakers } from "./data";

export function SpeakersList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpeakers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return pastSpeakers.filter((s) => {
      return (
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.designation.toLowerCase().includes(q) ||
        s.company.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <section className="relative py-[92px] bg-[#020b1c] max-sm:py-[62px]" id="lineup">
      <div className="w-[min(1180px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1180px)]">

        {/* Faculty Intake Banner (Section 09) */}
        <div className="mb-12 p-7 rounded-[20px] border border-[#C0F43C]/35 bg-gradient-to-r from-[#C0F43C]/10 via-[#041022] to-[#18D4FF]/10 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-[700px]">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-[#C0F43C] mb-2">
              Mumbai 2027 Faculty Intake · Unannounced Slots Open
            </span>
            <h3 className="text-white font-extrabold text-[22px] leading-snug m-0 mb-1.5">
              If you have scaled AI in production, we want you on the stage
            </h3>
            <p className="text-white/75 text-[15px] leading-relaxed m-0">
              Mumbai 2027 speaker announcements release in waves following steering committee review. Apply to join the 45+ enterprise faculty members below, or browse past speakers from the global World AI Show series.
            </p>
          </div>
          <a
            href="/mumbai/enterprise/agenda/call-for-speakers"
            className="inline-flex items-center justify-center gap-2 h-[48px] px-7 rounded-full font-extrabold text-[14px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] transition-all duration-200 shrink-0"
          >
            Apply to Speak →
          </a>
        </div>

        {/* Search & Filter Controls (Section 09) */}
        <div className="mb-10 flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(28px,3.6vw,42px)] m-0">
              Global Series <GradientText>Past Speakers</GradientText>
            </h2>

            {/* Search by name, designation, or company */}
            <div className="relative w-full max-w-[360px]">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, designation, or company"
                className="w-full h-[44px] px-4 rounded-full bg-[#051024] border border-white/15 text-white text-[14px] placeholder:text-white/45 focus:outline-none focus:border-cyan transition-colors"
              />
            </div>
          </div>
        </div>

        {filteredSpeakers.length === 0 ? (
          <p className="text-white/60 text-lg">No speakers match your current search or filter criteria.</p>
        ) : (
          <div className="speaker-grid grid grid-cols-4 gap-[22px] max-[1080px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-1">
            {filteredSpeakers.map((speaker, index) => (
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
        )}
      </div>
    </section>
  );
}
