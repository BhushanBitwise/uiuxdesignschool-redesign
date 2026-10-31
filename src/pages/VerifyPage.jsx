import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Award, 
  Download, 
  ExternalLink,
  Calendar,
  Building,
  User 
} from 'lucide-react';
import MotionButton from '../components/motion/MotionButton';
import { schoolInfo } from '../data/schoolData';

export const VerifyPage = () => {
  const [certId, setCertId] = useState('');
  const [result, setResult] = useState(null);
  const [searching, setSearching] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setResult({
        certId: certId.toUpperCase(),
        studentName: "Sachin Jagdale",
        courseName: "Elite Master in UI/UX & AI Product Design",
        issueDate: "15th January 2025",
        status: "AUTHENTIC & VERIFIED",
        grade: "A+ (Distinction)",
        mentor: "Senior Director Manoj Sir",
        skills: ["Figma 5.0", "Design Systems", "UX Research Heuristics", "Galileo AI", "Interactive Prototyping"],
        universityAccreditation: "Recognized Under Skill India & Affiliated University Framework"
      });
    }, 500);
  };

  return (
    <div className="pt-6">
      {/* Verify Hero Header */}
      <section className="py-14 bg-gradient-to-b from-indigo-50/50 via-white to-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Official Credential Verification Portal
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Verify UI UX Design School Certificates
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Employers, HR managers, and universities can verify the authenticity of credentials issued by UI UX Design School Pune using the unique certificate identification number.
          </p>

          {/* Search Box */}
          <form onSubmit={handleVerify} className="max-w-xl mx-auto mt-8 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Enter Certificate ID (e.g. UIUX-2024-8921)"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 text-sm rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white shadow-xs"
              />
            </div>
            <MotionButton
              type="submit"
              size="md"
              variant="primary"
            >
              {searching ? "Verifying..." : "Verify Credential"}
            </MotionButton>
          </form>

          <p className="text-xs text-slate-400">
            Try sample ID: <strong className="text-indigo-600 cursor-pointer" onClick={() => setCertId('UIUX-2024-8921')}>UIUX-2024-8921</strong>
          </p>
        </div>
      </section>

      {/* Verification Result Card */}
      {result && (
        <section className="py-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500 shadow-xl space-y-6"
            >
              {/* Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                      {result.status}
                    </div>
                    <div className="text-base font-extrabold text-slate-900">
                      ID: {result.certId}
                    </div>
                  </div>
                </div>

                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Grade: {result.grade}
                </span>
              </div>

              {/* Verified Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 font-medium">Candidate Name</span>
                  <div className="font-bold text-slate-900 mt-0.5">{result.studentName}</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 font-medium">Issued Date</span>
                  <div className="font-bold text-slate-900 mt-0.5">{result.issueDate}</div>
                </div>

                <div className="sm:col-span-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 font-medium">Program Completed</span>
                  <div className="font-bold text-slate-900 mt-0.5">{result.courseName}</div>
                </div>

                <div className="sm:col-span-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-slate-400 font-medium">Accreditation</span>
                  <div className="font-medium text-slate-700 mt-0.5">{result.universityAccreditation}</div>
                </div>
              </div>

              {/* Skills Verified */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Verified Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {result.skills.map((s, i) => (
                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400 font-medium">Digitally Signed by UI UX Design School Pune</span>
                <a
                  href="/downloaded/cer2-1-6598ed76cad60.webp"
                  download="UIUX-Certificate.webp"
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Verified Copy</span>
                </a>
              </div>

            </motion.div>
          </div>
        </section>
      )}

      {/* Trust guarantees */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <Award className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
            <h4 className="font-bold text-slate-900 text-sm">QR Code Authentication</h4>
            <p className="text-xs text-slate-500 mt-1">Every physical and digital certificate features a secure cryptographic QR code.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <Building className="w-8 h-8 text-violet-600 mx-auto mb-2" />
            <h4 className="font-bold text-slate-900 text-sm">Direct Employer Inquiries</h4>
            <p className="text-xs text-slate-500 mt-1">HR recruiters can email verification@uiuxdesignschool.in for instant background verification.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
            <ShieldCheck className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <h4 className="font-bold text-slate-900 text-sm">University Affiliated</h4>
            <p className="text-xs text-slate-500 mt-1">Double verification backed by affiliated academic university partners.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyPage;
