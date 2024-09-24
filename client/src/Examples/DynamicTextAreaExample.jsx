import { DynamicTextArea } from '@/components/EFFECTS/DynamicTextArea/DynamicTextArea'
import React from 'react'

export const DynamicTextAreaExample = () => {
    return (
        <div className='w-full flex flex-col gap-y-24 items-center justify-center'>
            <DynamicTextArea />
            <DynamicTextArea targetCharacter='c' targetWord='ary'/>
        </div>
    )
}
