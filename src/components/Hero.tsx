import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Copy,
  Check,
  Zap,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { FloatingTechIcons } from './FloatingTechIcons';
import { EtlPipelineWidget } from './EtlPipelineWidget';
import { useClipboard } from '../utils/useClipboard';

interface HeroProps {
  onExploreProjects?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { copiedKey: copiedField, copy: copyToClipboard } = useClipboard();
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 sm:pt-36 pb-20 lg:pb-24 flex items-center justify-center bg-tech-grid bg-radial-gradient overflow-hidden w-full max-w-full"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Floating Tech Icons (Python, SQL, PySpark, Cloud) */}
      <FloatingTechIcons />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Status Capsule */}
        <div className="flex items-center justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-cyan-300 max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="truncate font-medium">{personalInfo.statusBadge}</span>
          </div>
        </div>

        {/* Split Layout: Responsive vertical stack on mobile/tablet, 2 Columns on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 items-center w-full max-w-full">
          {/* Left Column: Personal Information */}
          <div className="w-full lg:col-span-7 flex flex-col space-y-6 min-w-0 max-w-full">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-cyan-300/90">
                {personalInfo.title}
              </p>
            </div>

            {/* Location & Quick Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 max-w-full">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800/80 text-xs font-medium text-slate-300 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </span>

              {/* Phone Badge with 1-click copy */}
              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer max-w-full"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{personalInfo.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1 shrink-0" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300 ml-1 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </button>

              {/* Email Badge with 1-click copy */}
              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-all cursor-pointer max-w-full"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-1 shrink-0" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300 ml-1 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </button>
            </div>

            {/* Objective Summary */}
            <p className="text-slate-400 font-normal text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 border-cyan-500/40 pl-4 py-1 bg-slate-900/40 rounded-r-lg break-words">
              {personalInfo.objective}
            </p>

            {/* Social Links & Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 max-w-full">
              {/* Primary CTA Button */}
              <div className="flex items-center gap-3">
                <a
                  href="#projects"
                  id="hero-view-projects-btn"
                  className="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-semibold text-sm flex items-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-md shadow-cyan-500/10"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-link"
                  className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-medium group"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-link"
                  className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800/80 hover:border-slate-700 text-slate-300 hover:text-white transition-all flex items-center gap-2 text-xs font-medium group"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image Frame with Subtle Border */}
          <div className="w-full lg:col-span-5 flex flex-col items-center justify-center min-w-0 max-w-full">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Container with softened border */}
              <div className="relative p-4 sm:p-5 rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-xl backdrop-blur-xl">
                {/* Header line on frame */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="text-slate-200 font-medium">Engineer Profile</span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">ZA-DE-2026</span>
                </div>

                {/* Main Prominent Circular / Rounded Frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-md flex flex-col items-center justify-center text-center group">
                  {/* Fallback & Loading Visualizer: rendered if image fails OR while loading */}
                  {(!imageLoaded || imageError) && (
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-900 via-slate-950 to-[#0B1120] select-none z-0">
                      {/* Background decorative cyber grid */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]" />
                      
                      {/* Central Visualizer Emblem */}
                      <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-slate-900 to-slate-950 border border-cyan-500/40 flex items-center justify-center mb-3 shadow-[0_0_25px_rgba(6,182,212,0.25)]">
                          <Terminal className="w-10 h-10 text-cyan-400" />
                        </div>
                        <span className="font-bold text-lg sm:text-xl text-white tracking-wide">
                          {personalInfo.name}
                        </span>
                        <span className="text-xs sm:text-sm text-cyan-400 font-medium mt-0.5">
                          Data Engineering Trainee
                        </span>
                        <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>ETL &amp; PySpark Pipelines</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {!imageError && (
                    <img
                      src={personalInfo.profileImage}
                      alt="Zakaria Ahmed - Data Engineer"
                      referrerPolicy="no-referrer"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                      className={`w-full h-full object-cover object-top transition-opacity duration-500 group-hover:scale-105 relative z-10 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      loading="eager"
                    />
                  )}
                </div>

                {/* Under-frame status card */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3 text-xs text-slate-400">
                  <div className="flex items-center gap-2 min-w-0">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-slate-200 font-medium truncate">Data Engineering &amp; Pipelines</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/25 text-[11px] font-medium shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Production Ready</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Execution Flow Card */}
        <div className="mt-14 w-full">
          <EtlPipelineWidget />
        </div>
      </div>
    </section>
  );
};
