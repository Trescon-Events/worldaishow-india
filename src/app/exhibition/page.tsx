import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { PartnersHero } from "../partners/PartnersHero";
import { SponsorsGrid } from "../partners/SponsorsGrid";
import { PartnerShowcase } from "../partners/PartnerShowcase";
import { FooterSection } from "../components/sections/FooterSection";
import { GradientText } from "../components/Shared";

export const metadata: Metadata = {
  title: "Exhibition & 3D Floorplan Hub | World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "Explore the WebGL-rendered interactive 3D floorplan and 360° virtual tour for World AI Show: The Enterprise Edition | Mumbai 2027: 12 sqm Prime Island, 9 sqm Standard Booths, and 2 Parallel Closed-Door Boardrooms.",
};

const footprints = [
  {
    size: "12 sqm",
    title: "12 sqm Prime Island (Lead Partner)",
    desc: "Exclusive 1-position Lead Partner island showcase paired with a 30-Min Keynote, 1 Panel Seat, and a CXO Boardroom.",
  },
  {
    size: "9 sqm",
    title: "9 sqm Standard Booth (Platinum / Gold)",
    desc: "Standardized 9 sqm executive demonstration space paired with a 30-Minute Standalone Stage Thought Leadership Session.",
  },
  {
    size: "9 sqm",
    title: "9 sqm Standard Booth (Silver / Bronze / Exhibitor)",
    desc: "Turnkey 9 sqm standard exhibition space designed for live enterprise architecture demonstrations and buyer engagement.",
  },
  {
    size: "Boardrooms",
    title: "2 Parallel Closed-Door Boardrooms (Day 1)",
    desc: "Chatham House Rule executive boardrooms hosting 15 pre-qualified CXOs per room (11:30–13:00 and 15:30–17:00).",
  },
];

export default function ExhibitionPage() {
  return (
    <main className="page-exhibition relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Partner" />

      <PartnersHero />

      {/* Section 11 · Standardized Booth Footprints & 360° Nodes */}
      <section className="relative py-16 bg-[#020b1c] border-y border-white/10">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center mb-3 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
              Exhibition &amp; 3D Floorplan Hub · Cloudflare R2 WebGL Model
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(30px,4vw,46px)] m-0">
              Standardized Booth <GradientText>Footprints &amp; Spaces</GradientText>
            </h2>
            <p className="mt-3 text-white/65 text-[16px] max-w-[680px] mx-auto">
              360° Panorama Nodes: Main Plenary Stage · Exhibition Arena · VIP Boardroom Lounge.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {footprints.map((fp) => (
              <article
                key={fp.title}
                className="p-6 rounded-[18px] border border-white/12 bg-[#041022]/85 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C0F43C]/15 border border-[#C0F43C]/40 text-[#C0F43C] font-mono text-[11px] uppercase tracking-[1.5px] mb-3">
                    {fp.size}
                  </span>
                  <h3 className="text-white font-extrabold text-[18px] leading-snug mb-2">
                    {fp.title}
                  </h3>
                  <p className="text-white/65 text-[14px] leading-relaxed m-0">
                    {fp.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SponsorsGrid />
      <PartnerShowcase />
      <FooterSection />
    </main>
  );
}
