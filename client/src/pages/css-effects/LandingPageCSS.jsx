import React from 'react'
import { PinterestEffect } from './PinterestEffect'
import { Comments } from './Comments'

export const LandingPageCSS = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-48'>
            <PinterestEffect />

            <Comments />
        </div>
    )
}
