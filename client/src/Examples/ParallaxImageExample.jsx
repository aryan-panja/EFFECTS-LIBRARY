import { CodeSnippet } from '@/components/CodeSnippet'
import { ParallaxImage } from '@/components/EFFECTS/Parallax/ParallaxImage'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const ParallaxImageExample = () => {

  return (
    <Wrapper>
      <div className="mx-auto">
        <h1 className="text-xl font-bold mb-4">Parallax Image</h1>
        <p className="mb-8 text-zinc-300">
          Here is the Parallax Image example. Switch between different components to see more effects and layouts.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">

        <ParallaxImage className="rounded-xl" />

        {/* SyntaxHighlighter for JSX code display */}
        <CodeSnippet code={
          `
import { ParallaxImage } from '@/components/EFFECTS/Parallax/ParallaxImage'

<ParallaxImage className={'rounded-xl'} />
`} />
      </div>
    </Wrapper>
  )
}
