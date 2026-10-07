import React, { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        id="resume-modal-container"
        className="relative w-full max-w-4xl h-[92vh] sm:h-[88vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-label="Resume / CV"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-slate-800 bg-slate-950/95 shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5 font-mono text-xs text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold tracking-wider text-white">
              RESUME / CV
            </span>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800/80">
              PDF
            </span>
          </div>

          {/* Essential Top Header Actions: Download, Open in New Tab, Close */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Direct Download Button */}
            <a
              id="resume-download-btn"
              href="/resume.pdf"
              download="Zakaria_Ahmed_CV.pdf"
              className="px-3 sm:px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 text-slate-950 text-xs font-bold font-mono flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              title="Download Zakaria_Ahmed_CV.pdf"
            >
              <Download className="w-3.5 h-3.5 text-slate-950" />
              <span>Download</span>
            </a>

            {/* Direct Open in New Tab Button */}
            <a
              id="resume-open-btn"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-1.5 transition-colors border border-slate-700/80 cursor-pointer"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Permanent Document View */}
        <div className="flex-1 w-full overflow-y-auto bg-slate-950 p-3 sm:p-6 custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* PAGE 1 */}
            <div className="bg-white text-slate-900 p-6 sm:p-10 rounded-lg shadow-xl font-sans">
              {/* Header */}
              <div className="border-b border-slate-300 pb-4 mb-5">
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 mb-1">
                  {personalInfo.name}
                </h1>
                <p className="text-xs font-bold text-slate-700 tracking-wider uppercase mb-2 font-mono">
                  Data Engineering Trainee | CS Student
                </p>
                <p className="text-xs text-slate-700 mb-1">
                  {personalInfo.location} | {personalInfo.phone} | {personalInfo.email}
                </p>
                <p className="text-xs text-sky-700 font-mono">
                  GitHub:{' '}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {personalInfo.github}
                  </a>{' '}
                  | LinkedIn:{' '}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {personalInfo.linkedin}
                  </a>
                </p>
              </div>

              {/* Objective */}
              <div className="mb-5">
                <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wide mb-1.5">
                  Objective
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Driven 3rd-year Computer Science student at New Mansoura University specializing in Data Engineering. Possesses a solid foundation in Python, SQL, PySpark, relational database design, and cloud infrastructure. Currently building advanced hands-on data skills through the Digital Egypt Pioneers Initiative (DEPI) Data Engineering track and NTI Cloud Computing training. Eager to leverage strong problem-solving skills and pipeline development expertise to contribute to scalable data solutions.
                </p>
              </div>

              {/* Education */}
              <div className="mb-5">
                <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wide mb-1.5">
                  Education
                </h2>
                <div className="text-xs font-semibold text-slate-900 mb-1">
                  Bachelor of Computer Science |{' '}
                  <span className="italic font-normal text-slate-700">
                    New Mansoura University, Egypt
                  </span>{' '}
                  <span className="font-normal text-slate-600">
                    September 2023 – Present
                  </span>
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                  <li>Current Status: Completing 3rd Year.</li>
                  <li>
                    Relevant Coursework: Database Management Systems (DBMS), Data Structures &amp; Algorithms, Object-Oriented Programming (OOP), Operating Systems.
                  </li>
                </ul>
              </div>

              {/* Technical Skills */}
              <div className="mb-5">
                <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wide border-b border-slate-900 pb-1 mb-2">
                  Technical Skills
                </h2>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1.5">
                  <li>
                    <strong className="text-slate-900">Data Engineering &amp; Databases:</strong>{' '}
                    SQL (Relational Database Design, Query Optimization), PySpark, Data Pipeline Concepts (ETL/ELT), Database Management Systems (SQL Server, MySQL).
                  </li>
                  <li>
                    <strong className="text-slate-900">Programming Languages:</strong> Python, SQL, C#, C++.
                  </li>
                  <li>
                    <strong className="text-slate-900">Cloud &amp; DevOps Fundamentals:</strong>{' '}
                    Cloud Computing Architecture (NTI), Linux Fundamentals, Git &amp; GitHub Version Control.
                  </li>
                  <li>
                    <strong className="text-slate-900">Tools &amp; Environments:</strong> VS Code, CLion, Jupyter Notebook, Anaconda, Git, GitHub.
                  </li>
                  <li>
                    <strong className="text-slate-900">Core Competencies:</strong> Problem Solving, Competitive Programming (ICPC NMU Community), System Architecture Logic.
                  </li>
                </ul>
              </div>

              {/* Experience & Professional Training */}
              <div>
                <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wide border-b border-slate-900 pb-1 mb-2">
                  Experience &amp; Professional Training
                </h2>
                <div className="text-xs font-semibold text-slate-900">
                  Data Engineering Trainee |{' '}
                  <span className="font-normal text-slate-700">
                    Digital Egypt Pioneers Initiative (DEPI)
                  </span>
                </div>
                <div className="text-[11px] italic text-slate-500 mb-1.5">
                  May 2026 – Present
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                  <li>
                    Enrolled in an intensive, practical training program focusing on end-to-end Data Engineering workflows.
                  </li>
                  <li>
                    Developing skills in building data pipelines, handling structured data, database modeling, and big data execution.
                  </li>
                  <li>
                    Applying Python, SQL, and data transformation techniques to solve practical real-world data problems.
                  </li>
                </ul>
              </div>

              <div className="text-right text-[10px] text-slate-400 pt-4 font-mono">
                Page 1 of 2
              </div>
            </div>

            {/* PAGE 2 */}
            <div className="bg-white text-slate-900 p-6 sm:p-10 rounded-lg shadow-xl font-sans">
              {/* Experience Continued */}
              <div className="mb-5">
                <div className="text-xs font-semibold text-slate-900">
                  Cloud Computing Trainee |{' '}
                  <span className="font-normal text-slate-700">
                    National Telecommunication Institute (NTI)
                  </span>
                </div>
                <div className="text-[11px] italic text-slate-500 mb-1.5">
                  2026
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                  <li>
                    Training in core cloud computing concepts, cloud infrastructure services (IaaS, PaaS, SaaS), and deployment models.
                  </li>
                  <li>
                    Gaining hands-on knowledge of cloud network management, security basics, and scalable infrastructure setups to support data workloads.
                  </li>
                </ul>
              </div>

              {/* Projects */}
              <div className="mb-5">
                <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wide border-b border-slate-900 pb-1 mb-2">
                  Projects
                </h2>
                <div className="text-xs font-semibold text-slate-900">
                  Integrated Cafe Management System (Database &amp; Backend Lead)
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1 mt-1 mb-3">
                  <li>
                    Architected a desktop management application handling orders, inventory control, and operational metrics.
                  </li>
                  <li>
                    Designed relational database schemas in SQL to support persistent storage and real-time transaction tracking.
                  </li>
                  <li>
                    Implemented backend logic in C# for data validation, inventory updates, and analytical reporting.
                  </li>
                </ul>

                <div className="text-xs font-semibold text-slate-900">
                  Data Processing &amp; ETL Lab Projects (DataCamp / IBM Data Engineering Roadmap)
                </div>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1 mt-1">
                  <li>
                    Built data processing scripts using Python (Pandas/PySpark) and SQL to extract, clean, and transform raw datasets.
                  </li>
                  <li>
                    Designed modular query routines to model analytical tables and generate structured reports.
                  </li>
                </ul>
              </div>

              {/* Certifications & Self-Study */}
              <div className="mb-5">
                <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wide border-b border-slate-900 pb-1 mb-2">
                  Certifications &amp; Self-Study
                </h2>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                  <li>
                    Digital Egypt Pioneers Initiative (DEPI): Data Engineering Professional Track (In Progress).
                  </li>
                  <li>
                    NTI Training Certificate: Cloud Computing Trainee Track{' '}
                    <a
                      href="https://lnkd.in/p/eTQWE5SV"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-800 hover:underline font-medium"
                    >
                      (Verify Credential)
                    </a>
                  </li>
                  <li>
                    IBM Data Engineering Professional Certificate (In Progress).
                  </li>
                  <li>
                    DataCamp: Data Engineer in Python Track (In Progress).
                  </li>
                </ul>
              </div>

              {/* Languages */}
              <div className="mb-5">
                <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wide border-b border-slate-900 pb-1 mb-2">
                  Languages
                </h2>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                  <li>
                    <strong className="text-slate-900">Arabic:</strong> Native.
                  </li>
                  <li>
                    <strong className="text-slate-900">English:</strong> Professional Working Proficiency.
                  </li>
                </ul>
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="text-sm font-bold text-slate-950 uppercase tracking-wide border-b border-slate-900 pb-1 mb-2">
                  Additional Information
                </h2>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1">
                  <li>Fast Learner</li>
                  <li>Problem Solver</li>
                  <li>Team Player</li>
                </ul>
              </div>

              <div className="text-right text-[10px] text-slate-400 pt-4 font-mono">
                Page 2 of 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
