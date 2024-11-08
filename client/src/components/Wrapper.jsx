import React from 'react'

export const Wrapper = ({children}) => {
  return (
    <div className="w-full py-12">
      <div className='max-w-3xl'>
        {children}
      </div>
    </div>
  )
}
