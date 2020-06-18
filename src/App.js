import React from 'react';
import './styles/index.css';

import Intro from "./components/Intro";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Popup from "./components/Certificates/popup";


function App() {
  return (
      <div>
        <Intro />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Certificates />
        <Contact />
        <Popup />
      </div>
  );
}

export default App;