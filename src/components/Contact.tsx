

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-amber-50">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <span className="text-primary-dark font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
                        Visit Our Center
                    </h2>
                    <p className="text-text-light max-w-2xl mx-auto text-lg">
                        We'd love to hear from you! Visit us, call us, or send a message to learn more about our programs and admissions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                    {/* Contact Information */}
                    <div className="p-8 md:p-12 bg-primary text-secondary relative overflow-hidden flex flex-col justify-center">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500 rounded-full mix-blend-multiply opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Address</h4>
                                        <p className="opacity-90 leading-relaxed">LAWSON'S BAY COLONY, 4-43-16/1,<br />Lawsons Bay Colony, Pedda Waltair,<br />Visakhapatnam, Andhra Pradesh 530017</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Phone</h4>
                                        <p className="opacity-90 text-xl font-medium">086883 30502</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                                        <p className="opacity-90">Open Daily<br />Closes at 7:30 pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Image/Placeholder */}
                    <div className="p-8 md:p-12 relative min-h-[400px]">
                        <h3 className="text-2xl font-bold mb-6 text-secondary">Find Us on Map</h3>
                        <div className="absolute inset-0 m-8 mt-20 bg-gray-200 rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
                            <div className="text-center p-6">
                                <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                                <p className="text-gray-500 font-medium">Interactive Map Integration</p>
                                <a href="https://maps.google.com/?q=LAWSON'S+BAY+COLONY,+4-43-16/1,+Lawsons+Bay+Colony,+Pedda+Waltair,+Visakhapatnam,+Andhra+Pradesh+530017" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-primary-dark font-bold hover:underline">
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
