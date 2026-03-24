"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useTranslations();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 150]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.5, 0.8]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
          y: backgroundY,
        }}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bg-primary"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bg-primary" />

      {/* Decorative corner frames */}
      <div className="absolute left-8 top-32 hidden h-32 w-32 border-l-2 border-t-2 border-gold/20 lg:block" />
      <div className="absolute right-8 bottom-32 hidden h-32 w-32 border-r-2 border-b-2 border-gold/20 lg:block" />

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-gold/30"
              style={{
                left: `${15 + i * 14}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + i * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Gold accent line */}
        <motion.div
          className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="mb-4 text-sm uppercase tracking-[0.3em] text-gold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          GN Properties — Luxury Homes
        </motion.p>

        <motion.h1
          className="font-[family-name:var(--font-cormorant)] text-4xl font-bold leading-tight text-cream sm:text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.hero.title}
        </motion.h1>

        {/* Gold accent line below title */}
        <motion.div
          className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        <motion.p
          className="mt-6 text-lg text-gray-text sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {/* Primary CTA with shimmer */}
          <a
            href="#apartments"
            className="group relative overflow-hidden rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-bg-primary transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(198,168,78,0.3)]"
          >
            <span className="relative z-10">{t.hero.cta1}</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="group rounded-sm border border-cream/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_20px_rgba(198,168,78,0.1)]"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-cream/30 p-1">
            <motion.div
              className="mx-auto h-2 w-1 rounded-full bg-gold"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
