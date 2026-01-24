const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-black text-white relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="reveal reveal-up text-3xl md:text-5xl font-bold mb-6 font-display">Let's build something amazing.</h2>
                <p className="reveal reveal-up delay-100 text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                    I am currently open to opportunities at innovative tech companies. Based in Pakistan, available for global remote work.
                </p>

                <div className="reveal reveal-up delay-200 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl max-w-lg mx-auto mb-12">
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:haris.rindh.pk@gmail.com'; }}>
                        <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white/10 transition-all" />
                        <input type="email" placeholder="Your Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white/10 transition-all" />
                        <textarea placeholder="Message" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white/10 transition-all"></textarea>
                        <button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-500/25 transform hover:scale-105 active:scale-95">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="reveal reveal-up delay-300 grid md:grid-cols-3 gap-8 text-sm text-slate-400">
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <i className="fas fa-envelope text-2xl text-primary mb-2"></i>
                        <span>haris.rindh.pk@gmail.com</span>
                    </div>
                    <a href="https://wa.me/923037368528" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                        <i className="fab fa-whatsapp text-2xl text-green-500 mb-2 group-hover:scale-110 transition-transform"></i>
                        <span>+92 303 7368528</span>
                    </a>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <i className="fas fa-map-marker-alt text-2xl text-primary mb-2"></i>
                        <span>Multan, Pakistan</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;