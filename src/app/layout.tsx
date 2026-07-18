import "./globals.css";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { Providers } from "./providers";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  metadataBase: new URL("https://new cityelgouna.vercel.app/"),
  title: {
    default:
      "Marble Polishing El Gouna | Professional Floor Restoration Services",
    template: "%s | new city Luxury Services",
  },
  applicationName: "new city Luxury Services",
  description:
    "Professional marble polishing in El Gouna and Hurghada. Diamond honing, stain removal, and sealing for villas, hotels, and apartments. Free quote +20 128 173 7377.",
  keywords: [
    "marble polishing El Gouna",
    "marble polishing in El Gouna",
    "marble restoration El Gouna",
    "marble floor polishing",
    "marble polishing service",
    "marble polishing company",
    "marble cleaning El Gouna",
    "granite polishing El Gouna",
    "stone polishing Hurghada",
    "marble sealing",
    "marble crystallization",
    "natural stone polishing",
    "remove marble scratches",
    "marble stain removal",
    "restore marble shine",
    "hotel marble polishing",
    "villa marble polishing",
    "تلميع الرخام في الجونة",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_EG",
    url: "https://new cityelgouna.vercel.app/",
    siteName: "new city Luxury Services",
    title: "new city Luxury Services | El Gouna & G-Cribs",
    description:
      "Luxury marble polishing, chalet rentals, airport transfers, and premium finishing services in El Gouna and G-Cribs.",
    images: [
      {
        url: "/og-images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "new city Luxury Services in El Gouna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "new city Luxury Services | El Gouna & G-Cribs",
    description:
      "Luxury marble polishing, chalet rentals, airport transfers, and premium finishing services in El Gouna and G-Cribs.",
    images: ["/og-images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="min-h-screen bg-transparent font-sans antialiased">
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
