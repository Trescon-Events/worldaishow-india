import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaLiveTimeline } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Full 2-Day Timeline | Agenda | World AI Show: The Enterprise Edition | Mumbai 2027",
  description: "Explore the 2-day schedule for Mumbai 2027: Day 1 (Tuesday 20 April 2027: Enterprise Execution) and Day 2 (Wednesday 21 April 2027: Strategy to Scale).",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function AgendaSessionsPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Agenda" />
      <AgendaLiveTimeline />
      <FooterSection />
    </main>
  );
}
