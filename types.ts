
export interface Community {
  id: string;
  name: string;
  slug: string;
  image: string;
  renovatedCount: number;
  description: string;
}

export interface ProjectRoom {
  name: string;
  beforeImage: string;
  afterImage: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  propertyType: string;
  investment: string;
  timeline: string;
  style: string;
  completion: string;
  beforeImage: string;
  afterImage: string;
  // Extended fields for detail page
  gallery?: string[];
  rooms?: ProjectRoom[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  materials?: string[];
  challenges?: {
    challenge: string;
    solution: string;
  }[];
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  investmentRange: string;
  timeline: string;
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
