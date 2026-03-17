import { Facebook, Instagram, Twitter, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-amber-50 pt-24 pb-12 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -mb-48 -mr-48"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 lg:col-span-1 space-y-8">
                        <div className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-secondary font-bold text-2xl shadow-premium group-hover:rotate-12 transition-transform duration-500">
                                HB
                            </div>
                            <span className="text-3xl font-bold font-heading text-primary tracking-tight">Honey Bees</span>
                        </div>
                        <p className="text-amber-100/60 leading-relaxed text-balance text-lg">
                            We provide a nurturing environment where children thrive, learn, and grow through play-based excellence in Visakhapatnam.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                                { icon: <Twitter className="w-5 h-5" />, href: "#" }
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href} 
                                    className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8 text-white tracking-wide">Quick Links</h4>
                        <ul className="space-y-4 text-amber-100/60 font-medium">
                            {['Home', 'About Us', 'Services', 'Gallery', 'Reviews', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8 text-white tracking-wide">Expertise</h4>
                        <ul className="space-y-4 text-amber-100/60 font-medium">
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <Heart className="w-4 h-4" />
                                </div>
                                Personalized Care
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                Safe Environment
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="w-4 h-4" />
                                </div>
                                Active Learning
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-8 text-white tracking-wide">Newsletter</h4>
                        <p className="text-amber-100/60 mb-6 font-medium">Subscribe for school updates and events.</p>
                        <div className="relative group">
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-primary text-secondary px-6 rounded-xl font-bold text-sm hover:bg-opacity-90 transition-all">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-amber-100/40">
                    <p className="font-medium">
                        &copy; {new Date().getFullYear()} Honey Bees Pre-School. Designed for Excellence.
                    </p>
                    <div className="flex items-center gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
