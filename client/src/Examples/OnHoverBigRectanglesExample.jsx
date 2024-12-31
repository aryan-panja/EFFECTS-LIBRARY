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
                <p className="my-8 roboto-regular">
                    Here is the On HOver Big Rectangles example. Just make your website more interactive with displaying more information on hover in less space.
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
                <CodeSnippet
                    code={
                        `
import {
    ExpandableInfoCard,
    ExpandableInfoCardTextAfter,
    ExpandableInfoCardTextBefore
} from '@/components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles.jsx'
                />

                <CodeSnippet
                    code={`
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
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles.jsx'
                />

            </div>
        </Wrapper>

    )
}
