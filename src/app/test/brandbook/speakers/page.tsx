import type { Metadata } from "next";
import { BrandBookSpeakerPreviewClient } from "../../brandbook-speaker-preview/BrandBookSpeakerPreviewClient";

export const metadata: Metadata = {
  title: "Speakers (Brand Book V1.0 Preview) | World AI Show: The Enterprise Edition | Mumbai 2027",
  robots: { index: false, follow: false },
};

export default function BrandBookSpeakersStagingPage() {
  return <BrandBookSpeakerPreviewClient />;
}
