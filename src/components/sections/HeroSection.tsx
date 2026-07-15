"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { IconArrowRight, IconSparkles } from "@tabler/icons-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isArabic } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frameId = 0;
    const particles: Array<{ x: number; y: number; vx: number; vy: number }> =
      [];
    const count = 90;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    for (let index = 0; index < count; index += 1) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      });
    }

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = "rgba(168, 85, 247, 0.16)";
      context.lineWidth = 1;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        for (
          let nextIndex = index + 1;
          nextIndex < particles.length;
          nextIndex += 1
        ) {
          const nextParticle = particles[nextIndex];
          const dx = particle.x - nextParticle.x;
          const dy = particle.y - nextParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.stroke();
          }
        }
      }

      frameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
      <div className="orb left-[8%] top-[16%] h-40 w-40 bg-violet-600/25" />
      <div className="orb bottom-[18%] right-[10%] h-56 w-56 bg-fuchsia-500/20" />

      <div className="section-shell relative z-10 pt-28 text-center sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
            <IconSparkles size={16} />
            {isArabic
              ? "تجارب فاخرة سينمائية، أعيد تصورها."
              : "Cinematic luxury experiences, reimagined."}
          </div>

          <h1 className="mb-7 font-display text-5xl font-semibold leading-[0.92] text-white sm:text-6xl md:text-8xl">
            {isArabic ? "تلميع الرخام في الجونة" : "Marble Polishing in El Gouna"}
            <span className="gradient-text block text-glow">
              {isArabic ? "خدمة احترافية للرخام" : "Professional Stone Restoration"}
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            {isArabic
              ? "تلميع الرخام بالألماس، وإزالة البقع والخدوش، وترميم الرخام للفلل والفنادق في الجونة والغردقة. خدمة احترافية مع ضمان الجودة."
              : "Diamond marble polishing, stain removal, and scratch repair for villas, hotels, and apartments in El Gouna and Hurghada. Professional restoration with guaranteed quality."}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-violet-400/40 bg-gradient-to-r from-violet-600/90 to-fuchsia-600/90 px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(217,70,239,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isArabic ? "استكشف الخدمات" : "Explore services"}
                <IconArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
            >
              {isArabic ? "احجز استشارة" : "Book a consultation"}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
