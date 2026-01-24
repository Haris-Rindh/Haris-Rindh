import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { initReveal } from './utils/reveal';

function App() {
  // 1. Create state to track loading
  const [isLoading, setIsLoading] = useState(true);

  // 2. Use useEffect to simulate loading time
  useEffect(() => {
    // Reveal animation observer logic
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Wait for loader to finish before observing elements
    if (!isLoading) {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }

    // 3. Set a timer to turn off the loader (2.5 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [isLoading]); // Re-run when isLoading changes

  return (
    <div className="font-sans text-slate-300 bg-slate-900 antialiased overflow-x-hidden selection:bg-primary selection:text-white">
      
      {/* 4. Add the Preloader Component */}
      <Preloader isLoading={isLoading} />

      {/* Main Content */}
      <div className={`transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;