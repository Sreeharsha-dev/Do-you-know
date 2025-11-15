import React, { useState, useEffect, RefObject } from 'react';

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * A custom React hook that uses the IntersectionObserver API to detect when an element enters the viewport.
 * @param ref - The React ref attached to the element to observe.
 * @param options - Configuration options for the IntersectionObserver.
 * @returns A boolean indicating whether the element is currently intersecting with the viewport.
 */
export function useIntersectionObserver(
  ref: RefObject<HTMLElement>,
  options: ObserverOptions = { threshold: 0.1 }
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // Ensure IntersectionObserver is available
    if (typeof window.IntersectionObserver === 'undefined') {
        // Fallback for older browsers: just show the content
        setIsIntersecting(true);
        return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      // Update state when intersection status changes
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Stop observing the element once it has become visible
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup function to unobserve the element
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
}
