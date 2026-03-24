import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant" });

export const metadata: Metadata = {
  title: "GN Properties | Luxury Homes - Apartamentos de lujo en Costa del Sol y Sevilla",
  description:
    "Gestión integral de apartamentos turísticos de lujo en la Costa del Sol y Sevilla. Experiencias únicas en destinos exclusivos.",
  keywords: ["apartamentos turísticos", "Costa del Sol", "Sevilla", "luxury homes", "alquiler vacacional", "GN Properties"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cormorant.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
