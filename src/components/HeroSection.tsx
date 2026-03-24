"use client";

import { motion } from "motion/react";
import { useTranslations } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useTranslations();

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bg-primary" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
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
          <a
            href="#apartments"
            className="rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-light"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-cream/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:border-gold hover:text-gold"
          >
            {t.hero.cta2}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-cream/30 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}
