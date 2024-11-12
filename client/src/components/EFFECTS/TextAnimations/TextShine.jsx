import { cn } from '@/lib/utils'
import React from 'react'

export const TextShine = ({children, className, ...props}) => {
    return (
        <p className={cn(`font-bold py-3 text-center text-4xl bg-gradient-to-r from-black via-white to-black bg-clip-text text-transparent bg-[length:80%] animate-shine tracking-widest`, className)} {...props}>
            {children}
        </p>
    )
}
