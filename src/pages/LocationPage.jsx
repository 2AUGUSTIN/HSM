import { Mail, Phone , MapPinIcon} from 'lucide-react';

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find LuxeStay hotels and our offices around the world. Visit us to see our hotel management solutions in action.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="max-w-6xl mx-auto mb-12 bg-white rounded-lg shadow-lg p-4">
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPinLarge size={48} className="mx-auto mb-4 text-blue-600" />
              <p className="text-lg text-gray-600">Interactive Map Would Display Here</p>
              <p className="text-sm text-gray-500">Showing all LuxeStay locations worldwide</p>
            </div>
          </div>
        </div>
        
        {/* Location Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Headquarters */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <div className="text-center">
                <BuildingIcon size={48} className="mx-auto mb-2 text-blue-800" />
                <p className="text-blue-800 font-semibold">Headquarters</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">New York Office</h3>
              <p className="text-gray-600 mb-4">
                Our main headquarters where we develop and support our hotel management solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPinIcon size={18} className="mt-1 text-blue-600" />
                  <span>
                    123 Hotel Avenue<br />
                    New York, NY 10001<br />
                    United States
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-600" />
                  <span>info@luxestay.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Regional Office */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <div className="text-center">
                <BuildingIcon size={48} className="mx-auto mb-2 text-green-800" />
                <p className="text-green-800 font-semibold">Regional Office</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">London Office</h3>
              <p className="text-gray-600 mb-4">
                Our European headquarters serving clients across the UK and Europe.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPinIcon size={18} className="mt-1 text-green-600" />
                  <span>
                    45 Hospitality Square<br />
                    London, W1 8TG<br />
                    United Kingdom
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-green-600" />
                  <span>+44 20 7123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-green-600" />
                  <span>europe@luxestay.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Regional Office */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-purple-100 flex items-center justify-center">
              <div className="text-center">
                <BuildingIcon size={48} className="mx-auto mb-2 text-purple-800" />
                <p className="text-purple-800 font-semibold">Regional Office</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Singapore Office</h3>
              <p className="text-gray-600 mb-4">
                Our Asia-Pacific hub providing services across the Asia-Pacific region.
              </p>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPinIcon size={18} className="mt-1 text-purple-600" />
                  <span>
                    78 Marina Boulevard<br />
                    Singapore 018983<br />
                    Singapore
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-purple-600" />
                  <span>+65 6123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-purple-600" />
                  <span>apac@luxestay.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-16 bg-blue-800 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need more information about our locations?</h2>
          <p className="text-lg mb-6">
            Contact our team for detailed directions or to schedule a meeting at any of our offices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+15551234567"
              className="bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded-md font-semibold transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Additional icons for the Location page
function MapPinLarge(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
    </svg>
  );
}