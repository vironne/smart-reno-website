
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
  },
  {
    id: 'palm-2',
    title: 'Garden Villa Transformation',
    location: 'Palm Jumeirah',
    investment: 'AED 2.2M',
    timeline: '8 Months',
    style: 'Modern Minimalist',
    beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'emirates-1',
    title: 'Emirates Hills Masterpiece',
    location: 'Emirates Hills',
    investment: 'AED 3.5M',
    timeline: '10 Months',
    style: 'Classic European',
    beforeImage: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'emirates-2',
    title: 'Luxury Golf Estate',
    location: 'Emirates Hills',
    investment: 'AED 4.1M',
    timeline: '12 Months',
    style: 'Mediterranean',
    beforeImage: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ranches-1',
    title: 'Arabian Ranches Family Villa',
    location: 'Arabian Ranches',
    investment: 'AED 1.2M',
    timeline: '5 Months',
    style: 'Contemporary Arabian',
    beforeImage: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ranches-2',
    title: 'Saheel Villa Renovation',
    location: 'Arabian Ranches',
    investment: 'AED 1.5M',
    timeline: '6 Months',
    style: 'Modern Fusion',
    beforeImage: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'hills-1',
    title: 'Dubai Hills Modern Villa',
    location: 'Dubai Hills Estate',
    investment: 'AED 2.8M',
    timeline: '7 Months',
    style: 'Scandinavian Modern',
    beforeImage: 'https://images.unsplash.com/photo-1560184990-4de4b5a82b88?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'hills-2',
    title: 'Fairway Villas Project',
    location: 'Dubai Hills Estate',
    investment: 'AED 2.1M',
    timeline: '6 Months',
    style: 'Italian Luxury',
    beforeImage: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'islands-1',
    title: 'Jumeirah Islands Waterfront',
    location: 'Jumeirah Islands',
    investment: 'AED 2.4M',
    timeline: '8 Months',
    style: 'Coastal Modern',
    beforeImage: 'https://images.unsplash.com/photo-1560185009-dddeb820c7b7?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'islands-2',
    title: 'Entertainment Villa',
    location: 'Jumeirah Islands',
    investment: 'AED 1.9M',
    timeline: '7 Months',
    style: 'Contemporary Chic',
    beforeImage: 'https://images.unsplash.com/photo-1560185128-c5d7ef tried?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'palm-3',
    title: 'Beachfront Paradise',
    location: 'Palm Jumeirah',
    investment: 'AED 5.2M',
    timeline: '14 Months',
    style: 'Ultra Luxury',
    beforeImage: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'palm-4',
    title: 'Frond K Renovation',
    location: 'Palm Jumeirah',
    investment: 'AED 2.7M',
    timeline: '9 Months',
    style: 'Art Deco Modern',
    beforeImage: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&q=80&w=1200',
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
