"use client";

import { useTranslations } from "@/lib/i18n";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-cream">
              GN <span className="text-gold">Properties</span>
            </span>
            <p className="mt-2 text-xs uppercase tracking-widest text-gold/60">Luxury Homes</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-text">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {(["home", "apartments", "services", "locations", "contact"] as const).map((key) => (
                <li key={key}>
                  <a href={`#${key === "home" ? "home" : key}`} className="text-sm text-gray-text transition-colors hover:text-gold">
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">{t.contact.tag}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-text">
                <Phone size={16} className="text-gold" />
                {t.contact.info.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-text">
                <Mail size={16} className="text-gold" />
                {t.contact.info.email}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-text">
                <MapPin size={16} className="text-gold" />
                {t.contact.info.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-gray-muted">
          &copy; {new Date().getFullYear()} GN Properties Luxury Homes. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
