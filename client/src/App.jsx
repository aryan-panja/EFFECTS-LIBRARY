import { BrowserRouter, Routes } from "react-router-dom"
import CircularGalleryEffect from "./components/EFFECTS/CircularGalleryEffect/CircularGalleryEffect"
import { HorizontalAutoScroll } from "./components/EFFECTS/HorizontalAutoScroll/HorizontalAutoScroll"
import { OnHoverBigRectangles } from "./components/EFFECTS/OnHoverBigRectangles/OnHoverBigRectangles"
import { ParallaxImage } from "./components/EFFECTS/Parallax/ParallaxImage"
import { ParallaxImageButton } from "./components/EFFECTS/Parallax/ParallaxImageButton"
import { StackedCards } from "./components/EFFECTS/StackedCards/StackedCards"

function App() {

  return (
    <BrowserRouter>
      <div className="w-full">
          {/* <CircularGalleryEffect />  */}
          {/* <OnHoverBigRectangles /> */}
          {/* <HorizontalAutoScroll /> */}
          {/* <StackedCards /> */}
          <ParallaxImage className={'rounded-3xl'}/>
          <ParallaxImageButton link={'www.google.com'} >hello</ParallaxImageButton>
      </div>
    </BrowserRouter>
  )
}

export default App
