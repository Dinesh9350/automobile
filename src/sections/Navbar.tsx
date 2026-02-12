import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'products';
  onNavigate: (page: 'home' | 'about' | 'products') => void;
}

const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'about' | 'products') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'HOME', page: 'home' as const },
    { name: 'ABOUT US', page: 'about' as const },
    { name: 'PRODUCTS', page: 'products' as const },
    { name: 'MEDIA', page: 'home' as const },
    { name: 'CONTACT', page: 'home' as const },
  ];

  const isActive = (linkPage: string, linkName: string) => {
    if (linkPage === 'home' && currentPage === 'home' && linkName === 'HOME') return true;
    if (linkPage === 'about' && currentPage === 'about') return true;
    if (linkPage === 'products' && currentPage === 'products') return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-skas-red rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-2 bg-skas-red rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-2 bg-skas-red -rotate-45"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-skas-dark tracking-tight">skas</span>
                <span className="text-xs text-skas-gray -mt-1">Autotech Private Limited</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page)}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  isActive(link.page, link.name)
                    ? 'text-skas-red'
                    : 'text-skas-dark hover:text-skas-red'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('home')}
              className="bg-skas-dark text-white px-6 py-2.5 text-sm font-semibold tracking-wide hover:bg-skas-red transition-colors"
            >
              CAREER
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-skas-dark" />
            ) : (
              <Menu className="w-6 h-6 text-skas-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.page)}
                  className={`px-4 py-3 text-sm font-semibold text-left ${
                    isActive(link.page, link.name)
                      ? 'text-skas-red bg-red-50'
                      : 'text-skas-dark hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('home')}
                className="mx-4 mt-4 bg-skas-dark text-white px-6 py-3 text-sm font-semibold text-center hover:bg-skas-red transition-colors"
              >
                CAREER
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
