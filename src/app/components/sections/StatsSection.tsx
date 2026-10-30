"use client";

import { useEffect, useState, useRef } from "react";
import { GradientText } from "../Shared";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 1500 }: CounterProps) {
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
  {
    icon: "/mumbai/enterprise/icons/stats/1.svg",
    number: 300,
    suffix: "+",
    label: "Qualified CXOs",
    index: "01",
  },
  {
    icon: "/mumbai/enterprise/icons/stats/2.svg",
    number: 45,
    suffix: "+",
    label: "Speakers & Panelists",
    index: "02",
  },
  {
    icon: "/mumbai/enterprise/icons/stats/5.svg",
    number: 5,
    suffix: "",
    label: "Content Pillars",
    index: "03",
  },
  {
    icon: "/mumbai/enterprise/icons/stats/3.svg",
    number: 2,
    suffix: " Days",
    label: "Executive Conference",
    index: "04",
  },
];

const ourReachStats = [
  { end: 16, suffix: "M+", label: "General Media" },
  { end: 19, suffix: "M+", label: "Targeted Media" },
  { end: 220, suffix: "K+", label: "Twitter" },
  { end: 170, suffix: "K+", label: "LinkedIn" },
  { end: 150, suffix: "K+", label: "Direct Email" },
];

const seriesHighlightsRow1 = [
  { end: 46, suffix: "", label: "Global Editions" },
  { end: 42, suffix: "K+", label: "C-Level Attendees" },
  { end: 2600, suffix: "+", label: "Speakers" },
  { end: 93, suffix: "%", label: "Decision Makers" },
  { end: 51, suffix: "+", label: "Countries Represented" },
];

const seriesHighlightsRow2 = [
  { end: 1650, suffix: "+", label: "Exhibitors" },
  { end: 830, suffix: "+", label: "Media Partners" },
];

/* ── Hover Particles Canvas Animation ─────────────────────── */
function HoverParticles({ isHovered }: { isHovered: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resizeCanvas();

    const colors = ["#00ceff", "#c0f43c", "#9a6cff"];
    const initParticles = () => {
      particles = [];
      const particleCount = 22;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height + canvas.height / 3,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -Math.random() * 0.6 - 0.2,
          size: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.45 + 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    if (isHovered) {
      initParticles();
    }

    const animate = () => {
      if (!isHovered) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.003;

        if (p.y < 0 || p.alpha <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height;
          p.vx = (Math.random() - 0.5) * 0.4;
          p.vy = -Math.random() * 0.6 - 0.2;
          p.size = Math.random() * 1.8 + 0.8;
          p.alpha = Math.random() * 0.45 + 0.15;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    if (isHovered) {
      animate();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isHovered]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]"
    />
  );
}

/* ── Interactive Stats Card (Component C1) ───────────────── */
function StatCard({ stat, idx }: { stat: (typeof statsData)[0]; idx: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      data-aos="fade-up"
      data-aos-delay={String(idx * 100)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[194px] p-6 border-0 border-t border-[#293442]/55 rounded-[15px] bg-gradient-to-br from-[#00ceff]/20 to-[#c0f43c]/9 shadow-[0_20px_60px_rgba(0,0,0,0.22),inset_0_0_28px_rgba(65,220,255,0.06)] backdrop-blur-md group hover:-translate-y-1 transition-all duration-300 border-t-[#293442] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <HoverParticles isHovered={isHovered} />

      <div className="relative z-10 grid place-items-center w-10 h-10 mx-auto rounded-full bg-black/26 text-cyan shadow-[inset_0_0_12px_rgba(24,212,255,0.1)] group-hover:scale-105 transition-transform duration-200">
        <img
          src={stat.icon}
          alt=""
          width={22}
          height={22}
          className="w-[22px] h-[22px] object-contain"
          aria-hidden="true"
        />
      </div>

      <span className="absolute top-[18px] right-[20px] text-white/45 font-mono text-[11px] tracking-wider select-none z-10">
        {stat.index}
      </span>

      <strong className="block mt-[22px] text-[#C0F43C] font-[850] text-[34px] leading-none tracking-tight relative z-10 text-center">
        <Counter end={stat.number} suffix={stat.suffix} />
      </strong>

      <p className="mt-3 text-white/80 font-mono text-[13px] uppercase tracking-[1px] leading-relaxed font-semibold relative z-10 text-center">
        {stat.label}
      </p>
    </article>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-[88px] -mt-[30px] z-10 bg-[#020c21] overflow-hidden max-sm:py-[64px] max-sm:mt-0" id="attend">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Title Heading */}
        <h2 data-aos="fade-up" className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(38px,4.8vw,56px)]">
          <GradientText>The Power</GradientText> Behind the <GradientText>Room</GradientText>
        </h2>

        {/* Stats Grid Layout (Four across desktop, two across mobile per C1) */}
        <div className="grid grid-cols-4 gap-4 mt-12 pb-1.5 max-[980px]:grid-cols-2 max-sm:grid-cols-2 max-sm:mt-8">
          {statsData.map((stat, idx) => (
            <StatCard key={stat.index} stat={stat} idx={idx} />
          ))}
        </div>

        {/* OUR REACH & SERIES HIGHLIGHTS (Moved right after The Power Behind the Room) */}
        <div className="mt-16 p-9 sm:p-11 rounded-[28px] border border-white/10 bg-gradient-to-b from-[#061428]/90 via-[#040d1d]/95 to-[#030915]/95 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
          {/* OUR REACH */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-center font-[850] text-white text-[clamp(26px,3.4vw,38px)] tracking-[-1px] uppercase mb-8">
              Our <GradientText>Reach</GradientText>
            </h3>

            <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2 text-center">
              {ourReachStats.map((item, idx) => (
                <div
                  key={item.label}
                  data-aos="fade-up"
                  data-aos-delay={String((idx % 5) * 90)}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-[#18d4ff]/45 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <strong className="block text-white font-[850] text-[clamp(28px,3.2vw,38px)] leading-none mb-2">
                    <Counter end={item.end} suffix={item.suffix} />
                  </strong>
                  <span className="block text-white/70 font-mono text-[11.5px] uppercase tracking-[1.4px] font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-10" />

          {/* SERIES HIGHLIGHTS */}
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-center font-[850] text-white text-[clamp(26px,3.4vw,38px)] tracking-[-1px] uppercase mb-8">
              Series <GradientText>Highlights</GradientText>
            </h3>

            <div className="grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2">
              {seriesHighlightsRow1.map((item, idx) => (
                <div
                  key={item.label}
                  data-aos="fade-up"
                  data-aos-delay={String((idx % 5) * 90)}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-[#C0F43C]/45 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <strong className="block text-[#C0F43C] font-[850] text-[clamp(28px,3.2vw,38px)] leading-none mb-2">
                    <Counter end={item.end} suffix={item.suffix} />
                  </strong>
                  <span className="block text-white/70 font-mono text-[11.5px] uppercase tracking-[1.4px] font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-[440px] mx-auto mt-4">
              {seriesHighlightsRow2.map((item, idx) => (
                <div
                  key={item.label}
                  data-aos={idx === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay="100"
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.025] hover:border-[#C0F43C]/45 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <strong className="block text-[#C0F43C] font-[850] text-[clamp(28px,3.2vw,38px)] leading-none mb-2">
                    <Counter end={item.end} suffix={item.suffix} />
                  </strong>
                  <span className="block text-white/70 font-mono text-[11.5px] uppercase tracking-[1.4px] font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
