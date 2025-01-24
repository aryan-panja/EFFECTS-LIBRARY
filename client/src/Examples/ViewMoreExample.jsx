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
import { Preview } from '@/components/Preview'

export const ViewMoreExample = () => {
    return (

        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">View More</h1>
                <p className="my-8 roboto-regular">
                    Here is the View More example. Add this element to your website to show more content when the user clicks on the Read More button.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <Preview>
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
                </Preview>

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet
                    code={
                        `
import {
    ViewMore,
    ViewMoreContent,
    ViewMoreHeader,
    ViewMoreImage,
    ViewMoreTrigger
} from '@/components/EFFECTS/ViewMore/ViewMore'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/ViewMore/ViewMore.jsx'
                />

                <CodeSnippet
                    code={`
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
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/ViewMore/ViewMore.jsx'
                />

            </div>
        </Wrapper>
    )
}
