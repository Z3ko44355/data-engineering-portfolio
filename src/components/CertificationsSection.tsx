import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck,
  Building,
  RotateCw,
  RotateCcw,
} from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { CertificationItem } from '../types';

interface CertificationFlipCardProps {
  cert: CertificationItem;
}

const CertificationFlipCard: React.FC<CertificationFlipCardProps> = ({ cert }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const isInProgress = cert.status === 'In Progress';
  const hasCertificateBack = Boolean(cert.certificateImage);

  return (
    <div className="flip-card-container w-full min-h-[360px] sm:min-h-[410px] h-full">
      <div className={`flip-card-inner w-full h-full min-h-[360px] sm:min-h-[410px] ${isFlipped ? 'is-flipped' : ''}`}>
        {/* FRONT SIDE */}
        <div className="flip-card-front h-full p-5 sm:p-7 rounded-2xl bg-[#0F1520]/80 border border-[#1A2236]/80 hover:border-cyan-500/30 shadow-xl shadow-black/20 md:backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group hover-lift card-shine">
          <div>
            {/* Top status bar */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-4">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#141B2A] border border-[#1A2236] flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200 font-semibold tracking-tight leading-snug">
                  {cert.issuer}
                </span>
              </div>

              {/* Status Badge */}
              <span
                className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 shrink-0 ${
                  isInProgress
                    ? 'bg-amber-500/10 border-amber-500/20 text-amber-300'
                    : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                }`}
              >
                {isInProgress ? (
                  <>
                    <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
                    <span className="font-mono text-[10px] sm:text-[11px]">In Progress</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-mono text-[10px] sm:text-[11px]">Completed &amp; Verified</span>
                  </>
                )}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200 mb-2 leading-snug">
              {cert.title}
            </h3>

            {/* Subtitle with year and curriculum */}
            <div className="text-xs text-slate-400 mb-4 sm:mb-5 flex items-center gap-2 font-mono-code flex-wrap">
              <span>Year: {cert.date}</span>
              <span className="text-slate-400">•</span>
              <span className="text-cyan-400/80">Professional Engineering Curriculum</span>
            </div>

            {/* Skills Learned Badges (2x2 Grid for balanced wider card) */}
            <div className="space-y-2.5">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block font-mono-code">
                Core Topics Validated:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {cert.skillsLearned.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0B0F17]/80 border border-[#1A2236]/70 text-xs sm:text-[13px] text-slate-300 leading-snug group-hover:border-[#1A2236] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-normal break-words" title={skill}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom meta / Actions */}
          <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#1A2236]/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
            {hasCertificateBack ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsFlipped(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/25 hover:border-cyan-400/40 transition-all duration-200 cursor-pointer shadow-sm shadow-cyan-500/10"
                  title="Flip card to view certificate"
                >
                  <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Flip to View 📜</span>
                </button>
                <a
                  href={cert.credentialUrl || 'https://lnkd.in/p/eTQWE5SV'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify ${cert.title} credential on LinkedIn`}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors font-mono font-medium text-xs ml-auto"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </>
            ) : (
              <>
                <span className="flex items-center gap-1.5 font-mono text-slate-400 text-[11px]">
                  <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Official Program Credential</span>
                </span>
                <a
                  href={cert.credentialUrl || 'https://www.linkedin.com/in/zakaria-ahmed-de'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} credential on LinkedIn`}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors font-mono font-medium text-xs"
                >
                  <span>View on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </>
            )}
          </div>
        </div>

        {/* BACK SIDE (Optimized Landscape Aspect Ratio) */}
        {hasCertificateBack && (
          <div className="flip-card-back w-full h-full p-5 sm:p-6 rounded-2xl bg-[#0F1520] border border-cyan-500/30 shadow-2xl shadow-black/40 md:backdrop-blur-xl flex flex-col justify-between overflow-hidden">
            {/* Back Header */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#1A2236]/80 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white truncate font-mono-code">
                  NTI Cloud Computing Certificate
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#141B2A] hover:bg-[#1A2236] text-slate-200 hover:text-white border border-[#1A2236] transition-all duration-200 cursor-pointer shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Flip Back ↩️</span>
              </button>
            </div>

            {/* Certificate Image Container with aspect-[16/10] landscape ratio */}
            <div className="flex-1 flex items-center justify-center overflow-hidden my-3 w-full">
              <div className="w-full aspect-[16/10] max-h-[250px] sm:max-h-[270px] rounded-xl overflow-hidden border border-[#1A2236]/80 bg-[#0B0F17] flex items-center justify-center p-1.5 shadow-inner">
                <img
                  src={cert.certificateImage || '/certificates/nti-cloud.svg'}
                  alt="NTI Cloud Computing Certificate - Zakaria Ahmed"
                  width="640"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/certificates/nti-cloud.svg';
                  }}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Back Footer */}
            <div className="pt-3 border-t border-[#1A2236]/80 flex items-center justify-between gap-2 text-xs shrink-0">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5 truncate font-mono-code">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">Score: 84% (120 Hours Intensive)</span>
              </span>

              <a
                href="https://lnkd.in/p/eTQWE5SV"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify NTI Cloud Computing Certificate on LinkedIn"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-[#0B0F17] transition-all duration-200 shadow-md shadow-cyan-500/15 shrink-0 active:scale-95 cursor-pointer"
              >
                <span>Verify on LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/3 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-indigo-500/3 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered max-w-5xl to match grid) */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/8 border border-cyan-500/15 text-xs font-mono text-cyan-300/90 mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREDENTIALS &amp; SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications &amp; Credentials
          </h2>
          <p className="text-slate-400 font-normal text-sm sm:text-base mt-2 max-w-2xl">
            Verified credentials in modern Data Engineering tracks, cloud infrastructure, and distributed analytics from national institutes and global data platforms.
          </p>
          <div className="section-glow-line w-16 mt-4" />
        </div>

        {/* Certifications Grid: 2x2 Grid mirroring Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full">
          {certifications.map((cert) => (
            <CertificationFlipCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};
