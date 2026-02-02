
export interface Community {
  id: string;
  name: string;
  slug: string;
  image: string;
  renovatedCount: number;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  investment: string;
  timeline: string;
  style: string;
  beforeImage: string;
  afterImage: string;
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
}

export interface LeadData {
  location?: string;
  propertyType?: string;
  scope: string[];
  timeline?: string;
  budget: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  referral: string;
  requirements: string;
  score: number;
}
