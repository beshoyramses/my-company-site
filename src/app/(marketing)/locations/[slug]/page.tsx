import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarbleInternalLinks } from "@/components/sections/MarbleInternalLinks";

const locationData: Record<string, {
  name: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  areas: string[];
}> = {
  "el-gouna": {
    name: "El Gouna",
    title: "Marble Polishing in El Gouna | Professional Floor Restoration",
    description: "Expert marble polishing, restoration, and cleaning services in El Gouna. Serving villas, hotels, chalets in Abu Tig, Kafr El Gouna, G-Cribs. Free quote +20 128 173 7377.",
    content: "El Gouna is Egypt's premier luxury destination, and its properties feature stunning marble floors and countertops that require expert care. Our marble polishing service in El Gouna specializes in restoring the mirror finish to villas, hotels, chalets, and apartments throughout the area.\n\nWe serve all El Gouna neighborhoods including Abu Tig Marina, Kafr El Gouna, G-Cribs, West Golf, and the Hills. Our team uses industrial diamond abrasives to remove scratches, etch marks, and stains caused by Red Sea humidity, sand, and daily wear.\n\nWhether you need a single bathroom countertop refreshed or an entire villa floor restored, we provide free on-site assessments and transparent pricing. Our process includes honing, polishing, and sealing for long-lasting protection against future damage.",
    keywords: ["marble polishing El Gouna", "marble restoration El Gouna", "marble cleaning El Gouna", "granite polishing El Gouna", "stone polishing El Gouna", "floor polishing El Gouna"],
    areas: ["Abu Tig Marina", "Kafr El Gouna", "G-Cribs", "West Golf", "The Hills", "Sheraton Road", "Downtown El Gouna"],
  },
  "hurghada": {
    name: "Hurghada",
    title: "Marble Polishing Hurghada | Professional Stone Restoration",
    description: "Professional marble polishing and restoration services in Hurghada. Expert floor polishing, stain removal, and sealing for homes and businesses. Call +20 128 173 7377.",
    content: "Hurghada's thriving tourism and residential sectors demand pristine marble surfaces. Our marble polishing service in Hurghada delivers showroom-quality results for hotels, restaurants, offices, and private homes throughout the city.\n\nWe work across all Hurghada areas from El Dahar to El Gouna Road, Sheraton Road, and the new developments. Our diamond polishing process removes years of wear, scratches, and dullness, revealing the natural beauty of your stone.\n\nOur Hurghada team specializes in both residential and commercial projects. From hotel lobbies to villa floors, we minimize disruption while delivering exceptional results. Every job includes free assessment, scratch removal, polishing, and protective sealing.",
    keywords: ["marble polishing Hurghada", "marble restoration Hurghada", "marble floor polishing Hurghada", "granite polishing Hurghada", "stone polishing Hurghada", "marble cleaning Hurghada"],
    areas: ["El Dahar", "El Gouna Road", "Sheraton Road", "Sakkala", "Village Road", "New Hurghada", "Al-Ahyaa"],
  },
  "sahl-hasheesh": {
    name: "Sahl Hasheesh",
    title: "Marble Polishing Sahl Hasheesh | Resort Stone Restoration",
    description: "Expert marble polishing and stone restoration in Sahl Hasheesh resorts. Professional floor care for hotels, villas, and commercial properties. Free quotes available.",
    content: "Sahl Hasheesh's world-class resorts feature extensive marble and stone surfaces that require specialized care. Our marble polishing service in Sahl Hasheesh caters to the unique needs of luxury hospitality properties.\n\nWe understand the high standards expected in Sahl Hasheesh resorts. Our team works efficiently to minimize guest disruption while delivering flawless results on lobby floors, pool decks, villa interiors, and commercial spaces.\n\nOur process includes diamond honing to remove wear patterns, polishing to restore the mirror finish, and sealing to protect against the Red Sea climate. We offer flexible scheduling to work around your property's occupancy patterns.",
    keywords: ["marble polishing Sahl Hasheesh", "stone polishing Sahl Hasheesh", "marble restoration Sahl Hasheesh", "floor polishing Sahl Hasheesh", "granite polishing Sahl Hasheesh"],
    areas: ["Old Town Sahl Hasheesh", "Sahl Hasheesh Bay", "Resort Areas", "Villa Communities"],
  },
  "makadi-bay": {
    name: "Makadi Bay",
    title: "Marble Polishing Makadi Bay | Hotel & Villa Floor Restoration",
    description: "Professional marble polishing services in Makadi Bay. Expert floor restoration for hotels, villas, and resorts. Diamond polishing, stain removal, and sealing.",
    content: "Makadi Bay's beautiful resorts and private villas rely on pristine marble surfaces to create the perfect guest experience. Our marble polishing service in Makadi Bay specializes in hospitality-grade restoration.\n\nWe serve all Makadi Bay properties from luxury hotels to private villas. Our team understands the importance of quick turnaround and minimal disruption in resort environments. We work around your schedule to deliver exceptional results.\n\nOur diamond polishing process removes years of foot traffic damage, pool chemical stains, and etch marks. We restore the mirror finish that guests expect and apply protective sealants to maintain beauty longer.",
    keywords: ["marble polishing Makadi Bay", "floor polishing Makadi Bay", "marble restoration Makadi Bay", "stone polishing Makadi Bay", "hotel marble polishing Makadi Bay"],
    areas: ["Makadi Bay Hotels", "Makadi Bay Villas", "Resort Areas", "Private Properties"],
  },
  "soma-bay": {
    name: "Soma Bay",
    title: "Marble Polishing Soma Bay | Luxury Stone Floor Restoration",
    description: "Premium marble and granite polishing in Soma Bay. Expert restoration for luxury properties, resorts, and villas. Professional diamond polishing services.",
    content: "Soma Bay represents the pinnacle of Red Sea luxury, and its marble surfaces must match that standard. Our marble polishing service in Soma Bay delivers the exceptional quality expected in this exclusive destination.\n\nWe work across all Soma Bay developments including luxury villas, 5-star hotels, and premium commercial spaces. Our team has extensive experience with the high-end materials and finishes found throughout Soma Bay properties.\n\nOur process uses the finest diamond abrasives and professional-grade sealants to restore and protect your investment. From Carrara marble to Egyptian granite, we have the expertise to handle any stone type with precision.",
    keywords: ["marble polishing Soma Bay", "granite polishing Soma Bay", "stone restoration Soma Bay", "marble restoration Soma Bay", "luxury marble polishing Soma Bay"],
    areas: ["Soma Bay Resorts", "Luxury Villas", "Golf Course Properties", "Marina Areas"],
  },
  "safaga": {
    name: "Safaga",
    title: "Marble Polishing Safaga | Professional Stone Floor Care",
    description: "Expert marble polishing and restoration services in Safaga. Professional floor care for residential and commercial properties. Free on-site quotes.",
    content: "Safaga's unique coastal environment requires specialized marble care. Our marble polishing service in Safaga addresses the specific challenges posed by port city conditions and Red Sea climate.\n\nWe serve both residential and commercial properties throughout Safaga. From private homes to hotels and commercial buildings, we deliver professional restoration that withstands local conditions.\n\nOur diamond polishing process removes salt damage, port-related stains, and years of wear. We apply sealants specifically chosen for Safaga's environment to ensure long-lasting protection and beauty.",
    keywords: ["marble polishing Safaga", "marble restoration Safaga", "floor polishing Safaga", "stone polishing Safaga", "granite polishing Safaga"],
    areas: ["Safaga City", "Port Areas", "Residential Districts", "Hotel Zones"],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationData[slug];
  
  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: location.title,
    description: location.description,
    keywords: location.keywords,
    openGraph: {
      title: location.title,
      description: location.description,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locationData[slug];

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            href="/locations"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to All Locations
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Marble Polishing in {location.name}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {location.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our {location.name} Marble Polishing Service
              </h2>
              <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                {location.content}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Areas We Serve in {location.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {location.areas.map((area) => (
                    <span
                      key={area}
                      className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Target Keywords
              </h3>
              <div className="flex flex-wrap gap-2">
                {location.keywords.map((keyword) => (
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
                Contact us for a free on-site assessment in {location.name}
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
                  <Link href="/services/marble-polishing" className="text-blue-600 hover:text-blue-700">
                    Granite Polishing
                  </Link>
                </li>
                <li>
                  <Link href="/services/marble-polishing" className="text-blue-600 hover:text-blue-700">
                    Stone Sealing
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
            Learn More About Our Marble Polishing Process
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
  return Object.keys(locationData).map((slug) => ({ slug }));
}
