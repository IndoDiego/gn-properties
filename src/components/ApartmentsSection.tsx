"use client";

import { motion } from "motion/react";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const apartments = [
  { id: 1, name: "Ático Marbella Golden Mile", location: "Marbella", guests: 6, price: 180, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80" },
  { id: 2, name: "Suite Sevilla Santa Cruz", location: "Sevilla", guests: 4, price: 120, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" },
  { id: 3, name: "Villa Estepona Beach", location: "Estepona", guests: 8, price: 250, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { id: 4, name: "Loft Málaga Centro", location: "Málaga", guests: 2, price: 95, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80" },
  { id: 5, name: "Penthouse Fuengirola Sea", location: "Fuengirola", guests: 5, price: 160, image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80" },
  { id: 6, name: "Apartamento Sevilla Triana", location: "Sevilla", guests: 4, price: 110, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
];

export default function ApartmentsSection() {
  const { t } = useTranslations();

  return (
    <section id="apartments" className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gold">{t.apartments.tag}</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-cream sm:text-4xl">
            {t.apartments.title}
          </h2>
          <p className="mt-4 text-gray-text">{t.apartments.subtitle}</p>
          <motion.div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {apartments.map((apt, i) => (
            <motion.div
              key={apt.id}
              className="group cursor-pointer overflow-hidden border border-border bg-bg-primary/50 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_8px_40px_rgba(198,168,78,0.08)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url('${apt.image}')` }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-sm border border-cream/80 bg-black/30 px-6 py-2 text-sm font-medium uppercase tracking-wider text-cream backdrop-blur-sm transition-colors hover:bg-gold hover:text-bg-primary">
                    {t.apartments.viewDetails}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
                {/* Price badge */}
                <div className="absolute right-4 top-4 rounded-sm bg-bg-primary/90 px-3 py-1.5 backdrop-blur-sm">
                  <span className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-gold">
                    {apt.price}&euro;
                  </span>
                  <span className="text-xs text-gray-text">{t.apartments.perNight}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-cream transition-colors group-hover:text-gold">
                  {apt.name}
                </h3>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-text">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-gold" />
                    {apt.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-gold" />
                    {apt.guests} {t.apartments.guests}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
