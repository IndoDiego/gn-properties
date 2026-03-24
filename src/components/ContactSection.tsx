"use client";

import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useTranslations();

  return (
    <section id="contact" className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
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
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            className="space-y-5 lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder={t.contact.form.name}
                className="w-full border border-border bg-bg-primary px-4 py-3 text-cream placeholder:text-gray-muted focus:border-gold focus:outline-none"
              />
              <input
                type="email"
                placeholder={t.contact.form.email}
                className="w-full border border-border bg-bg-primary px-4 py-3 text-cream placeholder:text-gray-muted focus:border-gold focus:outline-none"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="tel"
                placeholder={t.contact.form.phone}
                className="w-full border border-border bg-bg-primary px-4 py-3 text-cream placeholder:text-gray-muted focus:border-gold focus:outline-none"
              />
              <select className="w-full border border-border bg-bg-primary px-4 py-3 text-gray-muted focus:border-gold focus:outline-none [&:has(option:checked:not([value=''']))]:text-cream">
                <option value="">{t.contact.form.type}</option>
                <option value="guest">{t.contact.form.typeGuest}</option>
                <option value="owner">{t.contact.form.typeOwner}</option>
              </select>
            </div>
            <textarea
              rows={5}
              placeholder={t.contact.form.message}
              className="w-full border border-border bg-bg-primary px-4 py-3 text-cream placeholder:text-gray-muted focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-light sm:w-auto"
            >
              {t.contact.form.send}
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            className="space-y-8 lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-sm border border-border bg-bg-primary p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold/10 text-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-text">{t.contact.form.phone}</p>
                    <p className="mt-1 font-medium text-cream">{t.contact.info.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold/10 text-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-text">{t.contact.form.email}</p>
                    <p className="mt-1 font-medium text-cream">{t.contact.info.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold/10 text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-text">{t.locations.tag}</p>
                    <p className="mt-1 font-medium text-cream">{t.contact.info.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
