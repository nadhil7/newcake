import React from "react";
import bgimg from '../Pictures/cakes/background.jpg';

function Marquee() {
  const items = [
    "🎂 Delicious Cakes",
    "🧁 Freshly Baked",
    "🍰 Custom Designs",
    "🎨 Wedding Specials",
    "💝 Made with Love",
  ];

  return (
    <div
      className="relative overflow-hidden py-6 border-y border-primary-200 shadow-sm"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // bg-fixed
      }}
    >
      {/* Subtle fade on edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r  to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l  to-transparent z-10" />

      {/* Optional overlay for better contrast */}
      <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none" />

      <div className="relative flex animate-marquee whitespace-nowrap z-20 h-80">
        {[...items, ...items].map((text, index) => (
          <span
            key={index}
            className="text-primary-600 font-semibold py-2 font-serif text-2xl mx-10 tracking-wide drop-shadow-sm hover:text-primary-700 transition-colors duration-300"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
