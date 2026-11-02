import React from 'react';
import PlacedStudents from '../components/PlacedStudents';
import RecruiterMarquee from '../components/RecruiterMarquee';
import ReviewsSection from '../components/ReviewsSection';
import MotionButton from '../components/motion/MotionButton';
import { Award, TrendingUp, Building2, Users, CheckCircle2 } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const PlacementsPage = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-6 w-full max-w-full overflow-x-hidden">
      {/* Placements Hero Header */}
      <section className="py-14 bg-gradient-to-b from-indigo-50/50 via-white to-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            100% Placement Assurance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Placements Speak For Themselves
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Over {schoolInfo.alumniCount} alumni successfully transitioned to high-impact UI/UX design careers across Cognizant, Capgemini, Dell, Infosys, and high-growth SaaS unicorns.
          </p>

          {/* Quick Metrics Bento */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Placement Rate</span>
              <div className="text-2xl font-extrabold text-emerald-600 mt-0.5">100%</div>
              <span className="text-[11px] text-slate-400">Guaranteed Support</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Highest Package</span>
              <div className="text-2xl font-extrabold text-indigo-600 mt-0.5">12.5 LPA</div>
              <span className="text-[11px] text-slate-400">Product Designer</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Hiring Partners</span>
              <div className="text-2xl font-extrabold text-slate-900 mt-0.5">150+</div>
              <span className="text-[11px] text-slate-400">MNCs & Startups</span>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs">
              <span className="text-xs text-slate-500 font-medium">Annual Placements</span>
              <div className="text-2xl font-extrabold text-violet-600 mt-0.5">500+</div>
              <span className="text-[11px] text-slate-400">Designers Placed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Logos */}
      <RecruiterMarquee />

      {/* Placed Students Gallery */}
      <PlacedStudents onOpenEnquiry={onOpenEnquiry} />

      {/* Student Reviews & Testimonials */}
      <ReviewsSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
};

export default PlacementsPage;
