import React, { useState, useEffect, useRef } from 'react';

const ScrollDirectionSlider = ({ items, speed = 2 }) => {
    const [scrollDirection, setScrollDirection] = useState('rightToLeft');
    const [position, setPosition] = useState(0); // Track slider's X position
    const prevScrollY = useRef(window.scrollY); // Store previous scroll position
    const sliderRef = useRef(null); // Ref for slider container

    // Handle scroll detection for direction change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY.current) {
                setScrollDirection('rightToLeft');
            } else if (currentScrollY < prevScrollY.current) {
                setScrollDirection('leftToRight');
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Infinite loop logic for smooth and consistent scrolling
    useEffect(() => {
        const sliderWidth = sliderRef.current.scrollWidth / 2; // Half of the content (2 sets of items)

        const updatePosition = () => {
            setPosition((prevPosition) => {
                // Move position based on scroll direction
                if (scrollDirection === 'rightToLeft') {
                    // Move left
                    if (prevPosition <= -sliderWidth) {
                        return 0; // Reset to start when fully scrolled left
                    }
                    return prevPosition - speed;
                } else {
                    // Move right
                    if (prevPosition >= 0) {
                        return -sliderWidth; // Reset to the end when fully scrolled right
                    }
                    return prevPosition + speed;
                }
            });
        };

        // Start the animation loop
        const animationId = requestAnimationFrame(updatePosition);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [scrollDirection, speed]);

    return (
        <div className="overflow-hidden w-full">
            <div
                className="flex space-x-8"
                ref={sliderRef}
                style={{
                    transform: `translateX(${position}px)`,
                    width: 'max-content',
                }}
            >
                {/* Render the items twice for seamless infinite scrolling */}
                {items.concat(items).map((item, index) => (
                    <div
                        key={index}
                        className="text-4xl font-bold text-gray-500 whitespace-nowrap"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollDirectionSlider;
