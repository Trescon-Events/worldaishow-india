"use client";

import { useEffect, useState } from "react";
import { GradientText } from "../components/Shared";
import archivedPartners from "../../data/konfhub-archive/entity-2-partners.json";

type SponsorLogo = {
  name: string;
  logo: string;
};

/* ── Past Sponsors from World AI Show, India ─────────────────── */
const INDIA_PAST_SPONSORS: SponsorLogo[] = [
  { name: "Google Cloud", logo: "/enterprise/images/sponsors/india-past/google-cloud.webp" },
  { name: "Dell Technologies & Intel", logo: "/enterprise/images/sponsors/india-past/Dell-Technologies-Intel.webp" },
  { name: "Hewlett Packard Enterprise", logo: "/enterprise/images/sponsors/india-past/hewlett-packard.webp" },
  { name: "HCLTech", logo: "/enterprise/images/sponsors/india-past/hcl.webp" },
  { name: "Happiest Minds", logo: "/enterprise/images/sponsors/india-past/happiest-minds.webp" },
  { name: "KPMG", logo: "/enterprise/images/sponsors/india-past/kpmg.webp" },
  { name: "SAP", logo: "/enterprise/images/sponsors/india-past/sap.webp" },
  { name: "Oracle", logo: "/enterprise/images/sponsors/india-past/oracle.webp" },
  { name: "Cisco", logo: "/enterprise/images/sponsors/india-past/cisco.webp" },
  { name: "Snowflake", logo: "/enterprise/images/sponsors/india-past/Snowflake.webp" },
  { name: "UiPath", logo: "/enterprise/images/sponsors/india-past/ui-path.webp" },
  { name: "Automation Anywhere", logo: "/enterprise/images/sponsors/india-past/automation-anywhere.webp" },
  { name: "AutomationEdge", logo: "/enterprise/images/sponsors/india-past/automation-edge.webp" },
  { name: "eClerx", logo: "/enterprise/images/sponsors/india-past/eclerx.webp" },
  { name: "Searce", logo: "/enterprise/images/sponsors/india-past/Searce.webp" },
  { name: "Soroco", logo: "/enterprise/images/sponsors/india-past/Soroco-Logo.webp" },
  { name: "Vernacular.ai", logo: "/enterprise/images/sponsors/india-past/vernacular-ai.webp" },
  { name: "AspireNxt", logo: "/enterprise/images/sponsors/india-past/AspireNxt.webp" },
  { name: "Data Semantics", logo: "/enterprise/images/sponsors/india-past/data-semantics.webp" },
  { name: "Dataiku", logo: "/enterprise/images/sponsors/india-past/DataIku.webp" },
  { name: "Denodo", logo: "/enterprise/images/sponsors/india-past/Denodo.webp" },
  { name: "DDN Storage", logo: "/enterprise/images/sponsors/india-past/ddn.webp" },
  { name: "ManageEngine", logo: "/enterprise/images/sponsors/india-past/manage-engine.webp" },
  { name: "VMware", logo: "/enterprise/images/sponsors/india-past/vmware.webp" },
  { name: "Check Point", logo: "/enterprise/images/sponsors/india-past/check-point.webp" },
  { name: "Darktrace", logo: "/enterprise/images/sponsors/india-past/darktrace.webp" },
  { name: "SAS", logo: "/enterprise/images/sponsors/india-past/sas.webp" },
  { name: "Genesys", logo: "/enterprise/images/sponsors/india-past/Genesys-Logo.webp" },
  { name: "Avaya", logo: "/enterprise/images/sponsors/india-past/avaya.webp" },
  { name: "Alteryx", logo: "/enterprise/images/sponsors/india-past/Alteryx.webp" },
  { name: "AntWorks", logo: "/enterprise/images/sponsors/india-past/Antworks.webp" },
  { name: "Amazon & Trianz", logo: "/enterprise/images/sponsors/india-past/amazon-trianz.webp" },
  { name: "Thales", logo: "/enterprise/images/sponsors/india-past/thales.webp" },
  { name: "Trend Micro", logo: "/enterprise/images/sponsors/india-past/trend-micro.webp" },
  { name: "SonicWall", logo: "/enterprise/images/sponsors/india-past/sonicwall.webp" },
  { name: "Xerox", logo: "/enterprise/images/sponsors/india-past/xerox.webp" },
];

