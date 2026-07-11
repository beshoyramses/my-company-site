"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import { IconMenu2, IconX } from "@tabler/icons-react";

const navItems = [
  { label: "Home", labelAr: "الرئيسية", href: "/" },
  { label: "Services", labelAr: "الخدمات", href: "/services" },
  { label: "About", labelAr: "عن NEXUS", href: "/about" },
  { label: "Blog", labelAr: "المدونة", href: "/blog" },
  { label: "Contact", labelAr: "تواصل", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isArabic, toggleLanguage } = useLanguage();
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    const link = linkRefs.current[index];
    if (!link) return;
    const rect = link.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    link.style.transform = `translate(${x * 0.16}px, ${y * 0.16}px)`;
  };

  const handleMouseLeave = (index: number) => {
    const link = linkRefs.current[index];
    if (link) link.style.transform = "";
  };

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-4 left-1/2 z-50 w-[95%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 px-3 py-3 transition-all duration-500 md:px-4",
        scrolled
          ? "glass shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
          : "bg-transparent backdrop-blur-none",
      )}
    >
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full px-3 py-2 transition-all hover:bg-white/5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/15 text-sm font-semibold text-violet-200">
            N
          </div>
          <div>
            <p className="font-display text-sm font-semibold tracking-[0.28em] text-white/90">
              NEXUS
            </p>
            <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
              Luxury services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(element) => {
                linkRefs.current[index] = element;
              }}
              onMouseMove={(event) => handleMouseMove(event, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="magnetic-btn relative rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white"
            >
              {isArabic ? item.labelAr : item.label}
              <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            className="ml-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:bg-white/10"
          >
            {isArabic ? "English" : "العربية"}
          </button>
          <Link
            href="/contact"
            className="ml-3 rounded-full border border-violet-400/30 bg-violet-500/12 px-4 py-2 text-sm font-semibold text-violet-100 transition-all duration-300 hover:bg-violet-500/24 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            {isArabic ? "اطلب عرض سعر" : "Get a Quote"}
          </Link>
        </nav>

        <button
          aria-label="Toggle navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#05030c]/90 md:hidden"
          >
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-3 text-base text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {isArabic ? item.labelAr : item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  toggleLanguage();
                  setMobileOpen(false);
                }}
                className="mt-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-left text-base font-semibold text-zinc-200"
              >
                {isArabic ? "English" : "العربية"}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
