"use client";

import ServicesList from "@/components/sections/ServicesList";
import { useLanguage } from "@/lib/i18n";
import Link from "next/link";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";

export default function ServicesPage() {
  const { isArabic } = useLanguage();
  return (
    <main className="relative overflow-hidden">
      <section className="section-shell pb-6 pt-32 sm:pt-36">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#06040c]/85 p-8 shadow-[0_28px_90px_rgba(0,0,0,0.32)] sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(217,70,239,0.14),_transparent_30%)]" />
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-200">
              <IconSparkles size={16} />
              {isArabic ? "خدمات مميزة" : "Signature services"}
            </div>
            <h1 className="mb-4 max-w-3xl font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
              {isArabic ? (
                <>
                  تجارب فاخرة مُنتقاة في الجونة و
                  <span className="gradient-text">G-Cribs</span>
                </>
              ) : (
                <>
                  Curated luxury experiences in El Gouna and{" "}
                  <span className="gradient-text">G-Cribs</span>
                </>
              )}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              {isArabic
                ? "من ترميم الرخام وإقامات الشاليهات الفاخرة إلى انتقالات المطار السلسة والمنازل المنتهية بشكل رائع، صُممت كل تجربة لتشعر بالرفعة والهدوء والذكرى التي لا تُنسى على طول البحر الأحمر."
                : "From marble restoration and premium chalet stays to effortless airport transfers and beautifully finished homes, every experience is designed to feel elevated, calm, and unforgettable along the Red Sea."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/35 bg-violet-600/90 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-violet-500"
              >
                {isArabic ? "احجز استشارة" : "Book a consultation"}
                <IconArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-200 transition-all hover:bg-white/10"
              >
                {isArabic ? "اكتشف العلامة" : "Discover the brand"}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ServicesList />
    </main>
  );
}
