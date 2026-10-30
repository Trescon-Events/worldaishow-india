import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AIMatchmakingContent } from "./AIMatchmakingContent";

export const metadata: Metadata = {
  title: "AI Matchmaking | Networking | World AI Show: The Enterprise Edition | Mumbai 2027",
  description: "Algorithmic pre-scheduled 20-min 1-on-1 meetings at World AI Show: The Enterprise Edition | Mumbai 2027.",
};

const subNav = ["Overview", "AI Matchmaking", "Photo Gallery"];

export default function AIMatchmakingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="AI Matchmaking" />
      <AIMatchmakingContent />
      <FooterSection />
    </main>
  );
}
