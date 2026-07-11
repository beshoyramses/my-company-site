"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface ServiceGalleryProps {
  images: string[];
  title: string;
}

export function ServiceGallery({ images, title }: ServiceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayImages = useMemo(() => {
    if (!images.length) return [];
    return images.slice(0, 8);
  }, [images]);

  useEffect(() => {
    setActiveIndex(0);
  }, [displayImages]);

  if (!displayImages.length) return null;

  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] xl:grid-cols-[1.35fr_0.65fr]">
      <div className="group relative min-h-[420px] overflow-hidden rounded-[1.95rem] border border-white/10 bg-[#05030a] shadow-[0_35px_110px_rgba(0,0,0,0.4)] sm:min-h-[560px]">
        <Image
          src={displayImages[activeIndex]}
          alt={`${title} gallery ${activeIndex + 1}`}
          fill
          priority={activeIndex === 0}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.16),transparent_38%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.82))]" />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur">
            Curated gallery
          </div>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-300/80">
                Featured view
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
                {title}
              </h3>
            </div>
            <div className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-sm font-medium text-zinc-100 backdrop-blur">
              {activeIndex + 1} / {displayImages.length}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm uppercase tracking-[0.28em] text-zinc-400">
              Premium gallery
            </p>
            <p className="text-sm text-zinc-500">
              {displayImages.length} images
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
            {displayImages.map((image, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={`${title}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-[1.1rem] border text-left transition-all duration-300 ${
                    isActive
                      ? "border-violet-400/60 shadow-[0_0_0_1px_rgba(167,139,250,0.2)]"
                      : "border-white/10 hover:border-violet-400/40"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${title} preview ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-2 top-2 rounded-full border border-white/20 bg-black/35 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur">
                    {index + 1}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-[1.6rem] border border-violet-400/20 bg-violet-500/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
          <p className="text-sm uppercase tracking-[0.28em] text-violet-200/90">
            Luxury presentation
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-300">
            Every image is selected to reflect the atmosphere, craftsmanship,
            and finish of this experience in El Gouna and G-Cribs.
          </p>
        </div>
      </div>
    </div>
  );
}
