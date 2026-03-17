import img1 from '../assets/image.png';
import img2 from '../assets/image copy.png';
import img3 from '../assets/image copy 2.png';
import img4 from '../assets/image copy 3.png';
import img5 from '../assets/image copy 4.png';
import img6 from '../assets/image copy 5.png';
import img7 from '../assets/image copy 6.png';
import img8 from '../assets/image copy 7.png';

const Gallery = () => {
    // Local images for the gallery representing school activities
    const galleryItems = [
        {
            url: img1,
            alt: "Children painting and learning",
            span: "md:col-span-2 md:row-span-2"
        },
        {
            url: img2,
            alt: "Play area and toys",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            url: img3,
            alt: "Study session in classroom",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            url: img4,
            alt: "Daycare resting area",
            span: "md:col-span-2 md:row-span-1"
        },
        {
            url: img5,
            alt: "Reading books together",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            url: img6,
            alt: "Outdoor play time",
            span: "md:col-span-1 md:row-span-1"
        },
        {
            url: img7,
            alt: "Creative activities",
            span: "md:col-span-2 md:row-span-2"
        },
        {
            url: img8,
            alt: "Group learning",
            span: "md:col-span-2 md:row-span-1"
        }
    ];

    return (
        <section id="gallery" className="py-20 bg-amber-50 relative overflow-hidden">
            {/* Honeycomb decorative background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='69.28203230275509' viewBox='0 0 40 69.28203230275509' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 17.3205081L20 28.8675135 0 17.3205081V-5.7735027h40v23.0940108zM20 63.5085462L0 51.9615408V28.8675135l20-11.5470054 20 11.5470054v23.0940108L20 63.5085462zM0 86.6025404V63.5085462l20-11.5470054 20 11.5470054v23.0940108L20 98.1495458 0 86.6025404z' fill='%23B45309' fillRule='evenodd'/%3E%3C/svg%3E")`
                }}>
            </div>

            <div className="section-padding relative z-10 w-full">
                <div className="text-center mb-12">
                    <span className="text-primary-dark font-bold tracking-wider uppercase text-sm mb-2 block">Our Environment</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                        School Gallery
                    </h2>
                    <p className="text-text-light max-w-2xl mx-auto text-lg">
                        Take a look at our spacious 2600 sqft facility, play areas, and the happy moments of our little honey bees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[250px] gap-4 max-w-6xl mx-auto">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 h-64 md:h-auto ${item.span}`}
                        >
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img
                                src={item.url}
                                alt={item.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                                <p className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                        Visit Us in Person
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
