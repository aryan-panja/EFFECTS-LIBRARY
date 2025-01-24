import React from 'react'
import { CodeSnippet } from '@/components/CodeSnippet'
import { ParallaxImageButton } from '@/components/EFFECTS/Parallax/ParallaxImageButton'
import { Preview } from '@/components/Preview'
import { Wrapper } from '@/components/Wrapper'

export const ParallaxImageButtonExample = () => {
  return (

    <Wrapper>
      <div className="mx-auto">
        <h1 className="text-xl font-bold mb-4">Parallax Button</h1>
        <p className="my-8 roboto-regular">
          Here is the Parallax Image Button example. You can add this button with you chaoice of image to make your website more interactive.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">

        <Preview>
          <ParallaxImageButton linkOutside={'https://www.google.com'} >hello</ParallaxImageButton>
        </Preview>

        {/* SyntaxHighlighter for JSX code display */}
        <CodeSnippet
          code={
            `
import { ParallaxImageButton } from '@/components/EFFECTS/Parallax/ParallaxImageButton'
`
          }
          heading='Import in React'
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Parallax/ParallaxImageButton.jsx'
        />

        <CodeSnippet
          code={`
<ParallaxImageButton linkOutside={'https://www.google.com'} >hello</ParallaxImageButton>
`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Parallax/ParallaxImageButton.jsx'
        />

      </div>
    </Wrapper>
  )
}
