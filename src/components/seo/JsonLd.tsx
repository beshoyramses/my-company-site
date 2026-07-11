"use client";

import { useLanguage } from "@/lib/i18n";
import type { Service } from "@/lib/services";

export function ServiceJsonLd({ service }: { service: Service }) {
  const { isArabic } = useLanguage();
  const title = isArabic && service.titleAr ? service.titleAr : service.title;
  const description =
    isArabic && service.descriptionAr
      ? service.descriptionAr
      : service.description;
  const discountText =
    isArabic && service.discountAr ? service.discountAr : service.discount;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: isArabic
      ? `${description} متوفر في الجونة وG-Cribs.`
      : `${description} Available in El Gouna and G-Cribs.`,
    provider: {
      "@type": "LocalBusiness",
      name: "Sunny Luxury Services",
      url: "https://g-cribs.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "El Gouna",
        addressRegion: "Red Sea",
        addressCountry: "EG",
      },
      telephone: "+20 100 000 0000",
      email: "hello@g-cribs.com",
    },
    areaServed: ["El Gouna", "G-Cribs", "Hurghada", "Red Sea Egypt"],
    serviceType: "Luxury hospitality and property services",
    offers: discountText
      ? {
          "@type": "Offer",
          description: discountText,
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
