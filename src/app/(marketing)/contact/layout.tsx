import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact new city Luxury Services in El Gouna",
  description:
    "Book marble polishing, chalet rentals, airport transfers, and finishing services in El Gouna. Call +20 128 173 7377 or email minanazer25@gmail.com.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact new city Luxury Services in El Gouna",
    description:
      "Reach our El Gouna team for marble polishing, chalet stays, and premium property services.",
    url: `${BUSINESS.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
