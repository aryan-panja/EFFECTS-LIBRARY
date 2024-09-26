import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Component from "./pages/Components"
import { Test } from "./pages/Test"
import { AboutMe } from "./components/EFFECTS/AboutMe/AboutMe"
import { Fonts } from "./pages/Fonts"
import { NavBar } from "./components/navigation/NavBar"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Component />} />
          <Route path="/fonts" element={<Fonts />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="/test" element={<Test targetCharacter="a" targetWord="aryan" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
