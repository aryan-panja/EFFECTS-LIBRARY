import { CodeSnippet } from '@/components/CodeSnippet'
import { TextForm } from '@/components/EFFECTS/TextAnimations/TextForm'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

// Use the svg for the text animation


{/*
While using this componet send

:root{
  --user-stroke-dasharray: 830;
  --user-fill: transparent;
}

*/}


export const TextFormExample = () => {
    return (
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Text Form</h1>
                <p className="mb-8 text-zinc-300">
                    Here is the Parallax Image example. Switch between different components to see more effects and layouts.
                </p>
                <p>We are giving out different options for the user to fill the svg with the color as shown in the example 2</p>

            </div>

            <div className="flex flex-col items-center justify-center">

                <TextForm fill={'#ffff'} />

                <CodeSnippet code={
                    `
// Also to use this animation you have to choose the stroke till the point it fills their border entirely to give better look.

--user-stroke-dasharray: 830;
                    `
                } />

                {/* SyntaxHighlighter for JSX code display */}

                <CodeSnippet code={
                    `
:root{
  --user-stroke-dasharray: 830;
  --user-fill: transparent;
}

.text-form {
  fill: transparent;
  stroke: #ffff;
  stroke-width: 0.1;
  stroke-dasharray: var(--user-stroke-dasharray);
  stroke-dashoffset: 50;
  animation: textFormAnimation 8s ease-in-out infinite forwards;
}

@keyframes textFormAnimation {
  0% {
    stroke-dashoffset: 830;
  }
  30% {
    fill: transparent;
  }
  50% {
    fill: var(--user-fill);
    stroke-dashoffset: 0;
  }
  80% {
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 830;
  }
}
`
                }
                    heading='Copy Paste in the Main.css or Index.css File' />

                <CodeSnippet code={
                    `
import { TextForm } from '@/components/EFFECTS/TextAnimations/TextForm'
`
                }
                    heading='Import in React' />

                <CodeSnippet code={
                    `
<TextForm fill={'#ffff'}/>
`
                } />

                <TextForm />

                <CodeSnippet code={
                    `
<TextForm />
`
                } />

            </div>
        </Wrapper>
    )
}
