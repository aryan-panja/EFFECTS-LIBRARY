import { CodeSnippet } from '@/components/CodeSnippet'
import { ParallaxImage } from '@/components/EFFECTS/Parallax/ParallaxImage'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const ParallaxImageExample = () => {

  return (
    <Wrapper>
      <div className="mx-auto">
        <h1 className="text-xl font-bold mb-4">Parallax Image</h1>
        <p className="my-8 roboto-regular">
          Here is the Parallax Image example. You can add image and use it as a hyperlink or any other purpose.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">

        <ParallaxImage className="rounded-xl" />

        {/* SyntaxHighlighter for JSX code display */}
        <CodeSnippet
          code={
            `
import { ParallaxImage } from '@/components/EFFECTS/Parallax/ParallaxImage'
`
          }
          heading='Import in React'
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Parallax/ParallaxImage.jsx'
        />

        <CodeSnippet
          code={
            `
<ParallaxImage className="rounded-xl" />
`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Parallax/ParallaxImage.jsx'
        />
      </div>
    </Wrapper>
  )
}
