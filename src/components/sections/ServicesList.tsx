"use client";

import { services } from "@/lib/services";
import { TiltCard } from "@/components/animations/TiltCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import { IconArrowUpRight } from "@tabler/icons-react";

export default function ServicesList() {
  const { isArabic } = useLanguage();

  return (
    <section className="section-shell py-28 sm:py-32 lg:py-36">
      <ScrollReveal className="mx-auto mb-14 max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-200">
          {isArabic ? "عروض مميزة" : "Signature offerings"}
        </div>
        <h2 className="mb-4 font-display text-4xl font-semibold text-white sm:text-5xl">
          {isArabic ? (
            <>
              مصممة لعملاء<span className="gradient-text"> مميزين</span>
            </>
          ) : (
            <>
              Crafted for{" "}
              <span className="gradient-text">discerning clients</span>
            </>
          )}
        </h2>
        <p className="text-lg leading-8 text-zinc-400">
          {isArabic
            ? "كل تجربة تُقدَّم كطقس فاخر، من الترميم إلى السفر والعقارات."
            : "Every experience is styled as a luxury ritual, from restoration to travel and property."}
        </p>
      </ScrollReveal>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ScrollReveal
            key={service.slug}
            delay={index * 0.08}
            className="h-full"
          >
            <Link
              href={`/services/${service.slug}`}
              className="group block h-full"
            >
              <TiltCard className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#080611]/80 p-[1px] shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_40px_120px_rgba(139,92,246,0.16)]">
                <div className="relative h-[240px] overflow-hidden rounded-[calc(2rem-1px)]">
                  <Image
                    src={service.images[0]}
                    alt={
                      service.slug === "marble-polishing"
                        ? "Marble polishing in El Gouna"
                        : service.title
                    }
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04020a]/80 via-[#04020a]/10 to-transparent" />
                  <div className="absolute inset-0 rounded-[calc(2rem-1px)] border border-white/10" />
                  {service.discount && (
                    <span className="absolute right-4 top-4 rounded-full border border-violet-400/30 bg-violet-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-violet-100 backdrop-blur">
                      {service.discount}
                    </span>
                  )}
                </div>

                <div className="flex h-[calc(100%-240px)] flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 p-2 text-violet-200 transition-all duration-300 group-hover:bg-violet-500/15 group-hover:text-white">
                      <IconArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-violet-200">
                    {isArabic && service.titleAr
                      ? service.titleAr
                      : service.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-7 text-zinc-400">
                    {isArabic && service.shortDescAr
                      ? service.shortDescAr
                      : service.shortDesc}
                  </p>
                  <div className="flex items-center justify-between text-sm font-medium text-zinc-300">
                    <span>
                      {isArabic ? "استكشف العرض" : "Explore offering"}
                    </span>
                    <span className="text-violet-300">→</span>
                  </div>
                </div>
              </TiltCard>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
