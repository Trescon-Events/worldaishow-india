"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "", duration = 1500 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

const statsData = [
  { number: 300, suffix: "+", label: "Qualified CXOs" },
  { number: 45, suffix: "+", label: "Speakers & Panelists" },
  { number: 5, suffix: "", label: "Content Pillars" },
  { number: 2, suffix: " Days", label: "Executive Conference" },
  { number: 46, suffix: "", label: "Global Series Editions" },
];

export function AttendStats() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-9 overflow-x-auto pb-2 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {statsData.map((stat) => (
        <article
          className="min-h-[143px] p-6 text-center flex flex-col items-center justify-center border border-[#0069B8]/18 rounded-[16px] bg-white shadow-[0_10px_30px_rgba(8,18,30,0.06)] group hover:-translate-y-1 transition-all duration-300"
          key={stat.label}
        >
          <strong className="block text-[#0069B8] text-[34px] font-[850] leading-none">
            <Counter end={stat.number} suffix={stat.suffix} />
          </strong>
          <span className="block mt-[18px] text-[#334155] font-medium text-[15px] leading-snug">{stat.label}</span>
        </article>
      ))}
    </div>
  );
}
