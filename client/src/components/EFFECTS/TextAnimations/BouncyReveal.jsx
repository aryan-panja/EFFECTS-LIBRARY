import { cn } from '@/lib/utils'
import React from 'react'

export const BouncyReveal = ({children, className, color = '#03a9f4', stroke = color,...props}) => {

  return (
    <div className={cn(`content relative text-[50px]`, className)} {...props}>
        <h1 className='absolute translate-x-[-50%] text-transparent' style={{WebkitTextStroke: `1px ${stroke}`}}>{children}</h1>
        <h1 className={`absolute translate-x-[-50%] text-[${color}] animate-bouncy-reveal`} style={{WebkitTextStroke: `1px ${stroke}`}}>{children}</h1>
    </div>
  )
}
