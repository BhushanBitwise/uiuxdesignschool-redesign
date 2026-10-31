import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, FileCheck, ExternalLink } from 'lucide-react';
import { certifications } from '../data/schoolData';
import MotionButton from './motion/MotionButton';

export const CertificationsSection = ({ onOpenEnquiry }) => {
  return (
    <section id="certification" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
            Globally Recognized Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Earn Dual Industry & University Certification
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our credentials are accepted by 150+ top MNCs, tech enterprises, and international universities for higher design education abroad.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-indigo-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white border border-slate-200 text-indigo-600">
                    {cert.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {cert.desc}
                </p>

                {/* Certificate Preview Frame */}
                <div className="rounded-2xl overflow-hidden border-2 border-slate-200/80 bg-white p-2 shadow-sm group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Unique QR Verification Enabled</span>
                <button
                  onClick={() => onOpenEnquiry(`Sample Certificate Verification: ${cert.title}`)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Verify Sample ID</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
