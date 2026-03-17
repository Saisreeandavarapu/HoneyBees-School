import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, ExternalLink } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-amber-50/30 relative overflow-hidden">
            <div className="section-padding relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-dark font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary mb-6"
                    >
                        Visit Our <span className="text-primary italic font-heading">Center</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-text-light max-w-2xl mx-auto text-lg text-balance"
                    >
                        We'd love to hear from you! Visit us, call us, or send a message to learn more about our programs and admissions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="premium-card p-10 md:p-14 bg-primary text-secondary relative overflow-hidden group"
                    >
                        {/* Animated Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply opacity-20 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500 rounded-full mix-blend-multiply opacity-20 transform -translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>

                        <div className="relative z-10 space-y-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start md:gap-6 group/item">
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:text-primary transition-all duration-300">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-lg">Address</h4>
                                        <p className="opacity-90 leading-relaxed font-medium text-sm md:text-lg">
                                            LAWSON'S BAY COLONY, 4-43-16/1,<br />
                                            Pedda Waltair, Visakhapatnam,<br />
                                            Andhra Pradesh 530017
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start md:gap-6 group/item">
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:text-primary transition-all duration-300">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-lg">Phone</h4>
                                        <p className="opacity-90 text-2xl font-bold tracking-tight">086883 30502</p>
                                    </div>
                                </div>

                                <div className="flex items-start md:gap-6 group/item">
                                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:text-primary transition-all duration-300">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-lg">Working Hours</h4>
                                        <p className="opacity-90 font-medium text-sm md:text-xl">Open Daily<br />Closes at 7:30 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <button className="w-full py-5 bg-secondary text-amber-50 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-xl">
                                    <Send className="w-5 h-5" />
                                    Send us a Message
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interactive Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white group"
                    >
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                        {/* Static Map Visual or Placeholder */}
                        <div className="w-full h-full bg-bg-light flex flex-col items-center justify-center p-12 text-center space-y-6">
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                <MapPin className="w-10 h-10" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-secondary">Find Us on Google Maps</h3>
                                <p className="text-text-light text-balance">Get precise directions to our center in Lawson's Bay Colony.</p>
                            </div>
                            <a
                                href="https://maps.google.com/?q=Honey+Bees+Pre-School+Visakhapatnam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Open Maps Reference
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
