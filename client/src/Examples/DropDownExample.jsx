import React from 'react'
import { Wrapper } from '@/components/Wrapper'
import {
    DropDown,
    DropDownItem,
    DropDownMenu,
    DropDownTrigger
} from '@/components/EFFECTS/DropDown/DropDown'
import { CodeSnippet } from '@/components/CodeSnippet'


export const DropDownExample = () => {
    return (
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Parallax Image</h1>
                <p className="my-8 roboto-regular">
                    Here is the Parallax Image example. Switch between different components to see more effects and layouts.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <DropDown>
                    <DropDownTrigger>Click me</DropDownTrigger>
                    <DropDownMenu>
                        <DropDownItem>Item 1</DropDownItem>
                        <DropDownItem>Item 2</DropDownItem>
                        <DropDownItem>Item 3</DropDownItem>
                    </DropDownMenu>
                </DropDown>

                {/* SyntaxHighlighter for JSX code display */}
                <CodeSnippet code={
                    `
import {
    DropDown,
    DropDownItem,
    DropDownMenu,
    DropDownTrigger
} from '@/components/EFFECTS/DropDown/DropDown'
`
                } heading='Import in React' />

                <CodeSnippet code={
                    `
<DropDown>
    <DropDownTrigger>Click me</DropDownTrigger>
    <DropDownMenu>
        <DropDownItem>Item 1</DropDownItem>
        <DropDownItem>Item 2</DropDownItem>
        <DropDownItem>Item 3</DropDownItem>
    </DropDownMenu>
</DropDown>
`
                } />
            </div>
        </Wrapper>
    )
}
