import React from 'react';

interface TechItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

const TECH_TOOLS: TechItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Language',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.922 2C6.91 2 7.218 4.17 7.218 4.17l.006 2.25h4.786v.678H5.244S2 6.726 2 11.758c0 5.033 2.825 4.86 2.825 4.86h1.687v-2.378s-.09-2.826 2.766-2.826h4.757s2.673.044 2.673-2.628V4.67S17.07 2 11.922 2zm-2.6 1.487a.936.936 0 110 1.872.936.936 0 010-1.872z"
          fill="#3776AB"
        />
        <path
          d="M12.078 22c5.012 0 4.704-2.17 4.704-2.17l-.006-2.25h-4.786v-.678h6.768s3.244.372 3.244-4.66c0-5.033-2.825-4.86-2.825-4.86h-1.687v2.378s.09 2.826-2.766 2.826H9.974s-2.673-.044-2.673 2.628v4.116S6.93 22 12.078 22zm2.6-1.487a.936.936 0 110-1.872.936.936 0 010 1.872z"
          fill="#FFD43B"
        />
      </svg>
    ),
  },
  {
    id: 'pyspark',
    name: 'PySpark',
    category: 'Big Data',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        {/* Spark Star Logo in Vibrant Flame Orange */}
        <path
          d="M12 2l2.4 6.6 7 1.1-5.2 4.8 1.4 6.9L12 18l-5.6 3.4 1.4-6.9-5.2-4.8 7-1.1L12 2z"
          fill="#E25A1C"
        />
        <path
          d="M12 5.5l1.6 4.4 4.7.7-3.5 3.2.9 4.6L12 16.2l-3.7 2.2.9-4.6-3.5-3.2 4.7-.7L12 5.5z"
          fill="#FF8C42"
        />
      </svg>
    ),
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Databases',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#16C2C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: 'airflow',
    name: 'Apache Airflow',
    category: 'Orchestration',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        {/* Airflow Teal / Cyan Pinwheel */}
        <circle cx="12" cy="12" r="2" fill="#16C2C9" />
        <path
          d="M12 2c0 3.5-2.5 6-6 6"
          stroke="#017CEE"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M22 12c-3.5 0-6-2.5-6-6"
          stroke="#16C2C9"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M12 22c0-3.5 2.5-6 6-6"
          stroke="#00C7D4"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M2 12c3.5 0 6 2.5 6 6"
          stroke="#017CEE"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'RDBMS',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        {/* PostgreSQL Elephant head profile */}
        <path
          d="M19.5 8c-.6-2.4-2.5-4-5.5-4-3.5 0-5.8 2.2-6.5 5.5-.4 2-.1 4.5.8 6.5.7 1.5 1.7 2.5 2.7 3.5.5.5 1 .5 1.5 0 .5-.5.5-1.5 0-2-1-1-1.5-2-1.5-3.5 0-2.5 1.5-4 4-4 2 0 3 1 3.5 2.5.5 1.5.5 3-.5 4.5-.5.7-.3 1.5.3 2 .6.5 1.5.3 2-.3 1.5-2 1.5-4.5 1-6.5-.4-1.6-1-2.9-1.8-4.2z"
          fill="#336791"
        />
        <circle cx="13" cy="8.5" r="1" fill="#FFFFFF" />
        <path
          d="M7 11.5c-1.5 1.2-2.5 3-2.5 5 0 2 1.5 3.5 3.5 3.5"
          stroke="#336791"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Version Control',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        {/* Git Orange Diamond Logo */}
        <rect
          x="12"
          y="2"
          width="14"
          height="14"
          rx="2"
          transform="rotate(45 12 2)"
          fill="#F05032"
        />
        {/* Git branch and commit dots */}
        <circle cx="9" cy="12" r="1.4" fill="#FFFFFF" />
        <circle cx="15" cy="9" r="1.4" fill="#FFFFFF" />
        <circle cx="15" cy="15" r="1.4" fill="#FFFFFF" />
        <path
          d="M9 12h3.5a2.5 2.5 0 002.5-2.5V9M12.5 12a2.5 2.5 0 012.5 2.5V15"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'OS',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        {/* Tux Penguin Body */}
        <ellipse cx="12" cy="12.5" rx="6" ry="7" fill="#1E293B" />
        {/* Tux White Belly */}
        <ellipse cx="12" cy="13.5" rx="4" ry="5" fill="#F8FAFC" />
        {/* Eyes */}
        <ellipse cx="10.5" cy="8.5" rx="1.2" ry="1.5" fill="#FFFFFF" />
        <ellipse cx="13.5" cy="8.5" rx="1.2" ry="1.5" fill="#FFFFFF" />
        <circle cx="10.8" cy="8.5" r="0.6" fill="#0F172A" />
        <circle cx="13.2" cy="8.5" r="0.6" fill="#0F172A" />
        {/* Beak */}
        <path d="M10.5 10h3l-1.5 2z" fill="#F59E0B" />
        {/* Feet */}
        <ellipse cx="8.5" cy="19.5" rx="2.5" ry="1" fill="#F59E0B" />
        <ellipse cx="15.5" cy="19.5" rx="2.5" ry="1" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    category: 'Databases',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" fill="#0078D4" opacity="0.2" />
        <path d="M4 8h16M4 12h16M4 16h16" stroke="#008AD7" strokeWidth="1.5" />
        <ellipse cx="12" cy="5" rx="8" ry="2" fill="#008AD7" />
        <path d="M4 5v14c0 1.1 3.58 2 8 2s8-.9 8-2V5" stroke="#00BCF2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Containers',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        {/* Docker Blue Whale & Cargo */}
        <path
          d="M2 13.5c1-1 3-1 4.5-.5 1.5.5 3.5.5 5 0 2-.7 3.5-.7 5.5 0 1.5.5 3 .5 4 0 .5 2-1 4.5-3 5.5-2.5 1.2-7 1.5-10 0-2.5-1.2-4.5-3-6-5z"
          fill="#2496ED"
        />
        <rect x="7" y="9.5" width="2" height="2" fill="#2496ED" rx="0.3" />
        <rect x="9.5" y="9.5" width="2" height="2" fill="#2496ED" rx="0.3" />
        <rect x="12" y="9.5" width="2" height="2" fill="#2496ED" rx="0.3" />
        <rect x="9.5" y="7" width="2" height="2" fill="#2496ED" rx="0.3" />
        <rect x="12" y="7" width="2" height="2" fill="#2496ED" rx="0.3" />
        <circle cx="19" cy="14" r="0.7" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 'etl',
    name: 'ETL / Pipelines',
    category: 'Pipelines',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h7M17 6h3M4 18h3M11 18h9M8 12h8" />
        <circle cx="14" cy="6" r="2" fill="#10B981" />
        <circle cx="9" cy="18" r="2" fill="#10B981" />
        <circle cx="17" cy="12" r="2" fill="#10B981" />
      </svg>
    ),
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'IDE',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2.5l4 2v15l-4 2-11-9.5 11-9.5z" fill="#0065A9" />
        <path d="M17.5 2.5l-9.5 8.2 3.8 2.8 5.7-5V2.5z" fill="#007ACC" />
        <path d="M17.5 21.5l-9.5-8.2 3.8-2.8 5.7 5v6z" fill="#1F9CF0" />
        <path d="M2.5 7.8l4.2 3.2L2.5 14.2l1.2 1.6 6-4.8-6-4.8-1.2 1.6z" fill="#0065A9" />
      </svg>
    ),
  },
  {
    id: 'jupyter',
    name: 'Jupyter Notebook',
    category: 'Data Science',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 4c4 0 7.2 1.6 7.2 3.6s-3.2 3.6-7.2 3.6-7.2-1.6-7.2-3.6 3.2-3.6 7.2-3.6z"
          stroke="#F37626"
          strokeWidth="1.8"
          fill="none"
        />
        <path
          d="M12 12.8c4 0 7.2 1.6 7.2 3.6s-3.2 3.6-7.2 3.6-7.2-1.6-7.2-3.6 3.2-3.6 7.2-3.6z"
          stroke="#F37626"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="5" cy="8.2" r="1.5" fill="#767677" />
        <circle cx="19" cy="15.8" r="1.5" fill="#767677" />
        <circle cx="12" cy="12" r="1.2" fill="#FF6F00" />
      </svg>
    ),
  },
  {
    id: 'anaconda',
    name: 'Anaconda Environment Manager',
    category: 'Tooling',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8.5" stroke="#44B78B" strokeWidth="2.2" strokeDasharray="13 3 8 3" fill="none" />
        <circle cx="12" cy="12" r="5" stroke="#3EB049" strokeWidth="1.8" strokeDasharray="7 3" fill="none" />
        <circle cx="14" cy="9.5" r="1.3" fill="#44B78B" />
      </svg>
    ),
  },
  {
    id: 'clion',
    name: 'CLion (JetBrains C/C++)',
    category: 'IDE',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" fill="#000000" stroke="#21D789" strokeWidth="1.5" />
        <path d="M9.5 8.5h-1.8a2.5 2.5 0 00-2.5 2.5v2a2.5 2.5 0 002.5 2.5h1.8" stroke="#21D789" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M13.5 8.5v7h3.2" stroke="#21D789" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'ssms',
    name: 'SQL Server Management Studio (SSMS)',
    category: 'Tooling',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="5.5" rx="7" ry="2.2" fill="#D83B01" opacity="0.25" stroke="#D83B01" strokeWidth="1.5" />
        <path d="M5 5.5v9c0 1.2 3.1 2.2 7 2.2s7-1 7-2.2v-9" stroke="#D83B01" strokeWidth="1.5" />
        <path d="M5 10c0 1.2 3.1 2.2 7 2.2s7-1 7-2.2" stroke="#EA4300" strokeWidth="1.2" />
        <circle cx="16" cy="16" r="3.5" fill="#0078D4" />
        <path d="M14.5 16h3M16 14.5v3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export const TechStackMarquee: React.FC = () => {
  // Duplicate array twice to ensure a completely seamless, glitchless infinite loop
  const duplicatedTools = [...TECH_TOOLS, ...TECH_TOOLS];

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Label line */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-slate-300 font-medium text-xs">
            Core Technology Stack
          </span>
        </div>
        <span className="text-xs text-slate-500 hidden sm:inline">
          Pause on hover
        </span>
      </div>

      {/* Glass-like Rectangle Container spanning the length of the tools */}
      <div className="relative w-full max-w-full rounded-2xl bg-slate-900/60 border border-slate-700/60 backdrop-blur-xl shadow-xl shadow-slate-950/50 py-3 sm:py-3.5 px-3 sm:px-4 overflow-hidden group">
        {/* Subtle glass reflection highlight along top edge */}
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Inner Marquee Track with edge fade masks */}
        <div
          className="relative overflow-hidden w-full max-w-full"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 36px, black calc(100% - 36px), transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 36px, black calc(100% - 36px), transparent 100%)',
          }}
        >
          {/* Animated Marquee Infinite Track */}
          <div className="animate-marquee-infinite flex items-center gap-2.5 sm:gap-3 pr-3 select-none">
            {duplicatedTools.map((tool, index) => (
              <div
                key={`${tool.id}-${index}`}
                className="group/pill flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-700/90 hover:shadow-[0_0_14px_rgba(6,182,212,0.25)] transition-all duration-300 cursor-pointer shrink-0 backdrop-blur-sm"
                title={`${tool.name} - ${tool.category}`}
              >
                <div className="w-4 h-4 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover/pill:scale-110">
                  {tool.icon}
                </div>
                <span className="text-xs font-medium text-slate-200 group-hover/pill:text-white transition-colors whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
