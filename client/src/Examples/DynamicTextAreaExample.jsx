import { CodeSnippet } from '@/components/CodeSnippet'
import { DynamicTextArea } from '@/components/EFFECTS/DynamicTextArea/DynamicTextArea'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const DynamicTextAreaExample = () => {
    return (

        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Dynamic Text Area</h1>
                <p className="my-8 roboto-regular">
                    Here is the Parallax Image example. Switch between different components to see more effects and layouts.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <DynamicTextArea />

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet code={
                    `
import { DynamicTextArea } from '@/components/EFFECTS/DynamicTextArea/DynamicTextArea'

`
                } heading='Import in React' />

                <CodeSnippet code={`
<DynamicTextArea />
`
                } />

                <DynamicTextArea targetCharacter='c' targetWord='ary' className={'mt-8'}/>

                <CodeSnippet code={`
<DynamicTextArea targetCharacter='c' targetWord='ary' />
`
                } />

            </div>
        </Wrapper>
    )
}
