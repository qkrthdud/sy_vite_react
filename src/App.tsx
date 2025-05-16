import { Routes, Route } from "react-router-dom";
import db from './db/db.json';

import Hd from './component/Hd';
import Banner from './component/Banner';
import About from './component/About';
import Skill from './component/Skills';

import Portfolio from './component/Portfolio';
import Preinterview from './component/Preinterview';
import Contact from './component/Contact';
import 'bootstrap-icons/font/bootstrap-icons.css';

import PassPage from './Pages/PassPage';
import EventPage from './Pages/EventPage';

function MainPage() {
  return (
    <div className="syproject">
      <Hd datainfo={db.navi} id="hd" cls="fixed-top border-bottom bg-white" />
      <Banner datainfo={db.mainSlider} id="mainSlider" cls="vh-100" />
      <About id="about" cls="vh-100" />
      <Skill id="skill" cls="skills section py-12 bg-gray-50 vh-100" />
      <Portfolio id="portfolio" cls="vh-100" />
      <Preinterview id="preInterview" datainfo={db.preinterview} cls="vh=100 p-5" />
      <Contact id="contact" cls="vh-100 bg-light" />
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
