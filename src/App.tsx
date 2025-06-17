import { Routes, Route } from "react-router-dom";
import db from './db/db.json';

import Hd from './component/Hd';
import Banner from './component/Banner';
import About from './component/About';

import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import 'bootstrap-icons/font/bootstrap-icons.css';

import PassPage from './Pages/PassPage';
import EventPage from './Pages/EventPage';

function MainPage() {
  return (
    <div className="syproject">
      <Hd datainfo={db.navi} id="hd" cls="fixed-top border-bottom bg-white" />
      <Banner
          datainfo={db.mainSlider}
          id="mainSlider"
          cls="relative w-full h-[40vw] overflow-hidden" 
        />
      <About id="about" cls="" />
      <Portfolio id="portfolio" cls="" />
      <Contact id="contact" cls="bg-light" />
    </div>
  );
}

function App() {
  return (
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/portfolio/pass" element={<PassPage />} />
    <Route path="/portfolio/event" element={<EventPage />} />
  </Routes>
  )
}

export default App
