import React from 'react';
import Hero from '../components/Hero';
import RecruiterMarquee from '../components/RecruiterMarquee';
import CoursesSection from '../components/CoursesSection';
import CurriculumAccordion from '../components/CurriculumAccordion';
import AILearningHub from '../components/AILearningHub';
import PlacedStudents from '../components/PlacedStudents';
import ClientProjects from '../components/ClientProjects';
import IITBombaySection from '../components/IITBombaySection';
import StudioShowcase from '../components/StudioShowcase';
import CertificationsSection from '../components/CertificationsSection';
import ReviewsSection from '../components/ReviewsSection';
import BranchesSection from '../components/BranchesSection';
import FAQSection from '../components/FAQSection';

export const HomePage = ({ onOpenEnquiry }) => {
  return (
    <main>
      <Hero onOpenEnquiry={onOpenEnquiry} />
      <RecruiterMarquee />
      <CoursesSection onOpenEnquiry={onOpenEnquiry} />
      <CurriculumAccordion onOpenEnquiry={onOpenEnquiry} />
      <AILearningHub onOpenEnquiry={onOpenEnquiry} />
      <PlacedStudents onOpenEnquiry={onOpenEnquiry} />
      <StudioShowcase onOpenEnquiry={onOpenEnquiry} />
      <ClientProjects onOpenEnquiry={onOpenEnquiry} />
      <IITBombaySection onOpenEnquiry={onOpenEnquiry} />
      <CertificationsSection onOpenEnquiry={onOpenEnquiry} />
      <ReviewsSection onOpenEnquiry={onOpenEnquiry} />
      <BranchesSection onOpenEnquiry={onOpenEnquiry} />
      <FAQSection onOpenEnquiry={onOpenEnquiry} />
    </main>
  );
};

export default HomePage;
