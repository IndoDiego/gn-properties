"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-bg-primary/95 shadow-lg shadow-black/20 backdrop-blur-md border-b border-gold/20"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <span className="font-[family-name:var(--font-cormorant)] text-2xl font-bold tracking-wide text-cream transition-all duration-300 group-hover:tracking-wider">
            GN <span className="text-gold">Properties</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="group relative text-sm font-medium text-gray-text transition-colors hover:text-gold"
            >
              <span className="relative overflow-hidden inline-block">
                <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                  {t.nav[link.key]}
                </span>
                <span className="absolute top-full left-0 block text-gold transition-transform duration-300 group-hover:-translate-y-full">
                  {t.nav[link.key]}
                </span>
              </span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <motion.button
          className="relative z-50 text-cream md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold/10 bg-bg-primary/98 backdrop-blur-xl md:hidden"
          >
            <motion.div
              className="flex flex-col gap-1 px-6 py-6"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center gap-3 rounded-lg px-4 py-3 text-lg font-medium text-gray-text transition-colors hover:bg-gold/5 hover:text-gold"
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 },
                  }}
                >
                  <span className="h-px w-4 bg-gold/40 transition-all duration-300 group-hover:w-8 group-hover:bg-gold" />
                  {t.nav[link.key]}
                </motion.a>
              ))}
              <motion.div
                className="pt-4 pl-4"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -20 },
                }}
              >
                <LanguageSwitcher />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
