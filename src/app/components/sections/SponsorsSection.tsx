"use client";

import { GradientText } from "../Shared";

// Sponsor Row 1 Logos (Past World AI Show India Sponsors)
const sponsorRow1 = [
  { path: "/mumbai/enterprise/images/sponsors/india-past/google-cloud.webp", alt: "Google Cloud" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/Dell-Technologies-Intel.webp", alt: "Dell Technologies & Intel" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/hewlett-packard.webp", alt: "Hewlett Packard Enterprise" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/hcl.webp", alt: "HCLTech" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/happiest-minds.webp", alt: "Happiest Minds" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/kpmg.webp", alt: "KPMG" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/sap.webp", alt: "SAP" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/oracle.webp", alt: "Oracle" },
];

// Sponsor Row 2 Logos (Past World AI Show India Sponsors)
const sponsorRow2 = [
  { path: "/mumbai/enterprise/images/sponsors/india-past/cisco.webp", alt: "Cisco" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/Snowflake.webp", alt: "Snowflake" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/ui-path.webp", alt: "UiPath" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/automation-anywhere.webp", alt: "Automation Anywhere" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/eclerx.webp", alt: "eClerx" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/Searce.webp", alt: "Searce" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/vernacular-ai.webp", alt: "Vernacular.ai" },
  { path: "/mumbai/enterprise/images/sponsors/india-past/Denodo.webp", alt: "Denodo" },
];

// Strategic & Association Partners Logos (Path: association subfolder)
const partnerLogos = [
  "/mumbai/enterprise/images/sponsors/association/starfindo.webp",
  "/mumbai/enterprise/images/sponsors/association/kumpul.webp",
  "/mumbai/enterprise/images/sponsors/association/forums.webp",
  "/mumbai/enterprise/images/sponsors/association/ddas.webp",
  "/mumbai/enterprise/images/sponsors/association/belux.webp",
  "/mumbai/enterprise/images/sponsors/association/lafrench.webp",
];

// Governments & Associations Who Have Worked With Us In The Past (matching worldaishow.com)
const governmentLogos = [
  { path: "/mumbai/enterprise/images/sponsors/governments/meit.webp", alt: "Ministry of Electronics and Information Technology, Government of India" },
  { path: "/mumbai/enterprise/images/sponsors/governments/mrt-govt-of-india.webp", alt: "Ministry of Road Transport & Highways, Government of India" },
  { path: "/mumbai/enterprise/images/sponsors/governments/niti-aayog.webp", alt: "NITI Aayog" },
  { path: "/mumbai/enterprise/images/sponsors/governments/NeGD.webp", alt: "National e-Governance Division (NeGD)" },
  { path: "/mumbai/enterprise/images/sponsors/governments/digital-india.webp", alt: "Digital India" },
  { path: "/mumbai/enterprise/images/sponsors/governments/govt-maharashtra.webp", alt: "Government of Maharashtra" },
  { path: "/mumbai/enterprise/images/sponsors/governments/govt-andhra-pradesh.webp", alt: "Government of Andhra Pradesh" },
  { path: "/mumbai/enterprise/images/sponsors/governments/dubai-police.webp", alt: "Dubai Police" },
  { path: "/mumbai/enterprise/images/sponsors/governments/difc.webp", alt: "DIFC" },
  { path: "/mumbai/enterprise/images/sponsors/governments/dubai-economy.webp", alt: "Dubai Economy" },
  { path: "/mumbai/enterprise/images/sponsors/governments/supreme-council.webp", alt: "Supreme Council of Energy" },
  { path: "/mumbai/enterprise/images/sponsors/governments/ministry-of-finance.webp", alt: "Ministry of Finance" },
  { path: "/mumbai/enterprise/images/sponsors/governments/petroleum-development-oman.webp", alt: "Petroleum Development Oman" },
  { path: "/mumbai/enterprise/images/sponsors/governments/oman-chmaber-of-commerce.webp", alt: "Oman Chamber of Commerce and Industry" },
  { path: "/mumbai/enterprise/images/sponsors/governments/oman-banks-association.webp", alt: "Oman Banks Association" },
  { path: "/mumbai/enterprise/images/sponsors/governments/qfc.webp", alt: "Qatar Financial Centre" },
];

export function SponsorsSection() {
  return (
    <section className="relative py-[100px] pb-0 bg-[#030b19] overflow-hidden max-sm:py-[72px] max-sm:pb-0" id="partners">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.06] tracking-[-2px] text-[clamp(36px,4.6vw,56px)] max-w-[920px] mx-auto">
          Your buyers are redesigning workflows now, <GradientText>not after the pilot</GradientText>
        </h2>

        <div className="mt-8 flex justify-center">
          <a
            href="/mumbai/enterprise/attend/sponsor"
            className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] transition-all duration-200"
          >
            Explore sponsorship <span>→</span>
          </a>
        </div>

        <p className="mt-14 mb-0 text-center font-mono text-xs uppercase tracking-[2px] text-white/55">
          Past Series Partners &amp; Sponsors
        </p>
      </div>

      {/* Two offset scrolling sponsor rows */}
      <div className="flex flex-col gap-5 mt-6 w-full overflow-hidden">
        {/* Row 1: MDEC, MIDA, Datadog, Quantexa, Denodo (slides right-to-left) */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-marquee-rail flex gap-5 will-change-transform">
            {[...sponsorRow1, ...sponsorRow1, ...sponsorRow1].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Magure, Alibaba-cloud, ey, avatai, darwin (slides left-to-right) */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners-reverse flex gap-5 will-change-transform">
            {[...sponsorRow2, ...sponsorRow2, ...sponsorRow2].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Governments and Associations Who Have Worked With Us In The Past (4x4 Grid from worldaishow.com) */}
      <div className="mt-20 py-16 bg-white text-center">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
          <h3 data-aos="fade-up" className="m-0 mb-10 text-[#151923] font-[850] text-[clamp(22px,2.8vw,32px)] leading-[1.2] tracking-[-0.5px] uppercase max-w-[820px] mx-auto">
            Governments and Associations Who Have Worked With Us In The Past
          </h3>

          <div className="grid grid-cols-4 border border-slate-200 rounded-[16px] overflow-hidden max-md:grid-cols-2">
            {governmentLogos.map((logo, idx) => (
              <div
                key={logo.alt}
                data-aos="fade-up"
                data-aos-delay={String((idx % 4) * 90)}
                className="flex items-center justify-center h-[126px] p-5 border-r border-b border-slate-200 bg-white hover:bg-slate-50 transition-colors duration-200"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[165px] max-h-[82px] object-contain"
                  loading="lazy"
                  width={165}
                  height={82}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners single row horizontal infinite marquee slider with hover pause */}
      <div className="p-[28px_0_34px] bg-slate-50 border-t border-slate-200 text-center overflow-hidden">
        <p className="m-0 mb-[26px] text-[18px] font-bold text-[#151923] uppercase tracking-[1.5px] select-none">
          Strategic &amp; Media Partners
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners flex items-center gap-[64px]">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-none w-[140px] h-[52px] flex items-center justify-center select-none"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain filter hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={52}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
