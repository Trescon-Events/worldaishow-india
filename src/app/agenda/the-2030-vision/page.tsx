import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaVision } from "../AgendaPage";

export const metadata: Metadata = {
  title: "AI ROI Clinic & India Series Trajectory | Agenda | World AI Show: The Enterprise Edition | Mumbai 2027",
  description: "Explore The AI ROI Clinic Framework (Scale, Redesign, or Stop) and the World AI Show India Series Trajectory from Edition 1 in Mumbai to the Q4 Series Finale.",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function VisionPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="The 2030 Vision" />
      <AgendaVision />
      <FooterSection />
    </main>
  );
}
