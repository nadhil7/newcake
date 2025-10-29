// HeroSection.js
import React from 'react';
import honeybee from '../Pictures/cakes/honeeybeetheme_main.jpeg';
import bunny from '../Pictures/cakes/pic7.jpeg';
import bride from '../Pictures/cakes/bridetobe.jpeg';

export default function HeroSection() {
    return (
        <section className="hidden md:block bg-pink-100 py-12 px-4 md:px-16 lg:px-32">
            <div className="flex flex-col items-center justify-center text-center ">
                {/* Floral and Cake Banner */}
                <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center mb-6">
                    {/* Replace these src attributes with your actual cake/product images */}
                    <img src={honeybee} alt="Custom Cake" className="w-36 h-36 rounded-full object-cover shadow-lg" />
                    <img src={bunny} alt="Macarons" className="w-36 h-36 rounded-full object-cover shadow-lg" />
                    <img src={bride} alt="Cupcake" className="w-36 h-36 rounded-full object-cover shadow-lg" />
                </div>
                {/* Heading & Description */}
                <h1 className="text-4xl md:text-5xl font-serif mb-4 text-pink-900">
                    Delight in Every Bite!
                </h1>
                <p className="text-base md:text-lg text-pink-700 mb-6 max-w-2xl">
                    Celebrate every occasion with custom cakes, delicious puddings, and irresistible cupcakes. Crafted with love & premium ingredients.
                </p>
                {/* CTA Button */}
                <a
                    href="https://wa.me/9198952 53797"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-pink-700 duration-200"
                >
                    Order Now
                </a>
            </div>
        </section>
    );
}
