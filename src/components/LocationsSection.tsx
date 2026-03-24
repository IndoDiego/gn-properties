"use client";

import { motion } from "motion/react";
import { useTranslations } from "@/lib/i18n";

const locations = [
  {
    key: "costadelsol" as const,
    image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=800&q=80",
  },
  {
    key: "sevilla" as const,
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80",
  },
];

export default function LocationsSection() {
  const { t } = useTranslations();

  return (
    <section id="locations" className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gold">{t.locations.tag}</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-cream sm:text-4xl">
            {t.locations.title}
          </h2>
          <p className="mt-4 text-gray-text">{t.locations.subtitle}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.key}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div
                className="aspect-[16/9] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${loc.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-cream sm:text-3xl">
                  {t.locations[loc.key].name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-text">
                  {t.locations[loc.key].desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
