"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const buyingUnitConstituencies = [
  {
    title: "Enterprise technology leadership",
    desc: "CIOs, CTOs, and Chief AI Officers setting enterprise platforms and deployment roadmaps.",
    badge: "01 · TECHNOLOGY LEADERSHIP",
  },
  {
    title: "Enterprise architecture & data",
    desc: "CDOs and Chief Architects modernizing real-time data fabrics and cloud integration.",
    badge: "02 · ARCHITECTURE & DATA",
  },
  {
    title: "Operations & transformation",
    desc: "COOs and Business Heads establishing human-AI handoffs and productivity metrics.",
    badge: "03 · OPERATIONS & TRANSFORMATION",
  },
  {
    title: "Risk, security & compliance",
    desc: "CISOs, GRC Heads, and Legal Counsel instituting guardrails, audit trails, and agent permissions.",
    badge: "04 · RISK, SECURITY & COMPLIANCE",
  },
];

const industries = [
  ["Banking, Financial Services and Insurance", "banking.webp"],
  ["Manufacturing", "manufacturing.webp"],
  ["Retail and Ecommerce", "retail.webp"],
  ["Healthcare and Pharma", "health.webp"],
  ["Telecommunications", "telecomunication.webp"],
  ["Supply Chain and Logistics", "logistic.webp"],
  ["Government, Public Sector and Smart Cities", "Government.webp"],
  ["Energy and Utilities", "energy.webp"],
  ["Media and Entertainment", "Media.webp"],
  ["Travel and Tourism", "Travel.webp"],
  ["Education", "Education.webp"],
  ["Agriculture", "Agriculture.webp"],
] as const;

const cLevelRoles = [
  "Chief Information Officer (CIO)",
  "Chief AI Officer (CAIO)",
  "Chief Technology Officer (CTO)",
  "Chief Data Officer (CDO)",
  "Chief Information Security Officer (CISO)",
  "Chief Operating Officer (COO)",
];

const seniorRoles = [
  "Chief Enterprise Architect",
  "Head of Enterprise Transformation",
  "VP | Director | Head of AI & Data",
  "Head of Governance, Risk & Compliance (GRC)",
  "General Counsel & Legal Head",
];

