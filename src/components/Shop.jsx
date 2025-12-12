import white from '../Pictures/white.jpg';
import black from '../Pictures/buter.jpg';
import stawberry from '../Pictures/stawberry.jpg';
import choclate from '../Pictures/black.jpeg';
import caramel from '../Pictures/butterscotch.jpeg';
import { useState } from 'react';


export default function Shop() {
  const cakes = [
    {
      title: "Dozen Cupcakes",
      price: "32.00",
      image: white,
      description:
        "A perfect dozen of soft, fluffy cupcakes topped with creamy frosting — ideal for any celebration or sweet craving.",
    },
    {
      title: "Cookies and Cream",
      price: "30.00",
      image:
        caramel,
      description:
        "Rich layers of chocolate and vanilla cream blended with crushed cookies for that irresistible crunch.",
    },
    {
      title: "Gluten Free Mini Dozen",
      price: "31.00",
      image: black,
      description:
        "Moist and flavorful gluten-free mini cupcakes — baked with love and topped with silky buttercream.",
    },
    {
      title: "Cookie Dough",
      price: "25.00",
      image:
        "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=600&q=60",
      description:
        "Soft vanilla cake layered with edible cookie dough and chocolate chunks — the ultimate comfort dessert.",
    },
    {
      title: "Vanilla Salted Caramel",
      price: "5.00",
      image: stawberry,
      description:
        "A creamy vanilla base drizzled with golden salted caramel — sweet, salty, and simply irresistible.",
    },
    {
      title: "German Chocolate",
      price: "14.00",
      image:
        choclate,
      description:
        "Classic German chocolate cake layered with coconut-pecan frosting — rich, nutty, and indulgent.",
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
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-extrabold text-primary-700 mb-4 tracking-tight">
            Classic Cakes
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-lg ">
            Indulge in our handcrafted selection of premium cakes —
            <span className='font-bold'>we love to design your valuable days</span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-10">
            {cakes.map((cake) => (
              <div
                key={cake.title}
                className="group relative bg-white rounded-3xl shadow-sm transition-transform duration-300 ease-out hover:-translate-y-2 will-change-transform overflow-hidden"
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
                      className="hover:bg-primary-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm transition-all shadow-md hover:shadow-lg w-full md:w-auto text-center"
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