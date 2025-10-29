import React from "react";

function Marquee() {
  const items = [
    "🎂 Delicious Cakes",
    "🧁 Freshly Baked",
    "🍰 Custom Designs",
    "🎨 Wedding Specials",
    "💝 Made with Love",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-50 via-white to-pink-50 py-6 border-y border-pink-200 shadow-sm">
      {/* subtle fade on edges */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-pink-50 to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-pink-50 to-transparent z-10" />

      <div className="flex animate-marquee whitespace-nowrap ">
        {[...items, ...items].map((text, index) => (
          <span
            key={index}
            className="text-pink-600 font-semibold py-2 font-serif text-2xl mx-10 tracking-wide drop-shadow-sm hover:text-pink-700 transition-colors duration-300"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
