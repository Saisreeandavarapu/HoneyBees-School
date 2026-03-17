import { motion } from 'framer-motion';
import { Home, ShieldCheck, Heart, Clock } from 'lucide-react';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    const features = [
        {
            icon: <Home className="w-6 h-6" />,
            title: "Excellent Infrastructure",
            desc: "Spacious 2600 sq.ft facility designed specifically for early childhood learning."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Health & Safety",
            desc: "Strict sanitation, CCTV coverage, and safe environment protocols."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Individual Care",
            desc: "Well-experienced teachers providing personalized attention to every child."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Flexible Timings",
            desc: "Daycare open till 7:30 PM, supporting working parents with reliable care."
        }
    ];

    return (
        <section id="about" className="bg-white overflow-hidden">
            <div className="section-padding">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="aspect-square bg-bg-light rounded-[3rem] overflow-hidden relative shadow-2xl border-[12px] border-white group">
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-300 opacity-40 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-7xl transform group-hover:scale-125 transition-transform duration-500">
                                🏠🎨📚
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ rotate: [12, 8, 12] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-10 -right-10 bg-primary text-secondary font-bold p-8 rounded-full shadow-2xl border-8 border-white flex flex-col items-center justify-center w-40 h-40 z-20"
                            >
                                <span className="text-3xl">100%</span>
                                <span className="text-xs text-center font-bold uppercase tracking-widest leading-none mt-1">Safe &<br />Loved</span>
                            </motion.div>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -z-10 -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[80px]"></div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                            className="space-y-6"
                        >
                            <motion.span variants={fadeIn} className="inline-block text-primary-dark font-bold text-sm uppercase tracking-[0.3em]">
                                About Our School
                            </motion.span>
                            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight">
                                A Warm Home Away <br /> From <span className="text-primary italic font-heading">Home</span>
                            </motion.h2>
                            <motion.p variants={fadeIn} className="text-lg text-text-light leading-relaxed text-balance">
                                At Honey Bees Pre-School, we offer a unique and supportive environment where children feel at home while developing foundational skills. Located in Visakhapatnam, we pride ourselves on exceptional care and an engaging atmosphere.
                            </motion.p>

                            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                                {features.map((f, i) => (
                                    <div key={i} className="flex gap-4 p-2 group">
                                        <div className="w-12 h-12 shrink-0 rounded-2xl bg-bg-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                                            {f.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-secondary mb-1">{f.title}</h3>
                                            <p className="text-sm text-text-light leading-relaxed">{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
