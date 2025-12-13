import { motion } from "framer-motion";
import spiderman from '../Pictures/cakes/pic8.jpeg'

export default function About() {
    return (
        <section className="bg-gradient-to-r from-primary-100 via-white to-primary-50 md:py-20 py-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start gap-16">

                {/* Left Image Side */}
                <div className="flex-1 w-full">
                    <motion.div
                        className="relative group rounded-3xl overflow-hidden "
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.3, ease: "easeOut" }}
                    >
                        <img
                            src={spiderman}
                            className="w-full h-[420px] lg:h-[500px] object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-300/10 to-transparent rounded-3xl transition-opacity group-hover:opacity-50"></div>
                    </motion.div>
                </div>

                {/* Right Text Side */}
                <motion.div
                    className="flex-1 text-center lg:text-left"
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.3, ease: "easeOut" }}
                >
                    <span className="text-primary-600 uppercase font-sans  tracking-widest text-sm font-semibold">
                        About Cake Shop
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-serif font-semibold italic text-gray-900 mt-3 leading-tight">
                        Cakes and bakes from the house of Queens!
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6 max-w-2xl mx-auto lg:mx-0">
                        At <span className="font-semibold text-primary-700">Cake Fairy</span>, we believe that every celebration deserves a masterpiece. Our passion is crafting delicious, artisan cakes that look as amazing as they taste. From classic favorites to custom creations, we put our heart into every batter, frosting, and decoration to make your moments sweeter.
                    </p>


                </motion.div>
            </div>
        </section>
    );
}
