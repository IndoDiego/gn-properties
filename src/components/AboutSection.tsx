"use client";

import { motion, useInView } from "motion/react";
import { useTranslations } from "@/lib/i18n";
import { useRef } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

export default function AboutSection() {
  const { t } = useTranslations();
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const stats = [
    { value: "12+", label: t.about.stats.apartments },
    { value: "500+", label: t.about.stats.guests },
    { value: "8+", label: t.about.stats.years },
  ];

  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image with decorative frame */}
          <motion.div {...fadeInUp} className="relative">
            <div className="relative overflow-hidden">
              <motion.div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')",
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            {/* Decorative corner accent */}
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b-2 border-r-2 border-gold/20 lg:block" />
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l-2 border-t-2 border-gold/20 lg:block" />
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
            <motion.div
              className="mt-4 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p {...fadeInUp} className="mt-6 text-lg leading-relaxed text-gray-text">
              {t.about.description}
            </motion.p>

            {/* Stats with counter animation */}
            <motion.div
              ref={statsRef}
              {...fadeInUp}
              className="mt-10 grid grid-cols-3 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="group border-l border-gold/30 pl-4 transition-all hover:border-gold/60"
                  initial={{ opacity: 0, x: -20 }}
                  animate={statsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                >
                  <p className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-gold transition-all group-hover:text-gold-light">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-text">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
