"use client";

import { motion } from "motion/react";
import { useTranslations } from "@/lib/i18n";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const { t } = useTranslations();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-cream">
              GN <span className="text-gold">Properties</span>
            </span>
            <p className="mt-2 text-xs uppercase tracking-widest text-gold/60">Luxury Homes</p>
            <div className="mt-3 h-px w-12 bg-gradient-to-r from-gold/40 to-transparent" />
            <p className="mt-4 text-sm leading-relaxed text-gray-text">{t.footer.description}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {(["home", "apartments", "services", "locations", "contact"] as const).map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="group flex items-center gap-2 text-sm text-gray-text transition-colors hover:text-gold"
                  >
                    <span className="h-px w-3 bg-gold/30 transition-all duration-300 group-hover:w-5 group-hover:bg-gold" />
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">{t.contact.tag}</h4>
            <ul className="space-y-3">
              {[
                { icon: Phone, text: t.contact.info.phone },
                { icon: Mail, text: t.contact.info.email },
                { icon: MapPin, text: t.contact.info.address },
              ].map((item, i) => (
                <li key={i} className="group flex items-center gap-3 text-sm text-gray-text transition-colors hover:text-cream">
                  <item.icon size={16} className="text-gold transition-transform group-hover:scale-110" />
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
          <p className="text-sm text-gray-muted">
            &copy; {new Date().getFullYear()} GN Properties Luxury Homes. {t.footer.rights}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-border text-gray-muted transition-all hover:border-gold hover:text-gold"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
