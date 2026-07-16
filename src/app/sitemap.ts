import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";

const BASE_URL = "https://sunnyelgouna.vercel.app";

export default async function sitemap() {
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/problems`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/properties`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/materials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const serviceUrls = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: service.slug === "marble-polishing" ? 0.98 : 0.85,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.createdAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locationUrls = [
    "el-gouna",
    "hurghada",
    "sahl-hasheesh",
    "makadi-bay",
    "soma-bay",
    "safaga",
  ].map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: slug === "el-gouna" ? 0.95 : 0.85,
  }));

  const problemUrls = [
    "scratched-marble-repair",
    "dull-marble-floor",
    "marble-stain-removal",
    "marble-etching-repair",
    "marble-crack-repair",
    "chipped-marble-repair",
  ].map((slug) => ({
    url: `${BASE_URL}/problems/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const propertyUrls = [
    "hotel-marble-polishing",
    "villa-marble-polishing",
    "apartment-marble-polishing",
    "office-marble-polishing",
    "restaurant-marble-polishing",
    "hospital-marble-polishing",
    "showroom-marble-polishing",
    "airbnb-marble-polishing",
  ].map((slug) => ({
    url: `${BASE_URL}/properties/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const materialUrls = [
    "white-marble-polishing",
    "carrara-marble-polishing",
    "crema-marfil-polishing",
    "egyptian-marble-polishing",
    "limestone-polishing",
    "terrazzo-floor-polishing",
    "granite-countertop-polishing",
    "travertine-restoration",
  ].map((slug) => ({
    url: `${BASE_URL}/materials/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...serviceUrls,
    ...blogUrls,
    ...locationUrls,
    ...problemUrls,
    ...propertyUrls,
    ...materialUrls,
  ];
}
