import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarbleInternalLinks } from "@/components/sections/MarbleInternalLinks";

const propertyData: Record<string, {
  name: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  benefits: string[];
}> = {
  "hotel-marble-polishing": {
    name: "Hotels",
    title: "Hotel Marble Polishing | Resort Floor Restoration El Gouna",
    description: "Professional marble polishing for hotels and resorts in El Gouna and Hurghada. Expert lobby, room, and public area restoration with minimal guest disruption.",
    content: "Hotels and resorts in El Gouna and Hurghada rely on pristine marble surfaces to create the luxury experience guests expect. From grand lobbies to elegant bathrooms, marble must maintain a flawless appearance despite constant foot traffic.\n\nOur hotel marble polishing service specializes in working around guest schedules to minimize disruption. We offer night shifts, section-by-section restoration, and rapid turnaround options to keep your property operating smoothly.\n\nWe handle all hotel marble surfaces including lobby floors, reception desks, elevator interiors, room bathrooms, pool decks, and restaurant areas. Our diamond polishing process removes years of wear while preserving the stone's integrity and achieving the high-gloss finish that impresses guests.",
    keywords: ["hotel marble polishing", "hotel floor restoration", "resort marble polishing", "hotel lobby marble care", "hospitality marble services"],
    benefits: ["Minimal guest disruption with flexible scheduling", "Section-by-section restoration options", "Rapid turnaround for urgent needs", "High-gloss finish for guest satisfaction", "Long-lasting protection with sealing"],
  },
  "villa-marble-polishing": {
    name: "Villas",
    title: "Villa Marble Polishing | Luxury Home Restoration El Gouna",
    description: "Expert marble polishing for luxury villas in El Gouna and Hurghada. Professional floor, countertop, and terrace restoration for private residences.",
    content: "Luxury villas in El Gouna feature extensive marble surfaces that define their premium character. From grand entrance halls to outdoor terraces, marble creates the sophisticated atmosphere villa owners expect.\n\nOur villa marble polishing service provides the meticulous attention to detail that luxury homes require. We treat each surface as a unique feature, customizing our approach to achieve the perfect finish for every area.\n\nWe work on villa floors, staircases, countertops, bathroom surfaces, and outdoor marble areas. Our process includes thorough assessment to identify the specific needs of each surface, followed by diamond honing, polishing, and sealing that enhances the natural beauty of your marble.",
    keywords: ["villa marble polishing", "luxury villa marble restoration", "private villa floor care", "villa marble maintenance", "luxury home marble services"],
    benefits: ["Customized approach for each surface", "Preserves natural marble beauty", "Indoor and outdoor marble care", "Long-lasting protection", "Enhances property value"],
  },
  "apartment-marble-polishing": {
    name: "Apartments",
    title: "Apartment Marble Polishing | Affordable Floor Restoration",
    description: "Professional marble polishing for apartments and condos in El Gouna and Hurghada. Affordable floor and countertop restoration for residential properties.",
    content: "Apartments and condos in El Gouna often feature marble flooring and bathroom surfaces that require periodic restoration to maintain their appearance. Our apartment marble polishing service offers professional results at competitive prices.\n\nWe understand the unique challenges of apartment marble care, from furniture movement to pet scratches. Our process addresses these specific issues while working efficiently to minimize inconvenience to residents.\n\nOur apartment services include floor polishing, bathroom marble restoration, countertop refinishing, and hallway surface care. We use dust-free equipment and efficient techniques to complete projects quickly with excellent results.",
    keywords: ["apartment marble polishing", "condo marble restoration", "flat marble polishing", "apartment floor care", "residential marble services"],
    benefits: ["Affordable pricing", "Quick turnaround", "Dust-free process", "Minimal disruption to residents", "Long-lasting results"],
  },
  "office-marble-polishing": {
    name: "Offices",
    title: "Office Marble Polishing | Commercial Floor Restoration",
    description: "Professional marble polishing for offices and commercial buildings in El Gouna and Hurghada. Expert lobby, corridor, and meeting room floor restoration.",
    content: "Office buildings and commercial spaces use marble to project professionalism and sophistication. Maintaining these surfaces is essential for creating the right impression on clients and employees.\n\nOur office marble polishing service works around business hours to minimize disruption. We offer weekend and after-hours scheduling, ensuring your operations continue smoothly while we restore your marble surfaces.\n\nWe handle office lobby floors, elevator interiors, corridor marble, meeting room surfaces, and executive suite areas. Our diamond polishing process removes years of foot traffic wear while achieving the consistent, professional finish your business requires.",
    keywords: ["office marble polishing", "commercial marble polishing", "office floor restoration", "business marble care", "corporate marble services"],
    benefits: ["Flexible scheduling around business hours", "Professional finish for business image", "Consistent results across large areas", "Minimal disruption to operations", "Durable, long-lasting protection"],
  },
  "restaurant-marble-polishing": {
    name: "Restaurants",
    title: "Restaurant Marble Polishing | Commercial Kitchen & Dining Floor Care",
    description: "Expert marble polishing for restaurants in El Gouna and Hurghada. Professional floor, countertop, and dining area restoration for food service establishments.",
    content: "Restaurants face unique challenges with marble surfaces, from food and wine stains to heavy foot traffic and cleaning chemical damage. Our restaurant marble polishing service addresses these specific needs.\n\nWe understand the importance of maintaining hygiene standards while restoring marble. Our process removes stains, etch marks, and wear while using sealants that resist food-related staining and facilitate cleaning.\n\nOur restaurant services include dining room floor polishing, bar countertop restoration, bathroom marble care, and kitchen surface treatment. We work around your schedule to minimize impact on restaurant operations.",
    keywords: ["restaurant marble polishing", "restaurant floor care", "commercial kitchen marble", "bar marble restoration", "food service marble services"],
    benefits: ["Food-safe sealants", "Stain-resistant protection", "Hygienic restoration process", "Works around restaurant schedules", "Enhances dining atmosphere"],
  },
  "hospital-marble-polishing": {
    name: "Hospitals",
    title: "Hospital Marble Polishing | Healthcare Floor Restoration",
    description: "Professional marble polishing for hospitals and healthcare facilities in El Gouna and Hurghada. Hygienic floor restoration for medical environments.",
    content: "Healthcare facilities require marble surfaces that are not only beautiful but also hygienic and easy to maintain. Our hospital marble polishing service meets the strict standards of medical environments.\n\nWe use hospital-grade sealants and cleaning products that support infection control while providing long-lasting protection. Our process removes wear and damage while creating surfaces that are easy to clean and maintain.\n\nOur healthcare services include lobby floor polishing, corridor restoration, waiting room marble care, and administrative area treatment. We follow strict protocols to ensure patient safety and minimal disruption to medical operations.",
    keywords: ["hospital marble polishing", "healthcare marble cleaning", "clinic floor restoration", "medical facility marble care", "hygienic marble services"],
    benefits: ["Hospital-grade sealants", "Infection control compliant", "Easy-to-clean surfaces", "Minimal disruption to care", "Enhances healing environment"],
  },
  "showroom-marble-polishing": {
    name: "Showrooms",
    title: "Showroom Marble Polishing | Retail Display Floor Restoration",
    description: "Professional marble polishing for showrooms and retail spaces in El Gouna and Hurghada. Showroom-quality floor and display surface restoration.",
    content: "Showrooms and retail spaces rely on pristine marble surfaces to showcase products effectively. Any dullness or damage detracts from the merchandise and the customer experience.\n\nOur showroom marble polishing service delivers the flawless, mirror-like finish that retail environments demand. We understand that presentation is everything and work to achieve perfection in every square meter.\n\nWe handle showroom floors, display platforms, counter surfaces, and customer area marble. Our diamond polishing process removes all signs of wear while achieving the high-gloss finish that makes products shine.",
    keywords: ["showroom marble polishing", "retail marble care", "display floor polishing", "commercial marble restoration", "retail space marble services"],
    benefits: ["Showroom-quality finish", "Enhances product presentation", "High-gloss mirror finish", "Minimal business disruption", "Long-lasting beauty"],
  },
  "airbnb-marble-polishing": {
    name: "Airbnb",
    title: "Airbnb Marble Polishing | Rental Property Floor Restoration",
    description: "Quick turnaround marble polishing for Airbnb and vacation rentals in El Gouna and Hurghada. Professional restoration for rental properties.",
    content: "Airbnb and vacation rental properties need to maintain pristine conditions to achieve high ratings and repeat bookings. Our Airbnb marble polishing service provides quick turnaround to keep your property rental-ready.\n\nWe understand the time sensitivity of rental property maintenance. Our efficient process delivers excellent results quickly, allowing you to get your property back on the market with minimal downtime.\n\nOur rental property services include floor polishing, bathroom marble restoration, countertop refinishing, and terrace marble care. We work around guest schedules and can often complete projects between bookings.",
    keywords: ["Airbnb marble polishing", "rental property marble care", "vacation rental floor restoration", "short-term rental marble services", "property management marble"],
    benefits: ["Quick turnaround between bookings", "Enhances guest satisfaction", "Improves property ratings", "Competitive pricing for rentals", "Flexible scheduling"],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = propertyData[slug];
  
  if (!property) {
    return {
      title: "Property Type Not Found",
    };
  }

  return {
    title: property.title,
    description: property.description,
    keywords: property.keywords,
    openGraph: {
      title: property.title,
      description: property.description,
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = propertyData[slug];

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            href="/properties"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to All Property Types
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {property.name} Marble Polishing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {property.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Marble Polishing for {property.name}
              </h2>
              <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                {property.content}
              </div>

              <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Why Choose Our {property.name} Service
                </h3>
                <ul className="space-y-2">
                  {property.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
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
                {property.keywords.map((keyword) => (
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
                Contact us for professional {property.name.toLowerCase()} marble polishing in El Gouna and Hurghada
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
                  <Link href="/properties" className="text-blue-600 hover:text-blue-700">
                    All Property Types
                  </Link>
                </li>
                <li>
                  <Link href="/locations/el-gouna" className="text-blue-600 hover:text-blue-700">
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
  return Object.keys(propertyData).map((slug) => ({ slug }));
}
