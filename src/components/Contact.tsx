export default function Contact() {
    return (
        <section id="contact" className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-pink-700 mb-4">Contact Us</h2>
                <p className="mb-6 text-gray-600">
                   cakefairy1@gmail.com
                </p>
                <form className="max-w-md mx-auto flex flex-col gap-4">
                    <input type="text" placeholder="Name" className="border p-3 rounded" />
                    <input type="text" placeholder="Phone" className="border p-3 rounded" />
                    <textarea placeholder="Type your requirements" className="border p-3 rounded" />
                    <button className="mt-2 py-2 px-6 bg-pink-600 hover:bg-pink-700 text-white rounded font-semibold">Submit</button>
                </form>
            </div>
        </section>
    );
}