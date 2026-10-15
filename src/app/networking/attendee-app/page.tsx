import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendeeAppContent } from "./AttendeeAppContent";

export const metadata: Metadata = {
  title: "Attendee App | Networking | World AI Show: The Enterprise Edition | Mumbai 2027",
  description: "Personalized 2-day agenda builder & digital business cards for World AI Show: The Enterprise Edition | Mumbai 2027.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function AttendeeAppPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Attendee APP" />
      <AttendeeAppContent />
      <FooterSection />
    </main>
  );
}
