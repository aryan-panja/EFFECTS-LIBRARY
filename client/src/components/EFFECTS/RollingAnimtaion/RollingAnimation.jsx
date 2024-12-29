import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const useRollingAnimation = (items, duration) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, duration); // Change item every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return index;
};

export const RollingAnimation = ({ items = [
    "AI AGENTS",
    "MULTIMODAL ACCESS",
    "ML MODELS"
], duration = 1000, className, props }) => {

    const currentIndex = useRollingAnimation(items, duration);

    return (
            <div 
                className={cn("relative h-20 w-full max-w-md overflow-hidden", className)}
                {...props}
            >
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <h1 className="text-4xl font-bold text-white text-center">{items[currentIndex]}</h1>
                    </motion.div>
                </AnimatePresence>
            </div>
    );
}
