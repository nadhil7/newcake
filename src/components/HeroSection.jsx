
import React from 'react';
import { motion } from 'framer-motion';
import heroBackground from '../Pictures/bakcgrounds/new background cake.jpg';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-end justify-start overflow-hidden pb-8">
            <img
                src={heroBackground}
                alt="Bakery background"
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-105 saturate-110"
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    imageRendering: 'high-quality'
                }}
            />



            <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 mb-10">
                <div className="max-w-2xl">
                    <div className="backdrop-blur-md bg-white/30 p-8 rounded-3xl border border-white/40 shadow-xl">
                        {/* Main Heading with elegant font */}
                        <motion.h1
                            className="font-serif italic font-semibold text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-8 tracking-wide text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                        >
                            Bakery
                        </motion.h1>

                        {/* Hero Description */}
                        <motion.p
                            className="text-lg md:text-xl text-gray-800 mb-10 leading-relaxed text-left"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Handcrafted with love, baked to perfection. Discover our exquisite collection of artisan cakes and pastries.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.a
                            href="#shop"
                            className="inline-block text-gray-900 font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm backdrop-blur-xl border border-white/40"
                            style={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                            }}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Shop Now
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-5"></div>
        </section>
    );
}
