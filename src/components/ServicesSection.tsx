"use client";

import { motion } from "motion/react";
import { KeyRound, Sparkles, Wrench, Camera, TrendingUp, Headphones } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const serviceIcons = [KeyRound, Sparkles, Wrench, Camera, TrendingUp, Headphones];
const serviceKeys = ["checkin", "cleaning", "maintenance", "photography", "pricing", "support"] as const;

export default function ServicesSection() {
  const { t } = useTranslations();

  return (
    <section id="services" className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gold">{t.services.tag}</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-cream sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-gray-text">{t.services.subtitle}</p>
          <motion.div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={key}
                className="group relative overflow-hidden border border-border bg-bg-secondary p-8 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_8px_40px_rgba(198,168,78,0.06)]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Glow effect on hover */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/0 blur-3xl transition-all duration-700 group-hover:bg-gold/5" />

                <motion.div
                  className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/20 group-hover:shadow-[0_0_20px_rgba(198,168,78,0.15)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon size={26} />
                </motion.div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-cream transition-colors group-hover:text-gold">
                  {t.services.items[key].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {t.services.items[key].desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold/60 to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
