import { cn } from '@/lib/utils'
import React from 'react'

export const RevealAnimation = ({className, src, alt, animation='animate-clip-animation-1', ...props}) => {
  return (
    <img
      className={cn(`${animation ? animation : 'animate-clip-animation-1'}`, className)}
      src={src || "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"}
      alt={alt || "image"}
      {...props}
    />
    // <img 
    //     className={cn("animate-clip-animation-2", className)} 
    //     src={src || "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"} 
    //     alt={alt || "image"} 
    //     {...props}
    // />
  )
}
