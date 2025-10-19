import React, { useState } from "react";
import logo from "../Pictures/logo.jpg";

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-pink-100 via-white to-orange-100 shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      {/* <div className="border-b border-pink-200 py-2 hidden md:block"> */}
        {/* <div className="max-w-7xl mx-auto flex justify-between items-center px-6 text-sm text-gray-600">
          <ul className="flex space-x-6">
            <li className="hover:text-pink-600 transition cursor-pointer">
              USD <span className="text-gray-400">▼</span>
            </li>
            <li className="hover:text-pink-600 transition cursor-pointer">
              ENG <span className="text-gray-400">▼</span>
            </li>
            <li className="hover:text-pink-600 transition cursor-pointer">
              Sign In
            </li>
          </ul>
          <div className="flex space-x-5 items-center">
            <a href="#" className="hover:text-pink-600 transition">
              <img src="img/icon/heart.png" alt="Wishlist" className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-600 transition relative">
              <img src="img/icon/cart.png" alt="Cart" className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full px-1.5">
                0
              </span>
            </a>
            <span className="text-gray-700 font-semibold">
              Cart: <span className="text-pink-600">$0.00</span>
            </span>
          </div>
        </div> */}
      {/* </div> */}

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="./index.html" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 " />
          <span className="text-2xl font-bold text-pink-700 tracking-tight">
            Cake Fairy
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {[
            { name: "Home", link: "./index.html" },
            { name: "About", link: "./about.html" },
            { name: "Shop", link: "./shop.html" },
            { name: "Blog", link: "./blog.html" },
            { name: "Contact", link: "./contact.html" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative text-gray-800 font-semibold hover:text-pink-600 transition duration-200"
            >
              {item.name}
              <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-pink-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fa ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white text-center py-4 font-bold shadow-lg border-t border-pink-100 animate-slideDown">
          <ul className="space-y-4">
            <li>
              <a
                href="./index.html"
                className="block text-lg text-gray-800 hover:text-pink-600 transition"
              >
                Home
              </p>
            </li>
            <li>
              <a
                href="./about.html"
                className="block text-lg text-gray-800 hover:text-pink-600 transition"
              >
                About
              </p>
            </li>
            <li>
              <a
                href="./shop.html"
                className="block text-lg text-gray-800 hover:text-pink-600 transition"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="./blog.html"
                className="block text-lg text-gray-800 hover:text-pink-600 transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="./contact.html"
                className="block text-lg text-gray-800 hover:text-pink-600 transition"
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
