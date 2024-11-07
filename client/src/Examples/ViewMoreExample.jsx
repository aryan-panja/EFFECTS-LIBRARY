import React from 'react'
import { ViewMore, ViewMoreContent, ViewMoreHeader, ViewMoreImage, ViewMoreTrigger } from '@/components/EFFECTS/ViewMore/ViewMore'
import { CodeSnippet } from '@/components/CodeSnippet'

export const ViewMoreExample = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
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

            <CodeSnippet code={`<ViewMore>
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
</ViewMore>`} />

        </div>
    )
}
