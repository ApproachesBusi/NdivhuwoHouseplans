import { Project, HousePlan, Testimonial } from './types';
import image1 from './assets/HousePlans_Images/image1.jpg';
import image2 from './assets/HousePlans_Images/image2.jpg';
import image4 from './assets/HousePlans_Images/image4.jpg';
import image5 from './assets/HousePlans_Images/image5.jpg';
import image6 from './assets/HousePlans_Images/image6.jpg';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'House Plans', href: '/store' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Glass Pavilion',
    category: 'Minimalist',
    location: 'Cape Town, SA',
    year: '2023',
    imageUrl: image1,
    description: 'A study in transparency and light, blending indoor and outdoor living seamlessly.'
  },
  {
    id: '2',
    title: 'Ndivhuwo Residence',
    category: 'Luxury',
    location: 'Sandton, SA',
    year: '2022',
    imageUrl: image2,
    description: 'Our flagship custom design focusing on bold geometric forms and premium materials.'
  },
  {
    id: '4',
    title: 'Urban Oasis',
    category: 'Minimalist',
    location: 'Johannesburg, SA',
    year: '2021',
    imageUrl: image4,
    description: 'Maximizing small city footprints with intelligent multi-level design.'
  },
  {
    id: '5',
    title: 'Aurora Courtyard',
    category: 'Modern',
    location: 'Midrand, SA',
    year: '2024',
    imageUrl: image5,
    description: 'A contemporary courtyard concept focused on privacy, natural light, and calm outdoor living.'
  }
];

export const HOUSE_PLANS: HousePlan[] = [
  {
    id: 'plan-1',
    name: 'The Aurora',
    price: 12500,
    bedrooms: 3,
    bathrooms: 2.5,
    area: '210 sqm',
    imageUrl: image5,
    description: 'A compact but spacious family home with open-plan living and high ceilings.',
    features: ['Open-plan kitchen', 'Double garage', 'Covered patio']
  },
  {
    id: 'plan-2',
    name: 'The Zenith',
    price: 18900,
    bedrooms: 4,
    bathrooms: 3.5,
    area: '340 sqm',
    imageUrl: image6,
    description: 'Luxury design for wider plots, featuring a grand entrance and master wing.',
    features: ['Gourmet kitchen', 'Home cinema', 'Swimming pool ready']
  },
  {
    id: 'plan-3',
    name: 'The Meridian',
    price: 9500,
    bedrooms: 2,
    bathrooms: 2,
    area: '120 sqm',
    imageUrl: image5,
    description: 'Perfect for small families or retirement, focusing on efficiency and style.',
    features: ['Low maintenance', 'Outdoor braai area', 'En-suite master']
  },
  {
    id: 'plan-4',
    name: 'The Horizon',
    price: 14200,
    bedrooms: 3,
    bathrooms: 2,
    area: '185 sqm',
    imageUrl: image6,
    description: 'A contemporary single-storey plan with strong street presence and practical flow.',
    features: ['Walk-in pantry', 'Private study nook', 'Covered veranda']
  },
  {
    id: 'plan-5',
    name: 'The Vista',
    price: 16750,
    bedrooms: 4,
    bathrooms: 3,
    area: '265 sqm',
    imageUrl: image1,
    description: 'Designed for growing families with social living spaces and a generous master suite.',
    features: ['Scullery + laundry', 'Double-volume lounge', 'Guest bedroom']
  },
  {
    id: 'plan-6',
    name: 'The Nova',
    price: 11200,
    bedrooms: 3,
    bathrooms: 2,
    area: '160 sqm',
    imageUrl: image2,
    description: 'A budget-friendly modern layout balancing simplicity, comfort, and natural light.',
    features: ['Open dining core', 'Efficient circulation', 'Flexible bedroom layout']
  },
  {
    id: 'plan-7',
    name: 'The Summit',
    price: 20900,
    bedrooms: 5,
    bathrooms: 4,
    area: '410 sqm',
    imageUrl: image4,
    description: 'A premium multi-level concept ideal for luxury estates and larger plots.',
    features: ['Dual lounges', 'Staff suite option', 'Entertainment deck']
  },
  {
    id: 'plan-8',
    name: 'The Ember',
    price: 9800,
    bedrooms: 2,
    bathrooms: 1.5,
    area: '105 sqm',
    imageUrl: image6,
    description: 'An efficient starter home plan with a clean footprint and warm contemporary lines.',
    features: ['Compact kitchen', 'Low build complexity', 'Ideal for narrow lots']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Moloi',
    role: 'Homeowner',
    content: 'Ndivhuwo Architects turned our vague ideas into a masterpiece. The attention to detail is beyond what we expected.',
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 't2',
    name: 'David Naidoo',
    role: 'Property Developer',
    content: 'The custom plans provided were precise and functional. A truly creative team that understands the build process.',
    avatarUrl: 'https://i.pravatar.cc/150?u=david'
  }
];
