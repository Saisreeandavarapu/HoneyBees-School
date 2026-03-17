

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="section-padding">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image/Visual Side */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-square md:aspect-video lg:aspect-square bg-bg-light rounded-3xl overflow-hidden relative shadow-2xl border-4 border-white">
                            {/* Temporary placeholder mimicking a lively environment */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 opacity-80 mix-blend-overlay"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-6xl shadow-inner">🧸 🎨 📚</div>

                            {/* Decorative badge */}
                            <div className="absolute -bottom-6 -right-6 bg-primary text-secondary font-bold p-6 rounded-full shadow-xl border-4 border-white flex flex-col items-center justify-center w-32 h-32 transform rotate-12">
                                <span className="text-2xl">100%</span>
                                <span className="text-xs text-center leading-tight">Child Care</span>
                            </div>
                        </div>

                        {/* Background decorative blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-amber-50 rounded-full blur-3xl opacity-70"></div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="inline-block mb-2 text-primary-dark font-bold text-sm uppercase tracking-wider">
                            About Our School
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl">
                            A Home Away From Home
                        </h2>
                        <p className="text-lg text-text-light leading-relaxed">
                            At Honey Bees Pre-School, we offer a unique and supportive environment where children feel at home while developing foundational skills. Located in Visakhapatnam, we pride ourselves on exceptional care and an engaging atmosphere.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div className="bg-amber-50 p-5 rounded-2xl hover:shadow-md transition-shadow">
                                <div className="text-2xl mb-3">🏛️</div>
                                <h3 className="font-bold text-xl mb-2 text-secondary">Excellent Infrastructure</h3>
                                <p className="text-sm text-text-light">Spacious 2600 sq.ft facility designed specifically for early childhood learning and play.</p>
                            </div>

                            <div className="bg-amber-50 p-5 rounded-2xl hover:shadow-md transition-shadow">
                                <div className="text-2xl mb-3">🧼</div>
                                <h3 className="font-bold text-xl mb-2 text-secondary">Health & Safety</h3>
                                <p className="text-sm text-text-light">Strict daily sanitation, safety measurements, COVID-19 protocols, and comprehensive CCTV coverage.</p>
                            </div>

                            <div className="bg-amber-50 p-5 rounded-2xl hover:shadow-md transition-shadow">
                                <div className="text-2xl mb-3">🧑‍🏫</div>
                                <h3 className="font-bold text-xl mb-2 text-secondary">Individual Care</h3>
                                <p className="text-sm text-text-light">Well-experienced teachers providing personalized attention to every student's growth.</p>
                            </div>

                            <div className="bg-amber-50 p-5 rounded-2xl hover:shadow-md transition-shadow">
                                <div className="text-2xl mb-3">⏰</div>
                                <h3 className="font-bold text-xl mb-2 text-secondary">Flexible Timings</h3>
                                <p className="text-sm text-text-light">Convenient daycare open till 7:30 PM, supporting working parents with reliable care.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
