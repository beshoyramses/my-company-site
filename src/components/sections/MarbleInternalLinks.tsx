import Link from "next/link";

export function MarbleInternalLinks() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Explore Our Marble Services
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">By Location</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/locations/el-gouna" className="text-blue-600 hover:text-blue-700 text-sm">
                Marble Polishing El Gouna
              </Link>
            </li>
            <li>
              <Link href="/locations/hurghada" className="text-blue-600 hover:text-blue-700 text-sm">
                Marble Polishing Hurghada
              </Link>
            </li>
            <li>
              <Link href="/locations/sahl-hasheesh" className="text-blue-600 hover:text-blue-700 text-sm">
                Sahl Hasheesh
              </Link>
            </li>
            <li>
              <Link href="/locations" className="text-blue-600 hover:text-blue-700 text-sm">
                All Locations →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">By Problem</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/problems/scratched-marble-repair" className="text-blue-600 hover:text-blue-700 text-sm">
                Scratch Repair
              </Link>
            </li>
            <li>
              <Link href="/problems/marble-stain-removal" className="text-blue-600 hover:text-blue-700 text-sm">
                Stain Removal
              </Link>
            </li>
            <li>
              <Link href="/problems/dull-marble-floor" className="text-blue-600 hover:text-blue-700 text-sm">
                Dull Floor Restoration
              </Link>
            </li>
            <li>
              <Link href="/problems" className="text-blue-600 hover:text-blue-700 text-sm">
                All Problems →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">By Property</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/properties/villa-marble-polishing" className="text-blue-600 hover:text-blue-700 text-sm">
                Villa Marble Polishing
              </Link>
            </li>
            <li>
              <Link href="/properties/hotel-marble-polishing" className="text-blue-600 hover:text-blue-700 text-sm">
                Hotel Marble Polishing
              </Link>
            </li>
            <li>
              <Link href="/properties/apartment-marble-polishing" className="text-blue-600 hover:text-blue-700 text-sm">
                Apartment Polishing
              </Link>
            </li>
            <li>
              <Link href="/properties" className="text-blue-600 hover:text-blue-700 text-sm">
                All Properties →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">By Material</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/materials/white-marble-polishing" className="text-blue-600 hover:text-blue-700 text-sm">
                White Marble
              </Link>
            </li>
            <li>
              <Link href="/materials/granite-countertop-polishing" className="text-blue-600 hover:text-blue-700 text-sm">
                Granite Countertops
              </Link>
            </li>
            <li>
              <Link href="/materials/terrazzo-floor-polishing" className="text-blue-600 hover:text-blue-700 text-sm">
                Terrazzo Floors
              </Link>
            </li>
            <li>
              <Link href="/materials" className="text-blue-600 hover:text-blue-700 text-sm">
                All Materials →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-blue-200">
        <h4 className="font-semibold text-gray-900 mb-3">Helpful Guides</h4>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog/how-to-polish-marble-floors" className="text-sm text-blue-600 hover:text-blue-700">
            How to Polish Marble Floors
          </Link>
          <Link href="/blog/marble-polishing-cost" className="text-sm text-blue-600 hover:text-blue-700">
            Marble Polishing Cost Guide
          </Link>
          <Link href="/blog/how-to-clean-marble-floors" className="text-sm text-blue-600 hover:text-blue-700">
            How to Clean Marble Floors
          </Link>
          <Link href="/blog" className="text-sm text-blue-600 hover:text-blue-700">
            All Articles →
          </Link>
        </div>
      </div>
    </div>
  );
}
