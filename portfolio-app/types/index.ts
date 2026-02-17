export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  status: "Active" | "Beta" | "Archived" | "In Development";
  category: "AI" | "Web" | "Tools";
  date: string;
  githubUrl: string;
  liveDemo?: string;
  thumbnail: string;
  screenshots: string[];
  features: string[];
  featured: boolean;
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}
