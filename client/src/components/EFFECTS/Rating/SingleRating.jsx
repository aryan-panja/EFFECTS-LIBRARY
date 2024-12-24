import { set } from 'lodash'
import React, { useState } from 'react'

export const SingleRating = ({list = [
    [1, '😀'],
    [2, '😃'],
    [3, '😄'],
    [4, '😁']
  ]}) => {

    const [selected, setSelected] = useState(null)
    
      const handleSelect = (item) => {
        setSelected(selected === item ? null : item)
      }

    return (
        <div div className='flex gap-4' >
            {/* Single Selection Review */}
            {
                list.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center text-white ${selected === item[0] ? 'scale-110' : 'hover:scale-110 duration-500 transition-all'} group text-4xl cursor-pointer`}
                        onClick={() => handleSelect(item[0])}
                    >
                        <p className={`${selected === item[0] ? 'blur-0' : 'blur-[1px] group-hover:blur-0'} duration-700`}>{item[1]}</p>
                        <p className=''>{item[0]}</p>
                    </div>
                ))
            }
            {/* 
1. there will be horizontal stacking
2. emojis on above and no. down
3. on hovering on any of the no. or emoji will make them scale up(both no. and emoji)
4. on hovering there will light color
5. on clicking there will be full color to show selection
    */}
        </div>

    )
}
