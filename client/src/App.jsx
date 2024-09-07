import CircularGalleryEffect from "./components/EFFECTS/CircularGalleryEffect/CircularGalleryEffect"
import { HorizontalAutoScroll } from "./components/EFFECTS/HorizontalAutoScroll/HorizontalAutoScroll"
import { OnHoverBigRectangles } from "./components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles"

function App() {

  return (
    <div className="w-full">
      {/* <CircularGalleryEffect />  */}
      {/* <OnHoverBigRectangles /> */}
      <HorizontalAutoScroll />
    </div>
  )
}

export default App
