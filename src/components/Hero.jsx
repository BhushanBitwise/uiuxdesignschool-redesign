import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Play, 
  Users, 
  Briefcase, 
  ArrowRight,
  TrendingUp,
  MessageCircle,
  X,
  Layers,
  Cpu,
  MousePointer,
  Compass,
  Award
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const Hero = ({ onOpenEnquiry }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeCanvasTab, setActiveCanvasTab] = useState('ui'); // 'ui', 'wireframe', 'ai'

  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-white bg-grid-subtle">
      {/* Ambient Radial Glowing Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-indigo-100/40 via-violet-100/30 to-amber-100/20 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-pink-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Announcement Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-800">
              Global Live Batches: India • US • UK • Germany • Singapore
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-[11px] font-bold text-indigo-600">
              ₹61,000 Scholarship Pool
            </span>
          </motion.div>
        </div>

        {/* Main Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-6 mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08]"
          >
            Where <span className="font-serif-italic font-normal text-indigo-600">passionate thinkers</span> become award-winning{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600">
              Product Designers.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Master Figma design systems, cognitive UX psychology, and 50+ cutting-edge generative AI workflows. Real client projects with <strong>100% placement assurance</strong>.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-2"
          >
            <button
              onClick={() => onOpenEnquiry("Hero Book Demo")}
              className="relative px-7 py-4 rounded-full text-sm font-bold text-white bg-slate-950 hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-indigo-100 hover:shadow-indigo-200 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2 group btn-shimmer"
            >
              <span>Book Free Demo & Syllabus</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href={schoolInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full text-sm font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200/90 transition-all hover:border-emerald-300 shadow-xs flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="px-5 py-4 rounded-full text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch Video Tour</span>
            </button>
          </motion.div>
        </div>

        {/* Awarded Interactive Design Studio Canvas Bento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative rounded-3xl bg-slate-900/5 p-2 sm:p-3 border border-slate-200/90 shadow-2xl max-w-5xl mx-auto"
        >
          {/* Main Studio Frame */}
          <div className="relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-inner">
            
            {/* Top Figma-Style Window Chrome Bar */}
            <div className="px-4 py-3 bg-slate-50 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-slate-400 font-mono text-[11px] ml-2">UIUX-Design-Studio-2025.fig</span>
              </div>

              {/* Interactive Stage Tabs */}
              <div className="flex items-center gap-1 p-1 bg-slate-200/60 rounded-xl">
                <button
                  onClick={() => setActiveCanvasTab('ui')}
                  className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                    activeCanvasTab === 'ui' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ✨ Hi-Fi UI Design
                </button>
                <button
                  onClick={() => setActiveCanvasTab('wireframe')}
                  className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                    activeCanvasTab === 'wireframe' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  📐 Wireframe / IA
                </button>
                <button
                  onClick={() => setActiveCanvasTab('ai')}
                  className={`px-3 py-1 rounded-lg font-bold text-[11px] transition-all cursor-pointer ${
                    activeCanvasTab === 'ai' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🤖 AI Prompt Lab
                </button>
              </div>

              {/* Live Presence indicator */}
              <div className="hidden sm:flex items-center gap-2 text-slate-500 font-medium text-[11px]">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[9px] flex items-center justify-center border border-white">
                    AS
                  </div>
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[9px] flex items-center justify-center border border-white">
                    SP
                  </div>
                </div>
                <span>2 Mentors Active</span>
              </div>
            </div>

            {/* Canvas Dynamic Content Area */}
            <div className="relative aspect-[16/9] min-h-[360px] sm:min-h-[460px] bg-slate-100/70 p-4 sm:p-8 flex items-center justify-center overflow-hidden">
              
              {/* Canvas Background Grid */}
              <div className="absolute inset-0 bg-dot-subtle pointer-events-none" />

              {/* Mode 1: Hi-Fi UI Preview & Studio Atmosphere */}
              {activeCanvasTab === 'ui' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-200/90 overflow-hidden"
                >
                  <img
                    src="/images/studio/studio-collab.jpg"
                    alt="UI UX Design School Live Workshop & Studio Mentorship"
                    className="w-full h-auto object-cover max-h-[380px]"
                    loading="eager"
                  />
                  <div className="p-4 bg-white flex items-center justify-between text-xs border-t border-slate-100">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Pune Design Lab • Live Figma Sprint & Mentorship</h4>
                      <p className="text-slate-500 text-[11px]">Design Lead Anuj Sir with UI UX Design School Students • Pune Studio</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200/60">
                      100% Practical Studio
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Mode 2: Wireframe & IA Preview */}
              {activeCanvasTab === 'wireframe' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-dashed border-slate-300 p-6 space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-mono font-bold text-indigo-600">FRAME 01 // ONBOARDING_FLOW.LO_FI</span>
                    <span className="text-[10px] font-mono text-slate-400">Grid: 8pt • Heuristics: OK</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-2">
                      <div className="w-10 h-10 bg-slate-200 rounded-full mx-auto" />
                      <div className="h-3 bg-slate-200 rounded w-3/4 mx-auto" />
                      <div className="h-2 bg-slate-100 rounded w-1/2 mx-auto" />
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-2">
                      <div className="w-full h-10 bg-slate-200 rounded-lg mx-auto" />
                      <div className="h-3 bg-slate-200 rounded w-3/4 mx-auto" />
                      <div className="h-2 bg-slate-100 rounded w-1/2 mx-auto" />
                    </div>
                    <div className="p-3 bg-indigo-50/50 rounded-xl border border-indigo-200 text-center space-y-2">
                      <div className="w-10 h-10 bg-indigo-200 rounded-full mx-auto flex items-center justify-center font-bold text-indigo-600 text-xs">
                        CTA
                      </div>
                      <div className="h-3 bg-indigo-200 rounded w-3/4 mx-auto" />
                      <div className="h-2 bg-indigo-100 rounded w-1/2 mx-auto" />
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600">
                    <strong>Mentor Feedback (Manoj Sir):</strong> "Wireframe hierarchy looks crisp! Connect user flow to checkout stage with 3-tap rule."
                  </div>
                </motion.div>
              )}

              {/* Mode 3: AI Prompt Lab Preview */}
              {activeCanvasTab === 'ai' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 w-full max-w-2xl bg-slate-950 text-white rounded-2xl shadow-xl p-6 space-y-4 font-mono text-xs"
                >
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span className="text-amber-400 font-bold">🤖 PROMPT_ENGINEERING_LAB // Galileo + Claude 3.7</span>
                    <span>Status: RUNNING</span>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-300">
                    <span className="text-indigo-400">$ prompt:</span> "Generate a clean, high-conversion crypto asset manager for iOS with 4.5:1 text contrast, auto-layout tokens, and light-mode glassmorphism."
                  </div>

                  <div className="p-3 bg-slate-900/80 rounded-xl border border-emerald-900/50 text-emerald-400">
                    <span>✓ Output generated in 4.2s • Ready for Figma Variable Import (Tokens: Primary, Accent, Spacing-Scale)</span>
                  </div>
                </motion.div>
              )}

              {/* Animated Floating Figma Cursor 1 */}
              <div className="absolute top-12 left-16 animate-cursor-1 pointer-events-none hidden sm:block z-20">
                <div className="flex items-start gap-1">
                  <MousePointer className="w-4 h-4 text-violet-600 fill-violet-600" />
                  <span className="bg-violet-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    Anuj Sir (Design Director)
                  </span>
                </div>
              </div>

              {/* Animated Floating Figma Cursor 2 */}
              <div className="absolute bottom-16 right-20 animate-cursor-2 pointer-events-none hidden sm:block z-20">
                <div className="flex items-start gap-1">
                  <MousePointer className="w-4 h-4 text-teal-600 fill-teal-600" />
                  <span className="bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    Snehal P. (Placed @ Dell • 10.2 LPA)
                  </span>
                </div>
              </div>

              {/* Floating Placement Badge Pill */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 sm:left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-3 z-20 max-w-[270px]"
              >
                <img
                  src="/downloaded/pro1-6598ed834d8c9.webp"
                  alt="Placed Student Sachin"
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">Sachin Jagdale</div>
                  <div className="text-[11px] text-slate-500">Placed at Cognizant</div>
                  <div className="text-[11px] font-extrabold text-emerald-600">8.2 LPA Package</div>
                </div>
              </motion.div>

              {/* Floating IIT Bombay Techfest Badge Pill */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-4 right-4 sm:right-6 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">IIT Bombay Techfest</div>
                  <div className="text-[10px] text-slate-500">Student Immersion Partner</div>
                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>

        {/* Awwwards Metric Bar below Hero */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">100%</div>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">Placement Assurance</div>
          </div>
          <div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-indigo-600">₹12.5 LPA</div>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">Highest Alumni CTC</div>
          </div>
          <div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">3,000+</div>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">Designers Graduated</div>
          </div>
          <div>
            <div className="font-heading text-3xl sm:text-4xl font-extrabold text-amber-500 flex items-center justify-center gap-1">
              <span>4.9</span>
              <Star className="w-6 h-6 fill-amber-400 text-amber-400 inline" />
            </div>
            <div className="text-xs sm:text-sm text-slate-500 font-semibold mt-1">1,155+ Verified Reviews</div>
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/zRAuhRr7vbk?autoplay=1"
                title="UI UX Design School Student Placement Story"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
