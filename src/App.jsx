import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import EnquiryModal from './components/EnquiryModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import PlacementsPage from './pages/PlacementsPage';
import AIHubPage from './pages/AIHubPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import VerifyPage from './pages/VerifyPage';

export function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryContext, setEnquiryContext] = useState("General Admission");

  const handleOpenEnquiry = (context = "General Admission") => {
    setEnquiryContext(context);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans selection:bg-indigo-500 selection:text-white w-full max-w-full overflow-x-hidden">
        {/* Sticky Glassmorphism Header */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Dynamic Route Pages */}
        <div className="flex-1 w-full max-w-full min-w-0 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses" element={<CoursesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/ui-ux-design-course-in-pune" element={<CoursesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/placements" element={<PlacementsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/gallery" element={<PlacementsPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/ai-hub" element={<AIHubPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/contact" element={<ContactPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/verify" element={<VerifyPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Modern Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppFloatingButton />

        {/* Global Admission & Syllabus Enquiry Modal */}
        <EnquiryModal
          isOpen={enquiryModalOpen}
          onClose={handleCloseEnquiry}
          initialContext={enquiryContext}
        />
      </div>
    </Router>
  );
}

export default App;