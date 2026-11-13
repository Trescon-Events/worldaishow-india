"use client";

import { useEffect } from "react";

const WHITE_LOGO_SRC = "/mumbai/enterprise/images/test-brand/wais-26-enterprise-white-logo.png";
const DARK_LOGO_SRC = "/mumbai/enterprise/images/test-brand/wais-26-enterprise-dark-logo.png";

function applyFallbackOnError(img: HTMLImageElement, filename: string) {
  img.onerror = () => {
    if (img.dataset.logoFallbackApplied === "1") return;
    img.dataset.logoFallbackApplied = "1";
    img.src = `/images/test-brand/${filename}`;
  };
}

/**
 * AI 2047 Brand Book V1.0 — Logo Lockup Controller (Pages 10–17)
 * - Light Frosted Header -> Primary Dark Text Lockup (min-width >= 64px, zero effects)
 * - Midnight Core Hero & Footer -> Reverse White Text Lockup (min-width >= 64px, zero effects)
 */
export function BrandBookV1Logos() {
  useEffect(() => {
    const applyLogos = () => {
      const root = document.querySelector(".ai2047-brandbook-v1");
      if (!root) return;

      // 1. Sticky Header Logo -> Dark lockup on Cloud White / Frosted White nav bar
      const headerImgs = root.querySelectorAll<HTMLImageElement>(
        'header img[src*="wais-27-enterprise"], header img[data-brandbook-logo="header"]'
      );
      headerImgs.forEach((img) => {
        img.dataset.brandbookLogo = "header";
        applyFallbackOnError(img, "wais-26-enterprise-dark-logo.png");
        if (!img.src.includes("wais-26-enterprise-dark-logo.png")) {
          img.src = DARK_LOGO_SRC;
        }
      });

      // 2. Hero Banner Lockup Logo -> Reverse White lockup over Midnight Core tonal video overlay
      const heroImgs = root.querySelectorAll<HTMLImageElement>(
        '#home img[src*="wais-27-enterprise"], #home img[data-brandbook-logo="hero"]'
      );
      heroImgs.forEach((img) => {
        img.dataset.brandbookLogo = "hero";
        applyFallbackOnError(img, "wais-26-enterprise-white-logo.png");
        if (!img.src.includes("wais-26-enterprise-white-logo.png")) {
          img.src = WHITE_LOGO_SRC;
        }
      });

      // 3. Footer Brand Logo -> Reverse White lockup on Midnight Core (#08121E) Footer
      const footerImgs = root.querySelectorAll<HTMLImageElement>(
        '#footer img[src*="wais-27-enterprise"], #footer img[data-brandbook-logo="footer"]'
      );
      footerImgs.forEach((img) => {
        img.dataset.brandbookLogo = "footer";
        applyFallbackOnError(img, "wais-26-enterprise-white-logo.png");
        if (!img.src.includes("wais-26-enterprise-white-logo.png")) {
          img.src = WHITE_LOGO_SRC;
        }
      });

      // 4. Floating Scroll to Top Button -> Pulse Orange (#F15928) + Pure White Icon
      const scrollBtn = document.querySelector<HTMLButtonElement>(
        'button[aria-label*="Scroll to top"], button.fixed.rounded-full'
      );
      if (scrollBtn) {
        scrollBtn.style.setProperty("background-color", "#F15928", "important");
        scrollBtn.style.setProperty("color", "#FFFFFF", "important");
        scrollBtn.style.setProperty("box-shadow", "0 8px 24px rgba(241, 89, 40, 0.45)", "important");
        const svg = scrollBtn.querySelector("svg");
        if (svg) {
          svg.style.setProperty("color", "#FFFFFF", "important");
          const paths = svg.querySelectorAll("path");
          paths.forEach((p) => p.style.setProperty("stroke", "#FFFFFF", "important"));
        }
      }
    };

    document.body.classList.add("brandbook-theme");
    applyLogos();

    const root = document.querySelector(".ai2047-brandbook-v1");
    if (!root) return () => document.body.classList.remove("brandbook-theme");

    const observer = new MutationObserver(() => applyLogos());
    observer.observe(root, { childList: true, subtree: true });
    return () => {
      document.body.classList.remove("brandbook-theme");
      observer.disconnect();
    };
  }, []);

  return null;
}
