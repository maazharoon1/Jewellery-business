export interface BusinessConfig {
  brandName: string;
  designerName: string;
  phone: string;
  email: string;
  address: string;
  cityRegion: string;
  facebookUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  logoUrl: string;
  heroImageUrl: string;
  aboutImageUrl?: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutHeading: string;
  aboutText: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDescription: string;
  imageUrl: string;
  isPrimary?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Rings' | 'Necklaces' | 'Bracelets' | 'Earrings' | 'Custom Pieces' | 'Details';
  imageUrl: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export interface ReviewItem {
  id: string;
  clientName: string;
  serviceType: string;
  comment: string;
}

export interface StackingCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export type PageRoute = 'home' | 'services' | 'gallery' | 'contact';
