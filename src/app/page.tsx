"use client";

import I18nProvider from "@/components/I18nProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ApartmentsSection from "@/components/ApartmentsSection";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ApartmentsSection />
        <ServicesSection />
        <LocationsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </I18nProvider>
  );
}
