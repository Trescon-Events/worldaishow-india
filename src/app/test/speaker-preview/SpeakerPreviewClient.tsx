"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AiMumbaiScopedStyles,
  AiMumbaiHeader,
  AiMumbaiFooter,
  HalftoneVortexRings,
  NeuralDataStreamsOverlay,
  Concept2SpeakerCard,
  STAGING_SPEAKERS,
} from "../_design-system/AiMumbaiBrandSystem";

const RELATED_SESSIONS = [
  {
    id: "panel-sovereign-cloud",
    tag: "CO-PANEL · SOVEREIGN INFRASTRUCTURE",
    time: "Day 1 · 20 April 2027 · 12:15 – 13:00 IST",
    stage: "Plenary Hall A · Sovereign Stage",
    title: "Sovereign Cloud Zones, Domestic GPU Clusters & Cross-Border Data Residency",
    abstract:
      "An executive architecture dialogue examining how Indian enterprises and public-sector undertakings are deploying high-density sovereign compute corridors while maintaining low-latency inference and full DPDP compliance.",
    coPanelists: ["Sumnesh Joshi (Govt. of India)", "Ashwini Tewari (SBI)", "Saumer Phukan (Intel India)"],
  },
  {
    id: "boardroom-agentic-risk",
    tag: "CLOSED-DOOR CXO ROUNDTABLE · AI GOVERNANCE",
    time: "Day 2 · 21 April 2027 · 11:30 – 13:00 IST",
    stage: "Sovereign Boardroom Suite · By Invitation",
    title: "Auditing Autonomous Multi-Agent Workflows in Critical National Sectors",
    abstract:
      "A Chatham House Rule boardroom session establishing verifiable red-teaming protocols, deterministic kill-switches, and board-level liability frameworks for autonomous enterprise AI agents.",
    coPanelists: ["Kirti Patil (Kotak Life)", "CP Gurnani (AIonOS)", "Shruti Kashyap (Hindustan Unilever)"],
  },
  {
    id: "fireside-roi-2047",
    tag: "KEYNOTE FIRESIDE · GENERATIVE SYSTEMS",
    time: "Day 2 · 21 April 2027 · 14:15 – 15:00 IST",
    stage: "Grand Ballroom · AI 2047 Forum",
    title: "Beyond Pilot Purgatory: Measuring Verifiable P&L Impact from Enterprise GenAI",
    abstract:
      "Addressing the Deloitte 2026 India benchmark: while 97% of enterprises expect productivity gains and 73% track expanded KPIs, only 17% have achieved fundamental process reinvention.",
    coPanelists: ["CP Gurnani (AIonOS)", "Sanjay Mohan (MakeMyTrip)", "Krishnan Venkateswaran (Titan)"],
  },
  {
    id: "plenary-indic-models",
    tag: "PLENARY SYMPOSIUM · ENTERPRISE AUTOMATION",
    time: "Day 2 · 21 April 2027 · 16:00 – 16:45 IST",
    stage: "Plenary Hall A · Sovereign Stage",
    title: "Multilingual Indic Foundation Models for Last-Mile Enterprise & Citizen Services",
    abstract:
      "Deploying voice-first and vernacular multimodal AI systems across banking, insurance, logistics, and public digital infrastructure for 1.4 billion citizens.",
    coPanelists: ["Sumnesh Joshi (Govt. of India)", "Tapan Singhel (Bajaj Allianz)", "Vikram Chauhan (Intel India)"],
  },
];

