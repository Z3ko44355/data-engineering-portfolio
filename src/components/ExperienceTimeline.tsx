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
    <section id="experience" className="py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none w-full max-w-full" aria-hidden="true">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 blur-[140px] rounded-full" />
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
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative border-l-2 border-slate-800/60 ml-4 md:ml-32 space-y-12 max-w-full">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = exp.status === 'Current Program';

            return (
              <div key={exp.id} className="relative pl-6 md:pl-10 group">
                {/* Date indicator for desktop positioned to the left of the timeline */}
                <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                  <span className="text-xs font-semibold text-cyan-400">
                    {exp.period}
                  </span>
                  <div className="text-xs text-slate-400">{exp.type}</div>
                </div>

                {/* Timeline node bubble */}
                <div
                  className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCurrent
                      ? 'bg-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border-slate-700 group-hover:border-slate-600'
                  }`}
                >
                  {isCurrent ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  )}
                </div>

                {/* Main Card */}
                <div
                  onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer backdrop-blur-xl shadow-xl shadow-slate-950/40 ${
                    isExpanded
                      ? 'bg-slate-900/90 border-slate-700/80 shadow-2xl'
                      : 'bg-slate-900/70 border-slate-800/60 hover:border-slate-700/70 hover:bg-slate-900/85'
                  }`}
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="md:hidden text-xs text-cyan-400 font-semibold">
                          {exp.period} •
                        </span>
                        <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 font-medium">
                          {exp.type}
                        </span>
                        {isCurrent && (
                          <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Active Now
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm sm:text-base font-medium text-cyan-400 mt-0.5">
                        {exp.organization}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 pt-1 sm:pt-0">
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                      <ChevronRight
                        className={`w-5 h-5 text-slate-400 transition-transform ${
                          isExpanded ? 'rotate-90 text-cyan-400' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Summary with Bold Terms */}
                  <p className="text-slate-300 font-normal text-sm leading-relaxed mb-4">
                    {formatBoldText(exp.description)}
                  </p>

                  {/* Expandable Key Responsibilities & Achievements */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-800/60 space-y-3 animate-in fade-in duration-200">
                      <div className="text-xs text-slate-300 font-semibold mb-2">
                        Key Responsibilities &amp; Technical Execution:
                      </div>
                      {exp.keyResponsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {formatBoldText(resp)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies used pill row */}
                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400">Tech:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-slate-800/60 text-xs text-slate-300"
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
