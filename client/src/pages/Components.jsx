import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ParallaxImageExample } from "@/Examples/ParallaxImageExample"
import { ParallaxImageButtonExample } from "@/Examples/ParallaxImageButtonExample"
import { OnHoverBigRectanglesExample } from "@/Examples/OnHoverBigRectanglesExample"
import { StackedCardsExample } from "@/Examples/StackedCardsExample"
import { CircularGalleryEffectExample } from "@/Examples/CircularGalleryEffectExample"
import { ScrollFadeInExample } from "@/Examples/ScrollFadeInExample"
import { DynamicTextAreaExample } from "@/Examples/DynamicTextAreaExample"
import { SearchBarExamples } from "@/Examples/SearchBarExamples"
import { ViewMoreExample } from "@/Examples/ViewMoreExample"
import { Search, Menu, X, Code, Eye } from 'lucide-react'

export default function Component() {
  const [selectedComponent, setSelectedComponent] = useState("Parallax Image")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('preview')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const components = {
    "Parallax Image": <ParallaxImageExample />,
    "Parallax Image Button": <ParallaxImageButtonExample />,
    "OnHover Big Rectangles": <OnHoverBigRectanglesExample />,
    "Dynamic TextArea": <DynamicTextAreaExample />,
    "Search Bar": <SearchBarExamples />,
    "View More": <ViewMoreExample />,
  }

  return (
    <div className="flex bg-black text-white">
      {/* Sidebar */}
      <div className="sticky top-14 hidden h-[calc(100dvh-theme(spacing.16))] w-[220px] shrink-0 pt-8 md:block lg:pt-12 overflow-y-auto">
        <nav className="p-4">
          <ul>
            {Object.keys(components).map((component, index) => (
              <h1
                key={index}
                href="#"
                className={`py-2 px-4 my-1 hover:text-white cursor-pointer ${selectedComponent === component ? 'text-white' : 'text-[#cfcfcf]'}`}
                onClick={() => setSelectedComponent(component)}
              >
                {component}
              </h1>
            ))}
            {/* {
              Array(20).fill().map((_, index) => (
                <h1
                  key={index}
                  className={`py-2 px-4 my-1 hover:text-white cursor-pointer ${selectedComponent === _ ? 'text-white' : 'text-[#cfcfcf]'}`}
                  onClick={() => setSelectedComponent(index+1)}
                >
                  {index+1}
                </h1>
              ))
            } */}
          </ul>
        </nav>
      </div>


      {/* Main Content */}
      <div className="flex-1 max-md:w-full flex flex-col overflow-hidden">
        <main className="flex-1 max-md:w-full overflow-y-auto p-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-xl font-bold mb-4">{selectedComponent}</h1>
            <p className="mb-8 text-zinc-300">
              Here is the {selectedComponent} example. Switch between different components to see more effects and layouts.
            </p>
            {components[selectedComponent]}
          </div>
        </main>
      </div>

    </div>
  )
}
