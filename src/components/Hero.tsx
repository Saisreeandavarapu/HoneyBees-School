

const Hero = () => {
    return (
        <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-bg-light via-white to-amber-100">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-10 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="section-padding relative z-10 flex flex-col items-center text-center">
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 text-secondary font-semibold text-sm border border-primary/30 shadow-sm backdrop-blur-sm">
                    Welcome to the Best Pre-School in Visakhapatnam
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-secondary mb-6 leading-tight max-w-4xl mx-auto drop-shadow-sm">
                    Where Little <span className="text-primary-dark">Honey Bees</span> Grow & Thrive
                </h1>

                <p className="text-lg md:text-xl text-text-light mb-10 max-w-2xl mx-auto">
                    Providing a home-like environment with excellent infrastructure for Play School, Daycare, and Tuition Centre. Serving the community in Lawson's Bay Colony since inception.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" className="btn-primary text-lg">
                        Enroll Now
                    </a>
                    <a href="#services" className="bg-white text-secondary hover:bg-gray-50 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 flex items-center justify-center">
                        Explore Services
                    </a>
                </div>

                {/* Floating cards / elements for visual interest */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
                    <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300">
                        <span className="text-3xl mb-2">🏫</span>
                        <span className="font-bold text-sm text-secondary">2600 sqft Space</span>
                    </div>
                    <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 delay-100">
                        <span className="text-3xl mb-2">⭐</span>
                        <span className="font-bold text-sm text-secondary">4.9/5 Rating</span>
                    </div>
                    <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 delay-200">
                        <span className="text-3xl mb-2">🛡️</span>
                        <span className="font-bold text-sm text-secondary">Safe & Secure</span>
                    </div>
                    <div className="glass-panel p-4 rounded-2xl flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 delay-300">
                        <span className="text-3xl mb-2">👩‍🏫</span>
                        <span className="font-bold text-sm text-secondary">Expert Teachers</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
