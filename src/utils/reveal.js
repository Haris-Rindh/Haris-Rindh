export const initReveal = () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Element enters screen: Animate In
                entry.target.classList.add('active');
            } else {
                // Element leaves screen: Animate Out (Reset)
                // This makes it play again when you scroll back!
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    // Find all elements with class 'reveal' and start watching them
    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });
};