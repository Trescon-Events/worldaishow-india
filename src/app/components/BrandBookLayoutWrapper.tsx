"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Ai2047BrandBookV1Styles } from "../test/_design-system/Ai2047BrandBookV1System";
import { BrandBookV1Logos } from "../test/_design-system/BrandBookV1Logos";

export function BrandBookLayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname() || "";
  const cleanPath = pathname
    .replace(/^\/mumbai\/enterprise/, "")
    .replace(/\/$/, "");

  const isHomePage =
    cleanPath === "" ||
    cleanPath === "/home" ||
    cleanPath === "/test/brandbook-preview" ||
    cleanPath === "/home-demo";

  const innerClass = isHomePage ? "" : "ai2047-brandbook-inner";

  return (
    <div className={`ai2047-brandbook-v1 ${innerClass}`.trim()}>
      <Ai2047BrandBookV1Styles />
      <BrandBookV1Logos />
      {children}
    </div>
  );
}
