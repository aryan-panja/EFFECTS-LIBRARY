import { ParallaxImageButton } from '@/components/EFFECTS/Parallax/ParallaxImageButton'
import React from 'react'

export const ParallaxImageButtonExample = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <ParallaxImageButton link={'www.google.com'} >hello</ParallaxImageButton>
    </div>
  )
}
