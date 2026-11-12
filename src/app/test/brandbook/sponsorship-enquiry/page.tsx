import type { Metadata } from "next";
import LivePage from "../../../sponsorship-enquiry/page";
import { BrandBookV1PageShell } from "../../_design-system/BrandBookV1PageShell";

export const metadata: Metadata = {
  title: "Sponsorship Enquiry (Brand Book V1.0 Preview) | World AI Show: The Enterprise Edition | Mumbai 2027",
  robots: { index: false, follow: false },
};

export default function BrandBookStagingPage() {
  return (
    <BrandBookV1PageShell>
      <LivePage />
    </BrandBookV1PageShell>
  );
}
