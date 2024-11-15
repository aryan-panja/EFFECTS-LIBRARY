import {
    ExpandableInfoCard,
    ExpandableInfoCardTextAfter,
    ExpandableInfoCardTextBefore
} from '@/components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles'
import React from 'react'
import test1 from "@/assets/photos/1.jpg"
import { CodeSnippet } from '@/components/CodeSnippet'
import { Wrapper } from '@/components/Wrapper'

export const OnHoverBigRectanglesExample = () => {
    return (

        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">On Hover Big Rectangles</h1>
                <p className="my-8 text-zinc-300">
                    Here is the Parallax Image example. Switch between different components to see more effects and layouts.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <ExpandableInfoCard src={test1}>
                    <ExpandableInfoCardTextBefore>
                        <h1>Aryan Panja</h1>
                    </ExpandableInfoCardTextBefore>
                    <ExpandableInfoCardTextAfter>
                        <h1>Aryan Panja</h1>
                        <p className='text-sm'>A student of 3<sub>rd</sub> Year</p>
                    </ExpandableInfoCardTextAfter>
                </ExpandableInfoCard>

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet code={
                    `
import {
    ExpandableInfoCard,
    ExpandableInfoCardTextAfter,
    ExpandableInfoCardTextBefore
} from '@/components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles'
`
                } heading='Import in React' />

                <CodeSnippet code={`
<ExpandableInfoCard src={test1}>
    <ExpandableInfoCardTextBefore>
        <h1>Aryan Panja</h1>
    </ExpandableInfoCardTextBefore>
    <ExpandableInfoCardTextAfter>
        <h1>Aryan Panja</h1>
        <p className='text-sm'>A student of 3<sub>rd</sub> Year</p>
    </ExpandableInfoCardTextAfter>
</ExpandableInfoCard>
`
                } />

            </div>
        </Wrapper>

    )
}
