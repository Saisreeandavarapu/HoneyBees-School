import { motion } from 'framer-motion';
import { Star, Shield, Users, ArrowRight } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "circOut" as any }
        }
    };

    const floatingItems = [
        { icon: <Users className="w-6 h-6" />, label: "2600 sqft Space", delay: 0 },
        { icon: <Star className="w-6 h-6" />, label: "4.9/5 Rating", delay: 0.1 },
        { icon: <Shield className="w-6 h-6" />, label: "Safe & Secure", delay: 0.2 },
        { icon: <Users className="w-6 h-6" />, label: "Expert Teachers", delay: 0.3 },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50 via-white to-transparent">
            {/* Animated Background Orbs */}
            <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square bg-primary/20 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute bottom-[5%] left-[-5%] w-[30%] aspect-square bg-amber-200/30 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>

            <div className="section-padding py-32 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center text-center space-y-8"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/15 text-primary-dark font-bold text-xs uppercase tracking-widest border border-primary/20 shadow-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Top Rated Pre-School in Visakhapatnam
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-secondary leading-[1.1] text-balance max-w-5xl"
                    >
                        Where Little <span className="text-primary italic font-heading">Honey Bees</span> <br />
                        Grow & Thrive
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-text-light max-w-2xl text-balance leading-relaxed"
                    >
                        Providing a home-like environment with excellent infrastructure for Play School, Daycare, and Tuition Centre. Serving Lawson's Bay Colony with love since inception.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <a href="#contact" className="btn-premium px-10 gap-2 group">
                            Enroll Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#services" className="inline-flex items-center justify-center px-10 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-secondary shadow-sm hover:shadow-md hover:bg-gray-50 transition-all">
                            Explore Services
                        </a>
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 w-full max-w-4xl"
                    >
                        {floatingItems.map((item, idx) => (
                            <div key={idx} className="premium-card p-6 flex flex-col items-center gap-3 text-center group cursor-default">
                                <div className="p-3 bg-bg-light rounded-xl text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <span className="font-bold text-sm text-secondary">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-secondary/20 rounded-full flex justify-center p-1">
                    <motion.div 
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
