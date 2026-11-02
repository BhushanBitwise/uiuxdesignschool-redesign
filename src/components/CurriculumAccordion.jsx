import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  ChevronDown, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Download,
  Sparkles 
} from 'lucide-react';
import { curriculumModules } from '../data/schoolData';
import MotionButton from './motion/MotionButton';

export const CurriculumAccordion = ({ onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="curriculum" className="py-20 bg-slate-50/70 border-t border-slate-100 relative overflow-hidden w-full max-w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100/80 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-violet-600" />
            Curriculum Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Industry-Vetted UI/UX & AI Syllabus
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From cognitive design psychology to Figma component variables and generative AI workflows, learn exactly what top tech companies demand today.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {curriculumModules.map((module, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen 
                    ? 'bg-white border-indigo-200 shadow-md ring-2 ring-indigo-50/50' 
                    : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-3 sm:gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                      isOpen ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {module.moduleNumber}
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900">
                        {module.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {module.duration} • {module.topics.length} Practical Lessons
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700">
                      Module {idx + 1}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-slate-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-indigo-50 text-indigo-600' : 'bg-slate-100'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-slate-100">
                        <p className="text-xs sm:text-sm text-slate-600 mb-4 font-normal leading-relaxed">
                          {module.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {module.topics.map((topic, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Brochure CTA Box */}
        <div className="mt-12 text-center sm:text-left bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">Want the Complete 45-Page Course Handbook?</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Includes comprehensive lecture schedules, software licensing details, and capstone criteria.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0">
            <MotionButton
              variant="primary"
              size="md"
              onClick={() => onOpenEnquiry("Full Handbook Download")}
            >
              Download Curriculum PDF
            </MotionButton>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CurriculumAccordion;
