

const Services = () => {
    const services = [
        {
            title: "Play School",
            icon: "🎈",
            description: "A fun, interactive learning environment where toddlers begin their educational journey through play, music, and art.",
            color: "bg-pink-100",
            textColor: "text-pink-600"
        },
        {
            title: "Daycare",
            icon: "🧸",
            description: "A safe, nurturing home away from home. We provide reliable care with flexible timings up to 7:30 PM for working parents.",
            color: "bg-blue-100",
            textColor: "text-blue-600"
        },
        {
            title: "Tuition Center",
            icon: "📚",
            description: "Academic support and personal attention for students from LKG onwards, helping them excel in their regular school studies.",
            color: "bg-green-100",
            textColor: "text-green-600"
        }
    ];

    return (
        <section id="services" className="py-20 bg-amber-50 relative overflow-hidden">
            {/* Decorative SVG wave at the top */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
                <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
                </svg>
            </div>

            <div className="section-padding relative z-10 pt-24">
                <div className="text-center mb-16">
                    <span className="text-primary-dark font-bold tracking-wider uppercase text-sm mb-2 block">Our Offerings</span>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-secondary mb-4">
                        Comprehensive Child Development
                    </h2>
                    <p className="text-text-light max-w-2xl mx-auto text-lg">
                        We provide holistic care and education structured around three core pillars tailored to different age groups and needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="glass-panel rounded-3xl p-8 hover:-translate-y-3 transition-transform duration-300 relative overflow-hidden group">
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className={`w-20 h-20 ${service.color} ${service.textColor} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm transform group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
                                <p className="text-text-light leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <a href="#contact" className={`inline-flex items-center font-bold ${service.textColor} hover:underline`}>
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
