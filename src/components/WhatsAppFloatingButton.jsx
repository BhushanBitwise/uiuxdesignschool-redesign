import React from 'react';
import { MessageCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const WhatsAppFloatingButton = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Admissions
      </span>

      <a
        href={schoolInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat with UI UX Design School Counselor on WhatsApp"
      >
        {/* Pulse ping */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 animate-ping -z-10" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
      </a>
    </aside>
  );
};

export default WhatsAppFloatingButton;
