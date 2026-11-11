import type { Metadata } from "next";
import { BrandBookSpeakerPreviewClient } from "./BrandBookSpeakerPreviewClient";

export const metadata: Metadata = {
  title: "Speakers Preview (AI 2047 Brand Book V1.0) | World AI Show: The Enterprise Edition | Mumbai 2027",
  description:
    "Duplicated staging speakers directory preview implementing the official AI 2047 Brand Book V1.0 design system.",
  robots: { index: false, follow: false },
};

export default function BrandBookV1SpeakerPreviewPage() {
  return <BrandBookSpeakerPreviewClient />;
}
