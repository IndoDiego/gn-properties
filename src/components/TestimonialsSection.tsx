"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
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

  const next = useCallback(() => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));

  // Auto-play
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

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
          <motion.div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          {/* Decorative quote mark */}
          <motion.div
            className="absolute -left-4 -top-6 z-10 sm:-left-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Quote className="h-12 w-12 text-gold/15 sm:h-16 sm:w-16" strokeWidth={1} />
          </motion.div>

          {/* Testimonial card */}
          <div className="relative overflow-hidden rounded-sm border border-border bg-bg-secondary/50 px-8 py-12 backdrop-blur-sm sm:px-12">
            {/* Subtle glow */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="mb-8 flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star size={20} className="fill-gold text-gold" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote with word-by-word animation */}
                <p className="text-lg leading-relaxed text-cream/80 sm:text-xl">
                  &ldquo;
                  {testimonial.text[locale].split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(8px)", opacity: 0 }}
                      animate={{ filter: "blur(0px)", opacity: 1 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                  &rdquo;
                </p>

                {/* Author */}
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="mx-auto mb-3 h-px w-12 bg-gold/30" />
                  <p className="font-semibold text-cream">{testimonial.name}</p>
                  <p className="text-sm text-gray-text">{testimonial.origin}</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border text-gray-text transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_15px_rgba(198,168,78,0.1)]"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
            </button>

            {/* Progress dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="relative h-2 overflow-hidden rounded-full transition-all duration-500"
                  style={{ width: i === current ? 32 : 8 }}
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <div className={`absolute inset-0 rounded-full ${i === current ? "bg-gold" : "bg-cream/20"}`} />
                  {i === current && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gold-light"
                      initial={{ scaleX: 0, transformOrigin: "left" }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 6, ease: "linear" }}
                      key={`progress-${current}`}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-border text-gray-text transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_15px_rgba(198,168,78,0.1)]"
              aria-label="Next"
            >
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
