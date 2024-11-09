import { useParams } from "react-router-dom";
import { ParallaxImageExample } from "@/Examples/ParallaxImageExample";
import { ParallaxImageButtonExample } from "@/Examples/ParallaxImageButtonExample";
import { OnHoverBigRectanglesExample } from "@/Examples/OnHoverBigRectanglesExample";
import { DynamicTextAreaExample } from "@/Examples/DynamicTextAreaExample";
import { SearchBarExamples } from "@/Examples/SearchBarExamples";
import { ViewMoreExample } from "@/Examples/ViewMoreExample";
import { CalendarExample } from "@/Examples/CalendarExample";
import { TextShineExample } from "@/Examples/TextShineExample";
import { TextAuroraExample } from "@/Examples/TextAuroraExample";

export default function Component() {

  const { component } = useParams();

  const components = {
    "parallax-image": <ParallaxImageExample />,
    "parallax-image-button": <ParallaxImageButtonExample />,
    "onhover-big-rectangles": <OnHoverBigRectanglesExample />,
    "dynamic-textarea": <DynamicTextAreaExample />,
    "search-bar": <SearchBarExamples />,
    "view-more": <ViewMoreExample />,
    "calendar": <CalendarExample />,
    "text-shine": <TextShineExample />,
    "text-aurora": <TextAuroraExample />,
  };

  // Get the selected component based on the URL parameter
  const selectedComponent = !component ? 'parallax-image' : components[component];

  // console.log("component", component);

  return (
    <div className="flex-1 max-md:w-full flex flex-col overflow-hidden">
      <main className="flex-1 max-md:w-full overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto">
          {selectedComponent ? selectedComponent : <p>Component not found</p>}
        </div>
      </main>
    </div>
  );
}
