"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";

import styles from "./AgendaPage.module.css";
import "./agenda.css";
import { AgendaSection } from "../components/sections/AgendaSection";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { SpeakerCallToStage } from "../speakers/SpeakerCallToStage";

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

const formats = [
  {
    title: "Plenary Keynotes & Panels",
    text: "CIOs, CAIOs, CTOs, CDOs, CISOs, and COOs dissecting what changes between AI pilot and production, the AI-ready enterprise stack, and accountable agentic autonomy.",
    image: "/enterprise/images/agenda/keynotes.webp"
  },
  {
    title: "30-Minute Partner Thought Leadership",
    text: "Dedicated 30-minute standalone main-stage sessions examining production architectures, enterprise workflow redesign, and verified business outcomes.",
    image: "/enterprise/images/agenda/panel-discussion.webp"
  },
  {
    title: "Closed-Door Executive Roundtables",
    text: "Curated 15-CXO closed-door boardroom discussions operating under the Chatham House Rule alongside live production deployment case studies.",
    image: "/enterprise/images/agenda/Fireside.webp"
  }
];

const gateway = [
  ["Edition 1: The Enterprise Edition (Mumbai)", "20–21 April 2027 · 2 Days. The official launch of the World AI Show Series in India, convening 300 qualified CXOs.", "/enterprise/images/agenda/Enterprise.webp"],
  ["Regional Chapters (Q2–Q3)", "Continuing the executive dialogue across India's priority technology and enterprise corridors throughout Q2 and Q3.", "/enterprise/images/agenda/Growing-dig.webp"],
  ["Series Finale (Q4)", "Culminating in the 2027 World AI Show India Series Finale in Q4, uniting the country's complete enterprise AI leadership.", "/enterprise/images/agenda/Investment-innovation.webp"]
];

const focusItems = [
  ["Pillar 1: Enterprise AI Strategy & Business Value", "Use-case scale decisions, executive outcome ownership, and board-level productivity metrics.", "/enterprise/images/agenda/Policy.webp"],
  ["Pillar 2: Pilot to Production & Workflow Redesign", "Continuous integration, latency, exception handling, and human-in-the-loop workflows.", "/enterprise/images/agenda/AI-infra.webp"],
  ["Pillar 3: Agentic AI & Accountable Autonomy", "Agent identity, tool permissions, approval gates, auditability, and failure containment.", "/enterprise/images/agenda/investment.webp"],
  ["Pillar 4: Data & Architecture (The AI-Ready Stack)", "Data quality and context retrieval, real-time enterprise access, API fabrics, hybrid/multi-cloud workload placement, interoperability, and data sovereignty.", "/enterprise/images/agenda/Global.webp"],
  ["Pillar 5: Governance, Security & Proportionate Trust", "Proportionate risk tiering, synthetic media safeguards, and compliance guidelines.", "/enterprise/images/agenda/strong.webp"]
];

type EnterpriseAgendaSession = {
  id: number;
  dayKey: string;
  dayLabel: string;
  startTime: string;
  endTime: string;
  title: string;
  typeTitle: string;
  location: string;
  description: string;
  trackId: string;
  trackTitle: string;
};

