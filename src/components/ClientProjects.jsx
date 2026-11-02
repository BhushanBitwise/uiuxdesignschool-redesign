import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderKanban, 
  ExternalLink, 
  User, 
  Sparkles, 
  X, 
  ArrowRight,
  TrendingUp,
  Layers
} from 'lucide-react';
import { clientProjects } from '../data/schoolData';

export const ClientProjects = ({ onOpenEnquiry }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4">
            <FolderKanban className="w-3.5 h-3.5 text-violet-600" />
            Live Client Capstone Work
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mb-4">
            Real Enterprise Products <br className="hidden sm:inline" />
            Built By Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Alumni.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            No dummy assignments. Our students solve real usability bottlenecks for FinTech, E-commerce, and SaaS startups, creating high-impact case studies for Behance and Dribbble.
          </p>
        </div>

        {/* Projects 2x2 Bento Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-white border border-slate-200/90 hover:border-indigo-300 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)] overflow-hidden flex flex-col justify-between group transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-[10px] font-bold">
                      {project.client.charAt(0)}
                    </div>
                    <span>{project.client}</span>
                  </div>
                  <span className="text-[11px] text-slate-300 font-medium px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-md">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Verified UX Case Study</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mb-5 font-normal leading-relaxed">
                  {project.metrics}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-2xl border border-slate-200 hover:border-indigo-600 text-slate-800 hover:text-indigo-600 hover:bg-indigo-50/50 text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Case Study Breakdown</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4 pr-8">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700">
                  {selectedProject.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Lead Designer: <strong>{selectedProject.client}</strong> • Completed during Elite UX cohort
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-5 bg-slate-100 shadow-inner">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 mb-6 text-sm text-slate-700">
                <h4 className="font-bold text-slate-900 text-base font-heading">Key Design Process & Solution:</h4>
                <p className="leading-relaxed text-xs sm:text-sm">
                  Students conduct end-to-end user research, persona creation, user flows, low-fidelity wireframing in Balsamiq, and high-fidelity auto-layout design systems in Figma with interactive micro-animations.
                </p>
                <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Result: {selectedProject.metrics}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenEnquiry(`Build Project: ${selectedProject.title}`);
                  }}
                  className="px-6 py-2.5 rounded-full bg-slate-950 hover:bg-indigo-600 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Build Real Projects in Next Batch
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClientProjects;
