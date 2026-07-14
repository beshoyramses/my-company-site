"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { isArabic } = useLanguage();
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#04020a]/90">
      <div className="absolute inset-x-0 top-0 -translate-y-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-full md:h-24"
        >
          <path
            d="M0 60L48 53.3C96 46.7 192 33.3 288 40C384 46.7 480 73.3 576 80C672 86.7 768 73.3 864 66.7C960 60 1056 60 1152 66.7C1248 73.3 1344 86.7 1392 93.3L1440 100V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z"
            fill="rgba(139,92,246,0.08)"
          />
        </svg>
      </div>

      <div className="section-shell flex flex-col gap-4 py-10 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            Sunny Luxury Services
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            {isArabic
              ? "أسلوب سينمائي، خدمة خاصة، وبدون أي compromises."
              : "Cinematic style, private service, and zero compromise."}
          </p>
        </div>
        <p className="text-sm text-zinc-500">
          {isArabic
            ? `© ${new Date().getFullYear()} Sunny. مصمم بعناية.`
            : `© ${new Date().getFullYear()} Sunny. Crafted with intention.`}
        </p>
      </div>
    </footer>
  );
}
