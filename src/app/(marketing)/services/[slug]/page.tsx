import { services } from "@/lib/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServiceDetailContent } from "@/components/sections/ServiceDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Sunny`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [{ url: service.images[0], width: 1200, height: 630 }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();

  return <ServiceDetailContent service={service} />;
}
