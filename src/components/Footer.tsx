import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-pink-400" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-pink-500">Glam It Is</span>
                <span className="text-xs text-gray-500">Beauty & Academy</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Everything GLAM Under One Roof
            </p>
            <p className="text-gray-500 text-xs">
              From Nails to Hair — You Will Be Sorted
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p>The Wheel Shopping Centre</p>
                  <p>Shop F101, First Floor</p>
                  <p>South Beach, Durban, South Africa</p>
                </div>
              </div>
              <a href="tel:+27615341382" className="flex items-center space-x-3 hover:text-pink-500 transition-colors">
                <Phone className="w-5 h-5 text-pink-500" />
                <span className="text-sm text-gray-600">061 534 1382 (Salon)</span>
              </a>
              <a href="tel:+27684959811" className="flex items-center space-x-3 hover:text-pink-500 transition-colors">
                <Phone className="w-5 h-5 text-pink-500" />
                <span className="text-sm text-gray-600">068 495 9811 (Masterclass)</span>
              </a>
              <a href="mailto:info@glamitis.co.za" className="flex items-center space-x-3 hover:text-pink-500 transition-colors">
                <Mail className="w-5 h-5 text-pink-500" />
                <span className="text-sm text-gray-600">info@glamitis.co.za</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/glamitis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/glamitis_rsa?igsh=MWd0y2tyNWYwdmFIbQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Glam It Is Beauty & Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
