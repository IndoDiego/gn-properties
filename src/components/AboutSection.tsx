"use client";

import { motion } from "motion/react";
import { useTranslations } from "@/lib/i18n";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

export default function AboutSection() {
  const { t } = useTranslations();

  const stats = [
    { value: "12+", label: t.about.stats.apartments },
    { value: "500+", label: t.about.stats.guests },
    { value: "8+", label: t.about.stats.years },
  ];

  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div {...fadeInUp} className="relative overflow-hidden">
            <div
              className="aspect-[4/3] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')",
              }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.p {...fadeInUp} className="mb-2 text-sm uppercase tracking-[0.2em] text-gold">
              {t.about.tag}
            </motion.p>
            <motion.h2
              {...fadeInUp}
              className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-cream sm:text-4xl"
            >
              {t.about.title}
            </motion.h2>
            <motion.p {...fadeInUp} className="mt-6 text-lg leading-relaxed text-gray-text">
              {t.about.description}
            </motion.p>

            {/* Stats */}
            <motion.div {...fadeInUp} className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-gold/30 pl-4">
                  <p className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-gold">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-text">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
