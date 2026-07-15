import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marble Polishing Locations | El Gouna, Hurghada & Red Sea",
  description: "Professional marble polishing services across El Gouna, Hurghada, Sahl Hasheesh, Makadi Bay, Soma Bay, Safaga and Red Sea areas. Free quotes available.",
  keywords: [
    "marble polishing El Gouna",
    "marble polishing Hurghada",
    "marble polishing Sahl Hasheesh",
    "marble polishing Makadi Bay",
    "marble polishing Soma Bay",
    "marble polishing Safaga",
    "marble polishing Red Sea",
  ],
};

const locations = [
  {
    name: "El Gouna",
    slug: "el-gouna",
    description: "Premium marble polishing for villas, hotels, and chalets in El Gouna including Abu Tig, Kafr El Gouna, and G-Cribs.",
    keywords: ["marble polishing El Gouna", "marble restoration El Gouna", "marble cleaning El Gouna", "granite polishing El Gouna"],
  },
  {
    name: "Hurghada",
    slug: "hurghada",
    description: "Expert marble polishing services throughout Hurghada for residential and commercial properties.",
    keywords: ["marble polishing Hurghada", "marble restoration Hurghada", "marble floor polishing Hurghada", "granite polishing Hurghada"],
  },
  {
    name: "Sahl Hasheesh",
    slug: "sahl-hasheesh",
    description: "Professional stone polishing and marble restoration in Sahl Hasheesh resorts and properties.",
    keywords: ["marble polishing Sahl Hasheesh", "stone polishing Sahl Hasheesh", "marble restoration Sahl Hasheesh"],
  },
  {
    name: "Makadi Bay",
    slug: "makadi-bay",
    description: "Marble floor polishing and restoration services for Makadi Bay hotels and villas.",
    keywords: ["marble polishing Makadi Bay", "floor polishing Makadi Bay", "marble restoration Makadi Bay"],
  },
  {
    name: "Soma Bay",
    slug: "soma-bay",
    description: "Premium marble and granite polishing for Soma Bay luxury properties and resorts.",
    keywords: ["marble polishing Soma Bay", "granite polishing Soma Bay", "stone restoration Soma Bay"],
  },
  {
    name: "Safaga",
    slug: "safaga",
    description: "Professional marble polishing services in Safaga for residential and commercial properties.",
    keywords: ["marble polishing Safaga", "marble restoration Safaga", "floor polishing Safaga"],
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marble Polishing Locations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional marble polishing and restoration services across the Red Sea region
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {location.name}
                </h2>
                <p className="text-gray-600 mb-4">{location.description}</p>
                <div className="flex flex-wrap gap-2">
                  {location.keywords.slice(0, 2).map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services/marble-polishing"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Learn About Our Marble Polishing Service
          </Link>
        </div>
      </div>
    </div>
  );
}
