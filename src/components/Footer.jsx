const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Haris Rindh. All rights reserved.
                </div>
                <div className="flex space-x-6">
                    <a href="https://github.com/Haris-Rindh" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/harisrindh" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors"><i className="fab fa-linkedin"></i></a>
                    <a href="https://wa.me/923037368528" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-green-500 transition-colors"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.fiverr.com/harisrindh" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-green-500 transition-colors"><i className="fas fa-briefcase"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;