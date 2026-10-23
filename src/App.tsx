import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStackMarquee } from './components/TechStackMarquee';
import { DataPipelineCanvas } from './components/DataPipelineCanvas';

const AboutEducation = lazy(() =>
  import('./components/AboutEducation').then((m) => ({ default: m.AboutEducation }))
);
const SkillsSection = lazy(() =>
  import('./components/SkillsSection').then((m) => ({ default: m.SkillsSection }))
);
const ExperienceTimeline = lazy(() =>
  import('./components/ExperienceTimeline').then((m) => ({ default: m.ExperienceTimeline }))
);
const ProjectsSection = lazy(() =>
  import('./components/ProjectsSection').then((m) => ({ default: m.ProjectsSection }))
);
const CertificationsSection = lazy(() =>
  import('./components/CertificationsSection').then((m) => ({ default: m.CertificationsSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);
const ResumeModal = lazy(() =>
  import('./components/ResumeModal').then((m) => ({ default: m.ResumeModal }))
);

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 relative overflow-x-hidden w-full max-w-full">
      {/* Layered ambient radial background glows */}
      <div className="fixed inset-0 pointer-events-none z-0 w-full max-w-full" aria-hidden="true">
        {/* Primary background glow: cyan */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(22,194,201,0.06)_0%,transparent_70%)]" />
        {/* Secondary glow: indigo */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.04)_0%,transparent_70%)]" />
        {/* Bottom warm glow */}
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(22,194,201,0.03)_0%,transparent_70%)]" />
      </div>

      {/* Interactive Canvas Background: Data Pipeline Network */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-full max-w-full" aria-hidden="true">
        <DataPipelineCanvas />
      </div>

      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 overflow-x-hidden w-full max-w-full">
        {/* Hero Section (Split Layout with Profile Photo) */}
        <Hero />

        {/* Core Technology Stack Ribbon below Hero */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 mb-16 relative z-20">
          <TechStackMarquee />
        </div>

        {/* Below-the-fold sections lazy-loaded for near-zero initial TBT */}
        <Suspense fallback={<div className="min-h-[400px]" aria-hidden="true" />}>
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
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Interactive Resume Modal (Only loaded when opened) */}
      {isResumeModalOpen && (
        <Suspense fallback={null}>
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
