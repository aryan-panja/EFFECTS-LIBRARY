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
                    Here is the Dynamic Text Area example. Have you seen the website where you type and the text area shows you the number of characters, words, special symbols, and occurrences of a specific character or word?
                </p>
                <p className="my-8 roboto-regular">
                    This is the same concept. You can use this component to show the number of characters, words, special symbols, and occurrences of a specific character or word in the text area.
                    You can also use it to verify the number of characters, words, special symbols, and occurrences of a specific character or word in the text area and use to send the data to the server.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <DynamicTextArea />

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet
                    code={
                        `
import { DynamicTextArea } from '@/components/EFFECTS/DynamicTextArea/DynamicTextArea'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/DynamicTextArea/DynamicTextArea.jsx'
                />

                <CodeSnippet
                    code={
                        `
<DynamicTextArea />
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/DynamicTextArea/DynamicTextArea.jsx'
                />

                <DynamicTextArea targetCharacter='c' targetWord='ary' className={'mt-8'} />

                <CodeSnippet
                    code={`
<DynamicTextArea targetCharacter='c' targetWord='ary' />
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/DynamicTextArea/DynamicTextArea.jsx'
                />

            </div>
        </Wrapper>
    )
}
