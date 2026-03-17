import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled ? 'py-4 glass-nav' : 'py-6 bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-secondary font-bold text-xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                            HB
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-secondary font-heading leading-none">Honey Bees</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-text-light font-bold">Pre-School</span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-sm font-semibold text-text-light hover:text-primary-dark transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="tel:08688330502" className="hidden lg:flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-2xl font-bold hover:bg-secondary-light transition-all shadow-lg hover:shadow-xl active:scale-95">
                            <Phone className="w-4 h-4" />
                            <span>086883 30502</span>
                        </a>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-3 bg-white/50 backdrop-blur-md rounded-xl md:hidden text-secondary hover:bg-primary transition-colors duration-300"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="fixed inset-x-4 top-24 bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 md:hidden z-40"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center justify-between py-4 px-6 bg-bg-light rounded-2xl text-lg font-bold text-secondary hover:bg-primary hover:text-white transition-all group"
                                >
                                    {link.name}
                                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                            <a href="tel:08688330502" className="mt-4 flex items-center justify-center gap-2 bg-primary text-secondary py-5 rounded-2xl font-bold text-lg shadow-lg">
                                <Phone className="w-5 h-5" />
                                Contact Us
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
