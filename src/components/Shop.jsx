export default function Shop() {
    const cakes = [
        {
            title: "Dozen Cupcakes",
            price: "32.00",
            image:
                "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=60",
        },
        {
            title: "Cookies and Cream",
            price: "30.00",
            image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
        },
        {
            title: "Gluten Free Mini Dozen",
            price: "31.00",
            image:
                "https://images.unsplash.com/photo-1519864600265-abb23843b8d4?auto=format&fit=crop&w=600&q=60",
        },
        {
            title: "Cookie Dough",
            price: "25.00",
            image:
                "https://images.unsplash.com/photo-1447078806655-40579c2520d6?auto=format&fit=crop&w=600&q=60",
        },
        {
            title: "Vanilla Salted Caramel",
            price: "5.00",
            image:
                "https://images.unsplash.com/photo-1519864709115-3ebc61e25232?auto=format&fit=crop&w=600&q=60",
        },
        {
            title: "German Chocolate",
            price: "14.00",
            image:
                "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
        },
    ];

    return (
        <section id="shop" className="bg-gradient-to-b from-pink-50 to-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-pink-700 text-center mb-10">
                    Classic Cakes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {cakes.map((cake) => (
                        <div
                            key={cake.title}
                            className="bg-white rounded-2xl shadow hover:shadow-xl transition p-5"
                        >
                            <img
                                src={cake.image}
                                alt={cake.title}
                                className="w-full h-44 object-cover rounded-xl mb-4"
                            />
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold text-pink-700">{cake.title}</h3>
                                <span className="text-pink-500 font-bold">${cake.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}