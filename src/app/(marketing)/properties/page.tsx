import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marble Polishing by Property Type | Hotels, Villas & Commercial",
  description: "Specialized marble polishing services for hotels, villas, apartments, offices, restaurants, hospitals, showrooms, and Airbnb properties in El Gouna and Hurghada.",
  keywords: [
    "hotel marble polishing",
    "villa marble polishing",
    "apartment marble polishing",
    "office marble polishing",
    "restaurant marble polishing",
    "hospital marble polishing",
    "showroom marble polishing",
    "Airbnb marble polishing",
  ],
};

const propertyTypes = [
  {
    name: "Hotels",
    slug: "hotel-marble-polishing",
    description: "Professional marble polishing for hotel lobbies, rooms, and public areas with minimal guest disruption.",
    keywords: ["hotel marble polishing", "hotel floor restoration", "resort marble polishing"],
  },
  {
    name: "Villas",
    slug: "villa-marble-polishing",
    description: "Expert marble restoration for luxury villas in El Gouna and Hurghada.",
    keywords: ["villa marble polishing", "luxury villa marble restoration", "private villa floor care"],
  },
  {
    name: "Apartments",
    slug: "apartment-marble-polishing",
    description: "Affordable marble polishing for apartments and condos.",
    keywords: ["apartment marble polishing", "condo marble restoration", "flat marble polishing"],
  },
  {
    name: "Offices",
    slug: "office-marble-polishing",
    description: "Professional marble floor care for office buildings and commercial spaces.",
    keywords: ["office marble polishing", "commercial marble polishing", "office floor restoration"],
  },
  {
    name: "Restaurants",
    slug: "restaurant-marble-polishing",
    description: "Marble polishing for restaurant floors, countertops, and dining areas.",
    keywords: ["restaurant marble polishing", "restaurant floor care", "commercial kitchen marble"],
  },
  {
    name: "Hospitals",
    slug: "hospital-marble-polishing",
    description: "Hygienic marble polishing for healthcare facilities and hospitals.",
    keywords: ["hospital marble polishing", "healthcare marble cleaning", "clinic floor restoration"],
  },
  {
    name: "Showrooms",
    slug: "showroom-marble-polishing",
    description: "Showroom-quality marble polishing for retail and display spaces.",
    keywords: ["showroom marble polishing", "retail marble care", "display floor polishing"],
  },
  {
    name: "Airbnb",
    slug: "airbnb-marble-polishing",
    description: "Quick turnaround marble polishing for Airbnb and rental properties.",
    keywords: ["Airbnb marble polishing", "rental property marble care", "vacation rental floor restoration"],
  },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marble Polishing by Property Type
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized marble restoration services for every property type in El Gouna and Hurghada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((property) => (
            <Link
              key={property.slug}
              href={`/properties/${property.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {property.name}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">{property.description}</p>
                <div className="flex flex-wrap gap-2">
                  {property.keywords.slice(0, 2).map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full"
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
            Get a Quote for Your Property
          </Link>
        </div>
      </div>
    </div>
  );
}
