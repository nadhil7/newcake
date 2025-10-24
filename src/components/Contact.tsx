import { motion } from "framer-motion";
import black from "../Pictures/black.jpeg";
import white from "../Pictures/white.jpg";

export default function Contact() {

  const cakeImages = [
    { image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
    { image: black },
    { image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" },
    { image: white },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-pink-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side - Contact Form */}
        <div className="flex-1 w-full">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:pl-20">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Reach out to us: <span className="font-medium text-pink-600">cakefairy1@gmail.com</span>
            </p>
          </div>

          <form className="max-w-md mx-auto flex flex-col gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="border border-gray-300 rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Phone"
              required
              className="border border-gray-300 rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            />
            <textarea
              name="message"
              placeholder="Type your requirements"
              required
              className="border border-gray-300 rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition resize-none h-32"
            />
            <button
              type="submit"
              className="mt-2 py-3 px-8 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transform transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Cake Images Grid */}
        <motion.div
          className="flex-1 w-full grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {cakeImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={img.image}
                alt={`Cake ${idx + 1}`}
                className="w-full h-48 md:h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-200/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity rounded-3xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
