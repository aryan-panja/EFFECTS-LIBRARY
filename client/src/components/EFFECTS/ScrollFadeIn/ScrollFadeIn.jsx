import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

export const ScrollFadeIn = ({ children, duration, className }) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.disconnect(); // Clean up the observer
    }, []);

    return (
        <div
            style={{transitionDuration: duration}}
            className={cn(`transition-opacity ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`, className)}
            ref={domRef}
        >
            {children}
        </div>
    );
};
