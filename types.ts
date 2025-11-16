export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;

  institution: string;
  period: string;
  details: string;
}

export interface Achievement {
  title: string;
  details: string[];
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}