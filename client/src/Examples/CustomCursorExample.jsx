import React from 'react'
import { CodeSnippet } from '@/components/CodeSnippet'
import { Wrapper } from '@/components/Wrapper'
import { CustomCursor } from '@/components/EFFECTS/CustomCursor/CustomCursor'
import { Moon, Star, Sun, Waves } from 'lucide-react'

export const CustomCursorExample = () => {

    const gridItems = [
        [
            {
                text: "MOON",
                icon: <Moon className="w-full h-full" />,
                image: "https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                image: "https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                icon: <Sun className="w-full h-full" color='white' />,
                set: 'icon',
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
                text: "NATURE",
                image: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                set: 'text',
                color: "rgb(100, 200, 255)",
                glowColor: "rgba(100, 200, 255, 0.35)",
                className: 'text-2xl'
            },
            {
                text: "TURTLE",
                image: "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                set: 'text',
                color: "rgb(100, 200, 255)",
                glowColor: "rgba(100, 200, 255, 0.35)",
                className: 'text-lg bg-[#029aa3] font-semibold'
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
        <Wrapper>
            <div className="mx-auto">
                <h1 className="text-xl font-bold mb-4">Custom Cursor</h1>
                <p className="my-8 roboto-regular">
                    Here is the Custom Cursor example. Add the custom cursor where you can show the <b>icon</b>, <b>tooltip</b> or the <b>image</b> instead of boring cursor while hovering.
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">

                <CustomCursor
                    className={activeItem?.className || ''}
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
                        <div key={rowIndex} className="grid grid-cols-2 gap-8 gap-x10">
                            {row.map((item, colIndex) => (
                                <div
                                    key={colIndex}
                                    className="group relative cursor-none"    // if you want to show the cursor on hover then set this to 'cursor-pointer'
                                    onMouseEnter={() => setActiveItem(item)}
                                    onMouseLeave={() => setActiveItem(null)}
                                >
                                    <h1
                                        className="text-[8vw] font-bold tracking-tighter text-white transition-colors duration-300 group-hover:text-opacity-0"
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

                <CodeSnippet
                    code={
                        `
import { CustomCursor } from '@/components/EFFECTS/CustomCursor/CustomCursor'
`
                    }
                    heading='Import in React'
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/CustomCursor/CustomCursor.jsx'
                />

                <CodeSnippet
                    code={
                        `
<CustomCursor
    className={activeItem?.className || ''}
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
        <div key={rowIndex} className="grid grid-cols-2 gap-8 gap-x10">
            {row.map((item, colIndex) => (
                <div
                    key={colIndex}
                    className="group relative cursor-none"    // if you want to show the cursor on hover then set this to 'cursor-pointer'
                    onMouseEnter={() => setActiveItem(item)}
                    onMouseLeave={() => setActiveItem(null)}
                >
                    <h1
                        className="text-[8vw] font-bold tracking-tighter text-white transition-colors duration-300 group-hover:text-opacity-0"
                        style={{
                            WebkitTextStroke: "2px item.color",
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
`
                    }
                    githubLink='https://github.com/aryan-panja/EFFECTS-LIBRARY/blob/main/client/src/components/EFFECTS/CustomCursor/CustomCursor.jsx'
                />

                <div className="mx-auto">
                    <h1 className="text-xl font-bold mb-4">Description of the Usage of the Component</h1>
                    <p className="my-8 roboto-regular">
                        <ul className="list-disc list-inside flex flex-col space-y-2">
                            <li>Add the Custom Cursor Component where you want to apply the custom cursor.</li>
                            <li>
                                You have the option to apply Custom Cursors in various places such as:
                                <ul className="list-disc list-inside ml-4 mt-2 felx flex-col space-y-3">
                                    <li>
                                        Images:
                                        <ul className="list-disc list-inside ml-4 mt-2 felx flex-col space-y-3">
                                            <li>Image</li>
                                            <li>Icon</li>
                                            <li>Tooltip</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Text:
                                        <ul className="list-disc list-inside ml-4 mt-2 felx flex-col space-y-3">
                                            <li>Image</li>
                                            <li>Icon</li>
                                            <li>Tooltip</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Initialize the <code className='bg-[#1d1d1d] px-2 mr-2'>React.useState</code> to save the cursor to be shown in that area.</li>
                            <li>
                                On the target area, initialize the following functions:
                                <ul className="list-disc list-inside ml-4 mt-2 felx flex-col space-y-3">
                                    <li><code className='bg-[#1d1d1d] px-2 mr-2'>onMouseEnter={`{() => setActiveItem(item)}`}</code></li>
                                    <li><code className='bg-[#1d1d1d] px-2 mr-2'>onMouseLeave={`{() => setActiveItem(null)}`}</code></li>
                                </ul>
                            </li>
                            <li>
                                In the items list, define objects with the following properties:
                                <ul className="list-disc list-inside ml-4 mt-2 felx flex-col space-y-3">
                                    <li><code className='bg-[#1d1d1d] px-2 mr-2'>text</code> : Displays the tooltip text.</li>
                                    <li><code className='bg-[#1d1d1d] px-2 mr-2'>icon</code> : Displays the icon.</li>
                                    <li><code className='bg-[#1d1d1d] px-2 mr-2'>image</code> : Displays the image.</li>
                                    <li><code className='bg-[#1d1d1d] px-2 mr-2'>set</code> : Specify either <code className='bg-[#1d1d1d] px-2 mr-2'>'icon'</code>, <code className='bg-[#1d1d1d] px-2 mr-2'>'image'</code>, or <code className='bg-[#1d1d1d]'>'text'</code> to determine the item to display.</li>
                                    <li><code className='bg-[#1d1d1d] px-2 mr-2'>color</code> : Specifies the color of the cursor.</li>
                                    <li><code className='bg-[#1d1d1d] px-2 mr-2'>glowColor</code> : Specifies the color of the glow.</li>
                                    <li><code className='bg-[#1d1d1d] px-2 mr-2'>className</code> : Applies a custom className to the cursor, tooltip, or icon.</li>
                                </ul>
                            </li>
                        </ul>
                    </p>
                </div>

            </div >
        </Wrapper >
    )
}