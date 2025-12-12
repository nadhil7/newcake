
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

            {/* Light gradient overlay: White on the left for text readability, clear on the right for the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent z-0"></div>

            <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 mb-10">
                <div className="max-w-2xl">
                    {/* Main Heading with elegant font */}
                    <motion.h1
                        className="font-serif text-6xl md:text-7xl lg:text-8xl text-primary-900 mb-8 tracking-wide text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                    >
                        Bakery
                    </motion.h1>

                    {/* Hero Description */}
                    <motion.p
                        className="text-lg md:text-xl text-primary-700 mb-12 leading-relaxed text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Handcrafted with love, baked to perfection. Discover our exquisite collection of artisan cakes and pastries.
                    </motion.p>

                    {/* CTA Button */}
                    <motion.a
                        href="#shop"
                        className="inline-block text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 uppercase tracking-wider text-sm"
                        style={{ backgroundColor: '#6E473B' }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Shop Now
                    </motion.a>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-5"></div>
        </section>
    );
}
