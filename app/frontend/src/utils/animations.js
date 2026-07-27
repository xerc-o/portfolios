// Scroll Animation Utilities

/**
 * Initialize scroll-triggered fade-in animations
 * Call this from useEffect in App.js or individual components
 */
export const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with fade-in-scroll and pop-up-scroll classes
    document.querySelectorAll('.fade-in-scroll, .pop-up-scroll').forEach(el => {
        observer.observe(el);
    });

    return () => {
        observer.disconnect();
    };
};


/**
 * Smooth scroll to element
 * @param {string} targetId - ID of the target element (without #)
 */
export const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};
