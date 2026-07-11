export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  createdAt: Date;
  updatedAt?: Date;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-marble-polishing-matters',
    title: 'Why Professional Marble Polishing Matters for Your Home',
    excerpt: 'Discover how diamond polishing restores your floors and increases property value.',
    createdAt: new Date('2026-06-01'),
    updatedAt: new Date('2026-06-15'),
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