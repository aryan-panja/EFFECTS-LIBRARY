import React, { useState } from 'react'
import { CustomCursor } from '@/components/EFFECTS/CustomCursor/CustomCursor'
import { Moon, Star, Sun, Waves } from 'lucide-react'
import { set } from 'lodash'

export const Test = () => {

  const gridItems = [
    [
      {
        text: "MOON",
        icon: <Moon className="w-full h-full" />,
        image: "https://media.istockphoto.com/id/1985554487/photo/very-high-resolution-full-moon-pitch-black-sky-and-plenty-of-room-for-contrast-brightness-and.jpg?s=2048x2048&w=is&k=20&c=RE_7_SDVSuusAhsi5yofQE1kjN1b_tGbbsPMYfYATR4=",
        set: 'image',
        color: "rgb(226, 232, 240)",
        glowColor: "rgba(226, 232, 240, 0.35)",
      },
      {
        text: "STAR",
        icon: <Star className="w-full h-full" />,
        set: 'icon',
        color: "rgb(255, 200, 50)",
        glowColor: "rgba(255, 200, 50, 0.35)",
      },
    ],
    [
      {
        text: "SUN",
        image: "https://media.istockphoto.com/id/1354219060/vector/sun-vector-cartoon-vector-logo-for-web-design-vector-illustration.jpg?s=2048x2048&w=is&k=20&c=b44iXsy-8UzqT2Eh7s7BziX9WAENp9wBpxFoAQKVN5k=",
        set: 'image',
        color: "rgb(255, 150, 50)",
        glowColor: "rgba(255, 150, 50, 0.35)",
      },
      {
        text: "RIVER",
        icon: <Waves className="w-full h-full" />,
        set: 'icon',
        color: "rgb(100, 200, 255)",
        glowColor: "rgba(100, 200, 255, 0.35)",
      },
    ],
    [
      {
        text: "BEACH",
        icon: <Waves className="w-full h-full" />,
        set: 'text',
        color: "rgb(100, 200, 255)",
        glowColor: "rgba(100, 200, 255, 0.35)",
      },
      {
        text: "FOREST",
        icon: <Waves className="w-full h-full" />,
        set: 'text',
        color: "rgb(100, 200, 255)",
        glowColor: "rgba(100, 200, 255, 0.35)",
      },
    ],
  ]

  const [activeItem, setActiveItem] = React.useState(null)

  return (
    <div className="min-h-screen bg-black p-8">
      <CustomCursor
        className={'z-50'}
        icon={activeItem?.icon}
        image={activeItem?.image}
        text={activeItem?.text}
        onHoverMouseEnable={activeItem?.set}
        color={activeItem?.color}
        glowColor={activeItem?.glowColor}
        size={48}
        glowSize={64}
      />
      <div className="grid gap-8">
        {gridItems.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-2 gap-8">
            {row.map((item, colIndex) => (
              <div
                key={colIndex}
                className="group relative cursor-none"    // if you want to show the cursor on hover then set this to 'cursor-pointer'
                onMouseEnter={() => setActiveItem(item)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <h1
                  className="text-[12vw] font-bold tracking-tighter text-white transition-colors duration-300 group-hover:text-opacity-0"
                  style={{
                    WebkitTextStroke: `2px ${item.color}`,
                  }}
                >
                  {
                    item.image ? <img src={item.image} /> : item.text
                  }
                </h1>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
