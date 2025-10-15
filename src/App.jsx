import React from "react";
import NavBar from "./components/Navbar";
import HeroSlider from "./components/Heroslider";
// Dummy data for cake products
const cakes = [
  {
    title: "Dozen Cupcakes",
    price: "32.00",
    image:
      "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Cookies and Cream",
    price: "30.00",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Gluten Free Mini Dozen",
    price: "31.00",
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23843b8d4?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Cookie Dough",
    price: "25.00",
    image:
      "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Vanilla Salted Caramel",
    price: "5.00",
    image:
      "https://images.unsplash.com/photo-1519864709115-3ebc61e25232?auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "German Chocolate",
    price: "14.00",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
  },
];

const testimonials = [
  {
    name: "KERRY D.SILVA",
    city: "New York",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra lacus vel facilisis.",
    stars: 4,
  },
  {
    name: "OPHELIA NUNEZ",
    city: "London",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra lacus vel facilisis.",
    stars: 4,
  },
];


function Hero() {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-pink-50 to-pink-200 py-24 text-center">
      <h1 className="text-5xl font-extrabold text-pink-700 mb-6 max-w-2xl mx-auto">
        Making your life sweeter one bite at a time!
      </h1>
      <a
        href="#shop"
        className="px-8 py-3 mt-8 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-bold text-lg shadow transition"
      >
        Our Cakes
      </a>
    </section>
  );
}

function About() {
  return (
    <>
      <section className="about spad py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <div className="about__text">
                <div className="section-title mb-6">
                  <span className="text-orange-600 uppercase tracking-widest text-sm">About Cake shop</span>
                  <h2 className="text-4xl font-serif font-semibold italic mt-2">
                    Cakes and bakes from the house of Queens!
                  </h2>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">
                  The "Cake Shop" is a Jordanian Brand that started as a small family business. The owners are Dr. Iyad Sultan and Dr. Sereen Sharabati, supported by a staff of 80 employees.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="about__bar space-y-6">
                <div className="about__bar__item">
                  <p className="text-gray-600 font-semibold tracking-wide mb-1">Cake design</p>
                  <div className="bg-gray-300 rounded-full h-4 w-full overflow-hidden">
                    <div className="bg-black h-4 rounded-full w-[95%]" />
                  </div>
                </div>
                <div className="about__bar__item">
                  <p className="text-gray-600 font-semibold tracking-wide mb-1">Cake Class</p>
                  <div className="bg-gray-300 rounded-full h-4 w-full overflow-hidden">
                    <div className="bg-black h-4 rounded-full w-[80%]" />
                  </div>
                </div>
                <div className="about__bar__item">
                  <p className="text-gray-600 font-semibold tracking-wide mb-1">Cake Recipes</p>
                  <div className="bg-gray-300 rounded-full h-4 w-full overflow-hidden">
                    <div className="bg-black h-4 rounded-full w-[90%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

function Shop() {
  return (
    <section id="shop" className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-700 text-center mb-10">
          Classic Cakes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <div
              key={cake.title}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition p-5"
            >
              <img
                src={cake.image}
                alt={cake.title}
                className="w-full h-44 object-cover rounded-xl mb-4"
              />
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-pink-700">{cake.title}</h3>
                <span className="text-pink-500 font-bold">${cake.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-700 text-center mb-2">
          Our Team
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Sweet Baker
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1 bg-pink-50 rounded-lg shadow p-6">
            <h3 className="font-semibold text-pink-700 text-lg mb-2">Join Us</h3>
            <p className="text-gray-600">Love baking and making moments sweeter? Join our growing team!</p>
            <a href="#contact" className="inline-block mt-4 px-5 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-8">Our clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow transition hover:shadow-xl">
              <h4 className="font-semibold text-pink-700 text-lg">{t.name}</h4>
              <p className="text-gray-500 mb-2">{t.city}</p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-yellow-400 text-xl ${i < t.stars ? "" : "opacity-20"}`}>★</span>
                ))}
              </div>
              <p className="text-gray-700 italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-4">Contact Us</h2>
        <p className="mb-6 text-gray-600">
          1000 Lakepoint Dr, Frisco, CO 80443, USA&nbsp;&#183;&nbsp;Sweetcake@support.com&nbsp;&#183;&nbsp;+1 800-786-1000
        </p>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Name" className="border p-3 rounded" />
          <input type="text" placeholder="Phone" className="border p-3 rounded" />
          <textarea placeholder="Type your requirements" className="border p-3 rounded" />
          <button className="mt-2 py-2 px-6 bg-pink-600 hover:bg-pink-700 text-white rounded font-semibold">Submit</button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-pink-600 text-white text-center py-6 mt-10">
      <div>
        Follow us on <span className="font-bold">@sweetcake</span> &middot;
        <a href="#" className="mx-1 underline">Instagram</a>
      </div>
      <div className="mt-2 text-sm">
        &copy; 2025 All rights reserved | This template is made by Colorlib | <a href="#" className="underline">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans bg-pink-50 min-h-screen">
      <NavBar />
      <HeroSlider />
      <About />
      <Shop />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
