import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Component from "./pages/Components";
import { Test } from "./pages/Test";
import { AboutMe } from "./components/EFFECTS/AboutMe/AboutMe";
import { Fonts } from "./pages/Fonts";
import { NavBar } from "./components/navigation/NavBar";
import { LandingPageCSS } from "./pages/css-effects/LandingPageCSS";
import { PinterestEffect } from "./pages/css-effects/PinterestEffect";
import { Comments } from "./pages/css-effects/Comments";
import { SideBar } from "./components/navigation/SideBar";
import { Analytics } from "@vercel/analytics/react"
import { ReferMe } from "./components/notifications/ReferMe";
import { Advertise } from "./components/notifications/Advertise";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar is fixed */}
      <NavBar />
      <ReferMe />
      <div className="pixelify-sans-text">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fonts" element={<Fonts />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/test" element={<Test />} />
          <Route path="/work" element={<Advertise />} />
          <Route path="/css-effects" element={<LandingPageCSS />} />
          <Route path="/css-effects/pinterest-effect" element={<PinterestEffect />} />
          <Route path="/css-effects/comments" element={<Comments />} />

          {/* Components section with sidebar */}
          <Route path="/components/:component" element={
            <SideBar>
              <Component />
            </SideBar>
          } />
        </Routes>

        <Analytics/>
      </div>
    </BrowserRouter>
  );
}

export default App;
