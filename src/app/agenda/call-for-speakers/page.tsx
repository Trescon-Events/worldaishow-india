import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaCallForSpeakers } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Call for Enterprise Speakers | Agenda | World AI Show: The Enterprise Edition | Mumbai 2027",
  description: "Seeking CIOs, CAIOs, CTOs, and Transformation Leaders with live production evidence to take the stage at World AI Show: The Enterprise Edition | Mumbai 2027.",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function CallForSpeakersPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Call for Speakers" />
      <AgendaCallForSpeakers />
      <FooterSection />
    </main>
  );
}
