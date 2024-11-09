import { ExpandableInfoCard, ExpandableInfoCardTextAfter, ExpandableInfoCardTextBefore } from '@/components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles'
import React from 'react'
import test1 from "@/assets/photos/1.jpg"
import { CodeSnippet } from '@/components/CodeSnippet'

export const OnHoverBigRectanglesExample = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <ExpandableInfoCard src={test1}>
                <ExpandableInfoCardTextBefore>
                    <h1>Aryan Panja</h1>
                </ExpandableInfoCardTextBefore>
                <ExpandableInfoCardTextAfter>
                    <h1>Aryan Panja</h1>
                    <p className='text-sm'>A student of 3<sub>rd</sub> Year</p>
                </ExpandableInfoCardTextAfter>
            </ExpandableInfoCard>

            <CodeSnippet code={`
<ExpandableInfoCard src={test1}>
    <ExpandableInfoCardTextBefore>
        <h1>Aryan Panja</h1>
    </ExpandableInfoCardTextBefore>
    <ExpandableInfoCardTextAfter>
        <h1>Aryan Panja</h1>
        <p className='text-sm'>A student of 3<sub>rd</sub> Year</p>
    </ExpandableInfoCardTextAfter>
</ExpandableInfoCard>`} />
        </div>
    )
}
