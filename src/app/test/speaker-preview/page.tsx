import type { Metadata } from "next";
import { SpeakerPreviewClient } from "./SpeakerPreviewClient";

export const metadata: Metadata = {
  title: "Speakers Preview (New Color Palette) | World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "Isolated staging speakers page preview using the exact live speakers page design with the new 80/15/05 Sovereign Blue (#0069B8), Signal Teal (#009EAD), and Pulse Orange (#F15928) color palette.",
  robots: { index: false, follow: false },
};

export default function StagingSpeakerPreviewPage() {
  return <SpeakerPreviewClient />;
}
