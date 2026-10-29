"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -48px 0px",
      }
    );

    const registerAOS = (el: HTMLElement, type: string, delay = 0) => {
      if (!el.hasAttribute("data-aos")) {
        el.setAttribute("data-aos", type);
      }
      if (delay > 0 && !el.hasAttribute("data-aos-delay")) {
        el.setAttribute("data-aos-delay", String(delay));
      }
      el.classList.add("aos-init");

      // Immediately animate elements already visible above the fold
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
        requestAnimationFrame(() => {
          el.classList.add("aos-animate");
        });
      }

      if (!observed.has(el)) {
        observed.add(el);
        observer.observe(el);
      }
    };

    const scanAndBind = () => {
      // 1. Bind all explicit [data-aos] elements
      document.querySelectorAll<HTMLElement>("[data-aos]").forEach((el) => {
        const delayAttr = el.getAttribute("data-aos-delay");
        registerAOS(
          el,
          el.getAttribute("data-aos") || "fade-up",
          delayAttr ? parseInt(delayAttr, 10) : 0
        );
      });

      // 2. Auto-bind sections across all pages for consistent fade-up / fade-right / fade-left
      const sections = document.querySelectorAll<HTMLElement>(
        "main section, footer#footer"
      );

      sections.forEach((section, secIndex) => {
        // Skip first hero section wrapper so hero video/bg doesn't shift
        const isHero =
          secIndex === 0 &&
          (section.id === "home" ||
            section.id === "overview" ||
            section.classList.contains("hero-bg"));

        if (isHero) {
          const heroH1 = section.querySelector<HTMLElement>("h1");
          if (heroH1 && !heroH1.closest("[data-aos]")) {
            registerAOS(heroH1, "fade-up", 50);
          }
          return;
        }

        // Section headings -> fade-up
        section
          .querySelectorAll<HTMLElement>("h1, h2, h3")
          .forEach((heading) => {
            if (!heading.closest("[data-aos]")) {
              registerAOS(heading, "fade-up", 0);
            }
          });

        // 2-column split layouts -> left column fade-right, right column fade-left
        section.querySelectorAll<HTMLElement>("div").forEach((grid) => {
          const cls = grid.className || "";
          const isTwoCol =
            /\bgrid-cols-2\b/.test(cls) ||
            /grid-cols-\[[^\]]+_[^\]]+\]/.test(cls);

          if (isTwoCol && grid.children.length === 2) {
            const left = grid.children[0] as HTMLElement;
            const right = grid.children[1] as HTMLElement;
            if (left && !left.hasAttribute("data-aos")) {
              registerAOS(left, "fade-right", 50);
            }
            if (right && !right.hasAttribute("data-aos")) {
              registerAOS(right, "fade-left", 150);
            }
          }
        });

        // Cards / articles -> staggered fade-up
        const articles = section.querySelectorAll<HTMLElement>("article");
        articles.forEach((card, idx) => {
          if (!card.hasAttribute("data-aos")) {
            registerAOS(card, "fade-up", (idx % 4) * 90);
          }
        });
      });
    };

    scanAndBind();

    const mutationObserver = new MutationObserver(() => {
      scanAndBind();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
