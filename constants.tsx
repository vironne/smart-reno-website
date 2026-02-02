
import React from 'react';

export const COLORS = {
  charcoal: '#1A1A1A',
  white: '#FFFFFF',
  gold: '#C9A96E',
  beige: '#F5F1E8',
  elegantGrey: '#707070',
  lightGrey: '#E5E5E5',
};

export const COMMUNITIES = [
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    slug: 'palm-jumeirah',
    image: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&q=80&w=800',
    renovatedCount: 40,
    description: 'Nakheel-approved villa specialists'
  },
  {
    id: 'emirates-hills',
    name: 'Emirates Hills',
    slug: 'emirates-hills',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    renovatedCount: 15,
    description: 'Luxury bespoke renovations'
  },
  {
    id: 'arabian-ranches',
    name: 'Arabian Ranches',
    slug: 'arabian-ranches',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=80&w=800',
    renovatedCount: 22,
    description: 'Family villa transformations'
  },
  {
    id: 'dubai-hills',
    name: 'Dubai Hills Estate',
    slug: 'dubai-hills',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    renovatedCount: 12,
    description: 'Modern European design'
  },
  {
    id: 'jumeirah-islands',
    name: 'Jumeirah Islands',
    slug: 'jumeirah-islands',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800',
    renovatedCount: 8,
    description: 'Waterfront living experts'
  }
];

export const PROJECTS = [
  {
    id: 'palm-1',
    title: 'Palm Jumeirah Signature Villa',
    location: 'Palm Jumeirah',
    investment: 'AED 1.8M',
    timeline: '6 Months',
    style: 'Contemporary Italian',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  }
];

export const PROCESS_STEPS = [
  {
    title: "Concept & Design",
    description: "Our Italian designers create 3D visualizations and mood boards tailored to your lifestyle.",
    icon: "🎨"
  },
  {
    title: "Permits & NOCs",
    description: "We handle 100% of the bureaucracy with Dubai Municipality, Nakheel, and Emaar.",
    icon: "📜"
  },
  {
    title: "Expert Execution",
    description: "5-star construction standards with European site managers overseeing every detail.",
    icon: "🔨"
  },
  {
    title: "Premium Handover",
    description: "Deep clean, styling, and a lifetime warranty on our structural workmanship.",
    icon: "🔑"
  }
];

export const TESTIMONIALS = [
  {
    name: "Jonathan Wright",
    location: "Palm Jumeirah",
    quote: "The only company in Dubai that truly understands European quality. Our Signature Villa was transformed beyond recognition.",
    rating: 5,
    video: true
  },
  {
    name: "Sarah Al-Maktoum",
    location: "Emirates Hills",
    quote: "Marco's vision for our kitchen and living space was extraordinary. The process was stress-free and the result is world-class.",
    rating: 5,
    video: false
  },
  {
    name: "David Henderson",
    location: "Arabian Ranches",
    quote: "They managed all the Emaar approvals perfectly. We extended our villa by 1,200 sqft and couldn't be happier with the finish.",
    rating: 5,
    video: false
  }
];

export const AWARDS = [
  { year: "2025", title: "Boutique Firm of The Year", body: "Architecture Leaders Awards" },
  { year: "2024", title: "Design & Build Project of Year", body: "Design Middle East Awards" },
  { year: "2024", title: "Luxury Renovation Specialist", body: "Middle East Retail & Design" },
  { year: "2023", title: "Best Interior Design (Residential)", body: "Architecture Leaders Awards" },
  { year: "2023", title: "Excellence in Craftsmanship", body: "Design Middle East" },
  { year: "2022", title: "Emerging Luxury Brand", body: "UAE Business Awards" }
];
