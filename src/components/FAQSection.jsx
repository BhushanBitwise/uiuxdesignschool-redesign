import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqs } from '../data/schoolData';
import MotionButton from './motion/MotionButton';

export const FAQSection = ({ onOpenEnquiry }) => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
            Common Student Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Everything you need to know about course prerequisites, batch timings, placement support, and EMI financing.
          </p>
        </div>

        {/* FAQs list */}
        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;

            return (
              <div
                key={i}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen 
                    ? 'bg-white border-indigo-200 shadow-md ring-2 ring-indigo-50/40' 
                    : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </h4>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-indigo-50 text-indigo-600' : 'bg-slate-100'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h5 className="font-bold text-slate-900">Have a specific question not covered here?</h5>
            <p className="text-xs text-slate-500 mt-0.5">Connect with our senior admission counselors directly.</p>
          </div>
          <MotionButton
            size="sm"
            variant="primary"
            onClick={() => onOpenEnquiry("FAQ Unanswered Query")}
          >
            Speak With Counselor
          </MotionButton>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