export function SpeakerPreviewClient() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeFocusBadge, setActiveFocusBadge] = useState<string | null>(null);

  const activeSpeaker = STAGING_SPEAKERS[selectedIndex] || STAGING_SPEAKERS[0];

  return (
    <div className="ai2047-sandbox-root ai2047-sovereign-canvas ai2047-micro-linear min-h-screen flex flex-col selection:bg-[#F15928] selection:text-white">
      <AiMumbaiScopedStyles />
      <AiMumbaiHeader activePage="speaker" />

      <main className="flex-1">
        {/* =====================================================================
            INTERACTIVE SANDBOX SPEAKER SELECTOR BAR
           ===================================================================== */}
        <div className="bg-[#001830]/90 border-b border-[#009EAD]/35">
          <div className="max-w-[1280px] mx-auto px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span
                className="ai2047-caption px-2.5 py-0.5 rounded font-bold uppercase tracking-[0.14em]"
                style={{ backgroundColor: "#0069B8" }}
              >
                CONCEPT 2 · NEURAL DATA FLOW
              </span>
              <span className="ai2047-caption text-white/85">
                Select a dummy speaker profile to preview portrait &amp; typography scaling:
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {STAGING_SPEAKERS.map((spk, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={spk.id}
                    type="button"
                    onClick={() => {
                      setSelectedIndex(idx);
                      setActiveFocusBadge(null);
                    }}
                    className={`ai2047-caption px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#F15928] text-white border-[#F15928] font-bold shadow-[0_0_16px_rgba(241,89,40,0.45)]"
                        : "bg-[#002344] text-white/80 border-[#009EAD]/45 hover:border-[#009EAD] hover:text-white"
                    }`}
                  >
                    {spk.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================================
            1. SPEAKER PROFILE HERO (Concept 2 Cybernetic Portrait + H1 + H3)
           ===================================================================== */}
        <section
          className="relative overflow-hidden py-16 md:py-20 border-b border-[#009EAD]/35"
          style={{
            background:
              "radial-gradient(ellipse 75% 65% at 28% 35%, rgba(0, 105, 184, 0.82) 0%, rgba(0, 56, 104, 0.92) 55%, rgba(0, 22, 44, 0.98) 100%)",
          }}
        >
          {/* Background Halftone Vortex Motif (5-10% Opacity) */}
          <HalftoneVortexRings
            variant="canvas"
            opacity={0.09}
            className="absolute -right-40 top-1/2 -translate-y-1/2 w-[980px] h-[980px]"
          />

          <div className="relative z-10 max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column (5 cols): Large Concept 2 Cybernetic Portrait */}
              <div className="lg:col-span-5">
                <div className="ai2047-sovereign-card relative rounded-[26px] overflow-hidden border border-[#009EAD]">
                  {/* Top Signal Teal Luminous Accent */}
                  <div
                    className="h-[3px] w-full"
                    style={{
                      background: "linear-gradient(90deg, #0069B8 0%, #009EAD 50%, #F15928 100%)",
                    }}
                  />

                  <div className="relative h-[460px] sm:h-[500px] w-full overflow-hidden bg-gradient-to-b from-[#005BA1] via-[#00396B] to-[#00172E]">
                    {/* Radiating Concentric Dot-Matrix Vortex Ring Graphic */}
                    <HalftoneVortexRings
                      variant="avatar"
                      opacity={0.5}
                      className="absolute inset-0 w-full h-full scale-[1.35]"
                    />

                    {/* Flowing Blue/Cyan Luminous Neural Data Streams */}
                    <NeuralDataStreamsOverlay className="absolute inset-0 w-full h-full z-10" />

                    {/* High-Contrast Speaker Portrait Silhouette */}
                    <img
                      src={activeSpeaker.image}
                      alt={activeSpeaker.name}
                      className="relative z-20 w-full h-full object-cover object-top contrast-110 saturate-105"
                    />

                    {/* Sovereign Blue to Dark Transparent Gradient Overlay */}
                    <div
                      className="absolute inset-0 z-30 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,105,184,0.06) 0%, rgba(0,43,82,0.28) 62%, rgba(0,20,40,0.94) 100%)",
                      }}
                    />

                    {/* Bottom Concept 2 Telemetry Badge */}
                    <div className="absolute bottom-4 left-4 right-4 z-40 flex items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-[#001529]/90 border border-[#009EAD]/60 backdrop-blur-md">
                      <span className="ai2047-caption font-bold uppercase tracking-[0.14em] text-[#7CE8F2] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#009EAD] animate-pulse" />
                        CONCEPT 2 · NEURAL DATA FLOW
                      </span>
                      <span className="ai2047-caption text-white/80 font-bold">
                        AI MUMBAI 2047
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (7 cols): H1 Speaker Name, H3 Designation & Org, Social Links */}
              <div className="lg:col-span-7">
                <div className="inline-flex flex-wrap items-center gap-2.5 mb-5">
                  <span
                    className="ai2047-caption px-3.5 py-1 rounded-full font-bold uppercase tracking-[0.14em] text-white"
                    style={{ backgroundColor: "#F15928" }}
                  >
                    KEYNOTE FACULTY
                  </span>
                  <span
                    className="ai2047-caption px-3.5 py-1 rounded-full font-bold uppercase tracking-[0.14em] border"
                    style={{
                      borderColor: "#009EAD",
                      backgroundColor: "rgba(0, 158, 173, 0.16)",
                      color: "#7CE8F2",
                    }}
                  >
                    TRACK: {activeSpeaker.track.toUpperCase()}
                  </span>
                </div>

                {/* Speaker Name (H1: 57px | Line Height: 115% | Bold) */}
                <h1 className="ai2047-h1 text-white m-0">
                  {activeSpeaker.name}
                </h1>

                {/* Designation & Organization (H3: 40px | Line Height: 120% | Bold) */}
                <h2 className="ai2047-h3 text-[#7CE8F2] m-0 mt-4">
                  {activeSpeaker.designation}
                </h2>
                <div
                  className="ai2047-h4 m-0 mt-1.5 text-white/95"
                >
                  {activeSpeaker.organization}
                </div>

                {/* Body 1 Lead Summary (23px | Line Height: 135%) */}
                <p className="ai2047-body1 text-white/90 m-0 mt-6">
                  {activeSpeaker.leadBio}
                </p>

                {/* Social Links & Primary Conversion CTA */}
                <div className="mt-8 pt-6 border-t border-[#009EAD]/35 flex flex-wrap items-center gap-4">
                  <a
                    href="#keynote-session"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-[15px] text-white transition-all hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "#F15928",
                      boxShadow: "0 10px 26px rgba(241, 89, 40, 0.42)",
                    }}
                  >
                    Reserve Keynote Seat
                    <span aria-hidden="true">→</span>
                  </a>

                  <a
                    href={activeSpeaker.linkedinUrl}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-[14px] text-white border transition-all hover:bg-[#009EAD]/20"
                    style={{
                      borderColor: "#009EAD",
                      backgroundColor: "rgba(0, 29, 56, 0.75)",
                    }}
                  >
                    <svg className="w-4 h-4 fill-current text-[#7CE8F2]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    LinkedIn Profile
                  </a>

                  <a
                    href={activeSpeaker.xUrl}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-bold text-[14px] text-white border transition-all hover:bg-[#009EAD]/20"
                    style={{
                      borderColor: "#009EAD",
                      backgroundColor: "rgba(0, 29, 56, 0.75)",
                    }}
                  >
                    <svg className="w-4 h-4 fill-current text-[#7CE8F2]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Official X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            2. KEYNOTE SESSION CARD & 3. BIOGRAPHY + FOCUS AREAS
           ===================================================================== */}
        <section id="keynote-session" className="relative py-20 border-b border-[#009EAD]/35">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left 7 Cols: Keynote Session Card + Extended Biography */}
              <div className="lg:col-span-7 space-y-10">
                {/* Keynote Session Card */}
                <article className="ai2047-sovereign-card rounded-[24px] p-8 md:p-10 relative overflow-hidden">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    {/* Time/Stage Pill Tag in Signal Teal (#009EAD) */}
                    <span
                      className="ai2047-caption inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-bold uppercase tracking-[0.14em] text-white border"
                      style={{
                        backgroundColor: "rgba(0, 158, 173, 0.24)",
                        borderColor: "#009EAD",
                        boxShadow: "0 0 18px rgba(0, 158, 173, 0.3)",
                      }}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#009EAD]" />
                      {activeSpeaker.sessionTime}
                    </span>

                    <span
                      className="ai2047-caption inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold uppercase tracking-[0.14em] text-white"
                      style={{ backgroundColor: "#F15928" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {activeSpeaker.sessionStage}
                    </span>
                  </div>

                  {/* Session Title (H3: 40px | Line Height: 120% | Bold) */}
                  <h2 className="ai2047-h3 text-white m-0">
                    {activeSpeaker.sessionTitle}
                  </h2>

                  {/* Abstract Paragraph (16px | Line Height: 150%) */}
                  <p className="ai2047-paragraph text-white/90 m-0 mt-5">
                    This keynote address examines the architectural, regulatory, and operational blueprint required to scale sovereign and enterprise AI systems across India’s flagship industries. Attendees will receive actionable frameworks on compute resiliency, deterministic model guardrails, cross-functional governance, and verifiable P&amp;L returns aligned with the AI 2047 roadmap.
                  </p>

                  <div className="mt-7 pt-5 border-t border-[#009EAD]/35 flex flex-wrap items-center justify-between gap-4">
                    <div className="ai2047-caption text-[#7CE8F2] font-bold uppercase tracking-[0.12em]">
                      FORMAT: 30-MINUTE STANDALONE STAGE SESSION + LIVE EXECUTIVE Q&amp;A
                    </div>
                    <Link
                      href="/test/home-preview#register-cta"
                      className="ai2047-caption font-bold uppercase tracking-[0.14em] px-4 py-2 rounded-full text-white"
                      style={{ backgroundColor: "#F15928" }}
                    >
                      Add to Delegate Schedule →
                    </Link>
                  </div>
                </article>

                {/* Extended Biography (Body 1 & Paragraph) */}
                <article className="ai2047-sovereign-card rounded-[24px] p-8 md:p-10">
                  <span className="ai2047-caption uppercase tracking-[0.16em] font-bold text-[#7CE8F2]">
                    EXECUTIVE BIOGRAPHY &amp; MANDATE
                  </span>
                  <h3 className="ai2047-h4 text-white m-0 mt-2">
                    About {activeSpeaker.name}
                  </h3>

                  {/* Body 1 (23px | Line Height: 135%) */}
                  <p className="ai2047-body1 text-white/95 m-0 mt-5">
                    {activeSpeaker.leadBio}
                  </p>

                  {/* Paragraphs (16px | Line Height: 150%) */}
                  <div className="mt-5 space-y-4">
                    {activeSpeaker.fullBio.map((para, idx) => (
                      <p key={idx} className="ai2047-paragraph text-white/85 m-0">
                        {para}
                      </p>
                    ))}
                  </div>
                </article>
              </div>

              {/* Right 5 Cols: Interactive Skill / Track Badges & Telemetry Card */}
              <div className="lg:col-span-5 space-y-8">
                <aside className="ai2047-sovereign-card rounded-[24px] p-8">
                  <span className="ai2047-caption uppercase tracking-[0.16em] font-bold text-[#7CE8F2]">
                    INTERACTIVE DOMAIN TAXONOMY
                  </span>
                  <h3 className="ai2047-h4 text-white m-0 mt-2">
                    Focus Areas &amp; Track Badges
                  </h3>
                  <p className="ai2047-paragraph text-white/80 m-0 mt-2">
                    Click any domain badge below to inspect how this speaker’s work maps to the AI Mumbai | AI 2047 programme tracks:
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {activeSpeaker.focusAreas.map((area) => {
                      const isActive = activeFocusBadge === area;
                      return (
                        <button
                          key={area}
                          type="button"
                          onClick={() => setActiveFocusBadge(isActive ? null : area)}
                          className={`ai2047-paragraph px-4 py-2 rounded-full border font-medium transition-all cursor-pointer ${
                            isActive
                              ? "bg-[#F15928] text-white border-[#F15928] shadow-[0_0_16px_rgba(241,89,40,0.45)]"
                              : "bg-[#001D38] text-white/90 border-[#009EAD] hover:bg-[#009EAD]/25"
                          }`}
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>

                  {activeFocusBadge && (
                    <div className="mt-5 p-4 rounded-xl border border-[#009EAD] bg-[#001529]/90">
                      <div className="ai2047-caption uppercase tracking-[0.14em] text-[#7CE8F2] font-bold">
                        ACTIVE TRACK MATCH: {activeFocusBadge}
                      </div>
                      <p className="ai2047-paragraph text-white/88 m-0 mt-1">
                        {activeSpeaker.name} leads executive peer discussions on{" "}
                        <strong className="text-white">{activeFocusBadge}</strong> during the Day 1 &amp; Day 2 VIP Networking &amp; Boardroom track.
                      </p>
                    </div>
                  )}

                  {/* Quick Executive Snapshot */}
                  <div className="mt-8 pt-6 border-t border-[#009EAD]/35 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="ai2047-caption uppercase tracking-[0.12em] text-white/70">
                        SUMMIT EDITION
                      </span>
                      <span className="ai2047-caption font-bold text-white">
                        AI Mumbai · 52nd Global Edition
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="ai2047-caption uppercase tracking-[0.12em] text-white/70">
                        PRIMARY PILLAR
                      </span>
                      <span className="ai2047-caption font-bold text-[#7CE8F2]">
                        {activeSpeaker.track}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="ai2047-caption uppercase tracking-[0.12em] text-white/70">
                        DELEGATE ACCESS
                      </span>
                      <span className="ai2047-caption font-bold text-[#F15928]">
                        By Invitation &amp; Qualification
                      </span>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            4. RELATED SESSIONS / CO-PANELS (2-Column Grid of Dummy Cards)
           ===================================================================== */}
        <section className="relative py-20 border-b border-[#009EAD]/35 bg-[#001D38]/75">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="max-w-[780px] mb-12">
              <span className="ai2047-caption uppercase tracking-[0.16em] font-bold text-[#7CE8F2]">
                CROSS-TRACK SYMPOSIUMS &amp; ROUNDTABLES
              </span>
              <h2 className="ai2047-h2 text-white m-0 mt-2">
                Related Sessions &amp; Co-Panels
              </h2>
              <p className="ai2047-body2 text-white/85 m-0 mt-3">
                Explore linked plenary debates and closed-door CXO boardrooms across the AI Mumbai | AI 2047 programme.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {RELATED_SESSIONS.map((session) => (
                <article
                  key={session.id}
                  className="ai2047-sovereign-card rounded-[22px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span
                        className="ai2047-caption px-3.5 py-1 rounded-full font-bold uppercase tracking-[0.12em] border"
                        style={{
                          borderColor: "#009EAD",
                          backgroundColor: "rgba(0, 158, 173, 0.2)",
                          color: "#7CE8F2",
                        }}
                      >
                        {session.tag}
                      </span>
                      <span className="ai2047-caption text-white/80 font-bold">
                        {session.time}
                      </span>
                    </div>

                    <h3 className="ai2047-h4 text-white m-0">{session.title}</h3>

                    <p className="ai2047-paragraph text-white/85 m-0 mt-3.5">
                      {session.abstract}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#009EAD]/35">
                    <div className="ai2047-caption uppercase tracking-[0.12em] text-[#7CE8F2] font-bold mb-2">
                      FEATURED CO-PANELISTS:
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {session.coPanelists.map((panelist) => (
                          <span
                            key={panelist}
                            className="ai2047-caption px-2.5 py-0.5 rounded bg-[#001830] border border-[#009EAD]/40 text-white/90"
                          >
                            {panelist}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/test/home-preview#register-cta"
                        className="ai2047-caption font-bold uppercase tracking-[0.12em] text-white hover:text-[#F15928] shrink-0"
                      >
                        View Panel →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================================
            5. FULL CONCEPT 2 SPEAKER CARD GALLERY
           ===================================================================== */}
        <section className="relative py-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <span className="ai2047-caption uppercase tracking-[0.16em] font-bold text-[#7CE8F2]">
                  CONCEPT 2 · NEURAL DATA FLOW AVATAR SYSTEM
                </span>
                <h2 className="ai2047-h2 text-white m-0 mt-2">
                  Featured Enterprise Faculty Roster
                </h2>
              </div>
              <Link
                href="/test/home-preview"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white border border-[#009EAD] bg-[#001D38] hover:bg-[#009EAD]/20 transition-all"
              >
                ← Back to Staging Homepage (/test/home-preview)
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {STAGING_SPEAKERS.map((spk) => (
                <Concept2SpeakerCard
                  key={spk.id}
                  speaker={spk}
                  href="/test/speaker-preview"
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <AiMumbaiFooter />
    </div>
  );
}
