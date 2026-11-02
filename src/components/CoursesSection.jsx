import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  Sparkles, 
  Clock, 
  CreditCard, 
  ArrowRight,
  ShieldCheck,
  Download,
  Award,
  Zap
} from 'lucide-react';
import { packages } from '../data/schoolData';

export const CoursesSection = ({ onOpenEnquiry }) => {
  const [selectedDuration, setSelectedDuration] = useState('all');

  const filteredPackages = selectedDuration === 'all'
    ? packages
    : packages.filter(p => p.duration.includes(selectedDuration));

  return (
    <section id="courses" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Curated Career Tracks
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Designed for Beginners. <br className="hidden sm:inline" />
            Vetted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Top Tech Leaders.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are switching from non-tech or looking to master enterprise design systems, choose the program tailored to your career milestones.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-slate-100 border border-slate-200/80 max-w-full gap-1">
            <button
              onClick={() => setSelectedDuration('all')}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedDuration === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Programs (3)
            </button>
            <button
              onClick={() => setSelectedDuration('3 - 4')}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedDuration === '3 - 4' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Foundation (3-4 Mo)
            </button>
            <button
              onClick={() => setSelectedDuration('6 - 7')}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedDuration === '6 - 7' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Career Master (6-7 Mo)
            </button>
          </div>
        </div>

        {/* Awarded Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-gradient-to-b from-indigo-50/50 via-white to-white border-2 border-indigo-500/80 shadow-[0_20px_50px_rgba(79,70,229,0.12)] ring-4 ring-indigo-50/60' 
                  : 'bg-white border border-slate-200/90 hover:border-slate-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]'
              }`}
            >
              {/* Popular Tag */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white text-[10px] font-extrabold uppercase tracking-widest py-1 px-4 rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  Most Popular For Career Switchers
                </div>
              )}

              {/* Card Body Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800">
                    {pkg.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-indigo-600 mb-6">
                  {pkg.subTitle}
                </p>

                {/* Price Box */}
                <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-100 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">+ GST</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 mt-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Zero Cost EMI: {pkg.emi}</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    Core Curriculum & Perks:
                  </p>
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenEnquiry(`Enroll: ${pkg.name}`)}
                  className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer btn-shimmer ${
                    pkg.popular
                      ? 'bg-slate-950 hover:bg-indigo-600 text-white shadow-md'
                      : 'bg-indigo-50 hover:bg-indigo-600 text-indigo-700 hover:text-white'
                  }`}
                >
                  <span>Apply For Next Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenEnquiry(`Syllabus Request: ${pkg.name}`)}
                  className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Detailed Syllabus (PDF)</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Placement Guarantee Card */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-heading">100% Placement Assurance Guaranteed</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                We provide end-to-end recruitment drives, unlimited mock interview drills, and resume audits till you join your dream design company.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenEnquiry("Counselor Consultation")}
            className="px-7 py-3.5 rounded-full text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shrink-0 cursor-pointer"
          >
            Schedule Free 1-on-1 Counseling
          </button>
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