const enterpriseSchedule: EnterpriseAgendaSession[] = [
  // Day 1 — Tuesday 20 April 2027: Enterprise Execution
  {
    id: 101,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "09:30",
    endTime: "10:00",
    title: "Registration & Exhibition Networking",
    typeTitle: "Networking",
    location: "Exhibition Arena & Registration Concourse",
    description: "Executive badge collection, morning refreshments, and exhibition floor exploration.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 102,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "10:00",
    endTime: "10:25",
    title: "Opening Plenary Keynote: From AI Ambition to Enterprise Execution",
    typeTitle: "Keynote",
    location: "Main Plenary Stage",
    description: "Setting the operational mandate for Edition 1 of the World AI Show Series in India: moving from isolated proofs of concept to governed enterprise execution.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 103,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "10:25",
    endTime: "11:00",
    title: "Panel: What Changes Between AI Pilot and Production?",
    typeTitle: "Panel",
    location: "Main Plenary Stage",
    description: "Pillar 02 — Continuous integration, latency, exception handling, and human-in-the-loop workflows when scaling from sandbox to core enterprise operations.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 104,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "11:00",
    endTime: "11:30",
    title: "Partner Thought Leadership Session 1 (30 Minutes)",
    typeTitle: "Partner Session (30 Min)",
    location: "Main Plenary Stage",
    description: "30-minute standalone commercial thought leadership session examining enterprise-grade AI architecture and verified production outcomes.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 105,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "11:30",
    endTime: "13:00",
    title: "Curated Executive Roundtable 1 (Closed-Door, 15 CXOs)",
    typeTitle: "Executive Roundtable",
    location: "VIP Boardroom 1 · Closed-Door",
    description: "Chatham House Rule peer-to-peer boardroom for 15 pre-qualified CXOs, featuring a 5-minute opening address inside the room.",
    trackId: "boardroom",
    trackTitle: "Closed-Door CXO Boardrooms"
  },
  {
    id: 106,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "11:30",
    endTime: "12:15",
    title: "Fireside: Productivity is not transformation: redesigning work around AI",
    typeTitle: "Fireside",
    location: "Main Plenary Stage",
    description: "Pillar 01 & 02 — Why end-to-end workflow redesign and operating-model ownership separate enterprise value creators from incremental productivity pilots.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 107,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "12:15",
    endTime: "12:45",
    title: "Partner Thought Leadership Session 2 (30 Minutes)",
    typeTitle: "Partner Session (30 Min)",
    location: "Main Plenary Stage",
    description: "30-minute standalone session showcasing enterprise deployment blueprints and measurable operational impact.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 109,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "12:45",
    endTime: "13:15",
    title: "Deployment Case Study: One Use Case, One Outcome",
    typeTitle: "Case Study",
    location: "Main Plenary Stage",
    description: "Deep-dive audit of a single production enterprise AI deployment: original baseline, architecture trade-offs, exception handling, and verified ROI.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 116,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "13:15",
    endTime: "14:15",
    title: "Lunch & Networking",
    typeTitle: "Networking",
    location: "Exhibition Arena & Dining Concourse",
    description: "Executive lunch and peer-to-peer networking across the exhibition showcase.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 110,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "14:15",
    endTime: "14:45",
    title: "Partner Thought Leadership Session 3 (30 Minutes)",
    typeTitle: "Partner Session (30 Min)",
    location: "Main Plenary Stage",
    description: "30-minute standalone session focused on modernizing enterprise data context, cloud integration, and production scalability.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 111,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "14:45",
    endTime: "15:30",
    title: "Panel: The AI-ready enterprise stack: data, cloud, architecture and Sovereignty",
    typeTitle: "Panel",
    location: "Main Plenary Stage",
    description: "Pillar 04 — Real-time enterprise access, API fabrics, hybrid-cloud trade-offs, data sovereignty, and data quality for production AI.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 108,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "15:30",
    endTime: "17:00",
    title: "Curated Executive Roundtable 2 (Closed-Door, 15 CXOs)",
    typeTitle: "Executive Roundtable",
    location: "VIP Boardroom 2 · Closed-Door",
    description: "Chatham House Rule peer-to-peer boardroom for 15 pre-qualified CXOs, featuring a 5-minute opening address inside the room.",
    trackId: "boardroom",
    trackTitle: "Closed-Door CXO Boardrooms"
  },
  {
    id: 112,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "15:30",
    endTime: "16:00",
    title: "Partner Thought Leadership Session 4 (30 Minutes)",
    typeTitle: "Partner Session (30 Min)",
    location: "Main Plenary Stage",
    description: "30-minute standalone session examining governed autonomy, security guardrails, and enterprise orchestration.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 113,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "16:00",
    endTime: "16:45",
    title: "Panel: Agentic AI in the Enterprise — Where Should Autonomy Act?",
    typeTitle: "Panel",
    location: "Main Plenary Stage",
    description: "Pillar 03 — Agent identity, tool permissions, approval gates, auditability, and failure containment when deploying multi-step agents.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 114,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "16:45",
    endTime: "17:15",
    title: "Guest Keynote: Building the Intelligent Enterprise",
    typeTitle: "Keynote",
    location: "Main Plenary Stage",
    description: "Executive perspective on aligning boardroom capital allocation, technology architecture, and workforce transformation.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 115,
    dayKey: "2027-04-20",
    dayLabel: "Tuesday 20 April 2027: Enterprise Execution",
    startTime: "17:15",
    endTime: "17:35",
    title: "Audience Reset Segment",
    typeTitle: "Special Feature",
    location: "Main Plenary Stage",
    description: "High-energy interactive plenary reset concluding Day 1 prior to evening executive networking.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },

  // Day 2 — Wednesday 21 April 2027: Strategy to Scale
  {
    id: 201,
    dayKey: "2027-04-21",
    dayLabel: "Wednesday 21 April 2027: Strategy to Scale",
    startTime: "09:30",
    endTime: "10:00",
    title: "Keynote: The Next Frontier of Enterprise AI",
    typeTitle: "Keynote",
    location: "Main Plenary Stage",
    description: "Opening Day 2 with a strategic synthesis of enterprise AI scale decisions, outcome ownership, and cross-functional governance.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 202,
    dayKey: "2027-04-21",
    dayLabel: "Wednesday 21 April 2027: Strategy to Scale",
    startTime: "10:00",
    endTime: "10:45",
    title: "Dialogue: Building a Repeatable AI Delivery Model",
    typeTitle: "Dialogue",
    location: "Main Plenary Stage",
    description: "Establishing reusable platform foundations, risk tiering, and cross-functional delivery squads that turn one-off successes into repeatable execution.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 203,
    dayKey: "2027-04-21",
    dayLabel: "Wednesday 21 April 2027: Strategy to Scale",
    startTime: "10:45",
    endTime: "11:15",
    title: "Partner Thought Leadership Session 5 (30 Minutes)",
    typeTitle: "Partner Session (30 Min)",
    location: "Main Plenary Stage",
    description: "30-minute standalone session on enterprise AI security, proportionate trust, and regulatory readiness.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 204,
    dayKey: "2027-04-21",
    dayLabel: "Wednesday 21 April 2027: Strategy to Scale",
    startTime: "11:15",
    endTime: "12:00",
    title: "Interactive AI workshop: What should the board measure?",
    typeTitle: "Interactive Workshop",
    location: "Main Plenary Stage",
    description: "An interactive session working through hypothetical, real-world enterprise AI scenarios to examine baseline performance, realised benefits, total costs and risks. Participants will explore what evidence leaders need to determine whether an AI initiative is ready to scale, requires redesign or should be reconsidered.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 205,
    dayKey: "2027-04-21",
    dayLabel: "Wednesday 21 April 2027: Strategy to Scale",
    startTime: "12:00",
    endTime: "12:30",
    title: "Partner Thought Leadership Session 6 (30 Minutes)",
    typeTitle: "Partner Session (30 Min)",
    location: "Main Plenary Stage",
    description: "30-minute standalone session examining enterprise operating-model transformation and measurable ROI at scale.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 206,
    dayKey: "2027-04-21",
    dayLabel: "Wednesday 21 April 2027: Strategy to Scale",
    startTime: "12:30",
    endTime: "13:15",
    title: "Panel: Redesigning the AI Operating Model — People & Roles",
    typeTitle: "Panel",
    location: "Main Plenary Stage",
    description: "Workforce restructuring, human-AI handoffs, decision rights, and accountability across technology, operations, and risk.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  },
  {
    id: 207,
    dayKey: "2027-04-21",
    dayLabel: "Wednesday 21 April 2027: Strategy to Scale",
    startTime: "13:15",
    endTime: "13:30",
    title: "Closing: The Enterprise AI Playbook",
    typeTitle: "Closing Synthesis",
    location: "Main Plenary Stage",
    description: "Distilling the five operational decisions and key takeaways from Edition 1 ahead of the World AI Show India regional chapters and Q4 Series Finale.",
    trackId: "main",
    trackTitle: "Main Plenary Stage"
  }
];

function GradientText({ children }: { children: ReactNode }) {
  return <span className={styles.gradientText}>{children}</span>;
}

function ArrowSVG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3.33334 8H12.6667"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.66666 4L12.6667 8L8.66666 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function setPointerGlow(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
}

function IconCard({ title, text, icon, index }: { title: string; text: string; icon: string; index: number }) {
  return (
    <article className={styles.iconCard}>
      <span className={styles.iconBadge}><img src={icon} alt="" loading="lazy" /></span>
      <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function AgendaTabs() {
  const dayTabs = [
    { key: "2027-04-20", label: "Tuesday 20 April 2027: Enterprise Execution" },
    { key: "2027-04-21", label: "Wednesday 21 April 2027: Strategy to Scale" }
  ];

  const [activeDay, setActiveDay] = useState("2027-04-20");
  const [activeTrack, setActiveTrack] = useState("all");
  const [activeSessionType, setActiveSessionType] = useState("");
  const [query, setQuery] = useState("");

  const sessionTypes = useMemo(() => {
    return Array.from(new Set(enterpriseSchedule.map((s) => s.typeTitle)));
  }, []);

  const trackTabs = useMemo(() => {
    const sessionsForDay = enterpriseSchedule.filter((session) => session.dayKey === activeDay);
    return Array.from(
      new Map(sessionsForDay.map((session) => [session.trackId, session.trackTitle])).entries()
    ).map(([id, title]) => ({ id, title }));
  }, [activeDay]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return enterpriseSchedule.filter((session) => {
      const dayMatches = session.dayKey === activeDay;
      const trackMatches = activeTrack === "all" || session.trackId === activeTrack;
      const typeMatches = !activeSessionType || session.typeTitle === activeSessionType;
      const searchMatches =
        !normalizedQuery ||
        session.title.toLowerCase().includes(normalizedQuery) ||
        session.description.toLowerCase().includes(normalizedQuery) ||
        session.typeTitle.toLowerCase().includes(normalizedQuery);
      return dayMatches && trackMatches && typeMatches && searchMatches;
    });
  }, [activeDay, activeSessionType, activeTrack, query]);

  function clearFilters() {
    setActiveTrack("all");
    setActiveSessionType("");
    setQuery("");
  }

  return (
    <section className={styles.timelineSection} id="agenda">
      <div className={styles.container}>
        <div className={styles.timelineIntro}>
          <h2>Two days, <GradientText>five operational decisions.</GradientText></h2>
        </div>
        <div className={styles.dayTabs} role="tablist" aria-label="Agenda days">
          {dayTabs.map((day, index) => (
            <button
              className={activeDay === day.key ? styles.activeDay : ""}
              key={day.key}
              onClick={() => {
                setActiveDay(day.key);
                setActiveTrack("all");
              }}
              onPointerMove={setPointerGlow}
              type="button"
            >
              <span>{day.label}</span>
              <strong>{index === 0 ? "Day 1 · 20 Apr 2027" : "Day 2 · 21 Apr 2027"}</strong>
              <small>{index === 0 ? "Enterprise Execution" : "Strategy to Scale"}</small>
            </button>
          ))}
        </div>

        {trackTabs.length > 1 ? (
          <div className={styles.trackTabs} aria-label="Agenda tracks">
            <button
              className={activeTrack === "all" ? styles.activeTrack : ""}
              onClick={() => setActiveTrack("all")}
              onPointerMove={setPointerGlow}
              type="button"
            >
              All Tracks
            </button>
            {trackTabs.map((track) => (
              <button
                className={activeTrack === track.id ? styles.activeTrack : ""}
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                onPointerMove={setPointerGlow}
                type="button"
              >
                {track.title}
              </button>
            ))}
          </div>
        ) : null}

        <div className={styles.agendaFilters} aria-label="Agenda filters">
          <label>
            <span>Search</span>
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search sessions, topics, or formats"
              type="search"
              value={query}
            />
          </label>

          <label>
            <span>Session Type</span>
            <select onChange={(event) => setActiveSessionType(event.target.value)} value={activeSessionType}>
              <option value="">All Formats</option>
              {sessionTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>

          {activeTrack !== "all" || activeSessionType || query ? (
            <button onClick={clearFilters} type="button">Clear</button>
          ) : null}
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineHead}>
            <span>{dayTabs.find((day) => day.key === activeDay)?.label || "2-Day Executive Programme"}</span>
            <span>Mumbai, India · 2 Days</span>
          </div>

          {filteredItems.length === 0 ? (
            <p className={styles.loadingState}>No sessions match the selected filters.</p>
          ) : null}

          {filteredItems.map((session, index) => (
            <article
              className={styles.timelineRow}
              key={session.id}
              onPointerMove={setPointerGlow}
              style={{ "--row-index": index } as CSSProperties}
            >
              <time>{session.startTime}<span>{session.endTime}</span></time>
              <span className={styles.sessionType}>{session.typeTitle}</span>
              <div>
                <h3>{session.title}</h3>
                {session.description ? <p>{session.description}</p> : null}
                {session.location ? <small className={styles.locationText}>{session.location}</small> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AgendaOverview() {
  return (
    <>
      <section className={`${styles.hero} pt-[200px]`} id="overview">
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            Executive Programme
          </span>
          <h1>Two days,<br /><GradientText>five operational decisions.</GradientText></h1>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.split}>
          <div>
            <h2>Operational ownership over <GradientText>technology demonstrations.</GradientText></h2>
            <p>
              World AI Show: The Enterprise Edition | Mumbai 2027 is a two-day executive conference for 300 CIOs, CTOs, Chief AI Officers, CDOs, CISOs, COOs, and enterprise transformation leaders turning AI pilots into governed, measurable enterprise performance.
            </p>
            <p>
              As Edition 1 of the World AI Show Series in India, the programme is built around five operational decisions that every cross-functional enterprise buying group must resolve across strategy, production workflow redesign, agentic autonomy, data context, and proportionate trust.
            </p>
          </div>
          <img src="/enterprise/images/agenda/About.webp" alt="Executives networking at World AI Show" loading="lazy" />
        </div>
      </section>

      <section className={styles.formatsSection}>
        <div className={styles.container}>
          <h2>The formats <GradientText>driving execution.</GradientText></h2>
          <p>A working executive programme across 2 Days — every session structured for production evidence.</p>

          {/* 2-Column Day 1 & Day 2 Focus Table */}
          <div className="grid grid-cols-2 max-md:grid-cols-1 border border-[#18d4ff]/30 rounded-[18px] overflow-hidden bg-[#050d20]/85 shadow-[0_18px_45px_rgba(0,0,0,0.35),inset_0_0_24px_rgba(24,212,255,0.05)] mb-12 text-left">
            <div className="p-7 border-r border-[#18d4ff]/25 max-md:border-r-0 max-md:border-b">
              <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-[#C0F43C] font-bold mb-2">
                Day 01 · Enterprise Execution
              </span>
              <p className="!m-0 !text-white/90 !text-[17px] leading-relaxed font-medium">
                Day 1 focuses on enterprise execution, architectures, and agentic autonomy.
              </p>
            </div>
            <div className="p-7">
              <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-[#18d4ff] font-bold mb-2">
                Day 02 · Strategy to Scale
              </span>
              <p className="!m-0 !text-white/90 !text-[17px] leading-relaxed font-medium">
                Day 2 focuses on repeatable delivery, operating models, governance, and measuring enterprise business value.
              </p>
            </div>
          </div>

          <div className={styles.formatGrid}>
            {formats.map((item) => (
              <article className={styles.formatCard} key={item.title}>
                <img src={item.image} alt="" loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>the operating model gets decided.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (by invitation and qualification), enquire about commercial sponsorship, or apply to join the enterprise faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/enterprise/attend/delegate">Apply for a Delegate Pass <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/enterprise/sponsorship-enquiry">Enquire about sponsorship <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>20–21 April 2027 · 2 Days</dd></div>
            <div><dt>Venue</dt><dd>Mumbai, India</dd></div>
            <div><dt>Series</dt><dd>Edition 1 · India Series Launch</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaVision() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="the-2030-vision-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/enterprise/images/agenda/Vision-2030-bg.webp) right center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            ENTERPRISE VALUE &amp; INDIA SERIES TRAJECTORY
          </span>
          <h1>Enterprise AI Value &amp; <br /><GradientText>The India Series Trajectory.</GradientText></h1>
        </div>
      </section>

      <section className={styles.visionSection} id="the-2030-vision">
        <div className={styles.split}>
          <div className={styles.leftCol}>
            <img src="/enterprise/images/agenda/driving-malaysia-stage.webp" alt="Executive panel discussion at World AI Show" loading="lazy" />
          </div>
          <div className={styles.visionCopy}>
            <p>
              <strong>Measuring Business Value &amp; ROI:</strong> Moving beyond isolated proofs of concept to track expanded operational productivity KPIs, workflow transformation, and verified business outcomes at board level.
            </p>
            <p>
              <strong>The India Series Trajectory:</strong> Edition 1: The Enterprise Edition (Mumbai) → Regional Chapters (Q2–Q3) → Series Finale (Q4).
            </p>
            <p>
              Mumbai serves as the official launch of the World AI Show Series in India, establishing a year-long executive roadmap that connects enterprise operational reality with verified boardroom outcomes.
            </p>
            <blockquote>
              &ldquo;Nearly 97% expect AI to improve productivity; about 73% already track productivity using expanded or comprehensive KPIs.&rdquo;
              <cite className={styles.blockquoteCite}>&mdash; SOURCE: DELOITTE, STATE OF AI IN THE ENTERPRISE: INDIA INSIGHTS</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.gatewaySection}>
        <div className={styles.container}>
          <h2>The 3-Stage <GradientText>India Series Roadmap.</GradientText></h2>
          <p>How Edition 1 in Mumbai initiates a nationwide executive dialogue culminating in the Q4 Series Finale.</p>
          <div className={styles.cardGrid}>
            {gateway.map(([title, text, icon], index) => <IconCard icon={icon} index={index} key={title} text={text} title={title} />)}
          </div>
        </div>
      </section>

      <AgendaSection
        title={<>Five Talking Points. <GradientText>Two Days.</GradientText></>}
        subtitle="Curated Agenda"
        description="Workforce restructuring, operating-model change, and verified ROI run across all five."
      />
    </>
  );
}

export function AgendaLiveTimeline() {
  return (
    <>
      <section className={`${styles.hero} pt-[200px]`} id="agenda-timeline-hero">
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            2-Day Executive Programme · 20–21 April 2027
          </span>
          <h1><GradientText>MUMBAI 2027 AGENDA</GradientText></h1>
          <p className={styles.heroPara}>
            Day 1 (Tuesday 20 April 2027: Enterprise Execution) and Day 2 (Wednesday 21 April 2027: Strategy to Scale).
          </p>
        </div>
      </section>
      <AgendaTabs />
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>the operating model gets decided.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (by invitation and qualification), enquire about commercial sponsorship, or apply to join the enterprise faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/enterprise/sponsorship-enquiry">Enquire about sponsorship <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/enterprise/speaker-enquiry">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>20–21 April 2027 · 2 Days</dd></div>
            <div><dt>Venue</dt><dd>Mumbai, India</dd></div>
            <div><dt>Series</dt><dd>Edition 1 · India Series Launch</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaThemes() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-themes-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.48) 42%, rgba(2, 7, 19, 0.05) 100%), url(/enterprise/images/agenda/Themes-bg.webp) right center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            The 5 Master Content Pillars
          </span>
          <h1>Five Talking Points. <br /><GradientText>Two Days.</GradientText></h1>
          <p className={styles.heroPara}>
            Workforce restructuring, operating-model change, and verified ROI run across all five content pillars.
          </p>
        </div>
      </section>
      <AgendaSection
        title={<>Five Talking Points. <GradientText>Two Days.</GradientText></>}
        subtitle="Curated Agenda"
        description="Workforce restructuring, operating-model change, and verified ROI run across all five."
      />
      <section className="relative pb-[104px] bg-[#051224]/70 max-sm:pb-[72px]">
        <div className={styles.container}>
          <div className={styles.brochureCta}>
            <div>
              <h3>Get the commercial partnership prospectus.</h3>
              <p>Full 2-day session architecture, 30-minute stage sessions, standardized 9 sqm and 12 sqm booth specifications, and closed-door CXO boardrooms.</p>
            </div>
            <a
              className={`${styles.button} ${styles.solid} group`}
              href="/enterprise/sponsorship-enquiry"
              style={{ minWidth: "220px" }}
            >
              Enquire about sponsorship
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" style={{ marginLeft: "8px" }}>
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.66666 4L12.6667 8L8.66666 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>the operating model gets decided.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (by invitation and qualification), enquire about commercial sponsorship, or apply to join the enterprise faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/enterprise/sponsorship-enquiry">Enquire about sponsorship <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/enterprise/speaker-enquiry">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>20–21 April 2027 · 2 Days</dd></div>
            <div><dt>Venue</dt><dd>Mumbai, India</dd></div>
            <div><dt>Series</dt><dd>Edition 1 · India Series Launch</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaCallForSpeakers() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-speakers-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/enterprise/images/agenda/Call-speakers-bg.webp) right center / cover no-repeat",
          alignItems: "center",
          minHeight: "750px",
          marginTop: "0",
          display: "flex"
        }}
      >
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            Call for Enterprise Speakers
          </span>
          <h1 className="text-white font-[850] tracking-[-2px] leading-[1.06] text-[clamp(44px,6vw,72px)] max-w-[860px]">
            If You Have Scaled AI in Production,{" "}
            <GradientText>Join us on the Stage</GradientText>
          </h1>
        </div>
      </section>
      <SpeakerCallToStage />
      <SpeakersSection
        heading={
          <>
            Join Our Growing Alumni of{" "}
            <GradientText>Enterprise Speakers at World AI Show</GradientText>
          </>
        }
      />
    </>
  );
}

export function AgendaPage() {
  return (
    <>
      <main className={`${styles.page} page-agenda`}>
        <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Overview" />
        <AgendaOverview />
      </main>
      <FooterSection />
    </>
  );
}
