import { CodeSnippet } from '@/components/CodeSnippet'
import { RollingAnimation } from '@/components/EFFECTS/RollingAnimtaion/RollingAnimation'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const RollingAnimationExample = () => {

    const ITEMS = ['AI AGENTS', 'MULTIMODAL ACCESS', 'ML MODELS'];

    return (
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">View More</h1>
                <p className="my-8 roboto-regular">
                    Here is the Parallax Image example. Switch between different components to see more effects and layouts.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <RollingAnimation items={ITEMS} duration={3000} className={"doto-font"} />

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet code={
                    `
import { RollingAnimation } from '@/components/EFFECTS/RollingAnimtaion/RollingAnimation'
`
                } heading='Import in React' />

                <CodeSnippet code={
                    `
const ITEMS = ['AI AGENTS', 'MULTIMODAL ACCESS', 'ML MODELS'];

<RollingAnimation items={ITEMS} duration={3000} className={"doto-font"} />
`} />


            </div>
        </Wrapper>
    )
}
