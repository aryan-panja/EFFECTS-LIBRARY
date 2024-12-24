import { CodeSnippet } from '@/components/CodeSnippet'
import { SingleRating } from '@/components/EFFECTS/Rating/SingleRating'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

export const RatingsExample = () => {

    const list = [
        [1, '😀'],
        [2, '😃'],
        [3, '😄'],
        [4, '😁']
    ]

    return (
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Ratings</h1>
                <p className="my-8 text-zinc-300">
                    Here is the Parallax Image example. Switch between different components to see more effects and layouts.
                </p>
            </div>

            <div className="mx-auto">
                <h1 className="text-lg font-bold mb-4">Single Selected Rating</h1>
                
            </div>

            <div className="flex flex-col items-center justify-center">

                <SingleRating list={list} />

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet code={
                    `
import { SingleRating } from '@/components/EFFECTS/Rating/SingleRating'
`
                } heading='Import in React' />

                <CodeSnippet code={
                    `
const list = [
                [1, '😀'],
                [2, '😃'],
                [3, '😄'],
                [4, '😁']
     ]

<SingleRating list={list} />
`
                } />
            </div>
        </Wrapper>
    )
}
