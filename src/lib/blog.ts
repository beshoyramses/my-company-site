export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  seoDescription?: string;
  keywords?: string[];
  createdAt: Date;
  updatedAt?: Date;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-marble-polishing-matters',
    title: 'Marble Polishing in El Gouna: Why It Matters for Your Property',
    excerpt: 'Discover how professional diamond polishing restores marble floors in El Gouna villas and increases property value.',
    seoDescription:
      'Learn why professional marble polishing in El Gouna protects your investment, removes scratches and stains, and keeps floors looking showroom-new.',
    keywords: [
      'marble polishing El Gouna',
      'marble restoration El Gouna',
      'floor polishing Red Sea',
    ],
    content: `Marble floors are a signature feature of El Gouna homes, hotels, and chalets — but the Red Sea climate takes a toll. Sand tracked indoors, humidity, and daily foot traffic gradually dull the surface, leaving scratches, etch marks, and stains that no regular mopping can fix.

Professional marble polishing in El Gouna uses industrial diamond abrasives to grind away the damaged top layer and reveal the stone's natural brilliance underneath. The process typically includes three stages: honing to remove imperfections, polishing to restore the mirror finish, and sealing to protect against future stains and moisture.

For property owners in G-Cribs, Abu Tig, and Kafr El Gouna, polished marble is more than cosmetic. Well-maintained floors increase rental appeal, reduce long-term replacement costs, and create the premium first impression guests expect from a Red Sea luxury property.

If your marble has lost its shine, contact Sunny Luxury Services for a free on-site assessment in El Gouna. We handle everything from bathroom countertops to full villa floor restoration.`,
    createdAt: new Date('2026-06-01'),
    updatedAt: new Date('2026-07-14'),
  },
  {
    slug: 'top-5-luxury-chalets-for-sale',
    title: 'Top 5 Luxury Chalets for Sale – Investment Guide',
    excerpt: 'A curated list of premium chalets with stunning views and high ROI.',
    createdAt: new Date('2026-06-10'),
  },
  {
    slug: 'airport-transfer-guide',
    title: 'Stress-Free Airport Transfers: Everything You Need to Know',
    excerpt: 'From booking to drop-off, how our return transfer service works.',
    createdAt: new Date('2026-07-01'),
  },
];
