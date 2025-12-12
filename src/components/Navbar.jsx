import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import orglogo from '../assets/orglogo.jpeg'

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only when user scrolls down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out bg-white/70 backdrop-blur-md shadow-lg py-1 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto md:h-16 flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <a href="./index.html" className="flex items-center space-x-2">
          <img src={orglogo} alt="Logo" className="h-10 rounded-full " />
          <span className="text-lg md:text-2xl font-bold font-serif ml-2 text-primary-700 tracking-tight">
            Cake Fairy
          </span>
        </a>
        <a
          href="https://wa.me/9198952 53797"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hidden md:block px-6 py-2 rounded-full shadow hover:bg-primary-700 duration-200 text-sm"
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
        <nav className="md:hidden bg-white text-center py-4 font-bold shadow-lg border-t border-pink-100 animate-slideDown">
          <ul className="space-y-4">
            <li>
              <a
                href="./index.html"
                className="block text-lg text-gray-800 hover:text-primary-600 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="./about.html"
                className="block text-lg text-gray-800 hover:text-primary-600 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-lg text-gray-800 hover:text-primary-600 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
