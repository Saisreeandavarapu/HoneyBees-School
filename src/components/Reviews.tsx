

const Reviews = () => {
    const reviews = [
        {
            name: "Tejendra Reddy",
            text: "We are extremely happy with our experience at Honey Bees Pre school ! The teachers are incredibly nurturing and attentive, and they’ve created such a joyful, safe, and stimulating environment for the children.",
            rating: 5,
            source: "Google"
        },
        {
            name: "Vinod Potupureddi",
            text: "Honey Bees is an exceptional place for children to learn and grow. I can not imagine a staff anywhere so caring and loving. Character matters and is integrated into the curriculum and the daily activities.",
            rating: 5,
            source: "Google"
        },
        {
            name: "NANDINI BANSAL",
            text: "It's an amazing school. Teachers are very understanding and co-operative. They have joyful techniques to help kids settle down. Lot of different activities takes place. Perfect environment for kids!!!",
            rating: 5,
            source: "Google"
        },
        {
            name: "Sundar Kumar",
            text: "Amazing pre-school with good infrastructure. The staff are friendly and well trained, the best pre-school in the area. Do please visit and get acquainted and you surely will love to join your kids.",
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
            text: "First I felt that the school was very safe with the friendly staff. I like that it’s an educational based facility with the small ratio of children and wonderful teachers.",
            rating: 5,
            source: "Google"
        }
    ];

    return (
        <section id="reviews" className="py-20 bg-white relative">
            <div className="section-padding">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div className="mb-6 md:mb-0 max-w-2xl">
                        <span className="text-primary-dark font-bold tracking-wider uppercase text-sm mb-2 block">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                            What Parents Say
                        </h2>
                        <div className="flex items-center space-x-2">
                            <span className="text-3xl font-bold text-gray-900">4.98</span>
                            <div className="flex text-amber-400 text-xl">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            <span className="text-gray-500 font-medium ml-2">84 Google reviews</span>
                        </div>
                    </div>

                    <a href="https://www.google.com/search?q=Honey+Bees+Pre-School+,Daycare+and+Tuition+centre" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 whitespace-nowrap">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" /></svg>
                        View all reviews
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white border border-gray-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative">
                            <div className="absolute top-6 right-8 text-6xl text-amber-100 font-serif opacity-50 font-bold leading-none">"</div>

                            <div className="flex text-amber-400 mb-4 z-10 relative">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>

                            <p className="text-gray-700 italic flex-grow mb-6 relative z-10 text-lg">"{review.text}"</p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center font-bold text-xl uppercase">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary text-lg leading-tight">{review.name}</h4>
                                    <span className="text-sm text-gray-500">{review.source} Review</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
                        <span className="font-semibold text-gray-700">Also rated 4.9/5 on Justdial</span>
                        <span className="text-sm text-gray-500">(97 votes)</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
