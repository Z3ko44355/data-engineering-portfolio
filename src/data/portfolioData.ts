import { SkillCategory, ExperienceItem, ProjectItem, CertificationItem } from '../types';

export const personalInfo = {
  name: 'Zakaria Ahmed',
  shortName: 'Zakaria.DE',
  title: 'Data Engineering Trainee | Computer Science Student',
  statusBadge: 'Open for Data Engineering Opportunities',
  location: 'Egypt',
  phone: '+20 106 197 2725',
  email: 'zeko40436@gmail.com',
  github: 'https://github.com/Z3ko44355',
  linkedin: 'https://www.linkedin.com/in/zakaria-ahmed-de',
  profileImage: 'https://i.postimg.cc/k48tXFcJ/Profile-Photo.jpg',
  university: 'New Mansoura University',
  degree: 'Bachelor of Computer Science',
  period: 'Sept 2023 – Present',
  academicYear: '3rd Year Student',
  objective:
    'Driven 3rd-year CS student at New Mansoura University specializing in Data Engineering. Skilled in Python, SQL, PySpark, database architecture, and cloud infrastructure through DEPI and NTI programs.',
  coreInterests: ['Data Pipelines & ETL/ELT', 'Distributed Data Processing', 'Relational & Analytical Databases', 'Cloud Data Systems'],
};

