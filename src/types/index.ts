export interface Service {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt?: string;
}
