import React from 'react';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Building2,
  Cpu,
  Brain,
  CheckCircle2,
} from 'lucide-react';
import { educationInfo } from '../data/portfolioData';
import { DataPipelineGraphic } from './DataPipelineGraphic';

export const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-24 relative overflow-hidden w-full max-w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About &amp; Education
          </h2>
          <p className="text-slate-400 font-normal text-sm sm:text-base mt-2 max-w-2xl">
            Cultivating rigorous foundational computer science principles, database internals, and high-performance algorithms at New Mansoura University.
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full max-w-full">
          {/* Main University & Degree Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/60 shadow-xl shadow-slate-950/40 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between max-w-full">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300">
                  <GraduationCap className="w-4 h-4 text-cyan-400" />
                  <span>{educationInfo.currentStanding}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{educationInfo.period}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {educationInfo.degree}
              </h3>

              <div className="flex items-center gap-2 text-base font-medium text-cyan-400 mb-4">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{educationInfo.university}</span>
                <span className="text-slate-400 text-sm font-normal">• {educationInfo.location}</span>
              </div>

              <p className="text-slate-300 font-normal text-sm sm:text-base leading-relaxed mb-6">
                {educationInfo.overview}
              </p>

              {/* Key Academic Pillars */}
              <div className="space-y-3 pt-2">
                {educationInfo.academicHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Banner */}
            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Brain className="w-4 h-4 text-cyan-400" />
                <span>ICPC NMU Community Problem Solver</span>
              </span>
              <span className="text-emerald-400 font-medium">Active Enrollment</span>
            </div>
          </div>

          {/* Right Column: Relevant Coursework */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/60 shadow-xl shadow-slate-950/40 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Relevant Coursework</h3>
              </div>
              <p className="text-xs text-slate-400 font-normal mb-6 leading-relaxed">
                Direct academic competencies mapped to enterprise database systems, algorithmic efficiency, and concurrent execution:
              </p>

              {/* Coursework Cards - Course names only without code numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {educationInfo.coursework.map((course) => (
                  <div
                    key={course.name}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/60 hover:border-slate-700/80 hover:bg-slate-900/80 transition-all group"
                  >
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {course.name}
                    </h4>
                    <span className="text-xs text-slate-400 mt-1 block">
                      {course.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Philosophy Card */}
            <div className="mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs text-slate-300 space-y-1.5 shadow-inner">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Core Engineering Mindset</span>
              </div>
              <p className="text-[12px] text-slate-400 font-normal leading-relaxed">
                Combining theoretical CS rigor (asymptotic analysis, indexing structures like B-Trees and Hash indexes) with hands-on big data frameworks (PySpark, SQL Server).
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Data Pipeline Graphic */}
        <DataPipelineGraphic />
      </div>
    </section>
  );
};
