export default function About() {
    return (
        <>
            <section className="about spad py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4">
                            <div className="about__text">
                                <div className="section-title mb-6">
                                    <span className="text-orange-600 uppercase tracking-widest text-sm">About Cake shop</span>
                                    <h2 className="text-4xl font-serif font-semibold italic mt-2">
                                        Cakes and bakes from the house of Queens!
                                    </h2>
                                </div>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    The "Cake Shop" is a Jordanian Brand that started as a small family business. The owners are Dr. Iyad Sultan and Dr. Sereen Sharabati, supported by a staff of 80 employees.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <div className="about__bar space-y-6">
                                <div className="about__bar__item">
                                    <p className="text-gray-600 font-semibold tracking-wide mb-1">Cake design</p>
                                    <div className="bg-gray-300 rounded-full h-4 w-full overflow-hidden">
                                        <div className="bg-black h-4 rounded-full w-[95%]" />
                                    </div>
                                </div>
                                <div className="about__bar__item">
                                    <p className="text-gray-600 font-semibold tracking-wide mb-1">Cake Class</p>
                                    <div className="bg-gray-300 rounded-full h-4 w-full overflow-hidden">
                                        <div className="bg-black h-4 rounded-full w-[80%]" />
                                    </div>
                                </div>
                                <div className="about__bar__item">
                                    <p className="text-gray-600 font-semibold tracking-wide mb-1">Cake Recipes</p>
                                    <div className="bg-gray-300 rounded-full h-4 w-full overflow-hidden">
                                        <div className="bg-black h-4 rounded-full w-[90%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}