export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  status?: string;
  type: 'Trainee' | 'Internship' | 'Fellowship';
  description: string;
  keyResponsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  category: string;
  summary: string;
  details: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  architectureHighlights: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  schemaPreview?: {
    tables: { name: string; columns: string[] }[];
  };
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Verified';
  credentialId?: string;
  credentialUrl?: string;
  certificateImage?: string;
  skillsLearned: string[];
  badgeColor: string;
}
