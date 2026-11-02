import React from 'react';
import CoursesSection from '../components/CoursesSection';
import CurriculumAccordion from '../components/CurriculumAccordion';
import RecruiterMarquee from '../components/RecruiterMarquee';
import CertificationsSection from '../components/CertificationsSection';
import FAQSection from '../components/FAQSection';
import MotionButton from '../components/motion/MotionButton';
import { Sparkles, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';

export const CoursesPage = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-6 w-full max-w-full overflow-x-hidden">
      {/* Course Hero Banner */}
      <section className="py-14 bg-gradient-to-b from-indigo-50/60 via-white to-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-indigo-600" />
            Comprehensive UI/UX & Product Design Curriculum
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Industry-Aligned UI/UX Design Courses
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Gain job-ready skills through hands-on practical training, live client projects, and personalized design mentorship. 100% placement assurance with 150+ corporate partners.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <MotionButton
              size="md"
              variant="primary"
              onClick={() => onOpenEnquiry("Course Page Admission")}
            >
              Book Free Demo Class
            </MotionButton>
            <MotionButton
              size="md"
              variant="secondary"
              onClick={() => onOpenEnquiry("Course Page Brochure Download")}
            >
              Download Full Syllabus (PDF)
            </MotionButton>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <CoursesSection onOpenEnquiry={onOpenEnquiry} />

      {/* Curriculum Breakdown */}
      <CurriculumAccordion onOpenEnquiry={onOpenEnquiry} />

      {/* Certifications Preview */}
      <CertificationsSection onOpenEnquiry={onOpenEnquiry} />

      {/* Recruiter Marquee */}
      <RecruiterMarquee />

      {/* FAQ */}
      <FAQSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
};

export default CoursesPage;
