import { BUSINESS, getServiceUrl } from "@/lib/site";
import type { Service, ServiceFaq } from "@/lib/services";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: BUSINESS.url,
    email: BUSINESS.email,
    telephone: BUSINESS.phone,
    priceRange: BUSINESS.priceRange,
    image: `${BUSINESS.url}/og-images/hero.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: BUSINESS.areaServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury property services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marble Polishing in El Gouna",
            url: getServiceUrl("marble-polishing"),
          },
        },
      ],
    },
  };

  return <JsonLdScript data={jsonLd} />;
}

export function ServiceJsonLd({ service }: { service: Service }) {
  const locationLabel = service.locationLabel ?? "El Gouna";
  const description = service.seoDescription ?? service.description;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} in ${locationLabel}`,
    description: `${description} Available in El Gouna and G-Cribs.`,
    url: getServiceUrl(service.slug),
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: BUSINESS.address.locality,
        addressRegion: BUSINESS.address.region,
        addressCountry: BUSINESS.address.country,
      },
    },
    areaServed: BUSINESS.areaServed,
    serviceType: service.title,
    offers: service.discount
      ? {
          "@type": "Offer",
          description: service.discount,
        }
      : undefined,
  };

  return <JsonLdScript data={jsonLd} />;
}

export function FaqJsonLd({ faqs }: { faqs: ServiceFaq[] }) {
  if (!faqs.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <JsonLdScript data={jsonLd} />;
}
