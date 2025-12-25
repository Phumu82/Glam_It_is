import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Masterclass', path: '/masterclass' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-pink-400" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-pink-500">Glam It Is</span>
              <span className="text-xs text-gray-500">Beauty & Academy</span>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-pink-500 border-b-2 border-pink-500'
                    : 'text-gray-700 hover:text-pink-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="https://wa.me/27615341382"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-pink-500 hover:border-2 hover:border-pink-500 transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-pink-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-pink-50 text-pink-500'
                    : 'text-gray-700 hover:bg-pink-50 hover:text-pink-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/27615341382"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
