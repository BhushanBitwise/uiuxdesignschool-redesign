import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  Bot, 
  Search, 
  Send, 
  MessageSquare, 
  Check, 
  Layers, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { aiToolsList } from '../data/schoolData';
import MotionButton from './motion/MotionButton';

export const AILearningHub = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'ai',
      text: 'Hello! I am your AI Design Advisor at UI UX Design School. Ask me anything about course syllabus, fees, career roadmap, or tool recommendations!'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const categories = ['All', 'Core Design', 'AI Wireframing', 'AI Visuals', 'UX Research', 'No-Code'];

  const filteredTools = aiToolsList.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAskAI = (presetQuestion = null) => {
    const q = presetQuestion || userQuestion;
    if (!q.trim()) return;

    // Add user question
    const updatedHistory = [...chatHistory, { sender: 'user', text: q }];
    setChatHistory(updatedHistory);
    setUserQuestion('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Our UI/UX design programs are crafted for maximum industry readiness. With 100% placement assurance, our mentors will personally guide your portfolio!";
      
      const lower = q.toLowerCase();
      if (lower.includes('coding') || lower.includes('code') || lower.includes('technical')) {
        reply = "Great news! No coding is required to build a stellar career in UI/UX design. UI/UX focuses on user empathy, wireframing, psychology, and Figma visual mastery. Over 70% of our alumni come from non-coding backgrounds (B.Com, Arts, BBA, Architecture).";
      } else if (lower.includes('salary') || lower.includes('package') || lower.includes('fees') || lower.includes('ctc')) {
        reply = "Our graduates secure average starting packages between 6.5 LPA to 12.5 LPA at companies like Cognizant, Dell, Capgemini, and Infosys. Flexible 0% interest EMI options start from just ₹2,500/month!";
      } else if (lower.includes('batch') || lower.includes('timing') || lower.includes('duration') || lower.includes('start')) {
        reply = "New cohorts start every Monday in both Weekday (Morning/Evening) and Weekend batches across our Pune, Nagpur, Mumbai, and Online classrooms. Duration ranges from 3-4 months (Foundation) to 6-7 months (Master).";
      } else if (lower.includes('ai') || lower.includes('figma') || lower.includes('tools')) {
        reply = "You will master 50+ cutting-edge tools including Figma, FigJam, Miro, Adobe XD, and generative AI tools like Midjourney, Claude, Galileo AI, and Framer to build prototypes 10x faster!";
      }

      setChatHistory([...updatedHistory, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section id="ai-hub" className="py-20 bg-gradient-to-b from-indigo-50/50 via-white to-indigo-50/30 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-200/20 blur-3xl rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Smart AI Learning Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Master 50+ Cutting-Edge AI & Design Tools
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Stay ahead of the curve. Learn how top product designers combine human-centered design heuristics with modern generative AI tools to accelerate research, wireframing, and interactive prototypes.
          </p>
        </div>

        {/* 2-Column Layout: Tools Directory + Interactive AI Advisor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 50+ Tools Directory with Filters */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md">
            
            {/* Search and Categories */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search tool (e.g. Figma, Galileo, Framer)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                {categories.slice(0, 4).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
              {filteredTools.map((tool, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2 }}
                  className="p-3.5 rounded-2xl bg-slate-50/80 hover:bg-indigo-50/40 border border-slate-100 hover:border-indigo-200 transition-all flex items-start gap-3 group"
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-xs shrink-0 shadow-xs"
                    style={{ backgroundColor: tool.iconColor }}
                  >
                    {tool.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-white border border-slate-200 text-slate-600">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Included in Premium & Elite tracks with verified credentials.</span>
              <button
                onClick={() => onOpenEnquiry("Tools Workshop Consultation")}
                className="font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 cursor-pointer"
              >
                <span>Full AI Toolkit Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive AI Design Advisor Chatbot Widget */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 flex flex-col h-[560px]">
            
            {/* Chatbot Top Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <Bot className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span>AI Design Career Advisor</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </h4>
                <p className="text-xs text-slate-500">Instant answers to course, fees & career questions</p>
              </div>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-xs'
                        : 'bg-slate-100 text-slate-800 rounded-tl-xs border border-slate-200/50'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 text-slate-500 p-3 rounded-2xl rounded-tl-xs text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="pt-2 pb-3 border-t border-slate-100">
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Frequently Asked:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Can I learn without coding?",
                  "What is average salary?",
                  "When does batch start?"
                ].map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAskAI(prompt)}
                    className="text-[11px] font-medium bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-600 px-2.5 py-1 rounded-full border border-slate-200/70 transition-colors cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAskAI();
              }}
              className="flex items-center gap-2 pt-2"
            >
              <input
                type="text"
                placeholder="Ask a question..."
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50"
              />
              <button
                type="submit"
                className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition-colors shrink-0 shadow-xs cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AILearningHub;
