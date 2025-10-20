import React from 'react'
import { useState } from "react";

const slides = [
    {
        bg: "/img/hero/hero-1.jpg",
        headline: "Making your life sweeter one bite at a time!",
        button: "Our cakes"
    },
    {
        bg: "/img/hero/hero-1.jpg",
        headline: "Making your life sweeter one bite at a time!",
        button: "Our cakes"
    }
];

function HeroSlider() {
    const [active, setActive] = useState(0);

    const handlePrev = () => {
        setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="relative lg:hidden">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-700"
                    style={{ transform: `translateX(-${active * 100}%)` }}>
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className="w-full flex-shrink-0 h-[700px] flex items-center justify-center bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.bg})` }}
                            aria-hidden={active !== idx}
                        >
                            <div className="container flex justify-center">
                                <div className="lg:w-2/3 relative">
                                    <div
                                        className="hero__text relative text-center bg-white px-8 lg:px-16 py-16"
                                    >
                                        <div className="absolute left-4 top-4 h-[calc(100%-32px)] w-[calc(100%-32px)] border border-dashed border-orange-400 opacity-30 pointer-events-none"></div>
                                        <h2
                                            className={`text-[46px] leading-[60px] font-bold italic text-gray-900 mb-5 relative transition-all duration-300 ${active === idx ? "top-0 opacity-100" : "top-24 opacity-0"
                                                }`}
                                        >
                                            {slide.headline}
                                        </h2>
                                        <a
                                            href="#"
                                            className={`inline-block mt-3 primary-btn relative transition-all duration-500 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold ${active === idx ? "top-0 opacity-100" : "top-24 opacity-0"
                                                }`}
                                        >
                                            {slide.button}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous Slide"
                    className="absolute left-7 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/50 rounded-full text-white text-2xl flex items-center justify-center z-10 transition hover:bg-black"
                >
                    &#8592;
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next Slide"
                    className="absolute right-7 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/50 rounded-full text-white text-2xl flex items-center justify-center z-10 transition hover:bg-black"
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}
export default HeroSlider