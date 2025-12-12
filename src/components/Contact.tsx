import { motion } from "framer-motion";
import black from "../Pictures/black.jpeg";
import white from "../Pictures/white.jpg";
import cake from '../Pictures/cake.jpg'

export default function Contact() {

  const cakeImages = [
    { image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
    { image: black },
    { image: cake },
    { image: white },
  ];

  return (
    <section id="contact" className="py-15 px-4 bg-gradient-to-b from-primary-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side - Contact Form */}
        <div className="flex-1 w-full">
          <div className="text-center lg:text-left mb-8 lg:mb-0 lg:pl-20">
            <h2 className="text-4xl md:text-5xl font-serif  font-bold text-primary-700 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Reach out to us: <span className="font-mono text-primary-600 ">cakefairy1@gmail.com</span>
            </p>
          </div>

          <form className="max-w-md mx-auto flex flex-col gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="border border-gray-300 rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition"
            />
            <input
              type="text"
              name="user_phone"
              placeholder="Phone"
              required
              className="border border-gray-300 rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition"
            />
            <textarea
              name="message"
              placeholder="Type your requirements"
              required
              className="border border-gray-300 rounded-xl p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition resize-none h-32"
            />
            <button
              type="submit"
              className="mt-2 py-3 px-8 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transform transition"
              style={{ background: 'linear-gradient(to right, #6E473B, #462E25)' }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Cake Images Grid */}
        <motion.div
          className="flex-1 w-full grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {cakeImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={img.image}
                alt={`Cake ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-48 md:h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-200/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity rounded-3xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
