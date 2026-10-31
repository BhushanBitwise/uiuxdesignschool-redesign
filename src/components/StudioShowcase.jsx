import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Sparkles, 
  Users, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Camera, 
  Globe2, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { studioPhotos } from '../data/schoolData';

export const StudioShowcase = ({ onOpenEnquiry }) => {
  const [activePhoto, setActivePhoto] = useState(studioPhotos[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle ambient blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-violet-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Award-Winning Design Studio Atmosphere</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Where Ideas Turn Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600">
              Awarded Digital Products
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Take a look inside our vibrant design studios, live collaboration workshops, and international convocation ceremonies where students transform into industry design leaders.
          </p>
        </div>

        {/* Featured Large Studio Spotlight */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_12px_45px_rgba(0,0,0,0.05)] overflow-hidden mb-10 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Photo Area */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900 group shadow-md">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5 border border-white/60">
                <Award className="w-3.5 h-3.5 text-indigo-600" />
                <span>{activePhoto.badge}</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300">
                  {activePhoto.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold mt-1 text-white">
                  {activePhoto.title}
                </h3>
              </div>
            </div>

            {/* Content & Selector Area */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Real Learning Culture
                </span>
                <h4 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {activePhoto.title}
                </h4>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {activePhoto.description}
                </p>
              </div>

              {/* Thumbnail Selector Pills */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Explore Studio Moments:
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  {studioPhotos.map((photo) => {
                    const isSelected = activePhoto.id === photo.id;
                    return (
                      <button
                        key={photo.id}
                        onClick={() => setActivePhoto(photo)}
                        className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all cursor-pointer group ${
                          isSelected 
                            ? 'border-indigo-600 ring-2 ring-indigo-200 shadow-md scale-[1.02]' 
                            : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400'
                        }`}
                      >
                        <img
                          src={photo.image}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry(`Studio Experience - ${activePhoto.title}`)}
                  className="px-5 py-3 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-indigo-600 transition-colors shadow-sm flex items-center gap-2 cursor-pointer btn-shimmer"
                >
                  <span>Book Studio Walkthrough</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenEnquiry("Curriculum & Global Batches")}
                  className="px-4 py-3 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  <span>Download Studio Brochure</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Studio Highlights Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900">1:1 Senior Designer Desks</h5>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Direct portfolio critique from Principal Designers at top enterprise software firms.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900">Award-Winning Pedagogy</h5>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Recognized at IIT Bombay Techfest with a 100% placement track record for 3,000+ designers.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900">Pan-India & Global Cohorts</h5>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Offline design labs in Pune HQ & 8 cities, plus live interactive cohorts in US, UK, Germany & SG.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudioShowcase;
