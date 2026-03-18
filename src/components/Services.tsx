import { motion } from 'framer-motion';
import { Palette, Baby, School, ChevronRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: "Play School",
            icon: <Palette className="w-8 h-8" />,
            description: "A fun, interactive learning environment where toddlers begin their educational journey through play, music, and art.",
            color: "bg-[#FFF0F3]",
            textColor: "text-pink-600"
        },
        {
            title: "Daycare",
            icon: <Baby className="w-8 h-8" />,
            description: "A safe, nurturing home away from home. We provide reliable care with flexible timings up to 7:30 PM for working parents.",
            color: "bg-[#E0F2FE]",
            textColor: "text-blue-600"
        },
        {
            title: "Tuition Center",
            icon: <School className="w-8 h-8" />,
            description: "Academic support and personal attention for students from LKG onwards, helping them excel in their regular studies.",
            color: "bg-[#F0FDF4]",
            textColor: "text-green-600"
        }
    ];

    return (
        <section id="services" className=" bg-amber-50/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

            <div className="section-padding relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-dark font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Our Offerings
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary mb-6"
                    >
                        Comprehensive <span className="text-primary italic font-heading">Growth</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-text-light max-w-2xl mx-auto text-lg text-balance"
                    >
                        We provide holistic care and education structured around three core pillars tailored to different age groups and needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="premium-card p-10 group relative overflow-hidden"
                        >
                            {/* Card Background Bloom */}
                            <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10 space-y-6">
                                <div className={`w-16 h-16 ${service.color} ${service.textColor} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-secondary">{service.title}</h3>
                                <p className="text-text-light leading-relaxed text-balance">
                                    {service.description}
                                </p>
                                <a
                                    href="#contact"
                                    className={`inline-flex items-center gap-2 font-bold ${service.textColor} group/link`}
                                >
                                    Learn more
                                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
