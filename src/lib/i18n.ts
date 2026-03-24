"use client";

import { createContext, useContext } from "react";

export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      apartments: "Apartamentos",
      services: "Servicios",
      locations: "Ubicaciones",
      contact: "Contacto",
    },
    hero: {
      title: "Apartamentos de lujo en la Costa del Sol y Sevilla",
      subtitle: "Experiencias únicas en destinos exclusivos",
      cta1: "Ver apartamentos",
      cta2: "Contactar",
    },
    about: {
      tag: "Sobre nosotros",
      title: "Gestión de excelencia para propiedades únicas",
      description:
        "En GN Properties nos dedicamos a la gestión integral de apartamentos turísticos de lujo. Cuidamos cada detalle para que propietarios y huéspedes disfruten de una experiencia excepcional.",
      stats: {
        apartments: "Apartamentos",
        guests: "Huéspedes satisfechos",
        years: "Años de experiencia",
      },
    },
    apartments: {
      tag: "Portfolio",
      title: "Nuestros apartamentos",
      subtitle: "Descubre nuestra selección de propiedades exclusivas",
      viewDetails: "Ver detalles",
      from: "Desde",
      perNight: "/noche",
      guests: "huéspedes",
    },
    services: {
      tag: "Servicios",
      title: "Gestión integral para propietarios",
      subtitle: "Nos encargamos de todo para maximizar la rentabilidad de tu propiedad",
      items: {
        checkin: { title: "Check-in / Check-out", desc: "Recepción personalizada de huéspedes con atención 24/7 y gestión de llaves." },
        cleaning: { title: "Limpieza profesional", desc: "Servicio de limpieza premium entre estancias con productos de alta gama." },
        maintenance: { title: "Mantenimiento", desc: "Supervisión continua y reparaciones preventivas para mantener tu propiedad impecable." },
        photography: { title: "Fotografía profesional", desc: "Sesiones fotográficas y vídeos que destacan lo mejor de cada propiedad." },
        pricing: { title: "Pricing dinámico", desc: "Algoritmos de precios inteligentes para maximizar ocupación e ingresos." },
        support: { title: "Atención al huésped 24/7", desc: "Soporte multilingüe disponible en todo momento para cualquier necesidad." },
      },
    },
    locations: {
      tag: "Ubicaciones",
      title: "Destinos exclusivos",
      subtitle: "Propiedades en los enclaves más deseados del sur de España",
      costadelsol: {
        name: "Costa del Sol",
        desc: "Desde Marbella hasta Málaga, la Costa del Sol ofrece playas doradas, gastronomía mediterránea y un estilo de vida inigualable durante todo el año.",
      },
      sevilla: {
        name: "Sevilla",
        desc: "Capital andaluza llena de historia, arte y cultura. Sus barrios emblemáticos como Santa Cruz y Triana son el escenario perfecto para una estancia inolvidable.",
      },
    },
    testimonials: {
      tag: "Testimonios",
      title: "Lo que dicen nuestros huéspedes",
    },
    contact: {
      tag: "Contacto",
      title: "¿Hablamos?",
      subtitle: "Estamos aquí para ayudarte, ya seas huésped o propietario",
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        phone: "Teléfono",
        type: "Soy...",
        typeGuest: "Huésped",
        typeOwner: "Propietario",
        message: "Mensaje",
        send: "Enviar mensaje",
      },
      info: {
        phone: "+34 600 000 000",
        email: "info@gnproperties.com",
        address: "Costa del Sol, Málaga, España",
      },
    },
    footer: {
      description: "Gestión integral de apartamentos turísticos de lujo en la Costa del Sol y Sevilla.",
      quickLinks: "Enlaces rápidos",
      legal: "Legal",
      privacy: "Política de privacidad",
      terms: "Términos y condiciones",
      cookies: "Política de cookies",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      apartments: "Apartments",
      services: "Services",
      locations: "Locations",
      contact: "Contact",
    },
    hero: {
      title: "Luxury apartments on the Costa del Sol & Seville",
      subtitle: "Unique experiences in exclusive destinations",
      cta1: "View apartments",
      cta2: "Contact us",
    },
    about: {
      tag: "About us",
      title: "Management excellence for unique properties",
      description:
        "At GN Properties we specialize in the comprehensive management of luxury tourist apartments. We take care of every detail so that owners and guests enjoy an exceptional experience.",
      stats: {
        apartments: "Apartments",
        guests: "Happy guests",
        years: "Years of experience",
      },
    },
    apartments: {
      tag: "Portfolio",
      title: "Our apartments",
      subtitle: "Discover our selection of exclusive properties",
      viewDetails: "View details",
      from: "From",
      perNight: "/night",
      guests: "guests",
    },
    services: {
      tag: "Services",
      title: "Full management for property owners",
      subtitle: "We handle everything to maximize your property's profitability",
      items: {
        checkin: { title: "Check-in / Check-out", desc: "Personalized guest reception with 24/7 service and key management." },
        cleaning: { title: "Professional cleaning", desc: "Premium cleaning service between stays with high-end products." },
        maintenance: { title: "Maintenance", desc: "Continuous supervision and preventive repairs to keep your property flawless." },
        photography: { title: "Professional photography", desc: "Photo shoots and videos that highlight the best of each property." },
        pricing: { title: "Dynamic pricing", desc: "Smart pricing algorithms to maximize occupancy and revenue." },
        support: { title: "24/7 Guest support", desc: "Multilingual support available at all times for any need." },
      },
    },
    locations: {
      tag: "Locations",
      title: "Exclusive destinations",
      subtitle: "Properties in the most desirable enclaves in southern Spain",
      costadelsol: {
        name: "Costa del Sol",
        desc: "From Marbella to Málaga, the Costa del Sol offers golden beaches, Mediterranean cuisine, and an unmatched lifestyle all year round.",
      },
      sevilla: {
        name: "Seville",
        desc: "The Andalusian capital full of history, art, and culture. Its iconic neighborhoods like Santa Cruz and Triana are the perfect setting for an unforgettable stay.",
      },
    },
    testimonials: {
      tag: "Testimonials",
      title: "What our guests say",
    },
    contact: {
      tag: "Contact",
      title: "Let's talk",
      subtitle: "We're here to help, whether you're a guest or a property owner",
      form: {
        name: "Full name",
        email: "Email address",
        phone: "Phone",
        type: "I am a...",
        typeGuest: "Guest",
        typeOwner: "Property owner",
        message: "Message",
        send: "Send message",
      },
      info: {
        phone: "+34 600 000 000",
        email: "info@gnproperties.com",
        address: "Costa del Sol, Málaga, Spain",
      },
    },
    footer: {
      description: "Comprehensive management of luxury tourist apartments on the Costa del Sol and Seville.",
      quickLinks: "Quick links",
      legal: "Legal",
      privacy: "Privacy policy",
      terms: "Terms & conditions",
      cookies: "Cookie policy",
      rights: "All rights reserved.",
    },
  },
} as const;

type DeepString<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepString<T[K]>;
};

export type Translations = DeepString<(typeof translations)["es"]>;

export const I18nContext = createContext<{
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}>({
  locale: "es",
  t: translations.es,
  setLocale: () => {},
});

export function useTranslations() {
  return useContext(I18nContext);
}
