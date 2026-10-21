"use client";

import { useEffect, useRef } from "react";
import { Button, GradientText } from "../Shared";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const mouse = {
      x: width * 0.5,
      y: height * 0.5,
      targetX: width * 0.5,
      targetY: height * 0.5,
    };

    function resize() {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    // Embers floating upward from the horizon
    const embers = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * width,
      y: height * 0.4 + Math.random() * (height * 0.6),
      radius: Math.random() * 1.8 + 0.6,
      vy: -(Math.random() * 0.4 + 0.15),
      vx: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.6 + 0.2,
      isAccent: Math.random() > 0.5,
    }));

    let time = 0;

    function render() {
      if (!ctx) return;
      time += 0.015;

      // Smooth mouse tracking
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const horizonY = height * 0.88;

      // 1. Cyan Horizon Glow (Left anchor)
      const cyanX = width * 0.28 + (mouse.x - width * 0.5) * 0.04;
      const cyanGrad = ctx.createRadialGradient(
        cyanX,
        horizonY,
        20,
        cyanX,
        horizonY,
        width * 0.42
      );
      cyanGrad.addColorStop(0, "rgba(2, 132, 199, 0.45)");
      cyanGrad.addColorStop(0.45, "rgba(14, 116, 144, 0.18)");
      cyanGrad.addColorStop(1, "rgba(5, 8, 17, 0)");

      ctx.fillStyle = cyanGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Secondary Horizon Glow (Right anchor)
      const accentX = width * 0.72 + (mouse.x - width * 0.5) * 0.04;
      const accentGrad = ctx.createRadialGradient(
        accentX,
        horizonY,
        20,
        accentX,
        horizonY,
        width * 0.42
      );
      accentGrad.addColorStop(0, "rgba(192, 244, 60, 0.16)");
      accentGrad.addColorStop(0.45, "rgba(24, 212, 255, 0.06)");
      accentGrad.addColorStop(1, "rgba(5, 8, 17, 0)");

      ctx.fillStyle = accentGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. Interactive Mouse Spotlight
      if (mouse.x > 0 && mouse.y > 0 && mouse.x < width && mouse.y < height) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          280
        );
        mouseGlow.addColorStop(0, "rgba(56, 189, 248, 0.12)");
        mouseGlow.addColorStop(0.4, "rgba(192, 244, 60, 0.05)");
        mouseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 4. Horizon Stage Curved Rim Line
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(
        width * 0.5,
        height * 0.98,
        width * 0.7,
        height * 0.18,
        0,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = "rgba(56, 189, 248, 0.1)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // 5. Floating Interactive Embers
      embers.forEach((ember) => {
        ember.y += ember.vy;
        ember.x += ember.vx;

        if (ember.y < height * 0.2) {
          ember.y = height * 0.95;
          ember.x = Math.random() * width;
        }

        // Gentle mouse deflection
        const dx = mouse.x - ember.x;
        const dy = mouse.y - ember.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 120 && dist > 0) {
          ember.x -= (dx / dist) * 0.8;
          ember.y -= (dy / dist) * 0.8;
        }

        const pulse = ember.alpha * (0.7 + 0.3 * Math.sin(time * 3 + ember.x));

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.radius, 0, Math.PI * 2);
        ctx.fillStyle = ember.isAccent
          ? `rgba(192, 244, 60, ${pulse})`
          : `rgba(56, 189, 248, ${pulse})`;

        ctx.shadowBlur = 10;
        ctx.shadowColor = ember.isAccent ? "#C0F43C" : "#38bdf8";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      className="relative min-h-[820px] -mt-[102px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[760px] max-sm:-mt-[71px] max-sm:min-h-[720px]"
      style={{
        background: "radial-gradient(circle at 50% 20%, #0a1022 0%, #050811 75%)",
      }}
      id="home"
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 45%, black 20%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 45%, black 20%, transparent 85%)",
        }}
        aria-hidden="true"
      />

      {/* Interactive Horizon Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 pt-[220px] lg:pt-[240px] pb-16 max-sm:pt-[175px] max-sm:pb-12 max-sm:px-4 flex flex-col items-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#C0F43C]/45 bg-[#040D1F]/85 text-[#C0F43C] text-[13px] font-mono uppercase tracking-[2.4px] font-extrabold shadow-[0_0_24px_rgba(192,244,60,0.18)] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C0F43C] animate-pulse" />
          Now in India · The Enterprise Edition
        </div>

        {/* Event Lockup Sub-label */}
        <p className="text-white/85 font-mono text-[13px] uppercase tracking-[2px] font-semibold mb-4">
          World AI Show: The Enterprise Edition | Mumbai 2027
        </p>

        {/* Hero Title (82px, 85px line-height, -2px tracking, 850 weight) */}
        <h1 className="max-w-[1120px] mx-auto text-white font-[850] leading-[1.04] xl:leading-[85px] tracking-[-2px] text-[clamp(38px,5.8vw,82px)] xl:text-[82px] text-center mb-6">
          Where AI becomes the <GradientText>operating model.</GradientText>
        </h1>

        {/* Standfirst (20px, 33px line-height, 0 tracking, 400 weight, #CBD5E1) */}
        <p className="max-w-[860px] mx-auto text-[#CBD5E1] text-[clamp(15px,1.6vw,20px)] xl:text-[20px] font-normal leading-relaxed xl:leading-[33px] tracking-normal text-center mb-8">
          The premier cross-functional executive conference addressing the architecture, systems integration, agentic governance, and verifiable ROI of enterprise AI.
        </p>

        <div className="w-full max-w-[780px] border-t border-white/20 opacity-60 mt-1" />

        {/* Event Meta Footer */}
        <div className="grid grid-cols-[max-content_max-content_max-content] justify-center items-center gap-6 w-full max-w-[760px] mx-auto mt-7 text-center max-[980px]:grid-cols-1 max-sm:gap-3 max-sm:mt-5">
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              20–<GradientText>21</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              APRIL 2027
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              Mumbai, <GradientText>India</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EDITION 1 · INDIA SERIES
            </span>
          </div>

          {/* Column 3: Duration */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              2 <GradientText>Days</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EXECUTIVE CONFERENCE
            </span>
          </div>
        </div>

        {/* Hero CTA Actions */}
        <div className="flex justify-center flex-wrap gap-3.5 mt-9 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[320px]">
          <Button href="/enterprise/sponsorship-enquiry/" showArrow={true}>
            Enquire Now (Sponsorship &amp; Passes)
          </Button>
          <Button href="/enterprise/agenda/the-2030-vision/" variant="outline" showArrow={true}>
            Explore The India Series
          </Button>
          <Button href="/enterprise/attend/sponsor/" variant="outline" showArrow={true}>
            Download Prospectus
          </Button>
        </div>
      </div>
    </section>
  );
}
