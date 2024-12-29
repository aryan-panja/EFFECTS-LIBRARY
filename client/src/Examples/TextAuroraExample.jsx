import { CodeSnippet } from '@/components/CodeSnippet'
import { TextAurora } from '@/components/EFFECTS/TextAnimations/TextAurora'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const TextAuroraExample = () => {
  return (
    <Wrapper>
      <div className="mx-auto">
        <h1 className="text-xl font-bold mb-4">Text Aurora</h1>
        <p className="mb-8 roboto-regular">
          Here is the Parallax Image example. Switch between different components to see more effects and layouts.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">

        <TextAurora>
          Hello
        </TextAurora>

        {/* SyntaxHighlighter for JSX code display */}

        <CodeSnippet code={
          `
import { TextShine } from '@/components/EFFECTS/TextAnimations/TextShine'`} heading='Import in React' />

        <CodeSnippet code={
          `
<TextAurora>
  Hello
</TextAurora>` } />

        <TextAurora className={'text-[clamp(3rem,8vw,5rem)]'}>
          Hello
        </TextAurora>

        <CodeSnippet code={
          `
<TextAurora className={'text-[clamp(3rem,8vw,5rem)]'}>
  Hello
</TextAurora>` } />
        
      </div>
    </Wrapper>
  )
}
