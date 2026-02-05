import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import orglogo from '../assets/orglogo.jpeg'

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change style when user scrolls
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
        : 'bg-transparent py-4'
        }`}
    >
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto md:h-16 flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <a href="./index.html" className="flex items-center space-x-2">
          <img src={orglogo} alt="Logo" className="h-10 rounded-full" />
          <span className={`text-lg md:text-2xl font-bold font-serif ml-2 tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary-700' : 'text-primary-800'}`}>
            Cake Fairy
          </span>
        </a>
        <a
          href="https://wa.me/919895253797"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hidden md:block px-6 py-2 rounded-md shadow hover:bg-primary-700 duration-200 text-sm"
          style={{ backgroundColor: '#6E473B' }}
        >
          Order Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-primary-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-primary-100 animate-slideDown pb-8 pt-4 absolute w-full left-0 shadow-xl">
          <ul className="flex flex-col items-center space-y-6">
            <li>
              <a
                href="./index.html"
                className="text-lg font-serif text-primary-800 hover:text-primary-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-serif text-primary-800 hover:text-primary-600 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            <li className="pt-2">
              <a
                href="https://wa.me/919895253797"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-2.5 rounded-full text-white font-medium shadow-md hover:bg-primary-700 hover:shadow-lg transition-all duration-300 text-sm"
                style={{ backgroundColor: '#6E473B' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
