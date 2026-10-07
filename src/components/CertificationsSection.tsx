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
    <div className="w-full h-full perspective-1000 min-h-[460px]">
      <div
        className={`w-full h-full transition-transform duration-700 preserve-3d relative ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* FRONT SIDE */}
        <div className="h-full p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800/60 hover:border-slate-700/80 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition-all flex flex-col justify-between group backface-hidden">
          <div>
            {/* Top status bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                  <Award className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200 font-semibold">
                  {cert.issuer}
                </span>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 shrink-0 ${
                  isInProgress
                    ? 'bg-amber-500/10 border-amber-500/20 text-amber-300'
                    : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                }`}
              >
                {isInProgress ? (
                  <>
                    <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                    <span>In Progress</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Completed &amp; Verified</span>
                  </>
                )}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
              {cert.title}
            </h3>

            <div className="text-xs text-slate-400 mb-5 flex items-center gap-2">
              <span>Year: {cert.date}</span>
              <span>•</span>
              <span className="text-cyan-400">Professional Engineering Curriculum</span>
            </div>

            {/* Skills Learned Badges with Full Visible Text (No truncation) */}
            <div className="space-y-2.5">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                Core Topics Validated:
              </span>
              <div className="flex flex-col gap-2">
                {cert.skillsLearned.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-start gap-2.5 px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs sm:text-sm text-slate-300 leading-relaxed group-hover:border-slate-700/60 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="break-words font-normal">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom meta / Actions */}
          <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
            {hasCertificateBack ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsFlipped(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/25 hover:border-cyan-400/50 transition-all cursor-pointer shadow-sm group-hover:scale-105"
                  title="Flip card to view certificate"
                >
                  <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Flip to View 📜</span>
                </button>
                <a
                  href={cert.credentialUrl || 'https://lnkd.in/p/eTQWE5SV'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors font-medium ml-auto"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </>
            ) : (
              <>
                <span className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-500" />
                  <span>Official Program Credential</span>
                </span>
                <a
                  href={cert.credentialUrl || 'https://www.linkedin.com/in/zakaria-ahmed-de'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors font-medium"
                >
                  <span>View on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </>
            )}
          </div>
        </div>

        {/* BACK SIDE (Specifically for certificate cards like NTI) */}
        {hasCertificateBack && (
          <div className="absolute inset-0 w-full h-full p-5 sm:p-6 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl flex flex-col justify-between backface-hidden rotate-y-180 overflow-hidden">
            {/* Back Header */}
            <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-200 truncate">
                  NTI Cloud Certificate
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all cursor-pointer shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                <span>Flip Back ↩️</span>
              </button>
            </div>

            {/* Certificate Image Container */}
            <div className="flex-1 flex items-center justify-center overflow-hidden my-3">
              <img
                src="/certificates/nti-cloud.png"
                alt="NTI Cloud Computing Certificate - Zakaria Ahmed"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/certificates/nti-cloud.svg';
                }}
                className="w-full h-full object-contain rounded-lg"
                loading="eager"
              />
            </div>

            {/* Back Footer */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 text-xs shrink-0">
              <span className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Score: 84% (120 Hours)</span>
              </span>

              <a
                href="https://lnkd.in/p/eTQWE5SV"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 shrink-0"
              >
                <span>Verify on LinkedIn</span>
                <ExternalLink className="w-3 h-3 stroke-[2.5]" />
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
    <section id="certifications" className="py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      {/* Background glow wrapped to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 blur-[130px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 max-w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications &amp; Credentials
          </h2>
          <p className="text-slate-400 font-normal text-sm sm:text-base mt-2 max-w-2xl">
            Verified credentials in modern Data Engineering tracks, cloud infrastructure, and distributed analytics from national institutes and global data platforms.
          </p>
        </div>

        {/* Certifications Grid with 3D Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-full">
          {certifications.map((cert) => (
            <CertificationFlipCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};
