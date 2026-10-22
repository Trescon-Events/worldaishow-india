"use client";

const statsData = [
  { display: "300", label: "Qualified CXOs" },
  { display: "45", label: "Speakers & Panelists" },
  { display: "5", label: "Content Pillars" },
  { display: "2 Days", label: "Executive Conference" },
  { display: "46", label: "Global Series Editions" },
];

export function AttendStats() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-9 overflow-x-auto pb-2 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {statsData.map((stat) => (
        <article
          className="min-h-[143px] p-6 text-center flex flex-col items-center justify-center border border-[#77d1ff]/16 rounded-[14px] bg-[#040c1c]/72 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] group hover:-translate-y-1 transition-all duration-300"
          key={stat.label}
        >
          <strong className="block bg-gradient-to-r from-[#18d4ff] to-[#b9f82d] bg-clip-text text-transparent text-[34px] font-[850] leading-none">
            {stat.display}
          </strong>
          <span className="block mt-[18px] text-white/68 text-[15px] leading-snug">{stat.label}</span>
        </article>
      ))}
    </div>
  );
}
