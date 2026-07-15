import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marble Repair Solutions | Fix Scratches, Stains & Dull Floors",
  description: "Professional marble repair services for scratches, stains, dull floors, etching, cracks, and chips. Expert restoration to bring back your marble's shine.",
  keywords: [
    "remove marble scratches",
    "scratched marble repair",
    "dull marble floor",
    "marble stain removal",
    "marble etching repair",
    "restore marble shine",
    "polish old marble",
    "marble crack repair",
    "chipped marble repair",
  ],
};

const problems = [
  {
    name: "Marble Scratches",
    slug: "scratched-marble-repair",
    description: "Remove scratches and restore smooth surface with professional diamond honing.",
    keywords: ["remove marble scratches", "scratched marble repair", "marble scratch removal"],
  },
  {
    name: "Dull Marble Floors",
    slug: "dull-marble-floor",
    description: "Bring back the mirror shine to dull, worn marble floors.",
    keywords: ["dull marble floor", "restore marble shine", "polish old marble"],
  },
  {
    name: "Marble Stains",
    slug: "marble-stain-removal",
    description: "Expert stain removal for wine, coffee, oil, and water marks.",
    keywords: ["marble stain removal", "remove marble stains", "marble cleaning"],
  },
  {
    name: "Marble Etching",
    slug: "marble-etching-repair",
    description: "Repair acid etch marks from spills and cleaning products.",
    keywords: ["marble etching repair", "fix marble etching", "acid etch removal"],
  },
  {
    name: "Marble Cracks",
    slug: "marble-crack-repair",
    description: "Professional crack repair and restoration for damaged marble.",
    keywords: ["marble crack repair", "fix cracked marble", "marble restoration"],
  },
  {
    name: "Chipped Marble",
    slug: "chipped-marble-repair",
    description: "Repair chips and edge damage to restore marble surfaces.",
    keywords: ["chipped marble repair", "fix marble chips", "marble edge repair"],
  },
];

export default function ProblemsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marble Repair Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert repair and restoration for all marble problems in El Gouna and Hurghada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem) => (
            <Link
              key={problem.slug}
              href={`/problems/${problem.slug}`}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {problem.name}
                </h2>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <div className="flex flex-wrap gap-2">
                  {problem.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs bg-red-50 text-red-700 px-3 py-1 rounded-full"
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
            Get Professional Marble Repair
          </Link>
        </div>
      </div>
    </div>
  );
}
