import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Download, 
  Sparkles, 
  GraduationCap, 
  ArrowRight,
  Phone,
  Award,
  Layers,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const Navbar = ({ onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdown, setCoursesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdown(false);
  }, [location.pathname]);

  return (
    <>
      {/* Floating Island Header Container */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 ${
            scrolled 
              ? 'bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.08)] py-2.5 px-4 sm:px-6' 
              : 'bg-white/95 backdrop-blur-lg border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] py-3 px-4 sm:px-6'
          } flex items-center justify-between gap-4`}
        >
          {/* Brand Logo - Original from uiuxdesignschool.in */}
          <Link to="/" className="flex items-center gap-2 group select-none shrink-0" title="UI UX Design School Home">
            <img 
              src="/images/logo-dark.png" 
              alt="UI UX Design School" 
              className="h-5 sm:h-6 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              loading="eager"
            />

            <span className="hidden xl:inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pune • US • UK • DE • SG</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-slate-600">
            <Link 
              to="/" 
              className={`px-3 py-1.5 rounded-full transition-all ${
                location.pathname === '/' 
                  ? 'text-slate-900 bg-slate-100/90 font-bold' 
                  : 'hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesDropdown(true)}
              onMouseLeave={() => setCoursesDropdown(false)}
            >
              <button 
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  location.pathname.startsWith('/courses') 
                    ? 'text-slate-900 bg-slate-100/90 font-bold' 
                    : 'hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                <span>Programs</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${coursesDropdown ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {coursesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 p-2.5 mt-2 grid gap-1.5 z-50"
                  >
                    <Link
                      to="/courses#basic"
                      className="p-2.5 rounded-xl hover:bg-indigo-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Foundation of UX</div>
                        <div className="text-[11px] text-slate-500">3-4 Months • Figma & Wireframing</div>
                      </div>
                    </Link>

                    <Link
                      to="/courses#premium"
                      className="p-2.5 rounded-xl hover:bg-indigo-50/70 transition-colors flex items-start gap-3 group bg-slate-50/60"
                    >
                      <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Intermediate UI/UX</span>
                          <span className="bg-amber-100 text-amber-700 text-[9px] font-extrabold px-1.5 py-0.2 rounded-full">POPULAR</span>
                        </div>
                        <div className="text-[11px] text-slate-500">6-7 Months • 15+ Projects & Internship</div>
                      </div>
                    </Link>

                    <Link
                      to="/courses#elite"
                      className="p-2.5 rounded-xl hover:bg-indigo-50/70 transition-colors flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Master UI/UX & AI Track</div>
                        <div className="text-[11px] text-slate-500">1-on-1 Mentorship + IIT Bombay Immersion</div>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/placements" 
              className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                location.pathname === '/placements' 
                  ? 'text-slate-900 bg-slate-100/90 font-bold' 
                  : 'hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              <span>Placements</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </Link>

            <Link 
              to="/ai-hub" 
              className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                location.pathname === '/ai-hub' 
                  ? 'text-slate-900 bg-slate-100/90 font-bold' 
                  : 'hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              <span>AI Hub</span>
              <span className="text-[10px] font-bold text-indigo-600 px-1 py-0.2 rounded bg-indigo-50">50+</span>
            </Link>

            <Link 
              to="/about" 
              className={`px-3 py-1.5 rounded-full transition-all ${
                location.pathname === '/about' 
                  ? 'text-slate-900 bg-slate-100/90 font-bold' 
                  : 'hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              About
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-1.5 rounded-full transition-all ${
                location.pathname === '/contact' 
                  ? 'text-slate-900 bg-slate-100/90 font-bold' 
                  : 'hover:text-indigo-600 hover:bg-slate-50'
              }`}
            >
              Branches
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenEnquiry("Brochure Download")}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              <span>Syllabus</span>
            </button>

            <button
              onClick={() => onOpenEnquiry("Navbar Apply Free Demo")}
              className="relative px-4 sm:px-5 py-2 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-indigo-600 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5 group select-none btn-shimmer"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-20 z-40 bg-white/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-slate-200 md:hidden"
          >
            <div className="flex flex-col gap-2 text-sm font-semibold text-slate-800">
              <Link to="/" className="px-3 py-2 rounded-xl hover:bg-slate-50">Home</Link>
              <Link to="/courses" className="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-center justify-between">
                <span>Courses & Packages</span>
                <span className="text-[11px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-bold">3 Options</span>
              </Link>
              <Link to="/placements" className="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-center justify-between">
                <span>Placements Gallery</span>
                <span className="text-[11px] text-emerald-600 font-bold">100% Record</span>
              </Link>
              <Link to="/ai-hub" className="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-center justify-between">
                <span>AI Learning Hub</span>
                <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold">50+ Tools</span>
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-xl hover:bg-slate-50">About School & IIT Bombay</Link>
              <Link to="/contact" className="px-3 py-2 rounded-xl hover:bg-slate-50">Branches (8 Cities)</Link>
              <Link to="/verify" className="px-3 py-2 rounded-xl hover:bg-slate-50">Verify Certificate</Link>

              <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenEnquiry("Brochure Download Mobile"); }}
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 hover:bg-slate-50 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Download Curriculum PDF</span>
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenEnquiry("Mobile Admission Demo"); }}
                  className="w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Book Free Demo Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
