import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ParallaxImageExample } from "@/Examples/ParallaxImageExample"
import { ParallaxImageButtonExample } from "@/Examples/ParallaxImageButtonExample"
import { OnHoverBigRectanglesExample } from "@/Examples/OnHoverBigRectanglesExample"
import { StackedCardsExample } from "@/Examples/StackedCardsExample"
import { CircularGalleryEffectExample } from "@/Examples/CircularGalleryEffectExample"
import { AboutMe } from "@/components/EFFECTS/AboutMe/AboutMe"
import { ScrollFadeInExample } from "@/Examples/ScrollFadeInExample"
import { DynamicTextAreaExample } from "@/Examples/DynamicTextAreaExample"

export default function Component() {
  const [selectedComponent, setSelectedComponent] = useState("ParallaxImage")
  const components = {
    ParallaxImage: <ParallaxImageExample />,
    ParallaxImageButton: <ParallaxImageButtonExample />,
    OnHoverBigRectangles: <OnHoverBigRectanglesExample />,
    StackedCards: <StackedCardsExample />,
    CircularGalleryEffect: <CircularGalleryEffectExample />,
    ScrollFadeIn: <ScrollFadeInExample />,
    DynamicTextArea: <DynamicTextAreaExample />,
  }
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="flex flex-col border-r bg-muted/40">
        <div className="flex h-[60px] items-center border-b px-6">
          <h1 className="text-lg font-semibold">Components</h1>
        </div>
        <nav className="flex-1 overflow-auto">
          <ul className="grid gap-1 p-4">
            {Object.keys(components).map((component) => (
              <li key={component}>
                <Button
                  variant={selectedComponent === component ? "secondary" : "ghost"}
                  className="w-full justify-start px-4 py-2 text-left"
                  onClick={() => setSelectedComponent(component)}
                >
                  {component}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex flex-col">
        <div className="flex h-[60px] items-center border-b bg-muted/40 px-6">
          <h2 className="text-lg font-semibold">{selectedComponent}</h2>
        </div>
        <div>{components[selectedComponent]}</div>
      </div>
    </div>
  )
}