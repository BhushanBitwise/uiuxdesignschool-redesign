import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Building 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { branches, globalBatches, schoolInfo } from '../data/schoolData';
import MotionButton from '../components/motion/MotionButton';

export const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    branch: 'Pune (Headquarters)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="pt-6 w-full max-w-full overflow-x-hidden">
      {/* Contact Hero */}
      <section className="py-14 bg-gradient-to-b from-indigo-50/50 via-white to-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-indigo-600" />
            Connect With Admissions
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Get In Touch With Our Mentors
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about course fees, batch schedules, or curriculum suitability? Visit any of our 8 centers or talk to an admission advisor today.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us A Message</h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Our team responds within 2 hours during working hours (9:00 AM - 7:00 PM).
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[6-9][0-9]{9}"
                        placeholder="10-digit mobile number"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Choose Your Preferred Batch / Campus *
                    </label>
                    <select
                      value={form.branch}
                      onChange={(e) => setForm({ ...form, branch: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
                    >
                      <optgroup label="International Live Cohorts (Live Mentorship)">
                        <option value="US Cohort (EST/PST)">🇺🇸 United States Cohort (EST / PST Timings)</option>
                        <option value="UK Cohort (GMT)">🇬🇧 United Kingdom Cohort (GMT / BST Timings)</option>
                        <option value="Germany Cohort (CET)">🇩🇪 Germany & Europe Cohort (CET Timings)</option>
                        <option value="Singapore Cohort (SGT)">🇸🇬 Singapore & APAC Cohort (SGT Timings)</option>
                      </optgroup>
                      <optgroup label="India Physical Design Studios & Campuses">
                        {branches.map((b) => (
                          <option key={b.city} value={b.city}>{b.city}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      How Can We Help You?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ask about batches, fees, career switch advice, or syllabus..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 bg-white"
                    />
                  </div>

                  <MotionButton
                    type="submit"
                    fullWidth
                    size="lg"
                    variant="primary"
                  >
                    Submit Inquiry
                  </MotionButton>
                </form>
              ) : (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you {form.name}. Our admission counselor will reach out to you at {form.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-indigo-600 underline pt-2 cursor-pointer"
                  >
                    Send another query
                  </button>
                </div>
              )}
            </div>

            {/* Right Contact Quick Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs space-y-4">
                <h4 className="text-lg font-bold text-slate-900">Direct Contact Details</h4>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Head Office Phone</div>
                      <a href={`tel:${schoolInfo.phone}`} className="font-bold text-slate-900 hover:text-indigo-600">
                        {schoolInfo.phone}
                      </a>
                      <span className="text-slate-400 mx-1">/</span>
                      <a href={`tel:${schoolInfo.secondaryPhone}`} className="font-bold text-slate-900 hover:text-indigo-600">
                        {schoolInfo.secondaryPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Official Email</div>
                      <a href={`mailto:${schoolInfo.email}`} className="font-bold text-slate-900 hover:text-indigo-600">
                        {schoolInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Operating Hours</div>
                      <span className="font-semibold text-slate-900">Monday - Sunday: 9:00 AM - 7:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Main Pune Campus</div>
                      <span className="text-slate-700 text-xs">{schoolInfo.address}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={schoolInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-xs aspect-[4/3] bg-slate-100">
                <iframe
                  title="UI UX Design School Pune Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.902030027651!2d73.81124527373976!3d18.488096370168282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c107ee6eedb5%3A0x1490c312672f0596!2sUIUX%20training%20PUNE%20%2F%20UIUX%20COURSE%20PUNE%20%2F%20UIUX%20DESIGN%20COURSE%20PUNE!5e0!3m2!1sen!2sin!4v1685706661158!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Global Live Cohorts (US, UK, Germany, Singapore) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              International Live Cohorts
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Global Remote Batches (US, UK, Germany & Singapore)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Join live interactive cohorts synced to your local timezone with cross-border peer collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalBatches.filter(b => b.code !== 'IN').map((g, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between hover:border-indigo-300 transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{g.flag}</span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                      {g.badge}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">{g.country}</h4>
                    <p className="text-xs text-indigo-600 font-semibold">{g.timezone}</p>
                    <p className="text-[11px] text-slate-500">{g.schedule}</p>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {g.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-emerald-600 block mb-2">
                    {g.activeStudents}
                  </span>
                  <button
                    onClick={() => {
                      setForm({ ...form, branch: `${g.country} Cohort` });
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="w-full py-2 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Select {g.code} Batch
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Branches Directory Grid */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            All 8 Training Centers & City Offices (India)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branches.map((b, i) => (
              <div key={i} className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 mb-3">
                    <img src={b.image} alt={b.city} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{b.city}</h4>
                  <p className="text-[11px] font-semibold text-indigo-600 mb-2">{b.badge}</p>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">{b.address}</p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 text-xs">
                  <a href={`tel:${b.phone}`} className="font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    <span>{b.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
