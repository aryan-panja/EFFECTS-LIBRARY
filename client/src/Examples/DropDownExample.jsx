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
                <h1 className="text-xl font-bold mb-4">DropDown</h1>
                <p className="my-8 roboto-regular">
                    Here is the DropDown example. Add the DropDown component to your project and customize it as needed.
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

                <CodeSnippet
                    code={
                        `
import {
    DropDown,
    DropDownItem,
    DropDownMenu,
    DropDownTrigger
} from '@/components/EFFECTS/DropDown/DropDown'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/DropDown/DropDown.jsx'
                />

                <CodeSnippet
                    code={
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
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/DropDown/DropDown.jsx'
                />
            </div>
        </Wrapper>
    )
}
