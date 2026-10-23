import React, { useState } from 'react';
import {
  MapPin,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { formatBoldText } from '../utils/formatText';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(experiences[0].id);

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full" aria-hidden="true">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/3 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-cyan-500/3 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 max-w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience &amp; Professional Training
          </h2>
          <p className="text-slate-400 font-normal text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on technical immersion through Egypt&apos;s leading national technology initiatives (DEPI &amp; NTI), focusing on production data pipelines, cloud architecture, and database logic.
          </p>
          <div className="section-glow-line w-16 mt-4" />
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative border-l-2 border-[#1A2236]/60 ml-4 md:ml-32 space-y-12 max-w-full">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = exp.status === 'Current Program';

            return (
              <div key={exp.id} className="relative pl-6 md:pl-10 group">
                {/* Date indicator for desktop */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-semibold text-cyan-400/80 font-mono-code">
                    {exp.period}
                  </span>
                  <div className="text-xs text-slate-400 font-mono-code">{exp.type}</div>
                </div>

                {/* Timeline node bubble */}
                <div
                  className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#0B0F17] border-cyan-400/60 shadow-md shadow-cyan-500/15'
                      : 'bg-[#0F1520] border-[#1A2236] group-hover:border-slate-600'
                  }`}
                >
                  {isCurrent ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
                  )}
                </div>

                {/* Main Card */}
                <div
                  onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-xl shadow-xl shadow-black/20 hover-lift ${
                    isExpanded
                      ? 'bg-[#0F1520]/90 border-[#1A2236] shadow-2xl shadow-black/30'
                      : 'bg-[#0F1520]/70 border-[#1A2236]/60 hover:border-cyan-500/20 hover:bg-[#0F1520]/85'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="md:hidden text-xs text-cyan-400/80 font-semibold font-mono-code">
                          {exp.period} •
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#141B2A]/80 text-slate-400 font-medium font-mono-code">
                          {exp.type}
                        </span>
                        {isCurrent && (
                          <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-500/8 border border-emerald-500/15 text-emerald-400/90 flex items-center gap-1.5 font-mono-code">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Active Now
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm sm:text-base font-medium text-cyan-400/80 mt-0.5">
                        {exp.organization}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 pt-1 sm:pt-0">
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                      <ChevronRight
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          isExpanded ? 'rotate-90 text-cyan-400/80' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Summary with Bold Terms */}
                  <p className="text-slate-400 font-normal text-sm leading-relaxed mb-4">
                    {formatBoldText(exp.description)}
                  </p>

                  {/* Expandable Key Responsibilities & Achievements */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#1A2236]/60 space-y-3">
                      <div className="text-xs text-slate-400 font-semibold mb-2 font-mono-code uppercase tracking-wider">
                        Key Responsibilities &amp; Technical Execution:
                      </div>
                      {exp.keyResponsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400/80 mt-0.5 shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {formatBoldText(resp)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies used pill row */}
                  <div className="mt-5 pt-3 border-t border-[#1A2236]/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 font-mono-code">Tech:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-[#080C14]/80 border border-[#1A2236]/60 text-xs text-slate-400 font-mono-code"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
