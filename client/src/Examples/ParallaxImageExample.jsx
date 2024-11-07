import { CodeSnippet } from '@/components/CodeSnippet'
import { ParallaxImage } from '@/components/EFFECTS/Parallax/ParallaxImage'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const ParallaxImageExample = () => {

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center">

        <ParallaxImage className="rounded-xl" />

        {/* SyntaxHighlighter for JSX code display */}
        <CodeSnippet code={
          `import { ParallaxImage } from '@/components/EFFECTS/Parallax/ParallaxImage'

<ParallaxImage className={'rounded-xl'} />
`} />
      </div>
    </Wrapper>
  )
}
