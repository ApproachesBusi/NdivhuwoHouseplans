
export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Modern' | 'Luxury' | 'Minimalist' | 'Traditional';
  location: string;
  year: string;
  imageUrl: string;
  description: string;
}

export interface HousePlan {
  id: string;
  name: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: string; // e.g. "250 sqm"
  imageUrl: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}
