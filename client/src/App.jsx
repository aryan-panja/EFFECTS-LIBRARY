import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Component from "./pages/Components"
import { Test } from "./pages/Test"
import { AboutMe } from "./components/EFFECTS/AboutMe/AboutMe"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Component />} />
        <Route path="AboutMe" element={<AboutMe />} />
        <Route path="/test" element={<Test targetCharacter="a" targetWord="aryan"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
