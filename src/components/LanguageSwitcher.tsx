"use client";

import { useTranslations } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useTranslations();

  return (
    <button
      onClick={() => setLocale(locale === "es" ? "en" : "es")}
      className="flex items-center gap-1.5 rounded-full border border-gold/30 px-3 py-1.5 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
    >
      <span className={locale === "es" ? "text-gold" : "text-gray-text"}>ES</span>
      <span className="text-gray-muted">|</span>
      <span className={locale === "en" ? "text-gold" : "text-gray-text"}>EN</span>
    </button>
  );
}
