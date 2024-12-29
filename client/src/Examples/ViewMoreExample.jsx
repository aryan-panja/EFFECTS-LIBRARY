import React from 'react'
import {
    ViewMore,
    ViewMoreContent,
    ViewMoreHeader,
    ViewMoreImage,
    ViewMoreTrigger
} from '@/components/EFFECTS/ViewMore/ViewMore'
import { CodeSnippet } from '@/components/CodeSnippet'
import { Wrapper } from '@/components/Wrapper'

export const ViewMoreExample = () => {
    return (

        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">View More</h1>
                <p className="my-8 roboto-regular">
                    Here is the Parallax Image example. Switch between different components to see more effects and layouts.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <ViewMore>
                    <ViewMoreImage />
                    <ViewMoreTrigger>
                        <ViewMoreHeader>
                            Read More
                        </ViewMoreHeader>
                        {/** Content will appear here when expanded */}
                        <ViewMoreContent className='text-xl'>
                            This is some additional information that appears when the content is expanded.
                        </ViewMoreContent>
                    </ViewMoreTrigger>
                </ViewMore>

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet code={
                    `
import {
    ViewMore,
    ViewMoreContent,
    ViewMoreHeader,
    ViewMoreImage,
    ViewMoreTrigger
} from '@/components/EFFECTS/ViewMore/ViewMore'
`
                } heading='Import in React' />

                <CodeSnippet code={`
<ViewMore>
    <ViewMoreImage />
    <ViewMoreTrigger>
        <ViewMoreHeader>
            Read More
        </ViewMoreHeader>
        {/** Content will appear here when expanded */}
        <ViewMoreContent className='text-xl'>
            This is some additional information that appears when the content is expanded.
        </ViewMoreContent>
    </ViewMoreTrigger>
</ViewMore>`
                } />

            </div>
        </Wrapper>
    )
}