const INDIA_GOVERNMENT_ASSOCIATIONS: SponsorLogo[] = [
  { name: "Ministry of Electronics & IT (MeitY)", logo: "/enterprise/images/sponsors/governments/meit.webp" },
  { name: "NITI Aayog", logo: "/enterprise/images/sponsors/governments/niti-aayog.webp" },
  { name: "Digital India", logo: "/enterprise/images/sponsors/governments/digital-india.webp" },
  { name: "National e-Governance Division (NeGD)", logo: "/enterprise/images/sponsors/governments/NeGD.webp" },
  { name: "Ministry of Road Transport & Highways", logo: "/enterprise/images/sponsors/governments/mrt-govt-of-india.webp" },
  { name: "Government of Maharashtra", logo: "/enterprise/images/sponsors/governments/govt-maharashtra.webp" },
  { name: "Government of Andhra Pradesh", logo: "/enterprise/images/sponsors/governments/govt-andhra-pradesh.webp" },
  { name: "Controller of Certifying Authorities (CCA)", logo: "/enterprise/images/sponsors/governments/CCA.webp" },
];

function LogoCard({ item }: { item: SponsorLogo }) {
  return (
    <div className="group relative overflow-hidden flex flex-col items-center justify-center border border-[#18d4ff]/20 rounded-[18px] bg-[#04080f]/55 p-3 hover:-translate-y-1.5 hover:border-[#C0F43C]/60 hover:shadow-[0_12px_30px_rgba(192,244,60,0.14)] transition-all duration-300 select-none w-full aspect-[1.75/1]">
      <div className="w-full h-full flex items-center justify-center bg-white rounded-[12px] p-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03)] group-hover:scale-[1.02] transition-all duration-300">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.logo}
          alt={item.name}
          className="object-contain max-w-full max-h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function SponsorsGrid() {
  const [activeTab, setActiveTab] = useState<"sponsors-exhibitors" | "associations-media">("sponsors-exhibitors");
  const [mediaPartners, setMediaPartners] = useState<SponsorLogo[]>([]);

  useEffect(() => {
    const rawPartners: any = archivedPartners;
    const extractedMedia: SponsorLogo[] = [];

    if (Array.isArray(rawPartners?.categorized)) {
      for (const cat of rawPartners.categorized) {
        const rawName = (cat.category_name || "").toLowerCase();
        if (rawName.includes("media") && Array.isArray(cat.entity)) {
          for (const e of cat.entity) {
            if (e.entity_name && e.image_url) {
              extractedMedia.push({
                name: e.entity_name,
                logo: e.image_url,
              });
            }
          }
        }
      }
    }
    setMediaPartners(extractedMedia);
  }, []);

  return (
    <section className="relative py-[92px] bg-[#020b1c]" id="sponsors">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Section intro */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Past Ecosystem · World AI Show India
          </span>
          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(36px,4.5vw,54px)] max-w-[800px] mx-auto">
            Past Sponsors &amp; <GradientText>Partners</GradientText>
          </h2>
        </div>

        {/* Secondary Navigation Tab Bar (2 tabs — 3D Experience removed per feedback) */}
        <div className="flex justify-center mb-14 max-sm:mb-10">
          <div className="flex flex-wrap justify-center p-1 gap-1 sm:gap-0 bg-[#050c1d]/90 border border-white/10 rounded-full max-sm:rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab("sponsors-exhibitors")}
              className={`flex-none px-8 py-3 max-sm:px-4 max-sm:py-2.5 rounded-full text-sm max-sm:text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                activeTab === "sponsors-exhibitors"
                  ? "bg-[#C0F43C] text-black shadow-[0_0_20px_rgba(192,244,60,0.2)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Past Sponsors &amp; Exhibitors
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("associations-media")}
              className={`flex-none px-8 py-3 max-sm:px-4 max-sm:py-2.5 rounded-full text-sm max-sm:text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                activeTab === "associations-media"
                  ? "bg-[#C0F43C] text-black shadow-[0_0_20px_rgba(192,244,60,0.2)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Past Government, Association &amp; Media Partners
            </button>
          </div>
        </div>

        {/* Tab 1: Past Sponsors from World AI Show, India */}
        {activeTab === "sponsors-exhibitors" && (
          <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-3 max-sm:grid-cols-2">
            {INDIA_PAST_SPONSORS.map((item) => (
              <LogoCard key={item.name} item={item} />
            ))}
          </div>
        )}

        {/* Tab 2: Past Government, Association & Media Partners */}
        {activeTab === "associations-media" && (
          <div className="space-y-14">
            <div>
              <h3 className="m-0 mb-6 text-white font-[850] text-[22px] flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C0F43C] shadow-[0_0_10px_#C0F43C]" />
                Government &amp; Institutional Partners (India)
              </h3>
              <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-3 max-sm:grid-cols-2">
                {INDIA_GOVERNMENT_ASSOCIATIONS.map((item) => (
                  <LogoCard key={item.name} item={item} />
                ))}
              </div>
            </div>

            {mediaPartners.length > 0 && (
              <div>
                <h3 className="m-0 mb-6 text-white font-[850] text-[22px] flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#18d4ff] shadow-[0_0_10px_#18d4ff]" />
                  Media Partners
                </h3>
                <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-3 max-sm:grid-cols-2">
                  {mediaPartners.map((item, idx) => (
                    <LogoCard key={`${item.name}-${idx}`} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
