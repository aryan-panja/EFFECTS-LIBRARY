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
                `
import { TextShine } from '@/components/EFFECTS/TextAnimations/TextShine'
`} heading='Import in React'/>

                <CodeSnippet code={
                    `
<TextShine>
     Welcome to our Open Source ncomponent
</TextShine>
`} />

<CodeSnippet code={
                    `
// Copy these into your tailwind.config.js file
keyframes: {
        'shine': {
            '0%': { 'background-position': '-200% 0' },
            '100%': { 'background-position': '200% 0' },
        },
        
        //Rest of the code

    animation: {
        //Rest of the code

        'shine': 'shine 5s linear infinite',
    }
}
`} heading='Tailwind.config.js'/>

            <TextShine className='mt-12 text-sm font-extrabold' style={{animationDuration: '3s'}}>
                Get Early Access
            </TextShine>

            <CodeSnippet code={
                `
import { TextShine } from '@/components/EFFECTS/TextAnimations/TextShine'`} heading='Import in React'/>

            <CodeSnippet code={
                    `
<TextShine className='mt-12 text-sm font-extrabold' style={{animationDuration: '3s'}}>
    Get Early Access
</TextShine>
`} />

            </div>
        </Wrapper>
    )
}
