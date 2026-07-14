import { services } from "@/lib/services";
import { getServiceMetadata } from "@/lib/service-seo";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FaqJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";
import { ServiceSeoSection } from "@/components/sections/ServiceSeoSection";
import { ServiceDetailContent } from "@/components/sections/ServiceDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) return {};

  return getServiceMetadata(service);
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((entry) => entry.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceJsonLd service={service} />
      {service.faqs?.length ? <FaqJsonLd faqs={service.faqs} /> : null}
      <ServiceSeoSection service={service} />
      <ServiceDetailContent service={service} />
    </>
  );
}
