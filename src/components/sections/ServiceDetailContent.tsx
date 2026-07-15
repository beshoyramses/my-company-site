"use client";

import { ServiceGallery } from "@/components/sections/ServiceGallery";
import { MarbleInternalLinks } from "@/components/sections/MarbleInternalLinks";
import { useLanguage } from "@/lib/i18n";
import type { Service } from "@/lib/services";
import { IconArrowRight, IconCheck, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

export function ServiceDetailContent({ service }: { service: Service }) {
  const { isArabic } = useLanguage();
  const title = isArabic && service.titleAr ? service.titleAr : service.title;
  const locationLabel = service.locationLabel ?? "El Gouna";
  const description =
    isArabic && service.descriptionAr
      ? service.descriptionAr
      : service.description;
  const features =
    isArabic && service.featuresAr?.length
      ? service.featuresAr
      : service.features;
  const discount =
    isArabic && service.discountAr ? service.discountAr : service.discount;
  const galleryTitle = isArabic
    ? `${title} في ${locationLabel === "El Gouna" ? "الجونة" : locationLabel}`
    : `${title} in ${locationLabel}`;

  return (
    <article className="section-shell pb-24 pt-10 sm:pt-12">
      <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#06040c]/90 shadow-[0_28px_90px_rgba(0,0,0,0.36)]">
        <div className="p-6 sm:p-8 lg:p-12">
          <div className="mb-10">
            <ServiceGallery images={service.images} title={galleryTitle} />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-200">
                <IconSparkles size={16} />
                {isArabic ? "خدمة مميزة" : "Premium service"}
              </div>
              <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                {description}
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">
                {isArabic
                  ? "ما الذي يتضمنه هذا العرض"
                  : "What this experience includes"}
              </h2>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/15 text-violet-200">
                      <IconCheck size={16} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/35 bg-violet-600/90 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500"
              >
                {isArabic ? "احجز الآن" : "Book now"}
                <IconArrowRight size={16} />
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 transition-all hover:bg-white/10"
              >
                {isArabic ? "تصفح جميع الخدمات" : "Browse all services"}
              </Link>
            </div>

            {discount && (
              <div className="mt-6 inline-flex rounded-full border border-violet-400/30 bg-violet-500/12 px-4 py-2 text-sm font-medium text-violet-100">
                ✦ {discount}
              </div>
            )}

            {service.slug === "marble-polishing" && (
              <div className="mt-8">
                <MarbleInternalLinks />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
