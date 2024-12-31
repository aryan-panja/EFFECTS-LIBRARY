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
                <p className="my-8 roboto-regular">
                    Here is the Rating example. Add this element to your project to get ratings from users.
                </p>
            </div>

            <div className="mx-auto">
                <h1 className="text-lg font-bold mb-4">Single Selected Rating</h1>

            </div>

            <div className="flex flex-col items-center justify-center">

                <SingleRating list={list} />

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet
                    code={
                        `
import { SingleRating } from '@/components/EFFECTS/Rating/SingleRating'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Rating/SingleRating.jsx'
                />

                <CodeSnippet
                    code={
                        `
const list = [
                [1, '😀'],
                [2, '😃'],
                [3, '😄'],
                [4, '😁']
     ]

<SingleRating list={list} />
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/Rating/SingleRating.jsx'
                />
            </div>
        </Wrapper>
    )
}
