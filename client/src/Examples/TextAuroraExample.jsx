import React from 'react'
import { CodeSnippet } from '@/components/CodeSnippet'
import { TextAurora } from '@/components/EFFECTS/TextAnimations/TextAurora'
import { Wrapper } from '@/components/Wrapper'
import { Preview } from '@/components/Preview'

export const TextAuroraExample = () => {
  return (
    <Wrapper>
      <div className="mx-auto">
        <h1 className="text-xl font-bold mb-4">Text Aurora</h1>
        <p className="mb-8 roboto-regular">
          Here is the Text Aurora example.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">

        <Preview>
          <TextAurora>
            Hello
          </TextAurora>
        </Preview>

        {/* SyntaxHighlighter for JSX code display */}

        <CodeSnippet
          code={
            `
import { TextShine } from '@/components/EFFECTS/TextAnimations/TextShine'`
          }
          heading='Import in React'
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextAurora.jsx'
        />

        <CodeSnippet
          code={
            `
<TextAurora>
  Hello
</TextAurora>`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextAurora.jsx'
        />

        <Preview>
          <TextAurora className={'text-[clamp(3rem,8vw,5rem)]'}>
            Hello
          </TextAurora>
        </Preview>

        <CodeSnippet
          code={
            `
<TextAurora className={'text-[clamp(3rem,8vw,5rem)]'}>
  Hello
</TextAurora>`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextAurora.jsx'
        />

      </div>
    </Wrapper>
  )
}
