import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export const ParallaxImageButton = ({ speed = 20, className, linkInside, linkOutside, img, children, ...props }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const animationFrame = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const moveX = (e.clientX - centerX) / speed;
            const moveY = (e.clientY - centerY) / speed;

            cancelAnimationFrame(animationFrame.current); // Cancel any previous animation frame
            animationFrame.current = requestAnimationFrame(() => {
                setPosition({ x: moveX, y: moveY });
            });
        };

        container.addEventListener('mousemove', handleMouseMove);
        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame.current); // Cleanup any remaining animation frame
        };
    }, [speed]);

    if (linkInside) {
        return (
            <Link to={linkInside}>
                <div
                    ref={containerRef}
                    className={cn(`relative overflow-hidden rounded-lg shadow-lg h-20 w-36`, className)}
                    {...props}
                >
                    <img
                        src={img || "https://images.unsplash.com/photo-1682685796014-2f342188a635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"}
                        alt="Parallax Image"
                        className="absolute w-full h-full object-cover transition-transform duration-200 ease-out"
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px) scale(1.1)`,
                        }}
                    />
                    <p className='absolute inset-0 flex items-center justify-center text-white text-xl font-semibold'>
                        {children}
                    </p>
                </div>
            </Link>
        );
    }
    else {
        return (
            <a href={linkOutside}>
                <div
                    ref={containerRef}
                    className={cn(`relative overflow-hidden rounded-lg shadow-lg h-20 w-36`, className)}
                >
                    <img
                        src={img || "https://images.unsplash.com/photo-1682685796014-2f342188a635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"}
                        alt="Parallax Image"
                        className="absolute w-full h-full object-cover transition-transform duration-200 ease-out"
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px) scale(1.1)`,
                        }}
                    />
                    <p className='absolute inset-0 flex items-center justify-center text-white text-xl font-semibold'>
                        {children}
                    </p>
                </div>
            </a>
        )
    }
};