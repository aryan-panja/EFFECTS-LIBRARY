import { cn } from '@/lib/utils'
import React from 'react'

export const TextShine = ({children, className, ...props}) => {
    return (
        <p className={cn(`font-bold py-3 text-center text-4xl font-hack bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent bg-[length:80%] animate-shine tracking-widest duration-[100s]`, className)} {...props}>
            {children}
        </p>
    )
}
