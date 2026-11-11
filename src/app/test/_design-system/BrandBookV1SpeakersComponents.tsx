"use client";

import { useMemo, useState, type ReactNode } from "react";
import { GradientText } from "../../components/Shared";
import { SpeakerCard } from "../../speakers/SpeakerCard";
import { testNeuralSpeakers } from "./TestSpeakersComponents";

/**
 * AI 2047 Brand Book V1.0 — Speaker Sections (Pages 57–61)
 * - Sovereign Blue (#0069B8) institutional showcase band (80% brand anchor)
 * - Midnight Core (#08121E) speaker portrait cards with Signal Teal (#009EAD) framing
 *   and Pulse Orange (#F15928) focal CTAs (strictly white text on orange BG)
 */
export function BrandBookV1SpeakersSection({
  heading = (
    <>
      Past Enterprise <GradientText>Faculty</GradientText>
    </>
  ),
}: {
  heading?: ReactNode;
} = {}) {
  const displaySpeakers = testNeuralSpeakers.slice(0, 8);

  return (
    <section
      className="relative py-[104px] bg-[#0069B8] max-sm:py-[72px]"
      id="speakers"
    >
      <div className="w-[min(1200px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* Title and Header Block */}
        <div className="flex flex-col items-center text-center mb-[52px]">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08121E]/28 border border-white/25 text-white text-[12px] font-semibold uppercase tracking-[1.6px] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F15928]" />
            Global AI 2047 Series Faculty
          </span>
          <h2 className="text-center text-white max-w-[920px] m-0">
            {heading}
          </h2>
        </div>

        {/* Speakers Grid Container */}
        <div className="speaker-grid grid grid-cols-4 gap-[24px] max-[1080px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-1">
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

        {/* View All Speakers CTA Buttons */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-4">
          <a
            href="/mumbai/enterprise/test/brandbook-speaker-preview"
            className="bb-cta-primary inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full font-bold text-[15px] text-white bg-[#F15928] cursor-pointer"
          >
            Explore Speakers Hub <span className="cta-arrow inline-block">➔</span>
          </a>
          <a
            href="/mumbai/enterprise/agenda/call-for-speakers"
            className="bb-cta-secondary inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full font-bold text-[15px] text-[#0069B8] border border-white/25 bg-white cursor-pointer"
          >
            Apply to Speak <span className="cta-arrow inline-block">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function BrandBookV1SpeakersList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSpeakers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return testNeuralSpeakers.filter((s) => {
      return (
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.designation.toLowerCase().includes(q) ||
        s.company.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  return (
    <section className="relative py-[96px] bg-[#0069B8] max-sm:py-[64px]" id="lineup">
      <div className="w-[min(1200px,calc(100%-48px))] mx-auto max-sm:w-[calc(100%-32px)]">
        {/* Institutional Faculty Intake Banner */}
        <div className="mb-12 p-8 rounded-[20px] border border-[#009EAD]/60 bg-[#08121E] shadow-[0_20px_48px_rgba(8,18,30,0.28)] flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-[720px]">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F15928] text-white text-[12px] font-semibold uppercase tracking-[1.5px] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Mumbai 2027 Faculty Intake · Unannounced Slots Open
            </span>
            <h3 className="text-white m-0 mb-2">
              If you have scaled AI in production, we want you on the stage
            </h3>
            <p className="text-[#F7F9FC]/82 m-0">
              Mumbai 2027 speaker announcements release in waves following steering committee review. Apply to join the 45+ enterprise faculty members below, or browse past speakers from the global World AI Show series.
            </p>
          </div>
          <a
            href="/mumbai/enterprise/agenda/call-for-speakers"
            className="bb-cta-primary inline-flex items-center justify-center gap-2 h-[48px] px-7 rounded-full font-bold text-[14px] text-white bg-[#F15928] shrink-0"
          >
            Apply to Speak <span className="cta-arrow inline-block">→</span>
          </a>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/22 pb-6">
            <h2 className="text-white m-0">
              Global Series <GradientText>Past Speakers</GradientText>
            </h2>

            <div className="relative w-full max-w-[360px]">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, designation, or company"
                className="w-full h-[46px] px-4 rounded-full bg-[#F7F9FC] border border-white/80 text-[#08121E] text-[14px] placeholder:text-[#08121E]/50 focus:outline-none focus:border-[#F15928] transition-colors"
              />
            </div>
          </div>
        </div>

        {filteredSpeakers.length === 0 ? (
          <p className="text-white/85 text-lg">No speakers match your current search or filter criteria.</p>
        ) : (
          <div className="speaker-grid grid grid-cols-4 gap-[24px] max-[1080px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-1">
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