export const educationInfo = {
  degree: 'Bachelor of Computer Science',
  university: 'New Mansoura University',
  period: 'Sept 2023 – Present',
  currentStanding: '3rd Year Undergraduate',
  location: 'Mansoura / New Mansoura, Egypt',
  overview: 'Specializing in computer science foundations, database management, and high-performance computing, actively applying academic algorithms to large-scale data engineering systems.',
  coursework: [
    { name: 'Database Management Systems (DBMS)', category: 'Core Databases' },
    { name: 'Data Structures & Algorithms', category: 'Computing Foundations' },
    { name: 'Object-Oriented Programming (OOP)', category: 'Software Design' },
    { name: 'Operating Systems', category: 'Systems & Concurrency' },
  ],
  academicHighlights: [
    'Active participant in ICPC NMU Competitive Programming Community solving complex algorithmic problems',
    'Applied database relational normalization, index tuning, and ACID transactions in multi-user course projects',
    'Deep focus on memory management, multithreading, and OS file systems for data ingestion efficiency',
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'data-engineering',
    title: 'Data Engineering & Databases',
    icon: 'Database',
    description: 'Core architectures for reliable data extraction, transformation, storage, and analytical modeling.',
    skills: [
      { name: 'SQL (Query Optimization, Schema Design)', highlight: true, tag: 'Core' },
      { name: 'PySpark (Distributed Computing)', highlight: true, tag: 'Big Data' },
      { name: 'Data Pipeline Concepts (ETL / ELT)', highlight: true, tag: 'Pipelines' },
      { name: 'SQL Server (T-SQL, Stored Procs)', highlight: false, tag: 'RDBMS' },
      { name: 'MySQL (Relational Modeling)', highlight: false, tag: 'RDBMS' },
      { name: 'Data Warehousing Fundamentals', highlight: false, tag: 'Analytics' },
    ],
  },
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    icon: 'Code2',
    description: 'Strong object-oriented, scripting, and algorithmic foundation across industry-standard languages.',
    skills: [
      { name: 'Python (Pandas, PySpark, Automation)', highlight: true, tag: 'Primary' },
      { name: 'SQL (DDL, DML, Window Functions)', highlight: true, tag: 'Primary' },
      { name: 'C# (.NET Backend Services)', highlight: false, tag: 'Backend' },
      { name: 'C++ (Data Structures, ICPC)', highlight: false, tag: 'Algorithms' },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Fundamentals',
    icon: 'Cloud',
    description: 'Hands-on understanding of scalable cloud services, server environments, and version control.',
    skills: [
      { name: 'Cloud Computing Architecture (NTI)', highlight: true, tag: 'Cloud' },
      { name: 'Cloud Models (IaaS, PaaS, SaaS)', highlight: false, tag: 'Concepts' },
      { name: 'Linux Fundamentals & Shell Scripting', highlight: true, tag: 'OS' },
      { name: 'Git & GitHub Version Control', highlight: false, tag: 'CI/CD' },
      { name: 'Virtualization & Scalable Infrastructure', highlight: false, tag: 'Infra' },
    ],
  },
  {
    id: 'core-competencies',
    title: 'Core Competencies & Logic',
    icon: 'BrainCircuit',
    description: 'Engineering mindsets honed through competitive programming and rigorous architectural design.',
    skills: [
      { name: 'Problem Solving & Analytical Thinking', highlight: true, tag: 'Core' },
      { name: 'Competitive Programming (ICPC NMU Community)', highlight: true, tag: 'Community' },
      { name: 'System Architecture & Data Modeling', highlight: true, tag: 'Architecture' },
      { name: 'Relational Normalization (1NF - 3NF / BCNF)', highlight: false, tag: 'Theory' },
      { name: 'Collaborative Code Reviews & Agile Mindset', highlight: false, tag: 'Soft Skills' },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'depi-de-trainee',
    role: 'Data Engineering Trainee',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    period: 'May 2026 – Present',
    location: 'Egypt (National Tech Initiative)',
    status: 'Current Program',
    type: 'Trainee',
    description:
      'Immersive specialized track focused on end-to-end **modern data engineering workflows**, scalable **distributed data pipelines**, and **big data transformations** under governmental tech leadership.',
    keyResponsibilities: [
      'Designing and orchestrating robust **ETL/ELT pipelines** for batch processing structured and semi-structured datasets.',
      'Leveraging **PySpark** on distributed datasets for partitioned data transformations, cleaning, and aggregation.',
      'Developing production-grade **SQL scripts** with complex joins, **window functions**, and indexing strategies to optimize querying speeds.',
      'Integrating **schema evolution** best practices and data validation checks along the data ingestion lifecycle.',
    ],
    technologies: ['PySpark', 'Python', 'Advanced SQL', 'ETL Pipelines', 'Data Warehousing', 'Data Modeling', 'Linux'],
  },
  {
    id: 'nti-cloud-trainee',
    role: 'Cloud Computing Trainee',
    organization: 'National Telecommunication Institute (NTI)',
    period: '2026',
    location: 'Egypt',
    status: 'Completed',
    type: 'Trainee',
    description:
      'Intensive training curriculum centered around **cloud system architecture**, **infrastructure provisioning**, and secure network configuration across cloud deployment tiers.',
    keyResponsibilities: [
      'Examined cloud service architectures across **IaaS, PaaS, and SaaS** paradigms with hands-on labs.',
      'Configured secure **cloud networking** concepts including subnets, routing tables, and security groups.',
      'Implemented foundational **scalable cloud infrastructure** designs with high availability and fault tolerance principles.',
      'Explored **cloud data storage** solutions and automated server provisioning workflows.',
    ],
    technologies: ['Cloud Architecture', 'IaaS / PaaS / SaaS', 'Cloud Networking', 'Linux Administration', 'Security'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'data-processing-etl-lab',
    title: 'Data Processing & ETL Lab Projects',
    role: 'Data Engineer / Pipeline Developer',
    category: 'Big Data Processing & ETL Workflows',
    summary:
      'Collection of batch ETL pipeline scripts extracting raw heterogeneous data, executing structured transformations with **PySpark/Pandas**, and loading into clean analytical warehouses.',
    details:
      'Structured on **DataCamp** and **IBM Data Engineering** roadmaps, this repository contains reproducible pipeline workflows for handling missing values, **schema validation**, **distributed joins**, and aggregation for downstream reporting.',
    technologies: ['PySpark', 'Python', 'Pandas', 'SQL', 'DataCamp Roadmap', 'IBM DE Roadmap', 'Parquet / CSV'],
    metrics: [
      { label: 'Data Engine', value: 'PySpark & Pandas' },
      { label: 'Workflows', value: 'Automated ETL' },
      { label: 'Output', value: 'Optimized Parquet' },
    ],
    architectureHighlights: [
      'Created modular Python modules implementing **Extract, Transform, and Load (ETL)** steps with structured logging.',
      'Utilized **PySpark DataFrame API** for memory-efficient partitioned computations on large tabular datasets.',
      'Automated data cleaning routines: schema type casting, regex anomaly scrubbing, and timestamp normalization.',
      'Exported partitioned column-oriented formats (**Parquet**) optimized for fast analytical query scans.',
    ],
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 'depi-cert',
    title: 'Data Engineering Professional Track',
    issuer: 'Digital Egypt Pioneers Initiative (DEPI)',
    date: '2026',
    status: 'In Progress',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/30',
    skillsLearned: ['Data Pipelines (ETL/ELT)', 'Big Data Execution with PySpark', 'Advanced SQL & Data Modeling', 'Cloud Storage Architectures'],
  },
  {
    id: 'nti-cloud-cert',
    title: 'Cloud Computing Trainee Certification',
    issuer: 'National Telecommunication Institute (NTI)',
    date: '2026',
    status: 'Completed',
    credentialUrl: 'https://lnkd.in/p/eTQWE5SV',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30',
    skillsLearned: ['Cloud Infrastructure (IaaS/PaaS/SaaS)', 'Cloud Networking & VPCs', 'Linux Systems Administration', 'Security & Scalability'],
  },
  {
    id: 'ibm-cert',
    title: 'IBM Data Engineering Professional Certificate',
    issuer: 'IBM',
    date: '2026',
    status: 'In Progress',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/30',
    skillsLearned: [
      'Relational Databases & Advanced SQL',
      'Linux Commands & Shell Scripting',
      'ETL & Pipeline Architectures',
      'Data Warehousing Foundations',
    ],
  },
  {
    id: 'datacamp-cert',
    title: 'Data Engineer in Python Track',
    issuer: 'DataCamp',
    date: '2026',
    status: 'In Progress',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/30',
    skillsLearned: [
      'Python for Data Engineering',
      'Pandas & PySpark Foundations',
      'SQL for Analytics & Data Manipulation',
      'Data Cleaning & Automated ETL',
    ],
  },
];
