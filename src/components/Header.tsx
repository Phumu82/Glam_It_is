import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { CONTACT_INFO } from '../constants';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Masterclass', path: 'masterclass' },
    { name: 'Gallery', path: 'gallery' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/glam_it_is_logo.jpeg"
              alt="Glam It Is"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="text-left">
              <h1 className="text-xl font-bold text-glam-pink-600">
                {CONTACT_INFO.businessName}
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                {CONTACT_INFO.tagline}
              </p>
            </div>
          </button>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors hover:text-glam-pink-600 ${
                  currentPage === item.path
                    ? 'text-glam-pink-600 border-b-2 border-glam-pink-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-700 hover:text-glam-pink-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left text-sm font-medium transition-colors hover:text-glam-pink-600 py-2 px-4 rounded-lg ${
                    currentPage === item.path
                      ? 'bg-glam-pink-50 text-glam-pink-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
