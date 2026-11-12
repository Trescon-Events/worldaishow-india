import type { ReactNode } from "react";
import { Ai2047BrandBookV1Styles } from "./Ai2047BrandBookV1System";
import { BrandBookV1Logos } from "./BrandBookV1Logos";

export function BrandBookV1PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="ai2047-brandbook-v1 ai2047-brandbook-inner">
      <Ai2047BrandBookV1Styles />
      <BrandBookV1Logos />
      {children}
    </div>
  );
}
