import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  TrendingUp, 
  Quote, 
  Building2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { placedStudents } from '../data/schoolData';

export const PlacedStudents = ({ onOpenEnquiry }) => {
  const [filterCompany, setFilterCompany] = useState('All');

  const companies = ['All', 'Cognizant', 'Capgemini', 'Infosys', 'Dell', 'IBM', 'Oracle'];

  const filteredStudents = filterCompany === 'All'
    ? placedStudents
    : placedStudents.filter(s => s.company.toLowerCase().includes(filterCompany.toLowerCase()));

  return (
    <section id="placements" className="py-24 bg-slate-50/60 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            Verified Placement Records
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Real Students. Real Packages. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600">
              Zero Coding Required.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From architecture, commerce, and mechanical backgrounds to high-impact UI/UX designers at top tech corporations across India.
          </p>

          {/* Quick Filter */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {companies.map((comp) => (
              <button
                key={comp}
                onClick={() => setFilterCompany(comp)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCompany === comp
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {comp}
              </button>
            ))}
          </div>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStudents.map((student, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300/80 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.08)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-5 pb-0">
                {/* Photo with Overlay Badge */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-100 mb-4 shadow-inner">
                  <img
                    src={student.image}
                    alt={`${student.name} - ${student.role} at ${student.company}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Verified CTC Pill */}
                  <div className="absolute bottom-2.5 right-2.5 bg-slate-950/85 backdrop-blur-md text-emerald-400 font-extrabold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1 border border-white/10">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span>{student.package}</span>
                  </div>

                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs">
                    Placed
                  </div>
                </div>

                {/* Candidate Info */}
                <div>
                  <h4 className="font-heading text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {student.name}
                  </h4>
                  <p className="text-xs font-bold text-indigo-600 mt-0.5">
                    {student.role}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Hired by <strong>{student.company}</strong></span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-5 pt-3">
                <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 text-xs text-slate-600 italic leading-relaxed relative">
                  <Quote className="w-3 h-3 text-indigo-300 absolute -top-1.5 -left-1.5 bg-white rounded-full p-0.5" />
                  "{student.quote}"
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenEnquiry("Placements Page Consultation")}
            className="px-8 py-4 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-200 cursor-pointer inline-flex items-center gap-2 group btn-shimmer"
          >
            <span>Join 3,000+ Placed Designers • Start Your Career</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PlacedStudents;
