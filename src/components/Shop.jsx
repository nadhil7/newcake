import anniversary from '../Pictures/programs based/Anivessary cake.jpeg';
import birthday from '../Pictures/programs based/Birthday cake.jpeg';
import brideToBe from '../Pictures/programs based/Bride tobe cake.jpeg';
import engagement from '../Pictures/programs based/Engagement Cake.jpeg';
import groomToBe from '../Pictures/programs based/Groom tobe Cake.jpeg';
import plane from '../Pictures/programs based/Plane cake.jpeg';
import pregnancy from '../Pictures/programs based/Pregnency cake.jpeg';
import holyCommunion from '../Pictures/programs based/holy communion.jpeg';
import { useState } from 'react';


export default function Shop() {
  const cakes = [
    {
      title: "Anniversary Special",
      price: "60.00",
      image: anniversary,
      description:
        "Celebrate your love and milestones with this elegant anniversary cake, crafted to perfection.",
    },
    {
      title: "Birthday Bash",
      price: "45.00",
      image: birthday,
      description:
        "Make your birthday extra special with our delicious, custom-designed birthday cakes.",
    },
    {
      title: "Bride to Be",
      price: "55.00",
      image: brideToBe,
      description:
        "A stunning cake for the bride-to-be, adding sweetness and style to her pre-wedding celebrations.",
    },
    {
      title: "Engagement Delight",
      price: "65.00",
      image: engagement,
      description:
        "Mark the beginning of your forever with a beautiful engagement cake that tastes as good as it looks.",
    },
    {
      title: "Groom to Be",
      price: "55.00",
      image: groomToBe,
      description:
        "Celebrate the groom-to-be with a classic and stylish cake designed just for him.",
    },
    {
      title: "Little Pilot",
      price: "48.00",
      image: plane,
      description:
        "Take flight with this adorable plane-themed cake, perfect for little aviators and adventure lovers.",
    },
    {
      title: "Baby Shower",
      price: "58.00",
      image: pregnancy,
      description:
        "Welcome the new arrival with a beautiful and heartwarming baby shower cake.",
    },
    {
      title: "Holy Communion",
      price: "52.00",
      image: holyCommunion,
      description:
        "A pure and elegant cake to celebrate the sacred occasion of Holy Communion.",
    },
  ];

  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const handleOrderClick = (name) => {
    const whatsappNumber = "919895253797";
    const message = encodeURIComponent(`Hello, I would like to order the "${name}".`);
    const href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    window.open(href, '_blank')
  };

  return (
    <>
      <section
        id="shop"
        className="bg-gradient-to-br from-primary-100 via-white to-primary-50 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h2 className="text-5xl font-serif font-semibold italic text-primary-700 mb-4 tracking-tight">
            Classic Cakes
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto md:mx-0 text-lg ">
            Indulge in our handcrafted selection of premium cakes —
            <span className='block md:inline'> we love to design your valuable days.</span>
            <span className="hidden md:inline text-primary-600 block mt-2"> Created with passion, baked with perfection, and served with a sprinkle of magic just for you.</span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10">
            {cakes.map((cake) => (
              <div
                key={cake.title}
                className="group relative bg-white rounded-3xl shadow-sm transition-transform duration-300 ease-out will-change-transform overflow-hidden"
              >
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-40 md:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out will-change-transform"
                  />
                </div>

                <div className="p-3 md:p-6 text-left">
                  <h3 className="text-sm md:text-xl font-semibold text-gray-800 mb-1 md:mb-2 group-hover:text-primary-700 transition line-clamp-1">
                    {cake.title}
                  </h3>
                  <p className="text-gray-500 mb-2 md:mb-4 text-xs md:text-md line-clamp-2">
                    {cake.description}
                  </p>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
                    <button
                      className="hover:bg-primary-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm transition-all shadow-md hover:shadow-lg w-full md:w-auto text-center"
                      style={{ backgroundColor: '#6E473B' }}
                      onClick={() => { handleOrderClick(cake.title) }}
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );

}