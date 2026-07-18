import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Services in El Gouna — Marble Polishing, Chalets & More",
  description:
    "Browse marble polishing, chalet rentals, airport transfers, and premium finishing services in El Gouna and G-Cribs.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Luxury Services in El Gouna — Marble Polishing, Chalets & More",
    description:
      "Marble restoration, chalet stays, airport transfers, and finishing services along the Red Sea.",
    url: "https://new cityelgouna.vercel.app/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
