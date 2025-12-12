export default function Testimonials() {
    const testimonials = [
        {
            name: "KERRY D.SILVA",
            city: "New York",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra lacus vel facilisis.",
            stars: 4,
        },
        {
            name: "OPHELIA NUNEZ",
            city: "London",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra lacus vel facilisis.",
            stars: 4,
        },
    ];
    return (
        <section id="testimonials" className="py-16 px-4 bg-pink-50">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-semibold italic text-pink-700 mb-8">Our clients say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow transition hover:shadow-xl">
                            <h4 className="font-semibold text-pink-700 text-lg">{t.name}</h4>
                            <p className="text-gray-500 mb-2">{t.city}</p>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`text-yellow-400 text-xl ${i < t.stars ? "" : "opacity-20"}`}>★</span>
                                ))}
                            </div>
                            <p className="text-gray-700 italic">"{t.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
