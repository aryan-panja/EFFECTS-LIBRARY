import * as React from "react"
import { cn } from "@/lib/utils"

export function CustomCursor({
    color = "rgb(255, 200, 50)",
    size = 10,
    icon,
    image,
    text,
    onHoverMouseEnable,         
    // if you want to enable icon on hover then set this to 'icon' or 
    // if you want to enable image on hover then set this to 'image'
    // if you want to enable text on hover then set this to 'text'

    offSetX = 10,
    offSetY = 10,
    glowColor = "rgba(255, 200, 50, 0.35)",
    glowSize = 24,
    className,
    ...props
}) {
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseEnter = () => setIsVisible(true)
        const handleMouseLeave = () => setIsVisible(false)

        document.addEventListener("mousemove", updatePosition)
        document.addEventListener("mouseenter", handleMouseEnter)
        document.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            document.removeEventListener("mousemove", updatePosition)
            document.removeEventListener("mouseenter", handleMouseEnter)
            document.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    if (!isVisible || (!icon && !image && !text)) return null

    if (onHoverMouseEnable === 'text') {
        // console.log("Mouse in text area")
        return (
            <div
                className='fixed z-50'
                style={{
                    top: `${position.y}px`,
                    left: `${position.x}px`,
                    transform: `translate(${offSetX}px, ${offSetY}px)`, // Offset the text slightly from the cursor
                }}
                {...props}
            >
                <span
                    className={cn("bg-white text-black px-2 py-1 rounded shadow inline-block", className)}
                    style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                >
                    {text}
                </span>
            </div>
        )
    }

    return (
        <div
            className={cn(" fixed left-0 top-0 z-50", className)}
            style={{
                transform: `translate(${position.x - size / 2}px, ${position.y - size / 2}px)`,
            }}
            {...props}
        >
            <div
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 rounded-full overflow-hidden"
                style={{
                    width: size,
                    height: size,
                    color: color,
                }}
            >
                {
                    onHoverMouseEnable === 'image' ? (
                        <img src={image || "/placeholder.svg"} alt="" width={size} height={size} className="object-cover" />
                    ) : onHoverMouseEnable === 'icon' ? (
                        icon
                    ) : null
                }
            </div>
            <div
                className="absolute rounded-full transition-transform duration-100"
                style={{
                    width: glowSize,
                    height: glowSize,
                    backgroundColor: glowColor,
                    transform: `translate(${-glowSize / 2}px, ${-glowSize / 2}px)`,
                    filter: "blur(20px)",
                }}
            />
        </div>
    )
}

