"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

const testimonials = [
  {
    name: "Sophie Laurent",
    origin: "Paris, France",
    rating: 5,
    text: {
      es: "Una experiencia increíble. El apartamento en Marbella superó todas nuestras expectativas. La atención fue impecable de principio a fin.",
      en: "An incredible experience. The apartment in Marbella exceeded all our expectations. The service was impeccable from start to finish.",
    },
  },
  {
    name: "James & Emily Thompson",
    origin: "London, UK",
    rating: 5,
    text: {
      es: "Sevilla nos enamoró y el apartamento fue el complemento perfecto. Decoración exquisita, ubicación inmejorable y un equipo siempre disponible.",
      en: "We fell in love with Seville and the apartment was the perfect complement. Exquisite decor, unbeatable location, and a team always available.",
    },
  },
  {
    name: "Hans Müller",
    origin: "Munich, Germany",
    rating: 5,
    text: {
      es: "Como propietario, confiar en GN Properties fue la mejor decisión. Mi apartamento está siempre ocupado y en perfectas condiciones. Profesionalidad total.",
      en: "As an owner, trusting GN Properties was the best decision. My apartment is always occupied and in perfect condition. Total professionalism.",
    },
  },
];

export default function TestimonialsSection() {
  const { t, locale } = useTranslations();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <section className="bg-bg-primary py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gold">{t.testimonials.tag}</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-cream sm:text-4xl">
            {t.testimonials.title}
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="text-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {/* Stars */}
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg leading-relaxed text-cream/80 italic sm:text-xl">
                &ldquo;{testimonial.text[locale]}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-8">
                <p className="font-semibold text-cream">{testimonial.name}</p>
                <p className="text-sm text-gray-text">{testimonial.origin}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gray-text transition-colors hover:border-gold hover:text-gold"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-gold" : "w-2 bg-cream/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gray-text transition-colors hover:border-gold hover:text-gold"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
