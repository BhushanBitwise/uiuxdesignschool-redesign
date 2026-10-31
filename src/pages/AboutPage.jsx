import React from 'react';
import IITBombaySection from '../components/IITBombaySection';
import CertificationsSection from '../components/CertificationsSection';
import MotionButton from '../components/motion/MotionButton';
import { 
  Building, 
  Target, 
  Heart, 
  Users, 
  Award, 
  CheckCircle2, 
  GraduationCap 
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const AboutPage = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-6">
      {/* About Hero */}
      <section className="py-16 bg-gradient-to-b from-indigo-50/50 via-white to-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            About UI UX Design School
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Pioneering Practical Design Education in India
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Founded with a clear vision: to bridge the gap between academic theory and real-world tech industry demands. We transform passionate learners into confident, hireable Product & UX Designers.
          </p>
        </div>
      </section>

      {/* Mission & Values Bento */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Innovative Designs</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We push boundaries, embrace modern industry trends, and guide our students to build high-end UI solutions that stand out on Dribbble, Behance, and product portfolios.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">User-Centric Approach</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every screen must solve a human need. We drill in research heuristics, accessibility standards (WCAG 2.2), and cognitive UX psychology into every project.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">100% Placement Record</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                With over 150+ corporate hiring partners and 500+ students placed every single year, we are the #1 UI/UX training academy in Pune and Nagpur.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Classroom Culture with Real Photos */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider">
                <span>Pune HQ • US • UK • Germany • Singapore</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                A Creative Studio Culture Designed For Global Product Thinkers
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our flagship design campus in Karvenagar (Pune) and our live international cohorts across the United States, United Kingdom, Germany, and Singapore provide intensive, practical studio immersion. Students collaborate in real-time, work on cross-border product challenges, and build portfolios evaluated by international design directors.
              </p>

              <div className="space-y-3">
                {[
                  "Hands-on mentorship from senior practitioners with 10+ years experience",
                  "Dedicated global cohorts tailored to US (EST/PST), UK (GMT), and EU (CET) timings",
                  "Small cohorts (maximum 15 students per batch for 1-on-1 focus)",
                  "Weekly Soft Skill Development (SSD) and Mock Client Presentations",
                  "Global alumni network across India, US, UK, Germany, and Singapore"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <MotionButton
                  size="md"
                  variant="primary"
                  onClick={() => onOpenEnquiry("Campus Tour Booking")}
                >
                  Schedule A Campus Visit
                </MotionButton>
                <button
                  onClick={() => onOpenEnquiry("Global Cohort Syllabus")}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Global Batches Info
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm relative group">
                <img
                  src="/images/studio/studio-collab.jpg"
                  alt="UI UX Design School Live Collaboration Workshop"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                  Figma Design Sprint
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm relative group">
                <img
                  src="/images/studio/awards-showcase.jpg"
                  alt="UI UX Design School Convocation and Awards"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                  Convocation Awards '25
                </div>
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden aspect-[16/8] bg-slate-200 shadow-sm relative group">
                <img
                  src="/images/studio/design-critique.jpg"
                  alt="UI UX Design School FinTech AI Design Critique"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-lg">
                  Executive Design Critique & FinTech Lab
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IIT Bombay Feature */}
      <IITBombaySection onOpenEnquiry={onOpenEnquiry} />

      {/* Certifications Feature */}
      <CertificationsSection onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
};

export default AboutPage;
