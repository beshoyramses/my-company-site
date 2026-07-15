import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarbleInternalLinks } from "@/components/sections/MarbleInternalLinks";

const problemData: Record<string, {
  name: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  solutions: string[];
}> = {
  "scratched-marble-repair": {
    name: "Marble Scratches",
    title: "Remove Marble Scratches | Professional Scratch Repair El Gouna",
    description: "Expert marble scratch removal and repair in El Gouna and Hurghada. Diamond honing to remove scratches and restore smooth marble surfaces. Free quote +20 128 173 7377.",
    content: "Scratched marble is one of the most common problems we see in El Gouna villas and Hurghada properties. Daily foot traffic, furniture movement, and even improper cleaning can leave unsightly scratches that dull the surface and trap dirt.\n\nOur professional scratch removal process uses industrial diamond abrasives to carefully grind down the marble surface until scratches are completely removed. We then polish the area to match the surrounding finish, creating a seamless restoration.\n\nWe can repair scratches on marble floors, countertops, stairs, and bathroom surfaces. The process is precise and controlled, ensuring we only remove the minimum amount of material needed to eliminate the scratches while preserving the stone's integrity.",
    keywords: ["remove marble scratches", "scratched marble repair", "marble scratch removal", "fix scratched marble", "marble floor scratch repair"],
    solutions: ["Diamond honing to remove surface scratches", "Progressive polishing to restore finish", "Sealing to protect against future scratching", "Furniture pad recommendations"],
  },
  "dull-marble-floor": {
    name: "Dull Marble Floors",
    title: "Restore Marble Shine | Dull Floor Polishing El Gouna",
    description: "Professional marble shine restoration for dull floors in El Gouna and Hurghada. Diamond polishing to bring back mirror finish. Free assessment available.",
    content: "Dull marble floors lose the luxurious appeal that makes marble such a premium choice. Over time, the Red Sea climate, daily wear, and microscopic abrasions create a dull, hazy appearance that no cleaning can fix.\n\nOur marble shine restoration service uses a multi-step diamond polishing process to remove the damaged surface layer and reveal the fresh, brilliant stone underneath. We progress through increasingly fine diamond abrasives until achieving your desired finish level.\n\nThe result is a mirror-like shine that transforms your space. We can achieve anything from a soft hone to a high-gloss polish, depending on your preference. The process also includes sealing to protect the restored surface and maintain its brilliance longer.",
    keywords: ["dull marble floor", "restore marble shine", "polish old marble", "marble floor restoration", "bring back marble shine"],
    solutions: ["Multi-step diamond polishing", "Surface layer removal", "Finish level customization", "Protective sealing application"],
  },
  "marble-stain-removal": {
    name: "Marble Stains",
    title: "Marble Stain Removal | Professional Cleaning El Gouna",
    description: "Expert marble stain removal in El Gouna and Hurghada. Remove wine, coffee, oil, and water stains from marble surfaces. Professional cleaning services.",
    content: "Marble is porous and susceptible to staining from spills, especially in high-traffic areas like kitchens and bathrooms. Common culprits include wine, coffee, oil, rust, and hard water deposits that penetrate the stone and discolor the surface.\n\nOur professional stain removal process begins with identifying the stain type to select the appropriate treatment. We use specialized poultices and cleaning agents designed to draw stains out of the marble without damaging the stone.\n\nFor stubborn stains, we may combine chemical treatments with light honing to remove the stained layer. After stain removal, we always apply a high-quality sealer to make the marble more resistant to future staining and easier to clean.",
    keywords: ["marble stain removal", "remove marble stains", "marble cleaning", "marble stain cleaning", "professional marble cleaning"],
    solutions: ["Stain type identification", "Poultice applications", "Chemical treatments", "Protective sealing"],
  },
  "marble-etching-repair": {
    name: "Marble Etching",
    title: "Marble Etching Repair | Acid Etch Removal El Gouna",
    description: "Professional marble etching repair in El Gouna and Hurghada. Remove acid etch marks from spills and cleaning products. Expert restoration services.",
    content: "Etching occurs when acidic substances come into contact with marble, causing chemical reactions that dull and roughen the surface. Common sources include citrus juices, wine, vinegar, and many household cleaners.\n\nEtch marks appear as dull spots or rings that stand out against the surrounding polished surface. Unlike stains, etching is actual surface damage that requires mechanical removal rather than chemical treatment.\n\nOur etching repair process uses diamond honing to grind away the damaged layer and restore a smooth, uniform surface. We then polish the area to match the surrounding finish. For widespread etching, we may recommend full surface restoration to ensure consistent results.",
    keywords: ["marble etching repair", "fix marble etching", "acid etch removal", "marble etch marks", "repair etched marble"],
    solutions: ["Diamond honing to remove etch marks", "Surface restoration", "Polishing to match finish", "Sealing for protection"],
  },
  "marble-crack-repair": {
    name: "Marble Cracks",
    title: "Marble Crack Repair | Professional Stone Restoration El Gouna",
    description: "Expert marble crack repair in El Gouna and Hurghada. Professional restoration for cracked marble floors and surfaces. Free quotes available.",
    content: "Marble cracks can occur from structural movement, heavy impacts, or thermal stress. Left unrepaired, cracks can widen, allow water penetration, and lead to further damage. Our professional crack repair restores both appearance and structural integrity.\n\nWe begin by cleaning and preparing the crack to ensure proper adhesion. We then fill the crack with color-matched epoxy or resin that bonds with the marble. For larger cracks, we may use pins or other reinforcement methods.\n\nAfter the filler cures, we grind and polish the area to blend seamlessly with the surrounding marble. The repair is virtually invisible and restores the surface's smooth appearance and functionality.",
    keywords: ["marble crack repair", "fix cracked marble", "marble restoration", "cracked marble floor repair", "marble floor crack filling"],
    solutions: ["Crack cleaning and preparation", "Color-matched epoxy filling", "Structural reinforcement if needed", "Grinding and polishing to blend"],
  },
  "chipped-marble-repair": {
    name: "Chipped Marble",
    title: "Chipped Marble Repair | Edge Restoration El Gouna",
    description: "Professional chipped marble repair in El Gouna and Hurghada. Fix chips and edge damage on marble countertops and floors. Expert restoration services.",
    content: "Chipped marble edges and surfaces are common, especially on countertops, stairs, and high-traffic floor areas. Chips can occur from dropped objects, impact damage, or wear along edges. Our chip restoration process repairs the damage seamlessly.\n\nWe clean the chipped area and apply color-matched filler material that bonds securely with the marble. For edge chips, we rebuild the missing material to restore the original profile. The filler is formulated to match the marble's color and veining pattern.\n\nOnce cured, we carefully grind and polish the repaired area to blend with the surrounding surface. The result is a smooth, continuous surface where the repair is virtually undetectable.",
    keywords: ["chipped marble repair", "fix marble chips", "marble edge repair", "marble chip restoration", "repair chipped marble countertop"],
    solutions: ["Chip cleaning and preparation", "Color-matched filler application", "Edge profile restoration", "Grinding and polishing to blend"],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = problemData[slug];
  
  if (!problem) {
    return {
      title: "Problem Not Found",
    };
  }

  return {
    title: problem.title,
    description: problem.description,
    keywords: problem.keywords,
    openGraph: {
      title: problem.title,
      description: problem.description,
    },
  };
}

export default async function ProblemPage({ params }: PageProps) {
  const { slug } = await params;
  const problem = problemData[slug];

  if (!problem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            href="/problems"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to All Marble Problems
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {problem.name} Repair
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {problem.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Understanding {problem.name}
              </h2>
              <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                {problem.content}
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Repair Solutions
                </h3>
                <ul className="space-y-2">
                  {problem.solutions.map((solution) => (
                    <li key={solution} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Target Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {problem.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">
                Get a Free Quote
              </h3>
              <p className="text-blue-100 mb-4">
                Contact us for professional {problem.name.toLowerCase()} repair in El Gouna and Hurghada
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Related Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/marble-polishing" className="text-blue-600 hover:text-blue-700">
                    Marble Polishing
                  </Link>
                </li>
                <li>
                  <Link href="/services/marble-polishing" className="text-blue-600 hover:text-blue-700">
                    Marble Restoration
                  </Link>
                </li>
                <li>
                  <Link href="/problems" className="text-blue-600 hover:text-blue-700">
                    All Marble Problems
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/services/marble-polishing"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Learn About Our Marble Polishing Process
          </Link>
        </div>

        <div className="mt-16">
          <MarbleInternalLinks />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(problemData).map((slug) => ({ slug }));
}
