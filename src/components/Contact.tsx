import { motion } from "framer-motion";
import black from "../Pictures/cakes/pic8.jpeg";
import cake from '../Pictures/cakes/pic9.jpeg'
import cakeVideo from '../Pictures/cakes/cake video1.mp4';
import instagramIcon from '../assets/instagram.png';

export default function Contact() {

  const cakeImages = [
    { type: 'image', src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
    { type: 'image', src: black },
    { type: 'image', src: cake },
    { type: 'video', src: cakeVideo },
  ];

  return (
    <section id="contact" className="py-15 px-4 bg-gradient-to-b from-primary-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side - Contact Form */}
        <div className="flex-1 w-full">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-serif italic font-semibold text-primary-700 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Reach out to us: <span className="font-mono text-primary-600 ">cakefairy1@gmail.com</span>
            </p>

            <div className="flex gap-6 mb-8">
              <a
                href="https://wa.me/919895253797"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition duration-300"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/cake__fairy1?igsh=MXI2bXI4cmJ3ejd4eQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition duration-300"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251500.6879302732!2d75.95672607421876!3d9.959044422228864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b086d000b7c0ff5%3A0x53ea297ddf380622!2sCake%20Fairy!5e0!3m2!1sen!2sin!4v1765545525647!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Cake Images Grid */}
        <motion.div
          className="flex-1 w-full grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {cakeImages.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-48 md:h-60 object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Cake ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 md:h-60 object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-200/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity rounded-3xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
