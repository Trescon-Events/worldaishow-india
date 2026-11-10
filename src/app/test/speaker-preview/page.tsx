import type { Metadata } from "next";
import { SpeakerPreviewClient } from "./SpeakerPreviewClient";

export const metadata: Metadata = {
  title: "AI Mumbai | AI 2047 — Dummy Speaker Template Preview (Sandbox)",
  description:
    "Isolated dummy speaker page preview (Concept 2 — Neural Data Flow) for AI Mumbai (AI 2047 Initiative).",
  robots: { index: false, follow: false },
};

export default function StagingSpeakerPreviewPage() {
  return <SpeakerPreviewClient />;
}
