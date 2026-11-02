import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, Mail, User, BookOpen, MapPin, Sparkles, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import { packages, branches } from '../data/schoolData';
import MotionButton from './motion/MotionButton';

export const EnquiryModal = ({ isOpen, onClose, initialContext = "General Admission" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedPackage: 'Premium Package (Intermediate UI/UX)',
    preferredCity: 'Pune (Headquarters)',
    mode: 'Classroom (Offline)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast server response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti explosion for delight
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 my-8 p-5 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 pr-6">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 uppercase tracking-wider">
                {initialContext}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                Apply for Next Batch & Scholarship
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill the details below to download complete curriculum & claim up to ₹61,000 scholarship.
              </p>
            </div>

            {/* Admission Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50"
                  />
                </div>
              </div>

              {/* Email & Phone grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      pattern="[6-9][0-9]{9}"
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50"
                    />
                  </div>
                </div>
              </div>

              {/* Package selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Program of Interest
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.selectedPackage}
                    onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50"
                  >
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={`${pkg.name} (${pkg.subTitle})`}>
                        {pkg.name} - {pkg.price}
                      </option>
                    ))}
                    <option value="Graphic Designing Masterclass">Graphic Designing Masterclass</option>
                    <option value="Advanced UX Research & Heuristics">Advanced UX Research & Heuristics</option>
                  </select>
                </div>
              </div>

              {/* Preferred Center & Learning Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Center
                  </label>
                  <select
                    value={formData.preferredCity}
                    onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50"
                  >
                    {branches.map((b) => (
                      <option key={b.city} value={b.city}>
                        {b.city}
                      </option>
                    ))}
                    <option value="Online Cohort (Live Interactive)">Online Cohort (Live Interactive)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Training Mode
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-slate-50"
                  >
                    <option value="Classroom (Offline)">Classroom (Offline)</option>
                    <option value="Live Online Interactive">Live Online Interactive</option>
                    <option value="Hybrid (Weekend Batch)">Hybrid (Weekend Batch)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <MotionButton
                  fullWidth
                  size="lg"
                  type="submit"
                  variant="primary"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit & Get Syllabus (PDF)"}
                </MotionButton>
                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  🔒 We respect your privacy. No spam. A counselor will guide you within 2 hours.
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              Application Submitted Successfully!
            </h3>

            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>! Your seat inquiry has been registered. Our senior design counselor will call you at <strong>{formData.phone}</strong> shortly.
            </p>

            <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100 text-xs text-indigo-900 text-left space-y-1">
              <div><strong>Selected Track:</strong> {formData.selectedPackage}</div>
              <div><strong>Campus / Mode:</strong> {formData.preferredCity} • {formData.mode}</div>
              <div><strong>Scholarship Code:</strong> UIUX-SCHOLAR-61K</div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/downloaded/UIUX BROCHURE-2.pdf"
                download="UIUX-Design-School-Curriculum.pdf"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Curriculum PDF Now</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
};

export default EnquiryModal;
