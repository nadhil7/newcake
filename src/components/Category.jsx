import React from 'react';

const categories = [
    { label: 'Cupcake', icon: '🧁' },
    { label: 'Butter', icon: '🧈' },
    { label: 'Red Velvet', icon: '🍰' },
    { label: 'Biscuit', icon: '🍪' },
    { label: 'Donut', icon: '🍩' },
    { label: 'Cupcake', icon: '🧁' },
];

export default function CategoriesSlider() {
    return (
        <div className="px-4">
            <div className="flex space-x-6 overflow-x-auto pb-10 border-b border-orange-300/50">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="relative flex flex-col items-center justify-center rounded-full h-[194px] w-[194px] pt-6 transition-all duration-300 hover:bg-orange-500 group"
                    >
                        <span className="text-5xl text-orange-500 transition-all duration-200 group-hover:text-white">
                            {cat.icon}
                        </span>
                        <h5 className="mt-1 text-lg font-semibold text-gray-900 uppercase transition-all duration-200 group-hover:text-white">
                            {cat.label}
                        </h5>
                        <span
                            className="absolute left-0 right-0 mx-auto bottom-[-48px] w-4 h-4
                border border-transparent border-t-orange-500 border-r-orange-500
                rotate-[-135deg] opacity-0 group-hover:opacity-100 transition-all duration-300"
                        ></span>
                    </div>
                ))}
            </div>
        </div>
    );
}
