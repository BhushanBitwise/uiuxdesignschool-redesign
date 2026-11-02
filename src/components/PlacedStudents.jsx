import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  TrendingUp, 
  Quote, 
  Building2, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Briefcase,
  ExternalLink,
  X,
  ShieldCheck
} from 'lucide-react';
import { placedStudents } from '../data/schoolData';

export const PlacedStudents = ({ onOpenEnquiry }) => {
  const [filterCompany, setFilterCompany] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const companies = ['All', 'Wipro', 'Cognizant', 'Capgemini', 'Infosys', 'Dell', 'IBM', 'Oracle'];

  const filteredStudents = filterCompany === 'All'
    ? placedStudents
    : placedStudents.filter(s => s.company.toLowerCase().includes(filterCompany.toLowerCase()));

  return (
    <section id="placements" className="py-24 bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 border-t border-slate-100 relative overflow-hidden w-full max-w-full">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-gradient-to-r from-indigo-100/30 via-emerald-100/20 to-teal-100/30 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified 100% Placement Track Record</span>
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

          {/* Quick Metrics Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              100% Verified Offer Letters
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
              Average Package: 10.5+ LPA
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Highest: ₹13.0 LPA
            </span>
          </div>

          {/* Quick Filter */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {companies.map((comp) => (
              <button
                key={comp}
                onClick={() => setFilterCompany(comp)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCompany === comp
                    ? 'bg-slate-950 text-white shadow-md ring-2 ring-slate-950/20'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                }`}
              >
                {comp}
              </button>
            ))}
          </div>
        </div>

        {/* Student Cards Grid (Inspired by datacouncil.in card structure, elevated for UI/UX school) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredStudents.map((student, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-400/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(79,70,229,0.10)] transition-all duration-300 overflow-hidden flex flex-col justify-between group relative"
            >
              {/* Signature Top Accent Stripe (Blue -> Indigo -> Emerald) */}
              <div className="h-1.5 w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-emerald-500" />

              <div className="p-4 sm:p-5 pb-3">
                {/* Upper Split Section: Left Avatar & Name, Right Company Logo & LPA */}
                <div className="flex items-center justify-between gap-3 sm:gap-4">
                  {/* Left: Authentic Student Avatar & Name */}
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="relative shrink-0">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-indigo-100 shadow-sm group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 shadow-xs border-2 border-white">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-bold text-sm sm:text-base md:text-lg text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight truncate">
                        {student.name}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Placed
                      </span>
                    </div>
                  </div>

                  {/* Right: Company Logo, Role & Salary Package */}
                  <div className="flex flex-col items-end text-right shrink-0 max-w-[105px] sm:max-w-[130px]">
                    <div className="h-6 sm:h-7 max-w-[90px] sm:max-w-[100px] flex items-center justify-end mb-1">
                      {student.companyLogo ? (
                        <img 
                          src={student.companyLogo} 
                          alt={student.company} 
                          className="max-h-4.5 sm:max-h-5 max-w-[80px] sm:max-w-[85px] object-contain"
                        />
                      ) : (
                        <span className="text-xs font-bold text-slate-800">{student.company}</span>
                      )}
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">
                      {student.role}
                    </span>
                    <div className="text-xs sm:text-sm md:text-base font-extrabold text-indigo-600 flex items-center gap-1 mt-0.5">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{student.package}</span>
                    </div>
                  </div>
                </div>

                {/* Middle Creative Section: Career Transformation & Hike */}
                <div className="mt-3.5 sm:mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] bg-slate-50 border border-slate-100 rounded-xl px-2.5 sm:px-3 py-1.5 gap-2">
                    <div className="flex items-center gap-1.5 font-medium text-slate-600 min-w-0 truncate">
                      <Briefcase className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="text-slate-400 shrink-0">From:</span>
                      <span className="font-semibold text-slate-800 truncate">{student.prevBackground}</span>
                    </div>
                    {student.hike && (
                      <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap">
                        {student.hike}
                      </span>
                    )}
                  </div>

                  {/* Skills Chips */}
                  {student.skills && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      {student.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="text-[10px] font-medium text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded-md border border-slate-200/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Quote Snippet */}
              <div className="px-4 sm:px-5 pb-3">
                <div className="bg-indigo-50/30 p-2.5 sm:p-3 rounded-2xl border border-indigo-100/50 text-[11px] sm:text-xs text-slate-600 italic leading-relaxed relative">
                  <Quote className="w-3 h-3 text-indigo-400 inline mr-1 -mt-1 shrink-0" />
                  "{student.quote}"
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 sm:px-5 py-2.5 sm:py-3 border-t border-slate-100 flex items-center justify-between text-[11px] bg-slate-50/50 mt-auto">
                <div className="flex items-center gap-1 text-slate-400 font-medium">
                  <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                  <span className="truncate">{student.batch}</span>
                </div>

                <button
                  onClick={() => setSelectedStudent(student)}
                  className="font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer shrink-0"
                >
                  <span>Verify Record</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center px-2">
          <button
            onClick={() => onOpenEnquiry("Placements Page Consultation")}
            className="max-w-full px-5 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-200 cursor-pointer inline-flex items-center justify-center gap-2 group btn-shimmer text-center"
          >
            <span className="sm:hidden">Join 3,000+ Placed Designers</span>
            <span className="hidden sm:inline">Join 3,000+ Placed Designers • Start Your Career</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
          </button>
        </div>

      </div>

      {/* Verified Placement Record Modal */}
      <AnimatePresence>
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 flex items-center justify-center backdrop-blur-md cursor-pointer transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image Header */}
              <div className="p-6 pb-4 flex items-center gap-4 border-b border-slate-100 bg-gradient-to-r from-indigo-50/70 via-white to-emerald-50/50">
                <img
                  src={selectedStudent.image}
                  alt={selectedStudent.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-200 shadow-md shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified Placement Audit
                  </div>
                  <h3 className="font-heading text-xl font-extrabold text-slate-900 truncate">{selectedStudent.name}</h3>
                  <p className="text-xs text-indigo-600 font-bold">{selectedStudent.role} at {selectedStudent.company}</p>
                </div>
                {selectedStudent.companyLogo && (
                  <div className="p-2 bg-white rounded-xl border border-slate-200/80 shadow-xs shrink-0">
                    <img src={selectedStudent.companyLogo} alt={selectedStudent.company} className="max-h-7 max-w-[80px] object-contain" />
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] text-slate-400 font-medium">Verified Package</span>
                    <div className="text-xl font-extrabold text-emerald-600 mt-0.5">{selectedStudent.package}</div>
                    <span className="text-[10px] text-emerald-600 font-bold">{selectedStudent.hike}</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] text-slate-400 font-medium">Career Switch</span>
                    <div className="text-sm font-bold text-slate-800 mt-0.5 truncate">{selectedStudent.prevBackground}</div>
                    <span className="text-[10px] text-indigo-600 font-bold">➔ {selectedStudent.role}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100/60">
                  <span className="text-[11px] font-bold text-indigo-700 block mb-1">Alumni Feedback & Experience</span>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "{selectedStudent.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-slate-500 font-medium">
                    Batch: <strong className="text-slate-800">{selectedStudent.batch}</strong>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedStudent(null);
                      onOpenEnquiry(`Placement consultation inspired by ${selectedStudent.name}`);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-indigo-600 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Talk to Placement Advisor</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PlacedStudents;

