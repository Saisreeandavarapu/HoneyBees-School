import { motion } from 'framer-motion';
import { Camera, Maximize2, ChevronRight } from 'lucide-react';
import img1 from '../assets/image.png';
import img2 from '../assets/image copy.png';
import img3 from '../assets/image copy 2.png';
import img4 from '../assets/image copy 3.png';
import img5 from '../assets/image copy 4.png';
import img6 from '../assets/image copy 5.png';
import img7 from '../assets/image copy 6.png';
import img8 from '../assets/image copy 7.png';

const Gallery = () => {
    const galleryItems = [
        { url: img1, alt: "Children painting and learning", span: "md:col-span-2 md:row-span-2" },
        { url: img2, alt: "Play area and toys", span: "md:col-span-1 md:row-span-1" },
        { url: img3, alt: "Study session in classroom", span: "md:col-span-1 md:row-span-1" },
        { url: img4, alt: "Daycare resting area", span: "md:col-span-2 md:row-span-1" },
        { url: img5, alt: "Reading books together", span: "md:col-span-1 md:row-span-1" },
        { url: img6, alt: "Outdoor play time", span: "md:col-span-1 md:row-span-1" },
        { url: img7, alt: "Creative activities", span: "md:col-span-2 md:row-span-2" },
        { url: img8, alt: "Group learning", span: "md:col-span-2 md:row-span-1" }
    ];

    return (
        <section id="gallery" className="py-24 bg-white relative overflow-hidden">
            <div className="section-padding relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-dark font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Our Environment
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary mb-6"
                    >
                        School <span className="text-primary italic font-heading">Gallery</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-text-light max-w-2xl mx-auto text-lg text-balance"
                    >
                        Take a look at our spacious 2600 sqft facility, play areas, and the happy moments of our little honey bees.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[280px] gap-6 max-w-6xl mx-auto">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`relative overflow-hidden rounded-[2rem] group shadow-sm hover:shadow-2xl transition-all duration-500 h-72 md:h-auto ${item.span}`}
                        >
                            <img
                                src={item.url}
                                alt={item.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-secondary mb-4">
                                        <Camera className="w-5 h-5" />
                                    </div>
                                    <p className="text-white font-bold text-lg leading-snug">
                                        {item.alt}
                                    </p>
                                </div>
                                <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-xl text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Maximize2 className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <a href="#contact" className="btn-premium px-12 gap-3 group">
                        Visit Us in Person
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
