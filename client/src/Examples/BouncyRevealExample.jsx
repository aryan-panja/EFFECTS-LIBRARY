import React from 'react'
import { CodeSnippet } from '@/components/CodeSnippet'
import { BouncyReveal } from '@/components/EFFECTS/TextAnimations/BouncyReveal'
import { Wrapper } from '@/components/Wrapper'
import { Preview } from '@/components/Preview'

export const BouncyRevealExample = () => {
    return (
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Wave Text</h1>
                <p className="mb-8 roboto-regular">
                    Here is the Bouncy Reveal example.
                </p>
                <p className='roboto-regular'>We are giving out different options for the user to fill the svg with the color as shown in the example 2</p>

            </div>

            <div className="flex flex-col items-center justify-center">

                <Preview className={'min-h-[80vh]'}>
                    <BouncyReveal>
                        Hello
                    </BouncyReveal>
                </Preview>

                {/* SyntaxHighlighter for JSX code display */}

                <CodeSnippet
                    code={
                        `
// Copy these into your tailwind.config.js file
keyframes: {
        'bouncy-reveal': {
            '0%': {'clip-path': 'circle(0.0% at 50% 50%)'},
            '20%': {'clip-path': 'circle(15.0% at 50% 50%)'},
            '40%': {'clip-path': 'circle(10.0% at 50% 50%)'},
            '60%': {'clip-path': 'circle(40.0% at 50% 50%)'},
            '80%': {'clip-path': 'circle(20.0% at 50% 50%)'},
            '100%': {'clip-path': 'circle(100.0% at 50% 50%)'}
        },
        
        //Rest of the code

    animation: {
        //Rest of the code

		'bouncy-reveal': 'bouncy-reveal 4s ease-in-out infinite'
    }
}
`
                    }
                    heading='Tailwind.config.js'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/BouncyReveal.jsx'
                />

                <CodeSnippet
                    code={
                        `
import { BouncyReveal } from '@/components/EFFECTS/TextAnimations/BouncyReveal'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/BouncyReveal.jsx'
                />

                <CodeSnippet
                    code={
                        `
<BouncyReveal>
    Hello
</BouncyReveal>
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/BouncyReveal.jsx'
                />

                <Preview className={'min-h-[80vh]'}>
                    <BouncyReveal className={'font-bold'} color='#ffff'>
                        Hello
                    </BouncyReveal>
                </Preview>

                <CodeSnippet
                    code={
                        `
<BouncyReveal className={'font-bold'} color='#ffff'>
    Hello
</BouncyReveal>
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/BouncyReveal.jsx'
                />

                <Preview className={'min-h-[80vh]'}>
                    <BouncyReveal className={'font-bold'} color='#ffff' stroke={'#0000'}>
                        aryan
                    </BouncyReveal>
                </Preview>

                <CodeSnippet
                    code={
                        `
<BouncyReveal className={'font-bold'} color='#ffff' stroke={'#0000'}>
    Hello
</BouncyReveal>
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/BouncyReveal.jsx'
                />

            </div>
        </Wrapper>
    )
}
