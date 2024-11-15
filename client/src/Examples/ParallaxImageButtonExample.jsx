import { CodeSnippet } from '@/components/CodeSnippet'
import { ParallaxImageButton } from '@/components/EFFECTS/Parallax/ParallaxImageButton'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const ParallaxImageButtonExample = () => {
  return (

    <Wrapper>
      <div className="mx-auto">
        <h1 className="text-xl font-bold mb-4">Parallax Button</h1>
        <p className="my-8 text-zinc-300">
          Here is the Parallax Image example. Switch between different components to see more effects and layouts.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">

        <ParallaxImageButton linkOutside={'https://www.google.com'} >hello</ParallaxImageButton>

        {/* SyntaxHighlighter for JSX code display */}
        <CodeSnippet code={
          `
import { ParallaxImageButton } from '@/components/EFFECTS/Parallax/ParallaxImageButton'
`
        } heading='Import in React' />

        <CodeSnippet code={`
<ParallaxImageButton linkOutside={'https://www.google.com'} >hello</ParallaxImageButton>
`
        } />

      </div>
    </Wrapper>
  )
}
