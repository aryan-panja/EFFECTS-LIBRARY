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
        <p className="mb-8 roboto-regular">
          Here is the Text Form example. This is a text animation where the text fills with the color. The user can choose the color and the duration of the animation.
        </p>
        <p className='roboto-regular'>We are giving out different options for the user to fill the svg with the color as shown in the example 2</p>

      </div>

      <div className="flex flex-col items-center justify-center">

        <TextForm fill={'#ffff'} duration={'5s'} />

        <CodeSnippet
          code={
            `
// Also to use this animation you have to choose the stroke till the point it fills their border entirely to give better look.

--user-stroke-dasharray: 830;
`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextForm.jsx'
        />

        {/* SyntaxHighlighter for JSX code display */}

        <CodeSnippet
          code={
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
          heading='Copy Paste in the Main.css or Index.css File'
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextForm.jsx'
        />

        <CodeSnippet
          code={
            `
import { TextForm } from '@/components/EFFECTS/TextAnimations/TextForm'
`
          }
          heading='Import in React'
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextForm.jsx'
        />

        <CodeSnippet
          code={
            `
<TextForm fill={'#ffff'} duration={'5s'} />
`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextForm.jsx'
        />

        <TextForm />

        <CodeSnippet
          code={
            `
<TextForm />
`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextForm.jsx'
        />

        <TextForm duration={'4s'} />

        <CodeSnippet
          code={
            `
<TextForm duration={'4s'} />
`
          }
          githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/TextAnimations/TextForm.jsx'
        />

      </div>
    </Wrapper>
  )
}
