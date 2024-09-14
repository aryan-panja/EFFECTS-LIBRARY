import CircularGalleryEffect from "./components/EFFECTS/CircularGalleryEffect/CircularGalleryEffect"
import { HorizontalAutoScroll } from "./components/EFFECTS/HorizontalAutoScroll/HorizontalAutoScroll"
import { OnHoverBigRectangles } from "./components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles"
import { StackedCards } from "./components/EFFECTS/StackedCards/StackedCards"

function App() {

  return (
    <div className="w-full">
      {/* <CircularGalleryEffect />  */}
      {/* <OnHoverBigRectangles /> */}
      <HorizontalAutoScroll />
      <StackedCards />
    </div>
  )
}

export default App
