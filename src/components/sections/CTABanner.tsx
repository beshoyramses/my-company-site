"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/lib/i18n";
import { IconArrowRight } from "@tabler/icons-react";

export default function CTABanner() {
  const containerRef = useRef<HTMLElement>(null);
  const { isArabic } = useLanguage();

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const moveX = (x / rect.width - 0.5) * 18;
    const moveY = (y / rect.height - 0.5) * 18;
    containerRef.current.style.setProperty("--x", `${moveX}px`);
    containerRef.current.style.setProperty("--y", `${moveY}px`);
  };

  return (
    <section className="section-shell py-12 sm:py-16 lg:py-20">
      <motion.section
        ref={containerRef}
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/12 via-[#090611] to-fuchsia-500/10 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-12"
        style={{ transform: "translate(var(--x, 0), var(--y, 0))" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(217,70,239,0.12),_transparent_30%)]" />
        <div className="relative z-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.34em] text-violet-200">
            {isArabic ? "استشارة خاصة" : "Private consultation"}
          </p>
          <h2 className="mb-4 font-display text-3xl font-semibold text-white sm:text-5xl">
            {isArabic ? (
              <>
                هل أنت مستعد لـ
                <span className="gradient-text">حرفية استثنائية</span>؟
              </>
            ) : (
              <>
                Ready for <span className="gradient-text">exceptional</span>{" "}
                craftsmanship?
              </>
            )}
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-zinc-400">
            {isArabic
              ? "لنصمم لك تجربة سلسة تناسب عقارك أو رحلتك أو أهدافك في التجديد."
              : "Let&apos;s shape a seamless experience around your property, travel, or renovation goals."}
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-violet-400/40 bg-violet-600/90 px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-500 hover:scale-[1.02] hover:bg-violet-500"
          >
            <span>{isArabic ? "ابدأ محادثة" : "Start a conversation"}</span>
            <IconArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </motion.section>
    </section>
  );
}
