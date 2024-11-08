import { CodeSnippet } from '@/components/CodeSnippet'
import { TextShine } from '@/components/EFFECTS/TextAnimations/TextShine'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const TextShineExample = () => {
    return (
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Parallax Image</h1>
                <p className="mb-8 text-zinc-300">
                    Here is the Parallax Image example. Switch between different components to see more effects and layouts.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <TextShine>
                    Welcome to our Open Source Component Library
                </TextShine>

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet code={
                    `import { TextShine } from '@/components/EFFECTS/TextAnimations/TextShine''

<TextShine>
    Welcome to our Open Source Component Library
</TextShine>
`} />

<CodeSnippet code={
                    `// Copy these into your tailwind.config.js file
keyframes: {
        'shine': {
            '0%': { 'background-position-x': '-500%' },
            '100%': { 'background-position-x': '500%' },
        },
        
        //Rest of the code

    animation: {
        //Rest of the code

        'shine': 'shine 20s linear infinite',
    }
}
`} />

            <TextShine className='mt-12 text-sm font-extrabold'>
                Get Early Access
            </TextShine>

            </div>
        </Wrapper>
    )
}
