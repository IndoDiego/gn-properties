"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
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
  const { t, locale } = useTranslations();

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
          <motion.div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
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
              <motion.div
                className="aspect-[16/9] bg-cover bg-center"
                style={{ backgroundImage: `url('${loc.image}')` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Decorative border on hover */}
              <div className="absolute inset-4 border border-transparent transition-all duration-500 group-hover:border-gold/20" />

              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-cream sm:text-3xl">
                  {t.locations[loc.key].name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-text">
                  {t.locations[loc.key].desc}
                </p>
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-gold opacity-0 transition-all duration-300 group-hover:opacity-100"
                  initial={false}
                >
                  <span className="uppercase tracking-wider">
                    {locale === "es" ? "Explorar" : "Explore"}
                  </span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