export function NetworkingSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-[104px] bg-[#020C21] overflow-hidden max-sm:py-[72px]" id="networking">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* S7 · Who is in the room */}
        <div className="grid grid-cols-[0.78fr_1fr] gap-9 items-center max-[980px]:grid-cols-1 max-[980px]:gap-12">
          
          {/* Headline Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-[2px] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
              Who Is In The Room
            </div>
            <h2 className="text-left font-[850] text-white leading-[1.08] tracking-[-1.5px] text-[clamp(26px,3.1vw,38px)] max-[980px]:text-center">
              <span className="sm:whitespace-nowrap">The complete enterprise</span> <br />
              <GradientText>buying unit.</GradientText>
            </h2>
            <p className="mt-6 mb-8 text-muted text-[18px] leading-[1.5] max-[980px]:text-center max-sm:text-[16px]">
              300 qualified enterprise technology, data, operations, and risk leaders convening across 2 Days in Mumbai.
            </p>
            <div 
              className="group relative mt-6 rounded-[20px] overflow-hidden max-sm:max-w-md max-sm:mx-auto cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Duotone Color Overlay */}
              <div 
                className={`absolute inset-0 z-10 pointer-events-none mix-blend-color transition-colors duration-500 ease-out ${
                  isHovered ? "bg-[#C0F43C]/35" : "bg-[#00ceff]/20"
                }`} 
              />
              <img
                className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                src="/enterprise/images/networking/meet-leaders.webp"
                alt="Candid executive peer-to-peer roundtable discussions from prior World AI Show editions"
                loading="lazy"
                width={450}
                height={300}
              />
            </div>
          </div>

          {/* 4 Buying Unit Constituencies Grid */}
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            {buyingUnitConstituencies.map((item) => (
              <article
                key={item.title}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group flex flex-col justify-between min-h-[190px] p-6 rounded-[14px] border border-line bg-gradient-to-br from-[#00ceff]/8 to-[#c0f43c]/4 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:border-green/60 hover:shadow-[inset_0_0_28px_rgba(192,244,60,0.08),0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300"
              >
                <div>
                  <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-cyan mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-white text-[20px] font-extrabold leading-[1.25] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-muted text-[14.5px] leading-[1.55] m-0">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Industry Sectors Grid */}
        <div className="mt-14">
          <p className="text-center font-mono text-xs uppercase tracking-[2px] text-white/60 mb-5">
            Priority Enterprise Sectors Represented
          </p>
          <div className="grid grid-cols-4 gap-3.5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {industries.map(([item, icon]) => (
              <article
                key={item}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group flex items-center gap-3.5 p-[13px_14px] rounded-[8px] border border-line bg-gradient-to-br from-[#00ceff]/6 to-[#c0f43c]/3 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] select-none hover:-translate-y-0.5 hover:border-green/60 transition-all duration-300"
              >
                <span className="grid place-items-center w-10 h-10 shrink-0 border border-white/10 rounded-[8px] text-cyan bg-black/26 group-hover:border-green/30 transition-all duration-300">
                  <img
                    src={`/enterprise/icons/networking/${icon}`}
                    alt=""
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain group-hover:hue-rotate-[255deg] group-hover:brightness-125 transition-all duration-300"
                    aria-hidden="true"
                  />
                </span>
                <strong className="block text-white text-[13.5px] font-bold leading-[1.28]">
                  {item}
                </strong>
              </article>
            ))}
          </div>
        </div>

        {/* Roles slider marquee 1: C-Level */}
        <section className="mt-[58px] text-center" aria-labelledby="c-level-title">
          <h3 id="c-level-title" className="m-0 mb-4 text-white text-[24px] font-extrabold leading-none">
            C-level Executives
          </h3>
          <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="C-level Executives carousel">
            <div className="move-left flex w-max gap-7 px-7 pb-1.5 will-change-transform">
              {[...cLevelRoles, ...cLevelRoles, ...cLevelRoles].map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="flex-none min-w-[250px] p-[15px_24px] rounded-[9px] text-[#06111f] [color:#06111f!important] bg-[#C0F43C] text-center font-extrabold text-[14px]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Roles slider marquee 2: Senior Executives */}
        <section className="mt-8 text-center" aria-labelledby="senior-title">
          <h3 id="senior-title" className="m-0 mb-4 text-white text-[24px] font-extrabold leading-none">
            Enterprise Transformation &amp; Risk Leaders
          </h3>
          <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="Senior Executives carousel">
            <div className="move-right flex w-max gap-7 px-7 pb-1.5 will-change-transform">
              {[...seniorRoles, ...seniorRoles, ...seniorRoles].map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="flex-none min-w-[250px] p-[15px_24px] rounded-[9px] text-[#06111f] [color:#06111f!important] bg-cyan text-center font-extrabold text-[14px]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* S8 · How to attend — two doors */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-xs font-mono uppercase tracking-[2px] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse"></span>
              How To Attend — Two Doors
            </div>
            <h3 className="text-white font-[850] text-[clamp(30px,3.8vw,44px)] leading-[1.08] tracking-[-1.2px]">
              Structured access for <GradientText>enterprise buyers &amp; providers</GradientText>
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1: Delegate Pass */}
            <div className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-[#C0F43C]/35 bg-gradient-to-br from-[#C0F43C]/[0.09] via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C0F43C]/80 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_42px_rgba(192,244,60,0.14)]">
              {/* Top glowing accent line */}
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C0F43C]/50 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-[#C0F43C] group-hover:shadow-[0_0_16px_#C0F43C]" />
              {/* Ambient hover spotlight */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#C0F43C]/10 blur-[60px] opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
              {/* Watermark */}
              <span className="pointer-events-none select-none absolute top-5 right-7 font-mono font-black text-[54px] leading-none tracking-[-3px] text-white/[0.03] transition-colors duration-300 group-hover:text-[#C0F43C]/[0.09]">
                01
              </span>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C0F43C]/12 border border-[#C0F43C]/35 text-[#C0F43C] font-mono text-[11px] uppercase tracking-[1.8px] mb-4 transition-all duration-300 group-hover:bg-[#C0F43C]/20 group-hover:border-[#C0F43C]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0F43C] shadow-[0_0_8px_#C0F43C]" />
                  Door 01 · Enterprise Buyers
                </span>
                <h4 className="text-white font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#f5ffe0]">
                  Delegate Pass — complimentary, by invitation and qualification
                </h4>
                <p className="text-muted text-[16px] leading-[1.6] mb-6 transition-colors duration-300 group-hover:text-white/85">
                  Senior enterprise technology, data, operations, and risk leaders attend by invitation, subject to qualification based on an active mandate to deploy enterprise AI.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/enterprise/attend/delegate"
                  className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] transition-all duration-300 group-hover:bg-[#cdfb50] group-hover:shadow-[0_0_28px_rgba(192,244,60,0.45)] hover:scale-[1.02]"
                >
                  Apply for a Delegate Pass
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Door 2: Business Pass */}
            <div className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-cyan/35 bg-gradient-to-br from-cyan/[0.09] via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/80 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_42px_rgba(24,212,255,0.14)]">
              {/* Top glowing accent line */}
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-cyan group-hover:shadow-[0_0_16px_#18d4ff]" />
              {/* Ambient hover spotlight */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan/10 blur-[60px] opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
              {/* Watermark */}
              <span className="pointer-events-none select-none absolute top-5 right-7 font-mono font-black text-[54px] leading-none tracking-[-3px] text-white/[0.03] transition-colors duration-300 group-hover:text-cyan/[0.09]">
                02
              </span>

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan/12 border border-cyan/35 text-cyan font-mono text-[11px] uppercase tracking-[1.8px] mb-4 transition-all duration-300 group-hover:bg-cyan/20 group-hover:border-cyan/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_#18d4ff]" />
                  Door 02 · Solution Providers
                </span>
                <h4 className="text-white font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#e6fbff]">
                  Business Pass — commercial access
                </h4>
                <p className="text-muted text-[16px] leading-[1.6] mb-6 transition-colors duration-300 group-hover:text-white/85">
                  Paid access for technology solution providers, system integrators, consultancies, and practitioners outside the invitation criteria. Availability is strictly controlled.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/enterprise/attend"
                  className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-white border border-cyan/50 bg-cyan/10 transition-all duration-300 group-hover:bg-cyan group-hover:text-[#041022] group-hover:[color:#041022!important] group-hover:border-cyan group-hover:shadow-[0_0_28px_rgba(24,212,255,0.4)] hover:scale-[1.02]"
                >
                  Buy a Business Pass
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

