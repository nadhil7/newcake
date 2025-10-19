export default
    function Team() {
    return (
        <section id="team" className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-pink-700 text-center mb-2">
                    Our Team
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Sweet Baker
                </p>
                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <div className="flex-1 bg-pink-50 rounded-lg shadow p-6">
                        <h3 className="font-semibold text-pink-700 text-lg mb-2">Join Us</h3>
                        <p className="text-gray-600">Love baking and making moments sweeter? Join our growing team!</p>
                        <a href="#contact" className="inline-block mt-4 px-5 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">Contact</a>
                    </div>
                </div>
            </div>
        </section>
    );
}