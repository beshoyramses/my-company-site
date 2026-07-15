import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marble & Stone Polishing by Material | Carrara, Granite & Travertine",
  description: "Specialized polishing services for white marble, Carrara, Crema Marfil, Egyptian marble, limestone, terrazzo, granite countertops, and travertine in El Gouna and Hurghada.",
  keywords: [
    "white marble polishing",
    "Carrara marble polishing",
    "Crema Marfil polishing",
    "Egyptian marble polishing",
    "limestone polishing",
    "terrazzo floor polishing",
    "granite countertop polishing",
    "travertine restoration",
  ],
};

const materials = [
  {
    name: "White Marble",
    slug: "white-marble-polishing",
    description: "Specialized polishing for white marble to maintain brightness and remove yellowing.",
    keywords: ["white marble polishing", "white marble restoration", "light marble care"],
  },
  {
    name: "Carrara Marble",
    slug: "carrara-marble-polishing",
    description: "Expert Carrara marble polishing for this classic Italian stone.",
    keywords: ["Carrara marble polishing", "Italian marble restoration", "Carrara marble care"],
  },
  {
    name: "Crema Marfil",
    slug: "crema-marfil-polishing",
    description: "Professional Crema Marfil marble polishing and restoration.",
    keywords: ["Crema Marfil polishing", "Spanish marble restoration", "cream marble care"],
  },
  {
    name: "Egyptian Marble",
    slug: "egyptian-marble-polishing",
    description: "Local Egyptian marble polishing with expertise in regional stone varieties.",
    keywords: ["Egyptian marble polishing", "local marble restoration", "Egyptian stone care"],
  },
  {
    name: "Limestone",
    slug: "limestone-polishing",
    description: "Professional limestone polishing and sealing for natural stone surfaces.",
    keywords: ["limestone polishing", "limestone restoration", "natural stone care"],
  },
  {
    name: "Terrazzo",
    slug: "terrazzo-floor-polishing",
    description: "Terrazzo floor polishing to restore the classic composite surface.",
    keywords: ["terrazzo floor polishing", "terrazzo restoration", "terrazzo care"],
  },
  {
    name: "Granite Countertops",
    slug: "granite-countertop-polishing",
    description: "Granite countertop polishing for kitchen and bathroom surfaces.",
    keywords: ["granite countertop polishing", "granite restoration", "granite care"],
  },
  {
    name: "Travertine",
    slug: "travertine-restoration",
    description: "Travertine restoration including filling, honing, and polishing.",
    keywords: ["travertine restoration", "travertine polishing", "travertine care"],
  },
];

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marble & Stone Polishing by Material
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized restoration services for every type of natural stone in El Gouna and Hurghada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material) => (
            <Link
              key={material.slug}
              href={`/materials/${material.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {material.name}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">{material.description}</p>
                <div className="flex flex-wrap gap-2">
                  {material.keywords.slice(0, 2).map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full"
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
            Get a Quote for Your Stone Type
          </Link>
        </div>
      </div>
    </div>
  );
}
