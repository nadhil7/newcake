import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="bg-gradient-to-r from-pink-100 via-white to-pink-50 md:py-20 py-6">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
                
                {/* Left Image Side */}
                <div className="flex-1 w-full">
                    <motion.div
                        className="relative group rounded-3xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1.3, ease: "easeOut" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80"
                            alt="Delicious Cake"
                            className="w-full h-[420px] lg:h-[500px] object-cover rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-300/10 to-transparent rounded-3xl transition-opacity group-hover:opacity-50"></div>
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
                    <span className="text-pink-600 uppercase font-sans  tracking-widest text-sm font-semibold">
                        About Cake Shop
                    </span>

                    <h2 className="text-5xl lg:text-6xl font-serif font-semibold italic text-gray-900 mt-3 leading-tight">
                        Cakes and bakes from the house of Queens!
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed mt-6 max-w-2xl mx-auto lg:mx-0">
                        The <span className="font-semibold text-pink-700">"Cake Fairy"</span> started as a small family bakery and grew into a
                        beloved brand known for its artistry and flavor. Founded by{" "}
                        <span className="font-medium text-gray-800">Dr. Iyad Sultan</span> and{" "}
                        <span className="font-medium text-gray-800">Dr. Sereen Sharabati</span>,
                        we’ve been perfecting the art of baking to bring joy and warmth in every bite.
                    </p>

                    {/* Skill Bars */}
                    <div className="mt-12 space-y-8 max-w-xl mx-auto lg:mx-0">
                        {[
                            { label: "Cake Design", percent: 95 },
                            { label: "Cake Classes", percent: 80 },
                            { label: "Cake Recipes", percent: 90 },
                        ].map((bar, i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-800 font-semibold">{bar.label}</span>
                                    <span className="text-pink-600 font-bold">{bar.percent}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-pink-400 to-pink-600 h-3 rounded-full"
                                        style={{ width: `${bar.percent}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
