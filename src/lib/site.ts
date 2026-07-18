export const SITE_URL = "https://g-cribs.com";

export const BUSINESS = {
  name: "new city Luxury Services",
  alternateName: "NEXUS Luxury Services",
  url: SITE_URL,
  email: "minanazer25@gmail.com",
  phone: "+201281737377",
  phoneDisplay: "+20 128 173 7377",
  address: {
    locality: "El Gouna",
    region: "Red Sea",
    country: "EG",
    countryName: "Egypt",
  },
  geo: {
    latitude: 27.3962,
    longitude: 33.6782,
  },
  areaServed: ["El Gouna", "G-Cribs", "Hurghada", "Red Sea Egypt"],
  priceRange: "$$",
} as const;

export function getServiceUrl(slug: string) {
  return `${SITE_URL}/services/${slug}`;
}
