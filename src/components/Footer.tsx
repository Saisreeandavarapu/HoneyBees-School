

const Footer = () => {
    return (
        <footer className="bg-secondary text-amber-50 py-12 border-t-4 border-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-xl">
                                HB
                            </div>
                            <span className="text-2xl font-bold font-heading text-primary">Honey Bees</span>
                        </div>
                        <p className="text-amber-100/70 mb-6 leading-relaxed">
                            A nurturing environment where children can thrive, learn, and grow. Providing the best Play School, Daycare, and Tuition services in Visakhapatnam.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-secondary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3 text-amber-100/70">
                            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#reviews" className="hover:text-primary transition-colors">Reviews</a></li>
                            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Working Details</h4>
                        <ul className="space-y-3 text-amber-100/70">
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                Safe & Secure Environment
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                Daily Sanitation
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                Experienced Teachers
                            </li>
                            <li className="flex items-start">
                                <span className="text-primary mr-2">✓</span>
                                Open till 7:30 PM
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-amber-900/50 flex flex-col md:flex-row justify-between items-center text-sm text-amber-100/50">
                    <p>&copy; {new Date().getFullYear()} Honey Bees Pre-School, Daycare and Tuition centre. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
