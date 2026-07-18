import type { Metadata } from "next";
import { getServiceUrl } from "@/lib/site";
import type { Service } from "@/lib/services";

export function getServiceMetadata(service: Service): Metadata {
  const locationLabel = service.locationLabel ?? "El Gouna";
  const title =
    service.seoTitle ??
    `${service.title} in ${locationLabel} | new city Luxury Services`;
  const description =
    service.seoDescription ??
    `${service.description} Professional ${service.title.toLowerCase()} in ${locationLabel}, G-Cribs, and Hurghada. Book a free quote today.`;
  const url = getServiceUrl(service.slug);

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [{ url: service.images[0], width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.images[0]],
    },
  };
}
