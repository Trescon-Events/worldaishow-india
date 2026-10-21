"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const faqs = [
  {
    q: "What is World AI Show: The Enterprise Edition?",
    a: "World AI Show: The Enterprise Edition | Mumbai 2027 is a two-day executive conference for 300 CIOs, CTOs, Chief AI Officers, CDOs, CISOs, COOs, and enterprise transformation leaders turning AI pilots into governed, measurable enterprise performance.",
  },
  {
    q: "How does this edition connect to the wider World AI Show Series in India?",
    a: "Mumbai serves as Edition 1 — the official launch of the World AI Show Series in India — initiating a multi-city executive roadmap across regional chapters (Q2–Q3) and culminating in the 2027 Series Finale (Q4).",
  },
  {
    q: "Who qualifies for a complimentary Delegate Pass?",
    a: "The Delegate Pass is complimentary, by invitation and qualification, for senior enterprise technology, data, operations, and risk leaders (CIOs, CAIOs, CTOs, CDOs, CISOs, COOs, and Transformation Heads) holding an active mandate to deploy enterprise AI. Technology solution providers, software vendors, system integrators, and consultancies may apply for a paid Business Pass.",
  },
  {
    q: "What does the 2-day programme cover?",
    a: "The 2-day programme is structured around five content pillars: (01) Enterprise AI strategy and business value, (02) Pilot to production and workflow redesign, (03) Agentic AI and accountable autonomy, (04) Data context and the AI-ready stack, and (05) Governance, security and proportionate trust.",
  },
  {
    q: "What are the speaking durations and standardized booth sizes for sponsors?",
    a: "Commercial partnerships feature 30-minute standalone stage thought leadership sessions, standardized 9 sqm and 12 sqm exhibition spaces, and curated closed-door CXO boardrooms for 15 pre-qualified executives.",
  },
  {
    q: "Where and when does the event take place?",
    a: "The conference takes place across 2 Days on 20–21 April 2027 in Mumbai, India.",
  },
  {
    q: "Who organises the World AI Show Series?",
    a: "World AI Show: The Enterprise Edition is organised by Trescon, the team behind World AI Show — the world's longest-running AI summit series with 46 global editions completed across 51+ countries, convening 42,000+ C-level executives and 2,600+ speakers.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[104px] pt-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          Frequently asked <GradientText>questions.</GradientText>
        </h2>

        {/* Semantic Accordion List */}
        <div className="max-w-[976px] mx-auto mt-12 p-[26px_16px] border border-white/8 rounded-[24px] bg-[#040a19]/50 shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-sm:p-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={faq.q}
                open={isOpen}
                className="border-b border-white/36 last:border-b-0 group"
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : index);
                  }}
                  className="grid grid-cols-[58px_1fr_32px] items-center gap-5 min-h-[68px] px-6 cursor-pointer list-none select-none max-sm:grid-cols-[46px_1fr_18px] max-sm:gap-3 max-sm:px-1.5 [&::-webkit-details-marker]:hidden"
                >
                  <span className="text-white/68 font-mono text-[13px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-white font-extrabold text-[18px] group-open:text-cyan transition-colors max-sm:text-[16px] leading-snug">
                    {faq.q}
                  </strong>
                  <i className="text-white/70 font-normal not-italic text-right text-xl transition-transform group-open:rotate-45 block">
                    +
                  </i>
                </summary>
                <p className="max-w-[740px] mx-auto mt-[-6px] mr-[76px] mb-6 ml-[78px] text-muted text-[15px] leading-relaxed max-sm:mx-1.5 max-sm:ml-16 max-sm:mb-[22px]">
                  {faq.a}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
