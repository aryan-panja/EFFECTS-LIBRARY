import React from 'react'
import { CodeSnippet } from '@/components/CodeSnippet'
import { RevealAnimation } from '@/components/EFFECTS/Animations/RevealAnimation/RevealAnimation'
import { Wrapper } from '@/components/Wrapper'
import { Preview } from '@/components/Preview'

export const RevealAnimationExample = () => {
    return (
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Reveal Animation</h1>
                <p className="my-8 roboto-regular">
                    Here is the Revealing Animation example.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <p className="my-8 roboto-regular">
                    Example - Here is 'animate-clip-animation-1' animation example. Apply this animation by copying the code below.
                </p>

                <Preview>
                    <RevealAnimation
                        src={'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'}
                        animation='animate-clip-animation-1'
                    />
                </Preview>

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet
                    code={
                        `
import { RevealAnimation } from '@/components/EFFECTS/Animations/RevealAnimation/RevealAnimation'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Animations/RevealAnimation/RevealAnimation.jsx'
                />

                <CodeSnippet
                    code={
                        `
// Copy these into your tailwind.config.js file
keyframes: {
        'clip-animation-1': {
            '0%': { 'clip-path': 'circle(18.0% at 21% 23%)' },
            '17%': { 'clip-path': 'circle(18.0% at 77% 50%)' },
            '34%': { 'clip-path': 'circle(18.0% at 27% 74%)' },
            '51%': { 'clip-path': 'circle(18.0% at 71% 74%)' },
            '68%': { 'clip-path': 'circle(18.0% at 25% 46%)' },
            '85%': { 'clip-path': 'circle(18.0% at 76% 23%)' },
            '100%': { 'clip-path': 'circle(18.0% at 21% 23%)' }
        },
        'clip-animation-2': {
            '0%': { 'clip-path': 'circle(18.0% at 21% 23%)' },
            '17%': { 'clip-path': 'circle(18.0% at 77% 50%)' },
            '34%': { 'clip-path': 'circle(18.0% at 27% 74%)' },
            '51%': { 'clip-path': 'circle(18.0% at 71% 74%)' },
            '68%': { 'clip-path': 'circle(18.0% at 51% 50%)' },
            '100%': { 'clip-path': 'circle(70.7% at 50% 50%)' }
        },
        
        //Rest of the code
}
animation: {
    //Rest of the code

    'clip-animation-1': 'clip-animation-1 infinite 10s linear',
    'clip-animation-2': 'clip-animation-2 infinite 10s linear'
}
`
                    }
                    heading='Tailwind.config.js'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Animations/RevealAnimation/RevealAnimation.jsx'
                />

                <CodeSnippet
                    code={
                        `
<RevealAnimation
    src={'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'}
    animation='animate-clip-animation-1'
/>
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Animations/RevealAnimation/RevealAnimation.jsx'
                />

                <p className="my-8 roboto-regular">
                    Example - Here is 'animate-clip-animation-2' animation example. Apply this animation by copying the code below.
                </p>

                <Preview>
                    <RevealAnimation
                        src={'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'}
                        animation='animate-clip-animation-2'
                    />
                </Preview>

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet
                    code={
                        `
<RevealAnimation
    src={'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'}
    animation='animate-clip-animation-2'
/>
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Animations/RevealAnimation/RevealAnimation.jsx'
                />

            </div>
        </Wrapper>
    )
}
