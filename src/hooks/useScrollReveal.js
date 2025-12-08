import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll reveal animations using Intersection Observer
 * Follows Single Responsibility Principle - only handles visibility detection
 */
export function useScrollReveal(options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing (animation plays once)
                    observer.unobserve(element);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [options.threshold, options.rootMargin]);

    return [ref, isVisible];
}

export default useScrollReveal;
