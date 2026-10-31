import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import MotionButton from './motion/MotionButton';

export const ReviewsSection = ({ onOpenEnquiry }) => {
  const reviews = [
    {
      name: "Sachin Jagdale",
      role: "Alumni • Product Designer",
      rating: 5,
      date: "2 months ago",
      text: "UI UX Training in Pune was excellent with good interaction. Knowledge sharing is good. Recording facility is excellent for revising. Course was practical and informative. Anuj Sir is enthusiastic and provides crystal clear feedback."
    },
    {
      name: "Sachin Kasegaonkar",
      role: "Alumni • UX Specialist",
      rating: 5,
      date: "3 months ago",
      text: "Overall a very informative training session. UI UX Course content got well covered and also demonstrated the concept very well with live real-world apps. Thanks for such an informative and concept-clearing training session."
    },
    {
      name: "Sandip Randive",
      role: "Alumni • Senior UI Designer",
      rating: 5,
      date: "1 month ago",
      text: "It was very good experience. Manoj sir's focus on basics helped me grasp knowledge very quickly and efficiently. Sir not only focused on theory but gave different practical examples which really helped during interviews."
    },
    {
      name: "Rakesh Sawant",
      role: "Alumni • FinTech UX",
      rating: 5,
      date: "4 months ago",
      text: "Joined UIUX Design School and it was the best decision for me! Best teaching experience with live projects in FinTech and Healthcare. Thanks to Rahul sir, Harshal sir, and Harshada mam for non-stop support."
    },
    {
      name: "Likhesh Mahajan",
      role: "Alumni • UI Engineer",
      rating: 5,
      date: "2 months ago",
      text: "This institute is very good and provides 100% placement support in Pune. I am really thankful to the placement team. Offers an excellent UI/UX certification course. Highly recommended classes!"
    },
    {
      name: "Marshal Joseph",
      role: "Alumni • UI Specialist",
      rating: 5,
      date: "5 months ago",
      text: "It was a great experience to get training from Manoj sir. He elaborated each and every topic in very simple manner so that anyone from non-tech background can understand easily."
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-slate-50/70 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Verified Alumni Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Loved By 3,000+ Students Across India
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Rated 4.9/5 stars based on 1,155+ authentic reviews across Google, Trustpilot, and CourseReport.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="mt-6 inline-flex items-center gap-3 p-2.5 px-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <img src="/downloaded/google.svg" alt="Google Reviews" className="h-5 w-auto" />
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-900">4.9 Star Rating</span>
            <span className="text-xs text-slate-500 font-medium">({schoolInfo.reviewsCount} Reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {rev.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
