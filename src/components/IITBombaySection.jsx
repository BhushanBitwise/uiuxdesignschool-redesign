import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Trophy, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2 
} from 'lucide-react';
import { iitBombayEvent } from '../data/schoolData';
import MotionButton from './motion/MotionButton';

export const IITBombaySection = ({ onOpenEnquiry }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % iitBombayEvent.photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + iitBombayEvent.photos.length) % iitBombayEvent.photos.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-violet-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden w-full max-w-full">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Trophy className="w-3.5 h-3.5" />
              Exclusive Academic Partnership & Exposure
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Exclusive Chance to Exhibit at <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">IIT Bombay</span> Techfest
            </h2>

            <p className="text-indigo-200 text-base leading-relaxed italic">
              "{iitBombayEvent.quote}"
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              {iitBombayEvent.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Innovative Design Exhibitions",
                "National Design Hackathons",
                "Masterclasses by IIT UX Researchers",
                "High-Value Industry Networking"
              ].map((perk, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <MotionButton
                size="md"
                variant="amber"
                onClick={() => onOpenEnquiry("IIT Bombay Techfest Immersion")}
              >
                Inquire About IIT Bombay Immersion Track
              </MotionButton>
            </div>
          </div>

          {/* Right Interactive Carousel */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/3] bg-slate-800">
              <img
                src={iitBombayEvent.photos[currentSlide]}
                alt="UI UX Design School students visit IIT Bombay"
                className="w-full h-full object-cover transition-all duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <p className="text-xs sm:text-sm font-semibold text-slate-200">
                  UI UX Design School Cohort at IIT Bombay Design Exhibition & Techfest
                </p>
              </div>

              {/* Slider Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {iitBombayEvent.photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentSlide === i ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IITBombaySection;
