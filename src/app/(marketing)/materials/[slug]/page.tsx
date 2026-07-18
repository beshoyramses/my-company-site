import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarbleInternalLinks } from "@/components/sections/MarbleInternalLinks";

const materialData: Record<
  string,
  {
    name: string;
    title: string;
    description: string;
    content: string;
    keywords: string[];
    characteristics: string[];
  }
> = {
  "white-marble-polishing": {
    name: "White Marble",
    title: "White Marble Polishing | Restore Brightness El Gouna",
    description:
      "Specialized white marble polishing in El Gouna and Hurghada. Remove yellowing, stains, and dullness to restore bright white marble surfaces. Free quote available.",
    content:
      "White marble is prized for its pristine appearance, but it's also the most susceptible to discoloration and yellowing over time. In the Red Sea climate, white marble can quickly lose its brightness due to humidity, UV exposure, and improper cleaning.\n\nOur white marble polishing service specializes in restoring the original bright white appearance that makes this stone so desirable. We use specialized diamond abrasives and polishing compounds designed specifically for light-colored marbles.\n\nThe process includes removing the discolored surface layer, treating any embedded stains, and polishing to achieve the desired level of brightness. We finish with a high-quality sealer that helps protect against future yellowing and makes maintenance easier.",
    keywords: [
      "white marble polishing",
      "white marble restoration",
      "light marble care",
      "white marble brightening",
      "remove marble yellowing",
    ],
    characteristics: [
      "Prone to yellowing over time",
      "Shows stains more easily",
      "Requires specialized brightening compounds",
      "Needs UV-protective sealing",
      "Regular maintenance essential",
    ],
  },
  "carrara-marble-polishing": {
    name: "Carrara Marble",
    title: "Carrara Marble Polishing | Italian Stone Restoration",
    description:
      "Expert Carrara marble polishing in El Gouna and Hurghada. Professional restoration for this classic Italian marble with distinctive gray veining.",
    content:
      "Carrara marble is one of the world's most famous marbles, known for its white background and distinctive gray veining. This Italian stone requires specialized care to maintain its elegant appearance.\n\nOur Carrara marble polishing service understands the unique characteristics of this stone. We use techniques that enhance the natural veining while restoring the white background to its original brilliance.\n\nThe process includes careful assessment of the veining pattern, diamond honing to remove wear and etch marks, and polishing that brings out the stone's natural beauty. We pay special attention to preserving the delicate gray veins that make Carrara so distinctive.",
    keywords: [
      "Carrara marble polishing",
      "Italian marble restoration",
      "Carrara marble care",
      "white gray marble polishing",
      "Italian stone restoration",
    ],
    characteristics: [
      "Distinctive gray veining",
      "Soft white background",
      "Prone to etching",
      "Requires gentle polishing",
      "Classic Italian elegance",
    ],
  },
  "crema-marfil-polishing": {
    name: "Crema Marfil",
    title: "Crema Marfil Polishing | Spanish Marble Restoration",
    description:
      "Professional Crema Marfil marble polishing in El Gouna and Hurghada. Expert restoration for this warm Spanish marble with cream and beige tones.",
    content:
      "Crema Marfil is a Spanish marble known for its warm cream and beige tones. This popular stone requires specialized care to maintain its consistent color and smooth finish.\n\nOur Crema Marfil polishing service has extensive experience with this specific marble type. We understand how to work with its warm color palette to achieve the best results without altering the stone's natural appearance.\n\nThe process includes removing surface wear and scratches while preserving the consistent cream color. We use polishing compounds that enhance the stone's natural warmth rather than creating an artificial shine. The result is a smooth, elegant finish that highlights Crema Marfil's natural beauty.",
    keywords: [
      "Crema Marfil polishing",
      "Spanish marble restoration",
      "cream marble care",
      "beige marble polishing",
      "warm marble restoration",
    ],
    characteristics: [
      "Warm cream and beige tones",
      "Consistent coloration",
      "Popular for flooring",
      "Requires color-consistent polishing",
      "Elegant warm appearance",
    ],
  },
  "egyptian-marble-polishing": {
    name: "Egyptian Marble",
    title: "Egyptian Marble Polishing | Local Stone Restoration",
    description:
      "Expert Egyptian marble polishing in El Gouna and Hurghada. Professional restoration for local Egyptian marble varieties including Galala and new city.",
    content:
      "Egypt is home to many beautiful marble varieties, including Galala, new city, and other local stones. Egyptian marble is known for its quality and unique characteristics that reflect the region's geology.\n\nOur Egyptian marble polishing service specializes in local stone varieties. We understand the specific properties of Egyptian marble and use techniques optimized for these regional stones.\n\nWe work with all Egyptian marble types, from the classic Galala to the distinctive new city marble. Our process respects the unique characteristics of each variety while achieving excellent restoration results. We support local stone and help maintain the beauty of Egypt's natural resources.",
    keywords: [
      "Egyptian marble polishing",
      "local marble restoration",
      "Egyptian stone care",
      "Galala marble polishing",
      "new city marble restoration",
    ],
    characteristics: [
      "High-quality local stone",
      "Unique regional characteristics",
      "Variety of colors and patterns",
      "Durable and long-lasting",
      "Supports local industry",
    ],
  },
  "limestone-polishing": {
    name: "Limestone",
    title: "Limestone Polishing | Natural Stone Restoration",
    description:
      "Professional limestone polishing and sealing in El Gouna and Hurghada. Expert restoration for natural limestone surfaces and floors.",
    content:
      "Limestone is a beautiful natural stone with a soft, matte appearance that creates a warm, natural atmosphere. However, its porous nature makes it susceptible to staining and wear.\n\nOur limestone polishing service understands the unique needs of this sedimentary stone. Unlike marble, limestone requires a gentler approach to avoid damaging its natural surface texture.\n\nThe process includes cleaning to remove surface dirt, gentle honing to remove wear, and polishing that enhances the natural beauty without creating an artificial gloss. We always finish with a high-quality sealer specifically formulated for limestone to protect against staining and make maintenance easier.",
    keywords: [
      "limestone polishing",
      "limestone restoration",
      "natural stone care",
      "sedimentary stone polishing",
      "limestone sealing",
    ],
    characteristics: [
      "Soft, matte appearance",
      "Highly porous",
      "Natural earth tones",
      "Requires gentle treatment",
      "Needs regular sealing",
    ],
  },
  "terrazzo-floor-polishing": {
    name: "Terrazzo",
    title: "Terrazzo Floor Polishing | Composite Stone Restoration",
    description:
      "Expert terrazzo floor polishing in El Gouna and Hurghada. Professional restoration for terrazzo floors and surfaces.",
    content:
      "Terrazzo is a composite material consisting of chips of marble, quartz, granite, or glass set in cement or epoxy. This unique surface requires specialized polishing techniques to achieve the best results.\n\nOur terrazzo polishing service has extensive experience with both cement-based and epoxy terrazzo. We understand how to polish the matrix while bringing out the beauty of the aggregate chips.\n\nThe process includes diamond grinding to remove wear and expose fresh aggregate, followed by progressive polishing to achieve the desired finish level. We can achieve anything from a matte finish to a high-gloss polish, depending on your preference. The result is a terrazzo surface that showcases its unique composition.",
    keywords: [
      "terrazzo floor polishing",
      "terrazzo restoration",
      "terrazzo care",
      "composite stone polishing",
      "terrazzo floor care",
    ],
    characteristics: [
      "Composite material",
      "Contains stone chips",
      "Durable and long-lasting",
      "Can be polished to high gloss",
      "Unique patterns",
    ],
  },
  "granite-countertop-polishing": {
    name: "Granite Countertops",
    title: "Granite Countertop Polishing | Kitchen Surface Restoration",
    description:
      "Professional granite countertop polishing in El Gouna and Hurghada. Expert restoration for kitchen and bathroom granite surfaces.",
    content:
      "Granite countertops are prized for their durability and beauty, but even this hard stone can become dull and scratched over time. Our granite polishing service restores the original factory finish.\n\nWe specialize in kitchen and bathroom granite countertops, understanding the unique challenges these surfaces face from cooking, cleaning, and daily use. Our process removes scratches, etch marks, and dullness.\n\nThe restoration includes diamond honing to remove damage, polishing to restore the original finish, and sealing to protect against future staining. We can achieve the exact finish level your granite had when new, from satin to high gloss.",
    keywords: [
      "granite countertop polishing",
      "granite restoration",
      "granite care",
      "kitchen granite polishing",
      "bathroom granite restoration",
    ],
    characteristics: [
      "Extremely hard",
      "Durable surface",
      "Can still scratch and etch",
      "Requires periodic sealing",
      "Popular for kitchens",
    ],
  },
  "travertine-restoration": {
    name: "Travertine",
    title: "Travertine Restoration | Natural Stone Floor Care",
    description:
      "Expert travertine restoration in El Gouna and Hurghada. Professional filling, honing, and polishing for travertine floors and surfaces.",
    content:
      "Travertine is a form of limestone with natural holes and cavities that give it a distinctive appearance. This stone requires specialized restoration techniques that address its unique structure.\n\nOur travertine restoration service includes filling the natural cavities with color-matched material, honing to create a smooth surface, and polishing to achieve the desired finish. We can also create an unfilled look if you prefer the natural cavities.\n\nThe process respects travertine's natural character while making it more practical for daily use. We finish with sealers that protect against staining while maintaining the stone's natural appearance. The result is travertine that is both beautiful and functional.",
    keywords: [
      "travertine restoration",
      "travertine polishing",
      "travertine care",
      "filled travertine restoration",
      "natural stone floor care",
    ],
    characteristics: [
      "Natural cavities and holes",
      "Warm earth tones",
      "Can be filled or unfilled",
      "Porous surface",
      "Unique natural appearance",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = materialData[slug];

  if (!material) {
    return {
      title: "Material Not Found",
    };
  }

  return {
    title: material.title,
    description: material.description,
    keywords: material.keywords,
    openGraph: {
      title: material.title,
      description: material.description,
    },
  };
}

export default async function MaterialPage({ params }: PageProps) {
  const { slug } = await params;
  const material = materialData[slug];

  if (!material) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            href="/materials"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to All Materials
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {material.name} Polishing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {material.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {material.name} Restoration Process
              </h2>
              <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                {material.content}
              </div>

              <div className="mt-8 p-6 bg-amber-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {material.name} Characteristics
                </h3>
                <ul className="space-y-2">
                  {material.characteristics.map((characteristic) => (
                    <li key={characteristic} className="flex items-start">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span className="text-gray-700">{characteristic}</span>
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
                {material.keywords.map((keyword) => (
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
              <h3 className="text-xl font-bold mb-3">Get a Free Quote</h3>
              <p className="text-blue-100 mb-4">
                Contact us for professional {material.name.toLowerCase()}{" "}
                polishing in El Gouna and Hurghada
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
                  <Link
                    href="/services/marble-polishing"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Marble Polishing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/materials"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    All Materials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/locations/el-gouna"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    El Gouna Services
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
  return Object.keys(materialData).map((slug) => ({ slug }));
}
