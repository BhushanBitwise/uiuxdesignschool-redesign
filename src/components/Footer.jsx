import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  ChevronRight, 
  Send, 
  CheckCircle2, 
  Heart,
  Globe
} from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const Footer = () => {
  const [subscribedEmail, setSubscribedEmail] = useState('');
  const [subDone, setSubDone] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setSubDone(true);
    setTimeout(() => {
      setSubscribedEmail('');
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group" title="UI UX Design School Home">
              <img
                src="/downloaded/long-65c5ed74607b2.webp"
                alt="UI UX Design School Logo"
                className="h-7 sm:h-8 w-auto object-contain transition-opacity group-hover:opacity-90"
                loading="lazy"
              />
            </Link>

            <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-300 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Global Cohorts
              </span>
              <span className="text-slate-300">Pune (HQ) • US • UK • Germany • Singapore</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              India's premier practical UI/UX academy offering 100% placement assurance, real enterprise client projects, 50+ cutting-edge AI tools, and international live cohorts across the US, UK, Germany, Singapore, and India.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`tel:${schoolInfo.phone}`} className="hover:text-white transition-colors">
                  {schoolInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-white transition-colors">
                  {schoolInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{schoolInfo.address}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/uiuxdesignschoolpune"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="https://www.instagram.com/uiux_design_school"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href="https://www.youtube.com/@uiuxdesignschool6941"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="YouTube"
              >
                yt
              </a>
              <a
                href="https://www.facebook.com/uiuxdesignschools/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                fb
              </a>
            </div>
          </div>

          {/* Col 2: Programs */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Programs & Courses
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link to="/courses#basic" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Foundation of UX (3-4 Months)</span>
                </Link>
              </li>
              <li>
                <Link to="/courses#premium" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Intermediate UI/UX Design</span>
                </Link>
              </li>
              <li>
                <Link to="/courses#elite" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Master UI/UX & AI Product Track</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Graphic Design Masterclass</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Advanced UX Psychology & Heuristics</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Institute
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About School</Link></li>
              <li><Link to="/placements" className="hover:text-white transition-colors">Placement Records</Link></li>
              <li><Link to="/ai-hub" className="hover:text-white transition-colors">Smart AI Hub</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Centers & Branches</Link></li>
              <li><Link to="/verify" className="hover:text-white transition-colors">Verify Certificate</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Design Newsletter
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive free UI/UX design resources, Figma cheatsheets, and upcoming workshop notifications.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-800 focus:outline-none focus:border-indigo-500 text-white placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                </button>
              </div>

              {subDone && (
                <div className="text-xs text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {schoolInfo.name}. All Rights Reserved. Powered by UI UX Design School Pune.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
  