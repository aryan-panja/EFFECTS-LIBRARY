import { CodeSnippet } from '@/components/CodeSnippet'
import { ParallaxImageButton } from '@/components/EFFECTS/Parallax/ParallaxImageButton'
import React from 'react'

export const ParallaxImageButtonExample = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <ParallaxImageButton linkOutside={'https://www.google.com'} >hello</ParallaxImageButton>

        <CodeSnippet code={`
<ParallaxImageButton linkOutside={'https://www.google.com'} >hello</ParallaxImageButton>
          `} />
    </div>
  )
}
