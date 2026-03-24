"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Send, User, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

export default function ContactSection() {
  const { t, locale } = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-bg-secondary py-24">
      {/* Background accent */}
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gold/3 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gold/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gold">{t.contact.tag}</p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-cream sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-gray-text">{t.contact.subtitle}</p>
          <motion.div
            className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  className="space-y-5"
                  onSubmit={handleSubmit}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="group relative">
                      <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-muted transition-colors group-focus-within:text-gold" />
                      <input
                        type="text"
                        placeholder={t.contact.form.name}
                        required
                        className="w-full border border-border bg-bg-primary py-3.5 pl-11 pr-4 text-cream placeholder:text-gray-muted transition-all focus:border-gold focus:outline-none focus:shadow-[0_0_15px_rgba(198,168,78,0.08)]"
                      />
                    </div>
                    <div className="group relative">
                      <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-muted transition-colors group-focus-within:text-gold" />
                      <input
                        type="email"
                        placeholder={t.contact.form.email}
                        required
                        className="w-full border border-border bg-bg-primary py-3.5 pl-11 pr-4 text-cream placeholder:text-gray-muted transition-all focus:border-gold focus:outline-none focus:shadow-[0_0_15px_rgba(198,168,78,0.08)]"
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="group relative">
                      <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-muted transition-colors group-focus-within:text-gold" />
                      <input
                        type="tel"
                        placeholder={t.contact.form.phone}
                        className="w-full border border-border bg-bg-primary py-3.5 pl-11 pr-4 text-cream placeholder:text-gray-muted transition-all focus:border-gold focus:outline-none focus:shadow-[0_0_15px_rgba(198,168,78,0.08)]"
                      />
                    </div>
                    <select className="w-full border border-border bg-bg-primary px-4 py-3.5 text-gray-muted transition-all focus:border-gold focus:outline-none focus:shadow-[0_0_15px_rgba(198,168,78,0.08)] [&:has(option:checked:not([value=''']))]:text-cream">
                      <option value="">{t.contact.form.type}</option>
                      <option value="guest">{t.contact.form.typeGuest}</option>
                      <option value="owner">{t.contact.form.typeOwner}</option>
                    </select>
                  </div>
                  <div className="group relative">
                    <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-gray-muted transition-colors group-focus-within:text-gold" />
                    <textarea
                      rows={5}
                      placeholder={t.contact.form.message}
                      required
                      className="w-full border border-border bg-bg-primary py-3.5 pl-11 pr-4 text-cream placeholder:text-gray-muted transition-all focus:border-gold focus:outline-none focus:shadow-[0_0_15px_rgba(198,168,78,0.08)]"
                    />
                  </div>

                  {/* Submit button with shimmer */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-bg-primary transition-all hover:bg-gold-light hover:shadow-[0_0_30px_rgba(198,168,78,0.2)] disabled:opacity-60 sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <motion.div
                          className="h-5 w-5 rounded-full border-2 border-bg-primary/30 border-t-bg-primary"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {t.contact.form.send}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-16 text-center"
                >
                  <motion.div
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold/30 bg-gold/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="h-10 w-10 text-gold" />
                  </motion.div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-cream">
                    {locale === "es" ? "¡Mensaje enviado!" : "Message Sent!"}
                  </h3>
                  <p className="mt-2 text-gray-text">
                    {locale === "es"
                      ? "Gracias por contactarnos. Responderemos en menos de 24 horas."
                      : "Thank you for reaching out. We'll respond within 24 hours."}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 border border-border px-6 py-2 text-sm text-gray-text transition-colors hover:border-gold hover:text-gold"
                  >
                    {locale === "es" ? "Enviar otro mensaje" : "Send another message"}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="space-y-6 lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-sm border border-border bg-bg-primary p-8">
              <div className="space-y-6">
                {[
                  { icon: Phone, label: t.contact.form.phone, value: t.contact.info.phone },
                  { icon: Mail, label: t.contact.form.email, value: t.contact.info.email },
                  { icon: MapPin, label: t.locations.tag, value: t.contact.info.address },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.div
                      className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold/20 group-hover:shadow-[0_0_15px_rgba(198,168,78,0.1)]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <item.icon size={20} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-text">{item.label}</p>
                      <p className="mt-1 font-medium text-cream">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick response card */}
            <motion.div
              className="rounded-sm border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm font-medium text-gold">
                {locale === "es" ? "Respuesta rápida garantizada" : "Quick Response Guarantee"}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-text">
                {locale === "es"
                  ? "Todas las consultas se responden en menos de 2 horas durante horario laboral."
                  : "All inquiries are answered within 2 hours during business hours."}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
