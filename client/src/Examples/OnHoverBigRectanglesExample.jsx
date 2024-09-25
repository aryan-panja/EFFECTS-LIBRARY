import { OnHoverBigRectangles } from '@/components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles'
import React from 'react'
import test1 from "@/assets/photos/1.jpg"

export const OnHoverBigRectanglesExample = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <OnHoverBigRectangles src={test1} />
        </div>
    )
}
