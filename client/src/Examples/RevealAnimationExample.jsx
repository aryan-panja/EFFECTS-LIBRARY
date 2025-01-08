import { CodeSnippet } from '@/components/CodeSnippet'
import { RevealAnimation } from '@/components/EFFECTS/Animations/RevealAnimation/RevealAnimation'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

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

                <RevealAnimation
                    src={'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'}
                    animation='animate-clip-animation-1'
                />

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet
                    code={
                        `
import { RevealAnimation } from '@/components/EFFECTS/Animations/RevealAnimation/RevealAnimation'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/RollingAnimtaion/RollingAnimation.jsx'
                />

                <CodeSnippet
                    code={
                        `
    const ITEMS = ['AI AGENTS', 'MULTIMODAL ACCESS', 'ML MODELS'];
    
    <RollingAnimation items={ITEMS} duration={3000} className={"doto-font"} />
    `
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/RollingAnimtaion/RollingAnimation.jsx'
                />

                <p className="my-8 roboto-regular">
                    Example - Here is 'animate-clip-animation-2' animation example. Apply this animation by copying the code below.
                </p>

                <RevealAnimation
                    src={'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'}
                    animation='animate-clip-animation-2'
                />

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet
                    code={
                        `
    import { RollingAnimation } from '@/components/EFFECTS/Animations/RollingAnimtaion/RollingAnimation';
    `
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/RollingAnimtaion/RollingAnimation.jsx'
                />

                <CodeSnippet
                    code={
                        `
    const ITEMS = ['AI AGENTS', 'MULTIMODAL ACCESS', 'ML MODELS'];
    
    <RollingAnimation items={ITEMS} duration={3000} className={"doto-font"} />
    `
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/RollingAnimtaion/RollingAnimation.jsx'
                />

            </div>
        </Wrapper>
    )
}
