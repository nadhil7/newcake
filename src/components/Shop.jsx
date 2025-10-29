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

  const handleOrderClick = (name, price) => {
    const whatsappNumber = "919895253797";
    const message = encodeURIComponent(`Hello, I would like to order the "${name}" (${price}).`);
    const href = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`;
    window.open(href,'_blank')
  };

  return (
    <>
      <section
        id="shop"
        className="bg-gradient-to-br from-pink-100 via-white to-pink-50 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-extrabold text-pink-700 mb-4 tracking-tight">
            Classic Cakes
          </h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto text-lg ">
            Indulge in our handcrafted selection of premium cakes —
            <span className='font-bold'>we love to design your valuable days</span> 
            </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {cakes.map((cake) => (
              <div
                key={cake.title}
                className="group relative bg-white rounded-3xl shadow-sm transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={cake.image}
                    alt={cake.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-pink-700 transition">
                    {cake.title}
                  </h3>
                  <p className="text-gray-500 mb-4 text-md">
                    {cake.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="text-pink-600 font-bold text-lg">
                      ${cake.price}
                    </span>
                    <button
                      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
                      onClick={() => { handleOrderClick(cake.title, cake.price) }}
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