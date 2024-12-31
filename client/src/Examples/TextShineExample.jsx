import { CodeSnippet } from '@/components/CodeSnippet'
import { TextShine } from '@/components/EFFECTS/TextAnimations/TextShine'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const TextShineExample = () => {
    return (
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Text Shine</h1>
                <p className="mb-8 roboto-regular">
                    Here is the Text Shine example. You can see this animation working with our logo above.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <TextShine>
                    Welcome to our Open Source Component Library
                </TextShine>

                {/* SyntaxHighlighter for JSX code display */}

                <CodeSnippet
                    code={
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
                `
                    }
                    heading='Tailwind.config.js'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextShine.jsx'
                />

                <CodeSnippet
                    code={
                        `
import { TextShine } from '@/components/EFFECTS/TextAnimations/TextShine'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextShine.jsx'
                />

                <CodeSnippet
                    code={
                        `
<TextShine>
     Welcome to our Open Source ncomponent
</TextShine>
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextShine.jsx'
                />

                <TextShine className='mt-12 text-sm font-extrabold' style={{ animationDuration: '3s' }}>
                    Get Early Access
                </TextShine>

                <CodeSnippet
                    code={
                        `
import { TextShine } from '@/components/EFFECTS/TextAnimations/TextShine'`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextShine.jsx'
                />

                <CodeSnippet
                    code={
                        `
<TextShine className='mt-12 text-sm font-extrabold' style={{animationDuration: '3s'}}>
    Get Early Access
</TextShine>
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextShine.jsx'
                />

            </div>
        </Wrapper>
    )
}
