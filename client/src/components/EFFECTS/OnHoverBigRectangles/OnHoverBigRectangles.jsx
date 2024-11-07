import React from 'react';
import { cn } from '@/lib/utils';
import test1 from "@/assets/photos/1.jpg";

const ExpandableInfoCard = React.forwardRef(({ children, className, src=test1, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(`group mt-10 border-2 h-[400px] w-[150px] bg-cover bg-center duration-700 ease-in-out 
    sm:w-[200px] sm:hover:w-[300px]  /* Tablet and up */
    md:w-[150px] md:hover:w-[400px] /* Desktop */
    hover:w-[350px] hover:scale-105 rounded-xl relative shadow-lg transition-all`, className)}
        style={{ backgroundImage: `url(${src})` }}
        {...props}
    >
        {children}
    </div>
))
ExpandableInfoCard.displayName = 'ExpandableInfoCard'

const ExpandableInfoCardTextBefore = React.forwardRef(({ children, className, ...props }, ref) => (
    <h1 
        ref={ref}
        className={cn(`absolute left-7 bottom-4 text-white font-bold origin-bottom-left -rotate-90 transition-opacity duration-500 group-hover:opacity-0`, className)}
        {...props}
    >
        {children}
    </h1>
))
ExpandableInfoCardTextBefore.displayName = 'CardInfoBefore'

const ExpandableInfoCardTextAfter = React.forwardRef(({ children, className, ...props }, ref) => (
    <h1 
        ref={ref}
        className={cn(`absolute left-7 bottom-4 text-white font-bold opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:delay-200`, className)}
        {...props}
    >
        {children}
    </h1>
))

export { ExpandableInfoCard, ExpandableInfoCardTextBefore, ExpandableInfoCardTextAfter }