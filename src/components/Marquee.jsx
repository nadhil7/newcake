import React from "react";


import client1 from '../Pictures/ourClients/pic1.jpeg';
import client2 from '../Pictures/ourClients/pic2.jpeg';
import client3 from '../Pictures/ourClients/pic3.jpeg';
import client4 from '../Pictures/ourClients/pic4.jpeg';
import client5 from '../Pictures/ourClients/pic5.jpeg';
import client6 from '../Pictures/ourClients/pic6.jpeg';
import client7 from '../Pictures/ourClients/pic7.jpeg';
import client8 from '../Pictures/ourClients/pic8.jpeg';
import client9 from '../Pictures/ourClients/pic9.jpeg';
import client10 from '../Pictures/ourClients/pic10.jpeg';

function Marquee() {
  const images = [
    client1, client2, client3, client4, client5,
    client6, client7, client8, client9, client10
  ];

  return (
    <div
      className="relative overflow-hidden py-8"
      style={{
        backgroundColor: '#6E473B',
      }}
    >


      {/* Left Gradient */}
      <div className="absolute top-0 left-0 z-30 h-full w-16 bg-gradient-to-r from-[#6E473B] to-transparent pointer-events-none" />

      {/* Right Gradient */}
      <div className="absolute top-0 right-0 z-30 h-full w-16 bg-gradient-to-l from-[#6E473B] to-transparent pointer-events-none" />

      <div className="relative flex animate-marquee whitespace-nowrap z-20 items-center">
        {[...images, ...images].map((img, index) => (
          <div key={index} className="mx-4 md:mx-6 shrink-0">
            <img
              src={img}
              alt={`Happy Client ${index + 1}`}
              className="h-48 md:h-64 w-auto object-cover rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
