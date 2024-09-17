import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react'

export const ParallaxImage = ({ speed = 20, img, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const moveX = (e.clientX - centerX) / speed;
      const moveY = (e.clientY - centerY) / speed;

      setPosition({ x: moveX, y: moveY });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden rounded-lg shadow-lg h-[300px] w-[400px]", className)}
      // style={{ width: '400px', height: '300px' }}
    >
      <img
        src={img || "https://images.unsplash.com/photo-1682685796014-2f342188a635?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"}
        alt="Parallax Image"
        className="absolute w-full h-full object-cover transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(1.1)`,
        }}
      />
    </div>
  );
};