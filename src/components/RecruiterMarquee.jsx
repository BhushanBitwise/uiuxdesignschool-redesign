import React from 'react';
import { recruiterLogos } from '../data/schoolData';
import { Award, Briefcase, CheckCircle2, Globe2 } from 'lucide-react';

export const RecruiterMarquee = () => {
  // Split logos into two rows for dynamic visual richness
  const half = Math.ceil(recruiterLogos.length / 2);
  const row1 = [...recruiterLogos.slice(0, half), ...recruiterLogos.slice(0, half)];
  const row2 = [...recruiterLogos.slice(half), ...recruiterLogos.slice(half)];

  return (
    <section className="py-14 bg-gradient-to-b from-white via-slate-50/60 to-white border-y border-slate-100 overflow-hidden relative w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 text-center mb-9">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-[11px] font-bold uppercase tracking-wider mb-2.5">
          <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
          <span>Top Tier Hiring Partners</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Our Alumni Are Hired By Industry Leaders
        </h3>

        <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-xl mx-auto">
          Over 150+ global technology giants, fintech startups, and design agencies hire our certified UI/UX graduates in India, US, UK, Germany & Singapore.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 text-[11px] font-semibold text-slate-600">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            100% Placement Record
          </span>
          <span className="flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-indigo-500" />
            Average Package 8.5+ LPA
          </span>
          <span className="flex items-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-blue-500" />
            Global Tech Placements
          </span>
        </div>
      </div>

      {/* Row 1: Leftward moving marquee with direct original colorful logos */}
      <div className="relative w-full max-w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] mb-3">
        <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 py-1.5">
          {row1.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="h-14 sm:h-16 w-36 sm:w-44 px-4 py-2.5 bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center shrink-0 hover:border-indigo-400 hover:shadow-md transition-all duration-200 group"
              title={`${item.name} hires UI UX Design School graduates`}
            >
              <img
                src={item.logo}
                alt={`${item.name} hiring UI UX designers`}
                className="max-h-8 sm:max-h-9 max-w-[85%] object-contain pointer-events-none transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Rightward moving marquee with direct original colorful logos */}
      <div className="relative w-full max-w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 py-1.5">
          {row2.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="h-14 sm:h-16 w-36 sm:w-44 px-4 py-2.5 bg-white rounded-xl border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex items-center justify-center shrink-0 hover:border-indigo-400 hover:shadow-md transition-all duration-200 group"
              title={`${item.name} hires UI UX Design School graduates`}
            >
              <img
                src={item.logo}
                alt={`${item.name} hiring UI UX designers`}
                className="max-h-8 sm:max-h-9 max-w-[85%] object-contain pointer-events-none transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruiterMarquee;
