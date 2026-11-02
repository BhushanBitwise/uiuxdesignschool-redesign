import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Building, 
  Navigation, 
  Globe2, 
  Clock, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { branches, globalBatches, schoolInfo } from '../data/schoolData';

export const BranchesSection = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState('global'); // 'global' or 'india'
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  return (
    <section id="branches" className="py-24 bg-white relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3.5">
            <Globe2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Global Presence & Pan-India Studios</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Learn From Anywhere:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600">
              Pune HQ to US, UK, Germany & Singapore
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you want in-person immersion at our flagship Pune Design Studio or live interactive cohorts tailored to US, European, or Asian timezones, we have a batch for you.
          </p>

          {/* Tab Switcher: Global Cohorts vs India Offline Studios */}
          <div className="mt-8 flex flex-col sm:inline-flex sm:flex-row p-1 sm:p-1.5 rounded-2xl sm:rounded-full bg-slate-100 border border-slate-200/90 shadow-inner gap-1 max-w-full">
            <button
              onClick={() => setActiveTab('global')}
              className={`px-4 sm:px-7 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'global'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="sm:hidden">International Cohorts</span>
              <span className="hidden sm:inline">International Cohorts (US, UK, DE, SG)</span>
            </button>

            <button
              onClick={() => setActiveTab('india')}
              className={`px-4 sm:px-7 py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'india'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="sm:hidden">India Studios (8 Cities)</span>
              <span className="hidden sm:inline">India Design Studios (8 Cities)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Global Live Cohorts (US, UK, Germany, Singapore) */}
        {activeTab === 'global' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {globalBatches.filter(b => b.code !== 'IN').map((batch) => (
                <div
                  key={batch.code}
                  className="rounded-3xl bg-slate-50 border border-slate-200/90 p-6 flex flex-col justify-between hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{batch.flag}</span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">
                        {batch.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {batch.country}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {batch.cities}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-200/70">
                      <div className="flex items-center gap-2 text-indigo-600 font-semibold">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span>{batch.timezone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                        <span>{batch.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-600 font-medium">
                        <Users className="w-3.5 h-3.5 shrink-0" />
                        <span>{batch.activeStudents}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {batch.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-200">
                    <button
                      onClick={() => onOpenEnquiry(`Apply ${batch.country} Batch`)}
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer group-hover:bg-indigo-600"
                    >
                      <span>Join {batch.code} Batch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Cohort Guarantee Strip */}
            <div className="rounded-2xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl w-full max-w-full">
              <div className="space-y-1.5 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Cross-Border Mentorship & Global Portfolios</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Work on US, European & APAC Client Case Studies
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  All international batches feature live collaborative Figma sessions, recorded video vaults with 12 months access, and direct recruiter referrals across global tech hubs.
                </p>
              </div>

              <button
                onClick={() => onOpenEnquiry("International Batch Schedule & Fees")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-indigo-50 text-slate-950 text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 cursor-pointer text-center"
              >
                Download Global Batch Schedule
              </button>
            </div>
          </motion.div>
        )}

        {/* Tab 2: India Design Studios (Pune HQ & 8 Cities) */}
        {activeTab === 'india' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {/* City Selection Pills */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10">
              {branches.map((b) => (
                <button
                  key={b.city}
                  onClick={() => setSelectedBranch(b)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedBranch.city === b.city
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {b.city}
                </button>
              ))}
            </div>

            {/* Selected Branch Highlight Bento Grid */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200/90 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 relative shadow-sm">
                <img
                  src={selectedBranch.image}
                  alt={`UI UX Design School branch in ${selectedBranch.city}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
                  {selectedBranch.badge}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5 text-left">
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    {selectedBranch.state}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {selectedBranch.city} Center
                  </h3>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 text-sm text-slate-700">
                  <MapPin className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold mb-0.5">Address:</strong>
                    <span>{selectedBranch.address}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <a
                    href={`tel:${selectedBranch.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Center: {selectedBranch.phone}</span>
                  </a>

                  <button
                    onClick={() => onOpenEnquiry(`Visit ${selectedBranch.city} Center`)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-indigo-600" />
                    <span>Schedule Campus Walkthrough</span>
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default BranchesSection;
