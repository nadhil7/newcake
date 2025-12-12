import React from "react";

const cakes = [
    {
        id: 1,
        name: "Classic Chocolate Cake",
        description: "Rich and moist chocolate layered cake.",
        price: "$20",
        image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 2,
        name: "Vanilla Dream",
        description: "Soft vanilla sponge with creamy frosting.",
        price: "$18",
        image:
            "https://images.unsplash.com/photo-1505253210343-d8178297b97a?auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        name: "Strawberry Delight",
        description: "Fresh strawberries with a light custard base.",
        price: "$22",
        image:
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=60",
    },
];

function CakeCard({ cake }) {
    // WhatsApp phone (country code + number, no + or spaces)
    const whatsappNumber = "918113948278";
    // Message to pre-fill
    const message = encodeURIComponent(`Hello, I would like to order the "${cake.name}".`);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-primary-600">{cake.name}</h3>
                <p className="text-gray-600 mt-2">{cake.description}</p>

                <a
                    href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white px-4 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg"
                    style={{ backgroundColor: '#6E473B' }}
                >
                    Order Now
                </a>
            </div>
        </div>
    );
}

export default CakeCard;
