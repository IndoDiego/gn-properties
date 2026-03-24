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
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={key}
                className="group border border-border bg-bg-secondary p-8 transition-colors hover:border-gold/30"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-gold/10 text-gold transition-colors group-hover:bg-gold/20">
                  <Icon size={24} />
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-cream">
                  {t.services.items[key].title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {t.services.items[key].desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
