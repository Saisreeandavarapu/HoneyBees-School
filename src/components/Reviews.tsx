import { motion } from 'framer-motion';
import { Quote, Star, Search } from 'lucide-react';

const Reviews = () => {
    const reviews = [
        {
            name: "Tejendra Reddy",
            text: "We are extremely happy with our experience at Honey Bees Pre school ! The teachers are incredibly nurturing and attentive.",
            rating: 5,
            source: "Google"
        },
        {
            name: "Vinod Potupureddi",
            text: "Honey Bees is an exceptional place for children to learn and grow. I can not imagine a staff anywhere so caring and loving.",
            rating: 5,
            source: "Google"
        },
        {
            name: "NANDINI BANSAL",
            text: "It's an amazing school. Teachers are very understanding and co-operative. They have joyful techniques to help kids settle down.",
            rating: 5,
            source: "Google"
        },
        {
            name: "Sundar Kumar",
            text: "Amazing pre-school with good infrastructure. The staff are friendly and well trained, the best pre-school in the area.",
            rating: 5,
            source: "Google"
        },
        {
            name: "Vanjarapu Yogeeswari",
            text: "Best place and atmosphere",
            rating: 5,
            source: "Google"
        },
        {
            name: "Manoj Kumar Behara",
            text: "First I felt that the school was very safe with the friendly staff. I like that it’s an educational based facility.",
            rating: 5,
            source: "Google"
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            <div className="section-padding">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="max-w-2xl space-y-4">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-primary-dark font-bold tracking-[0.3em] uppercase text-xs block"
                        >
                            Testimonials
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary"
                        >
                            What Parents <span className="text-primary italic font-heading">Say</span>
                        </motion.h2>
                        <div className="flex items-center gap-4">
                            <div className="flex bg-amber-50 px-4 py-2 rounded-xl border border-amber-100 items-center gap-2">
                                <span className="text-2xl font-bold text-secondary">4.9</span>
                                <div className="flex text-primary">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                            </div>
                            <span className="text-sm text-text-light font-medium">Based on 80+ Google Reviews</span>
                        </div>
                    </div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.google.com/search?q=Honey+Bees+Pre-School+,Daycare+and+Tuition+centre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium py-4 gap-2"
                    >
                        <Search className="w-5 h-5" />
                        Verify on Google
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="premium-card p-10 flex flex-col h-full relative group"
                        >
                            <div className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                                <Quote className="w-12 h-12 fill-current" />
                            </div>

                            <div className="flex text-primary mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-secondary font-medium italic flex-grow mb-8 text-lg leading-relaxed text-balance">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-50 pt-8">
                                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center font-bold text-secondary text-xl shadow-inner">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-secondary leading-none mb-1">{review.name}</h4>
                                    <span className="text-xs text-text-light font-bold uppercase tracking-widest">{review.source} Review</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
