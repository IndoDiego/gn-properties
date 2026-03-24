"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "@/lib/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "apartments", href: "#apartments" },
  { key: "services", href: "#services" },
  { key: "locations", href: "#locations" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const { t } = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-bg-primary/95 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-cormorant)] text-2xl font-bold tracking-wide text-cream">
            GN <span className="text-gold">Properties</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-gray-text transition-colors hover:text-gold"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          className="text-cream md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-bg-primary/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-gray-text transition-colors hover:text-gold"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
