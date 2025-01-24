import React from 'react'
import pattern from '@/assets/pattern.svg'
import { cn } from '@/lib/utils'

export const Preview = ({ children, className }) => {
    return (
        <div
            className={cn('w-full min-h-[90vh] mt-8 border-[1px] border-[#7b7b7ba5] rounded-lg overflow-hidden relative flex justify-center items-center bg-repeat bg-auto bg-center bg-clip-content', className)}
            style={{
                backgroundImage: `url(${pattern})`,
            }}>
            {children}
        </div>
    )
}
