import { BusinessConfig, ServiceItem, GalleryItem, ReviewItem, StackingCardItem } from '../types';

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  brandName: 'AURUM & CO.',
  designerName: 'Elena Vance',
  phone: '+1 (555) 012 3456',
  email: 'concierge@aurumandco.com',
  address: '450 Sutter Street, Atelier Suite 1200',
  cityRegion: 'London • New York • Paris',
  facebookUrl: 'https://facebook.com',
  instagramUrl: 'https://instagram.com',
  tiktokUrl: 'https://tiktok.com',
  logoUrl: '', // If empty, renders an exquisite typographic monogram mark
  heroImageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2000&auto=format&fit=crop',
  aboutImageUrl: 'https://plus.unsplash.com/premium_photo-1681486928780-67d70f1ea3c2?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  beforeImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop', // Aged/tarnished heirloom ring
  afterImageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop', // High-polished restored gemstone ring
  heroHeadline: 'Jewelry Made to Be Remembered.',
  heroSubheadline: 'Refined jewelry designed to feel personal, elegant, and enduring.',
  aboutHeading: 'Designed With Intention.',
  aboutText: [
    'Every piece is approached with care, balance, and attention to detail.',
    'We believe in creating modern heirlooms that speak to individual stories.'
  ]
};

// Raw placeholder tokens if user or client prefers displaying literal bracket tokens
export const TOKEN_PLACEHOLDERS: BusinessConfig = {
  brandName: '[JEWELRY BRAND NAME]',
  designerName: '[OWNER / DESIGNER NAME]',
  phone: '[PHONE]',
  email: '[EMAIL]',
  address: '[ADDRESS]',
  cityRegion: '[CITY / REGION]',
  facebookUrl: '[FACEBOOK URL]',
  instagramUrl: '[INSTAGRAM URL]',
  tiktokUrl: '[TIKTOK URL]',
  logoUrl: '[LOGO URL]',
  heroImageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1920&auto=format&fit=crop',
  aboutImageUrl: 'https://plus.unsplash.com/premium_photo-1681486928780-67d70f1ea3c2?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  beforeImageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
  afterImageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop',
  heroHeadline: 'Jewelry Made to Be Remembered.',
  heroSubheadline: 'Refined jewelry designed to feel personal, elegant, and enduring.',
  aboutHeading: 'Designed With Intention.',
  aboutText: [
    'Every piece begins with careful consideration of balance, subtle proportions, and fine materials.',
    'We create jewelry that honors personal expression while remaining effortless and timeless.'
  ]
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'custom-jewelry',
    name: 'Custom Jewelry',
    shortDescription: 'One-of-a-kind bespoke creations realized from initial dialogue to final finish.',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop',
    isPrimary: true
  },
  {
    id: 'engagement-rings',
    name: 'Engagement Rings',
    shortDescription: 'Tailored solitaires and rare stone mountings centered on timeless proportion.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    isPrimary: true
  },
  {
    id: 'wedding-bands',
    name: 'Wedding Bands',
    shortDescription: 'Understated, comfortable silhouettes crafted in enduring precious metals.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    isPrimary: true
  },
  {
    id: 'jewelry-repair',
    name: 'Jewelry Repair & Restoration',
    shortDescription: 'Meticulous benchwork preserving structural integrity and historic character.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    isPrimary: true
  },
  {
    id: 'resizing',
    name: 'Precision Resizing',
    shortDescription: 'Flawless dimensional adjustments maintaining pattern and structural balance.',
    imageUrl: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'cleaning-polishing',
    name: 'Cleaning & Polishing',
    shortDescription: 'Gentle ultrasonic cleansing and hand-finishing to revive optical brilliance.',
    imageUrl: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'stone-setting',
    name: 'Stone Setting',
    shortDescription: 'Hand-cut prongs, bezels, and pavé micro-settings securing fine gemstones.',
    imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'jewelry-restoration',
    name: 'Antique Restoration',
    shortDescription: 'Faithful rehabilitation of heirloom pieces through period-accurate methods.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'personalized-gifts',
    name: 'Personalized Gifts',
    shortDescription: 'Custom monograms, subtle dates, and intimate signet engravings.',
    imageUrl: 'https://images.unsplash.com/photo-1761110518837-689557b142bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'consultations',
    name: 'Private Consultations',
    shortDescription: 'One-on-one design sessions in person or virtually by private appointment.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681486928780-67d70f1ea3c2?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

export const WHY_US_CARDS: StackingCardItem[] = [
  {
    id: 'craftsmanship',
    number: '01',
    title: 'Thoughtful Craftsmanship',
    description: 'Every piece is approached with care, balance, and attention to detail.'
  },
  {
    id: 'service',
    number: '02',
    title: 'Personal Service',
    description: 'Clear guidance from first conversation to final piece.'
  },
  {
    id: 'quality',
    number: '03',
    title: 'Timeless Quality',
    description: 'Design choices focused on elegance that lasts beyond trends.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'ring-1',
    title: 'Architectural Solitaire',
    category: 'Rings',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait'
  },
  {
    id: 'necklace-1',
    title: 'Fluid Pendant',
    category: 'Necklaces',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'landscape'
  },
  {
    id: 'custom-1',
    title: 'Bespoke Sapphire Composition',
    category: 'Custom Pieces',
    imageUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait'
  },
  {
    id: 'earrings-1',
    title: 'Sculpted Golden Drops',
    category: 'Earrings',
    imageUrl: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square'
  },
  {
    id: 'bracelet-1',
    title: 'Minimalist Line Bracelet',
    category: 'Bracelets',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1671641737535-d717a70d6d51?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aspectRatio: 'portrait'
  },
  {
    id: 'detail-1',
    title: 'Micro Claw Prong Setting',
    category: 'Details',
    imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait'
  },
  {
    id: 'ring-2',
    title: 'Brushed Golden Bands',
    category: 'Rings',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square'
  },
  {
    id: 'necklace-2',
    title: 'Linear Choker Detail',
    category: 'Necklaces',
    imageUrl: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'portrait'
  },
  {
    id: 'detail-2',
    title: 'Hand-Chiseled Texture',
    category: 'Details',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'landscape'
  }
];

// 2-3 reviews only. No fabricated review counts or claims. Clearly marked as client correspondence notes.
export const CLIENT_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    clientName: 'Sarah M.',
    serviceType: 'Bespoke Engagement Ring',
    comment: 'The subtlety of the setting and the proportion on hand exceeded every expectation. An effortless, deeply personal collaborative experience.'
  },
  {
    id: 'rev-2',
    clientName: 'Julian & Clara',
    serviceType: 'Custom Wedding Bands',
    comment: 'Understated elegance at its highest standard. The weight, balance, and quiet refinement feel made to last generations.'
  },
  {
    id: 'rev-3',
    clientName: 'David K.',
    serviceType: 'Heirloom Ring Restoration',
    comment: 'My grandmother’s ring was treated with immense reverence. The original character was honored down to the microscopic detail.'
  }
];

export const SERVICE_OPTIONS = [
  'Custom Jewelry',
  'Engagement Ring',
  'Wedding Band',
  'Repair / Resize',
  'Cleaning / Restoration',
  'Consultation',
  'Other'
];
