import "./globals.css";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { Providers } from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://g-cribs.com"),
  title: {
    default: "Sunny Luxury Services | El Gouna & G-Cribs",
    template: "%s | Sunny Luxury Services",
  },
  description:
    "Luxury marble polishing, chalet rentals, airport transfers, and premium finishing services in El Gouna and G-Cribs.",
  keywords: [
    "El Gouna luxury services",
    "G-Cribs chalet rental",
    "marble polishing El Gouna",
    "airport transfer El Gouna",
    "premium finishing Egypt",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_EG",
    url: "https://g-cribs.com",
    siteName: "Sunny Luxury Services",
    title: "Sunny Luxury Services | El Gouna & G-Cribs",
    description:
      "Luxury marble polishing, chalet rentals, airport transfers, and premium finishing services in El Gouna and G-Cribs.",
    images: [
      {
        url: "/og-images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Sunny Luxury Services in El Gouna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Luxury Services | El Gouna & G-Cribs",
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
      <body className="min-h-screen bg-transparent font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
