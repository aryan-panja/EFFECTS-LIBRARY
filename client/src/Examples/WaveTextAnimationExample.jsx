import { CodeSnippet } from '@/components/CodeSnippet'
import { WaveTextAnimation } from '@/components/EFFECTS/TextAnimations/WaveTextAnimation'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const WaveTextAnimationExample = () => {
    return (
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Wave Text</h1>
                <p className="mb-8 roboto-regular">
                    Here is the Parallax Image example. Switch between different components to see more effects and layouts.
                </p>
                <p className='roboto-regular'>We are giving out different options for the user to fill the svg with the color as shown in the example 2</p>

            </div>

            <div className="flex flex-col items-center justify-center">

                <WaveTextAnimation>
                    Hello
                </WaveTextAnimation>

                {/* SyntaxHighlighter for JSX code display */}

                <CodeSnippet code={
                    `
// Copy these into your tailwind.config.js file
keyframes: {
        'wave': {
            '0%': {'clip-path': 'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)'},
            '50%': {'clip-path': 'polygon(0% 60%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)'},
            '100%': {'clip-path': 'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)'}
        },
        
        //Rest of the code

    animation: {
        //Rest of the code

		'wave': 'wave 4s ease-in-out infinite'
    }
}
                `
                } heading='Tailwind.config.js' />

                <CodeSnippet code={
                    `
import { WaveTextAnimation } from '@/components/EFFECTS/TextAnimations/WaveTextAnimation'
`
                } heading='Import in React' />

                <CodeSnippet code={
                    `
<WaveTextAnimation>
    Hello
</WaveTextAnimation>
`
                } />

                <WaveTextAnimation className={'font-bold'} color='#ffff'>
                    Hello
                </WaveTextAnimation>

                <CodeSnippet code={
                    `
<WaveTextAnimation className={'font-bold'} color='#ffff'>
    Hello
</WaveTextAnimation>
`
                } />

                <WaveTextAnimation className={'font-bold'} color='#ffff' stroke={'#0000'}>
                    aryan
                </WaveTextAnimation>

                <CodeSnippet code={
                    `
<WaveTextAnimation className={'font-bold'} color='#ffff' stroke={'#0000'}>
    Hello
</WaveTextAnimation>
`
                } />

            </div>
        </Wrapper>
    )
}
