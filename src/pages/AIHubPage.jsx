import React from 'react';
import AILearningHub from '../components/AILearningHub';
import MotionButton from '../components/motion/MotionButton';
import { Sparkles, Bot, Zap, Code, ShieldCheck } from 'lucide-react';

export const AIHubPage = ({ onOpenEnquiry }) => {
  return (
    <div className="pt-6">
      {/* AI Hub Header */}
      <section className="py-14 bg-gradient-to-b from-indigo-50/50 via-white to-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            AI-Driven Product Design Education
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            50+ Innovative AI Tools for Designers
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Don't get left behind. Learn how senior product designers use Claude, ChatGPT, Midjourney, Galileo AI, and Framer to conduct 3x faster UX research and prototype full-stack interactive designs.
          </p>
        </div>
      </section>

      {/* Main AI Hub with interactive advisor */}
      <AILearningHub onOpenEnquiry={onOpenEnquiry} />

      {/* AI Curriculum Highlights */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
            How AI Is Integrated Into Every Week Of Our Curriculum
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                <Bot className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">1. AI-Assisted UX Research</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Use Claude and ChatGPT to generate research interview scripts, analyze qualitative survey transcripts, synthesize realistic user personas, and conduct automated heuristic checks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">2. Text-to-UI & Wireframing</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Convert product requirements into editable Figma vector layouts in minutes using Galileo AI, Visily, and Uizard. Spend time refining user flows rather than starting from zero.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">3. Visual Asset Synthesis</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generate high-converting marketing graphics, custom app illustrations, and photorealistic 3D product renders with Midjourney and prompt engineering.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <MotionButton
              size="lg"
              variant="primary"
              onClick={() => onOpenEnquiry("AI Learning Hub Enrollment")}
            >
              Enroll In AI-Enhanced Design Batch
            </MotionButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIHubPage;
