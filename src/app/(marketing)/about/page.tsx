"use client";

import { useLanguage } from "@/lib/i18n";

export default function AboutPage() {
  const { isArabic } = useLanguage();

  return (
    <div className="section-shell pb-20 pt-32 text-center sm:pt-36">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[#06040c]/80 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-violet-200">
          {isArabic ? "عن new city" : "About new city"}
        </p>
        <h1 className="mb-6 font-display text-4xl font-semibold text-white sm:text-5xl">
          {isArabic ? (
            <>
              مصمم بحرفية،<span className="gradient-text">مُرفع بالتفاصيل</span>
            </>
          ) : (
            <>
              Refined by craft,{" "}
              <span className="gradient-text">elevated by detail</span>
            </>
          )}
        </h1>
        <p className="text-lg leading-8 text-zinc-400">
          {isArabic
            ? "نحوّل الضيافة الفاخرة، والتشطيبات المميزة، والسفر الدقيق إلى تجربة واحدة متقنة. كل تفصيل صُمم ليشعر بالسهولة والخصوصية والذكريات الجميلة."
            : "We bring together luxury hospitality, premium finishing, and precision travel into a single polished experience. Every detail is designed to feel effortless, private, and memorable."}
        </p>
      </div>
    </div>
  );
}
