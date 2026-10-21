import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendSponsorSection } from "../page";

export const metadata: Metadata = {
  title: "Commercial Packages & Booth Standards | Attend | World AI Show: The Enterprise Edition | Mumbai 2027",
  description: "Explore commercial partnerships for Mumbai 2027: 30-minute standalone stage sessions, standardized 9 sqm and 12 sqm booths, and closed-door CXO boardrooms.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function SponsorPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Sponsor" />
      <AttendSponsorSection />
      <FooterSection />
    </main>
  );
}
