import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStackMarquee } from './components/TechStackMarquee';
import { AboutEducation } from './components/AboutEducation';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { DataPipelineCanvas } from './components/DataPipelineCanvas';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-x-hidden w-full max-w-full">
      {/* Interactive Canvas Background: Data Pipeline Network */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-full max-w-full" aria-hidden="true">
        <DataPipelineCanvas />
      </div>

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 overflow-x-hidden w-full max-w-full">
        {/* Hero Section (Split Layout with Profile Photo Placeholder) */}
        <Hero />

        {/* Core Technology Stack Ribbon below Hero */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 mb-16 relative z-20">
          <TechStackMarquee />
        </div>

        {/* 1. About & Education */}
        <AboutEducation />

        {/* 2. Technical Skills */}
        <SkillsSection />

        {/* 3. Experience & Professional Training */}
        <ExperienceTimeline />

        {/* 4. Featured Projects */}
        <ProjectsSection />

        {/* 5. Certifications & Badges */}
        <CertificationsSection />

        {/* 6. Contact Area */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
